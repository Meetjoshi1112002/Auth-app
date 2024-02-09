import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

const CartItem = ({data})=>{
    const {id,productName,price,productImage} = data;
    const { cartItems, addToCart, removeFromCart,updateCount } = useContext(ShopContext);
    return(
        <>
        <div className="cartItem">
            <img src={productImage} alt="iamg" />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>
                <b>{price}</b>
            </p>
            <button onClick={()=>{addToCart(id)}}>+</button>
            <input value={cartItems[id]} onChange={(e)=>{updateCount(Number(id),Number(e.target.value))}} />
            <button onClick={()=>{removeFromCart(id)}}>-</button>
        </div>
        </div>
        </>
    )
}

export default CartItem;