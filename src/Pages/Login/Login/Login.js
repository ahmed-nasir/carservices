import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mt-5 border border-1 w-50 mx-auto'>
            <div className='text-center'>
                <h1>Log In</h1>
            </div>
            <div className='container'>
                <div className='d-flex justify-content-center '>
                    <Form >
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='toggle'>
                            <Form.Text className="text-muted">
                                <span>Have no Acount? </span>
                                <Link to='/signup'>Create New</Link>
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;