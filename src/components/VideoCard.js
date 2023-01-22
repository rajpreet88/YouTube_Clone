import React from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs';

import VideoLength from '../shared/videoLength';

const VideoCard = (props) => {
  return (
    <Link to={`/video/${props.video?.videoId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img src={props.video?.thumbnails[0]?.url} className='h-full w-full object-cover' alt='YTImages' />
          {props.video?.lengthSeconds && (
            <VideoLength time={props.video?.lengthSeconds} />
          )}
        </div>
        <div className='flex text-white mt-3'>
          <div className='flex items-start'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img src={props.video?.author?.avatar[0]?.url}
                alt='ChannelAvatar'
                className='h-full w-full object-cover' />
            </div>
            <div className='flex flex-col ml-3 overflow-hidden'>
              <span className='font-bold text-sm line-clamp-2'>

                {props.video?.title}
              </span>
              <span className='text-[12px] font-semibold mt-2 text-white/[0.6] flex items-center'>
                {props.video?.author?.title}
                {props.video?.author?.badges[0]?.type === 'VERIFIED_CHANNEL' && (
                  <BsFillCheckCircleFill className='text-[12px] text-white/[0.7] ml-2'/>
                )}
              </span>
              <div className="flex items-center text-white/[0.6] font-semibold text-[12px]">
                <span>
                  {`${abbreviateNumber(props.video.stats.views, 2)} views `}  
                </span>
                <span className='flex text-[15px] leading-none font-bold mx-1 text-white/[0.6] relative mt-[-5px]'>
                  .
                </span>
                <span className='truncate'>
                  {props.video?.publishedTimeText}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>

  )
}

export default VideoCard