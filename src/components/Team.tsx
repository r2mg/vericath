import React from 'react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { X, ArrowRight, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import robertImage from 'figma:asset/818726e28c151ec0ba72b4571f5c7e34899ffa8b.png';
import georgeImage from 'figma:asset/f1a7f82b58c904a7e0174610890b9a3c34a6cbd2.png';
import kenImage from 'figma:asset/9376d626e7694e96dd4b332c53a8af28a337cf55.png';
import elizabethImage from 'figma:asset/981d07a9112968e13ea3c4552963a531077e8e24.png';

const teamMembers = [
  {
    name: 'Dr. Elizabeth Hatz',
    title: 'President, Founder, CMO',
    bio: 'Doctor of Osteopathic Medicine and Family Medicine Physician since 2012.',
    fullBio: 'Doctor of Osteopathic Medicine and Family Medicine Physician since 2012. Founder of VeriCath and strategic lead for clinical insight and product direction. Holds an MBA from Rockhurst University and guides patient-centered design and commercialization strategy. Dr. Hatz combines frontline clinical experience with business acumen to drive VeriCath\'s mission of improving urinary care for women. Her unique perspective as both physician and entrepreneur ensures that every product decision prioritizes patient outcomes and clinical efficacy.',
    image: elizabethImage
  },
  {
    name: 'Ken Krull',
    title: 'COO, Chairman',
    bio: 'Healthcare investor and operator with 13 years of experience at vSpring and Mercato.',
    fullBio: 'Healthcare investor and operator with 13 years of experience at vSpring and Mercato. Former Chairman at BioMicro. Holds an MBA from the Marriott School and brings leadership across operations, strategy, investment, and organizational scale-up. Ken has directed investments and operational initiatives across dozens of healthcare companies, with expertise in scaling organizations, building strategic partnerships, and navigating complex market dynamics in the medical device sector.',
    image: kenImage
  },
  {
    name: 'George Ealovega',
    title: 'Founder, Mechanical Engineer',
    bio: 'Mechanical engineer with extensive experience in advanced systems design.',
    fullBio: 'Mechanical engineer with extensive experience in advanced systems design. Former director for Osprey Consulting and Manager of Defense Technologies. Leads VeriCath\'s engineering development and contributes to proprietary device architecture. George brings deep technical expertise in designing complex mechanical systems that must perform reliably under challenging conditions. His background in defense and aerospace engineering informs VeriCath\'s rigorous approach to product design and testing.',
    image: georgeImage
  },
  {
    name: 'Robert Martin',
    title: 'Manufacturing',
    bio: 'Veteran manufacturing specialist with deep expertise in precision medical production.',
    fullBio: 'Veteran manufacturing specialist with deep expertise in precision medical production. Brings decades of experience optimizing processes, scaling manufacturing systems, and ensuring high-quality device output across regulated environments. Robert has led manufacturing operations for multiple medical device companies, specializing in bringing innovative products from prototype to full-scale production while maintaining strict quality standards and regulatory compliance.',
    image: robertImage
  }
];

export function Team() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedMember, setSelectedMember] = React.useState<typeof teamMembers[0] | null>(null);

  React.useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  return (
    <>
      <section
        id="team"
        className="bg-gradient-to-br from-[#67276d] to-[#d450a7] py-24 text-white"
      >
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-12 text-center text-4xl md:text-5xl text-white">
              Meet Our Team
            </h2>

            <p className="mx-auto mb-16 max-w-4xl text-center text-lg leading-relaxed text-white/95 md:text-xl">
              VeriCath is led by a multidisciplinary team with deep experience in medicine, engineering, product development, manufacturing, and healthcare investment. Together, the team brings decades of operational leadership and technical expertise to the challenge of redefining urinary care for women.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer hover:border-[#67276D]"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-lg ring-4 ring-gray-100">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-[#67276D] mb-1 group-hover:text-[#373FAB] transition-colors" style={{ fontWeight: 'var(--font-weight-bold)' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#373FAB] mb-4">{member.title}</p>
                    <button className="mt-2 px-6 py-2 bg-[#67276D] text-white rounded-lg hover:bg-[#373FAB] transition-colors duration-300">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:info@vericath.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-[#67276D] transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:shadow-lg"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@vericath.com?subject=Investor%20Materials%20Request"
                className="inline-flex items-center gap-2 rounded-lg bg-transparent px-8 py-4 text-white shadow-[inset_0_0_0_2px_white] transition-all duration-300 hover:bg-white/10"
              >
                <FileText className="h-5 w-5" />
                Request Investor Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-8 md:p-12">
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>

              <div className="flex flex-col items-center text-center mb-8">
                <div className="w-40 h-40 rounded-full overflow-hidden mb-6 shadow-xl ring-4 ring-[#67276D]/20">
                  <ImageWithFallback
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl text-[#67276D] mb-2">
                  {selectedMember.name}
                </h3>
                <p className="text-xl text-[#373FAB] mb-6">
                  {selectedMember.title}
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedMember.fullBio}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}