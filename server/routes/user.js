const {Router} = require('express');
const {User} = require("../models")
const userRouter = Router();



userRouter.post("/user", async (req, res)=>{
    const singleUserDetails = req.body;
    const {NID} = req.body
    console.log(req.body)
    await User.create(singleUserDetails);
    res.status(200).json(singleUserDetails);
})


userRouter.get("/user", async (req, res)=>{
    const getAllUsers = await User.findAll();
    res.send(getAllUsers);
 });
 

module.exports = {userRouter}