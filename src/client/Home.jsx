import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Assuming you create a dedicated CSS file for custom styling.

function Home() {
    const [categories, setCategories] = useState([]);

    function loadCategories() {
        axios.get("https://api.webroot.net.in/categories.php").then((response) => {
            if (response.status === 200) {
                setCategories(response.data);
            }
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Our Categories</h2>
            <div className="row">
                {categories.map((category, index) => (
                    <div
                        className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-4"
                        key={index}
                    >
                        <div className="card category-card h-100">
                            <img
                                src={category.photo}
                                className="card-img-top"
                                alt={category.name}
                                style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{category.name}</h5>
                                <p className="card-text">{category.details}</p>
                                <Link
                                    to={`/products/${category.cid}`}
                                    className="btn btn-primary btn-sm mt-3"
                                >
                                    Explore Products
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
