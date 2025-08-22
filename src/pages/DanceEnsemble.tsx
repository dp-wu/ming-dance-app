import VideoCard from "../components/VideoCard.tsx";

export default function EnsemblePage() {
    return (
        <main className="page">
            <VideoCard
                title="Passacaglia (Ballet)"
                year="2014"
                choreographer="Jennifer Polyocan"
                videoSrc="https://player.vimeo.com/video/94225105?h=be83d0cb56&badge=0&autopause=0&player_id=0&app_id=58479"
                align="right-left"
            />
            <VideoCard
                title="A Sorry Excuse (Contemporary)"
                year="2014"
                choreographer="Kelly Kemp"
                videoSrc="https://player.vimeo.com/video/94094689?h=20e08e407d&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                align="left-right"
            />
            <VideoCard
                title="The Sound of the Dunun (African Dance)"
                year="2013"
                choreographer="Naby Bangoura"
                videoSrc="https://player.vimeo.com/video/65362617?h=8fb788cbab&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                time="33'15''-43'40''"
                align="right-left"
            />
            <VideoCard
                title="Duck Soup (Contemporary)"
                year="2012"
                choreographer="Scott Wells"
                videoSrc="https://player.vimeo.com/video/56383381?h=00a773862b&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                align="left-right"
            />
        </main>
    );
}