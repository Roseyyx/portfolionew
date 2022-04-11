import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <section className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.divcontainer}>
                        <h2>About Me</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor impedit incidunt itaque iusto laborum, maiores optio quae quo, recusandae sit sunt ut voluptatem. Ab accusantium aliquam cumque laboriosam officia!</p>
                    </div>
                    <div className={styles.divcontainer + " " + styles.rechts}>
                        <h2>Passion</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad beatae doloribus itaque minus obcaecati officiis quam quo quod saepe sapiente. Aliquid beatae commodi cum earum eius iste maiores quo vitae!</p>
                    </div>
                </div>
            </section>
        </>
    );
}