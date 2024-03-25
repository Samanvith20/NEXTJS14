"use server"
import bcrypt from "bcrypt"
import ConnectDb from "./db";
import { Users } from "./user.model";
import Products from "./product.model";
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache";


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
export const deleteUser= async(formData)=>{
    const {id}=Object.fromEntries(formData);
    try {
          await ConnectDb()
             await Users.findByIdAndDelete(id)
            

    } catch (error) {
         console.log("There is an error in deleting the user",error)
    }
    revalidatePath("/dashboard/users")
}

export const deleteProduct= async(formData)=>{
    const {id}=Object.fromEntries(formData);
    try {
        ConnectDb()
        await Products.findByIdAndDelete(id)
    } catch (error) {
        console.log("The Product was not deleted Sucessfully",error)
    }
    revalidatePath("/dashboard/products")
}
// This function is intended to update user information based on the provided form data.
// It takes a formData object containing user information as input.

export const updateUser = async (formData) => {
    // Destructure properties from formData object
    const { id, username, email, password, phone, address, isAdmin, isActive } =
      Object.fromEntries(formData);
  
    try {
      // Establish connection to the database
      ConnectDb()
  
      // Create an object containing fields to be updated
      const updateFields = {
        username,
        email,
        password,
        phone,
        address,
        isAdmin,
        isActive,
      };
  
      // Iterate through updateFields and delete properties with empty or undefined values
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      // Update user information in the database using the id and updateFields
      await Users.findByIdAndUpdate(id, updateFields);
    } catch (err) {
      // Log any errors that occur during the update process
      console.log(err);
      // Throw a new error indicating failure to update user
      throw new Error("Failed to update user!");
    }
  
    // Revalidate data associated with the "/dashboard/users" path
    revalidatePath("/dashboard/users");
    // Redirect the user to the "/dashboard/users" path
    redirect("/dashboard/users");
  };
  
  export const Updateproduct = async ( formData) => {
    const { title, Price, Stock, Size, Color, Category, Description } = Object.fromEntries(formData);
    
    try {
      ConnectDb(); // Assuming this is your database connection function
  
      const UpdateProducts = {
        title,
        Price,
        Stock,
        Size,
        Color,
        Category,
        Description
      };
  
      Object.keys(UpdateProducts).forEach((key) => {
        if (UpdateProducts[key] === "" || UpdateProducts[key] === undefined) {
          delete UpdateProducts[key];
        }
      });
  
      await Products.findByIdAndUpdate(id, UpdateProducts);
    } catch (error) {
      console.log(error);
      throw new Error("Failed to update Product!");
    }
  
    // Assuming revalidatePath and redirect functions are defined and properly imported
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
  }
  