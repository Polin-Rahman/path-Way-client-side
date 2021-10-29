import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, details } = service;
    return (
        <div className="col">
            <Card className="card-size">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to="/orderplace"><Button variant="dark">Book Now</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;