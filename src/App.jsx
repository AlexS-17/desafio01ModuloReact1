import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import RegistrationForm from './components/Form';
import NavBar from './components/NavBar';

function App() {
  return (
    // Requisito 1: App.jsx se mostrarán los componentes Navbar, Home y Footer
    <>
        <NavBar></NavBar>
        {/* <Home></Home> */}
        <RegistrationForm />
        <Footer></Footer>
    </>
  )
}
export default App;

