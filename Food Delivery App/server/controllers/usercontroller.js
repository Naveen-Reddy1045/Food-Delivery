import usermodel from "../models/usermodel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from "validator";

const loginuser=async(req,res)=>{
    const {email,password}=req.body;
    try { 
        const user=await usermodel.findOne({email});
        if(!user){
            return res.json({success:false,message:"Not registered yet with this email"})
        }
        const ismatch=bcrypt.compare(password,user.password);
        if(!ismatch){
            return res.json({success:false,message:"Wrong password"})
        }
        const token=createtoken(user._id)
        return res.json({success:true,token})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }


}

const createtoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registeruser=async(req,res)=> {
    const {name,password,email}=req.body;

    try {
        const existed = await usermodel.findOne({email});
        if(existed){
            return res.json({sucess:false,message:"ALready exitsted with this email"})
        }
        if(!validator.isEmail(email)){
            return res.json({sucess:false,message:"enter correct email"})
        }
        if(password.length<8){
            return res.json({sucess:false,message:"Password length should be more than 8"})
        }
        const salt=await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password,salt);
        const newuser=new usermodel({
            name:name,
            email:email,
            password:hashpassword
        })

        const user=await newuser.save();
        const token=createtoken(user._id);
        res.json({success:true,token})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginuser,registeruser};