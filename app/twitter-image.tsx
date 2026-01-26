import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/constants/site'

export const runtime = 'edge'

export const alt = siteConfig.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f4c81',
          backgroundImage: 'linear-gradient(135deg, #0f4c81 0%, #0a3a63 100%)',
        }}
      >
        {/* Water wave decoration at top */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '120px',
            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
          }}
        >
          {/* Company name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            AK Water Works
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            Plumbing & Waterproofing Experts
          </div>

          {/* Service highlights */}
          <div
            style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            {['24/7 Emergency', 'Licensed & Insured', 'Family Owned'].map((item) => (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  padding: '12px 24px',
                  borderRadius: '50px',
                  fontSize: 20,
                  fontWeight: 600,
                  color: 'white',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#22c55e',
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          {/* Location */}
          <div
            style={{
              fontSize: 24,
              color: 'rgba(255,255,255,0.7)',
              textAlign: 'center',
            }}
          >
            Serving Northeast Ohio & Western PA
          </div>
        </div>

        {/* Phone number at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#22c55e',
            padding: '16px 32px',
            borderRadius: '12px',
            fontSize: 28,
            fontWeight: 700,
            color: 'white',
          }}
        >
          {siteConfig.phone}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
