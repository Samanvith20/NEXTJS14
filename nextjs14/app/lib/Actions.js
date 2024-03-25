"use server"
import bcrypt from "bcrypt"
import ConnectDb from "./db";
import { Users } from "./user.model";
import Products from "./product.model";
import { redirect } from "next/navigation"


const Adduser=async(formData)=>{
    try {
        const{username,email,password,phone,address,isAdmin,isActive}=Object.fromEntries(formData)
            await ConnectDb()
            const salt= await bcrypt.genSalt(10)
            const hashedPassword= await bcrypt.hash(password,salt)
            const newUser= await Users ({
                username,
                email,
                password:hashedPassword,
                phone,
                address,
                isAdmin,
                isActive
            })
            await newUser.save()
    } catch (error) {
        console.log(err);
        throw new Error("Failed to create User")
    }
    redirect("/dashboard/users")
}
 export default Adduser

 export const addProduct = async(formData) => {
    const {title,desc,price,stock,color,size} = Object.fromEntries(formData);

    try{
           
        await ConnectDb()
        const newProduct =  await new  Products({
            title,
            desc,
            price,
            stock,
            color,
            size
        });

        await newProduct.save();
        console.log(newProduct);
    } catch(err){
        console.log(err)
        throw new Error("Failed to create Product")
    }
}
