import Head from "next/head"
import styles from './styles.module.scss'
import { useSession } from "next-auth/react"
import { Badge } from '@chakra-ui/react'
import { CancelSubscriptionModal } from "../../components/CancelSubscriptionModal/inde.x"
import {
    Button,
    useDisclosure
  } from '@chakra-ui/react'

export default function Account () {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const session = useSession()
    console.log(session)

    return (
        <>
        <Head>
           Account | Ignews 
        </Head>
        <main className={styles.container}>
            <CancelSubscriptionModal isOpen={isOpen} onClose={onClose}/>
            <section className={styles.accountInfosSection}>
                <h1>Signatures</h1>
                <div className={styles.subscriptionStatus}>
                    <h3>News about the React world</h3>
                    <Badge colorScheme='green'>Active</Badge>
                </div>
               <div className={styles.containerCancelButton}>
               <button className={styles.cancelaButton} onClick={onOpen} type="button">Cancel Subscription</button>
               </div>
            </section>
        </main>
        </>
    )
}