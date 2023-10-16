import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Contact from "./components/pages/Contact"
import Producing from "./components/pages/Producing";
import { Routes, Route} from "react-router-dom";


export default function App() {
  return (
    <div>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element ={<AboutMe />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/producing" element={<Producing/>} />
        </Routes>
      </main>
    </div>
  )
}
