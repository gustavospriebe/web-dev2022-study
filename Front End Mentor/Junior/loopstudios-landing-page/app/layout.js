import './globals.css'

export const metadata = {
  title: 'Loopstudios',
  description: 'Loopstudios landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
