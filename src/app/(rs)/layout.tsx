import React from 'react'
import Header from '@/components/Header'

interface Props {
    children: React.ReactNode
}

const RSLayout = ({children}:Props) => {
  return <div className='mx-auto w-full max-w-7xl'>
    <div className='px-4 py-2'>
        <Header  />
        {children}
    </div>
  </div>
}

export default RSLayout