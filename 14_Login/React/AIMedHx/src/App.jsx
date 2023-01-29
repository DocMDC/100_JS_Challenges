import React, {useState} from "react"
import {Routes, Route} from "../node_modules/react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Software from "./pages/Software"

export default function App () {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/software" element={<Software/>} />
      </Routes>  
    </div>
  )
}