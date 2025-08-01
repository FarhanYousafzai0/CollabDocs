import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children}) => {
  return (
    <>
    <div className='min-h-[80px] min-w-full flex-nowrap bg-dark-100  rounded-b-xl flex w-full bg-blue-400 items-center justify-between gap-2 px-4'>

<Link href={`/`} className='flex items-center'>

        
        <Image src={`/assets/icons/logo-icon.svg`} alt='logo.png' width={50} height={32} />
      <p className='text-white'>CollabDocs</p>

</Link>

   {children}

    </div>
    
    </>
  )
}

export default Header