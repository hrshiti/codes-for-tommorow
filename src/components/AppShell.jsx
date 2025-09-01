import React from 'react'

const AppShell = ({children}) => {
  return (
    <div>
      <div className='"min-h-screen'>
        <header className='sticky top-0 z-10 bg-white/80 backdrop-blur border-b '>
<div className='max-w-6xl mx-auto px-4 py-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
    <h1 className='text-xl font-bold'> Post Explorer</h1>
<div className='text-sm text-neutral-600'> Dismiss</div>
</div>
        </header>
        <main className='max-w-6xl mx-auto px-4 py-6 sm:px-6 lg:px-8'>
          {children}
</main>
<footer className='border-t '></footer>
      </div>
    </div>
  )
}

export default AppShell
