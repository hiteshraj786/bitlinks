# Bitlinks 🔗

Bitlinks is a modern, fast, and secure URL shortener built with the Next.js App Router and MongoDB. Say goodbye to long, unwieldy links and create clean, memorable URLs instantly.

## ✨ Features

- **Custom Short URLs**: Choose your own custom short text for a personalized touch.
- **Lightning Fast Redirects**: Built on Next.js 14/15 App Router for optimal performance.
- **Modern UI/UX**: Beautiful glassmorphism design with Tailwind CSS.
- **Contact Integration**: Embedded contact form powered by Resend for reliable email delivery.
- **Database Driven**: Uses MongoDB for fast and scalable URL mapping storage.
- **Analytics Ready**: Built on a solid foundation that can easily be extended to support link click analytics.

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Database**: [MongoDB](https://www.mongodb.com)
- **Email Service**: [Resend](https://resend.com)
- **Icons**: [Lucide React](https://lucide.dev) / React Icons
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or later
- MongoDB Database (Local or Atlas)
- Resend API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hiteshraj786/bitlinks.git
   cd bitlinks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_HOST=http://localhost:3000
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌍 Deployment & Hosting Guide

Follow these steps to take your project live using **Vercel** and **MongoDB Atlas**, along with adding your own custom domain.

### 1. Database Setup (MongoDB Atlas)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a free account.
2. Build a new free cluster.
3. Go to **Database Access** and create a new database user with a secure password.
4. Go to **Network Access** and click "Add IP Address", then choose "Allow Access From Anywhere" (`0.0.0.0/0`).
5. Go back to **Database**, click "Connect", choose "Connect your application", and copy the connection string.
6. Replace `<password>` with the user password you created. This is your `MONGODB_URI`.

### 2. Hosting on Vercel
Vercel is the best platform to host Next.js apps.
1. Create a free account on [Vercel](https://vercel.com).
2. Connect your GitHub account and click **"Add New..." > "Project"**.
3. Import your `bitlinks` repository.
4. In the **Environment Variables** section during setup, add the following keys:
   - `MONGODB_URI`: (Your Atlas connection string)
   - `NEXT_PUBLIC_HOST`: (Your production domain, e.g., `https://bitlinks.yourdomain.com`)
   - `RESEND_API_KEY`: (Your Resend API key)
5. Click **Deploy**. Within a minute, your app will be live!

### 3. Adding a Custom Domain
Once your app is deployed on Vercel:
1. Go to your project dashboard on Vercel and click **Settings**.
2. Navigate to the **Domains** tab.
3. Enter the custom domain you purchased (from GoDaddy, Namecheap, Hostinger, etc.) and click **Add**.
4. Vercel will provide you with DNS records (usually an `A` record or a `CNAME`).
5. Go to your domain registrar's DNS settings and add the records provided by Vercel.
6. Wait for the DNS to propagate (can take a few minutes), and your custom domain will be active with an automatic SSL certificate!

## 📂 Project Structure

- `/app`: Next.js App Router pages (Home, About, Contact, Shorten).
- `/app/api`: API routes for generating links and handling contact forms.
- `/app/[shorturl]`: Dynamic route for redirecting short URLs to original destinations.
- `/components`: Reusable UI components (Navbar, Footer).
- `/lib`: Helper functions and database connections (MongoDB).
- `/public`: Static assets (images, fonts, icons).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
