import React from 'react'
import videoYouTube from '../assets/video/video-2.mp4'

export default function BlockVideo() {
  return (
    <div className='blockVideo'>
        <div className='blockVideo-wrapper'>
            <p className='blockVideo-heading'>ПРЯМА МОВА</p>
            <hr />
            <div className='blockVideo-container'>
                <video src={videoYouTube} controls></video>
            </div>
        </div>
    </div>
  )
}
