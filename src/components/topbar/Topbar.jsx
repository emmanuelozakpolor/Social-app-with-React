import React from 'react'
import "./topbar.css"
import {SearchOutlined, PersonOutlineTwoTone, ChatBubbleOutlineOutlined, CircleNotificationsOutlined} from '@mui/icons-material'

export default function Topbar(){
    return(
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className="logo">Lumai.Social</span>
            </div>
            <div className='topbarCenter'>
                <div className="searchbar">
                    <SearchOutlined className='searchIcon'/>
                    <input placeholder="Search Lumai..." className="SearchOutlinedInput" />
                </div>
            </div>
            <div className='topbarRight'>
                <div className="topbarLinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonOutlineTwoTone/>
                        <span className="topbarIconbadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <ChatBubbleOutlineOutlined/>
                        <span className="topbarIconbadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <CircleNotificationsOutlined/>
                        <span className="topbarIconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/profile/lady-9.jpg" alt="" className="topbarImg" />
            </div>
        </div>
    );
}