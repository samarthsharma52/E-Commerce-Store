import { Link } from 'react-router-dom';
import img1 from '../images/facebook.png';
import img2 from '../images/p12.png';
import img3 from '../images/p16.png';
import img4 from '../images/p4.jpg';
import img5 from '../images/p5.png';
import { useEffect, useState } from 'react';



function Footer() {
    let [year, setYear] = useState(0);
    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);
    return (
        <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-2">
                <div className="border shadow rounded-3 p-3" style={{ height: '250px' }}>
                    <img src={img1} style={{ width: '50px', height: '30px' }} /> <a href="">Facebook</a> <br />
                    <img src={img2} style={{ width: '50px', height: '50px' }} /> <a href="">Google</a> <br />
                    <img src={img3} style={{ width: '50px', height: '50px' }} /> <a href="">Whatsapp</a> <br />
                    <img src={img4} style={{ width: '50px', height: '50px' }} /> <a href="">Instagram</a> <br />
                    <img src={img5} style={{ width: '50px', height: '50px' }} /> <a href="">Tweeter</a> <br />
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-2">
                <div className="border shadow rounded-3 p-3" style={{ height: '250px' }}>
                    <div className='row'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7002.26126774834!2d77.2355523640784!3d28.65580695220172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce274e3e18f%3A0x40209eb01fb00526!2sLal%20Qila%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1729083695769!5m2!1sen!2sin" className='col-12' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-2">
                <div className="border shadow rounded-3 p-3" style={{ height: '250px' }}>
                    Customer Support Details<br />
                    Email: contact@shopping.com<br />
                    Mobile: +91-8528528528<br />
                    Address: 123, ABC Building, XYZ City<br />
                </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 p-2">
                <div className="border shadow rounded-3 p-3" style={{ height: '250px' }}>
                    Important Links<br />
                    <Link to="/">Home</Link><br />
                    <Link to="/about">About Us</Link><br />
                    <Link to="/contact">Contact Us</Link><br />
                    <Link to="/query">Query</Link>
                </div>
            </div>
            <center>All Rights Reserved Copyrights {year}</center>
        </div>
    );
}
export default Footer;