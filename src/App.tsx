import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import style from './App.module.scss'

import Aside from './components/Aside'
import SearchBar from './components/SearchBar'
import Router from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={style.App}>
      <aside>
        <Aside />
      </aside>
      <main>
        <nav>
          <SearchBar />
        </nav>
        <Router />
      </main>
    </div>
  )
}

export default App
