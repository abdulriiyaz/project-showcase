'use client';
import React from 'react'
import PestControlIcon from '@mui/icons-material/PestControl';
const Footer = () => {
  return (
    <footer className="text-white bg-gradient-to-b from-pink-500 to-pink-500 body-font">
  <div className="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
    <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
      <PestControlIcon />
      <span className="ml-3 text-xl">Riyaz Ansari</span>
    </a>
    <p className="mt-4 text-sm text-gray-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-900 sm:py-2 sm:mt-0">© 2024 Riyaz —
      <a href="https://twitter.com/ri7az" className="ml-1 text-gray-900" rel="noopener noreferrer" target="_blank">@ri7az</a>
    </p>
    
  </div>
</footer>
  )
}

export default Footer
