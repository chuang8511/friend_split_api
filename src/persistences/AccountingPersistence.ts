import { myDataSource } from "../app-data-source"
import { AmountDetail } from "../entity/amount_detail.entity"
import { PaidUser } from "../entity/paid_user.entity"
import { SharedUser } from "../entity/shared_user.entity"

export class AccountingPersistence {

    static save = async (shareService) => {
        const amountDetail = shareService.amountDetail
        const paidUsers = shareService.paidUsers
        const sharedUsers = shareService.sharedUsers

        await myDataSource.manager.transaction(async (transactionalEntityManager) => {
            
            const amountDetailData = await transactionalEntityManager.save(AmountDetail, amountDetail)
            const amountDetailId = amountDetailData.id
            for (let i = 0; i < paidUsers.length; i++) {
                var paidUser = paidUsers[i]
                paidUser.amount_detail_id = amountDetailId
                await transactionalEntityManager.save(PaidUser, paidUser)
            }
            
            for (let i = 0; i < sharedUsers.length; i++) {
                var sharedUser = sharedUsers[i]
                sharedUser.amount_detail_id = amountDetailId
                await transactionalEntityManager.save(SharedUser, sharedUser)
            }
        })
    }
}