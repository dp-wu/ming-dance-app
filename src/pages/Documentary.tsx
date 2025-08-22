import VideoCard from "../components/VideoCard.tsx";

export default function DocumentaryPage() {
    return (
        <>
            <VideoCard
                title="The Dancer (USF Campus Movie Festival)"
                year="2012"
                videoSrc="https://www.youtube.com/embed/4gL6-26W84g?si=-Z4T9zaalp5laCtT"
                align="right-left"
            />
            <VideoCard
                title="Dance Generators (Introduction)"
                year="2011"
                videoSrc="https://www.youtube.com/embed/Wzcx_yLV8uE?si=n5nOB1Iv6r6m-Ikn"
                align="left-right"
            />
        </>
    );
}