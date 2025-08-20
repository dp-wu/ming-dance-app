import './index.css';
import { Routes, Route, Outlet } from 'react-router-dom';

import Hero from "./components/Hero.tsx";
import Ensembles from "./components/Ensembles.tsx";
import Biography from "./components/Biography.tsx";
import Gymnastics from "./components/Gymnastics.tsx";
import Documentary from "./components/Documentary.tsx";
import Footer from "./components/Footer.tsx";

import BioPage from './pages/BioPage';
import DePage from './pages/DanceEnsemble'
import AgPage from './pages/AerobicGymnastics'
import DocPage from './pages/Documentary'


function Layout() {
    return (
        <>
            <Hero />
            <main className="page">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

function HomePage() {
    return (
        <>
            <Biography />
            <Ensembles />
            <Gymnastics />
            <Documentary />
        </>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="bio" element={<BioPage />} />
                <Route path="ensemble" element={<DePage />} />
                <Route path="gymnastics" element={<AgPage />} />
                <Route path="documentary" element={<DocPage />} />
            </Route>
        </Routes>
    )
}
