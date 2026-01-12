import { Header } from '@/components/marketing/header'
import { Footer } from '@/components/marketing/footer'
import { MobileContactBar } from '@/components/ui/mobile-contact-bar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
      <MobileContactBar />
      {/* Spacer for mobile contact bar */}
      <div className="h-16 lg:hidden" />
    </>
  )
}
