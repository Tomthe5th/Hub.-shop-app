import React from 'react'
import { Button } from './components/ui/button'
import { ShoppingBag } from 'lucide-react'

export default function Cartaction() {
  return (
    <div className='flex items-center gap-4'>
      <Button className=' rounded-lg  flex items-center gap-4 px-4 py-2' >
        <ShoppingBag size ={18} color='white' />
        <p>0</p>
      </Button>
    </div>
  )
}
