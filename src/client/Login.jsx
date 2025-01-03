import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { setLogin, setProfile } from "../Action";

function Login({ commonData, setLogin, setProfile }) {
    let [data, setData] = useState({ email: "", upass: "" });
    let nav = useNavigate();
    function checkData(event) {
        if (event.target.id == "email") setData({ ...data, email: event.target.value });
        if (event.target.id == "upass") setData({ ...data, upass: event.target.value });
    }
    function doLogin(event) {
        event.preventDefault();
        axios.get("https://api.webroot.net.in/members.php?email=" + data.email + "&upass=" + data.upass).then(reply => {
            if (reply.status == 200) {
                if (!reply.data.status) {
                    setLogin("Y");
                    setProfile(reply.data);
                    setData({ email: "", upass: "" });
                    nav("/");
                }
                else {
                    alert("Invalid Login Password!!");
                }
            }
        });
    }
    return (
        <div className="row" style={{ minHeight: '350px' }}>
            <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-2 col-sm-1 col-12"></div>
            <div className="col-xxl-4 col-xl-6 col-lg-8 col-md-8 col-sm-10 col-12">
                <div className="card">
                    <div className="card-header text-center bg-info h5">Member Authentication</div>
                    <div className="card-body p-3">
                        <form onSubmit={doLogin}>
                            <div className="row">
                                <div className="form-group col-12">
                                    <label>Email</label>
                                    <input type="email" value={data.email} id="email" onChange={checkData} className="form-control form-control-sm" required />
                                </div>
                                <div className="form-group col-12">
                                    <label>Password</label>
                                    <input type="password" value={data.upass} id="upass" onChange={checkData} className="form-control form-control-sm" required />
                                </div>
                                <button className="btn btn-success col-4 m-3">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-xxl-4 col-xl-3 col-lg-2 col-md-2 col-sm-1 col-12"></div>
        </div>
    );
}
let connectToStore = (state) => ({ commonData: state });
let dispatchToStore = (dispatch) => (
    {
        setLogin: (value) => (dispatch(setLogin(value))),
        setProfile: (value) => (dispatch(setProfile(value))),
    }
);
export default connect(connectToStore, dispatchToStore)(Login);