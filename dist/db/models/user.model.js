import { Schema, model } from "mongoose";
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const userModel = model("usersPokedex", UserSchema);
export default userModel;
//# sourceMappingURL=user.model.js.map