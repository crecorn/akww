import { CountyHeader } from '@/components/county/county-header'
import { CountyFooter } from '@/components/county/county-footer'
import { getCountyBySlug } from '@/lib/constants/counties'

const county = getCountyBySlug('mahoning-county')!

export default function MahoningCountyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <CountyHeader county={county} />
      <main className="flex-1">
        {children}
      </main>
      <CountyFooter county={county} />
    </div>
  )
}
