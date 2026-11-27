'use client';

import React from 'react';

export default function HomePage() {
  return (
    <main>
      

  {/*  ======================================================================
       SECTION 01 — HERO (Instant Animated Counters at Start + Scroll Down)
       ======================================================================  */}
  <section className="hero-wrapper" id="hero">
    <div className="container-xl">
      <div className="row align-items-center g-5">

        {/*  Hero Content Column  */}
        <div className="col-lg-7">
          <h1 className="hero-display-title animate-hero-2 mb-3">
            Comfort. <br />
            <span className="text-gradient-teal">Performance.</span> <br />
            Reliability.
          </h1>

          <p className="hero-lead-text animate-hero-3 mb-4 pe-lg-4">
            Delivering dependable air-conditioning solutions for residential and commercial spaces through experience,
            expertise and a commitment to quality.
          </p>

          <div className="d-flex flex-wrap gap-3 animate-hero-4 mb-4">
            <a href="#residential" className="btn btn-primary-custom px-4 py-3">
              <span>Explore Our Services</span>
              <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a href="#contact" className="btn btn-secondary-custom px-4 py-3">
              <span>Get in Touch</span>
            </a>
          </div>

          {/*  Trust Numbers Strip (Runs Immediately at Start)  */}
          <div className="hero-metrics-box animate-hero-5">
            <div className="row g-3 text-center text-sm-start">
              <div className="col-sm-4 border-end-sm">
                <div className="metric-number-display">
                  <span data-counter="22">0</span><span>+</span>
                </div>
                <div className="metric-label-text">Years in Chennai</div>
              </div>

              <div className="col-sm-4 border-end-sm">
                <div className="metric-number-display">
                  <span data-counter="15000">0</span><span>+</span>
                </div>
                <div className="metric-label-text">Units Installed</div>
              </div>

              <div className="col-sm-4">
                <div className="metric-number-display">
                  <span data-counter="100">0</span><span>%</span>
                </div>
                <div className="metric-label-text">In-House Engineers</div>
              </div>
            </div>
          </div>
        </div>

        {/*  Hero Visual Showcase (Hidden on Mobile view alone, no hover/title)  */}
        <div className="col-lg-5 d-none d-lg-block animate-hero-image">
          <div className="hero-img-box">
            <img src="assets/images/hero-hvac.jpg"
              alt="AirTech Residential and Commercial Air Conditioning Showcase in Chennai" className="img-fluid" />
          </div>
        </div>

      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 02 — ABOUT AIRTECH
       ======================================================================  */}
  <section className="section-padding bg-light" id="about">
    <div className="container-xl">
      <div className="row align-items-center g-5">

        {/*  Visual Showcase Column  */}
        <div className="col-lg-5" data-aos="fade-right">
          <div className="about-photo-wrapper">
            <img src="assets/images/about-company.jpg" alt="AirTech Engineering Team and Operations in Chennai"
              className="img-fluid" />

            <div className="about-floating-experience">
              <div className="experience-years-num">
                <span>22+</span>
              </div>
              <div className="small text-white-50 mt-2">
                <strong>Years in Chennai</strong><br />
                Pioneering high-reliability residential & commercial climate engineering since 2002.
              </div>
            </div>
          </div>
        </div>

        {/*  Editorial Content Column  */}
        <div className="col-lg-7" data-aos="fade-left">
          <div className="text-uppercase fw-bold small text-success mb-2" style={{"letterSpacing":"0.1em"}}>About AirTech</div>
          <h2 className="display-6 fw-bold mb-4">Two Decades of Cooling Integrity and Technical Mastery.</h2>

          <p className="mb-3">
            Founded in Chennai in <strong>2002</strong>, AirTech was established with a singular objective: to deliver
            uncompromising comfort, precision engineering, and responsive after-sales service in an industry often
            challenged by fragmented support.
          </p>
          <p className="mb-4">
            In <strong>2003</strong>, AirTech was appointed as an <strong>Exclusive Authorized Hitachi Dealer</strong>,
            marking the inception of a continuous 20+ year partnership rooted in factory-grade standards, genuine
            spares, and deep technical proficiency across Hitachi's advanced inverter and VRF cooling technologies.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-sm-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="p-3 bg-white rounded-3 border h-100 shadow-sm">
                <div className="fw-bold text-dark mb-1">
                  Chennai Climate Specialization
                </div>
                <p className="small text-secondary mb-0">Custom sizing engineered for Chennai’s high coastal humidity and
                  peak summer temperatures.</p>
              </div>
            </div>

            <div className="col-sm-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="p-3 bg-white rounded-3 border h-100 shadow-sm">
                <div className="fw-bold text-dark mb-1">
                  100% In-House Direct Engineering
                </div>
                <p className="small text-secondary mb-0">All installations, brazing, and commissioning are executed
                  exclusively by certified in-house technicians.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/*  The Man Behind AirTech — Full Executive Showcase  */}
      <div className="proprietor-full-showcase mt-5 pt-5 border-top" id="proprietor" data-aos="fade-up">
        <div className="row align-items-center g-5">

          {/*  Mobile-Only Heading: positioned directly above portrait in mobile view  */}
          <div className="col-12 d-lg-none" data-aos="fade-up">
            <div className="text-uppercase fw-bold small text-success mb-2" style={{"letterSpacing":"0.12em"}}>Leadership & Vision</div>
            <h2 className="display-6 fw-bold mb-0">The Man Behind AirTech</h2>
          </div>

          {/*  Proprietor Portrait Column (Comes below heading on mobile, left on desktop)  */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="proprietor-portrait-frame">
              <img src="assets/images/proprietor-portrait.jpg" alt="P.V. Kumar — Proprietor, AirTech"
                className="img-fluid" />
            </div>
          </div>

          {/*  Story & Note Column  */}
          <div className="col-lg-7" data-aos="fade-left">
            {/*  Desktop-Only Heading  */}
            <div className="d-none d-lg-block">
              <div className="text-uppercase fw-bold small text-success mb-2" style={{"letterSpacing":"0.12em"}}>Leadership & Vision</div>
              <h2 className="display-6 fw-bold mb-3">The Man Behind AirTech</h2>
            </div>
            <p className="lead text-dark fw-semibold mb-3">
              Two Decades of Hands-On Engineering Leadership, Personal Accountability, and Uncompromising Standards in Chennai.
            </p>
            <p className="proprietor-story-p mb-3">
              When AirTech was established in Chennai in <strong>2002</strong>, the air-conditioning market was dominated by transactional sales and fragmented after-market support. Recognizing that climate systems require scientific rigor, AirTech's proprietor set out to build an engineering-first firm rooted in direct personal responsibility.
            </p>
            <p className="proprietor-story-p mb-4">
              In <strong>2003</strong>, his dedication to OEM precision led to AirTech being appointed an <strong>Exclusive Authorized Hitachi Dealer</strong>. To this day, he personally oversees engineering standards, ensuring that every heat load calculation, coastal corrosion mitigation, and VRF zoning design is executed flawlessly by strictly in-house, factory-trained technicians.
            </p>

            {/*  Note from the Proprietor  */}
            <div className="proprietor-note-card">
              <div className="proprietor-note-label">Note from the Proprietor</div>
              <p className="proprietor-note-text">
                “Air-conditioning is not merely installing equipment on a wall—it is living comfort, indoor health, and long-term trust. Over twenty years in Chennai, our founding promise remains unchanged: personal accountability on every project, honest tonnage guidance, and zero compromise on installation quality.”
              </p>
              <div className="proprietor-note-footer">
                <div className="proprietor-note-author">P.V. Kumar</div>
                <div className="proprietor-note-role">Proprietor</div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/*  Recognition & Awards Showcase Image Carousel  */}
      <div className="about-awards-gallery mt-5 pt-4 border-top" data-aos="fade-up">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 position-relative" style={{"zIndex":"1"}}>
          <div>
            <div className="text-uppercase fw-bold small text-success mb-1" style={{"letterSpacing":"0.1em"}}>Recognitions &
              Milestones</div>
            <h3 className="h4 fw-bold mb-0">Two Decades of Hitachi Excellence & Service Honours</h3>
          </div>
        </div>

        {/*  Awards Image Carousel  */}
        <div id="awardsCarousel" className="carousel slide position-relative" style={{"zIndex":"10"}} data-bs-ride="carousel" data-bs-interval="4000"
          data-bs-pause="false" data-bs-keyboard="false" data-bs-touch="true">
          <div className="carousel-inner">
            {/*  Slide 01  */}
            <div className="carousel-item active">
              <div className="row g-4">
                {/*  Award 1  */}
                <div className="col-md-6">
                  <div className="award-image-card">
                    <div className="award-card-media">
                      <img src="assets/images/award-trophy-1.jpg" alt="Best Dealer Award for Sales & Engineering"
                        className="award-img" />
                    </div>
                    <div className="award-card-body">
                      <h4 className="award-panel-title">Best Dealer Award for Sales & Engineering</h4>
                    </div>
                  </div>
                </div>

                {/*  Award 2  */}
                <div className="col-md-6">
                  <div className="award-image-card">
                    <div className="award-card-media">
                      <img src="assets/images/award-trophy-2.jpg" alt="Legacy Dealer Milestone Trophy"
                        className="award-img" />
                    </div>
                    <div className="award-card-body">
                      <h4 className="award-panel-title">Legacy Dealer Milestone Trophy</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*  Slide 02  */}
            <div className="carousel-item">
              <div className="row g-4">
                {/*  Award 3  */}
                <div className="col-md-6">
                  <div className="award-image-card">
                    <div className="award-card-media">
                      <img src="assets/images/award-trophy-3.jpg"
                        alt="Japanese Engineering Protocol Citation" className="award-img" />
                    </div>
                    <div className="award-card-body">
                      <h4 className="award-panel-title">Japanese Engineering Protocol Citation</h4>
                    </div>
                  </div>
                </div>

                {/*  Award 4  */}
                <div className="col-md-6">
                  <div className="award-image-card">
                    <div className="award-card-media">
                      <img src="assets/images/award-trophy-4.jpg"
                        alt="Premier AMC Service Excellence Award" className="award-img" />
                    </div>
                    <div className="award-card-body">
                      <h4 className="award-panel-title">Premier AMC Service Excellence Award</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Carousel Indicators  */}
          <div className="carousel-indicators position-static mt-4 mb-0 gap-2 justify-content-center">
            <button type="button" data-bs-target="#awardsCarousel" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#awardsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ======================================================================
       ESTEEMED CLIENTS & CORPORATE PARTNERS (Logo Carousel)
       ======================================================================  */}
  <section className="clients-strip-wrapper py-5 bg-white border-bottom" id="clients">
    <div className="container-xl">
      <div className="mb-4" data-aos="fade-up">
        <span className="text-uppercase fw-bold text-success small" style={{"letterSpacing":"0.12em"}}>Enterprise
          Portfolio</span>
        <h3 className="h5 fw-bold text-dark mb-0 mt-1">Trusted by Chennai's Foremost Enterprises, Healthcare Leaders &
          Luxury Estates</h3>
      </div>

      {/*  Seamless Continuous Logo Ticker Strip (No Separate Cards, Generic & Normal)  */}
      <div className="client-logo-ticker-container" data-aos="fade-up">
                        <div className="client-logo-track">
          {/*  Set 01: Authentic Client Logos  */}
          <div className="client-logo-item" title="Anna University">
            <img src="assets/images/clients/anna-university.png" alt="Anna University Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Sri Ramachandra Medical Centre">
            <img src="assets/images/clients/ramachandra-hospital.png" alt="Sri Ramachandra Medical Centre Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Vodafone Idea (Vi)">
            <img src="assets/images/clients/vodafone-idea.png" alt="Vodafone Idea (Vi) Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="VS Hospitals">
            <img src="assets/images/clients/vs-hospital.png" alt="VS Hospitals Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Decathlon Sports">
            <img src="assets/images/clients/decathlon.png" alt="Decathlon Sports Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Prabha Automotive Engineers">
            <img src="assets/images/clients/prabha-automotive.png" alt="Prabha Automotive Engineers Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Craftsman Automation">
            <img src="assets/images/clients/craftsman.png" alt="Craftsman Automation Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Wipro Infrastructure Engineering">
            <img src="assets/images/clients/wipro.png" alt="Wipro Infrastructure Engineering Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Reliance">
            <img src="assets/images/clients/reliance.png" alt="Reliance Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Accel Limited">
            <img src="assets/images/clients/accel.png" alt="Accel Limited Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="AG Hospital">
            <img src="assets/images/clients/ag-hospital.png" alt="AG Hospital Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Hathway Broadband">
            <img src="assets/images/clients/hathway.png" alt="Hathway Broadband Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Haven Sampoorna Catering">
            <img src="assets/images/clients/sampoorna-catering.png" alt="Haven Sampoorna Catering Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Fever 104 FM">
            <img src="assets/images/clients/fever-fm.png" alt="Fever 104 FM Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="GenXlead">
            <img src="assets/images/clients/genx-led.png" alt="GenXlead Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Income Tax Department, Govt of India">
            <img src="assets/images/clients/income-tax.png" alt="Income Tax Department, Govt of India Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="Green Trends">
            <img src="assets/images/clients/green-trends.png" alt="Green Trends Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" title="NLC India Limited">
            <img src="assets/images/clients/nlc-india.png" alt="NLC India Limited Official Logo" className="client-logo-img" loading="lazy" />
          </div>

          {/*  Set 02: Duplicate for Seamless Infinite Marquee Loop  */}
          <div className="client-logo-item" aria-hidden="true" title="Anna University">
            <img src="assets/images/clients/anna-university.png" alt="Anna University Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Sri Ramachandra Medical Centre">
            <img src="assets/images/clients/ramachandra-hospital.png" alt="Sri Ramachandra Medical Centre Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Vodafone Idea (Vi)">
            <img src="assets/images/clients/vodafone-idea.png" alt="Vodafone Idea (Vi) Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="VS Hospitals">
            <img src="assets/images/clients/vs-hospital.png" alt="VS Hospitals Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Decathlon Sports">
            <img src="assets/images/clients/decathlon.png" alt="Decathlon Sports Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Prabha Automotive Engineers">
            <img src="assets/images/clients/prabha-automotive.png" alt="Prabha Automotive Engineers Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Craftsman Automation">
            <img src="assets/images/clients/craftsman.png" alt="Craftsman Automation Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Wipro Infrastructure Engineering">
            <img src="assets/images/clients/wipro.png" alt="Wipro Infrastructure Engineering Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Reliance">
            <img src="assets/images/clients/reliance.png" alt="Reliance Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Accel Limited">
            <img src="assets/images/clients/accel.png" alt="Accel Limited Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="AG Hospital">
            <img src="assets/images/clients/ag-hospital.png" alt="AG Hospital Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Hathway Broadband">
            <img src="assets/images/clients/hathway.png" alt="Hathway Broadband Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Haven Sampoorna Catering">
            <img src="assets/images/clients/sampoorna-catering.png" alt="Haven Sampoorna Catering Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Fever 104 FM">
            <img src="assets/images/clients/fever-fm.png" alt="Fever 104 FM Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="GenXlead">
            <img src="assets/images/clients/genx-led.png" alt="GenXlead Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Income Tax Department, Govt of India">
            <img src="assets/images/clients/income-tax.png" alt="Income Tax Department, Govt of India Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="Green Trends">
            <img src="assets/images/clients/green-trends.png" alt="Green Trends Official Logo" className="client-logo-img" loading="lazy" />
          </div>
          <div className="client-logo-item" aria-hidden="true" title="NLC India Limited">
            <img src="assets/images/clients/nlc-india.png" alt="NLC India Limited Official Logo" className="client-logo-img" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  ======================================================================
       SECTION 03 — RESIDENTIAL AIR-CONDITIONING (Expanded with Tonnage & Scale)
       ======================================================================  */}
  <section className="section-padding bg-white" id="residential">
    <div className="container-xl">

      <div className="text-center mb-5" data-aos="fade-up">
        <div className="text-uppercase fw-bold small text-info mb-2"
          style={{"color":"var(--airtech-deep-teal) !important","letterSpacing":"0.1em"}}>Residential Climate Engineering
        </div>
        <h2 className="display-6 fw-bold mb-3">Refined Home Comfort, Tailored for Modern Living.</h2>
        <p className="text-secondary mx-auto" style={{"maxWidth":"720px"}}>
          From compact urban apartments in Chennai to expansive luxury villas along ECR and OMR, we provide silent,
          energy-efficient cooling solutions matched with flawless aesthetic architectural integration.
        </p>
      </div>

      {/*  Residential Scale & Tonnage Metric Strip (Runs on Scroll)  */}
      <div className="section-metrics-strip" data-aos="fade-up">
        <div className="row g-4 text-center">
          <div className="col-6 col-lg-3 border-end-lg">
            <div className="section-metric-num">
              <span data-counter="12800">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Units Installed in Homes</div>
            <div className="small text-secondary mt-1">Across Metropolitan Chennai</div>
          </div>

          <div className="col-6 col-lg-3 border-end-lg">
            <div className="section-metric-num">
              <span data-counter="19200">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Tons (TR) Managed</div>
            <div className="small text-secondary mt-1">Residential Cooling Capacity</div>
          </div>

          <div className="col-6 col-lg-3 border-end-lg">
            <div className="section-metric-num">
              <span data-counter="180">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Luxury Villas Completed</div>
            <div className="small text-secondary mt-1">ECR, OMR & Poes Garden</div>
          </div>

          <div className="col-6 col-lg-3">
            <div className="section-metric-num">
              <span data-counter="99">0</span><span className="accent-sign">.2%</span>
            </div>
            <div className="section-metric-title">First-Time Right Rate</div>
            <div className="small text-secondary mt-1">Certified Hitachi Engineering</div>
          </div>
        </div>
      </div>

      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6 d-none d-lg-block" data-aos="fade-right">
          <div className="interactive-photo-frame border shadow-sm">
            <img src="assets/images/residential-ac.jpg"
              alt="Modern Chennai Living Room with Silent Inverter Air Conditioning" className="interactive-photo-img" />
            <div className="photo-caption-strip">
              <span className="photo-caption-title">Architectural Concealed Cooling</span>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-6" data-aos="fade-left">
          <h3 className="h3 fw-bold mb-3">Consultative Sizing & Clean Architectural Installation</h3>
          <p className="mb-4 text-secondary">
            A residential air conditioner is only as dependable as the quality of its installation. At AirTech, our
            factory-certified technicians adhere to strict installation protocols — including nitrogen pressure testing,
            micron-level vacuuming, and vibration isolation — ensuring peak cooling performance and years of
            trouble-free operation under Chennai's coastal weather.
          </p>

          <ul className="list-unstyled d-flex flex-column gap-3 mb-4">
            <li className="border-start border-2 ps-3" style={{"borderColor":"var(--airtech-green) !important"}}>
              <span className="d-block fw-bold text-dark">Scientific Heat Load Calculations</span>
              <span className="text-secondary small">Precise tonnage analysis factoring window orientation, glass solar heat
                gain coefficient (SHGC), and terrace ceiling insulation.</span>
            </li>
            <li className="border-start border-2 ps-3" style={{"borderColor":"var(--airtech-turquoise) !important"}}>
              <span className="d-block fw-bold text-dark">Aesthetic Concealed Architectural Piping</span>
              <span className="text-secondary small">Refrigerant piping and condensate drain routes routed through walls in
                coordination with your interior architects.</span>
            </li>
            <li className="border-start border-2 ps-3" style={{"borderColor":"var(--airtech-deep-teal) !important"}}>
              <span className="d-block fw-bold text-dark">Authentic Hitachi Warranty</span>
              <span className="text-secondary small">Direct serial registration providing authentic manufacturer coverage
                and guaranteed genuine Hitachi spares.</span>
            </li>
          </ul>


        </div>
      </div>

      {/*  4 Comprehensive Residential Service Cards  */}
      <div className="row g-4">
        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
          <div className="feature-service-card h-100">
            <div>
              <div className="service-card-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h4 className="h5 fw-bold mb-2">Hitachi Inverter Split Series</h4>
              <p className="small text-secondary mb-3">1.0 TR to 2.0 TR 5-star dual-inverter units with FrostWash
                self-cleaning technology, maintaining 100% rated cooling even at 52°C ambient temperatures.</p>
            </div>
            <a href="#contact" className="btn btn-secondary-custom btn-sm w-100 mt-auto">Get Recommendation</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
          <div className="feature-service-card h-100">
            <div>
              <div className="service-card-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h4 className="h5 fw-bold mb-2">Multi-Split & Villa Concealed</h4>
              <p className="small text-secondary mb-3">Engineered for duplex villas and penthouses. Connect up to 5 indoor
                zones to a single quiet outdoor unit, keeping building balconies uncluttered and pristine.</p>
            </div>
            <a href="#contact" className="btn btn-secondary-custom btn-sm w-100 mt-auto">Explore Villa Solutions</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
          <div className="feature-service-card h-100">
            <div>
              <div className="service-card-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h4 className="h5 fw-bold mb-2">Coastal Humidity Control</h4>
              <p className="small text-secondary mb-3">Customized dehumidification profiles and Gold Fin anti-saline
                condenser protection specifically calibrated to withstand Chennai's high coastal corrosion.</p>
            </div>
            <a href="#contact" className="btn btn-secondary-custom btn-sm w-100 mt-auto">Explore Protection</a>
          </div>
        </div>

        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
          <div className="feature-service-card h-100">
            <div>
              <div className="service-card-icon">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="h5 fw-bold mb-2">Residential AMC & Servicing</h4>
              <p className="small text-secondary mb-3">Quarterly high-pressure foam coil washing, operating pressure
                diagnostic audits, and priority same-day breakdown response with zero hidden labor charges.</p>
            </div>
            <a href="#contact" className="btn btn-secondary-custom btn-sm w-100 mt-auto">Book Service / AMC</a>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 04 — COMMERCIAL AIR-CONDITIONING (Expanded with Tonnage & Scale)
       ======================================================================  */}
  <section className="section-padding commercial-dark-section" id="commercial">
    <div className="container-xl">

      <div className="text-center mb-5" data-aos="fade-up">
        <div className="text-uppercase fw-bold small text-info mb-2"
          style={{"color":"#8be3e8 !important","letterSpacing":"0.1em"}}>Commercial Engineering & Enterprise HVAC</div>
        <h2 className="display-6 fw-bold mb-3">Centralized Climate Systems for Demanding Enterprise Spaces.</h2>
        <p className="mx-auto" style={{"maxWidth":"720px","color":"#c4d8dc"}}>
          Engineered for corporate headquarters, IT parks, healthcare multi-site networks, and cleanrooms requiring
          uninterrupted thermal control, high part-load energy efficiency, and contractual uptime SLAs.
        </p>
      </div>

      {/*  Commercial Scale & Tonnage Handled Metric Strip (Runs on Scroll)  */}
      <div className="section-metrics-strip dark-strip" data-aos="fade-up">
        <div className="row g-4 text-center">
          <div className="col-md-4 border-end-md">
            <div className="section-metric-num">
              <span data-counter="48500">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Tons (TR) Commissioned</div>
            <div className="small mt-1" style={{"color":"#9cb1bc"}}>Commercial Capacity Delivered</div>
          </div>

          <div className="col-md-4 border-end-md">
            <div className="section-metric-num">
              <span data-counter="260">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Commercial Projects Built</div>
            <div className="small mt-1" style={{"color":"#9cb1bc"}}>IT Towers, Hospitals & Factories</div>
          </div>

          <div className="col-md-4">
            <div className="section-metric-num">
              <span data-counter="120">0</span><span className="accent-sign">+</span>
            </div>
            <div className="section-metric-title">Active Enterprise AMCs</div>
            <div className="small mt-1" style={{"color":"#9cb1bc"}}>Continuous Service Contracts</div>
          </div>
        </div>
      </div>

      <div className="row align-items-center g-5 mb-5">
        <div className="col-lg-6" data-aos="fade-right">
          <p className="lead text-white mb-4">
            Commercial air conditioning demands uncompromising technical rigor: precise heat load simulations, duct
            aerodynamic balancing, seasonal part-load efficiency, and zero unscheduled downtime.
          </p>

          <div className="d-flex gap-3 mb-4">
            <div className="commercial-feature-icon-box flex-shrink-0">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h4 className="h6 fw-bold text-white mb-1">Hitachi SET-FREE VRF / VRV Central Infrastructure</h4>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Scalable modular outdoor units up to 96 HP per bank.
                Provides simultaneous cooling and heating, individual tenant power consumption metering, and seamless
                BACnet/Modbus BMS integration.</p>
            </div>
          </div>

          <div className="d-flex gap-3 mb-4">
            <div className="commercial-feature-icon-box flex-shrink-0">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="h6 fw-bold text-white mb-1">Guaranteed Comprehensive Commercial AMCs</h4>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Contractual uptime guarantees, designated lead engineers,
                24/7 on-call breakdown coverage, quarterly oil & compressor health audits, and direct factory spare
                availability.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 d-none d-lg-block" data-aos="fade-left">
          <div className="interactive-photo-frame border border-white border-opacity-25 shadow-lg">
            <img src="assets/images/commercial-hvac.jpg"
              alt="AirTech Commercial HVAC Rooftop and Central Plant Installation" className="interactive-photo-img" />
            <div className="photo-caption-strip">
              <span className="photo-caption-title">Central VRF Plants & BMS Integration</span>
            </div>
          </div>
        </div>
      </div>

      {/*  Sector Specializations Grid (6 Key Sectors)  */}
      <div className="row g-3 mb-5">
        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Corporate Towers & IT Corridors</h4>
            <p className="small mb-0">High-efficiency round-flow cassettes and ducted air handlers maintaining quiet,
              uniform temperature across dense workstation floors and conference suites.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Healthcare, Hospitals & Diagnostic Labs</h4>
            <p className="small mb-0">Precision positive pressure ventilation, cleanroom HEPA terminal filters, and strict
              45%-55% RH humidity stabilization for MRI and surgical suites.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Manufacturing, Cleanrooms & R&D</h4>
            <p className="small mb-0">Engineered process cooling, heavy-duty scroll/screw packaged units, and high-ambient
              condensers built for industrial parks in Sriperumbudur and Oragadam.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="400">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Flagship Retail Showrooms</h4>
            <p className="small mb-0">Aesthetic high-capacity concealable climate systems engineered for luxury automotive
              and jewelry flagships with high customer footfalls and glass heat gain.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="500">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Hospitality & Luxury Hotels</h4>
            <p className="small mb-0">Ultra-silent guest room fan coil units (FCU) with whisper-quiet sound decibels,
              centralized guest occupancy sensors, and master chiller integration.</p>
          </div>
        </div>

        <div className="col-sm-6 col-lg-4" data-aos="zoom-in" data-aos-delay="600">
          <div className="commercial-sector-card h-100">
            <h4 className="h6 fw-bold text-white mb-2">Data Centers & Server Infrastructure</h4>
            <p className="small mb-0">High sensible heat ratio (SHR &gt; 0.90) precision air conditioning (PAC) with N+1
              compressor redundancy for uninterrupted server uptime.</p>
          </div>
        </div>
      </div>

      {/*  Commercial Project Delivery Lifecycle Protocol  */}
      <div className="mt-5 pt-4 border-top border-white border-opacity-10" data-aos="fade-up">
        <div className="text-center mb-4">
          <span className="text-uppercase fw-bold text-success small" style={{"letterSpacing":"0.12em"}}>Engineering
            Governance</span>
          <h3 className="h4 fw-bold text-white mb-1">Our 4-Phase Turnkey Commercial HVAC Delivery Protocol</h3>
          <p className="small" style={{"color":"#c4d8dc"}}>Zero shortcuts. Every commercial project is executed under Japanese
            factory commissioning standards.</p>
        </div>

        <div className="row g-3">
          <div className="col-sm-6 col-lg-3">
            <div className="execution-phase-card">
              <div className="execution-phase-num">Phase 01</div>
              <h5 className="h6 fw-bold text-white mb-2">Heat Load Simulation & CAD/BIM</h5>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Room-by-room solar gain analysis, psychrometric load curves,
                and 3D clash-free duct layout modeling.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="execution-phase-card">
              <div className="execution-phase-num">Phase 02</div>
              <h5 className="h6 fw-bold text-white mb-2">SMACNA Duct & Piping Routing</h5>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Precision copper line brazing under continuous dry nitrogen
                purging to eliminate internal copper oxide scale.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="execution-phase-card">
              <div className="execution-phase-num">Phase 03</div>
              <h5 className="h6 fw-bold text-white mb-2">550 PSI Nitrogen Pressure Hold</h5>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Mandatory 24-hour high-pressure nitrogen leak test, followed
                by deep electronic vacuum down to 500 microns.</p>
            </div>
          </div>

          <div className="col-sm-6 col-lg-3">
            <div className="execution-phase-card">
              <div className="execution-phase-num">Phase 04</div>
              <h5 className="h6 fw-bold text-white mb-2">Air Balancing & Commissioning</h5>
              <p className="small mb-0" style={{"color":"#c4d8dc"}}>Anemometer CFM balancing, refrigerant weight charging, BMS
                integration, and client engineering team handover.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 05 — WHY CHOOSE AIRTECH?
       ======================================================================  */}
  <section className="section-padding why-us-section" id="why-us">
    <div className="container-xl">

      <div className="text-center mb-5" data-aos="fade-up">
        <div className="text-uppercase fw-bold small text-info mb-2"
          style={{"color":"var(--airtech-deep-teal) !important","letterSpacing":"0.12em"}}>Engineering Foundations</div>
        <h2 className="display-6 fw-bold mb-3">Six Pillars of AirTech Reliability</h2>
        <p className="text-secondary mx-auto" style={{"maxWidth":"680px"}}>
          Direct engineering accountability, factory-authorized OEM standards, and decades of proven climate performance
          across Chennai’s residential and enterprise landscape.
        </p>
      </div>

      <div className="row g-4">
        {/*  Pillar 01  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="why-choose-card">
            <span className="pillar-watermark">01</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5l3 3" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Two Decades of Proven Track Record</h3>
            <p className="pillar-card-text">Established in 2002, AirTech brings 22+ continuous years of specialized HVAC
              experience. We have weathered Chennai’s most demanding summer heatwaves and delivered dependable cooling
              solutions across more than 15,000 installations.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Founded 2002 • 15,000+ Units Commissioned</span>
            </div>
          </div>
        </div>

        {/*  Pillar 02  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
          <div className="why-choose-card">
            <span className="pillar-watermark">02</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="9" r="6" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8.21 13.89L7 21l5-3 5 3-1.21-7.11" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Exclusive Hitachi Dealership</h3>
            <p className="pillar-card-text">Partnered since 2003 as an exclusive Hitachi authorized dealer. Clients receive
              direct factory-supplied units, priority technical escalations, 100% authentic OEM spare parts, and full
              manufacturer warranty coverage.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Hitachi Exclusive Since 2003 • OEM Direct</span>
            </div>
          </div>
        </div>

        {/*  Pillar 03  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="why-choose-card">
            <span className="pillar-watermark">03</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Strictly In-House Certified Engineers</h3>
            <p className="pillar-card-text">We never outsource installations or service calls to unverified third-party
              contractors. Every AirTech technician is full-time, factory-trained on Hitachi protocols,
              background-verified, and equipped with precision electronic diagnostic instruments.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>100% Full-Time Factory-Trained Engineers</span>
            </div>
          </div>
        </div>

        {/*  Pillar 04  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="why-choose-card">
            <span className="pillar-watermark">04</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Transparent & Accountable Proposals</h3>
            <p className="pillar-card-text">Clear, itemized engineering proposals with zero hidden costs. Copper gauge
              thickness, electrical cabling specifications, vibration isolators, and mounting bracket grades are
              documented upfront in writing before work begins.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span>Itemized Material Specs • Zero Hidden Costs</span>
            </div>
          </div>
        </div>

        {/*  Pillar 05  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="150">
          <div className="why-choose-card">
            <span className="pillar-watermark">05</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Dual Residential & Commercial Mastery</h3>
            <p className="pillar-card-text">From whisper-quiet multi-split installations for coastal luxury residences in
              ECR & Boat Club to multi-floor 100+ Ton VRF installations with building management automation in OMR tech
              parks, our technical capabilities scale seamlessly.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span>Villas to High-Rise Central VRF Plants</span>
            </div>
          </div>
        </div>

        {/*  Pillar 06  */}
        <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div className="why-choose-card">
            <span className="pillar-watermark">06</span>
            <div className="pillar-icon-box">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <circle cx="12" cy="11" r="3" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="pillar-card-title">Proactive Chennai Response Fleet</h3>
            <p className="pillar-card-text">Strategically positioned engineering service vehicles stocked with genuine
              Hitachi diagnostic tools and critical spares cover North, Central, and South Chennai corridors to assure
              swift on-site technical resolution during peak heatwaves.</p>
            <div className="pillar-micro-metric">
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Metro-Wide Spares Stocking & Fast Dispatch</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 06 — TESTIMONIALS (Overhauled Rich Presentation)
       ======================================================================  */}
  <section className="section-padding testimonials-section-rich" id="testimonials">
    <div className="container-xl">

      {/*  Header with Executive Carousel Controls  */}
      <div className="row align-items-end justify-content-between mb-5 position-relative" style={{"zIndex":"1"}} data-aos="fade-up">
        <div className="col-lg-7">
          <div className="text-uppercase fw-bold small text-success mb-2" style={{"letterSpacing":"0.12em"}}>Proven Client
            Performance</div>
          <h2 className="display-6 fw-bold mb-2">Trusted Across Chennai's Enterprises & Luxury Residences.</h2>
          <p className="text-secondary mb-0">Over two decades of verified climate engineering delivered for demanding
            residential and commercial environments.</p>
        </div>
        <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
          <div className="testimonial-header-nav">
            <button className="testimonial-nav-btn" type="button" data-bs-target="#testimonialsCarousel"
              data-bs-slide="prev" aria-label="Previous client testimonial">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="testimonial-nav-btn" type="button" data-bs-target="#testimonialsCarousel"
              data-bs-slide="next" aria-label="Next client testimonial">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*  Testimonials Auto Carousel  */}
      <div id="testimonialsCarousel" className="carousel slide position-relative" style={{"zIndex":"10"}} data-bs-ride="carousel" data-bs-interval="4500"
        data-bs-pause="false" data-bs-keyboard="false" data-bs-touch="true" data-aos="fade-up">

        <div className="carousel-inner">
          {/*  Slide 01  */}
          <div className="carousel-item active">
            <div className="row g-4">
              {/*  Testimonial 01  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "AirTech engineered and commissioned our corporate office central HVAC system across four floors
                      in OMR. Their precision in heat load calculation and duct routing reduced our annual energy
                      overhead noticeably, and their SLA response has been flawless."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">TC</div>
                    <div>
                      <div className="testimonial-client-name">Technology Campus Facility Team</div>
                      <div className="testimonial-client-role">Director of Infrastructure</div>
                      <div className="testimonial-location-tag">OMR IT Corridor, Chennai</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Testimonial 02  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "For our independent villa on the East Coast Road, the AirTech team coordinated flawlessly with
                      our interior architect to conceal all copper lines and drain points. The Hitachi inverter units
                      run virtually silent. Truly professional craftsmanship."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">EC</div>
                    <div>
                      <div className="testimonial-client-name">Private Residential Villa</div>
                      <div className="testimonial-client-role">Architectural Project Owner</div>
                      <div className="testimonial-location-tag">East Coast Road (ECR), Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 02  */}
          <div className="carousel-item">
            <div className="row g-4">
              {/*  Testimonial 03  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "We have maintained an Annual Maintenance Contract with AirTech for over seven years across our
                      healthcare diagnostic centers. Their in-house engineering team conducts proactive preventive
                      checkups, virtually eliminating unscheduled downtime."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">HD</div>
                    <div>
                      <div className="testimonial-client-name">Diagnostics & Clinical Network</div>
                      <div className="testimonial-client-role">Head of Clinical Operations</div>
                      <div className="testimonial-location-tag">Central Chennai Facilities</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Testimonial 04  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "AirTech replaced our dated ducted system with whisper-quiet Hitachi multi-split units in our Poes
                      Garden residence. The installation was dust-free, completed ahead of schedule, and the individual
                      room climate control is superb."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">PG</div>
                    <div>
                      <div className="testimonial-client-name">Residential Penthouse Owner</div>
                      <div className="testimonial-client-role">Homeowner & Business Executive</div>
                      <div className="testimonial-location-tag">Poes Garden, Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Slide 03  */}
          <div className="carousel-item">
            <div className="row g-4">
              {/*  Testimonial 05  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "Maintaining clean humidity and stable 21°C temperature is critical for our precision design labs.
                      AirTech configured Hitachi Set-Free VRF with intelligent zoning. Their prompt engineering visits
                      ensure continuous productivity."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">AR</div>
                    <div>
                      <div className="testimonial-client-name">Automotive Engineering Labs</div>
                      <div className="testimonial-client-role">Senior Facilities Manager</div>
                      <div className="testimonial-location-tag">Guindy Industrial Estate, Chennai</div>
                    </div>
                  </div>
                </div>
              </div>

              {/*  Testimonial 06  */}
              <div className="col-lg-6">
                <div className="rich-testimonial-card h-100">
                  <div>
                    <p className="rich-testimonial-quote">
                      "Operating a 3-storey flagship retail showroom in Anna Nagar requires high cooling loads and fast
                      turnaround. AirTech's AMC team provides priority weekend service with genuine Hitachi parts that
                      keep our customers comfortable year-round."
                    </p>
                  </div>
                  <div className="testimonial-client-meta">
                    <div className="testimonial-client-avatar">RS</div>
                    <div>
                      <div className="testimonial-client-name">Premium Retail Flagship</div>
                      <div className="testimonial-client-role">Managing Director</div>
                      <div className="testimonial-location-tag">Anna Nagar, Chennai</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Carousel Indicators  */}
        <div className="d-flex align-items-center justify-content-center mt-4 pt-3">
          <div className="carousel-indicators position-static m-0 gap-2">
            <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 07 — FREQUENTLY ASKED QUESTIONS
       ======================================================================  */}
  <section className="section-padding" id="faq" style={{"backgroundColor":"#F8FAFA"}}>
    <div className="container-xl">

      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="display-6 fw-bold mb-3" style={{"color":"var(--airtech-charcoal)"}}>Frequently Asked Questions</h2>
        <p className="text-secondary lead fs-6 mx-auto mb-0" style={{"maxWidth":"650px"}}>
          Direct answers on our Hitachi dealership, sizing guidance, installation standards, and maintenance across Chennai.
        </p>
      </div>

      <div className="faq-list-container mx-auto" style={{"maxWidth":"880px"}}>

        {/*  Split AC Unit 01  */}
        <div className="split-ac-unit is-open" data-aos="fade-up" data-aos-delay="50">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">How many years has AirTech been in business in Chennai?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">24</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              AirTech was established in Chennai in <strong>2002</strong> and appointed an <strong>Exclusive Authorized Hitachi Dealer in 2003</strong>. Over the past 22+ years, we have completed over 15,000 installations across luxury villas, apartments, and commercial projects in Chennai under the direct engineering leadership of our proprietor, P.V. Kumar.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 02  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="100">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">Which areas in Chennai do you service for sales and installation?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              We handle projects across all major Chennai regions, including <strong>ECR, OMR, Adyar, Besant Nagar, Poes Garden, Boat Club, Anna Nagar, T. Nagar, Alwarpet, Nungambakkam, Velachery, Guindy, and surrounding suburban areas</strong>. Our engineers visit your site directly to evaluate your layout.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 03  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="150">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">How do I determine the right AC tonnage for my room?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              As a general rule of thumb:
              <ul className="mt-2 mb-2 ps-3">
                <li><strong>Up to 120 sq. ft:</strong> 1.0 Ton Inverter AC</li>
                <li><strong>120 to 180 sq. ft:</strong> 1.5 Ton Inverter AC</li>
                <li><strong>180 to 260 sq. ft:</strong> 2.0 Ton Inverter AC</li>
              </ul>
              Rooms with direct west-facing afternoon sun, top-floor terrace ceilings, or large glass windows absorb more thermal load. Our engineers calculate your room's specific volume and heat gain before quoting so you never overpay for electricity.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 04  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="200">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">Are your air conditioners genuine Hitachi with official warranty?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              Yes, 100%. Because AirTech is an authentic OEM Hitachi dealer, all units arrive directly from Hitachi's factory in sealed packaging. Each unit's serial number is officially registered for complete manufacturer warranty coverage, including compressor and PCB protection.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 05  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="250">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">How do you protect outdoor AC units from Chennai's coastal corrosion?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              Chennai's coastal belt carries salt humidity that quickly corrodes ordinary condensers. We install Hitachi systems with factory <strong>anti-corrosive hydrophilic fin coatings</strong>, utilize heavy-gauge copper lines with UV-treated insulation, and mount condensers on elevated heavy-duty brackets to prevent water pooling.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 06  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="300">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">Do you provide maintenance and Annual Maintenance Contracts (AMC)?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              Yes. We provide both Comprehensive and Non-Comprehensive AMCs for residences, villas, and commercial properties. Our service plans include scheduled chemical servicing, filter sterilization, refrigerant pressure checks, and priority breakdown attendance with 100% genuine Hitachi OEM spare parts.
            </div>
          </div>
        </div>

        {/*  Split AC Unit 07  */}
        <div className="split-ac-unit" data-aos="fade-up" data-aos-delay="350">
          <div className="ac-chassis" onClick={(e) => (window as any).toggleSplitAc?.(e.currentTarget)}>
            <div className="ac-top-grille" aria-hidden="true">
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span><span className="grille-slat"></span><span className="grille-slat"></span>
              <span className="grille-slat"></span>
            </div>
            <div className="ac-front-panel">
              <div className="ac-title-group">
                <div className="ac-badge-strip">
                  <span className="ac-brand-text">Hitachi Inverter High-Wall Unit</span>
                </div>
                <h3 className="ac-question-heading">How do I request a site inspection or get a quote?</h3>
              </div>
              <div className="ac-console-cluster">
                <div className="ac-led-indicators">
                  <span className="ac-led-dot power-led" title="Power"></span>
                  <span className="ac-led-dot timer-led" title="Cooling Active"></span>
                </div>
                <div className="ac-led-temp"><span className="temp-val">--</span><span className="temp-unit">°C</span></div>
                <div className="ac-ir-eye" title="Infrared Receiver"></div>
              </div>
            </div>
            <div className="ac-chrome-stripe" aria-hidden="true"></div>
            <div className="ac-discharge-vent">
              <div className="ac-motorized-louver">
                <span className="louver-handle-tab"></span>
              </div>
            </div>
          </div>
          <div className="ac-airflow-drawer">
            <div className="ac-cool-breeze-glow" aria-hidden="true"></div>
            <div className="ac-airflow-content">
              You can call our Chennai office directly at <strong>+91 98418 06967</strong> / <strong>+91 98412 53976</strong>, message us on <a href="https://wa.me/919841806967" target="_blank" rel="noopener" className="text-decoration-none fw-bold" style={{"color":"var(--airtech-turquoise)"}}>WhatsApp</a>, or send a request through our <a href="#contact" className="text-decoration-none fw-bold" style={{"color":"var(--airtech-turquoise)"}}>Contact form below</a>. Our engineering team will review your space and provide an honest, itemized quotation.
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/*  ======================================================================
       SECTION 08 — CONTACT AND ENQUIRY
       ======================================================================  */}
  <section className="section-padding bg-white" id="contact">
    <div className="container-xl">

      <div className="text-center mb-5" data-aos="fade-up">
        <div className="text-uppercase fw-bold small text-info mb-2"
          style={{"color":"var(--airtech-deep-teal) !important","letterSpacing":"0.1em"}}>Initiate Consultation</div>
        <h2 className="display-6 fw-bold mb-3">Connect with Our Air-Conditioning Specialists.</h2>
        <p className="text-secondary mx-auto" style={{"maxWidth":"680px"}}>
          Whether you are evaluating a new residential installation, planning commercial VRF infrastructure, or seeking
          dependable AMC maintenance in Chennai, we are here to assist.
        </p>
      </div>

      <div className="row g-5 align-items-start">

        {/*  Contact Information Column  */}
        <div className="col-lg-5" data-aos="fade-right">
          <h3 className="h4 fw-bold mb-3">Headquarters & Service Hub</h3>
          <p className="text-secondary mb-4">
            Reach out via phone, email, or our interactive consultation form. Our engineering supervisors respond
            swiftly to all inquiries across Chennai and surrounding industrial corridors.
          </p>

          <div className="d-flex flex-column gap-3 mb-4">
            <div className="contact-info-block">
              <div className="contact-icon-box">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <div className="small fw-bold text-secondary text-uppercase">Telephone Consultation</div>
                <div className="fw-bold d-flex flex-wrap align-items-center gap-2">
                  <a href="tel:+919841806967" className="text-dark">+91 98418 06967</a>
                  <span className="text-muted">/</span>
                  <a href="tel:+919841253976" className="text-dark">+91 98412 53976</a>
                </div>
                <div className="small text-muted mt-1">Direct lines to Technical Sales Desk</div>
              </div>
            </div>

            {/*  Dedicated WhatsApp Direct Card  */}
            <div className="contact-info-block">
              <div className="contact-icon-box">
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </div>
              <div>
                <div className="small fw-bold text-secondary text-uppercase">Direct WhatsApp Chat</div>
                <div className="fw-bold"><a href="https://wa.me/919841806967" target="_blank" rel="noopener" className="text-dark">+91 98418 06967</a></div>
                <div className="small text-muted">Instant estimates, floor plans & site photos</div>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon-box">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="small fw-bold text-secondary text-uppercase">Written Enquiries</div>
                <div className="fw-bold"><a href="mailto:airtech.admin@gmail.com"
                    className="text-dark">airtech.admin@gmail.com</a></div>
                <div className="small text-muted">Drawings, BOQs & Formal RFPs</div>
              </div>
            </div>

            <div className="contact-info-block">
              <div className="contact-icon-box">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="small fw-bold text-secondary text-uppercase">Primary Chennai Operations</div>
                <div className="fw-bold text-dark">17A, 2nd Street, Muralikrishna Nagar, Valasaravakkam, Chennai 600087</div>
                <div className="small text-muted"><a href="https://www.google.com/maps/place/AirTech+Hitachi/@13.0480192,80.1752344,862m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a52613683e8acc3:0xcd4bef41d8e051ac!8m2!3d13.0480192!4d80.1778093!16s%2Fg%2F1tdg1m__" target="_blank" rel="noopener noreferrer" className="text-teal text-decoration-underline fw-semibold">View on Google Maps →</a></div>
              </div>
            </div>
          </div>
        </div>

        {/*  Enquiry Form Column  */}
        <div className="col-lg-7" data-aos="fade-left">
          <div className="enquiry-card-wrap">
            <h3 className="h4 fw-bold mb-2">Request an Engineering Consultation</h3>
            <p className="text-secondary small mb-4">Fill in the specifications below and our technical desk will get back
              to you within 2 business hours.</p>

            <div id="formAlert" className="alert d-none" role="alert"></div>

            <form id="enquiryForm" noValidate>
              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label htmlFor="fullName" className="form-label small fw-bold">Full Name <span
                      className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="fullName" placeholder="e.g. Karthik Sundaram" required />
                  <div className="invalid-feedback"></div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="phoneNumber" className="form-label small fw-bold">Phone Number <span
                      className="text-danger">*</span></label>
                  <input type="tel" className="form-control" id="phoneNumber" placeholder="10-digit mobile number" required />
                  <div className="invalid-feedback"></div>
                </div>
              </div>

              <div className="row g-3 mb-3">
                <div className="col-sm-6">
                  <label htmlFor="emailAddress" className="form-label small fw-bold">Email Address <span
                      className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="emailAddress" placeholder="e.g. name@domain.com"
                    required />
                  <div className="invalid-feedback"></div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="serviceRequired" className="form-label small fw-bold">Service Required <span
                      className="text-danger">*</span></label>
                  <select className="form-select" id="serviceRequired" required>
                    <option value="" disabled selected>Select cooling service...</option>
                    <option value="Residential Split / Inverter AC">Residential Split / Inverter AC</option>
                    <option value="Residential Villa Multi-Split / Concealed">Residential Villa Multi-Split / Concealed
                    </option>
                    <option value="Commercial VRF / VRV System">Commercial VRF / VRV Central HVAC</option>
                    <option value="Commercial Ducted / Cassette Units">Commercial Ducted / Cassette Units</option>
                    <option value="AC Installation & Precision Piping">AC Installation & Precision Piping</option>
                    <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                    <option value="Emergency Repair / Servicing">Emergency Repair / Servicing</option>
                    <option value="Other Consultation">Other Engineering Enquiry</option>
                  </select>
                  <div className="invalid-feedback"></div>
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="enquiryMessage" className="form-label small fw-bold">Message / Project Requirements <span
                    className="text-danger">*</span></label>
                <textarea className="form-control" id="enquiryMessage" rows={4}
                  placeholder="Please mention the floor area, number of rooms/tonnage requirement, or specific service needed..."
                  required></textarea>
                <div className="invalid-feedback"></div>
              </div>

              <button type="submit" className="btn btn-primary-custom w-100 py-3">
                <span>Submit Consultation Request</span>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/*  ======================================================================
       SECTION 08 — CORPORATE FOOTER
       ======================================================================  */}
  
    </main>
  );
}
