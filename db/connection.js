// Imports mongoose module from node_modules
import mongoose from 'mongoose'

// Configures mongoose to use latest mongoDB conection functions 
let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

// Establishes connection to mongoose using proper configuration
// 127.0.0.1 Is equivalent to "localhost
mongoose.connect('mongodb://127.0.0.1:27017/pokemon_db', mongooseConfig)

// Establishes connection event listener
mongoose.connection.on('connected', () => console.log('Connected to database!'))

// Establishes disconection event listener
mongoose.connection.on('disconnected', () => console.log('Disconnected from database!'))

// Establishes error event listener
mongoose.connection.on('error', (error) => console.log('Error! ', error))

// Allows the connector to be accessed other documents
export default mongoose.connection
