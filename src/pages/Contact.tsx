import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20 pb-20 px-4">
      <div className="max-w-xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">Get in <span className="text-emerald-400">Touch</span></h1>
          <p className="text-zinc-400">Have feedback or a feature request? We'd love to hear from you.</p>
        </div>

        {submitted ? (
          <div className="bg-emerald-500/10 border border-emerald-500/20 p-12 rounded-3xl text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <Send className="text-white w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold">Message Sent!</h2>
            <p className="text-emerald-200/60">Thank you for reaching out. We'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-4 text-emerald-400 font-semibold hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-6 shadow-2xl">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">Your Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400 ml-1">Message</label>
              <textarea 
                required
                rows={5}
                placeholder="How can we help you?"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-none"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-zinc-500 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            support@shortssafe.com
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Average response time: 24h
          </div>
        </div>
      </div>
    </div>
  );
}
