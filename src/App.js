import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './context/Context';
import { Navbar } from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <ProductProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/signup" component={Signup} />
            <Route component={Default} />
          </Switch>
          <Modal />
        </Router>
      </ProductProvider>
    </>
  );
}

export default App;
