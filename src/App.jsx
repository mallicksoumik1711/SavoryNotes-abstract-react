
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import SignIn from './Components/SignIn'
import AdminSignIn from './Components/AdminSignIn'
import AdminProfile from './Components/AdminProfile'
import Footer from './Components/Footer'

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
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/adminSignIn" element={<AdminSignIn />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
        </Routes>
        <Footer />
      </Router>
      {/* create slices in Redux/sliceName/slice.js */}
    </div>
  )
}

export default App
