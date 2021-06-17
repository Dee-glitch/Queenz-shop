import { useContext } from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContext } from '../../context/Context';
import CartList from './CartList';
import CartTotals from './CartTotals';

function Cart(props) {
  const product = useContext(ProductContext);

  if (product.cart.length > 0) {
    return (
      <div>
        <h1 className="text-center">Your Cart</h1>
        <CartColumns />
        <CartList value={product} />
        <CartTotals value={product} history={props.history} />
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
