import Head from 'next/head'
import sytles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      <main className={sytles.contentContainer}>
        <section className={sytles.hero}>
          <span>👏 Hey, welcome </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all the publications</p>
          <span>For $9.90 month</span>
          <SubscribeButton/>
        </section>

        <img src="/avatar.svg" alt="girl coding" />
      </main>
    </>
  );
}
