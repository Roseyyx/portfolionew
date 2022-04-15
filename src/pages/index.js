import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    const [alert, setAlert] = useState(false);

    async function submitForm(e){
        e.preventDefault();
        if (name === '' || email === '' || message === '' || subject === '') {
            return setAlert("Please fill all the fields");
        }
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                message,
                subject
            })
        }).then(t => t.json());

        setAlert(response.message);
    }

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
                        <Image src="/html5.svg" alt="HTML5" width={"200"} height={"200"}/>
                        <h2>HTML5</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/css.svg" alt="CSS3" width={"200"} height={"200"}/>
                        <h2>CSS3</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/javascript.svg" alt="JavaScript" width={"200"} height={"200"}/>
                        <h2>JavaScript ECMA6</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/next.svg" alt="NEXT.js" width={"200"} height={"200"}/>
                        <h2>NEXT.js</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/node.svg" alt="Node.JS" width={"200"} height={"200"}/>
                        <h2>Node.js</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/graphql.svg" alt="GraphQL" width={"200"} height={"200"}/>
                        <h2>GraphQL</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/express.svg" alt="Express.js" width={"200"} height={"200"}/>
                        <h2>Express.js</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/mongodb.svg" alt="MongoDB" width={"200"} height={"200"}/>
                        <h2>MongoDB</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/mysql.svg" alt="MySQL" width={"200"} height={"200"}/>
                        <h2>MySQL</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/git.svg" alt="Git" width={"200"} height={"200"}/>
                        <h2>Git</h2>
                    </div>
                    <div className={styles.griditem}>
                        <Image src="/php.svg" alt="PHP" width={"200"} height={"200"}/>
                        <h2>PhP</h2>
                    </div>
                </div>

            </div>
        </section>
        <section className={styles.contact}>
            <div className={styles.contactwrapper}>
                <h1>Contact</h1>
                <form action="">
                    <input type="text" name="name" placeholder="Name" className={styles.name} value={name} onChange={e => setName(e.target.value)}/>
                    <input type="text" name="subject" placeholder="Subject" className={styles.Subject} required value={subject} onChange={e => setSubject(e.target.value)}/>
                    <input type="email" name="email" placeholder="Email" className={styles.Email} required value={email} onChange={e => setEmail(e.target.value)}/>
                    <textarea name="message" placeholder="Message" className={styles.Message} required spellCheck="true" value={message} onChange={e => setMessage(e.target.value)}/>
                    <div className={styles.socials}>
                        <a href="https://github.com/artyNL" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                style={{ fontSize: 52, color: "black"}}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/sverre-van-hoepen-25038a220/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                style={{ fontSize: 52, color: "black"}}
                            />
                        </a>
                        <a href="mailto:arty@duck.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={{ fontSize: 52, color: "black"}}
                            />
                        </a>

                    </div>
                    <button type="submit" className={styles.buttons} onClick={submitForm}>Send</button>
                </form>
            </div>
        </section>
    </>
  )
}
