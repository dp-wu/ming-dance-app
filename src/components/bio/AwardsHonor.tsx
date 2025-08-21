import styles from './AwardsHonor.module.css';


export default  function AwardsHonor() {
    return (
        <section className="card">
            <h2>Awards &amp; Honor</h2>
            <div className={styles.awardsCard}>
                <table>
                    <colgroup>
                        <col/>
                        <col/>
                        <col/>
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>Jiangsu Province Aerobic Gymnastics Tournament</td>
                            <td>Men's Individuals Champion</td>
                            <td>2011</td>
                        </tr>
                        <tr>
                            <td>The 17th Jiangsu Province Collegiate Sports Games-Aerobic Gymnastics </td>
                            <td>Trio, 6-Person, Aerobic Dancing, Team Champions</td>
                            <td>2010</td>
                        </tr>
                        <tr>
                            <td>Performing Arts Winter Camp at Beijing University</td>
                            <td>First Prize of Ballet Performance</td>
                            <td>2009</td>
                        </tr>
                        <tr>
                            <td>Certificate of Art Grade Examination of China</td>
                            <td>Grade 10 for Chinese Dance (Highest Level)</td>
                            <td>2008</td>
                        </tr>
                        <tr>
                            <td>Liaoning Province Aerobic Gymnastics Tournament </td>
                            <td>Men’s Individuals, 6-Person Champions</td>
                            <td>2007</td>
                        </tr>
                        <tr>
                            <td>National Aerobic Gymnastics Youth Championship</td>
                            <td>6-Person Champion</td>
                            <td>2007</td>
                        </tr>
                        <tr>
                            <td>Liaoning Province High School Aerobic Gymnastics Tournament</td>
                            <td>Men’s Individuals, Duet, 6-person, 12-person, Team Champions</td>
                            <td>2006</td>
                        </tr>
                        <tr>
                            <td>National Aerobic Gymnastics Youth Championship</td>
                            <td>6-Person Champion</td>
                            <td>2006</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}