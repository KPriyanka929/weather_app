// src/components/Login.js
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { Link ,useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from 'axios';

const Home = () => {
  const [loginemail, setLoginemail] = useState("");
  const [pass, setPass] = useState("");


  //backend + frontend

  //It's used to programmatically redirect the user after login 
const navigate = useNavigate(); // <-- for redirecting after login //react routerdom hook



//axios is a library that helps us make HTTP requests (like GET, POST) from the frontend (React) to the backend (Node.js).
  const handleLogin = async () => {
    try {

      const res = await axios.post("http://localhost:8080/login", {
        email: loginemail,
        password: pass,
      });
      //This sends a POST request to your backend (/login) with the login email and password as the request body.



      const { token } = res.data;
      // //The backend sends back a token (JWT) if login is successful.

      if (token) {
        localStorage.setItem("token", token); // ✅ Save JWT in localStorage
        alert("Login successful!");
        navigate("/dashboard"); // or any protected route
      } else {
        alert("Login failed: No token received");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

//


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
        sx={{ p: 4, width: 320, height: 300, backdropFilter: "blur(5px)" }}
      >
        <Typography variant="h5" textAlign="center" gutterBottom>
          Login
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          type="email"
          onChange={(e) => setLoginemail(e.target.value)}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          type="password"
          onChange={(e) => setPass(e.target.value)}
        />
        <Button
          variant="contained"
          type="submit"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Sign In
        </Button>
        <Typography variant="subtitle1" sx={{ textAlign: "center", my: 1 }}>
          New User?{" "}
          <Link to="/signup" underline="hover">
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Home;
