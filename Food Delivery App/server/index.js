import express from "express";
import cors from "cors";
import { connectdb } from "./config/db.js";
import userrouter from "./routes/userroute.js";
import 'dotenv/config'
import foodrouter from "./routes/foodroute.js";
import cartrouter from "./routes/cartroute.js";
import orderrouter from "./routes/orderroute.js";

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

connectdb();

app.use("/api/food", foodrouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userrouter)
app.use("/api/cart", cartrouter);
app.use("/api/order", orderrouter);

app.get('/', (req, res) => {
    res.send("Hi,Server is running");
})

app.listen(port, () => {
    console.log(`SERVER running on http://localhost:${port}`)
})

