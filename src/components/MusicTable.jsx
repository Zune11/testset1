import { useState } from "react";
import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender } from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    Box
} from "@mui/material";

export default function MusicTable({ data, onRowClick }) {
    const [page, setPage] = useState(0);
    const columns = [
        { header: "Track Title", accessorKey: "title" },
        { header: "Genre", accessorKey: "genre" },
        { header: "Artist", accessorKey: "artist" },
        { header: "BPM", accessorKey: "bpm" },
        { header: "Record Label", accessorKey: "label" },
        { header: "User Role", accessorKey: "role" }
    ];
    const table = useReactTable({
        data: data || [],
        columns: columns,
        state: {
            pagination: {
                pageIndex: page,
                pageSize: 5
            }
        },
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel()
    });
    const changePage = (pageNumber) => {
        setPage(pageNumber);
        table.setPageIndex(pageNumber);
    };
    return (
        <Box sx={{ mt: 4 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        {table.getHeaderGroups()[0].headers.map((header) => (
                            <TableCell key={header.id}>
                                {header.column.columnDef.header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {table.getRowModel().rows.map((row) => (
                        <TableRow
                            key={row.id}
                            onClick={() => {
                                if (onRowClick) {
                                    onRowClick(row.original);
                                }
                            }}
                            sx={{ cursor: "pointer" }}
                        >
                            {row.getVisibleCells().map((cell) => (
                                <TableCell key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                    mt: 2
                }}
            >
                {Array.from({ length: table.getPageCount() }).map((_, index) => (
                    <Button
                        key={index}
                        variant={page === index ? "contained" : "outlined"}
                        onClick={() => changePage(index)}
                    >
                        {index + 1}
                    </Button>
                ))}
            </Box>
        </Box>
    );
}