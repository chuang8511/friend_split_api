import React, { useState } from "react";
import "../style.css";

interface Props {
    userName: string;
    email: string;
    password: string;
    onSubmit: (userName: string, email: string, password: string, event: React.FormEvent<HTMLFormElement>) => void;
}

const SignUpForm: React.FC<Props> = ({ userName: initUserName, email: initEmail, password: initPassword, onSubmit }) => {
    const [userName, setUserName] = useState(initUserName)
    const [email, setEmail] = useState(initEmail)
    const [password, setPassword] = useState(initPassword)

    const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <form onSubmit={(e) => onSubmit(userName, email, password, e)} >
            <div>
                <label htmlFor="userName">Your name:</label>
                <input id="userName" type="text" placeholder="ChunHao" value={userName} onChange={handleUserNameChange} data-testid="userName-input" required />
            </div>
            <div className="">
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" placeholder="xxxx@gmail.com" value={email} onChange={handleEmailChange} data-testid="email-input" required />
            </div>
            <div className="">
                <label htmlFor="password">Password:</label>
                <input id="password" type="password" value={password} onChange={handlePasswordChange} data-testid="password-input" required/>
            </div>
            <button type="submit" data-testid="sign-up-form-submit-btn">Submit</button>
        </form>
    );
}

export default SignUpForm;
