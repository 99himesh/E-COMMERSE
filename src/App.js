import logo from "./logo.svg";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import StorePage from "./component/product/Store";
import Cart from "./component/cart/Cart";
import CartProvider from "./component/contextStorage/cartProvider";
import AboutPage from "./component/About/about";
import HomePage from "./component/Home/Home";
function App() {
  return (
   
    < CartProvider>
      <Header />  
      <Route exact  path="/">   
        <StorePage/>
       </Route>

      <Route  path="/home">
       <HomePage/>
      </Route>
      <Route  path="/about">
       <AboutPage/>
      </Route>
      <Footer />
    </CartProvider>
  );
}

export default App;
