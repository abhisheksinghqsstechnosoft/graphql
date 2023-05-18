import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import AddUser from './pages/AddUser'


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
        <Route path='/add-user' element={ <AddUser /> } />

      </Routes>
    </ApolloProvider>
  )
}

export default App