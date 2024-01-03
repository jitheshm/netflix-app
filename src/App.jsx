import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";
import { action, Animation, comedy, Drama, Romance } from "../src/constants/constant"

function App() { 
  return (
    <div>
      <Navbar />
      <section className="container-fluid">
        <Banner />
        <Rowpost title="Get In On the Action" url={action} />
        <Rowpost title="Drama" url={Drama} />
        <Rowpost title="Romance" url={Romance} />
        <Rowpost title="Animation" url={Animation} />
        <Rowpost title="Comedy" url={comedy} />
        <Footer />
      </section> 
    </div>

  );


}

export default App
