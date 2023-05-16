import mongoose from "mongoose";

const createProjectSchema = new mongoose.Schema( {

    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client',
    },
    name:
        { type: String },

    description:
        { type: String },

    status:
    {
        type: String,
        enum: [ 'Not Started', 'In Progress', 'Completed' ]

    },

} );


const Project = mongoose.model( 'project', createProjectSchema );

export default Project;