import React from "react";
import "./style.css";

interface Props {
    imageSrc: string;
    userName: string;
    amount: number;
    isOwed: boolean;
}


const ItemView: React.FC<Props> = ({ imageSrc, userName, amount, isOwed }) => {
    return (
        <div className="item">
            {/* <img src={imageSrc} alt={userName}/> */}
            <div className="details">
                <h2>{userName}</h2>
                <p className={isOwed ? 'is-owed' : 'owing'}>{amount}</p>
            </div>
        </div>
    )
}


export default ItemView;