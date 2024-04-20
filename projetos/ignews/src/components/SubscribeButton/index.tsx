import { signIn, useSession } from 'next-auth/react'
import styles from './styles.module.scss'
import { api } from '../../services/api'
import { getStipeJs } from '../../services/stripe-js'

    interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton ({priceId}: SubscribeButtonProps) { 
    const IsAutenticate = useSession()
  

    async function handleSubscribe () {
        if(IsAutenticate.status !== 'authenticated' ) {
            signIn('github')
            return
        }

        try {
            const response = await api.post('/subscribe')
            // Pegando o session id do Stripe
            const {sessionId} = response.data

            // Passando o id utilizando a lib stripe-js e redirecionando o checkout
            const stripe = await getStipeJs()

            await stripe?.redirectToCheckout({sessionId})
        }catch(err){
            alert(err)
        }
    }
    return (
        <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe now</button>
    )
}