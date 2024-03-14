import React from "react";
import EmailAndPassword from "./components/email_password";

const SignUpIndex: React.FC = () => {

    const handleSubmit = (userName: string, email: string, password: string) => {
        console.log("Submitted data:", { userName, email, password });
        // Handle form submission logic here, e.g., sending data to the server
    };
    
    return (
        <div>
            <EmailAndPassword
                userName=""
                email=""
                password=""
                onSubmit={handleSubmit}/>
        </div>
    )
}

export default SignUpIndex