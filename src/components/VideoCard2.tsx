type VideoCardProps2 = {
    videoSrc1: string;
    videoSrc2: string;
}

export default function VideoCard2({videoSrc1, videoSrc2}: VideoCardProps2) {
    return (
        <section className="card">
            <div className="video" style={{ margin: '40px auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '40px'}}>
                <div className="video-item" style={{ flex: 1, height: 'auto'}}>
                    <iframe
                        src={videoSrc1}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        allowFullScreen
                        style={{ aspectRatio: "4 / 3", width: "100%", height: "auto", border: 'none', borderRadius: '10px' }}
                    />
                </div>
                <div className="video-item" style={{ flex: 1, height: 'auto'}}>
                    <iframe
                        src={videoSrc2}
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                        allowFullScreen
                        style={{ aspectRatio: "4 / 3", width: "100%", height: "auto", border: 'none', borderRadius: '10px' }}
                    />
                </div>
            </div>
        </section>
    )
}