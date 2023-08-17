import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
       Todo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const customizedTheme = createTheme({
    palette: {
       
      background: {
        default: '#011126', // Replace with the grey shade you prefer
      },
    },
  });

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate =useNavigate()
    const [fulldata,setfulldata] = useState({
        username:"",
        email:"",
        password:"" })
   
    console.log("🚀 ~ file: signup.jsx:48 ~ SignUp ~ fulldata:", fulldata)
    const handleChange =(e)=>{
        setfulldata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  const handleSubmit = (event) => {
    event.preventDefault();
   axios.post("http://localhost:5000/api/users/add",fulldata).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
  };

  return (
    <ThemeProvider theme={customizedTheme} >
      <Container component="main" maxWidth="xs" sx={{ marginLeft : "700px"}} >
        <CssBaseline />
         <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#A68A56', // Change this to the shade of grey you prefer
                padding: '20px', // Adding padding for better spacing
                borderRadius: '10px', // Adding border radius for a rounded appearance
              }}
        >
            
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="family-name"
                  onChange={(e)=>{ handleChange(e)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{ handleChange(e)}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{ handleChange(e) ; }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
             
              type="submit"
              fullWidth
              variant="contained"
             onClick={()=>{navigate("/login")}}
              sx={{ mt: 3, mb: 2 ,backgroundColor:"#011126" ,onmouseover }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" s>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
