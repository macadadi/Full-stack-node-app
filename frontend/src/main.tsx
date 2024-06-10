import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MUContextProvider } from './theme.tsx';
import { useCustomSet } from './utils/useCustomSet.ts';
import { Book, MainAppContext } from 'types/index.js';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}
const appContext = React.createContext<MainAppContext>({} as MainAppContext)
export { appContext }

const AppWithContext = () => {
  const appState = useCustomSet<Book>();
  return (
    <appContext.Provider value={{ ...appState }}>
      <App />
    </appContext.Provider>
  )

}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MUContextProvider>
      <ApolloProvider client={client}>
        <AppWithContext />
      </ApolloProvider>
    </MUContextProvider>
  </React.StrictMode>,
)
