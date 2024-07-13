import express from 'express'
import { addtousercart, removefromusercart, getusercart } from "../controllers/cartcontroller.js";
import authorization from '../token-to-id.js';

const cartrouter = express.Router();

cartrouter.post("/addtocart", authorization, addtousercart);
cartrouter.post("/removefromcart", authorization, removefromusercart);
cartrouter.post("/getcart", authorization, getusercart);

export default cartrouter