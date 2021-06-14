import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/Textfield';
import '../css/login.css'

const Login = () => {
    return (
        <div className="login-appearance">
            <h1>Log In</h1>
            <form>
                <div className="login-info-container">
                    <label>
                        <TextField
                            id="standard-number"
                            label="W Number"
                            type="number"
                        />
                    </label>
                    <br />
                    <label>
                        <TextField
                            id="standard-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </label>
                </div>
                <br />
                <label>
                    <div class="login-button-container">
                        <Button variant="contained" color="primary" className="centered-button">
                            Log In
                        </Button>
                    </div>
                </label>
            </form>
        </div>
    )
}

export default Login