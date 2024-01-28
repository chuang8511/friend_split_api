import { UserPersistence } from "../persistences/UserPersistence"

export class UserController {
    
  // to be deleted.
  // Only for system check
  // static getAll = async (req, res) => {
  //   const users = await myDataSource.getRepository(User).find()
  //   res.json(users) 
  //  }

  //  static getUser = async (req, res) => {
  //   var id = req.params.id
  //   const results = await myDataSource.getRepository(User).findOneBy({
  //     id: id
  //   })
  //   res.json(results)     
  //  }

   static register = async (req, res) => {
    const name = req.body.name
    const created_sys = req.body.created_system
    const created_user = req.body.created_user
    const results = await UserPersistence.reigsterUser(name, created_sys, created_user)
    return res.send(results)
   }


   static withdraw = async (req, res) => {
    const id = req.params.id
    const results = await UserPersistence.withdrawUser(id)
    return res.send(results)
   }

   static connectFriend = async (req, res) => {
    const userId = req.body.id
    const friendId = req.body.friend_user_id
    const created_sys = req.body.created_system
    const created_user = req.body.created_user
    const results = await UserPersistence.connectFriends(userId, friendId, created_sys, created_user)
    
    return res.send(results)
   }

  //  todo: disconnect friends
  // static disconnectFriend
}