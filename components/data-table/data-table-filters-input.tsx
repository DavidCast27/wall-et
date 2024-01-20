import React from 'react';
import {Input} from "@/components/ui/input";
import type {Table} from "@tanstack/react-table";
import type {DataTableSearchableColumn} from "@/components/data-table/types";

interface DataTableFiltersInputProps<TData> {
    table: Table<TData>
    searchableColumns: DataTableSearchableColumn<TData>[]
}
export function DataTableFiltersInput<TData>({table,searchableColumns}:DataTableFiltersInputProps<TData>) {
    return (
        <>
            {searchableColumns.length > 0 && searchableColumns.map(
                column =>
                    table.getColumn(column.id ? String(column.id) : "") && (
                        <Input
                            key={String(column.id)}
                            placeholder={`Filter ${column.title}...`}
                            value={
                                (table
                                    .getColumn(String(column.id))
                                    ?.getFilterValue() as string) ?? ""
                            }
                            onChange={(event) =>
                                table
                                    .getColumn(String(column.id))
                                    ?.setFilterValue(event.target.value)
                            }
                            className="h-8 w-[150px] lg:w-[250px]"
                        />
                    )
            )}
        </>
    )

}
