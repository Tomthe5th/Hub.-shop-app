import React from 'react'
import { Button } from './ui/button'

export default function Variantselector() {
  return (
   <dl className='mt-4'>
    <dt className='mb-4 text-sm uppercase tracking-wide'>sizes</dt>
    <dd>
      <Button variant={'secondary'} className={'rounded-full text-sm  '} >XL</Button>
    </dd>
   </dl>
  )
}
