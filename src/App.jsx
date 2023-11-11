import React from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact"
import { Routes, Route} from "react-router-dom";
import Mentorship from "./components/pages/Mentorship";
import Homepage from "./components/pages/Homepage";
import ProjectContact from "./components/pages/ProjectContact";


export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element ={<Homepage />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projectcontact" element={<ProjectContact/>} />
          <Route path="/mentorship" element={<Mentorship/>} />
        </Routes>
      </main>
    </div>
  )
}
