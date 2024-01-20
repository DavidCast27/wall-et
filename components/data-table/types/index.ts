export interface DataTableSearchableColumn<TData> {
    id: keyof TData
    title: string
}
