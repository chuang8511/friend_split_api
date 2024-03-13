import React from "react";
import ItemView from "./components/friend_money_item";
import OverallView from "./components/overall";

const FriendPageIndex: React.FC = () => {
    return (
        <div>
            <OverallView
                owedAmount={1000}
                owingAmount={1000}
                />
            <ul>
                <li>
                <ItemView
                    imageSrc=''
                    userName='ChunHao'
                    amount={1000}
                    isOwed={true}/>
                </li>
                <li>
                <ItemView
                    imageSrc=''
                    userName='Anni'
                    amount={1000}
                    isOwed={false}/>
                </li>
            </ul>

        </div> 
    )
}

export default FriendPageIndex