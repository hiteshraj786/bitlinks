"use client"
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)


  const handleSubmit = async (e) => {

    e.preventDefault()
    setSending(true)

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");



    const raw = JSON.stringify({
      "email": email,
      "subject": subject,
      "message": message
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    const r = await fetch("/api/contact", requestOptions)
    const result = await r.json()

    if (result.success) {
      toast.success(result.message);
      setEmail("")
      setMessage("")
      setSubject("")
    } else {
      toast.error(result.message)

    }
    setSending(false)

  }


  return (
    <section className=" relative">
      <div className="py-14 lg:py-24 px-4 mx-auto max-w-3xl">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
        <p className="mb-10 lg:mb-14 font-light text-center text-gray-600 sm:text-xl max-w-xl mx-auto">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
        </p>


        <div className="relative">

          <div className="absolute -inset-3 bg-purple-400/30 rounded-4xl blur-2xl"></div>

          <form onSubmit={(e)=>handleSubmit(e)} className="relative space-y-6 bg-linear-to-b from-[#211c3d] to-[#150f2b] rounded-3xl
                               shadow-2xl border border-purple-500/20 p-6 sm:p-10">

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-purple-200">Your email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-.828.672-1.5 1.5-1.5h16.5c.828 0 1.5.672 1.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5V6.75z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75l9.75 6.75 9.75-6.75" />
                  </svg>
                </span>
                <input type="email" id="email" required placeholder="name@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200/30 text-sm
                     focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 transition"/>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-purple-200">Subject</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-300/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </span>
                <input type="text" id="subject" required placeholder="Let us know how we can help you" value={subject} onChange={(e) => setSubject(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200/30 text-sm
                     focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 transition"/>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-purple-200">Your message</label>
              <textarea id="message" rows="6" placeholder="Leave a comment..." value={message} onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-purple-200/30 text-sm resize-none
                   focus:outline-none focus:ring-2 focus:ring-purple-400/60 focus:border-purple-400/60 transition"></textarea>
            </div>

            <button type="submit"
              disabled={sending}
              className="w-full sm:w-fit inline-flex items-center justify-center gap-2 py-3 px-8 text-sm font-semibold text-white
                 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600
                 hover:from-purple-500 hover:font-bold active:font-semibold hover:text-purple-400 hover:to-fuchsia-500 hover:shadow-lg hover:shadow-fuchsia-500/40
                 focus:outline-none focus:ring-4 focus:ring-purple-400/40
                 active:scale-[0.98] transition-all duration-200">
              {sending ? 'Sending...' : 'Send message'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L18 12M18 12l-6-6M18 12l-6 6" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}

export default Contact
