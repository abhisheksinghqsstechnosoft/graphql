

import React from 'react'
import Header from './Header'
import Client from '../components/Client'


const Home = () =>
{
    // const adduser = () =>
    // {
    //     console.log( 'asdddsafuygsudsavxghyuywhdwdhfghsxvghcwyfcytfwsdywhasvxhvghavghxvghs' );

    // }
    return (

        <div>
            <Header />
            <button >Add User</button>
            <Client />
        </div>
    )
}

export default Home