const express=require('express')
const router=express.Router()
const bcrypt = require('bcryptjs');

const User=require('../Models/User')

router.post('/signup',async (req,res)=>{
	console.log("Signup request received:", req.body);

	try{
		const {name,email,password}=req.body
		if(!name || !email || !password){
			return res.status(400).json({message:'All fields are required'})
		}
		const existingUser=await User.findOne({email}) 
		//MongoDB queries are asynchronous — they take time to complete. hence await


		if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
	const hashedPassword = await bcrypt.hash(password, 10);//hash(password, saltRounds)

	const newUser = new User({ name, email, password:hashedPassword });
	await newUser.save();  
	res.status(201).json({ message: "User created successfully" });




	}catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }

	
})
module.exports = router;
