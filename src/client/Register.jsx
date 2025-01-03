import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Register.css"; // Optional CSS file for custom styling

function Register() {
    const [data, setData] = useState({
        email: "",
        upass: "",
        fname: "",
        lname: "",
        address: "",
        city: "",
        pincode: "",
        mobile: "",
        country: "",
        state: ""
    });
    const [cntry, setCntry] = useState([]);
    const [states, setStates] = useState([]);
    const [disp1, setDisp1] = useState(false);
    const [disp2, setDisp2] = useState(false);
    const navigate = useNavigate();

    const checkData = (event) => {
        const { id, value } = event.target;
        setData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const loadCountries = async () => {
        try {
            const response = await axios.get("https://api.webroot.net.in/countries.php");
            if (response.status === 200) {
                setCntry(response.data);
            }
        } catch (error) {
            console.error("Error loading countries:", error);
        }
    };

    const checkMail = async (event) => {
        const email = event.target.value;
        setDisp2(false);
        setDisp1(true);
        try {
            const response = await axios.get(
                `https://api.webroot.net.in/checkmember.php?email=${email}`
            );
            if (response.status === 200 && response.data.status === "Yes") {
                setDisp2(true);
            }
        } catch (error) {
            console.error("Error checking email:", error);
        } finally {
            setDisp1(false);
        }
    };

    const loadStates = async (event) => {
        const country = event.target.value;
        if (country !== "X") {
            try {
                const response = await axios.get(
                    `https://api.webroot.net.in/states.php?isoname=${country}`
                );
                if (response.status === 200) {
                    setStates(response.data);
                }
            } catch (error) {
                console.error("Error loading states:", error);
            }
        } else {
            setStates([]);
        }
    };

    const doRegister = async (event) => {
        event.preventDefault();
        const country = document.getElementById("ss1").value;
        const state = document.getElementById("ss2").value;
        const updatedData = { ...data, country, state };
        try {
            const response = await axios.post(
                "https://api.webroot.net.in/members.php",
                updatedData
            );
            if (response.status === 200 && response.data.status === "OK") {
                setData({
                    email: "",
                    upass: "",
                    fname: "",
                    lname: "",
                    address: "",
                    city: "",
                    pincode: "",
                    mobile: "",
                    country: "",
                    state: "",
                });
                navigate("/login");
            } else {
                alert("Server Error!");
            }
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    useEffect(() => {
        loadCountries();
    }, []);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white text-center h5">
                            Member Registration
                        </div>
                        <div className="card-body">
                            <form onSubmit={doRegister}>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={checkData}
                                            onBlur={checkMail}
                                            className="form-control"
                                            required
                                        />
                                        {disp1 && (
                                            <div className="spinner-border text-primary mt-2"></div>
                                        )}
                                        {disp2 && (
                                            <small className="text-danger">
                                                This email is already registered!
                                            </small>
                                        )}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Password</label>
                                        <input
                                            type="password"
                                            id="upass"
                                            value={data.upass}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            id="fname"
                                            value={data.fname}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            id="lname"
                                            value={data.lname}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Address</label>
                                        <textarea
                                            id="address"
                                            value={data.address}
                                            onChange={checkData}
                                            className="form-control"
                                            rows="2"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Country</label>
                                        <select
                                            id="ss1"
                                            onChange={loadStates}
                                            className="form-control"
                                            required
                                        >
                                            <option value="X">Select Country</option>
                                            {cntry.map((country, index) => (
                                                <option key={index} value={country.isoname}>
                                                    {country.cname}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>State</label>
                                        <select id="ss2" className="form-control" required>
                                            {states.map((state, index) => (
                                                <option key={index}>{state.sname}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            value={data.city}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Pin Code</label>
                                        <input
                                            type="text"
                                            id="pincode"
                                            value={data.pincode}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Mobile No</label>
                                        <input
                                            type="text"
                                            id="mobile"
                                            value={data.mobile}
                                            onChange={checkData}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-success mt-3 w-100">
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
