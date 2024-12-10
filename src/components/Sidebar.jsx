import React, { useState } from 'react'
import { FaTools } from 'react-icons/fa'
import { IoIosLogOut, IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdMessage } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { SiSimpleanalytics } from 'react-icons/si'

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {

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
    <div className={` md:h-screen bg-gray-800 ${isSidebarOpen ? 'block' : 'hidden'} `}>
      <div className='flex'>
      <h1 className='space-x-2 text-2xl p-4 cursor-pointer'>
        <span className='text-orange-600 font-bold '>Admin</span>
         <span className='text-yellow-600 font-semibold  '>Dashboard</span>

         </h1>
         <button onClick={toggleSidebar}>
          {isSidebarOpen ?
                     (<RxCross1  className="text-2xl text-white cursor-pointer"  />) : 
                     ''}</button>
      </div>
      <hr className='mt-2 border-t border-gray-600 h-[1px]'  />

         <div>
                {
                    sidebarItems.map(({id, name, icon})=>{
                       return <div key={id} className='flex mx-6 my-4 p-2 space-x-4 cursor-pointer
                       hover:scale-110 duration-150 hover:bg-orange-400 hover:rounded-xl '>
                        <span className='bg-yellow-400 text-2xl p-2 rounded-full'>{icon}</span>
                        <span className='text-white flex items-center md:text-md'> {name}</span>
                       
                       </div>

                    })
                }
         </div>

         <div className='xl:fixed bottom-0'>
         <hr className='mt-44 w-64 border-t border-gray-600 h-[1px]'/>
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
