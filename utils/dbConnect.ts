import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI , {}) // please add your Mongo URI to .env file
const clientPromise = client.connect()

// Export a module-scoped MongoClient promise to be shared across functions
export default clientPromise