import Image from "next/image"
import styles from "../../ui/products/products.module.css"
import Link from "next/link"
import { fetchProducts } from "@/app/lib"
import { deleteProduct } from "@/app/lib/Actions"
const ProductsPage=async()=>{
       const Products=await fetchProducts()
    return(
        <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/dashboard/products/add">
        <button className={styles.addButton}>Add Product</button>
        </Link>
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
                 {Products.map((product)=>(

                
                   <tr>
                    <td>
                      <div className={styles.user}>
                        <Image src="/avatar.png"
                        width={40}
                        height={40}
                        className={styles.userImage}/>
                           {product.title}
                      </div>
      
                    </td>
                    <td>{product.desc}</td>
            <td>${product.price}</td>
            <td>{product.cratedAt?.toString().slice(4,16)}</td>
            <td>{product.stock}</td>
                    <td>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      
                       <form action={deleteProduct}>
                       <input type="hidden"  name="id" value={product.id}/>
                      <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </form>
                    </td>
                  </tr>
                    ))} 
                </tbody>
              </table>
          </div>
    )
}
 export default ProductsPage