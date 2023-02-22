import userModel from "../db/models/user.model.js";
import hashPassword from "../routes/utils/hashpss.js";
import boom from "@hapi/boom";
import verifyPass from "../routes/utils/verifyPass.js";
class AuthService {
    constructor() { }
    async register(username, password) {
        let passHashed = await hashPassword(password);
        await new userModel({
            username,
            password: passHashed,
        }).save();
    }
    async login(username, password) {
        let user = await userModel.findOne({ username: username });
        console.log(user);
        if (!user) {
            throw boom.notAcceptable("Datos incorrectos!");
        }
        let isCorrect = await verifyPass(password, user.password);
        console.log(isCorrect);
        if (!isCorrect) {
            throw boom.badData("Contraseña incorrecta!");
        }
        return user;
    }
}
export default AuthService;
//# sourceMappingURL=Auth.js.map