import { userCreate } from "../repository/user.repository.js"
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();
export const userRegisterService = async (req)=>{
    try{
       const  {firstName,lastName,email,password} = req.body;
        const hashedPassword = await bcrypt.hash(password,Number(process.env.SALT_ROUNDS));
        const user = await userCreate({firstName,lastName,email,password:hashedPassword});
        return user;

    }catch(err){

    throw err;

    }
   
}
export const  userLogInService = async (req,res)=>{

}
export const  userLogOUtService = async(req,res)=>{

}