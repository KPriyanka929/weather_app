const mongoose=require('mongoose')
const schema=mongoose.Schema //Schema is a class that lets you define the structure of your documents.



const userSchema= new schema({
	name:{
		type:String,
		required:true
	},
	  email: {                      // ✅ Add this
    type: String,
    required: true,
    unique: true
  },
	password:{
		type:String,
		required:true
	}
})


//A Model is what you use to interact with the database. 
//userModel is a powerful object with built-in methods like:

// userModel.find() – to find all users
// userModel.create({...}) – to add a new user
// userModel.updateOne(...) – to update a user
// userModel.deleteOne(...) – to delete a user

const userModel=mongoose.model('User',userSchema) 
//Hey, I want to create a collection(tables in sql) called users, and every document in this collection should follow the UserSchema
console.log("User model loaded:", userModel);

module.exports=userModel 

// “Hey Node.js, I’m defining a model called UserModel using the users collection and the UserSchema. I want to make this model available for use in other files.