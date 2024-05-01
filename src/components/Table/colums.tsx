'use client'
import { Medichine } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LuMoreHorizontal, LuArrowDownUp } from "react-icons/lu";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { formatedDate } from "@/utils/formatedDate";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { useState } from "react";
import CustomAlertDialog from "../custom-ui/CustomAlertDialog";
import DelData from "../features/DelData";
import UpdateData from "../features/UpdateData";





export const columns: ColumnDef<Medichine>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        id: "No",
        header: "No",
        cell: ({ row }) => {
            return <div>{row.index + 1}</div>
        }
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant={'ghost'}
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <LuArrowDownUp className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "company",
        header: "Company"
    },
    {
        accessorKey: "description",
        header: "Description",
    },
    {
        accessorKey: "production_date",
        header: "Production date",
        cell: ({ row }) => {
            return <div>{formatedDate(new Date(row.getValue('production_date')))}</div>
        }
    },
    {
        accessorKey: "expired_date",
        header: "Expired Date",
        cell: ({ row }) => {
            return <div>{formatedDate(new Date(row.getValue('expired_date')))}</div>
        }
    },
    {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
            const data = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button 
                        variant={'ghost'}
                        className="h-8 w-8 p-0"
                        >
                            <LuMoreHorizontal className="h-4 w-4 " />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="center"
                    >
                        <DropdownMenuLabel>
                            Actions
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="hover:focus:bg-transparent"
                        >
                            <UpdateData data={data} />
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="hover:focus:bg-transparent"
                        >
                            <DelData data={data} />
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    },
]
