import NavbarComponents from"./components/Navbar"

// import"./App.css"
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <NavbarComponents/>
      <Home/>
      <ToastContainer/>
    </div>
  );
}

export default App;
