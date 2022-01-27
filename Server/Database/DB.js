import mongoose from 'mongoose';



const Connection = async () => {
    const URL = `mongodb+srv://BlogProject:project12345@blogweb.b0pz7.mongodb.net/BlogProject?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL)
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;