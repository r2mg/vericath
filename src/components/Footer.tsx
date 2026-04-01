import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import footerLogo from '@/imports/vercath_rev-1.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Company Info */}
          <div>
            <img 
              src={footerLogo} 
              alt="VeriCath" 
              className="h-auto w-32 md:w-[200px] mb-4"
            />
            <p className="text-lg mb-4">
              VeriCath — Advancing dignity, safety, and reliability in women's urinary care.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-4 md:ml-auto">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-[#F472B6] mt-1 flex-shrink-0" />
              <a 
                href="tel:+14357095772" 
                className="hover:text-[#67276D] transition-colors"
              >
                +1 (435) 709-5772
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#F472B6] mt-1 flex-shrink-0" />
              <address className="not-italic leading-relaxed">
                30 E Broadway<br />
                Suite 203 1089<br />
                Salt Lake City, UT 84111-2384
              </address>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} VeriCath. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}