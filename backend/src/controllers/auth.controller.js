import { userLogInService, userRegisterService } from "../services/user.service.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config()
export const registerController = async (req, res) => {
  try {
    const user = await userRegisterService(req);
    return res.status(201).json({
      success: true,
      message: "user registered successfully",
    });
  } catch (err) {
    if(err.code === "P2002"){
        return res.status(400).json({success:false,message:"email id already exists"})
    }
    return res.status(500).json({success:false,message:"Something went wrong"})
  }
};



export const logInController = async (req, res) => {
  try {
    const user = await userLogInService(req);

    const { id, firstName, lastName, email } = user;

    const token = jwt.sign(
      { id, email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000
    });

    return res.status(200).json({
      success: true,
      message: "user log in successfully",
      data: {
        firstName,
        lastName,
        email
      }
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Something went wrong"
    });
  }
};


export const logOutController = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: false
  });

  return res.status(200).json({
    success: true,
    message: "user logged out successfully"
  });
};

