'use client'
import { useState } from 'react'
import { Button } from '../ui/button'
import { FaRegTrashAlt } from 'react-icons/fa'
import CustomAlertDialog from '../custom-ui/CustomAlertDialog'
import { Medichine } from '@prisma/client'



const DelData = ({
  data
}:{
  data: Medichine
}) => {
  const [isopenAlertDialog, setOpenAlertDialog] = useState<boolean>(false)
  const handleOpenAlertDialog = ()=>{
    setOpenAlertDialog(!isopenAlertDialog)
  }

  return (
    <div>
      <Button
      variant={'outline'}
      onClick={(e)=>{
        handleOpenAlertDialog()
        e.stopPropagation()
      }}
      className='flex justify-between items-center bg-red-600 hover:bg-red-600/70'
      >
        Delete
        <FaRegTrashAlt className="ml-2 h-4 w-4" />
      </Button>
      <CustomAlertDialog open={isopenAlertDialog} onOpenChange={setOpenAlertDialog} data={data}/>
    </div>
  )
}

export default DelData