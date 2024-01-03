import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Rowpost from "./Components/RowPost/Rowpost";
import { action, Animation, comedy, Drama, Romance } from "../src/constants/constant"
import YVideo from './Components/YVideo/YVideo';
export const videoContext = createContext(null)
function App() {
  const [trailer, setTrailer] = useState(null)
  return (
    <videoContext.Provider value={{ trailer, setTrailer }}>
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
          {trailer && <YVideo />}
        </section>
      </div>
    </videoContext.Provider>
  );


}

export default App
