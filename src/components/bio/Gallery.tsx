import styles from './Gallery.module.css';
import {useMemo, useState} from "react";


const mods = import.meta.glob<{ default:string }>('../../assets/gallery/*.jpg', {eager: true});
const allImages: string[] = Object.values(mods).map(m => m.default).sort();


export default function Gallery() {
    const VISIBLE = 3;
    const STEP = 1;

    const images = useMemo(() => allImages.filter((_, index) => index % STEP === 0), []);
    const [start, setStart] = useState(0);

    if (allImages.length === 0) {
        return (
            <section className="card">
                <h2>Gallery</h2>
                <div>No images found.</div>
            </section>
        );
    }

    const maxStart = Math.max(0, images.length - VISIBLE);

    const prev = () => setStart((s) => Math.max(0, s - STEP));
    const next = () => setStart((s) => Math.min(maxStart, s + STEP));
    const visible = images.slice(start, start + VISIBLE);

    return (
        <section className={styles.container}>
            <h2>Gallery</h2>
            <div className={styles.galleryCard}>
                <button className={styles.button} onClick={prev} aria-label="Previous">❮</button>
                <div className={styles.mainStrip}>
                    {visible.map((img, index) => (
                        <img key={index} src={img} alt={`Gallery ${index + STEP}`} className={styles.mainImg} />
                    ))}
                </div>
                <button className={styles.button} onClick={next} aria-label="Next">❯</button>
            </div>
        </section>
    );
}