import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    orderItems: [],
    userid: { type: String, required: true },
    shippingAddress: { type: String},
    orderAmount: { type: Number, required: true },
    isDelivered: { type: Boolean, required: true, default: false },
    isPaid: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model("orders", orderSchema);
export default OrderModel;
