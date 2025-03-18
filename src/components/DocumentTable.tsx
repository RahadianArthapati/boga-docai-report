'use client';

import { DocumentTableRow, Value } from "../types";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";

const columnHelper = createColumnHelper<DocumentTableRow>();

const ValueCell = ({ value }: { value: Value }) => {
  const hasChange = value.modified !== "";
  return (
    <div className={`px-4 py-2 rounded text-slate-900 ${hasChange ? "bg-amber-50 border border-amber-200" : "bg-emerald-50 border border-emerald-200"}`}>
      {value.modified || value.original}
    </div>
  );
};

const columns = [
  columnHelper.accessor("vendorName", {
    header: "Vendor",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("transactionId", {
    header: "Transaction ID",
    cell: (info) => <div className="px-4 py-2 font-medium text-slate-900">{info.getValue()}</div>,
  }),
  columnHelper.accessor("document", {
    header: "Document",
    cell: (info) => <div className="px-4 py-2 max-w-md truncate text-slate-900" title={info.getValue()}>{info.getValue()}</div>,
  }),
  // Header columns
  columnHelper.accessor("companyId", {
    header: "Company",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("brandId", {
    header: "Brand",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("outletId", {
    header: "Outlet",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("currency", {
    header: "Currency",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("bankAccountNumber", {
    header: "Bank Account",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  // Detail columns
  columnHelper.accessor("invoiceNumber", {
    header: "Invoice Number",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("invoiceDate", {
    header: "Invoice Date",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("description", {
    header: "Description",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("servicePrice", {
    header: "Service Price",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
  columnHelper.accessor("goodsPrice", {
    header: "Goods Price",
    cell: (info) => <ValueCell value={info.getValue()} />,
  }),
];

interface DocumentTableProps {
  data: DocumentTableRow[];
}

export function DocumentTable({ data }: DocumentTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <div className="inline-block min-w-full align-middle">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-slate-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left text-xs font-semibold text-slate-900 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-slate-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 