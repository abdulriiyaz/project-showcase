'use client';
import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

const Projects = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-6 py-6 mx-auto">
    <div className="flex flex-col w-full p-4 mb-20 text-center">
      
      <h1 className="items-center mb-4 text-2xl font-medium text-center text-white title-font"><CodeIcon fontSize='large' color='secondary'/>Porject Showcase<CodeIcon fontSize='large' color='secondary'/></h1>
      <p className="mx-auto leading-relaxed text-white lg:w-2/3">Welcome to Aniverse: Where Code Meets Creativity! 🚀 Unleash the power of jQuery, HTML, and CSS in your web projects. Elevate your coding skills with our concise tutorials and dive into the Aniverse of endless possibilities. Start crafting the digital future now! 🌐✨ #AniverseCode #WebDevMagic #jQueryHTMLCSS</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
        <Image className='rounded-lg cursor-pointer hover:scale-105 active:scale-75' src="/calc.png" alt="Calculator" width={201} height={201} 
/>
          <div className="w-full p-4">
            <a className="text-lg font-medium text-gray-900 title-font" href='https://abdulriiyaz.github.io/jquery-calculator/'>Jquery Calculator</a>
            <h3 className="mb-3 text-white">HTML, CSS, JS</h3>
            <p className="mb-4 text-gray-900 ">A simple calculator implemented using jQuery library.</p>
            <span className="inline-flex">
              <a className="text-gray-500 cursor-pointer" href='https://github.com/abdulriiyaz/jquery-calculator'>
              <GitHubIcon className='cursor-pointer' color='secondary'/> 
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
        <Image className='rounded-lg cursor-pointer hover:scale-105 active:scale-75' src="/blog.png" alt="Calculator" width={201} height={201} 
/>
          <div className="w-full p-4">
            <a className="text-lg font-medium text-gray-900 title-font" href='https://blogistan.vercel.app'>Blogistan</a>
            <h3 className="mb-3 text-white">HTML, CSS, JS</h3>
            <p className="mb-4 text-gray-900 ">A not-so normal blog site where technology and We`b Development is discussed.</p>
            <span className="inline-flex">
              <a className="text-gray-500 cursor-pointer" href='https://github.com/abdulriiyaz/blogistan'>
              <GitHubIcon className='cursor-pointer' color='secondary'/> 
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
        <Image className='rounded-lg cursor-pointer hover:scale-105 active:scale-75' src="/ecom.png" alt="ecom" width={201} height={201} 
/>
          <div className="w-full p-4">
            <a className="text-lg font-medium text-gray-900 title-font" href='https://watchdukan.vercel.app'>Watch Dukan</a>
            <h3 className="mb-3 text-white">HTML, CSS, JS</h3>
            <p className="mb-4 text-gray-900 ">An Ecommerce website where you can buy the best smart watches ever to exist.</p>
            <span className="inline-flex">
              <a className="text-gray-500 cursor-pointer" href='https://github.com/abdulriiyaz/ecommerce-page-p2'>
              <GitHubIcon className='cursor-pointer' color='secondary'/> 
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 lg:w-1/4 md:w-1/2">
        <div className="flex flex-col items-center h-full text-center">
        <Image className='rounded-lg cursor-pointer hover:scale-105 active:scale-75' src="/tldr.png" alt="Calculator" width={201} height={201} 
/>
          <div className="w-full p-4">
            <a className="text-lg font-medium text-gray-900 title-font" href='https://tldr.sh/'>TLDR</a>
            <h3 className="mb-3 text-white">HTML, CSS, BASH</h3>
            <p className="mb-4 text-gray-900 ">Collaborative cheatsheets for console commands.</p>
            <span className="inline-flex">
              <a className="text-gray-500 cursor-pointer" href='https://github.com/abdulriiyaz/tldr'>
              <GitHubIcon className='cursor-pointer' color='secondary'/> 
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Projects