import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import AuthPage from './components/AuthPage'
import Report from './components/Report'
import Footer from './components/Footer/Footer'
import { Routes,Route } from 'react-router'
import About from './components/About/About'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="login" element={<AuthPage type={"login"}/>}/>
      <Route path="signup" element={<AuthPage type={"signup"}/>}/>
      <Route path="/report" element={<Report/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
