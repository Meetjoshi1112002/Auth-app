import React, { createContext, useState, useMemo } from "react";
import PRODUCTS from "../product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  PRODUCTS.forEach((item) => {
    cart[item.id] = 0;
  });
  console.log(cart);
  return cart;
};

export const ShopContextProvider = (props) => {
  const defaultCart = useMemo(() => getDefaultCart(), []);

  const [cartItems, setCartItems] = useState(defaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const calculateSum =()=>{
    let sum = 0;
    for(const itemId in cartItems){
        if(cartItems[itemId]>0){
            sum += (Number(PRODUCTS[itemId].price)*cartItems[itemId])
        }
    }
    return sum;
  }

  const updateCount = (id,count)=>{
    setCartItems((prev)=>({...prev,[id]:count}))
  }

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart,calculateSum ,updateCount}}>
      {props.children}
    </ShopContext.Provider>
  );
};
