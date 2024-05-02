import Image from 'next/image'
import logoImg from '../../../public/logo.png'

import styles from './style.module.scss'
import { SignButton } from '../SingInButton'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { LinkActive } from '../linkActive'

export function Header () {
    const {asPath} = useRouter()


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoImg} alt='ig.news' width={101} height={30.5} />
                <nav>
                    <LinkActive href='/' legacyBehavior activeClassName={styles.active}>
                      <a >Home</a>
                    </LinkActive>
                    <LinkActive href='/posts' legacyBehavior activeClassName={styles.active}>
                     <a >Post</a>
                    </LinkActive>
                </nav>
                <SignButton/>
            </div>
        </header>
    )
}

export default Header