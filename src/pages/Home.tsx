import React from 'react';
import { Smartphone, CheckCircle2, AlertCircle, Youtube, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ShortsPreviewer from '../components/ShortsPreviewer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
      <div className="noise" />
      <div className="atmosphere fixed inset-0 pointer-events-none" />

      {/* Hero Section */}
      <header className="relative pt-40 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/10 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <Zap className="w-3 h-3" />
            Next-Gen Creator Suite
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-[-0.04em] leading-[0.9] text-gradient"
          >
            Perfect Your <br />
            Shorts Framing.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            The industry standard for vertical video safe zones. <br className="hidden md:block" />
            Preview, adjust, and dominate the algorithm.
          </motion.p>
        </div>
      </header>

      {/* Main Tool */}
      <section className="relative z-10">
        <ShortsPreviewer />
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-6xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 glass rounded-[2.5rem] p-12 space-y-6">
          <h2 className="text-4xl font-black tracking-tight">Why Safe Zones Matter.</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            In 2026, the YouTube algorithm prioritizes viewer retention above all else. When your key information is covered by UI elements, viewers drop off in the first 3 seconds. Our tool ensures your hook is always visible.
          </p>
          <div className="flex gap-4 pt-4">
            <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-sm font-bold">1080 x 1920</div>
            <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-sm font-bold">9:16 Ratio</div>
          </div>
        </div>
        <div className="md:col-span-4 glass rounded-[2.5rem] p-12 flex flex-col justify-between bg-emerald-500/5 border-emerald-500/10">
          <Youtube className="w-12 h-12 text-emerald-400" />
          <div className="space-y-2">
            <h3 className="text-2xl font-black">Native UI.</h3>
            <p className="text-zinc-400 text-sm">Pixel-perfect recreation of the latest YouTube Shorts interface.</p>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="prose prose-invert max-w-none">
          <h2 className="text-5xl font-black tracking-tighter mb-12">The Science of Vertical Video.</h2>
          
          <div className="space-y-12">
            <div className="glass rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                The 20% Rule
              </h3>
              <p>
                The bottom 20% of your Short is the most dangerous area. This is where YouTube places the channel name, the subscribe button, and the video title. If you place your captions here, they will clash with the UI, making them unreadable.
              </p>
            </div>

            <div className="glass rounded-3xl p-8 space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <div className="w-1.5 h-6 bg-cyan-500 rounded-full" />
                The Right-Side Margin
              </h3>
              <p>
                The right side of the screen is reserved for engagement buttons. We recommend keeping a margin of at least 120px from the right edge for any critical visual information or text.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-32 space-y-16">
        <h2 className="text-4xl font-black text-center tracking-tight">Common Questions.</h2>
        <div className="grid gap-4">
          {[
            {
              q: "Is this tool updated for 2026?",
              a: "Yes. We constantly monitor platform updates to ensure our UI overlays match the current live versions of YouTube Shorts."
            },
            {
              q: "Can I use this for TikTok or Reels?",
              a: "While this specific tool is calibrated for YouTube Shorts, the safe zones are very similar. We recommend using our dedicated TikTok and Reels tools for 100% accuracy."
            },
            {
              q: "Does it support video upload?",
              a: "Currently, we support high-resolution image frames. This is the fastest way to verify your layout without the overhead of video processing."
            }
          ].map((faq, i) => (
            <div key={i} className="glass p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 group">
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">{faq.q}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Smartphone className="text-emerald-500 w-6 h-6" />
              <span className="font-black text-xl tracking-tight">ShortsSafe</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              The world's most advanced vertical video preview suite. Built by creators, for creators.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Legal</h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Connect</h4>
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">© 2026 ShortsSafe Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
