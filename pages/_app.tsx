import NextProgress from 'nextjs-progressbar'

import '../styles/main.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextProgress
                color="red"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </>
    )
}



