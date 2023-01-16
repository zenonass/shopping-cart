import ProductCard from './ProductCard';
import './Products.css'

const Products = (props) => {
    return ( 
        <div className='products-page-wrapper'>
            <div className="products-container">
            {
                props.products.map(product =>
                        <ProductCard
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            id={product.id}
                        />
                    )
                }
            </div>
        </div>
    );
}
 
export default Products;