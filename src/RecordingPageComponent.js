import React from "react";
import {useReactMediaRecorder} from "react-media-recorder";
import './RecordingPageComponent.css';

function RecordPageComponent(){
    const {status,startRecording,stopRecording,mediaBlobUrl} = useReactMediaRecorder({screen: true})
    return(
       
        <div className="center-container">
            <p className="status">{status}</p>
            <button  className="record-button" onClick={startRecording}>Start Recording</button>
            <button className="stop-button" onClick={stopRecording}>Stop Recording</button>
            <div className="video-container">
            <video src={mediaBlobUrl}  controls autoPlay download loop className="video-resolution" />
            {mediaBlobUrl && (
                <a href={mediaBlobUrl} download="recorded-video.webm" className="download-link">
                    Download Recorded Video
                </a>
            )}
            </div>
        </div>
    
    )
}

export default RecordPageComponent;