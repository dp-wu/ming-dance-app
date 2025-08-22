import VideoCard from "../components/VideoCard.tsx";
import VideoCard2 from "../components/VideoCard2.tsx";

export default function GymnasticsPage() {
    return (
        <div className="gyms" style={{ margin: '30px auto' }}>
            <VideoCard
                title="Intercollegiate Competition"
                year="2011"
                videoSrc="https://player.vimeo.com/video/167841504?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                align="right-left"
            />
            <VideoCard
                title="Intercollegiate Competition"
                year="2010"
                videoSrc="https://player.vimeo.com/video/169045992?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                align="left-right"
            />
            <VideoCard2
                videoSrc1="https://player.vimeo.com/video/167840826?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                videoSrc2="https://player.vimeo.com/video/167840828?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            />
        </div>
    );
}