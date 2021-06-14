import { createContext, useEffect, useState } from 'react';
import { storeProducts, detailProduct } from '../data';

const ProductContext = createContext();

function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalProduct, setModalProduct] = useState(productDetail);
  // const [cartSubTotal, setCartSubTotal] = useState(0);
  // const [cartTax, setCartTax] = useState(0);
  // const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setTempProducts();
  }, []);

  //copy the values from the original array to a temp Array so that fresh set of original values can be extracted whenever required.
  //Pass the values not references to the values, passing by referencing the objects may change the original value.
  const setTempProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      setProducts(tempProducts);
    });
  };

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setProductDetail(product);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setCart([...cart, product]);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        productDetail,
        cart,
        handleDetail,
        addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}

export { ProductProvider, ProductContext };
