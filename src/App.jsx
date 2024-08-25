import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Pizza from './components/Pizza';
// import Cart from './components/Cart';


function App() {
  return (
    // Requisito 1: App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        <Home/>
        {/* <RegistrationForm />
        <FormularioLogin /> */}
        {/* <Cart/> */}
        <Pizza/>
        <Footer></Footer>
    </>
  )
}
export default App;




