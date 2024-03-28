import React, { useState } from "react";
import LoginInput from "./component/input";
import fetch from "node-fetch"

const LoginPage: React.FC = () => {
    const [email, setLoginEmail] = useState<string>("");
    const [password, setLoginPassword] = useState<string>("");

    const [message, setLoginResultMessage] = useState<string>("");

    const handleLogin = async (email: string, password: string, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Login data:", { email })
        setLoginResultMessage("");

        if (!(email && password)) {
            setLoginResultMessage("Please fill in all fields")
            return
        }

        try {
            const response = await fetch("http://localhost:3001/v1/api/account/login" , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const status = response.status
            const apiData = await response.json();
            const failureReason = apiData.data?.failureReason

            if (status == 201) {
                setLoginResultMessage("Successfully Login")
                // to display the friends page and set the session to keep login status

            } else if (status == 403 && failureReason == "no user") {
                setLoginResultMessage("No email is found")

            } else if (status == 403 && failureReason == "wrong password") {
                const remainingTimes = apiData.data.times
                setLoginResultMessage("Password is wrong, you still have " + remainingTimes + " times to try today")

            } else {
                throw new Error("Failed to connect server")
            }

        } catch (error: any) {
            console.error("Unexpected error", error.message);
            setLoginResultMessage("Something weng wrong, please do it later.")
        }

    }
    return (
        <div>
            <form onSubmit={(event) => handleLogin(email, password, event)}>
                <LoginInput
                    value={email}
                    onChange={setLoginEmail}
                    label="Email"
                    type="email"
                    placeholder="xxx@gmail.com"
                />
                <LoginInput
                    value={password}
                    onChange={setLoginPassword}
                    label="Password"
                    type="password"
                    placeholder="xxx"
                />
                <button type="submit" data-testid="login-form">Login</button>
            </form>
            {message && <p data-testid="submit-message">{message}</p>}
        </div>
    )

}

export default LoginPage