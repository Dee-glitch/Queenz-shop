import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../context/Context';
import { ProductWrapper, Button } from './Styles';

const Product = (props) => {
  const product = useContext(ProductContext);
  const { id, title, imgUrl, price, inCart } = props.product;
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div
          className="img-container p-0"
          onClick={() => product.handleDetail(id)}
        >
          <Link to="/details">
            <img src={imgUrl} alt="product" className="card-img-top" />
          </Link>
          <Button
            className="cart-btn"
            disabled={inCart ? true : false}
            onClick={() => {
              product.addToCart(id);
              product.openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                in cart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </Button>
        </div>
        {/* Card Footer */}
        <div className="card-footer display-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <h5 className="text-main font-italic mb-0">
            <span className="mr-1">$</span>
            {price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;
