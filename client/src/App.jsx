import React,{ useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import InicioPage from './views/InicioPage'
//  import Navbar from './components/Navbar'
//  import Login from './components/Login'
// import ClientHome from './views/ClientHome'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Fragment>   
     <BrowserRouter>
      <Routes>
        <Route path='/' element = {<InicioPage/>}/>
      </Routes>
     </BrowserRouter>
   </Fragment>
  )
}

export default App
