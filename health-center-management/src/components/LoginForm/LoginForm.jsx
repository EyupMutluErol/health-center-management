import { useNavigate} from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import './LoginForm.css';
import {useForm} from 'react-hook-form';
import { setAuth } from '../../services/authService';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function LoginForm() {
  const navigate = useNavigate();

  const fakeUser = {
    email: "test@health.com",
    password: "Test1234"
  }
  const {
    register,
    handleSubmit,
    formState:{errors,isValid},
  } = useForm({
    mode:'onChange'
  });

  const {user,setUser} = useContext(AuthContext);
  const handleFormSubmit = (data) => {
    if(data.password === fakeUser.password && data.email === fakeUser.email){
      setAuth({email:data.email,role:''});
      setUser({email:data.email,role:''});
      navigate('/dashboard');
    } else {
      alert('Şifre ya da mail adresi hatalı');
    }
  }

  return (
    <Box className="login-form-box">
      <Typography variant="h5" component="h1" gutterBottom textAlign="center">
        Login to Your Account
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          fullWidth
          margin="normal"
          required
          {...register('email',{
            required:'Email alanı boş bırakılamaz',
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Geçersiz email adresi'
            }
          })}
          placeholder='Email'
        />
        {errors.email && <p className='error-message'>{errors.email.message}</p>}
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          margin="normal"
          required
          {...register('password',{
            required: 'Şifre alanı boş bırakılamaz',
            minLength:{
              value:8,
              message:'Şifre alanı en az 8 karakter olmalı'
            },
            maxLength:{
              value:16,
              message:'Şifre alanı en fazla 16 karakter olmalı'
            },
            pattern:{
              value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:'Şifrenizde en az 1 rakam 1 büyük harf ve 1 küçük harf olmalı'
            }
          })}
        />
        {errors.password && <p className='error-message'>{errors.password.message}</p>}
        <Button
          type="submit"
          disabled={!isValid}
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
