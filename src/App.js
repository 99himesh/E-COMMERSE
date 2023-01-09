import logo from "./logo.svg";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import StorePage from "./component/product/Store";
import Cart from "./component/cart/Cart";

function App() {
  return (
    <>
      <Header />
      <StorePage />
     
      <Footer />

    </>
  );
}

export default App;
