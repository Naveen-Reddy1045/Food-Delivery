import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext=createContext(null);

const Storecontextprovider=(props)=>{
    const [cartitems,setcartitems]=useState({});
    const url="http://localhost:5000";
    const [token,settoken]=useState("");

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

    useEffect(()=>{
        if(localStorage.getItem("token")){
            settoken(localStorage.getItem("token"));
        }
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