import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostsApp from './features/PostsApp'
import AppShell from './components/AppShell'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AppShell>
      <PostsApp />
     </AppShell>
    </>
  )
}

export default App
