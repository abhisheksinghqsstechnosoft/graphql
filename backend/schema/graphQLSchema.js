
// import { clients, projects } from '../dummyData/sampleData.js'

import Client from '../models/Client.js';
import Project from '../models/Project.js';

import
{
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
    GraphQLEnumType
}
    from 'graphql'




const ClientType = new GraphQLObjectType( {
    name: 'client',
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },

    }
} );
const projectType = new GraphQLObjectType( {
    name: 'project',
    fields: {
        id: { type: GraphQLString },
        clientId: { type: GraphQLString },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve: ( parent, args ) =>
            {
                return Client.findById( parent.clientId );
            }
        }
    }
} )

const RootQuery = new GraphQLObjectType( {
    name: 'rootQueryType',
    fields: {
        clients: {
            type: new GraphQLList( ClientType ),
            resolve ( parent, args )
            {
                // return clients;
                return Client.find();
            }

        },
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve ( parent, args )
            {
                // return clients.find( ( client ) => client.id === args.id )
                return Client.findById( parent.clientId );
                // return Client.findById( parent.clientId )


            }
        },
        projects: {
            type: new GraphQLList( projectType ),
            resolve ( parent, args )
            {
                return Project.find();
            }
        },
        project: {
            type: projectType,
            args: { id: { type: GraphQLID } },
            resolve ( parent, args )
            {
                // return projects.find( ( project ) => project.id === args.id )
                return Project.findById( args.id );
            }
        }
    }
} );





const mutation = new GraphQLObjectType( {
    name: 'Mutation',

    fields: {
        addClient: {
            type: ClientType,
            args: {
                name: { type: GraphQLNonNull( GraphQLString ) },
                email: { type: GraphQLNonNull( GraphQLString ) },
                phone: { type: GraphQLNonNull( GraphQLString ) }
            },
            resolve: async ( parent, args ) =>
            {
                try
                {
                    const client = await new Client( {
                        name: args.name,
                        email: args.email,
                        phone: args.phone,
                    } );

                    return client.save();
                } catch ( error )
                {
                    console.log( error );

                }

            }
        },
        addProject: {

            type: projectType,


            args: {
                clientId:
                    { type: ( GraphQLString ) },

                name:
                    { type: GraphQLNonNull( GraphQLString ) },

                description:
                    { type: GraphQLNonNull( GraphQLString ) },

                status:
                {
                    type:
                        new GraphQLEnumType( {
                            name: 'projectStatus',
                            values: {
                                'start': {
                                    value: 'Not Started'
                                },
                                'progress': {
                                    value: 'In Progress'
                                },
                                'completed': {
                                    value: 'Completed'
                                }
                            }


                        } ),

                    defaultValue: 'Not Started'

                },

            },
            resolve ( parent, args ) 
            {
                const project = new Project( {
                    name: args.name,
                    status: args.status,
                    clientId: args.clientId,
                    description: args.description
                } );
                return project.save();
            }
        }

    }
} );

export const schemaGraphQL = new GraphQLSchema( {
    query: RootQuery,
    mutation: mutation,

} )