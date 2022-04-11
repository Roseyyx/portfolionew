import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <li>
                    <Link href="">
                        <a className={styles.navlink}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a className={styles.navlink}>
                            About Me
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="">
                        <a className={styles.navlink}>
                            Projects
                        </a>
                    </Link>
                </li>
            </div>
        </div>
    );
};

export default NavBar;
