import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Lock, Activity, Shield, Droplet } from 'lucide-react';

const attributes = [
  {
    icon: Lock,
    title: 'Proprietary anatomic contouring',
    description: 'that maintains secure positioning and reduces leakage.',
  },
  {
    icon: Activity,
    title: 'Stable interface',
    description: 'designed to perform across patient movement and varied body types.',
  },
  {
    icon: Shield,
    title: 'Skin-protective design',
    description: 'that minimizes moisture exposure and reduces breakdown risk.',
  },
  {
    icon: Droplet,
    title: 'Predictable, consistent flow',
    description: 'that supports both patient comfort and clinical monitoring.',
  },
];

export function Solution() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            A proprietary, reliability-first<br className="hidden lg:block" /> external urinary device.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            VeriCath is developing a non-invasive external urinary device engineered around a proprietary design architecture that maintains placement, protects skin integrity, and delivers consistent urine diversion—even in the real-world conditions that defeat existing solutions.
            <br /><br />
            For providers, this means fewer catheter insertions, lower complication rates, and improved workflow efficiency. For institutions, it means a path to measurable cost reductions and a non-invasive solution that can scale across high-cost care areas where catheter alternatives have never been reliable enough to succeed.
          </p>

          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto mb-8">
            These attributes create a differentiated device capable of driving adoption where previous solutions have failed.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {attributes.map((attr, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 hover:border-[#67276d] transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#67276d] to-[#d450a7] rounded-lg flex items-center justify-center">
                    <attr.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{attr.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{attr.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}