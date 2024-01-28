import { AccountingPersistence } from "../persistences/AccountingPersistence"
import { equallyShareService } from "../services/equalllyShareService"

export class AccountingController {

    // todo: DI the calculation service later.
    static saveAccountingResult = async (req, res) => {
        const totalAmount = req.body.totalAmount
        const user_group_id = req.body.user_group_id
        const userIds = req.body.userIds
        const paidUserId = req.body.paidUserId
        const shareService = new equallyShareService(user_group_id, totalAmount, userIds, paidUserId)

        shareService.distributeAmount()

        AccountingPersistence.save(shareService)

        // Todo modify this response
        return res.send(200)
        
    }
}
