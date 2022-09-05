import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    verients: [],
    prices: [],
    category: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true }
}, {
    timestamps: true,
});

const PizzaModel = mongoose.model('pizzas', pizzaSchema);
export default PizzaModel;