'use client'

import NavBar from '@/components/NavBar'
import React from 'react'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='h-screen w-screen'>
      <NavBar />
      <main className='h-full w-full flex flex-col'>
        { children}
      </main>
    </div>
  )
}

export default Layout
