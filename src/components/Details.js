import { ProductContext } from '../context/Context';
import { Link } from 'react-router-dom';
import { Button } from './Styles';
import { useContext } from 'react';

const Details = () => {
  const product = useContext(ProductContext);
  const { id, brand, imgUrl, info, price, title, inCart } =
    product.productDetail;

  return (
    <div className="container-py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5 ">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img
            src={imgUrl}
            className="img-fluid detail-img"
            alt="product"
            style={{ marginLeft: '100px' }}
          />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h4>
            model by : <span>{brand}</span>
          </h4>
          <h4 className="text-main">
            <strong>
              price : <span>$</span>
              {price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            some Info about the product:
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="./">
              <Button>back to products</Button>
            </Link>
            <Button
              cart
              disabled={inCart ? true : false}
              onClick={() => {
                product.addToCart(id);
                product.openModal(id);
              }}
            >
              {inCart ? 'inCart' : 'add to cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
