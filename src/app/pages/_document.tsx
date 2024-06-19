import Document, { Head, Html, Main, NextScript } from "next/document";

<<<<<<< HEAD
=======

>>>>>>> 9098ce062b7c786c8063731df259d4652e885888
class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument