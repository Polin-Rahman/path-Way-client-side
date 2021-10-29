import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const OrderPlace = () => {
    const { id } = useParams();

    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/orderplace/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div className="container">
            <h2 className="text-center my-5">Confirm Your Booking for - {service.name}</h2>

            <div>
                <div className="card mb-3" style={{ 'max-width': '900px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={service.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text">{service.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default OrderPlace;