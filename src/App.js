import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LeaveApplication from './pages/LeaveApplication';
import UserManagement from './pages/UserManagement';
import TravelRequest from './pages/TravelRequests';
import PaySlip from './pages/PaySlip';
import AuthContainer from './pages/AuthContainer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthContainer />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/LeaveApplication" element={<LeaveApplication />} />
        <Route path="/UserManagement" element={<UserManagement />} />
        <Route path="/TravelRequest" element={<TravelRequest />} />
        <Route path="/PaySlip" element={<PaySlip />} />


      </Routes>
    </Router>
  );
}

export default App;
