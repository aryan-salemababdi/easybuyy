import { Switch, Route, Redirect } from "react-router-dom";



// Context
import ProductsContextProvider from "./context/ProductscontextProvider";
import CartContextProvider from "./context/CartContextProvider";



//Components
import Divider from "./components/Divider";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Shop from "./components/Shop";
import Signin from "./components/Signin";
import Login from "./components/Login";



//CSS (Style Sheets)
import "./App.css";



function App() {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Divider />
          <Switch>
            <Route path="/products/:id" component={ProductDetails} />
            <Route path="/login" component={Login} />
            <Route path="/signin" component={Signin} />
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
