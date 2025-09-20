import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SignIn from './Components/SignIn'
import Footer from './Components/Footer'
import UnderConstruction from './Components/UnderConstruction'
import AdminPanel from './Components/AdminPanel'
import UserPanel from './Components/UserPanel'
import About from './Components/About'
import Blog from './Components/Blog'
import Favorites from './Components/Favorties'

function App() {

  return (
    <div style={{
      background: "linear-gradient(135deg, #2e2e2e 0%, #4b3f2f 100%)",
      color: "#F5F5F5"
    }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/adminPanel" element={<AdminPanel/>} />
          <Route path="/userPanel" element={<UserPanel/>} />
          <Route path='/about' element={<About></About>}/>
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/favorite" element={<Favorites/>} />
          <Route path="/*" element={<UnderConstruction />} />
          
        </Routes>
        <Footer />
      </Router>
      {/* create slices in Redux/sliceName/slice.js */}
    </div>
  )
}

export default App
