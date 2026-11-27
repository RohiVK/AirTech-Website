'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '' || !pathname;
  const isFaq = pathname?.startsWith('/faq');
  const isTerms = pathname?.startsWith('/terms');
  const prefix = isHome ? '' : '/';

  return (
    <nav className="navbar navbar-expand-xl site-navbar sticky-top" id="mainNavbar">
      <div className="container-xl d-flex align-items-center justify-content-between">
        <Link className="navbar-brand py-0 me-0" href={`${prefix}#hero`} aria-label="AirTech Home">
          <div className="brand-logo-frame" data-logo-slot="header">
            <img src="/assets/images/airtech-logo.png" alt="AirTech Air Conditioning" className="navbar-logo-img" />
          </div>
        </Link>

        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto mb-3 mb-xl-0 gap-xl-3 py-3 py-xl-0 text-center text-xl-start">
            <li className="nav-item">
              <Link className={`nav-link ${!isFaq && !isTerms ? 'active' : ''}`} href={`${prefix}#hero`}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`${prefix}#about`}>About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`${prefix}#residential`}>Residential</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`${prefix}#commercial`}>Commercial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`${prefix}#why-us`}>Why Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isFaq ? 'active' : ''}`} href="/faq/">FAQ</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href={`${prefix}#contact`}>Contact</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center justify-content-center pt-2 pt-xl-0">
            <Link href={`${prefix}#contact`} className="btn btn-primary-custom px-4 py-2">
              <span>Request Consultation</span>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
