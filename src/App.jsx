import Home  from "./components/Home";
import Navbar from "./components/Navbar";
import Servicios from "./components/Servicios";
 const App = () => {
  return (
    <>
      <Navbar />

      <div id="inicio">
        <Home />

      </div>

      <Servicios />


    </>
  )
}

export default App;