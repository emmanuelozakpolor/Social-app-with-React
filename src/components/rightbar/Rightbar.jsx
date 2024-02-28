import React from 'react'
import "./rightbar.css"
import {Users} from "../../socialData"
import Online from "../online/Online"


export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className='birthdayImg' src="/assets/birthday.png" alt="" />
          <span className="birthdayText"><b>Sarah Jones</b> and <b>6 others have birthdays today</b></span>
        </div>
          <img className='rightbarAd' src="/assets/ad.png" alt="" />
          <h4 className='rightbarTitle'>Online friends</h4>
          <ul className='rightbarFriendList'>
            {Users.map(u=>(
                <Online key={u.id} user={u}/>
              ))}
            </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Nigeria</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/profile/lady-10.jpg" alt="" className="followingsImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/profile/man-5.jpg" alt="" className="followingsImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/profile/girl-4.jpg" alt="" className="followingsImg" />
            <span className="rightbarFollowingName"></span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/profile/man-6.jpg" alt="" className="followingsImg" />
            <span className="rightbarFollowingName"></span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          {profile ? <ProfileRightBar/> : <HomeRightBar/>}
        </div>
    </div>
  )
}
