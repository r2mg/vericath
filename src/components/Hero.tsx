import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, FileText, ArrowRight } from 'lucide-react';
import heroImage960 from '@/assets/happy-nurse-elder_w960.jpg';
import heroImage1440 from '@/assets/happy-nurse-elder_w1440.jpg';
import heroImage2560 from '@/assets/happy-nurse-elder_resize2560.jpg';

const heroGradient =
  'linear-gradient(to bottom right, rgba(103, 39, 109, 0.9), rgba(138, 61, 142, 0.85), rgba(212, 80, 167, 0.9))';

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('story');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex min-h-dvh flex-col overflow-x-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={heroImage2560}
          srcSet={`${heroImage960} 960w, ${heroImage1440} 1440w, ${heroImage2560} 2560w`}
          sizes="100vw"
          alt=""
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: heroGradient }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pb-6 text-center md:pb-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 text-5xl text-white md:text-7xl">
            Redefining urinary<br className="hidden lg:block" /> care for women.
          </h1>

          <h2 className="mb-6 text-2xl text-white/95 md:mb-8 md:text-4xl">
            A non-invasive, reliability-first solution engineered to improve safety, elevate dignity, and transform outcomes across every care setting.
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-white/90 md:mb-12 md:text-xl">
            Women's urinary care remains one of the most overlooked and economically burdensome challenges in modern healthcare. Existing solutions underperform, drive avoidable complications, and strain already overextended care systems. VeriCath is redefining this category with a proprietary, reliability-first external urinary device engineered specifically for women—offering safer care, better outcomes, and meaningful cost savings for institutions seeking scalable, non-invasive alternatives.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-[#67276D] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
            >
              <ArrowRight className="h-5 w-5" />
              Learn More
            </button>

            <a
              href="mailto:info@vericath.com?subject=Investor%20Materials%20Request"
              className="inline-flex items-center gap-2 rounded-lg bg-transparent px-8 py-4 text-white shadow-[inset_0_0_0_2px_white] transition-all duration-300 hover:bg-white/10"
            >
              <FileText className="h-5 w-5" />
              Request Investor Materials
            </a>
          </div>
        </motion.div>
      </div>

      <div
        className="relative z-10 flex shrink-0 justify-center px-6 pt-2 pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] md:pt-4 md:pb-10"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
