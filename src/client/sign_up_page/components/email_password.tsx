import React, { useState } from "react";
import "../style.css";

interface Props {
    userName: string;
    email: string;
    password: string;
    onSubmit: (userName: string, email: string, password: string) => void;
}

const EmailAndPassword: React.FC<Props> = ({ userName: initUserName, email: initEmail, password: initPassword, onSubmit }) => {
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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(userName, email, password);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Your name:</label>
                <input type="text" value={userName} onChange={handleUserNameChange} />
            </div>
            <div className="">
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div className="">
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmailAndPassword;
