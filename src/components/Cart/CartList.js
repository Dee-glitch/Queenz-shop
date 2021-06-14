import CartItem from './CartItem';

const CartList = ({ value }) => {
  return (
    <div className="container-fluid">
      {value.cart.map((item) => {
        return <CartItem key={item.id} product={item} value={value} />;
      })}
    </div>
  );
};

export default CartList;
