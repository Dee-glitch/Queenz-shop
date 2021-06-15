import { Link } from 'react-router-dom';

function CartTotals({ value, history }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row totals">
          <div className="col-10 mt-3 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-end">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-33 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartTotals;
