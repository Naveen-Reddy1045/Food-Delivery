import ordermodel from "../models/ordermodel.js";
import usermodel from "../models/usermodel.js";

const placeorder = async (req, res) => {
    try {
        const neworder = new ordermodel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await neworder.save();
        await usermodel.findByIdAndUpdate(req.body.userId, { cartdata: {} });
        res.json({ success: true, message: "Order placed" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const userorder = async (req, res) => {
    try {
        const orders = await ordermodel.find({ userId: req.body.userId });
        res.json({ success: true, data: orders })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { placeorder, userorder };