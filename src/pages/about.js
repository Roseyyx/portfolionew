import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.divcontainer}>
                        <h2>About Me</h2>
                        <p>Hello, I am Sverre van Hoepen, 17 Years of age and a Software Developer Student at Grafisch Lyceum Rotterdam. I am mostly a Full-Stack Developer leaning towards Back-End. I use frameworks like NEXT.js to connect both ends together.</p>
                    </div>
                    <div className={styles.divcontainer + " " + styles.rechts}>
                        <h2>Passion</h2>
                        <p>I started very young with coding, not with websites, but more with game modifications. Now I've discovered my passion and that is making Websites/Web-Apps. I am very adaptive to learning new frameworks and/or new languages.</p>
                    </div>
                    <a href={"/cv.pdf"}className={styles.knopje}><button>CV</button></a>
                </div>
            </section>
        </>
    );
}