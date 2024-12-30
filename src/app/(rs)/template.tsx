import React from 'react'

interface Props {
    children: React.ReactNode
}

const Template = ({children}:Props) => {
  return (
    <div className='animate-appear'>
        {children}
    </div>)
  
}

export default Template