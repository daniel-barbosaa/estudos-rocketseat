import Image from 'next/image'
import logoImg from '../../../public/logo.png'

import styles from './style.module.scss'
import { SignButton } from '../SingInButton'

export function Header () {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logoImg} alt='ig.news' width={101} height={30.5} />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignButton/>
            </div>
        </header>
    )
}

export default Header