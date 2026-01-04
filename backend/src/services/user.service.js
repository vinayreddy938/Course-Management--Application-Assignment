import { logInRepository, userCreate } from "../repository/user.repository.js"
import bcrypt from "bcrypt";
import { config } from "dotenv";
import CustomError from "../../utils/customError.js";
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
export const  userLogInService = async (req)=>{
    try{
        const {email,password} = req.body;
        const user = await logInRepository({email,password});
        if(!user){
            throw new CustomError("Invalid Credentials",400);
        }
        const isValidPassword = await bcrypt.compare(password,user.password);
        if(!isValidPassword){
            throw new CustomError("Invalid Credentials",400);

        }
        return user;

    }catch(err){
        throw err;

    }

}

