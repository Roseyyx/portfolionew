import styles from '../styles/Projects.module.css'
import Image from 'next/image'
import Link from "next/link";
export default function Projects() {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.newspost}>
                    <div className={styles.newspostimg}>
                        <Image className={styles.image} src="/portfolio.png" alt="Portfolio" layout={"fill"}/>
                    </div>
                    <div className={styles.newspostinfo}>
                        <h1 className={styles.newsposttitle}>Portfolio Website</h1>
                        <div className={styles.newspostdate}>
                            <span>My own creative website</span>
                        </div>
                        <p className={styles.newsposttext}>Made using NEXT.js, CSS3, MongoDB and GraphQL</p>
                        <a href="https://sverrevanhoepen.nl/" className={styles.newspostcta}>Link</a>
                    </div>
                </div>
                <div className={styles.newspost}>
                    <div className={styles.newspostimg}>
                        <Image className={styles.image} src="/startup.png" alt="Startup" layout={"fill"}/>
                    </div>
                    <div className={styles.newspostinfo}>
                        <h1 className={styles.newsposttitle}>WediastudioApp</h1>
                        <div className={styles.newspostdate}>
                            <span>Startup with 3 other people</span>
                        </div>
                        <p className={styles.newsposttext}>Made using NEXT.js, CSS3, MySQL, GraphQL, Google Analytics and Cloudflare</p>
                        <a href="" className={styles.newspostcta}>Link</a>
                    </div>
                </div>
                <div className={styles.newspost}>
                    <div className={styles.newspostimg}>

                    </div>
                    <div className={styles.newspostinfo}>
                        <h1 className={styles.newsposttitle}>School Project</h1>
                        <div className={styles.newspostdate}>
                            <span>F1 Promotion Website</span>
                        </div>
                        <p className={styles.newsposttext}>Made with EJS, Node.JS, Express, REST, MongoDB, ECMAScript6 and CSS3</p>
                        <a href="https://87244.ict-lab.nl/BeroepsP4/" className={styles.newspostcta}>Link</a>
                    </div>
                </div>
                <div className={styles.newspost}>
                    <div className={styles.newspostimg}>

                    </div>
                    <div className={styles.newspostinfo}>
                        <h1 className={styles.newsposttitle}>User System</h1>
                        <div className={styles.newspostdate}>
                            <span>Login and Register</span>
                        </div>
                        <p className={styles.newsposttext}>Made with NEXT.js and MongoDB </p>
                        <Link href="/login"><a className={styles.newspostcta}>Link</a></Link>
                    </div>
                </div>
            </section>
        </>
    );
}