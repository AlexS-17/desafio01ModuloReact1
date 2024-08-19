import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Cart2 from './components/Cart2';
import Footer from './components/Footer';
import NavBar from './components/NavBar';


function App() {
  return (
    // Requisito 1: App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        {/* <Home></Home>
        <RegistrationForm />
        <FormularioLogin /> */}
        <Cart2/>
        <Footer></Footer>
    </>
  )
}
export default App;




