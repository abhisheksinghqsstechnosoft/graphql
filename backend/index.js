import express from 'express'
import { config } from 'dotenv'
import { schemaGraphQL } from './schema/graphQLSchema.js'
import { graphqlHTTP } from 'express-graphql';
import connectDb from './config/db.js'
import cors from 'cors';


const app = express();




config( { path: "./config/.env" } );
connectDb();


const port = process.env.PORT;






//middlewares
app.use( cors() );
app.use( express.json() )
app.use( '/graphql', graphqlHTTP( {
    schema: schemaGraphQL,
    graphiql: process.env.NODE_ENV === 'development'
} ) )





app.listen( port, () =>
{
    console.log( `Server is running on ${ port }  click http://localhost:${ port }/graphql/` );

} )