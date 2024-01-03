import React, { useContext } from 'react'
import YouTube from 'react-youtube';
import './YVideo.css'
import { videoContext } from '../../App';
function YVideo() {
    const { trailer, setTrailer } = useContext(videoContext)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div className='ytContainer'>
            <div style={{ width: '640px' }} className='text-end'><button className='' style={{ backgroundColor: "transparent", borderColor: "transparent", color: "white" }}
                onClick={() => {
                    setTrailer(null)
                }}
            >close</button></div>
            <YouTube videoId={trailer.key} opts={opts} />
        </div>
    )
}

export default YVideo