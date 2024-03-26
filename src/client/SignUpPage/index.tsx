import React, { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import fetch from 'node-fetch'

const SignUpIndex: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = async (userName: string, email: string, password: string, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted data:", { userName, email });
        setMessage("");

        if (!(userName && email && password)) {
            setMessage("Please fill in all fields.");
            return;
        }
        
        try {
            const response = await fetch("http://localhost:3001/v1/api/account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, email, password })
            });
            
            if (response.status == 200) {
                setMessage("The account has been registered")
                console.log("There is no new data saved")
            } else if (response.status == 201) {
                setMessage("You have finished the account registration");
                console.log("Data has been registered")
            } else {
                throw new Error("Failed to save data");
            }
        } catch (error: any) {
            console.error("Error saving data:", error.message);
            setMessage("Something weng wrong, please do it later.")
        }
    };
    
    return (
        <div>
            <SignUpForm
                userName=""
                email=""
                password=""
                onSubmit={handleSubmit}/>
            {message && <p data-testid="submit-message">{message}</p>}
        </div>
    )
}

export default SignUpIndex