import React from 'react';
import { motion, useInView } from 'motion/react';
import insightBg960 from '@/assets/solo-nurse_w960.jpg';
import insightBg1440 from '@/assets/solo-nurse_w1440.jpg';
import insightBg2560 from '@/assets/solo-nurse2560.jpg';

const insightOverlay =
  'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85))';

export function Insight() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="insight"
      className="relative isolate overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={insightBg2560}
          srcSet={`${insightBg960} 960w, ${insightBg1440} 1440w, ${insightBg2560} 2560w`}
          sizes="100vw"
          alt=""
          decoding="async"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: insightOverlay }}
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-12 text-center text-4xl text-gray-900 md:text-5xl">
            The insight that changed everything.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-gray-700 md:text-xl">
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
