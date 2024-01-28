import { equallyShareService } from "../../services/equalllyShareService";

describe('equallyShareService', () => {
    const user_group_id = '1';
    const totalAmount = 99;
    const userIds = ['2', '3', '4'];
    const paidUserId = '5';

    const shareService = new equallyShareService(user_group_id, totalAmount, userIds, paidUserId);
    shareService.distributeAmount();


    it("should assign the right count of users", () => {
        expect(shareService.getPaidUsers().length).toBe(1);
        expect(shareService.getSharedUsers().length).toBe(3)
    })

    it('should distribute amount equally with correct amount', () => {    
        expect(shareService.getAmountDetail().amount_paid).toBe(totalAmount);
        for (let i = 0; i < 3; i++) {
            expect(shareService.getSharedUsers()[i].amount_shared).toBe(33);
        }
        expect(shareService.getPaidUsers()[0].amount_paid).toBe(99);
    })
});