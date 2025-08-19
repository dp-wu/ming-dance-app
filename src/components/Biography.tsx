import portrait from '../assets/profile.jpg';

export default function Biography() {
    return (
        <section className="card" id="bio">
            <h2>Biography</h2>
            <div className="left-right">
                <img src={portrait} alt="Ming Dance"/>
                <div className="card-text-right">
                    <h3>Ming 鸣 Zhao</h3>
                    <p>Heigh: 5'10"</p>
                    <p>Weight: 140lbs</p>
                    <p>Location: San Francisco</p>
                    <p>Aerobic Gymnastic Champions</p>
                    <p>Dancer (Ballet, Contemporary, Chinese Dance)</p>
                    <a className="fancy" href="#">
                        <span className="top-key"></span>
                        <span className="text">View Training, Awards &amp; Honor -&gt;</span>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </a>
                </div>
            </div>
        </section>
    );
}