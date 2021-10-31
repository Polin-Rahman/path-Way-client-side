import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../images/solo.jpg';
import img2 from '../../images/couple.jpg';
import img3 from '../../images/group.jpg';

const Packages = () => {
    return (
        <div className="continer my-5">
            <h1 className="text-center mb-5">Some exciting Packages</h1>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Solo Package</Card.Title>
                        <Card.Text>
                            You are the one that possesses the keys to your being. You carry the passport to your own happiness.
                        </Card.Text>
                    </Card.Body>
                    <button className="btn btn-light">Click here to learn more</button>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Couple Package</Card.Title>
                        <Card.Text>
                            Actually, the best gift you could have given her was a lifetime of adventures.
                        </Card.Text>
                    </Card.Body>
                    <button className="btn btn-light">Click here to learn more</button>
                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Group Package</Card.Title>
                        <Card.Text>
                            I have found out that there ain’t no surer way to find out whether you like people or hate them than to travel with them.
                        </Card.Text>
                    </Card.Body>
                    <button className="btn btn-light">Click here to learn more</button>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Packages;