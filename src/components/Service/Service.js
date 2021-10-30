import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, details, _id, price } = service;
    //console.log(service);
    return (
        <div className="col">
            <Card className="card-size">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="fs-4">{name}</Card.Title>
                    <Card.Title>Booking price: ${price}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link to={`/orderplace/${_id}`}><Button variant="warning">Book Now</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Service;