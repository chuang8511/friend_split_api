import React from "react";
import "../style.css";

interface Props {
    imageSrc: string;
    userName: string;
    amount: number;
    isOwed: boolean;
}


const ItemView: React.FC<Props> = ({ imageSrc, userName, amount, isOwed }) => {
    return (
        <div className="">
            {/* <img src={imageSrc} alt={userName}/> */}
            <p>{userName}</p>
            <p className={isOwed ? 'is-owed' : 'owing'}>{amount}</p>
        </div>
    )
}


export default ItemView;