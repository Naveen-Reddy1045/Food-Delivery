import express from 'express'
import authorization from '../token-to-id.js';
import { placeorder, userorder } from '../controllers/ordercontroller.js';

const orderrouter = express.Router();

orderrouter.post("/place", authorization, placeorder);
orderrouter.post("/userorders", authorization, userorder);

export default orderrouter;