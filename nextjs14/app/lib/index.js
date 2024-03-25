import ConnectDb from "./db";
import { Users } from "./user.model.js";
import  Products  from "./product.model";

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
export const fetchUser = async (id) => {
    try {
        await ConnectDb();
        const user = await Users.findById(id)
        return user
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};
 export const fetchProducts=async()=>{
    try {
        await ConnectDb()
         const products =await Products.find()
         return products
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Products!");
    }
 }

 export const fetchProduct=async(id)=>{
    try {
        await ConnectDb()
         const product =await Products.findById(id)
         return product
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Products!");
    }
 }
