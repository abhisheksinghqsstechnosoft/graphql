

import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import { ADD_CLIENT } from '../mutation/clientMutations';
import { GET_CLIENTS } from '../quries/clientQuries';
import { useNavigate } from 'react-router-dom';


const AddUser = () =>
{
    const Navigate = useNavigate();
    const [ dataForm, setData ] = useState( {
        name: '',
        email: '',
        phone: '',
    } );

    const onChangeHandeller = ( event ) =>
    {
        setData( ( prevData ) => ( {
            ...prevData,
            [ event.target.name ]: event.target.value,
        } ) );

    }


    const { name, email, phone } = dataForm;


    const [ addClient ] = useMutation( ADD_CLIENT, {
        variables: { name, email, phone },
        update ( cache, { data: { addClient } } )
        {
            const { clients } = cache.readQuery( {
                query: GET_CLIENTS,
            } );
            cache.writeQuery( {
                query: GET_CLIENTS,
                data: { clients: [ ...clients, addClient ] }
            } )

        }
    } )
    const onSubmitHandeller = ( event ) =>
    {
        event.preventDefault();
        if ( name === '' && email === '' && phone === "" ) alert( "fill all details" );

        addClient();
        console.log( dataForm );
        setData( {
            name: "",
            email: '',
            phone: '',
        } )

        Navigate( '/' )






    }


    return (
        <form onSubmit={ onSubmitHandeller }>
            <label htmlFor="name">name</label>
            <br />
            <input type="text" id='name' value={ dataForm.name } name='name' onChange={ onChangeHandeller } />
            <br />

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" id='email' value={ dataForm.email } name='email' onChange={ onChangeHandeller } />
            <br />

            <label htmlFor="phone">Phone</label>
            <br />
            <input type="text" id='phone' value={ dataForm.phone } name='phone' onChange={ onChangeHandeller } />
            <br />

            <br /><br /><br /><br /><br /><br /><br />
            <button type='submit'>Submit FOrm</button>


        </form>
    )
}

export default AddUser