'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-corporate">
      <div className="container-xl">
        <div className="row g-5 mb-5">
          <div className="col-lg-4 col-md-6">
            <div className="brand-logo-frame mb-3" data-logo-slot="footer">
              <img src="/assets/images/airtech-footer-logo.png" alt="AirTech Air Conditioning" className="footer-logo-img" />
            </div>
            <p className="small text-white-50 mb-0">
              AirTech is an established air-conditioning sales, engineering, and maintenance company based in Chennai.
              Exclusive authorized Hitachi dealer since 2003, delivering comfort, performance, and long-term reliability.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="text-white fw-bold mb-3 pb-2 border-bottom border-secondary border-opacity-25">Navigation</div>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link href="/#hero" className="text-white-50">Home</Link></li>
              <li><Link href="/#about" className="text-white-50">About Us</Link></li>
              <li><Link href="/#residential" className="text-white-50">Residential</Link></li>
              <li><Link href="/#commercial" className="text-white-50">Commercial</Link></li>
              <li><Link href="/#why-us" className="text-white-50">Why Us</Link></li>
              <li><Link href="/faq/" className="text-white-50">FAQ</Link></li>
              <li><Link href="/terms-and-conditions/" className="footer-terms-link">Terms &amp; Conditions</Link></li>
              <li><Link href="/#contact" className="text-white-50">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="text-white fw-bold mb-3 pb-2 border-bottom border-secondary border-opacity-25">Hitachi Systems</div>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><Link href="/#residential" className="text-white-50">Inverter Split Air Conditioners</Link></li>
              <li><Link href="/#residential" className="text-white-50">Cassette Air Conditioners</Link></li>
              <li><Link href="/#commercial" className="text-white-50">Hitachi Set-Free VRF Systems</Link></li>
              <li><Link href="/#commercial" className="text-white-50">Ductable Package Units</Link></li>
              <li><Link href="/#commercial" className="text-white-50">Commercial Chillers &amp; AHUs</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="text-white fw-bold mb-3 pb-2 border-bottom border-secondary border-opacity-25">Chennai Office</div>
            <div className="d-flex flex-column gap-1 small text-white-50 mb-3">
              <div>17A, 2nd Street, Muralikrishna Nagar, Valasaravakkam, Chennai 600087</div>
              <div>Tel: <a href="tel:+919841806967" className="text-white">+91 98418 06967</a> / <a href="tel:+919841253976" className="text-white">+91 98412 53976</a></div>
              <div>Email: <a href="mailto:airtech.admin@gmail.com" className="text-white">airtech.admin@gmail.com</a></div>
            </div>

            <div className="footer-map-card mb-3">
              <iframe
                src="https://maps.google.com/maps?q=13.0480192,80.1778093&hl=en&z=15&output=embed"
                className="footer-map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AirTech Hitachi Location on Google Maps"
              />
              <a
                href="https://www.google.com/maps/place/AirTech+Hitachi/@13.0480192,80.1752344,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52613683e8acc3:0xcd4bef41d8e051ac!8m2!3d13.0480192!4d80.1778093!16s%2Fg%2F1tdg1m__"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-map-action-btn"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Open in Maps</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            <div className="d-flex gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-circle linkedin" aria-label="LinkedIn">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-circle facebook" aria-label="Facebook">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://wa.me/919841806967" target="_blank" rel="noopener noreferrer" className="footer-social-circle whatsapp" aria-label="WhatsApp">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 small text-white-50">
          <div>&copy; 2026 AirTech. All rights reserved.</div>
          <div className="d-flex flex-wrap gap-3 align-items-center justify-content-center">
            <Link href="/terms-and-conditions/" className="footer-terms-link">Terms &amp; Conditions</Link>
            <span className="d-none d-sm-inline">&bull;</span>
            <span>Authorized Hitachi Dealer</span>
            <span className="d-none d-sm-inline">&bull;</span>
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
