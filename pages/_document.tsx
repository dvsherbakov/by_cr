import React, {ReactElement} from 'react'
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render(): ReactElement {
        return (
            <Html lang='ru'>
                <Head>
                    <link
                        href='https://fonts.googleapis.com/css2?family=Fira+Sans+Extra+Condensed:wght@100;300;500&family=Open+Sans+Condensed:wght@300;700&family=PT+Serif&family=Roboto+Condensed:wght@300;400;700&family=Roboto+Slab:wght@100;200;300;400&family=Roboto:ital,wght@0,100;0,400;1,700&display=swap&family=Oswald:wght@200;400;700&display=swap&family=Amatic+SC:wght@400;700&family=Lobster&display=swap&&family=Playfair+Display:wght@400;500&display=swap'
                        rel='stylesheet'/>
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