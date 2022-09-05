import express from "express";
import OrderModel from "../models/orderModel.js";
const router = express.Router();

router.post("/placeorders", async (req, res) => {
  const { totalPrice, currentUser, cartItems, shippingAddress } = req.body;
  try {
    const newOrder = new OrderModel({
      name: currentUser.name,
      email: currentUser.email,
      userid: currentUser._id,
      orderItems: cartItems,
      shippingAddress: shippingAddress,
      orderAmount: totalPrice,
    });
    
  newOrder.save();
  res.send("Order Placed Successfully");
    
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

router.post("/getusersorders", async (req, res) => {
  const { userid } = req.body;

  try {
    const orders = await OrderModel.find({ userid: userid });
    res.send(orders);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

export default router;