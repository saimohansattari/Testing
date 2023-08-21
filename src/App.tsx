import './App.css'
import Navbar from "./pages/NavbarPages/Navbar"
import MenuNav from './pages/NavbarPages/MenuNav'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Grocery from './pages/MenubarPages/Grocery';
// import Mobiles from './pages/MenubarPages/Mobiles'
import {Grocery, Mobiles, JentsWear, GirlsWear, KidsWear, Electronics, BeautyToys} from './pages/MenubarPages/index.ts'
import {SignIn, Signup} from './pages/ProfilePages/index.ts'


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </Router>
    
    
    <Router>
      <MenuNav />
      <Routes>
        
        <Route path="/Grocery" element={<Grocery />} />
        <Route path="/Mobiles" element={<Mobiles />} />
        <Route path="/JentsWear" element={<JentsWear />} />
        <Route path="/GirlsWear" element={<GirlsWear />} />
        <Route path="/KidsWear" element={<KidsWear />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/BeautyToys" element={<BeautyToys />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
