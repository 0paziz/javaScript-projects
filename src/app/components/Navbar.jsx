'use client'

import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-24 py-4 shadow bg-blue-950">
      <h1 className="text-xl font- text-white text-center">JS Projects</h1>
      <div className='flex items-center gap-5'>
        <a href='#home' className='text-white hover:text-blue-500'> Home </a>
        <a href='#projects' className='text-white hover:text-blue-500'>Projects</a>
      </div>
    </nav>
  )
}
