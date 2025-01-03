import { connect } from "react-redux";

function Basket({ commonData }) {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Your Basket</h2>
            {commonData.basket.length === 0 ? (
                <div className="text-center mt-5">
                    <h4>Your cart is empty!</h4>
                </div>
            ) : (
                <div className="row">
                    {commonData.basket.map((item, index) => (
                        <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 p-2">
                            <div className="border shadow rounded-3 text-center">
                                <img src={item.photo} className="w-75" alt={item.pname} />
                                <br />
                                <strong>{item.pname}</strong>
                                <br />
                                Rs {item.price}/-
                                <br />
                                <strong>Quantity:</strong> {item.qty}
                                <br />
                                <strong>Subtotal:</strong> Rs {item.price * item.qty}/-
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="text-center mt-4">
                <h4>Total Cart Value: Rs {commonData.total}/-</h4>
            </div>
        </div>
    );
}

let connectToStore = (state) => ({ commonData: state });

export default connect(connectToStore)(Basket);
