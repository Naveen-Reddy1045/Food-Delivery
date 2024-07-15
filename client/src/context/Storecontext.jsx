import { createContext, useEffect, useState } from "react";
export const Storecontext = createContext(null);
import axios from 'axios'
import { toast } from "react-toastify";

const Storecontextprovider = (props) => {
    const [cartitems, setcartitems] = useState({});
    const url = "https://food-delivery-website-server.onrender.com";
    const [token, settoken] = useState("");
    const [food_list, setfoodlist] = useState([]);

    const addtocart = async (itemId) => {
        if (!cartitems[itemId]) {
            setcartitems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }

        if (token) {
            await axios.post(url + "/api/cart/addtocart", { itemId }, { headers: { token } })
        }
        toast.success("Added to Cart")
    }

    const removefromcart = async (itemId) => {
        setcartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + "/api/cart/removefromcart", { itemId }, { headers: { token } })
        }
        toast.success("Removed from cart")
    }

    const gettotal = () => {
        let total = 0;
        for (let x in cartitems) {
            if (cartitems[x] > 0) {
                let t = food_list.find((item) => item._id === x);
                total += t.price * cartitems[x];
            }
        }
        return total;
    }

    const fetchfoodlist = async () => {
        try {
            const response = await axios.get(url + "/api/food/list");
            setfoodlist(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    }

    const loadcartdata = async (token) => {
        const response = await axios.post(url + "/api/cart/getcart", {}, { headers: { token } })
        setcartitems(response.data.cartdata);
    }


    useEffect(() => {
        async function loaddata() {
            await fetchfoodlist();
            if (localStorage.getItem("token")) {
                settoken(localStorage.getItem("token"));
                await loadcartdata(localStorage.getItem("token"));
            }
        }
        loaddata();
    })

    const contextvalue = {
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart,
        gettotal,
        url,
        token,
        settoken
    }
    return (
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider
