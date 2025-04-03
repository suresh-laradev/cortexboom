import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import React from "react";

import data from "@/app/(protected)/dashboard/data.json"

const UsersPage = () => {
  return (
    <>
      <SiteHeader title={"Users"}/>
      <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />
          <DataTable data={data} />
        </div>
      </div>
    </div>
    </>
  );
};

export default UsersPage;
