import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { AlertCircle, Users, TrendingUp, Target } from 'lucide-react';

const drivers = [
  {
    icon: AlertCircle,
    title: 'Institutional mandates',
    description: 'increasing pressure to decrease catheter-associated infections and complications.',
  },
  {
    icon: Users,
    title: 'Clinical need',
    description: 'clinicians need solutions that reduce caregiver burden and improve patient dignity.',
  },
  {
    icon: TrendingUp,
    title: 'Market growth',
    description: 'long-term care and home-care environments require reliable non-invasive alternatives.',
  },
  {
    icon: Target,
    title: 'Underserved category',
    description: 'few competitors, no clear performance leader, large unmet need.',
  },
];

export function Market() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="market" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl text-center mb-12 text-gray-900">
            A category ready for a reliability breakthrough.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
            Healthcare systems are under growing pressure to reduce catheter-associated infections, streamline caregiver workload, and expand home-based and long-term care capacity. These pressures create a uniquely strong market pull for credible, non-invasive urinary-care solutions.
            <br /><br />
            Despite the size and urgency of this need, the category remains underdeveloped, fragmented, and underserved—leaving a rare opportunity for a reliability-driven market leader to define the standard. Investors recognize the value of entering a large market early, especially one primed for adoption once performance barriers are removed.
          </p>

          <p className="text-xl md:text-2xl text-gray-700 text-center max-w-4xl mx-auto mb-8">
            These drivers collectively create a sizable, growing, and underpenetrated market with strong structural tailwinds:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {drivers.map((driver, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#67276d]"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#67276d] to-[#d450a7] rounded-lg flex items-center justify-center">
                    <driver.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">{driver.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{driver.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}