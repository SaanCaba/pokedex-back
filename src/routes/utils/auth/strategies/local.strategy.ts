import { Strategy } from "passport-local";
import UsersService from "../../../../services/Users.js";
import boom from "@hapi/boom";
import verifyPass from "../../verifyPass.js";
import { ObjectId } from "mongoose";

const service = new UsersService();

interface User {
  username: string;
  password: string;
  _id: any;
}

const LocalStrategy = new Strategy(async (username, pass, done) => {
  try {
    const user: User = await service.findByName(username);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    let isCorrect = await verifyPass(pass, user.password);
    if (!isCorrect) {
      done(boom.unauthorized(), false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
});

export default LocalStrategy;
