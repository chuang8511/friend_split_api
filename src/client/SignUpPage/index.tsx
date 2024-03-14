import React from "react";
import SignUpForm from "./components/SignUpForm";

const SignUpIndex: React.FC = () => {

    const handleSubmit = (userName: string, email: string, password: string, event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted data:", { userName, email, password });
        
        // Handle form submission logic here, e.g., sending data to the server
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