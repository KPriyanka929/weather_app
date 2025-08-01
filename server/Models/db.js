require("dotenv").config({ path: __dirname + "/../.env" });
 //inside config { path: __dirname + "/../.env" } bcs .env is in server folder not in Models folder 
const mongoose=require('mongoose')
const mongo_url=process.env.MONGO_CONN


//mongoose.connect() is func from mongoose lib to connect node js to mongo db
mongoose.connect(mongo_url) //is a promise 
// Waits for an async operation (like DB connection) to finish And then either:resolves (success) → .then() rejects (error) → .catch()
	.then(()=>{
		console.log("mongo db established")
	})
	.catch((err)=>{
		console.log("mongodb conn error",err)
	})
