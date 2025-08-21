import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PatientsLogin from './pages/PatientsLogin';
import DepartmentsPage from './pages/DepartmentsPage';  


function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Patient-login" element={<PatientsLogin/>} />
        {/* <Route path="/Doctor-login" element={<LoginPage />} /> */}
        <Route path="/Departments" element={<DepartmentsPage/>} />
      </Routes>
    </Router>
  ); 
}

export default App;