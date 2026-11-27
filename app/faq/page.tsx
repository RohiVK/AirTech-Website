'use client';

import React from 'react';

export default function FaqPage() {
  return (
    <div>
      

  {/*  FAQ HEADER SECTION  */}
  <header className="faq-hero-section">
    <div className="container-xl">
      <div className="faq-list-container text-center">
        <h1 className="display-6 fw-bold mb-3" style={{"color":"var(--airtech-charcoal)"}}>
          Frequently Asked Questions
        </h1>
        <p className="text-secondary lead fs-6 mb-0">
          Direct answers on AirTech, Hitachi air-conditioning systems, room sizing, installation standards, and maintenance in Chennai.
        </p>
      </div>
    </div>
  </header>

  {/*  FAQ QUESTIONS LIST  */}
  <main className="faq-page-wrapper py-5">
    <div className="container-xl">
      <div className="faq-list-container">

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
                <h2 className="ac-question-heading">How many years has AirTech been in business in Chennai?</h2>
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
                <h2 className="ac-question-heading">Which areas in Chennai do you service for sales and installation?</h2>
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
                <h2 className="ac-question-heading">How do I determine the right AC tonnage for my room?</h2>
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
                <h2 className="ac-question-heading">Are your air conditioners genuine Hitachi with official warranty?</h2>
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
                <h2 className="ac-question-heading">How do you protect outdoor AC units from Chennai's coastal corrosion?</h2>
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
                <h2 className="ac-question-heading">Do you provide maintenance and Annual Maintenance Contracts (AMC)?</h2>
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
                <h2 className="ac-question-heading">How do I request a site inspection or get a quote?</h2>
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
              You can call our Chennai office directly at <strong>+91 98418 06967</strong> / <strong>+91 98412 53976</strong>, message us on <a href="https://wa.me/919841806967" target="_blank" rel="noopener" className="text-decoration-none fw-bold" style={{"color":"var(--airtech-turquoise)"}}>WhatsApp</a>, or send a request through our <a href="/#contact" className="text-decoration-none fw-bold" style={{"color":"var(--airtech-turquoise)"}}>Contact page</a>. Our engineering team will review your space and provide an honest, itemized quotation.
            </div>
          </div>
        </div>

        {/*  Direct Consultation Strip Removed  */}

      </div>
    </div>
  </main>

  {/*  CORPORATE FOOTER  */}
  
    </div>
  );
}
