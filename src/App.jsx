import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Button } from 'react-bootstrap';
import Header from './Header/Header';
import Footer from './footer/Footer';
import Home from './Home/Home';
function App() {
  const [count, setCount] = useState(0)
  const width = '50px'
  const companyName ='  Company-name'

  return (
    <>
    <Header  width={width} companyName={companyName} />
    <Home  companyName={companyName} />

    <Footer width={width}   companyName={companyName}/>
    </>
  )
}

export default App
