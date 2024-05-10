import Head from "next/head"
import styles from './styles.module.scss'

export default function Account () {
    return (
        <>
        <Head>
           Account | Ignews 
        </Head>
        <main className={styles.container}>
            <section className={styles.accountInfosSection}>
                <h1>Signatures</h1>
            </section>
        </main>
        </>
    )
}