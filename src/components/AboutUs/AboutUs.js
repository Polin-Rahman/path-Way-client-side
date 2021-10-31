import React from 'react';
import './AboutUs.css';
import bImg from '../../images/man.jpg';

const AboutUs = () => {
    return (
        <div className="container my-5 about-container">
            <h1 className="text-center">Why You choose Us</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="bottom-img d-flex justify-content-center">
                        <img src={bImg} className="img-fluid" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mt-5">
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Diverse Destinations</p>
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Value for Money</p>
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Beautiful Places</p>
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Passionate Travel</p>
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Emergency Support</p>
                        <p><span className="text-warning fs-4 p-3"><i className="fas fa-check-square"></i></span> Personal Guide</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;