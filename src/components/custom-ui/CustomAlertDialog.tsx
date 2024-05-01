'use client'
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogFooter
} from '../ui/alert-dialog'
import { SyntheticEvent } from 'react';
import { Medichine } from '@prisma/client';
import axios from 'axios';
import { useRouter } from 'next/navigation';


interface CustomAlertDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    stateToChange?: (open: boolean) => void;
    data: Medichine
}

const CustomAlertDialog: React.FC<CustomAlertDialogProps> = ({ open, onOpenChange, stateToChange, data }) => {
    const router = useRouter()

    const handleDelete = async (id: number) => {
        await axios.delete(`/api/v1/${id}`)
        router.refresh()
    }

    return (
        <AlertDialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <AlertDialogContent
                onClick={(e: SyntheticEvent) => e.stopPropagation()}
                className='rounded-2xl'
            >
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you sure to delete: {data?.name}?
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    This action will delete items form database
                </AlertDialogDescription>
                <AlertDialogFooter className='gap-3 md:gap-0'>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => {
                            onOpenChange(false)
                            if (stateToChange) {
                                stateToChange(false)
                            }
                            handleDelete(data.id)
                        }}>
                        Yup
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog >
    )
}

export default CustomAlertDialog