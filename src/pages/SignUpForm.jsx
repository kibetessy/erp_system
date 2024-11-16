// src/components/SignUpForm.jsx
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginForm from '../pages/LoginForm'

const SignUpForm = ({ onLoginClick }) => {
  return (
    <Box component="form">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <TextField label="Email" type="email" fullWidth margin="normal" variant="outlined" />
      <TextField label="Password" type="password" fullWidth margin="normal" variant="outlined" />
      <TextField
        label="Confirm Password"
        type="password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
      <Button color="secondary" onClick={onLoginClick} sx={{ mt: 2 }}>
        Already have an account? Log In 
      </Button>
    </Box>
  );
};

export default SignUpForm;
