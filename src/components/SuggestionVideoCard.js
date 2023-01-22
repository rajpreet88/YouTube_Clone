import React from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber } from 'js-abbreviation-number'
import { BsFillCheckCircleFill } from 'react-icons/bs';

import VideoLength from '../shared/videoLength';

const SuggestionVideoCard = (props) => {
  return (
    <Link to={`/video/${props.video?.videoId}`}>
      <div className='flex mb-3'>
        <div className='relative h-24 lg:h-22 xl-h-26 w-40 min-w-[168px] lg-w-32 lg:min-w-[170px] xl:w-40 xl:min-w-[168px] rounded-xl overflow-hidden bg-slate-800'>
          <img
            src={props.video?.thumbnails[0]?.url}
            className='h-full w-full object-cover' alt='YTImages'
          />

          {props.video?.lengthSeconds && (
            <VideoLength time={props.video?.lengthSeconds} />
          )}
        </div>
        <div className="flex flex-col ml-3 overflow-hidden">
          <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-white">
            {props.video?.title}
          </span>
          <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center">
            {props.video?.author?.title}
            {props.video?.author?.badges[0]?.type ===
              "VERIFIED_CHANNEL" && (
                <BsFillCheckCircleFill className="text-white/[0.5] text-[12px] lg:text-[10px] xl:text-[12px] ml-1" />
              )}
          </span>
          <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden">
            <span>{`${abbreviateNumber(
              props.video?.stats?.views,
              2
            )} views`}</span>
            <span className="flex text-[24px] leading-none font-bold text-white/[0.7] relative top-[-10px] mx-1">
              .
            </span>
            <span className="truncate">
              {props.video?.publishedTimeText}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SuggestionVideoCard