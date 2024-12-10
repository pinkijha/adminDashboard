import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import SocialCards from './SocialCards'
import AnalyticsChart from './AnalyticsChart'
import ProfileCard from './ProfileCard'
import CampaignCard from './CampaignCard'

const Body = ({isSidebarOpen}) => {
  return (
    <div className={` ${isSidebarOpen ? 
      'flex  md:w-[95%] md:my-4 mx-6 md:gap-6' :
     ' flex flex-wrap md:mt-20 absolute top-20 md:top-4 md:gap-8 md:left-28 left-5 right-10 md:right-10'}`}>
     <div className=''  >
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
