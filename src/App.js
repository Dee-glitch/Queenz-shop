import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './context/Context';
import { auth } from './firebase';
import { Navbar } from './components/Navbar';
import { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Signin from './components/Signin';

function App() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar currentUser={currentUser} />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/signin" component={Signin} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
