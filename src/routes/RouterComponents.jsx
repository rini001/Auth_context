import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Login } from '../components/Login'
import { UsersDetails } from '../components/UsersDetails'
import { Users } from '../components/Users'
import { Navbar } from './Navbar'

export const RouterComponents = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users/:userId" element={<UsersDetails />}/>
        </Route>
      </Routes>
    </div>
  )
}
