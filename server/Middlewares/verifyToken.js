const jwt=require('jsonwebtoken')
const { models } = require('mongoose')
require('dotenv').config()

const verifytoken=(req,res,next)=>{  //req,res,next this order shouldnt be changed
	const auth_header=req.headers.authorization

	if (!auth_header || !auth_header.startsWith('Bearer')){
	return res.status(401).json({message:'Access denied , No token provided'})
}


const token=auth_header.split(' ')[1]

try{
	const decode=jwt.verify(token ,process.env.JWT_SECRET)
	req.user=decode
	next()
}catch(err){
	return res.status(401).json({message :'Invalid Token'}) //401:invalid authentication

}
}
module.exports=verifytoken