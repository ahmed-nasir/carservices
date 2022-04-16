import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setUserInfo({...userInfo, email: e.target.value })
    }

    const handlePassword = e => {
        setUserInfo({...userInfo, password: e.target.value })
    }

    console.log(userInfo.email);
    console.log(userInfo.password)
    const handleLogin = e => {
        e.preventDefault();
        if(loading){
            {<p>Loading...</p>}
        }
        signInWithEmailAndPassword(userInfo.email, userInfo.password)

    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user])
    return (
        <div className='mt-5 border border-1 w-50 mx-auto'>
            <div className='text-center'>
                <h1>Log In</h1>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center '>
                    <Form onSubmit={handleLogin} >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='toggle'>
                            <Form.Text className="text-muted">
                                <span>Have no Acount? </span>
                                <Link to='/signup'>Create New</Link>
                            </Form.Text>
                        </Form.Group>
                        <button className='btn btn-primary'>Login</button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;