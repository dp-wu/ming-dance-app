import './index.css'
import Hero from "./components/Hero.tsx";
import Ensembles from "./components/Ensembles.tsx";
import Biography from "./components/Biography.tsx";
import Gymnastics from "./components/Gymnastics.tsx";
import Documentary from "./components/Documentary.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
    return (
        <div>
            <Hero />
            <main className="page">
                <Biography />
                <Ensembles />
                <Gymnastics />
                <Documentary />
            </main>
            <Footer />
        </div>
    );
}