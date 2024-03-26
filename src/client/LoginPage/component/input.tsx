import React from "react";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    label: string;
    type: "email" | "password";
    placeholder?: string;
}

const LoginInput: React.FC<InputProps> = ({ value, onChange, label, type, placeholder }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div>
            <label htmlFor={type}>{label}:</label>
            <input id={type} type={type} placeholder={placeholder} value={value} onChange={handleChange} />
        </div>
    );
};

export default LoginInput;
