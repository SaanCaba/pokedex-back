import mongoose from "mongoose";
const connection = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.DB);
        console.log("Connected to database");
    }
    catch (error) {
        console.log(error);
        console.log("could not connect to database");
    }
};
export default connection;
//# sourceMappingURL=connection.js.map