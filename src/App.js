import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Sport from './components/Sport';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Sport/>
    <Footer/>
    </>
  );
}

export default App;
