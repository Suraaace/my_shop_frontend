import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import history from "../../../helper/history"

export const SignUp = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit= (event) => {
        return axios.post(process.env.REACT_APP_API_HOST_URL + '/user/create', {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            password: password
        })
            .then((response) => {
                history.push('/login');
                // alert("Successfully registerd");
        });
    };

    return (
        <div>
            <div className = "container">
            <form>
                    <div className="form-group">
                        <label htmlFor="firsName ">First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" 
                        // name={'firstName'} value={this.state.firstName} onChange={this.handleChange}
                        value = {firstName}
                        onChange = {(event)=>{
                            setFirstName(event.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName ">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" 
                        // name ={'lastName'} value={this.state.lastName} onChange={this.handleChange}
                        value={lastName} onChange = {(event) => {
                            setLastName(event.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="text" className="form-control" placeholder="Phone Number" 
                        // name={'phone'} value={this.state.phone} onChange={this.handleChange}
                        value ={phone} onChange={(event)=>{
                            setPhone(event.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName ">Email</label>
                        <input type="text" className="form-control" placeholder="Email" 
                        // name={'email'} value={this.state.email} onChange={this.handleChange}
                        value = {email} onChange={(event)=>{
                            setEmail(event.target.value);
                        }}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password ">Password</label>
                        <input type="password" className="form-control" minLength="8" 
                        required placeholder="Password" 
                        // name={'password'} value={this.state.password} onChange={this.handleChange}
                        value={password} onChange={(event)=>{
                            setPassword(event.target.value);
                        }
                        }/>
                    </div>
                    {/* <button type="button" className="btn btn-primary" onClick={this.submitHandler}> Save</button> */}
                    <button type="button" className="btn btn-primary" onClick={onSubmit}> Save</button>
                    <div>
                        Already a member!!!
                        <Link className="btn btn-primary" to="/login">Login </Link>
                    </div> 
                    
                </form>
              
            </div>

        </div>
    )

}