import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Formulario from "./components/Formulario"
import Navbar from "./components/Navbar"
import { useState, useEffect } from "react"


function App() {


  return (
    <div className="container mx-auto mt-10 mb-2">
      <Header
      />
      <Navbar/>
      <div className=" flex">
          <Sidebar/>
          <Formulario/>
      </div>
    </div>
  )
}

export default App
