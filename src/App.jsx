
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  

  return (
  
    <BrowserRouter> 
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/login' element={<LoginPage />} />

        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path="/profile" element={<ProfilePage />} />


    </Routes>
   
    </BrowserRouter>
   
   
  )
}

export default App
