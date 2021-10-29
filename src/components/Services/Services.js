import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./travel-fake-data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container my-5">
            <h1 className="text-center">We are Offering</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;