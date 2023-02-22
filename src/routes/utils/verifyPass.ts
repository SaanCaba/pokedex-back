import bcrypt from "bcrypt";

async function verifyPass(password: string, passwordDB: string) {
  const isCorrect = await bcrypt.compare(password, passwordDB);
  return isCorrect;
}

export default verifyPass;
