import YouTube from 'react-youtube';

export default function App() {
    // https://www.youtube.com/watch?v=8_6MPHt5kII
    // 자동 음소거, 자동재생 기능 적용 세로 600px
    return <>
        <YouTube 
            videoId={"8_6MPHt5kII"}
            opts={{
                width: "800",
                height: "600",
                playerVars: {
                    autoplay: 1,
                    muted: 1,
                },
            }}
            onReady={(e) => e.target.mute()}
            onEnd={(e)=> {e.target.stopVideo(0)}}
        />
    </>
}