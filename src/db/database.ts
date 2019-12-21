import { Pool } from 'pg'
import { USERNAME, HOST, PASSWORD, DATABASE } from '../config/index'

export const pool = new Pool({
    user: USERNAME,
    host: HOST,
    password: PASSWORD,
    database: DATABASE,
    port: 5432
})