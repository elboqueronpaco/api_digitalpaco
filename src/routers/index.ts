import express from 'express'
//Importing Routers
import usersRoutes from './users'

const Router = express()

//Router
Router.use('/api/users', usersRoutes)


export default Router
