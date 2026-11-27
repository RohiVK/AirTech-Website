import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientInit from '@/components/ClientInit';

export const metadata: Metadata = {
  title: 'AirTech | Authorized Hitachi Air Conditioning Sales & Service in Chennai',
  description: 'AirTech is Chennai’s leading authorized Hitachi air-conditioning sales, installation, and AMC engineering firm with 22+ years of technical excellence across residential, luxury villa, and commercial VRF HVAC systems.',
  keywords: 'AirTech Chennai, Hitachi AC Dealer Chennai, Hitachi VRF System, AC Installation Chennai, Air Conditioner AMC Chennai, Split AC Chennai, Ductable AC',
  authors: [{ name: 'AirTech Hitachi' }],
  metadataBase: new URL('https://rohivk.github.io/AirTech-Website/'),
  openGraph: {
    title: 'AirTech | Authorized Hitachi AC Sales & Engineering Chennai',
    description: 'Chennai’s premier Hitachi air conditioning engineering partner. 22+ years of climate engineering excellence for residential and commercial spaces.',
    url: 'https://rohivk.github.io/AirTech-Website/',
    siteName: 'AirTech Chennai',
    images: [
      {
        url: '/assets/images/hero-hvac.jpg',
        width: 1200,
        height: 630,
        alt: 'AirTech Air Conditioning Engineering in Chennai',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AirTech | Authorized Hitachi AC Sales & Engineering Chennai',
    description: 'Delivering dependable Hitachi air-conditioning solutions across Chennai for 22+ years.',
    images: ['/assets/images/hero-hvac.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/aos.css" />
        <link rel="stylesheet" href="/css/style.css?v=26" />
      </head>
      <body>
        {/* Preloader */}
        <div className="site-preloader" id="sitePreloader">
          <div className="preloader-content-wrap">
            <div className="preloader-icon-box">
              <svg className="airflow-stream-svg" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="streamGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1BADB4" stopOpacity="0" />
                    <stop offset="50%" stopColor="#5FBB46" stopOpacity="1" />
                    <stop offset="100%" stopColor="#5FBB46" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="streamGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#5FBB46" stopOpacity="0" />
                    <stop offset="50%" stopColor="#1BADB4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#00D2DE" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="streamGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00D2DE" stopOpacity="0" />
                    <stop offset="60%" stopColor="#147F86" stopOpacity="1" />
                    <stop offset="100%" stopColor="#5FBB46" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 10 18 C 60 8, 120 28, 190 18" stroke="url(#streamGrad1)" strokeWidth="3" strokeLinecap="round" className="breeze-stream" />
                <path d="M 20 30 C 80 42, 130 16, 180 32" stroke="url(#streamGrad2)" strokeWidth="3.5" strokeLinecap="round" className="breeze-stream breeze-stream-2" />
                <path d="M 15 42 C 70 28, 140 46, 195 40" stroke="url(#streamGrad3)" strokeWidth="2.5" strokeLinecap="round" className="breeze-stream breeze-stream-3" />
              </svg>
            </div>
            <div className="preloader-text">
              <span>LOADING</span>
              <span className="preloader-dot-pulse">.</span>
              <span className="preloader-dot-pulse">.</span>
              <span className="preloader-dot-pulse">.</span>
            </div>
          </div>
        </div>

        {/* Custom Snowflake Cursor */}
        <div className="custom-cursor-dot" id="cursorDot">
          <svg className="snowflake-cursor-svg" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <g id="crystal-arm">
                <line x1="16" y1="16" x2="16" y2="2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                <polygon points="16,1 17.5,3.8 16,5.2 14.5,3.8" fill="currentColor" />
                <path d="M 13.2 5.5 L 16 7.5 L 18.8 5.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 11.2 8.4 L 16 11.2 L 20.8 8.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="12.8" y1="9.8" x2="11.8" y2="12" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
                <line x1="19.2" y1="9.8" x2="20.2" y2="12" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" />
                <path d="M 13.8 13.4 L 16 14.8 L 18.2 13.4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </defs>
            <use href="#crystal-arm" transform="rotate(0 16 16)" />
            <use href="#crystal-arm" transform="rotate(60 16 16)" />
            <use href="#crystal-arm" transform="rotate(120 16 16)" />
            <use href="#crystal-arm" transform="rotate(180 16 16)" />
            <use href="#crystal-arm" transform="rotate(240 16 16)" />
            <use href="#crystal-arm" transform="rotate(300 16 16)" />
            <polygon points="16,12.8 18.8,14.4 18.8,17.6 16,19.2 13.2,17.6 13.2,14.4" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="16" cy="16" r="1.4" fill="#ffffff" stroke="currentColor" strokeWidth="0.6" />
          </svg>
        </div>
        <div className="custom-cursor-follower" id="cursorFollower" />

        <Navbar />

        {children}

        <Footer />

        {/* Back to top floating button */}
        <button
          type="button"
          className="back-to-top-button"
          id="backToTopBtn"
          aria-label="Back to top of page"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        <ClientInit />

        {/* Essential Scripts */}
        <Script src="/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/aos.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />

        {/* Fail-safe preloader auto-dismiss script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                setTimeout(function() {
                  var p = document.getElementById('sitePreloader');
                  if (p) p.classList.add('is-loaded');
                }, 300);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
