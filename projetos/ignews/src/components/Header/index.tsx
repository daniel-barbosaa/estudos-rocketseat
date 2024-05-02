import Image from 'next/image'
import logoImg from '../../../public/logo.png'

import styles from './style.module.scss'
import { SignButton } from '../SingInButton'
import Link from 'next/link'

export function Header () {


    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoImg} alt='ig.news' width={101} height={30.5} />
                <nav>
                    <Link href='/'className={styles.active}>
                    Home
                    </Link>
                    <Link href='/posts'>
                     Posts
                    </Link>
                    
                </nav>
                <SignButton/>
            </div>
        </header>
    )
}

export default Header