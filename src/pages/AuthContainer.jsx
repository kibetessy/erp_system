import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';


const AuthContainer = () => {
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate =useNavigate();
       

   // Mock login function to simulate authentication
   const mockUser = {
    email: 'test@example.com',
    password: 'password123',
  };

  const handleLogin = ({ email, password }) => {
    if (email === mockUser.email && password === mockUser.password) {
      console.log('Login successful');
      navigate('/home'); // Redirect to dashboard
    } else {
      console.error('Invalid email or password');
    }
  };

  return (
            
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Box p={4} maxWidth={400} width="100%" boxShadow={3} borderRadius={4} bgcolor="white">
      <Typography variant="h4" align="center" gutterBottom>
        {isSigningUp ? 'Sign Up' : 'Login'}
      </Typography>
      {isSigningUp ? (
        <SignUpForm onLoginClick={() => setIsSigningUp(false)} />
      ) : (
        <LoginForm onLogin={handleLogin} onSignupClick={() => setIsSigningUp(true)} />
      )}
    </Box>
  </Box>
   
  );
};

export default AuthContainer;
