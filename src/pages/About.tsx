import React from 'react';
import { Shield, Info, Target, Heart } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-20 pb-20 px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight">About <span className="text-emerald-400">ShortsSafe</span></h1>
          <p className="text-zinc-400 text-lg">Empowering creators with precision tools for the vertical video era.</p>
        </div>

        <div className="grid gap-8">
          <section className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our mission is simple: to provide creators with free, high-quality, and accessible tools that solve real-world production problems. We noticed that many viral Shorts were being ruined by poor text placement, and we wanted to build a solution that was faster and easier than manual testing.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
              <Shield className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Privacy First</h2>
            <p className="text-zinc-400 leading-relaxed">
              We believe your creative content belongs to you. That's why ShortsSafe is built to run entirely in your browser. Your images never touch our servers, ensuring total privacy and lightning-fast performance.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Built for Creators</h2>
            <p className="text-zinc-400 leading-relaxed">
              Whether you're a professional editor or a first-time creator, our tools are designed to be intuitive. We stay up-to-date with the latest platform changes from YouTube, TikTok, and Instagram to ensure our safe zone guides are always accurate.
            </p>
          </section>
        </div>

        <div className="text-center pt-8">
          <p className="text-zinc-500 text-sm italic">
            "The difference between a good video and a viral video is often in the details."
          </p>
        </div>
      </div>
    </div>
  );
}
