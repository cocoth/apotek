'use client'
import React, { useEffect, useRef, useState } from 'react'

interface CloseMenuProps extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode
    setOpen: (open: boolean)=>void;

}

const CloseMenu:React.FC<CloseMenuProps> = ({children, setOpen, ...props}) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        const handleClick = (e: MouseEvent)=>{
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handleClick)
        return ()=> document.removeEventListener('click', handleClick)
    },[setOpen])
  return (
    <div ref={ref} {...props}>
        {children}
    </div>
  )
}

export default CloseMenu