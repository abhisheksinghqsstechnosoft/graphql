import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'


const client = new ApolloClient( {
  uri: 'http://localhost:9999/graphql',
  cache: new InMemoryCache()
} )

const App = () =>
{
  return (
    <ApolloProvider client={ client }>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>
    </ApolloProvider>
  )
}

export default App