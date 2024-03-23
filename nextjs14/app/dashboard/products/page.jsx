import Image from "next/image"
import styles from "../../ui/products/products.module.css"
const ProductsPage=()=>{
    return(
        <div className={styles.container}>
        <div className={styles.top}>
        
        <button className={styles.addButton}>Add New</button>
                 
        </div>

              <table className={styles.table}>
                <thead>
                  <tr>
                  <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Createt At</td>
            <td>Stock</td>
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
                         laptops
                      </div>
      
                    </td>
                    <td>laptop is very good for coding</td>
                    <td>$999.00</td>
                    <td>Avaliable</td>
                    <td>23-03-24</td>
                    <td>
                      
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                     
                      
                       
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                    
                    </td>
                  </tr>
                   
                </tbody>
              </table>
          </div>
    )
}
 export default ProductsPage