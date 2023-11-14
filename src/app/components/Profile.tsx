import React from 'react'
import ProfilePic from '@/assets/brainy_cute.jpeg'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='my-5 flex items-center justify-center mx-auto px-5'>
      <Image 
        src={ProfilePic}
        width={600}
        height={600}
        alt='Overwatch Coder'
        className='object-contain rounded-full border-4 border-white w-[150px]'
      />
    </div>
  )
}

export default Profile