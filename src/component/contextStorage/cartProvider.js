import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

    const Arr=[...items,item];
         setItems(Arr);
   


    // const existingCartItemIndex = items.findIndex((itm) => itm.id === item.id);
    // const existingCartItem = items[existingCartItemIndex];
    // let updatedItemsList = [...items];
    // if (existingCartItem) {
    //   const updatedItem = {
    //     ...existingCartItem,
    //     quantity: Number(existingCartItem.quantity) + 1,
    //   };
    //   updatedItemsList[existingCartItemIndex] = updatedItem;
    // } else {
    //   updatedItemsList = items.concat(item);
    // }
    // setItems(updatedItemsList);
    
  };

  const removeItemToCardHAndler = (id) => {
//     const existingCartItemIndex = items.findIndex((itm) => itm.id === id);
//     const existingCartItem = items[existingCartItemIndex];
//     let updatedItemsList = [...items];

//     if (Number(existingCartItem.quantity) === 1) {
      const updatedItemsList = items.filter((itm) => itm.id !== id);
//     } else {
//       const updatedItem = {
//         ...existingCartItem,
//         quantity: Number(existingCartItem.quantity) - 1,
//       };

//       updatedItemsList[existingCartItemIndex] = updatedItem;
//     }
    setItems(updatedItemsList);
  };
  const replacecart=(data)=>{
    setItems(data);

  }

  const cartContext = {
    item: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCardHAndler,
    replace:replacecart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
