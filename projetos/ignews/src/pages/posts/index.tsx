import Head from 'next/head'
import style from './style.module.scss'


export default function Posts() {
    return(
        <>
         <Head>
           Posts | Ignews 
         </Head>
         <main className={style.container}>
            <div className={style.post_list}>
                <a href="#">
                    <time>
                    12 de março de 2021
                    </time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces1</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
 

                <a href="#">
                    <time>
                    12 de março de 2021
                    </time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>

            
                <a  href="#">
                    <time>
                    12 de março de 2021
                    </time>
                    <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
                    <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
                </a>
                </div>
         </main>
        </>
    )
}