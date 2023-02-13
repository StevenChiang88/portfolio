import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
     
      <head />
      <nav  className="h-20 bg-white/75 text-white flex justify-between items-center text-xl">
<p>LOGO</p>
<ul className="flex gap-8 ">
  <li>Home</li>
  <li>Projects</li>
  <li>Contact</li>
</ul>

<p>Sun</p>
      </nav>
      <body>{children}</body>
    </html>
  )
}
