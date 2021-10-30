import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // delete an Order
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `http://localhost:5000/allorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                });
        }
    }

    return (
        <div className="container">
            <h3 className="text-center my-5">Manage All Orders</h3>
            {
                orders.map(order => (
                    <div className="card my-3">
                        <div className="card-header">
                            Order Id: {order.orderId}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Name: {order.name}</h5>
                            <p className="card-text">Email: {order.email}</p>
                            <p className="card-text">Address: {order.address}</p>
                            <p className="card-text">Phone: {order.phone}</p>
                            <p className="card-text fw-bolder">Order Status: {order.status} </p>
                            <button className="btn btn-success me-2">Approve Order</button>
                            <button
                                onClick={() => handleDeleteUser(order._id)}
                                className="btn btn-danger">Cancel Order</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageAllOrders;