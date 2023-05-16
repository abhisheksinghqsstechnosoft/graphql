

// import React from 'react'
import { gql, useQuery } from '@apollo/client'
const GET_CLIENTS = gql`
query getClients {
    clients{
        id
        name
        email
        phone
    }
}
`


const Client = () =>
{
    const { loading, error, data } = useQuery( GET_CLIENTS );

    console.log( error );
    console.log( data?.clients[ 0 ]?.name )


    if ( loading ) return <div>loading......</div>
    if ( error ) return <div>eroor</div>

    return ( <>
        { !loading && !error && <div> { data?.clients[ 0 ]?.name }</div> }
    </>

    )
}

export default Client