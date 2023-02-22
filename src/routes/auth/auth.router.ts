import express from "express";
import passport from "passport";
import { validateHandler } from "../../middlewares/validator.handler.js";
import { authSchema } from "../../schema/auth.schema.js";
import AuthService from "../../services/Auth.js";

const router = express.Router();
const service = new AuthService();

router.post(
  "/register",
  validateHandler(authSchema, "body"),
  async (req, res) => {
    const { username, password } = req.body;
    await service.register(username, password);
    res.send("creado con éxito!");
  }
);

router.post(
  "/login",
  //llamamos a la estrategia de authenticación
  passport.authenticate("local", { session: false }),
  async (req, res, next) => {
    try {
      //si pasa la validación de passport el user queda almacenado en el request
      let userData = {
        id: req.user._id,
        username: req.user.username,
      };
      res.json(userData);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
