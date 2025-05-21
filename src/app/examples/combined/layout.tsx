export default function CombinedLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <>
      {children}
      {modal}
    </>
  )
}
