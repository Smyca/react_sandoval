import Contacto from "./components/Contacto";
import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
import Packs from './components/packs'
 const App = () => {
  return (
    <>
      <Navbar />

      <div id="inicio" className="">
        <Home />

      </div>

      <div id="servicios"  >

        <Servicios />
      </div>
      <div id="packs">

        <Packs/>  
      </div>

      <div id="contacto"  >

        <Contacto />
      </div>





    </>
  )
}

export default App;