import express from 'express';
import mongoose from 'mongoose'
import pizzasRoute from './routes/pizzasRoute.js';
import usersRoute from "./routes/usersRoute.js";
import orderRoute from "./routes/orderRoute.js";

//Create DB connection
const MONGODB_URI = 'mongodb://localhost:27017/mern_pizza';
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connection to Database');
}).catch((err) => {
    console.log(err.message);
});

//create port and server

const app = express();
app.use(express.json());

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", usersRoute);
app.use("/api/orders/", orderRoute);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Get pizzas.
// app.get("/getpizzas", (req, res) => {
//     PizzaModel.find({}, (err, desc) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(desc);
//       }
//   })
// });


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});