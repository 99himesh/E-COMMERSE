import logo from "./logo.svg";
import { Redirect, Route } from "react-router-dom";
import React, { useContext, Suspense } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
// import StorePage from "./component/product/Store";
import Cart from "./component/cart/Cart";
import CartProvider from "./component/contextStorage/cartProvider";
// import AboutPage from "./component/About/about";
// import HomePage from "./component/Home/Home";
// import ContactUs from "./component/contact us/ContactUs";
// import LogInPage from "./component/Login page/login";
import AuthContext from "./component/store/AuthContext";
import LoadingSpinner from './component/LoadingSpinner/LoadingSpinner'


import FullProduct from './component/Fullproduct/fullProduct'
const AboutPage = React.lazy(() => import('./component/About/about'));
const HomePage = React.lazy(() => import('./component/Home/Home'));
const ContactUs = React.lazy(() => import('./component/contact us/ContactUs'));
const LogInPage = React.lazy(() => import('./component/Login page/login'));
const StorePage = React.lazy(() => import('./component/product/Store'));



function App() {
  const ctx = useContext(AuthContext);
  return (
    <CartProvider>
      <Header />
      <Suspense fallback={<div style={{ margin: '0 auto', width: '100%', textAlign: 'center' }}> <LoadingSpinner /> </div>}>
        {ctx.isLoggedIn && <Route path='*'><Redirect to='/home' /></Route>}
        {!ctx.isLoggedIn && <Route path='*'><Redirect to='/login' /></Route>}
        {!ctx.isLoggedIn &&<Route exact path="/login"><LogInPage /></Route>}
       {ctx.isLoggedIn && <Route exact path="/store"> <StorePage /> </Route>}
       {ctx.isLoggedIn &&  <Route path="/store/:fullproduct"><FullProduct /></Route>}
       {ctx.isLoggedIn &&  <Route path="/home"><HomePage /></Route>}
        {ctx.isLoggedIn && <Route path="/about"><AboutPage /></Route>}
       {ctx.isLoggedIn &&  <Route path="/contact"><ContactUs  /></Route>}
      </Suspense>
      {ctx.isLoggedIn && <Footer />}

    </CartProvider>
  );
}

export default App;
