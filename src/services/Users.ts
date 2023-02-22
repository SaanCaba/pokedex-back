import userModel from "../db/models/user.model.js";

class UsersService {
  constructor() {}

  async findAll() {
    let users = await userModel.find({});
    return users;
  }

  async modifyUser(id: string, newName: string) {
    let updatedUser = await userModel.findByIdAndUpdate(id, {
      username: newName,
    });
    return updatedUser;
  }

  async findUserById(id: string) {
    let user = await userModel.findById(id);
    return user;
  }

  async deleteUser(id: string) {
    let user = await userModel.deleteOne({ _id: id });
    return user;
  }

  async findByName(username: string) {
    let user = await userModel.findOne({ username: username });
    return user;
  }
}

export default UsersService;
