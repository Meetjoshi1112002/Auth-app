import PRODUCTS from "../../product.js";
import { ShopContext } from "../../context/shop-context.jsx";
import { useContext } from "react";
import CartItem from "./cartitem.jsx";
import "./cart.css"
import { useNavigate } from "react-router-dom";
const Cart = ()=>{
    const navigate = useNavigate();
    const {cartItems,calculateSum} = useContext(ShopContext);
    const sum = calculateSum();
    return (
        <>
        <div className="cart">
            <h1>Your Cart</h1>
        <div className="cartItems">
            {PRODUCTS.map((pro,id)=>{
                if(cartItems[pro.id] > 0) {
                    return <CartItem data={pro} Key={id} />
                }
            })}
        </div>
        {sum>0 && <div className="checkout">
            <p>Totol : ${calculateSum()}</p>
            <button onClick={()=>{navigate("/")}}>Continue Shopping</button>
            <button>Checkout</button>
        </div>}    
            </div>
        </>
    )
}

export default Cart;