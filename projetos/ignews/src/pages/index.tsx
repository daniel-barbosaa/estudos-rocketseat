import Head from 'next/head'
import styles from '../../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Inícío | ignews</title>
      </Head>
      <h1 className={styles.title}>Hello world</h1>
    </>
  );
}
