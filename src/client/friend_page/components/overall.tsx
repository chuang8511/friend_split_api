import React from "react";
import "../style.css";

interface Props {
    owedAmount: number;
    owingAmount: number;
}

const OverallView: React.FC<Props> = ({ owedAmount, owingAmount}) => {
    return (
        <div>
            <h2>Overall</h2>
            <p>You are owed {owedAmount}</p>
            <p>You are owing {owingAmount}</p>
            <hr></hr>
            <p className={ owedAmount >= owingAmount ? 'is-owed' : 'owing' }>
                {Math.abs(owedAmount-owingAmount)}
            </p>
        </div>
    )
}

export default OverallView