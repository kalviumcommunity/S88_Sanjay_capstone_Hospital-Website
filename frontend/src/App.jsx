import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientsLogin from './pages/PatientsLogin';


function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Patient-login" element={<PatientsLogin/>} />
        {/* <Route path="/Doctor-login" element={<LoginPage />} /> */}
      </Routes>
    </Router>
  ); 
}

export default App;