'use client'

import Script from 'next/script'

export function TrackingScripts() {
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID
  const gadsId = process.env.NEXT_PUBLIC_GADS_ID
  const ghlTrackingId = process.env.NEXT_PUBLIC_GHL_TRACKING_ID

  return (
    <>
      {/* Google Analytics 4 */}
      {ga4Id && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}', {
                page_title: document.title,
                page_location: window.location.href,
              });
              ${gadsId ? `gtag('config', '${gadsId}');` : ''}
            `}
          </Script>
        </>
      )}

      {/* GoHighLevel Tracking */}
      {ghlTrackingId && (
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          strategy="afterInteractive"
        />
      )}

      {/* Phone Click Tracking */}
      <Script id="phone-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('click', function(e) {
            var link = e.target.closest('a[href^="tel:"]');
            if (link && typeof gtag !== 'undefined') {
              var location = 'body';
              if (link.closest('header')) location = 'header';
              else if (link.closest('footer')) location = 'footer';
              else if (link.closest('[data-cta]')) location = 'cta';
              
              gtag('event', 'phone_click', {
                event_category: 'engagement',
                event_label: location,
                phone_number: link.href.replace('tel:', '')
              });
            }
          });
        `}
      </Script>

      {/* CTA Click Tracking */}
      <Script id="cta-tracking" strategy="afterInteractive">
        {`
          document.addEventListener('click', function(e) {
            var cta = e.target.closest('[data-cta]');
            if (cta && typeof gtag !== 'undefined') {
              gtag('event', 'cta_click', {
                event_category: 'engagement',
                event_label: cta.dataset.cta || cta.textContent.trim(),
                page_location: window.location.pathname
              });
            }
          });
        `}
      </Script>

      {/* Scroll Depth Tracking */}
      <Script id="scroll-tracking" strategy="afterInteractive">
        {`
          (function() {
            var scrollMarks = [25, 50, 75, 100];
            var scrolled = {};
            
            window.addEventListener('scroll', function() {
              if (typeof gtag === 'undefined') return;
              
              var scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
              );
              
              scrollMarks.forEach(function(mark) {
                if (scrollPercent >= mark && !scrolled[mark]) {
                  scrolled[mark] = true;
                  gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: mark + '%',
                    non_interaction: true
                  });
                }
              });
            });
          })();
        `}
      </Script>
    </>
  )
}
