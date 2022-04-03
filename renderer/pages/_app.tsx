import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import store from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>MercadoTienda | Join Business</title>
        <meta
          name='description'
          content='Únete al negocio! miles de productos para abastecer o ser abastecido'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
