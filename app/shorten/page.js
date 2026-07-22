"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Link2, Sparkles, Copy, Check, ExternalLink, ArrowRight } from 'lucide-react'

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: "0s" },
  { top: "18%", left: "78%", size: 1.5, delay: "0.4s" },
  { top: "30%", left: "40%", size: 1, delay: "1.1s" },
  { top: "12%", left: "55%", size: 1.5, delay: "0.8s" },
  { top: "45%", left: "88%", size: 2, delay: "1.6s" },
  { top: "60%", left: "6%", size: 1, delay: "0.2s" },
  { top: "72%", left: "70%", size: 1.5, delay: "1.3s" },
  { top: "85%", left: "22%", size: 1, delay: "0.6s" },
  { top: "5%", left: "30%", size: 1, delay: "1.8s" },
  { top: "50%", left: "20%", size: 1.5, delay: "0.9s" },
];

const Shorten = () => {
  const [url, seturl] = useState('');
  const [shorturl, setshorturl] = useState('');
  const [generated, setGenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = async () => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shorturl
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

     fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)

        seturl('')
        setshorturl('')
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));

  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(generated);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <div className="relative mx-auto  min-w-xl  my-16 px-4">
      {/* ambient glow blobs — scoped to this section, not the whole page */}
      {/* <div className="pointer-events-none absolute -top-10 -left-10 -z-10 h-56 w-56 rounded-full bg-fuchsia-300/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-6 -z-10 h-64 w-64 rounded-full bg-purple-400/40 blur-3xl" /> */}

      <div className="relative   flex flex-col items-center justify-center my-16">
        {/* glass card — smoked violet, matches navbar's dark starry theme */}
        <div className="relative w-full  overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-purple-950/80 via-violet-900/75 to-purple-900/80 p-8 shadow-[0_20px_60px_-15px_rgba(76,29,149,0.55)] backdrop-blur-2xl flex flex-col gap-7  h-125">
          {/* inner top highlight, glass edge light */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent" />

          {/* stars, echoing the navbar */}
          {STARS.map((s, i) => (
            <span
              key={i}
              className="pointer-events-none absolute rounded-full bg-white animate-pulse"
              style={{
                top: s.top,
                left: s.left,
                width: s.size,
                height: s.size,
                opacity: 0.7,
                animationDelay: s.delay,
                animationDuration: "2.4s",
              }}
            />
          ))}

          <div className="relative p-4 flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-fuchsia-500 to-purple-600 shadow-lg shadow-purple-900/40">
              <Link2 className="h-5 w-5 text-white" strokeWidth={2.25} />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">
                Generate your short URLs
              </h1>
              <p className="text-sm text-purple-200/70">
                Turn long links into something memorable
              </p>
            </div>
          </div>

          <div className="relative flex flex-col gap-6">
            <div className="relative">
              <Link2 className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-300/70" />
              <input
                type="text"
                value={url}
                className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-purple-200/50 outline-none ring-0 transition focus:border-fuchsia-400/60 focus:bg-white/15 focus:ring-2 focus:ring-fuchsia-400/30"
                placeholder="Enter your URL"
                onChange={(e) => seturl(e.target.value)}
              />
            </div>

            <div className="relative">
              <Sparkles className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-purple-300/70" />
              <input
                type="text"
                value={shorturl}
                className="w-full rounded-xl border border-white/15 bg-white/10 py-3 pl-10 pr-4 text-sm text-white placeholder-purple-200/50 outline-none ring-0 transition focus:border-fuchsia-400/60 focus:bg-white/15 focus:ring-2 focus:ring-fuchsia-400/30"
                placeholder="Enter your preferred short URL text"
                onChange={(e) => setshorturl(e.target.value)}
              />
            </div>

            <button
              onClick={generate}
              className="group my-3 flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-fuchsia-500 to-purple-600 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/40 transition hover:from-fuchsia-400 hover:to-purple-500 hover:shadow-fuchsia-500/30 active:scale-[0.98]"
            >
              Generate
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>

          {generated && (
            <div className="relative flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3">
              <div className="flex min-w-0 items-center gap-2">
                <ExternalLink className="h-4 w-4 shrink-0 text-fuchsia-300" />
                <Link
                  target="_blank"
                  href={generated}
                  className="truncate text-sm font-medium text-white underline decoration-fuchsia-400/50 underline-offset-4 hover:text-fuchsia-200"
                >
                  {generated}
                </Link>
              </div>
              <button
                onClick={copyLink}
                aria-label="Copy link"
                className="shrink-0 rounded-lg bg-white/10 p-2 text-purple-200 transition hover:bg-white/20 hover:text-white"
              >
                {copied ? <Check className="h-4 w-4 text-green-300" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Shorten
