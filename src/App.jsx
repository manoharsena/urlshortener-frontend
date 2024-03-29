import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Registerpage from './Components/RegisterPage';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import ForgotPasswordPage from './Components/ForgotPasswordPage';
import ResetPassword from './Components/ResetPassword';
import UrlShortener from './Components/UrlShortener';
import NavBar from './Components/NavBar';
import AdminDashboard from './Components/AdminDashboard';
import CreatedUrls from './Components/CreatedUrls';
import UrlDashboard from './Components/UrlDashboard';

const App = () => {

  // Initialize state from localStorage if available, otherwise use empty strings
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [responseData, setResponseData] = useState([]);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
  }, [token, username, email]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registerpage />} />
          <Route path='/login' element={<LoginPage SetUserName={setUsername} SetEmail={setEmail} SetToken={setToken} />} />
          <Route path='/home' element={<><NavBar /><HomePage username={username} email={email} /></>} />
          <Route path='/forgotpassword' element={<ForgotPasswordPage />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
          <Route path='/urlshortener/:email' element={<><NavBar /><UrlShortener email={email} /></>} />
          <Route path='/dashboard' element={<><NavBar /><AdminDashboard token={token} setResponseData={setResponseData} /></>}>
            <Route path='createdurls' element={<CreatedUrls responseData={responseData} />} /> 
            <Route path='urldashboard' element={<UrlDashboard />} />
            {/* for nested routing Don't need to use (/) this */}
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
