import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ContextProvider} from "./context/ContextProvider"
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<App/>}/>
      </Routes>
    </BrowserRouter>
  </ContextProvider>
)
