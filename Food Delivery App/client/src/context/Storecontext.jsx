import { createContext, useEffect, useState } from "react";
export const Storecontext=createContext(null);
import axios from 'axios'

const Storecontextprovider=(props)=>{
    const [cartitems,setcartitems]=useState({});
    const url="http://localhost:5000";
    const [token,settoken]=useState("");
    const [food_list,setfoodlist]=useState([]);

    const addtocart=(itemid)=>{
        if (!cartitems[itemid]) {
            setcartitems((prev)=>({...prev,[itemid]:1}))
        }else{
            setcartitems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removefromcart=(itemid)=>{
        setcartitems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }

    const gettotal=()=>{
        let total=0;
        for(let x in cartitems){
            if(cartitems[x]>0){
                let t=food_list.find((item)=>item._id===x);
                total+=t.price*cartitems[x];
            }
        }
        return total;
    }

    const fetchfoodlist=async()=>{
        try {
            const response = await axios.get(url + "/api/food/list");
            setfoodlist(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    }



    useEffect(()=>{
        async function loaddata(){
            await fetchfoodlist();
            if(localStorage.getItem("token")){
                settoken(localStorage.getItem("token"));
            }
        }
        loaddata();
    })

    const contextvalue={
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
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider