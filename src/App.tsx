import './index.css'
import Hero from "./components/Hero.tsx";
import Ensembles from "./components/Ensembles.tsx";

export default function App() {
    return (
        <div>
            <Hero />
            <main>
                <Ensembles />
            </main>
        </div>
    );
}