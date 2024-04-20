import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import { getSession } from "next-auth/react";

const Subscribe =  async (req: NextApiRequest, resp: NextApiResponse) => {
    if (req.method === 'POST') {
        let session = await getSession({req})

        while (!session || !session.user || !session.user.email) {
            await new Promise(resolve => setTimeout(resolve, 100));
            session = await getSession({ req });
        }

        const email = session.user.email;

        const stripeCustomer = await stripe.customers.create({
            email: email
        });


        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {
                    price: 'price_1P47zhAuruhV4Wv0zBKyDIMv',
                    quantity: 1
                }
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
            

        })

        return resp.status(200).json({sessionId: stripeCheckoutSession.id})
    }else {
        resp.setHeader('Allow', 'POST')
        resp.status(405).end('Method not allowed')
    }
}

export default Subscribe