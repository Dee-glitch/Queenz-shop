import Product from './Product';
import { ProductContext } from '../context/Context';
import { useContext } from 'react';

const ProductList = () => {
  const product = useContext(ProductContext);
  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          {product.products.map((item) => {
            return <Product key={item.id} product={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
