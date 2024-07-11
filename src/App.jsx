import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Layout from './Components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route index element={<Homepage/>} />
            <Route />
            <Route />
            <Route />
            <Route />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
