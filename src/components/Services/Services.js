import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setISLoading] = useState(false);

    useEffect(() => {
        setISLoading(true);

        fetch('https://glacial-temple-54782.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setISLoading(false);
                setServices(data)
            })

    }, [])


    return (
        <div className="container my-5">
            <h1 className="text-center">We are Offering</h1>
            {
                isLoading &&
                <div className="d-flex justify-content-center">
                    <Spinner animation="border" />
                </div>
            }
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;