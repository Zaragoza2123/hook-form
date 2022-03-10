import React, { useState } from 'react';

const HookForm = (props) => {
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [compass, setCompass] = useState("");
    let [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password};
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={ createUser }>
                <h2>{formMessage()}</h2>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input type="text" className='form-control' onChange={ (e) => setFirstname(e.target.value) }></input>
                    {/* if(firstname.length <= 2) {
                        <p>error message</p>
                    } else {
                        null
                    } */}
                    {
                    firstname.length <= 2 && firstname.length > 0 ? <p>First name must be atleast 2 characters long</p>: null

                    }
                </div>
                <div className="form-group">
                    <label>Last Name:  </label>
                    <input type="text" className='form-control'  onChange={ (e) => setLastname(e.target.value) } ></input>
                    {lastname.length <= 2 && lastname.length > 0 ? <p>Last name must be atleast 2 characters long</p>: null}
                </div>
                <div className="form-group">
                    <label>Email:  </label>
                    <input type="text" className='form-control' onChange={ (e) => setEmail(e.target.value) }></input>
                    {email.length <= 5 && email.length > 0 ? <p>Email must be atleast 5 characters long</p>: null}
                </div>
                <div className="form-group">
                    <label>Password:  </label>
                    <input type="password" className='form-control'  onChange={ (e) => setPassword(e.target.value) }></input>
                    {password.length <= 8 && password.length > 0 ? <p>Password must be atleast 8 characters long</p>: null}
                </div>
                <div className="form-group">
                    <label>Confirm Password:  </label>
                    <input type="password" className='form-control' onChange={ (e) => setCompass(e.target.value) }></input>
                    {password != compass && compass.length > 0? <p>Passwords must match</p>: null}
                </div>
                <input type="submit" value="Create User"></input>
            </form>
            <hr />
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {compass}</p>
        </div>
    );

}

export default HookForm;