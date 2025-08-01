import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = ({children}) => {
  return (
    <>
    <div className='min-h-[80px] min-w-full flex-nowrap  shadow-xl  rounded-b-xl flex w-full items-center justify-between gap-2 px-4'>

<Link href={`/`} className='flex items-center'>

        
        <Image src={`/assets/icons/logo-icon.svg`} alt='logo.png' width={50} height={32} />
      <p className='text-black'>CollabDocs</p>

</Link>

   {children}

    </div>
    
    </>
  )
}

export default Header