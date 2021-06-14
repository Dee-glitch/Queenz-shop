import { ModalContainer, Button } from './Styles';
import { ProductContext } from '../context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Modal = () => {
  const product = useContext(ProductContext);
  const { closeModal, modalOpen } = product;
  const { imgUrl, title, price } = product.modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to the cart</h5>
              <img src={imgUrl} className="img-fluid" alt="product" />
              <h5>{title}</h5>
              <h5 className="text-muted">price: $ {price}</h5>
              <Link to="/">
                <Button onClick={closeModal}>continue shopping</Button>
              </Link>
              <Link to="/cart">
                <Button cart onClick={closeModal}>
                  go to cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
};

export default Modal;
