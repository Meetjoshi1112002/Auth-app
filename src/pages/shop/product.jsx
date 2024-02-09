import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";


const Product = ({obj})=>{
    const {addToCart , cartItems} = useContext(ShopContext);
    return (
        <>
            <div className="product">
                <img src={obj.productImage} alt="procut" />
                <div className="description">
                    <p>
                        <b>{obj.productName}</b>
                    </p>
                    <p>
                        <b>{obj.price}</b>
                    </p>
                </div>
                <button className="addToCartBttn" onClick={()=>{addToCart(obj.id)}}>Add to cart</button>
                {cartItems[obj.id] !== 0 && <span>{cartItems[obj.id]}</span> }
            </div>
        </>
    )
}

export default Product;