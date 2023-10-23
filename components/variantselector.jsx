import React from 'react'
import { Button } from './ui/button'

export default function Variantselector() {
  return (
   <dl className='mb-8'>
    <dt className='mb-4 text-sm uppercase tracking-wide'>sizes</dt>
    <dd>
      <Button variant={'secondary'} >XL</Button>
    </dd>
   </dl>
  )
}
