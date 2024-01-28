import { PaidUser } from "../entity/paid_user.entity";
import { SharedUser } from "../entity/shared_user.entity";
import { AmountDetail } from "../entity/amount_detail.entity";

export class equallyShareService {
    private totalAmount: number;
    private user_group_id: string;
    private userIds: string[];
    private paidUserId: string;
    private amountDetail?: AmountDetail;
    private paidUsers?: PaidUser[];
    private sharedUsers?: SharedUser[];

    constructor(user_group_id: string, totalAmount: number, userIds: string[], paidUserId: string) {
        this.totalAmount = totalAmount;
        this.user_group_id = user_group_id;
        this.userIds = userIds;
        this.paidUserId = paidUserId
    }

    distributeAmount(): void {
        const amountDetail = new AmountDetail();
        amountDetail.user_group_id = parseInt(this.user_group_id);
        amountDetail.amount_paid = this.totalAmount;
        amountDetail.created_user = 'sys';
        amountDetail.created_system = 'sys';

        this.amountDetail = amountDetail;

        const paidUser = new PaidUser();
        paidUser.user_id = parseInt(this.paidUserId);
        paidUser.amount_paid = this.totalAmount;
        paidUser.created_user = 'sys';
        paidUser.created_system = 'sys';
        this.paidUsers = [paidUser]

        const userCount = this.userIds.length
        const sharedAmount = Math.round(this.totalAmount / userCount) ;
        this.sharedUsers = []
        for (let i = 0; i < userCount; i++) {
            const shared_user = new SharedUser();
            shared_user.user_id = parseInt(this.userIds[i])
            shared_user.amount_shared = sharedAmount;
            shared_user.created_user = 'sys';
            shared_user.created_system = 'sys';
            this.sharedUsers.push(shared_user)
        }

        console.log(this.amountDetail)
        console.log(this.paidUsers)
        console.log(this.sharedUsers)
    }

    getAmountDetail(): AmountDetail | undefined {
        return this.amountDetail;
    }
    
    getPaidUsers(): PaidUser[] | undefined {
        return this.paidUsers;
    }
    
    getSharedUsers(): SharedUser[] | undefined {
        return this.sharedUsers;
    }
    
}