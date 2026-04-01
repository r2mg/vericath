import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, FileText, ArrowRight } from 'lucide-react';
import heroImage from 'figma:asset/ee0f9905bf260215511a5ad1de7516322fe17e7d.png';

export function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('story');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundAttachment: 'fixed'
          }}
        ></div>
        {/* Purple gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#67276d]/90 via-[#8a3d8e]/85 to-[#d450a7]/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-white">
            Redefining urinary<br className="hidden lg:block" /> care for women.
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-8 text-white/95">
            A non-invasive, reliability-first solution engineered to improve safety, elevate dignity, and transform outcomes across every care setting.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Women's urinary care remains one of the most overlooked and economically burdensome challenges in modern healthcare. Existing solutions underperform, drive avoidable complications, and strain already overextended care systems. VeriCath is redefining this category with a proprietary, reliability-first external urinary device engineered specifically for women—offering safer care, better outcomes, and meaningful cost savings for institutions seeking scalable, non-invasive alternatives.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToNext}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#67276D] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <ArrowRight className="w-5 h-5" />
              Learn More
            </button>
            
            <a 
              href="mailto:info@vericath.com?subject=Investor%20Materials%20Request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent shadow-[inset_0_0_0_2px_white] text-white rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Request Investor Materials
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white/60" />
      </motion.div>
    </section>
  );
}