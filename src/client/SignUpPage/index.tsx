import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUpIndex: React.FC = () => {

    const handleSubmit = async (userName: string, email: string, password: string, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted data:", { userName, email });
        
        try {
            const response = await fetch("http://localhost:3001/v1/api/account", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userName, email, password })
            });
            
            if (!response.ok) {
                throw new Error("Failed to save data");
            }
            console.log("Data saved successfully!");
        } catch (error: any) {
            console.error("Error saving data:", error.message);
        }
    };
    
    return (
        <div>
            <SignUpForm
                userName=""
                email=""
                password=""
                onSubmit={handleSubmit}/>
        </div>
    )
}

export default SignUpIndex