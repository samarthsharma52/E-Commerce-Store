import { connect } from "react-redux";

function Profile({commonData})
{
    return(
        <div>
            <table className="table table-bordered w-50">
                <tbody>
                    <tr>
                        <td>Email:</td><td>{commonData.profile.email}</td>
                    </tr>
                    <tr>
                        <td>First Name:</td><td>{commonData.profile.fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name:</td><td>{commonData.profile.lname}</td>
                    </tr>
                    <tr>
                        <td>Mobile:</td><td>{commonData.profile.mobile}</td>
                    </tr>
                    <tr>
                        <td>Address:</td><td>{commonData.profile.address}</td>
                    </tr>
                    <tr>
                        <td>Country:</td><td>{commonData.profile.country}</td>
                    </tr>
                    <tr>
                        <td>State:</td><td>{commonData.profile.state}</td>
                    </tr>
                    <tr>
                        <td>City:</td><td>{commonData.profile.city}</td>
                    </tr>
                    <tr>
                        <td>Pin Code:</td><td>{commonData.profile.pincode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
let connectToStore=(state)=>({commonData:state});
export default connect(connectToStore)(Profile);