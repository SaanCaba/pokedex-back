import bcrypt from "bcrypt";
async function verifyPass(password, passwordDB) {
    const isCorrect = await bcrypt.compare(password, passwordDB);
    return isCorrect;
}
export default verifyPass;
//# sourceMappingURL=verifyPass.js.map