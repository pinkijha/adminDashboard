import React, { useState } from 'react'
import { FaTools } from 'react-icons/fa'
import { IoIosLogOut, IoMdSettings } from 'react-icons/io'
import { MdDashboard, MdMessage } from 'react-icons/md'
import { RxCross1 } from 'react-icons/rx'
import { SiSimpleanalytics } from 'react-icons/si'
import { NavLink } from 'react-router-dom'

const Sidebar = ({isSidebarOpen, toggleSidebar}) => {
    

    const sidebarItems = [
        {
            id: 1,
            icon: <MdDashboard/>,
            name: 'Dashboard',
            path: '/'
        },
        {
            id: 2,
            icon: <SiSimpleanalytics/>,
            name: 'Analytics',
            path: '/analytics'
        },
        {
            id: 3,
            icon: <MdMessage/>,
            name: 'Messages',
            path: '/message'
        },
        {
            id: 4,
            icon: <FaTools/>,
            name: 'Tools',
            path: '/tools'
        },
        {
            id: 5,
            icon: <IoMdSettings/>,
            name: 'Settings',
            path: '/setting'
        },
    ]
  return (
    <div className={` md:h-screen bg-gray-800 ${isSidebarOpen ? 'block' : 'hidden'} `}>
      <div className='flex'>
      <h1 className='space-x-1 text-2xl p-4 cursor-pointer'>
        <span className='text-orange-600 font-bold '>Admin</span>
         <span className='text-yellow-600 font-semibold  '>Dashboard</span>

         </h1>
         <button onClick={toggleSidebar}>
          {isSidebarOpen ?
                     (<RxCross1  className="text-2xl  text-white cursor-pointer"  />) : 
                     ''}</button>
      </div>
      <hr className='mt-2 border-t border-gray-600 h-[1px]'  />

         <div>
                {
                    sidebarItems.map(({id, name, icon, path})=>{
                       return <NavLink key={id} to={path}
                       className={({ isActive }) =>
                        `flex items-center mx-6 my-4 p-2 space-x-4 cursor-pointer 
                        hover:scale-110 duration-150 hover:bg-orange-400 hover:rounded-xl 
                        ${isActive ? "bg-orange-400 rounded-xl" : ""}`
                      }>
                        <span className='bg-yellow-400 text-2xl p-2 rounded-full'>{icon}</span>
                        <span className='text-white flex items-center md:text-md'> {name}</span>
                       
                       </NavLink>

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
