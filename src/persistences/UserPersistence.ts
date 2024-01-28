import { myDataSource } from "../app-data-source"
import { FriendConnection } from "../entity/friend_connection.entity"
import { User } from "../entity/user.entity"

export class UserPersistence {

    static reigsterUser = async (name, created_sys, created_user) => {
        const user = new User
        user.name = name
        user.created_system = created_sys
        user.created_user = created_user

        const results = await myDataSource.getRepository(User).save(user)
        return results
    }

    static withdrawUser = async (id) => {
        const userId = id
        const results = await myDataSource.getRepository(User).delete(userId)
        return results
    }

    static connectFriends = async (id, friend_id, created_sys, created_user) => {
        const connection = new FriendConnection
        connection.user_id = id
        connection.friend_user_id = friend_id
        connection.created_system = created_sys
        connection.created_user = created_user

        const results = await myDataSource.getRepository(FriendConnection).save(connection)
        return results
    }

}