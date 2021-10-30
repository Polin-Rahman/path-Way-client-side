import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './OrderPlace.css';
import useAuth from '../../hooks/useAuth';

const OrderPlace = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [service, setService] = useState({});

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booking processed Successfully');
                    reset();
                }
            })
    };

    useEffect(() => {
        const url = `http://localhost:5000/orderplace/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const status = 'Pending';

    return (
        <div className="container order">
            <h2 className="text-center my-3">Confirm Your Booking for - {service.name}</h2>
            <div className="d-flex justify-content-center">
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

            </div>
            <div className="d-flex justify-content-center">
                <div>
                    <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                        <p className="mb-1"><small>Booking id:</small></p>
                        <input defaultValue={id} {...register("orderId")} />

                        <p className="mb-1"><small>Order status:</small></p>
                        <input defaultValue={status} {...register("status")} />

                        <p className="mb-1"><small>Your informations:</small></p>
                        <input defaultValue={user.displayName} {...register("name")} />
                        <input defaultValue={user.email} {...register("email", { required: true })} />
                        {errors.email && <span className="error">This field is required</span>}

                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />

                        <input placeholder="Phone number" defaultValue="" {...register("phone", { required: true })} />

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div >
    );
};

export default OrderPlace;