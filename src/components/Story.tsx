import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';

export function Story() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            A silent crisis driven<br className="hidden lg:block" /> by unreliable solutions.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Across hospitals, long-term care facilities, and home-care environments, women face urinary-care experiences defined by leakage, discomfort, skin breakdown, and preventable infections. These failures don't just affect patients—they drive billions in preventable annual costs tied to catheter-associated infections, staffing inefficiencies, and extended lengths of stay.
            </p>
            
            <p>
              The underlying issue is reliability: current external solutions fail too often to meaningfully replace catheters, and care systems bear the financial and operational consequences. Investors understand that categories transform when reliability unlocks adoption—and urinary care for women is long overdue for that shift.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}