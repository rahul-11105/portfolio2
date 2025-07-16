import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio'
import Resume from './components/Resume/Resume'
import Work from './components/Work/Work'
import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

function App() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
    <Navbar/>
        <Routes>
              <Route path="/" element={
                <>
                <Home/>
                <Portfolio/>
                </>
              }/>
              <Route path='/work' element={<Work/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/resume' element={<Resume/>}/>
        </Routes>
      <Footer/>
      {/* <Resume/> */}
    </>
  )
}

export default App
