'use client'
import React, { SyntheticEvent, useState } from 'react'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from '@/components/ui/alert-dialog'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from '../ui/form';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import { z } from 'zod'
import { useForm } from 'react-hook-form';
import { formSchema } from '@/utils/formSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { formatDateToISO } from '@/utils/formatedDate';


import { Button } from '../ui/button'
import { FaPen, FaPlus } from 'react-icons/fa'
import { Input } from '../ui/input';
import { Medichine } from '@prisma/client';


const UpdateData = ({ data }: {
    data: Medichine
}) => {
    const [add, setAdd] = useState<boolean>(false)
    const [alertDialog, setAlertDialog] = useState<boolean>(false)

    const handleAddClick = () => {
        if (add) {
            setAlertDialog(true)
        } else {
            setAlertDialog(!add)
        }
    }
    const prodDate = data.production_date.toISOString().split('T')[0]
    const exprDate = data.expired_date.toISOString().split('T')[0]
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: data.name,
            description: data.description,
            company: data.company,
            production_date: prodDate,
            expired_date: exprDate
        }
    })

    const router = useRouter()

    function onSubmit(values: z.infer<typeof formSchema>) {
        const prodDate = formatDateToISO(values.production_date)
        const expiredDate = formatDateToISO(values.expired_date)

        axios.patch(`/api/v1/${data.id}`, {
            name: values.name,
            description: values.description,
            company: values.company,
            production_date: prodDate,
            expired_date: expiredDate,
        }).then(res => {
            router.refresh()
        }).catch(error => {
            console.error(error)
        })
        console.log(values)
    }
    return (
        <div>
            <Button
                variant={'outline'}
                onClick={(e) => {
                    e.stopPropagation()
                    handleAddClick()
                }}
                className="w-full flex justify-between items-center"
            >
                Edit
                <FaPen className="ml-2 h-4 w-4" />
            </Button>
            <AlertDialog
                open={alertDialog}
                onOpenChange={setAlertDialog}
            >
                <AlertDialogContent className='rounded-2xl'>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            Add Data
                        </AlertDialogTitle>
                        <div
                            onClick={(e) => {
                                e.stopPropagation()
                            }}
                        >
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className='flex flex-col gap-3'
                                >
                                    <FormField
                                        control={form.control}
                                        name='name'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Product Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type='text'
                                                        placeholder='proudct name'
                                                        className='text-white'
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='company'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Company Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type='text'
                                                        placeholder='company name...'
                                                        className='text-white'
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='description'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Description Product
                                                </FormLabel>
                                                <FormControl>
                                                    <textarea
                                                        placeholder='add description product'
                                                        className='w-full px-2 min-h-10 resize-y bg-transparent rounded-md border text-white'
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='production_date'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Production date
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        placeholder='production date'
                                                        className='text-white'
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='expired_date'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Product Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type='date'
                                                        placeholder='expired date'
                                                        className='text-white'
                                                        required
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <AlertDialogFooter className='gap-3 md:gap-0'>
                                        <Button
                                            type='reset'
                                            onClick={() => {
                                                setAlertDialog(false)
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type='submit'
                                            onClick={() => {
                                                setAlertDialog(false)
                                                setAdd(false)
                                            }}
                                            className='bg-blue-700 hover:bg-blue-700/70 text-white'
                                        >
                                            Update
                                        </Button>
                                    </AlertDialogFooter>
                                </form>
                            </Form>
                        </div>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default UpdateData