import express from "express";
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

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    let userLogueado = await service.login(username, password);
    if (userLogueado) {
      return res.json({ message: "Logueado con éxito", userLogueado });
    }
  } catch (error) {
    next(error);
  }
});

export default router;
