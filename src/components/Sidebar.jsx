import React from 'react'
import { FaTools } from 'react-icons/fa'
import { IoIosLogOut, IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdMessage } from 'react-icons/md'
import { SiSimpleanalytics } from 'react-icons/si'

const Sidebar = () => {
    const sidebarItems = [
        {
            id: 1,
            icon: <MdDashboard/>,
            name: 'Dashboard',
        },
        {
            id: 2,
            icon: <SiSimpleanalytics/>,
            name: 'Analytics',
        },
        {
            id: 3,
            icon: <MdMessage/>,
            name: 'Messages',
        },
        {
            id: 4,
            icon: <FaTools/>,
            name: 'Tools',
        },
        {
            id: 5,
            icon: <IoMdSettings/>,
            name: 'Settings',
        },
    ]
  return (
    <div className='md:h-screen   md:w-64 bg-gray-800 '>
      <div>
      <h1 className='space-x-2 text-2xl p-4'>
        <span className='text-orange-600 font-bold '>Admin</span>
         <span className='text-yellow-600 font-semibold '>Dashboard</span>
         </h1>
      </div>
      <hr className=' border-t border-gray-600 h-[1px]'  />

         <div>
                {
                    sidebarItems.map(({id, name, icon})=>{
                       return <div key={id} className='flex mx-6 my-4 p-2 space-x-4 cursor-pointer
                       hover:scale-110 duration-150 hover:bg-orange-400 hover:rounded-xl '>
                        <span className='bg-yellow-400 text-2xl p-2 rounded-full'>{icon}</span>
                        <span className='text-white flex items-center text-lg'> {name}</span>
                       
                       </div>

                    })
                }
         </div>
         <hr className='mt-44 border-t border-gray-600 h-[1px]'/>

         <div className='xl:fixed bottom-0'>
                    <div className='flex text-white mx-6 my-4 p-2 space-x-2
                    hover:scale-95 duration-150 cursor-pointer'>
                        <span className='text-2xl  p-2 '><IoIosLogOut/></span>
                        <span className='text-white flex items-center text-lg'>
                            Logout
                        </span>
                    </div>
         </div>
    </div>
  )
}

export default Sidebar
