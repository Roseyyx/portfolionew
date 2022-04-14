import styles from '../styles/account.module.css'
import{useState} from "react";

export default function Dashboard() {

    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');

    async function submitForm(){
        const res = await fetch('/api/getUser', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username})
        }).then(t => t.json());
        const user = res.user;
        if (user){
            setMessage(`${user.username}`);
        } else{
            setMessage(`User not found`);
        }
    }

    async function changeName(){
        if (username.length === 0){
            setMessage('No current user selected');
            return;
        }
        const newname = prompt('Enter new name');
        if (newname === null || newname.length === 0){
            setMessage('Please fill in all fields');
            return;
        }
        const res = await fetch('/api/changeName', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, newname})
        }).then(t => t.json());
        setMessage(res.message);
    }

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h1>Find User</h1>
                <p>{message}</p>
                <form action="">
                    <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} required placeholder="Username"/>
                    <input type="button" onClick={submitForm} value="Search"/>
                </form>
                <a><button onClick={changeName}>Change username</button></a>
            </div>
        </section>
    );
}