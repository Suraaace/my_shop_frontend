import React from 'react';
import { Link } from 'react-router-dom';

export const Login = (props) => {
    return (
        <div>
            <div class="dropdown-menu">
                <form class="px-4 py-3">
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Email address</label>
                        <input type="email" className="form-control" 
                        id="exampleDropdownFormEmail1" 
                        placeholder="email@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword1">Password</label>
                        <input type="password" className="form-control" 
                        id="exampleDropdownFormPassword1" 
                        placeholder="Password"/>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                        <label className="form-check-label" htmlFor="dropdownCheck">
                            Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">New around here? Sign up</Link>
                <Link className="dropdown-item" to="#">Forgot password?</Link>
            </div>
        </div>
    );
};