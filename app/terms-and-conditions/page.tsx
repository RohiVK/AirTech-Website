'use client';

import React from 'react';

export default function TermsPage() {
  return (
    <div>
      

  {/*  ======================================================================
       HEADER HERO SECTION
       ======================================================================  */}
  <header className="terms-hero-header">
    <div className="container-xl text-center">
      <div className="text-uppercase fw-bold small text-success mb-2" style={{"letterSpacing":"0.12em"}}>AirTech Hitachi • Chennai</div>
      <h1 className="display-6 fw-bold mb-3 terms-hero-title" style={{"color":"var(--airtech-charcoal)"}}>Terms and Conditions</h1>
      <p className="lead text-secondary fs-6 mb-0 mx-auto" style={{"maxWidth":"720px","lineHeight":"1.7"}}>
        Welcome to <strong>www.airtechhitachi.in</strong> (“Website”). By accessing and using this website, you agree to comply with and be bound by the following Terms and Conditions. If you do not agree with these terms, please refrain from using our website.
      </p>
    </div>
  </header>

  {/*  ======================================================================
       MAIN CONTENT: 8 THEMED ARCHITECTURAL CARDS
       ======================================================================  */}
  <main className="terms-content-section">
    <div className="container-xl">
      <div className="row g-4">

        {/*  01. Use of Website  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="50">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">01</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="pillar-card-title">1. Use of Website</h2>
            <p className="pillar-card-text mb-0">
              The content on this website is for informational purposes only. You may not use this website for any unlawful purpose or to violate any laws. Unauthorized use of this website may result in legal action.
            </p>
          </div>
        </div>

        {/*  02. Intellectual Property  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">02</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="pillar-card-title">2. Intellectual Property</h2>
            <p className="pillar-card-text mb-0">
              All content, logos, designs, images, and text on this website are the property of Airtech Hitachi and are protected by applicable intellectual property laws. Reproduction, distribution, or modification of any content without our consent is prohibited.
            </p>
          </div>
        </div>

        {/*  03. Product and Service Information  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">03</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="pillar-card-title">3. Product & Service Information</h2>
            <p className="pillar-card-text mb-0">
              The availability, pricing, and specifications of our products and services are subject to change without notice. We do not guarantee the accuracy, reliability, or completeness of the information on our website.
            </p>
          </div>
        </div>

        {/*  04. Limitation of Liability  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">04</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <h2 className="pillar-card-title">4. Limitation of Liability</h2>
            <p className="pillar-card-text mb-0">
              Airtech Hitachi shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of this website. We do not guarantee that the website will be free from errors, viruses, or technical issues.
            </p>
          </div>
        </div>

        {/*  05. Third-Party Links  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">05</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <h2 className="pillar-card-title">5. Third-Party Links</h2>
            <p className="pillar-card-text mb-0">
              Our website may contain links to third-party websites for additional information. We do not endorse or assume responsibility for the content or policies of external websites.
            </p>
          </div>
        </div>

        {/*  06. Governing Law  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">06</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="pillar-card-title">6. Governing Law</h2>
            <p className="pillar-card-text mb-0">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of <strong>Chennai, Tamil Nadu, India</strong>. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in <strong>Chennai, Tamil Nadu, India</strong>.
            </p>
          </div>
        </div>

        {/*  07. Changes to Terms and Conditions  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">07</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h2 className="pillar-card-title">7. Changes to Terms & Conditions</h2>
            <p className="pillar-card-text mb-0">
              We reserve the right to update or modify these Terms and Conditions at any time without prior notice.
            </p>
          </div>
        </div>

        {/*  08. Contact Us  */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
          <div className="why-choose-card terms-clause-card">
            <span className="pillar-watermark">08</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="pillar-card-title">8. Contact Us</h2>
            <div className="pillar-card-text mb-0">
              <p className="mb-2">For any questions or concerns regarding these Terms and Conditions, please contact us:</p>
              <div className="fw-bold text-dark mb-1">Airtech Hitachi</div>
              <div>Website: <a href="https://www.airtechhitachi.in" className="text-dark fw-semibold">www.airtechhitachi.in</a></div>
              <div>Email: <a href="mailto:airtech.admin@gmail.com" className="text-dark fw-semibold">airtech.admin@gmail.com</a></div>
              <div>Phone: <a href="tel:+919841806967" className="text-dark fw-semibold">+91 98418 06967</a> / <a href="tel:+919841253976" className="text-dark fw-semibold">+91 98412 53976</a></div>
              <div>Address: 17A, 2nd Street, Muralikrishna Nagar, Valasaravakkam, Chennai, Tamil Nadu 600087</div>
            </div>
          </div>
        </div>

        {/*  Simple Closing Note (No Heavy Box)  */}
        <div className="col-12 text-center text-muted small mt-4">
          By using our website, you agree to these Terms and Conditions.
        </div>

      </div>
    </div>
  </main>

  {/*  ======================================================================
       CORPORATE FOOTER (Identical to Main Site & FAQ)
       ======================================================================  */}
  
    </div>
  );
}
