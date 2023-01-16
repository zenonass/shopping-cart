import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHollyBerry } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const Navbar = (props) => {
    const {cartQuantity} = useContext(UserContext);
    return ( 
        <nav>
            <div className='nav-container'>
                <h1 id="nav-title">
                    <FontAwesomeIcon className='nav-title-icon' icon={faHollyBerry} />
                    Farm Fruits
                </h1>
                <div className="nav-links-container">
                    <div className="nav-links">
                        <a href="/">Home</a>
                        <a href="/products">Products</a>
                    </div>
                    <div className="nav-shopping-cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <div className="cart-quantity">{cartQuantity > 0 ? '('+cartQuantity+')' : ''}</div>
                    </div>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;