const express = require("express"); //This loads the Express library/module into your project.
const app = express(); //“Create an app (web server) using Express.”

const bodyParser=require('body-parser')
const cors=require('cors')

require("dotenv").config(); //“Load all the environment variables written inside my .env file and make them available in my app.”

const PORT = process.env.PORT || 8080; //either fetch port from .env or take the hardcoded port no 8080

app.listen(PORT, () => {
  //server starts and responds to requests on ports
  console.log(`server running on port ${PORT}`);
});
//to test the server : app.get(path, callbackFunction)
//This line creates a route on your server that responds to GET requests made
//A route is a path or URL where your backend server listens for a request
app.get("/", (req, res) => {
  res.send("welcome");
});

require('./Models/db')

app.use(bodyParser.json()); //parse json into object
app.use(cors());  // this means server is ready to take requests from any ports.by default, the browser blocks API requests unless you allow it using CORS.
//we can pass configuration object inside parenthesis if we want to give access to specific ports.
// app.use(cors({origin: 'http://localhost:3000' }) 

app.use(express.json()); // This parses JSON body



const signupRoute = require("./Routes/userRoute");
app.use(signupRoute);

const loginRoute = require("./Routes/Login");
app.use(loginRoute);