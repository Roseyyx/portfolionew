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
            <div className={styles.arrow}>
                <a href={"#info"}>
                    <svg width="70" height="55" viewBox="-2.5 -5 75 60" preserveAspectRatio="none">
                        <path d="M0,0 l35,50 l35,-50" fill="none" stroke="black" stroke-linecap="round" stroke-width="5" />
                    </svg>
                </a>
            </div>
        </section>
        <section className={styles.info} id={"info"}>
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
                        <img src="/html5.svg" alt="HTML5" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>CSS3</h2>
                        <img src="/css.svg" alt="CSS3" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>JavaScript ECMA6</h2>
                        <img src="/javascript.svg" alt="JavaScript" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>NEXT.js</h2>
                        <img src="/next.svg" alt="NEXT.js" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>Node.js</h2>
                        <img src="/node.svg" alt="Node.js" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>GraphQL</h2>
                        <img src="/graphql.svg" alt="GraphQL" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>Express.js</h2>
                        <img src="/express.svg" alt="Express.js" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>MongoDB</h2>
                        <img src="/mongodb.svg" alt="MongoDB" />
                    </div>
                    <div className={styles.griditem}>
                        <h2>MySQL</h2>
                        <img src="/mysql.svg" alt="MySQL" />
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}
