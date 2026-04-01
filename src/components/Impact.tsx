import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import productImage from 'figma:asset/f07fe7369c7f9ec24b73c85d972095d6b91cabe1.png';

export function Impact() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="outcome" className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Product Image */}
          <div className="flex items-center justify-center h-full">
            <img 
              src={productImage} 
              alt="VeriCath Device" 
              className="w-full max-w-md object-contain"
            />
          </div>
          
          {/* Right Column - Headline and Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl text-gray-900">
              The outcome: predictable performance, measurable improvement.
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              <p>
                When urinary-care solutions stay in place and perform reliably, outcomes improve across every dimension. Women experience fewer infections, better skin integrity, and greater dignity in care. Caregivers spend less time troubleshooting devices and more time delivering value.
              </p>
              
              <p>
                For hospitals and long-term care facilities, these clinical improvements translate directly into economic gains: reduced catheter-associated complications, fewer preventable readmissions, lower staffing burden, and more consistent quality metrics.
              </p>
              
              <p>
                VeriCath's reliability-first design delivers predictable performance that enables both clinical impact and operational efficiency—the combination that drives large-scale adoption.
              </p>
              
              <p className="text-sm text-gray-500 mt-4">
                *Rendering shown is for illustration purposes only and may not represent the final product.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}