import styles from '../styles/account.module.css'
import {useState} from "react";
import Link from "next/link";

export default function Register() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    async function submitForm(){
        if (email.length === 0 || username.length === 0 || password.length === 0){
            setMessage('Please fill in all fields');
            return;
        }
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email,username,password})
        }).then(t => t.json());

        setMessage(res.message);
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <Link href="/login"><button>Log In</button></Link>
                <h1>Register</h1>
                <p>{message}</p>
                <form action="">
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="Email"/>
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username"/>
                    <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="Password"/>
                    <input type="button" onClick={submitForm} value="Register"/>
                </form>
            </div>
        </section>
    );
}