'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ClientInit() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Immediately dismiss preloader
    const preloader = document.getElementById('sitePreloader');
    if (preloader) {
      setTimeout(() => {
        preloader.classList.add('is-loaded');
      }, 100);
    }

    // 2. Run master interaction engine
    const runInit = () => {
      if (typeof window !== 'undefined' && (window as any).initAirTech) {
        (window as any).initAirTech();
      }
    };

    runInit();
    // Also retry after 300ms in case external scripts were still hydrating
    const timer = setTimeout(runInit, 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
