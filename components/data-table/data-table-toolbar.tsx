"use client";
import * as React from "react";
import type {
  DataTableFilterableColumn,
  DataTableSearchableColumn,
} from "./types";
import type { Table } from "@tanstack/react-table";
import { DataTableViewOptions } from "@/components/data-table/data-table-view-options";
import { DataTableSearchable } from "@/components/data-table/data-table-searchable";
import DataTableFiltered from "@/components/data-table/data-table-filtered";
import { Button } from "@/components/ui/button";
import { Cross2Icon } from "@radix-ui/react-icons";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterableColumns?: DataTableFilterableColumn<TData>[];
  searchableColumns?: DataTableSearchableColumn<TData>[];
  newRowLink?: string;
  deleteRowsAction?: React.MouseEventHandler<HTMLButtonElement>;
}

export function DataTableToolbar<TData>({
  table,
  filterableColumns = [],
  searchableColumns = [],
}: DataTableToolbarProps<TData>) {
  //const [isPending, startTransition] = React.useTransition();

  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="flex w-full items-center justify-between space-x-2 overflow-auto p-1 py-4">
      <div className="flex flex-1 items-center space-x-2">
        <DataTableSearchable
          table={table}
          searchableColumns={searchableColumns}
        />
        <DataTableFiltered
          table={table}
          filterableColumns={filterableColumns}
        />
        {isFiltered && (
          <Button
            aria-label="Reset filters"
            variant="ghost"
            className="h-8 px-2 lg:px-3"
            onClick={() => table.resetColumnFilters()}
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        )}
      </div>
      <div className="flex items-center space-x-2">
        {/*{deleteRowsAction && table.getSelectedRowModel().rows.length > 0 ? (*/}
        {/*    <Button*/}
        {/*        aria-label="Delete selected rows"*/}
        {/*        variant="outline"*/}
        {/*        size="sm"*/}
        {/*        className="h-8"*/}
        {/*        onClick={(event) => {*/}
        {/*            startTransition(() => {*/}
        {/*                table.toggleAllPageRowsSelected(false)*/}
        {/*                deleteRowsAction(event)*/}
        {/*            })*/}
        {/*        }}*/}
        {/*        disabled={isPending}*/}
        {/*    >*/}
        {/*        <TrashIcon className="mr-2 h-4 w-4" aria-hidden="true" />*/}
        {/*        Delete*/}
        {/*    </Button>*/}
        {/*) : newRowLink ? (*/}
        {/*    <Link aria-label="Create new row" href={newRowLink}>*/}
        {/*        <div*/}
        {/*            className={cn(*/}
        {/*                buttonVariants({*/}
        {/*                    variant: "outline",*/}
        {/*                    size: "sm",*/}
        {/*                    className: "h-8",*/}
        {/*                })*/}
        {/*            )}*/}
        {/*        >*/}
        {/*            <PlusCircledIcon className="mr-2 h-4 w-4" aria-hidden="true" />*/}
        {/*            New*/}
        {/*        </div>*/}
        {/*    </Link>*/}
        {/*) : null}*/}
        <DataTableViewOptions table={table} />
      </div>
    </div>
  );
}
