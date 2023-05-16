
import mongoose from 'mongoose';



console.log(process.env.MONGO_URI);


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('db Connected Successefully');

    }
    catch (error) {
        console.log(error);
    }
}


export default connectDb;