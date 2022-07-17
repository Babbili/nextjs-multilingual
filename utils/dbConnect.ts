import { MongoClient } from 'mongodb'

const MONGO_URI: string = process.env.MONGODB_URI!  // please add your Mongo URI to .env file
const client = new MongoClient( MONGO_URI, {})
const clientPromise = client.connect()

// Export a module-scoped MongoClient promise to be shared across functions
export default clientPromise