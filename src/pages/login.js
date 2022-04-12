import styles from '../styles/account.module.css'
import Link from "next/link";
import {useState} from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submitForm(){
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        }).then(res => console.log("logged in!"));
    }

    return (
        <section className={styles.container}>
            <div className={styles.login}>
                <h1>Login</h1>
                <form action="">
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"/>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password"/>
                    <div className={styles.knoppen}>
                        <Link href="/register"><a href=""><button>Register</button></a></Link>
                        <button type="submit" value="Login" onClick={submitForm}>Login</button>
                    </div>
                </form>
            </div>
        </section>
    );
}