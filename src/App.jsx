import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Signup from './Pages/SignUp/Signup';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Profile/Profile';
import About from './Pages/About/About';
import Signin from './Pages/Signin/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Resetpass from './Pages/Resetpass/Resetpass';


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route index="/" element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path='contact' element={<Contact/>}/>
            <Route path='profile' element={<Dashboard/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='signin' element={<Signin/>}/>
            <Route path='confirmation' element={<Resetpass/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
