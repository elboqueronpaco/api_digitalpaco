import { Router } from 'express'
//Import controller user
import { getUsers, getUserbyId, createUser } from '../controllers/user.controller'
const router = Router()
router.get('/', getUsers)
router.get('/:id', getUserbyId)
router.post('/', createUser)
export default router
