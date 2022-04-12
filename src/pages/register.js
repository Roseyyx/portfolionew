import styles from '../styles/account.module.css'
import {useState} from "react";
import Link from "next/link";

export default function Register() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm(){
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,username,password})
        }).then(res => console.log("account created!"));
    }

    return (
        <section className={styles.container}>
            <div className={styles.login}>
                <h1>Register</h1>
                <form action="">
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"/>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username"/>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password"/>
                    <div className={styles.knoppen}>
                        <Link href="/login"><a href=""><button>Log In</button></a></Link>
                        <input type="button" onClick={submitForm} value="Register"/>
                        {/*<button type="submit" value="Register" onClick={submitForm}>Create</button>*/}
                    </div>
                </form>
            </div>
        </section>
    );
}