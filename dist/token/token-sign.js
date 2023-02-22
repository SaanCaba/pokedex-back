import jwt from "jsonwebtoken";
export default function signToken() {
    const token = jwt.sign({}, process.env.SECRET, { expiresIn: "7d" });
    return token;
}
//# sourceMappingURL=token-sign.js.map