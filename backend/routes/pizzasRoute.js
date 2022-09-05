import express from 'express';
import PizzaModel from '../models/pizzaModel.js';

const router = express.Router();

router.get('/getpizzas', async (req, res) => {
    try {
        const pizzas = await PizzaModel.find({});
        res.send(pizzas);
    } catch (err) {
        return res.status(404).json({ message: err })
    }
});

export default router;