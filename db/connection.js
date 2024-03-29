// Imports mongoose module from node_modules
import mongoose from 'mongoose'

// Configures mongoose to use latest mongoDB conection functions 
let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/pokemon_db'

// Establishes connection to mongoose using proper configuration
// 127.0.0.1 Is equivalent to "localhost
mongoose.connect(url, mongooseConfig)

// Establishes connection event listener
mongoose.connection.on('connected', () => console.log('Connected to database!'))

// Establishes disconection event listener
mongoose.connection.on('disconnected', () => console.log('Disconnected from database!'))

// Establishes error event listener
mongoose.connection.on('error', (error) => console.log('Error! ', error))

// Allows the connector to be accessed other documents
export default mongoose.connection
