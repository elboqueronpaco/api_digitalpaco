import { Request, Response } from 'express'
import { QueryResult} from 'pg'
//import connect
import { pool } from '../db/database'
import { encrypt } from '../utils/security'
const getUsers = async(req: Request, res: Response): Promise<Response> => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM users')
        if (response.rowCount > 0) {
            return res.status(200).json(response.rows)
        }
        return res.status(200).json('No hay ningun usuario')
    } catch (e) {
        return res.status(500).json('Error en el servidor')
    }
}
const getUserbyId = async (req: Request, res: Response): Promise<Response>  =>{
    try {
        const id = parseInt(req.params.id)
        const response: QueryResult = await pool.query('SELECT * FROM users WHERE id = $1',[id])
        if (response.rowCount > 0) {
            return res.status(200).json(response.rows)
        }
        return res.status(200).json('El usuario no existe registrate')
    } catch (e) {
        return res.status(500).json('Error en el servidor')
    }
}

const createUser = async (req:Request, res: Response) => {
    const {username, email }  = req.body
    const password: any = encrypt(req.body.password)
    const response = await pool.query('INSERT INTO users (username, email, password) VALUES($1, $2, $3)', [username, email, password])
    res.json({
        message: 'Usuario registrado correctamente',
        body: {
            user: {username, email}
        }
    })
}
export{
    getUsers,
    getUserbyId, 
    createUser
}