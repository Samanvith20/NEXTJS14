import Image from "next/image"
import styles from "../../ui/users/users.module.css"
import Link from "next/link"
const Userpage=()=>{
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
                 
                   <tr>
                    <td>
                      <div className={styles.user}>
                        <Image src="/avatar.png"
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                         Samanvith
                      </div>
      
                    </td>
                    <td>Samanvith</td>
                    <td>samanvith20@gmail.com</td>
                    <td>Admin</td>
                    <td>Active</td>
                    <td>
                      <Link href="/dashboard/users/singleUser">
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      
                       
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    
                    </td>
                  </tr>
                   
                </tbody>
              </table>
          </div>
    )
}
 export default Userpage