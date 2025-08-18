export default function Documentary() {
    return (
        <section className="card" id="documentary">
            <h2>Documentary</h2>
            <div className="right-left">
                <div className="card-text-left">
                    <h2>The Dancer (USF Campus Movie Festival)</h2>
                    <p>Year: 2012</p>
                    <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">More Documentary About Me -&gt;</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>
                <div className="video-embed">
                    <iframe
                        src="https://www.youtube.com/embed/4gL6-26W84g?si=YewItNGwvDCHamUr"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </section>
    );
}