import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import UsersList from './pages/UsersList'
import AddUser from './pages/AddUser'
import EditUser from './pages/EditUser'


import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/add' element={<AddUser/>}/>
        <Route path ='/edit' element={<EditUser/>}/>     
      </Routes>
    </div>
  )
}

export default App