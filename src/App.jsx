import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact"
import { Routes, Route} from "react-router-dom";
import Mentorship from "./components/pages/Mentorship";
import Homepage from "./components/pages/Homepage";



export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element ={<Homepage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/mentorship" element={<Mentorship/>} />
        </Routes>
      </main>
    </div>
  )
}
