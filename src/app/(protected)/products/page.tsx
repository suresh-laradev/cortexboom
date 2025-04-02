import { getProducts } from "@/app/(protected)/products/actions/products";
import { productPath } from "@/paths";
import Link from "next/link";
const Products = async () => {
  const products = await getProducts();
  if (products.length === 0) return <div>No products found</div>;

  return (
    <section className="flex items-start flex-wrap gap-4 py-4">
      {products.map((product) => (
        <section
          key={product.id}
          className={
            "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 border"
          }
        >
          <Link href={{ pathname: productPath(product.id) }}>
            {product.name}
          </Link>
        </section>
      ))}
    </section>
  );
};

export default Products;
