import React from 'react'
import "./share.css"
import {PermMediaOutlined, LabelImportant, RoomOutlined, EmojiEmotionsOutlined} from "@mui/icons-material"

export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
              <img className='shareProfileImg' src="/assets/profile/lady-9.jpg" alt="" />
              <input placeholder='your thoughts..' className='shareInput'/>
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
              <div className="shareOptions">
                <div className="shareOption">
                  <PermMediaOutlined htmlColor='tomato' className='shareIcon'/>
                  <span className='shareOptionText'>Photo/Video</span>
                </div>
                <div className="shareOption">
                  <LabelImportant htmlColor='red' className='shareIcon'/>
                  <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                  <RoomOutlined htmlColor='green' className='shareIcon'/>
                  <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                  <EmojiEmotionsOutlined htmlColor='orange' className='shareIcon'/>
                  <span className='shareOptionText'>Feelings</span>
                </div>
              </div>
              <button className='shareButton'>Share</button>
            </div>
        </div>
    </div>
  )
}
