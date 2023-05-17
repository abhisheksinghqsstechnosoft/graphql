
import React from 'react'

import { useMutation } from '@apollo/client'
import { DELETE_CLIENT } from '../mutation/clientMutations'

const ClientRow = ( { client } ) =>
{
    const [ deleteClient ] = useMutation( DELETE_CLIENT, {
        variables: { id: client.id },

    } );
    return (
        <tr>
            <td>{ client.name }</td>
            <td>{ client.email }</td>
            <td>{ client.phone }</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={ deleteClient } >
                    delete
                </button>
            </td>
        </tr>
    )
}

export default ClientRow