import config from './config.json'

const serverPort = config.serverPort
const PORT = process.env.port || serverPort
const HOST = config.db.host
const DIALECT = config.db.dialect
const USERNAME = config.db.username 
const PASSWORD = config.db.password 
const DATABASE = config.db.database 

export{
    PORT,
    HOST,
    DIALECT,
    USERNAME,
    PASSWORD,
    DATABASE 
}