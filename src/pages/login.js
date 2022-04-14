import styles from '../styles/account.module.css'
import Link from "next/link";
import {useState} from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function submitForm(){
        if (email.length === 0 || password.length === 0){
            setMessage('Please fill in all fields');
            return;
        }
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,password})
        }).then(t => t.json());
        const user = res.user;
        if (user){
            setMessage(`Logged in as: ${user.username}`);
        } else {
            setMessage(`Something went wrong: ${res.message}`);
        }
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/register"><button>Register</button></Link>
                <h1>Login</h1>
                <p>{message}</p>
                <form action="">
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"/>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password"/>
                    <input type="button" onClick={submitForm} value="Login" className={styles.knopje}/>
                </form>
            </div>
        </section>
    );
}