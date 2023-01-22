import React from 'react'
import moment from 'moment'

const VideoLength = (props) => {
    const videoLengthInSeconds = moment()?.startOf('day')?.seconds(props.time)?.format('H:mm:ss');

    return (
        <span className='absolute bottom-2 right-2  bg-black py-1 px-2 text-white text-xs rounded-md'>
            {videoLengthInSeconds}
        </span>
    )
}

export default VideoLength