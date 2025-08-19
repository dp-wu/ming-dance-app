export default function Ensembles() {
    return (
        <section className="card" id="ensemble">
            <h2>Dance Ensembles</h2>
            <div className="right-left">
                <div className="card-text-left">
                    <h3>Passacaglia (Ballet)</h3>
                    <p>Year of production: 2014</p>
                    <p>Choreographer: Jennifer Polyocan</p>
                    <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">More Contemporary, Ballet &amp; African Dance -&gt;</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>

                <div className="video-embed">
                    <iframe
                        src="https://player.vimeo.com/video/94225105?h=be83d0cb56&badge=0&autopause=0&player_id=0&app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        allowFullScreen
                        title="S14 DANC: Dance Concert | Passacaglia"
                    />
                </div>
            </div>
        </section>
    );
}