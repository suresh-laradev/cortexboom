import {
  getProduct,
  ProductType,
} from "@/app/(protected)/products/actions/products";
import Link from "next/link";

interface PropType {
  params: Promise<{
    product: string;
  }>;
}

const Product = async ({ params }: PropType) => {
  const { product } = await params;
  const productData: ProductType = await getProduct(product);

  return (
    <div>
      {/* <h4 className={"text-2xl text-center"}>Product - {productData.name}</h4> */}
      <section className="flex items-start flex-wrap gap-4 py-4">
        {productData.features?.map((feature) => (
          <section
            key={feature.id}
            className={
              "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 border"
            }
          >
            <Link href={`/products/${product}/features/${feature.id}`}>
              {feature.name}
            </Link>
          </section>
        ))}
      </section>
    </div>
  );
};

export default Product;
