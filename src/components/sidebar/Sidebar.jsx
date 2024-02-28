import  React from 'react'
import "./sidebar.css"
import CloseFriend from "../closeFriend/CloseFriend"
import {Users} from "../../socialData"

import {RssFeedOutlined} from "@mui/icons-material"
import {ChatBubbleOutlineOutlined} from "@mui/icons-material"
import {OndemandVideoOutlined} from "@mui/icons-material"
import {GroupAddOutlined} from "@mui/icons-material"
import {BeenhereOutlined} from "@mui/icons-material"
import {PersonAddRounded} from "@mui/icons-material"
import {AutoStoriesOutlined} from "@mui/icons-material"

export default function Sidebar(){
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeedOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <OndemandVideoOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupAddOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <BeenhereOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <PersonAddRounded className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Friends</span>
                    </li>
                    <li className="sidebarListItem">
                        <AutoStoriesOutlined className='sidebarIcon'/>
                        <span className="sidebarListItemtext">Pages</span>
                    </li>
                </ul>
                <button className='sidebarButton'>Show More</button>
                <hr className='sidebarHr'/>
                <ul className="sidebarFriendList">
                    {Users.map((u) =>(
                        <CloseFriend key={u.id} user={u} phoneNo={u.id}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}