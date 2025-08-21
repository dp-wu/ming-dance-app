import Profile from '../components/bio/Profile.tsx';
import AwardsHonor from '../components/bio/AwardsHonor.tsx';
import Gallery from '../components/bio/Gallery.tsx';

export default function DocumentaryPage() {
    return (
        <>
            <Profile />
            <AwardsHonor />
            <Gallery />
        </>
    );
}