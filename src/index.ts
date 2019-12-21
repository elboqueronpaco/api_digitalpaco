//Dependecies
import express, { json } from 'express'
import {
    PORT
} from './config/index'
import Routers from './routers/index'

//Iniciacion app
const app = express()

//middlewares
app.use(json())

//Routers
app.use(Routers)
//correndo el servidor
app.listen(PORT, () => {
    console.log(`Servido corriendo en http://localhost:${PORT}/api`)
})