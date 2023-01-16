import './ProductCard.css';
import { useContext } from "react";
import { UserContext } from './UserContext';


const ProductCard = ({ name, price, image, id }) => {
    const {cartQuantity, setCartQuantity} = useContext(UserContext);

    const addToCart = () => {
        setCartQuantity(cartQuantity + 1 )
    };

    return ( 
        <div className="product-card" data-product-id={id}>
            <div className="product-image">
            <img src={image} alt="" width="180" height="160" />
            </div>
            <div className="product-title">
                {name}
            </div>
            <div className="product-price">
                {price} EUR
            </div>
            <div className="add-to-cart-container">
                <a href="#" onClick={addToCart} className="add-to-cart" data-product-id={id}>
                    Add to cart
                </a>
            </div>
        </div>
    );
}
 
export default ProductCard;