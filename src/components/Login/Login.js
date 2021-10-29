import React from 'react';
import useAuth from '../../hooks/useAuth';
import { useLocation, useHistory } from 'react-router-dom';

const Login = () => {

    const { signInWithGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handelGoogleLogIn = () => {
        signInWithGoogle()
            .then(res => {
                setIsLoading(true)
                setUser(res.user)
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div>
            <h3 className="text-center mt-5">Please Login</h3>
            <div className="d-flex justify-content-center">
                <button onClick={handelGoogleLogIn} className="btn btn-danger">Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;