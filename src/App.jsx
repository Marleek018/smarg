import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Signup from './Pages/SignUp/Signup';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Profile/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>

            <Route index element={<Homepage />} />
            <Route path="signup" element={<Signup />} />
            <Route path='contact' element={<Contact/>}/>
            <Route path='profile' element={<Dashboard/>}/>
            <Route />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
