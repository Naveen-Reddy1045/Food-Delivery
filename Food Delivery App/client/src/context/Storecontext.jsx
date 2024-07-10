import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext=createContext(null);

const Storecontextprovider=(props)=>{
    const [cartitems,setcartitems]=useState({});

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

    useEffect(()=>{
        console.log(cartitems);
    },[cartitems])

    const contextvalue={
        food_list,
        cartitems,
        setcartitems,
        addtocart,
        removefromcart
    }
    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider