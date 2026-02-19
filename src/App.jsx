import './App.css'
import Header from "./components/Header.jsx";
import React from "react";
import Homepage from "./components/Homepage.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
      <div className="app-container d-flex flex-column min-vh-100">
          {/*hero section*/}
          <main class="container-fluid full-section">
              <Header/>
          </main>


          <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>

          {/*footer*/}
          <footer className="container-fluid full-section bg-dark text-white py-5">
              <div className="text-center"><h4>Contact Us</h4> <p>Email • LinkedIn • GitHub</p></div>

              <div className="bg-dark text-white text-center py-3 mt-auto">
                  <small>© {new Date().getFullYear()} Magam<span className="text-blue">it</span> — All rights reserved.</small>
              </div>
          </footer>
      </div>
  )
}

export default App
