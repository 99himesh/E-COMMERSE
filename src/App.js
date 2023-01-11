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
import ContactUs from "./component/contact us/ContactUs";
function App() {
const submitHandler=async(data)=>{
try{const response = await fetch(
  "https://e-commerce-8a986-default-rtdb.firebaseio.com/data.json",
  {
    method: "POST",
    body: JSON.stringify(data),
    header: {
      "content-Type": "application/json",
    }
  }
);
}
catch{
  console.log('error');
}
}
  return (
    <CartProvider>
      <Header />
      <Route exact path="/">
        <StorePage />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/contact">
        <ContactUs onAdd={submitHandler}  />
      </Route>
      <Footer />
    </CartProvider>
  );
}

export default App;
