import { Request, Response } from 'express';
import { myDataSource } from "../app-data-source"
import { User } from "../entity/user.entity"

export class UserController {
  static getAll = async (req, res) => {
    const users = await myDataSource.getRepository(User).find()
    res.json(users) 
   }

   static Create = async (req, res) => {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
   }
}