import styles from './Profile.module.css';
import dancePhoto from '../../assets/gallery/dancing1.jpg'


export default function Profile() {
    return (
        <section className="card">
            <h2>Training</h2>
            <div className={styles.bioCard}>
                <div className={styles.bioGallery}>
                    <img className={styles.mainPhoto} src={dancePhoto}  alt="Ming Dance"/>
                </div>
                <div className={styles.bioTable}>
                    <table className={styles.tableContent}>
                        <colgroup>
                            <col/>
                            <col/>
                            <col/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>Artistic Gymnastics</td>
                            <td>Liaoning Province Gymnastic Team, China</td>
                            <td>1992-2000</td>
                        </tr>
                        <tr>
                            <td>Ballet, Chinese Dance</td>
                            <td>Beijing Dance Academy, China</td>
                            <td>2000-2002</td>
                        </tr>
                        <tr>
                            <td>Aerobic Gymnastics</td>
                            <td>Liaoning Province Shiyan High School, China</td>
                            <td>2005-2008</td>
                        </tr>
                        <tr>
                            <td>Aerobic Gymnastics, Dance</td>
                            <td>Nanjing University, China</td>
                            <td>2009-2011</td>
                        </tr>
                        <tr>
                            <td>Dance Minor</td>
                            <td>University of San Francisco, U.S.</td>
                            <td>2011-2014</td>
                        </tr>
                        <tr>
                            <td>Dance, Musical, Theatrical Performances</td>
                            <td>Dance Generators, U.S.</td>
                            <td>2011-Present</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}