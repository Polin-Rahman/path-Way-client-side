import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Menubar.css';

const Menubar = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand><span className="fw-bolder fs-2 fst-italic">Path-way <i className="fas fa-umbrella-beach"></i></span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link> <NavLink className="custom-nav-text" to="/home">Home</NavLink></Nav.Link>

                        {
                            user.email && <Nav.Link> <NavLink className="custom-nav-text" to="/myorders">My Orders</NavLink></Nav.Link>
                        }

                        {
                            user.email && <Nav.Link> <NavLink className="custom-nav-text" to="/manageallorders">Manage all Orders</NavLink></Nav.Link>
                        }

                        {
                            user.email && <Nav.Link> <NavLink className="custom-nav-text" to="/addservice">Add new Offer</NavLink></Nav.Link>
                        }


                        {
                            user.email && <Navbar.Text>
                                Hello! {user.displayName}
                            </Navbar.Text>
                        }

                        {
                            user.email ?
                                <button onClick={logOut}
                                    className="btn btn-light ms-2"
                                >Log Out</button>
                                :
                                <Nav.Link><NavLink className="custom-nav-text" to="/login">LogIn</NavLink></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menubar;