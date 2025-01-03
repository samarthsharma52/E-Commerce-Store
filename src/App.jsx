import { Route, Routes } from "react-router";
import Home from "./client/Home.jsx";
import Header from "./client/Header";
import Footer from "./client/Footer.jsx";
import Products from "./client/Products";
import Register from "./client/Register";
import Login from "./client/Login";
import Profile from "./client/Profile";
import './App.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./client/About.jsx";
import Basket from "./client/Basket.jsx";

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <hr />
      <Footer />
    </div>
  );
}
export default App;