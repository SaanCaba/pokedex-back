import { Strategy } from "passport-local";
import UsersService from "../../../../services/Users.js";
import boom from "@hapi/boom";
import verifyPass from "../../verifyPass.js";
const service = new UsersService();
const LocalStrategy = new Strategy(async (username, pass, done) => {
    try {
        const user = await service.findByName(username);
        if (!user) {
            done(boom.unauthorized(), false);
        }
        let isCorrect = await verifyPass(pass, user.password);
        if (!isCorrect) {
            done(boom.unauthorized(), false);
        }
        done(null, user);
    }
    catch (error) {
        done(error, false);
    }
});
export default LocalStrategy;
//# sourceMappingURL=local.strategy.js.map