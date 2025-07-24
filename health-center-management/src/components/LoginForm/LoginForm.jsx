import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import './LoginForm.css';

export default function LoginForm() {
  return (
    <Box className="login-form-box">
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Login to Your Account
      </Typography>
      <form>
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}
