import express from "express";
import UserModel from "../models/userModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {

  const { name, email, password } = req.body;
  const newUser = new UserModel({name, email, password})

  try {
    newUser.save();
    res.send('User Registered Successfully');
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email, password });
    if (user) {

      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
      
    } else {
      return res.status(404).json({ message: 'User Login failed' });
    }
    
  } catch (err) {
    return res.status(404).json({ message: err });
  }
});

export default router;
