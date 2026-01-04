import { userRegisterService } from "../services/user.service.js";

export const registerController = async (req, res) => {
  try {
    const user = await userRegisterService(req);
    return res.status(201).json({
      sucess: true,
      message: "user registered sucessfully",
    });
  } catch (err) {
    if(err.code === "P2002"){
        return res.status(400).json({sucess:false,message:"email id already exists"})
    }
    return res.status(500).json({sucess:false,message:"Something went wrong"})
  }
};

export const logInController = (req, res) => {
  try {
  } catch (err) {}
};

export const logOutController = (req, res) => {
  try {
  } catch (err) {}
};
