// src/components/Login.js
import axios from 'axios'
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate=useNavigate();

const handleSignup = async (e) => {
  e.preventDefault()
    if (!name || !email || !password) {
      alert("Please fill all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8080/signup", {
        name,
        email,
        password: password,
      });

      if (res.data.success) {
        alert("Signup successful! You can now log in.");
        navigate("/login");
      } else {
        alert(res.data.message || "Signup failed.");
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);
    alert("Signup failed: " + (err.response?.data?.error || "Unknown error"));
    }
  };


  return (
    <Box
      sx={{
        backgroundImage: `url(${require("../images/wallpaper.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
      }}
    >
      <Paper
        elevation={6}
        sx={{ p: 4, width: 320, height: 350, backdropFilter: "blur(5px)" }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          Sign Up
        </Typography>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
      </Paper>
    </Box>
  );
};

export default Signup;
