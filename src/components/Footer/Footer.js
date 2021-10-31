import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark footer-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="text-center text-white">
                        <div className="p-3">
                            <h5>Usefull links</h5>
                            <Link className="link-text" to="/login">Sign Up</Link>
                            <br />
                            <Link className="link-text" to="/myorders">See Your Booking</Link>
                            <br />
                            <Link className="link-text" to="/home">Home Page</Link>
                            <br />
                            <small>Visit our social sites</small>
                            <div className="socal-icon">
                                <i className="fab fa-facebook"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="text-center text-white">
                        <div className="p-2">
                            <h5>Contact Us</h5>
                            <p><i className="fas fa-phone-alt"></i> +00 88 999 1111</p>
                            <p><i className="fas fa-envelope-open"></i> www.pathway@gmail.com</p>
                            <p><small>©pathWay.com</small></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;