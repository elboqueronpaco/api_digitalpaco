import express from 'express'
//Importing Routers
import usersRoutes from './users'
import postsRoutes from './posts'
import tagsRoutes from './tags'

const Router = express()

//Router
Router.use('/api/users', usersRoutes)
Router.use('/api/posts', postsRoutes)
Router.use('/api/tags', tagsRoutes)

export default Router
