import bcrypt from "bcrypt";
async function hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
export default hashPassword;
//# sourceMappingURL=hashpss.js.map