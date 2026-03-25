'use client';

import { useEffect } from 'react';

export default function AdSense({ dataAdSlot, dataAdFormat = 'auto' }) {
  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    // Push the ad to the adsbygoogle queue
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log('AdSense error:', err);
    }
  }, []);

  // Don't render if no client ID or ad slot is configured
  if (!clientId || !dataAdSlot) {
    return (
      <div className="ad-placeholder">
        <p style={{ color: '#999', fontSize: '12px' }}>Ad space - Configure AdSense</p>
      </div>
    );
  }

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          minHeight: '250px',
        }}
        data-ad-client={clientId}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
}

// Convenience components for specific placements
export function AdHomepage() {
  return (
    <AdSense
      dataAdSlot={process.env.NEXT_PUBLIC_AD_SLOT_HOMEPAGE}
      dataAdFormat="auto"
    />
  );
}

export function AdRecipePage() {
  return (
    <AdSense
      dataAdSlot={process.env.NEXT_PUBLIC_AD_SLOT_RECIPE_PAGE}
      dataAdFormat="auto"
    />
  );
}

export function AdSidebar() {
  return (
    <AdSense
      dataAdSlot={process.env.NEXT_PUBLIC_AD_SLOT_SIDEBAR}
      dataAdFormat="vertical"
    />
  );
}
