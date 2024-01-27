import { myDataSource } from "../app-data-source"
// import { User } from "../entity/user.entity"
import { UserGroup } from "../entity/user_group.entity"
import { UserGroupUserAssociation } from "../entity/user_group_user_association.entity"

export class UserGroupController {

    static createGroup = async (req, res) => {
        // Create and save the UserGroup entity
        try {
            var sys = req.body.created_system
            var user = req.body.created_user
            var group_data = {
                name: req.body.name,
                created_system: sys,
                created_user: user
            }

            const userGroup = await myDataSource.getRepository(UserGroup).create(group_data);
            const savedUserGroup = await myDataSource.getRepository(UserGroup).save(userGroup);
    
            var aso_data = {
                user_id: req.body.user_id,
                user_group_id: savedUserGroup.id,
                created_system: sys,
                created_user: user
            }         
    
            const association = await myDataSource.getRepository(UserGroupUserAssociation).create(aso_data);
            const savedAso = await myDataSource.getRepository(UserGroupUserAssociation).save(association);
    
            return res.json({ userGroup: savedUserGroup, association: savedAso });

        } catch (error) {
            console.error(error);
            return res.status(500).send('Internal Server Error');
        }
        
        
    }

    // todo: check the ORM syntax
    // static getUserGroups = async (req, res) => {
    //     var user_id = req.params.user_id
    //     const userGroups = await myDataSource.getRepository(UserGroupUserAssociation)
    //         .createQueryBuilder("aso")
    //         .leftJoinAndSelect("aso.user_group", "user_group")
    //         .where("aso.user_id = :user_id", { user_id: user_id })
    //     return res.send(userGroups)
    // }

    // todo: delete group and association
    // static deleteGroup = async (req, res) =>  {
    //     var name = req.params.name
    //     const reuslts = await myDataSource.getRepository(UserGroup).delete(name)
    //     await myDataSource.getRepository(UserGroupUserAssociation).delete()

    // }

}