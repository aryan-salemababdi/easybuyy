import { Switch, Route, Redirect } from "react-router-dom";



// Context
import ProductsContextProvider from "./context/ProductscontextProvider";
import CartContextProvider from "./context/CartContextProvider";



import Divider from "./components/Divider";
import Landing from "./components/Landing";
import Navbar from './components/Navbar';
import "./App.css";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Shop from "./components/Shop";
function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Divider />
          <Navbar />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/shop" component={Shop} />
            <Route path={`/landing`} component={Landing} />
            <Redirect to="/landing" />
          </Switch>
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
