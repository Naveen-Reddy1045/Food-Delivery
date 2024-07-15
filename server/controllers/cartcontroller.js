import usermodel from "../models/usermodel.js"

const addtousercart = async (req, res) => {
    try {
        let user = await usermodel.findOne({ _id: req.body.userId })
        let cartdata = await user.cartdata;
        if (!cartdata[req.body.itemId]) {
            cartdata[req.body.itemId] = 1;
        } else {
            cartdata[req.body.itemId] += 1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId, { cartdata });
        res.json({ success: true, message: "Added to cart" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const removefromusercart = async (req, res) => {
    try {
        let user = await usermodel.findOne({ _id: req.body.userId })
        let cartdata = await user.cartdata;
        if (cartdata[req.body.itemId] > 0) {
            cartdata[req.body.itemId] -= 1;
        }
        await usermodel.findByIdAndUpdate(req.body.userId, { cartdata })
        res.json({ success: true, message: "Removed from cart" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

const getusercart = async (req, res) => {
    try {
        let user = await usermodel.findOne({ _id: req.body.userId })
        let cartdata = await user.cartdata;
        res.json({ success: true, cartdata })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}

export { addtousercart, removefromusercart, getusercart }