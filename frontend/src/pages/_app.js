import '../styles/globals.css';
import '../styles/Start.module.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export default function App({ Component, pageProps }) {
  return <Provider store={store} >
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </Provider>
}
