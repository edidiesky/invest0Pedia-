import mongoose from "mongoose"

import bcrypt from 'bcryptjs'
const UserSchema = new mongoose.Schema({
	firstname:{
		type:String,
	},
	lastname:{
		type:String,
	},
	phone:{
		type:String,
		default:""
	},
	email:{
		type:String,
		required: [true, 'PLease add an emailvalue']
	},
	password:{
		type:String,
		required: [true, 'PLease add a password value']
	},
	isAdmin:{
		type:Boolean,
		required:true,
		default:false
	},
	country:{
		type:String,
		default:''
	},
	deposit:{
		type:Number,
		default:0
	},
	profit:{
		type:Number,
		default:0
	},
	tax:{
		type:Number,
		default:0
	}
}, 
{timestamps:true}
)
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}


export default  mongoose.model("User", UserSchema)