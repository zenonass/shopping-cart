import './PageWrapper.css'

const PageWrapper = (props) => {
    return ( 
        <div className="homepage-image">
            {props.children}
        </div>
    );
}
 
export default PageWrapper;