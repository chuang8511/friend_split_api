import express from "express"
import { Account } from "../entity/Account.entity"
import { LoginRecord } from "../entity/LoginRecord.entity"

interface RegisterAccountInformation {
    userName: string
    email: string
    password: string
}

interface RegisterAccountResponse {
    message: string
    data?: any
}

interface LoginInformation {
    email: string
    password: string
}

interface LoginResponse {
    message: string
    data?: {
        failureReason?: "no user" | "wrong password"
        times?: number
    }
}

const DayLimit = 5

export class AccountController {

    static register = async (req: express.Request<{}, {}, RegisterAccountInformation>, res: express.Response<RegisterAccountResponse>) => {
        const { userName, email, password } = req.body;

        const newAccount = new Account();
        newAccount.userName = userName;
        newAccount.email = email;
        newAccount.password = password;
        
        try {
            const alreadyRegisteredAccount = await Account.findOne({
                where: { email: email }
              });
            if (alreadyRegisteredAccount) {
                res.status(200).json({ message: 'Account has been created' });
            } else {
                await newAccount.save();
                res.status(201).json({ message: 'Account created successfully' });
            }
            
            
        } catch (error) {
            res.status(500).json({ message: 'Failed to connect DB' });
        }

    }

    static login = async (req: express.Request<{}, {}, LoginInformation>, res: express.Response<LoginResponse>) => {
        const { email, password } = req.body

        try {
            const account = await Account.findOne({
                where: { email: email }
            })

            if (!account) {
                res.status(403).json({
                    message: "cannot find account by " + email,
                    data: {
                        failureReason: "no user"
                    }
                })
                return
            }

            const loginRecord = new LoginRecord();            
            // todo: check why it is always null
            const ip = req.headers["x-forwarded-for"] as string
            const userIp = ip

            loginRecord.email = email
            loginRecord.loginIp = userIp

            const isLogin = await account.comparePassword(password)

            console.log("result: " + isLogin)
            if (isLogin) {
                loginRecord.result = "OK"
                
                await loginRecord.save();
                res.status(201).json({
                    message: "Successfully login",
                    data: {}
                })
                return
            }

            loginRecord.result = "NG"
            await loginRecord.save();

            const today = new Date();
            today.setHours(0, 0, 0, 0)

            const failureTimes = await LoginRecord
            .createQueryBuilder("record")
            .where("record.email = :email", { email: email })
            .where("record.result = :result", { result: "NG" })
            .where("record.created_at >= :startDate", { startDate: today })
            .getCount()

            const remainingTime = DayLimit - failureTimes
            res.status(403).json({
                message: "wrong password for " + email,
                data: {
                    failureReason: "wrong password",
                    times: remainingTime
                }
            })


        } catch (error) {
            res.status(500).json({ message: 'Failed to connect DB', data: {} });
        }


    }

}