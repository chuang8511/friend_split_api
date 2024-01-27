import { myDataSource } from "../app-data-source"
import { FriendConnection } from "../entity/friend_connection.entity"
import { User } from "../entity/user.entity"

export class UserController {
    
  // Only for system check
  static getAll = async (req, res) => {
    const users = await myDataSource.getRepository(User).find()
    res.json(users) 
   }

   static getUser =async (req, res) => {
    var id = req.params.id
    const results = await myDataSource.getRepository(User).findOneBy({
      id: id
    })
    res.json(results)     
   }

   // User behavior
   static register = async (req, res) => {
    const user = await myDataSource.getRepository(User).create(req.body)
    const results = await myDataSource.getRepository(User).save(user)
    return res.send(results)
   }


   static withdraw = async (req, res) => {
    var id = req.params.id
    const results = await myDataSource.getRepository(User).delete(id)
    return res.send(results)
   }

   static connectFriend = async (req, res) => {
    const connection = await myDataSource.getRepository(FriendConnection).create(req.body)
    const results = await myDataSource.getRepository(FriendConnection).save(connection)
    return res.send(results)
   }

  //  todo: disconnect friends
  // static disconnectFriend
}