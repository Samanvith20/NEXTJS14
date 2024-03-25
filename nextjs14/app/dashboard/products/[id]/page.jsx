import { fetchProduct } from "@/app/lib";
import styles from "../../../ui/products/SingleProduct.module.css";
import Image from 'next/image';
import { Updateproduct } from "@/app/lib/Actions";

const singleProduct = async ({ params }) => {
  if (!params || !params.id) {
    // Handle case where params or id is missing
    return null;
  }

  const { id } = params;
  const product = await fetchProduct(id);
  console.log(product);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/avatar.png" alt="" fill />
        </div>
        {product.Title}
      </div>
      <div className={styles.formContainer}>
        <form oction={Updateproduct}className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type='text' name='title' defaultValue={product.Title} />
          <label>Price</label>
          <input type='number' name='price' defaultValue={product.Price} />
          <label>Stock</label>
          <input type='number' name='stock' defaultValue={product.Stock} />
          <label>Color</label>
          <input type='text' name='color' defaultValue={product.Color} />
          <label>Size</label>
          <input type='text' name='size' defaultValue={product.Size} />
          <label>Category</label>
          <select name='category' defaultValue={product.Category}>
            <option value='kitchen'>Kitchen</option>
            <option value='computer'>Computer</option>
          </select>
          <label>Description</label>
          <textarea name='description' defaultValue={product.Description}></textarea>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default singleProduct;
