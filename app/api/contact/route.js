import { Resend } from 'resend'
import clientPromise from '@/lib/mongodb'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json()

    if (!email || !subject || !message) {
      return Response.json({ success:false, message: 'Please fill in all fields' }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("bitlinks")
    const collection = db.collection("email")

    // same email+subject+message check to prevent duplicate submissions
    const existing = await collection.findOne({ email, subject, message })
    if (existing) {
      return Response.json({success:false,  message: 'You already sent this message' }, { status: 409 })
    }

    await collection.insertOne({ email, subject, message, createdAt: new Date() })

    const { data, error } = await resend.emails.send({
      from: 'Bitlink Contact <onboarding@resend.dev>',
      to: 'hiteshpuhorit@gmail.com',
      subject: `New contact form message: ${subject}`,
      replyTo: email,
      text: `From: ${email}\n\n${message}`,
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ success: false, message: 'Email service error' }, { status: 500 })
    }

    return Response.json({success:true ,  message: 'successfully sent message' }, { status: 200 })
  } catch (error) {
    console.error(error)
    return Response.json({ success:false ,  message: 'Something went wrong, please try again' }, { status: 500 })
  }
}