import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import history from "../../../helper/history";


export const Login = (props) => {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <div className="container">
            <div className="col-lg-12 login-title">
                           Login In
            </div>

            <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                    { message !== "" &&
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    }

                    <form 
                        onSubmit={(event) => {
                            event.preventDefault();
                            axios.post(process.env.REACT_APP_API_HOST_URL+'/auth/login',{
                                email: email,
                                password: password
                            })
                                .then((response) => {
                                    setMessage("");

                                    localStorage.setItem('user', JSON.stringify({
                                        _id:response.data.data._id,
                                        email: response.data.data.email,
                                        firstName: response.data.data.firstName,
                                        lastName: response.data.data.lastName,
                                        token: response.data.data.token
                                    }));

                                    localStorage.setItem('auth_token' , response.data.data.token);
                                    history.push('/');
                                })
                               
                                .catch(err =>{
                                    setMessage("Invalid Credentials");
                                    setPassword("")
                                });
                        }}> 

                        <div className="form-group">
                            <label className="form-control-label">Email </label>
                            <input type="text" className="form-control"
                            value={email}
                            onChange = {(event) => {
                                setEmail(event.target.value);
                            }} />
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">Password</label>
                            <input type="password" className="form-control"
                            name={'password'}
                            value={password}
                            onChange={(event) => {
                                setPassword(event.target.value);
                            }}/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" >
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <Link className="dropdown-item" to="#">New around here? Sign up</Link>
                        <Link className="dropdown-item" to="#">Forgot password?</Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};