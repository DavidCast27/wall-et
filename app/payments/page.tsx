import { DataTable } from "@/components/data-table/data-table";

import {
  Payment,
  columns,
  filterableColumns,
  searchableColumns,
} from "./columns";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "processing",
      email: "b@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "a@example.com",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "success",
      email: "b@example.com",
    },
    // ...
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable
        columns={columns}
        data={data}
        searchableColumns={searchableColumns}
        filterableColumns={filterableColumns}
      />
    </div>
  );
}
