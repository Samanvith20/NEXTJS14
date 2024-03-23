import Image from "next/image"
import styles from "../../ui/users/users.module.css"
import Link from "next/link"
import { fetchUsers } from "@/app/lib"
const Userpage=async()=>{
   const users=  await fetchUsers()
   console.log(users)
    return(
        <div className={styles.container}>
        <div className={styles.top}>
        <Link href="/dashboard/users/add">
         <button className={styles.addButton}>Add New</button>
         </Link> 
        </div>
        

         
              <table className={styles.table}>
                <thead>
                  <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Created At</td>
                    <td>Role</td>
                    <td>Status</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>
                {users.map((user)=>{
                   <tr>
                    <td>
                      <div className={styles.user}>
                        <Image src="/avatar.png"
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                         {user.username}
                      </div>
      
                    </td>
                    <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4,16)}</td>
              <td>{user.isAdmin ? "Admin" : "Not Admin"}</td>
              <td>{user.isActive ? "online" :"offline"}</td>
                    <td>
                      <Link href="/dashboard/users/singleUser">
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      
                       
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    
                    </td>
                  </tr>
                    })}
                </tbody>
              </table>
              
          </div>
    )
}
 export default Userpage