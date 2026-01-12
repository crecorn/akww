export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // This is just a pass-through layout
  // Auth checks happen in the (dashboard) group layout
  return <>{children}</>
}
