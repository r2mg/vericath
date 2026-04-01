import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';

export function Invest() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="invest" className="py-24 bg-gradient-to-br from-[#67276d] to-[#d450a7] text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-12">
            Why invest in VeriCath now.
          </h2>
          
          <p className="text-lg md:text-xl mb-12 leading-relaxed text-white/95">
            VeriCath is positioned to lead the next era of urinary care for women, driven by a proprietary design that solves the reliability failures preventing category-wide adoption. This reliability unlocks measurable clinical value, operational efficiencies, and cost savings—outcomes healthcare systems are actively prioritizing.
          </p>
          
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/95">
            The category is large, underserved, and accelerating due to demographic shifts, staffing pressures, and institutional mandates to reduce infection risk. With a differentiated device architecture, a clear commercialization pathway, and a problem that payers and providers urgently need solved, VeriCath represents a compelling early-stage opportunity in women's health innovation.
          </p>
          
          <p className="text-xl md:text-2xl mb-12 text-center">
            Investors rarely encounter a market this large, this fragmented, and this ready for transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="mailto:info@vericath.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#67276D] rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Connect With Us
              <ArrowRight className="w-5 h-5" />
            </a>
            
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
    </section>
  );
}