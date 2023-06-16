import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/LogIn/LogIn';
import { useState } from "react";
import SecurityForm from './components/SecurityForm/SecurityForm';
import RandomSecurityQuestions from './components/RandomSecurityQuestions/RandomSecurityQuestions';
import Dashboard from './pages/Dashboard/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import './App.scss';

function App() {

  const [isVerificationRequired, setVerificationRequired] = useState(false);

  const handleVerificationSuccess = () => {
    // Handle the case when user answers security questions correctly
    // and allow them to proceed to the desired page
    setVerificationRequired(false);
    // Navigate to the desired page
  };

  const handleVerificationFail = () => {
    // Handle the case when user fails to answer security questions correctly
    // and display an error message or take appropriate action
    // (e.g., display another attempt or redirect)
  };

  const handleVerificationRedirect = () => {
    // Handle the case when user has exhausted attempts and needs to be redirected
    // to the previous page or an error page
    setVerificationRequired(false);
    // Redirect to the previous page or error page
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/user' element={<Dashboard />} />
        <Route path='/securityform' element={<SecurityForm />} />
        <Route path='/:id' element={''} />
        <Route
          path="/verification"
          element={
            isVerificationRequired ? (
              <RandomSecurityQuestions
                onSuccess={handleVerificationSuccess}
                onFail={handleVerificationFail}
                onRedirect={handleVerificationRedirect}
              />
            ) : (
              <LogIn />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;