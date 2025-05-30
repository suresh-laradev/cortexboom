"use server";

type FeatureType = {
  id: string;
  name: string;
};

type ProductType = {
  id: string;
  name: string;
  features?: FeatureType[];
};

const products = [
  {
    id: "1",
    name: "Product 1",
    features: [
      { id: "1", name: "p1feature1" },
      { id: "2", name: "p1feature2" },
    ],
  },
  {
    id: "2",
    name: "Product 2",
    features: [
      { id: "1", name: "p2feature1" },
      { id: "2", name: "p2feature2" },
    ],
  },
];

const getProducts = async (): Promise<ProductType[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject("No products found");
      }
    }, 2000);
  });
};

const getProduct = async (id: string): Promise<ProductType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === id);
      if (product) {
        resolve(product);
      } else {
        reject("No product found");
      }
    }, 2000);
  });
};

const getFeature = async (
  productId: string,
  featureId: string
): Promise<FeatureType> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => product.id === productId);
      if (product && product.features) {
        const feature = product.features.find(
          (feature) => feature.id === featureId
        );
        if (feature) {
          resolve(feature);
        } else {
          reject("Feature not found");
        }
      } else {
        reject("Product or features not found");
      }
    }, 2000);
  });
};

export { getProducts, getProduct, getFeature };

export type { ProductType, FeatureType };
