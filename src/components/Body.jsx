import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import SocialCards from './SocialCards'
import AnalyticsChart from './AnalyticsChart'
import ProfileCard from './ProfileCard'
import CampaignCard from './CampaignCard'

const Body = ({isSidebarOpen}) => {
  return (
    <div className={` ${isSidebarOpen ? 'flex w-5/6 my-4 mx-6' : ' flex md:mt-20 absolute left-6 w-full'}`}>
     <div className=' '  >
        <SocialCards/>
        <AnalyticsChart/>
     </div>

     <div className=''>
      <ProfileCard/>
      <CampaignCard/>
     </div>
    </div>
  )
}

export default Body
