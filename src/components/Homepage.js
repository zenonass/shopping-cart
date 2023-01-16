import './Homepage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import PageWrapper from './PageWrapper';

const Homepage = () => {
    return ( <PageWrapper>
                <div class="container">
                <div class="content">
                    <h1>Farm Fruits - </h1>
                    <h3>100% fresh fruits. Checkout our products!
                    </h3>
                    <h3 >
                        <a className="view-all-products" href="/products">
                            View All Products <FontAwesomeIcon icon={faArrowRightLong} />
                        </a>
                    </h3>
                    </div>
                </div>
            </PageWrapper>   
    );
}
 
export default Homepage;