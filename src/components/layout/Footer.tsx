"use client";

import Link from 'next/link';
import MahiLogo from '@/components/MahiLogo';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0">
            <MahiLogo className="h-24 w-auto mb-4" />

            <p className="text-gray-700 mb-4 max-w-xs">
              <strong>Pillar no. 49, Parade kothi, Varanasi Cantt</strong>
              <br />
              <strong> Near Roadways</strong>
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://api.whatsapp.com/send?phone=919198742110&text=Hi%20I%20Have%20an%20enquiry"
                className="text-gray-500 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={30} />
              </Link>
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Top Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cities/ayodhya"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Ayodhya
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/vindhyachal"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Vindhyachal
                </Link>
              </li>
              <li>
                <Link
                  href="/cities/varanasi"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Vanarasi
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  All Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Rental Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Swift
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Innova Crysta
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Luxury Tempo Traveller
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-primary transition-colors"
                >
                  Bus
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} Mahi Tours and Travels </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
