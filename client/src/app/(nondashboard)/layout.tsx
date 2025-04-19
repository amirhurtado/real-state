'use client'

import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-full w-screen'>
      <NavBar />
      <main className='h-full w-full flex flex-col'>
        { children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
