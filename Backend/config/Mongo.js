const {MongoClient} = require('mongodb');

const options = {useNewUrlParser: true, useUnifiedTopology: true};
const uri = process.env.MONGO_URI || 'mongodb+srv://scriptsherlock007:root@cluster0.6rzbg59.mongodb.net/';


const client = new MongoClient(uri, options);

async function connect() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        return client.db('Web');
    } catch (error) {
        console.error(error);
    }
}

async function close() {
    try {
        await client.close();
        console.log("Disconnected from MongoDB");
    } catch (error) {
        console.error(error);
    }
}

module.exports = {connect, close};
