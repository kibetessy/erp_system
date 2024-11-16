// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

const LoginForm = ({ onLogin, onSignupClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Log In
      </Button>
      <Button color="secondary" onClick={onSignupClick} sx={{ mt: 2 }}>
        Don’t have an account? Sign Up
      </Button>
    </Box>
  );
};

export default LoginForm;
