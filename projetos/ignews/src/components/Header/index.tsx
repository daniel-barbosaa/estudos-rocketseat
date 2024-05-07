import Image from 'next/image'
import logoImg from '../../../public/logo.png'

import styles from './style.module.scss'
import { SignButton } from '../SingInButton'
import { useRouter } from 'next/router'
import { LinkActive } from '../linkActive'

import { ButtonProfile } from '../ButtonProfile'

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
                <div className={styles.headerProfileContent}>
                    <SignButton/>
                    <ButtonProfile/>
                </div>
                
            </div>
        </header>
    )
}

export default Header