import React from 'react';
import $ from 'jquery';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Projects from './projects/page';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-gradient-to-b from-blue-500 to-pink-500">
      <Projects />
    </main>
  )
}
