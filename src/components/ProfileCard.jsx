import React from 'react'

const ProfileCard = () => {
  return (
    <div className='  w-[300px] md:w-[300px] md:h-[300px]  h-[250px]  justify-center shadow-lg bg-slate-200 rounded-lg'>
      <div className='flex flex-col items-center'>
      <img
          className="w-20 md:mt-10 mt-4  h-20 rounded-full cursor-pointer  "
          src="https://png.pngtree.com/png-vector/20191125/ourmid/pngtree-beautiful-admin-roles-line-vector-icon-png-image_2035379.jpg"
          alt="user-icon"
        />
        <h1 className='font-bold text-2xl  '>Pinki Jha</h1>
        <p className='text-md text-gray-500 mx-2 cursor-pointer '>@jha_pinki</p>
      </div>

      <div className='flex justify-between m-4 md:p-6'>
        <div className=''>
          <p className='font-semibold text-xl md:text-2xl'>193</p>
          <p className='text-sm'>Posts</p>
        </div>

        <div>
          <p className='font-semibold text-xl md:text-2xl'>19003</p>
          <p className='text-sm'>Followers</p>
          </div>

        <div>
          <p className='font-semibold text-xl md:text-2xl'>300</p>
          <p className='text-sm'>Followings</p>
          </div>
      </div>
    </div>
  )
}

export default ProfileCard
