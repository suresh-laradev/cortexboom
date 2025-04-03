import { getProducts } from "@/app/(protected)/products/actions/products";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";

import data from "@/app/(protected)/dashboard/data.json"

const Products = async () => {
  const products = await getProducts();
  if (products.length === 0) return <div>No products found</div>;

  return (
    <>
      <SiteHeader title={"Products"} />
      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            {/* {products.map((product) => (
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
            ))} */}
               <DataTable data={data} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
