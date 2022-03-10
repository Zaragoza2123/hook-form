import React, { useState } from 'react';

const HookForm = (props) => {
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [compass, setCompass] = useState("");

    return (
        <div>
            <h1>Register</h1>
            <form>
                <div className="form-group">
                    <label>First Name:  </label>
                    <input type="text" className='form-control' onChange={ (e) => setFirstname(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <label>Last Name:  </label>
                    <input type="text" className='form-control'  onChange={ (e) => setLastname(e.target.value) } ></input>
                </div>
                <div className="form-group">
                    <label>Email:  </label>
                    <input type="text" className='form-control' onChange={ (e) => setEmail(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <label>Password:  </label>
                    <input type="password" className='form-control'  onChange={ (e) => setPassword(e.target.value) }></input>
                </div>
                <div className="form-group">
                    <label>Confirm Password:  </label>
                    <input type="password" className='form-control' onChange={ (e) => setCompass(e.target.value) }></input>
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