'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Preloader dismissal
    const preloader = document.getElementById('sitePreloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('is-loaded');
      }, 350);
    }

    // 2. Global AC toggle for FAQ
    if (typeof window !== 'undefined') {
      (window as any).toggleSplitAc = function (element: HTMLElement) {
        const unit = element.closest('.split-ac-unit');
        if (!unit) return;
        const wasOpen = unit.classList.contains('is-open');

        document.querySelectorAll('.split-ac-unit').forEach(u => {
          u.classList.remove('is-open');
          const tempDisplay = u.querySelector('.ac-led-temp');
          if (tempDisplay) {
            tempDisplay.innerHTML = '<span class="temp-val">--</span><span class="temp-unit">&deg;C</span>';
          }
        });

        if (!wasOpen) {
          unit.classList.add('is-open');
          const tempDisplay = unit.querySelector('.ac-led-temp');
          if (tempDisplay) {
            tempDisplay.innerHTML = '<span class="temp-val">24</span><span class="temp-unit">&deg;C</span>';
          }
        }
      };

      (window as any).toggleFaqRow = (window as any).toggleSplitAc;
    }

    // 3. Load Bootstrap & AOS and trigger main.js
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        document.body.appendChild(s);
      });
    };

    Promise.all([
      loadScript('/js/bootstrap.bundle.min.js'),
      loadScript('/js/aos.js')
    ]).then(() => {
      loadScript('/js/main.js');
    });

  }, [pathname]);

  return null;
}
