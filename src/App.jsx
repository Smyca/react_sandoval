import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
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


    </>
  )
}

export default App;