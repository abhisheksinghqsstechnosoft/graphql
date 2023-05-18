

import React from 'react'
import Header from './Header'
import Client from '../components/Client'

import { useNavigate } from 'react-router-dom'


const Home = () =>
{
    const Navigate = useNavigate();
    const addUser = () =>
    {
        Navigate( '/add-user' )

    }
    return (

        <div>
            <Header />
            <button onClick={ addUser }>Add User</button>
            <Client />
        </div>
    )
}

export default Home