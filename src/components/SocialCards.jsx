import React from 'react'
import { FaFacebookF } from 'react-icons/fa'

const SocialCards = () => {
    const socialItems = [
        {
            id: 1,
            name: '',
            number: '',
            followers: '',
            icon: ''
        }
    ]
  return (
    <div className='flex space-x-1 bg-blue-300 w-[250px] h-[150px] rounded-3xl'>
      <div className='flex p-6 space-x-9'>
            <div className='flex flex-col'>
                <span className='font-semibold text-xl'>Facebook</span><br/>
                <span className='text-3xl font-bold'>10,345</span>
                <span className='text-lg font-normal'>Followers</span>
            </div>
            <div className='space-y-6'>
                <span className='text-green-800 font-semibold'>+21.75%</span>
                <FaFacebookF className='p-3 bg-blue-500 rounded-full text-6xl' />
            </div>
      </div>
    </div>
  )
}

export default SocialCards
