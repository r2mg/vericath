import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import outcomeImg from 'figma:asset/279570c24abf9b1aea6bf55bc726048a9aa273d4.png';

export function Insight() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section 
      id="insight"
      className="py-24 bg-gradient-to-br from-purple-50 to-blue-50 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url('${outcomeImg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center text-gray-900 mb-12">
            The insight that changed everything.
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              The challenge in female urinary care has never been lack of demand—it has been lack of reliability. Existing external solutions show promise, but they fail too often in real-world conditions to earn widespread adoption.
            </p>
            
            <p>
              VeriCath's core insight is simple: if a device is going to replace or reduce traditional catheter use, it must perform <strong>reliably</strong> across diverse body types, care environments, and patient movements.
            </p>
            
            <p>
              So we began where others didn't: with anatomy, fluid dynamics, skin interaction, and the realities of clinical workflow. When design starts with those truths, the path forward becomes clear—and transformative.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}