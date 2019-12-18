import express,{ json } from 'express'
import morgan from 'morgan'

//Initialization
const app = express()


//middlewares
app.use(morgan('dev'))
app.use(json())

//Routes
import './routers/index'

export default app
