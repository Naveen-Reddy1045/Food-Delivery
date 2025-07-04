import mongoose from 'mongoose'

const orderschema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    date: { type: Date, default: Date.now() },
    payment: { type: Boolean, default: true }
})

const ordermodel = mongoose.models.order || mongoose.model("order", orderschema);
export default ordermodel;