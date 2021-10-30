import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://glacial-temple-54782.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    // delete an Order
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel?');
        if (proceed) {
            const url = `https://glacial-temple-54782.herokuapp.com/allorders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(user => user._id !== id);
                        setOrders(remaining);
                    }
                });
        }
    }

    //update
    const [update, setUpdate] = useState({});

    const handleUpdate = id => {
        const updated = {
            status: 'Approved'
        }
        setUpdate(updated);
        const url = `https://glacial-temple-54782.herokuapp.com/allorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Booking approved Successful');
                    window.location.reload();
                }
            })
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
                            <button
                                onClick={() => handleUpdate(order._id)}
                                className="btn btn-success me-2">Approve Order</button>
                            <button
                                onClick={() => handleDelete(order._id)}
                                className="btn btn-danger">Cancel Order</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageAllOrders;