import product from "../../product.js"
import Product from "./product.jsx";
import  "./shop.css";
const Shop = ()=>{
    return (
        <>
        <div className="shop">
            <div className="shopTitle">
                <h1>Joshi Inventory</h1>
            </div>
            <div className="products">
                
                {product.map((val,id)=>{
                    return <Product obj={val} key={id} />
                })}
            </div>
        </div>
        </>
    )
}

export default Shop;