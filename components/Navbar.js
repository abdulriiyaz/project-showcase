'use client';
import React from 'react'

const Navbar = () => {
  return (
    
    <nav
      className="relative flex flex-wrap items-center justify-between w-full py-2 shadow-lg bg-gradient-to-b from-blue-500 to-blue-500 text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
      <div className="flex flex-wrap items-center justify-between w-full px-3">
        <a
          className="ml-2 text-xl text-neutral-800 dark:text-neutral-200"
          href="#"
          >Ω Ri7az Ω</a
        >
        <div className="ml-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-500 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2" />
  
        </div>
      </div>
    </nav>
  )
}

export default Navbar