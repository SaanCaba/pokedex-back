import userModel from "../db/models/user.model.js";
class UsersService {
    constructor() { }
    async findAll() {
        let users = await userModel.find({});
        return users;
    }
    async modifyUser(id, newName) {
        let updatedUser = await userModel.findByIdAndUpdate(id, {
            username: newName,
        });
        return updatedUser;
    }
    async findUserById(id) {
        let user = await userModel.findById(id);
        return user;
    }
    async deleteUser(id) {
        let user = await userModel.deleteOne({ _id: id });
        return user;
    }
}
export default UsersService;
//# sourceMappingURL=Users.js.map