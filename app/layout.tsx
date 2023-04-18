import {Nunito } from 'next/font/google';
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Modal from './components/Modal/Modal';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb_clone',
}
const font =Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Modal  actionLabel='Submit' title='Login' isOpen/>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
