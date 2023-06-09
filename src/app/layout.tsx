import Footer from '@/components/Footer/Footer'
import Nav from '../components/Nav/Nav'
import './globals.css'
import NavMobile from '@/components/Nav-Mobile/Nav-Mobile'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> 
        <Nav />
        {children}
        <NavMobile/>
        <Footer />
        </body>
    </html>
  )
}
