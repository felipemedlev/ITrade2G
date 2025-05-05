'use client';

import { useEffect, useState } from 'react';

export default function ThemeTestPage() {
  const [systemPreference, setSystemPreference] = useState<string>('unknown');
  const [htmlTheme, setHtmlTheme] = useState<string>('unknown');
  const [cssVars, setCssVars] = useState<{background: string, foreground: string}>({background: '', foreground: ''});

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setSystemPreference('dark');
    } else {
      setSystemPreference('light');
    }

    // Check HTML theme attribute
    const htmlElement = document.documentElement;
    setHtmlTheme(htmlElement.getAttribute('data-bs-theme') || 'not set');

    // Check CSS variables
    const computedStyle = getComputedStyle(document.documentElement);
    setCssVars({
      background: computedStyle.getPropertyValue('--background'),
      foreground: computedStyle.getPropertyValue('--foreground')
    });

    // Add listener for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div className="container py-5">
      <h1>Theme Test Page</h1>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Theme Information</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">System preference: <strong>{systemPreference}</strong></li>
            <li className="list-group-item">HTML data-bs-theme: <strong>{htmlTheme}</strong></li>
            <li className="list-group-item">CSS --background: <strong>{cssVars.background}</strong></li>
            <li className="list-group-item">CSS --foreground: <strong>{cssVars.foreground}</strong></li>
          </ul>
        </div>
      </div>
      <p>This page helps verify that your site is not changing based on system color scheme preferences.</p>
      <p>You should see the same theme regardless of your system settings.</p>
    </div>
  );
}