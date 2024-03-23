import ConnectDb from "./db";
import { Users } from "./user.model.js";

export const fetchUsers = async () => {
    try {
        await ConnectDb();
        const users = await Users.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};
