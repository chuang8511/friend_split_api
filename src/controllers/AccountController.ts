import express from "express"
import { Account } from "../entity/Account.entity"

interface AccountInformation {
    userName: string
    email: string
    password: string
}

interface RegisterAccountResponse {
    message: string
    data?: any
}


export class AccountController {

    static register = async (req: express.Request<{}, {}, AccountInformation>, res: express.Response<RegisterAccountResponse>) => {
        const { userName, email, password } = req.body;

        const newAccount = new Account();
        newAccount.userName = userName;
        newAccount.email = email;
        newAccount.password = password;
        
        try {
            await newAccount.save();
            res.status(201).json({ message: 'Account created successfully' });
        } catch (error) {
            console.error('Error saving account:', error);
            res.status(500).json({ message: 'Failed to create account' });
        }

    }

}