import Image from 'next/image'
import React from 'react'
import NavBar from '../NavBar/navbar'

const Error = () => {
  return (
    <><NavBar />
    <div className='flex flex-col items-center justify-center pt-20'>
        <Image src="/icons/error.svg" width={300} height={300} /> <p className='p-2 font-semibold text-xl'>An error occured while fetching data</p></div>
    </>
  )
}

export default Error