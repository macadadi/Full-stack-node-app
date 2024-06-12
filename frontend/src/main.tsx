import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'


import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { MUContextProvider } from './theme.tsx';
import { Book } from 'types/index.js';
import { useCustomSet } from 'utils/hooks/useCustomSet.ts';
import { appContext } from 'context/Context.ts';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

const isDev = process.env.NODE_ENV === 'development'

if (isDev) {
  loadDevMessages();
  loadErrorMessages();
}


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
