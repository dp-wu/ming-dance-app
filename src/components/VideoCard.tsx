type VideoCardProps = {
    title?: string;
    year?: string;
    choreographer?: string;
    time?: string;
    videoSrc: string;
    align?: 'left-right' | 'right-left';
}

export default function VideoCard({title, year, choreographer, time, videoSrc, align = 'left-right'}: VideoCardProps) {
    return (
        <section className="card">
            <div className={align}>
                {(align === 'right-left') ? (
                    <>
                        <div className="video-embed">
                            <iframe
                                src={videoSrc}
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                allowFullScreen
                                title={title}
                            />
                        </div>
                        <div className="card-text-left">
                            <h2>{title}</h2>
                            {year && <p>Year of Production: {year}</p>}
                            {choreographer && <p>Choreographer: {choreographer}</p>}
                            {time && <p>Time: {time}</p>}
                        </div>
                    </>
                ) : (
                    <>
                        <div className="card-text-right">
                            <h2>{title}</h2>
                            {year && <p>Year of Production: {year}</p>}
                            {choreographer && <p>Choreographer: {choreographer}</p>}
                            {time && <p>Time: {time}</p>}                      </div>
                        <div className="video-embed">
                            <iframe
                                src={videoSrc}
                                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                allowFullScreen
                                title={title}
                            />
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}