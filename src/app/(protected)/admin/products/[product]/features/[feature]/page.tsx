import React from "react";
import {
  getFeature,
  FeatureType,
} from "@/app/(protected)/admin/products/actions/products";

interface PropType {
  params: Promise<{
    product: string;
    feature: string;
  }>;
}

const FeatureDetail = async ({ params }: PropType) => {
  const { product, feature } = await params;
  const featureData: FeatureType = await getFeature(product, feature);

  return (
    <section className="flex items-start flex-wrap gap-4 py-4">
      <section
        className={
          "p-1.5 rounded-sm flex bg-auto place-items-center place-content-center size-56 border"
        }
      >
        Feature Detail: {featureData.name}
      </section>
    </section>
  );
};

export default FeatureDetail;
