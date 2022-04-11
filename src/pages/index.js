import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
        <section className={styles.main}>
            <div className={styles.container}>
                <h1 id={styles.titel}>Sverre <span>van</span> Hoepen</h1>
                <p>Full-Stack Developer</p>
            </div>
        </section>
        <section className={styles.info}>
            <div className={styles.infocontainer}>
                <div className={styles.grid1}>
                    <h2>Full-Stack</h2>
                    <p>I am mostly a Full-Stack Developer leaning towards Back-End. I can create a Front-End page with a delivered UX/UI design. I can create E-Commerce Website with Back-End and real time event updates.</p>
                </div>
                <div className={styles.grid1 + " " + styles.rechts}>
                    <h2>Database</h2>
                    <p>I am familiar with databases such as MySQL and MongoDB. I can connect the Front and Back-End together with use of a database.</p>
                </div>
            </div>
        </section>
        <section className={styles.languages}>
            <div className={styles.wrapper}>
                <h1>Languages</h1>
                <div className={styles.grid}>
                    <div className={styles.griditem}>
                        <h2>HTML5</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>CSS3</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>JavaScript ECMA6</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>NEXT.js</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>Node.js</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>REST</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>Express.js</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>MongoDB</h2>
                        <p></p>
                    </div>
                    <div className={styles.griditem}>
                        <h2>MySQL</h2>
                        <p></p>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
