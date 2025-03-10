import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import { asyncHandler } from "../utils/asynHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefreshTokens = async (userId)=>{
  try {
    const user = await User.findById(userId);
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({validateBeforeSave:false})
    return {accessToken,refreshToken}
  } catch (error) {
    throw new ApiError(500,"Something went wrong while generating refresh and access token")
  }
}

const registerUser = asyncHandler(async (req,res)=>{
  const {fullname,email,password,phone,role} = req.body;
  if([fullname,email,password,phone,role].some((field)=>field?.trim() === "")){
    throw new ApiError(400,"All Fields are required")
  }

  const existedUser = await User.findOne({email})

  if(existedUser){
    throw new ApiError(409,"User with email already exists")
  }

  const user = await User.create({
    fullname,
    email,
    phone,
    role,
    password,
  })

  const createdUser = await User.findOne(user._id).select("-password -refreshToken")

  if(!createdUser){
    throw new ApiError(500,"Something went wrong while registering a user")
  }

  return res.status(201).json(
    new ApiResponse(200,createdUser,"User registered Successfully")
  )
})

const loginUser = asyncHandler(async(req,res)=>{
  const {email,password} = req.body;
  if(!email){
    throw new ApiError(400,"Email is required");
  }

  const user = await User.findOne({email})
  if(!user){
    throw new ApiError(404,"User not found");
  }

  const isPasswordValid = await user.isPasswordCorrect(password);
  if(!isPasswordValid){
    throw new ApiError(401,"Invalid user credentials");
  }

  const {accessToken,refreshToken} = await generateAccessAndRefreshTokens(user._id)
  
  const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

  const options = {
    httpOnly:true,
    secure:true
  }

  return res
  .status(200)
  .cookie("accessToken",accessToken,options)
  .cookie("refreshToken",refreshToken,options)
  .json(
    new ApiResponse(200,{
      user:loggedInUser,accessToken,refreshToken
    },"User logged in successfully")
  )
})

const logoutUser = asyncHandler(async(req,res)=>{
  User.findByIdAndUpdate(
    req.user._id,
    {
      $unset:{
        refreshToken:1
      }
    },
    {
      new:true
    }
  )
  const options = {
    httpOnly:true,
    secure:true,
  }
  return res
  .status(200)
  .clearCookie("accessToken",options)
  .clearCookie("refreshToken",options)
  .json(new ApiResponse(200,{},"User Logged Out"))
})

export {
  registerUser,
  loginUser,
  logoutUser
}