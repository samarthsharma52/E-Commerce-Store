import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import img1 from '../images/emptycart.jpeg';
import img2 from '../images/fullcart.jpeg';
import { connect } from "react-redux";
import { addInBasket, setTotal } from "../Action";

function Products({ commonData, addInBasket, setTotal }) {
    let [arr, setArr] = useState([]);
    let params = useParams();

    // Fetch products from the API
    function loadCategories() {
        axios.get("https://api.webroot.net.in/products.php").then(reply => {
            if (reply.status === 200) {
                if (params.id) {
                    let filteredProducts = reply.data.filter(e => e.cid === params.id);
                    setArr(filteredProducts);
                } else {
                    setArr(reply.data);
                }
            }
        });
    }

    // Add product to the basket and update total
    function handleAddToCart(pcode, price) {
        addInBasket(pcode, 1);
        setTotal(price);
    }

    useEffect(() => {
        loadCategories();
    }, [params.id]);

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center">Our Products</h2>
                <p className="text-center">
                    Explore our exclusive collection of high-quality products. Add your favorites to the cart and experience seamless shopping!
                </p>
                <div className="row">
                    {arr.map((product, index) => (
                        <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                            <div className="border shadow rounded-3 text-center p-3">
                                <img src={product.photo} className="w-75" alt={product.pname} />
                                <h5 className="mt-2">{product.pname}</h5>
                                <p className="text-muted">{product.details}</p>
                                <p className="fw-bold">Rs {product.price}/-</p>
                                <button
                                    onClick={() => handleAddToCart(product.pid, product.price)}
                                    type="button"
                                    className="btn btn-danger btn-sm m-2"
                                >
                                    Add to Cart
                                </button>
                                <Link to={`/product/${product.pid}`} className="btn btn-primary btn-sm">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                className="border shadow rounded-3 bg-light text-center p-3"
                style={{ position: 'fixed', right: '10px', bottom: '10px', opacity: '0.9', width: '200px' }}
            >
                <img
                    src={commonData.basket.length === 0 ? img1 : img2}
                    alt="Cart Status"
                    width="100%"
                />
                <p className="mt-2 mb-0">Total Items: {commonData.basket.length}</p>
                <p>Cart Value: Rs {commonData.total}/-</p>
                <Link to="/basket" className="btn btn-primary btn-sm mt-2">
                    Go to Basket
                </Link>
            </div>
        </>
    );
}

let connectToStore = (state) => ({ commonData: state });
let dispatchToStore = (dispatch) => ({
    addInBasket: (pcode, qty) => dispatch(addInBasket(pcode, qty)),
    setTotal: (value) => dispatch(setTotal(value)),
});

export default connect(connectToStore, dispatchToStore)(Products);
