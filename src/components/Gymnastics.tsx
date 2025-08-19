export default function Gymnastics() {
    return (
        <section className="card" id="gymnastics">
            <h2>Aerobic Gymnastics</h2>
            <div className="right-left">
                <div className="video-embed">
                    <iframe
                        src="https://player.vimeo.com/video/167841461?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        title="高水平男单">

                    </iframe>
                </div>
                <div className="card-text-left">
                    <h3>National/Provincial Youth Competition</h3>
                    <p>Year: 2005 - 2008</p>
                    <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">More Aerobic Gymnastics -&gt;</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>
            </div>
        </section>
    );
}