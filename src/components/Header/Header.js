import React from 'react';
import { Card } from 'react-bootstrap';
import './Header.css';
import banner from '../../images/banner.jpg'


const Header = () => {
    return (
        <div className="top-banner" >
            <Card className="text-dark">
                <Card.Img src={banner} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="fs-4">Welcome to Our tourism agency <i className="fas fa-suitcase-rolling"></i></Card.Title>
                    <Card.Text >
                        Traveling – it leaves you speechless, then turns you into a storyteller...
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Header;