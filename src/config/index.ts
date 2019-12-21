import { serverPort, db, security} from './config'

const SERVERPORT = serverPort
const PORT = process.env.port || SERVERPORT
const HOST = db.host
const DIALECT = db.dialect
const USERNAME = db.username 
const PASSWORD = db.password 
const DATABASE = db.database 
const SECRETKEY = security.secretKey

export{
    PORT,
    HOST,
    DIALECT,
    USERNAME,
    PASSWORD,
    DATABASE,
    SECRETKEY 
}