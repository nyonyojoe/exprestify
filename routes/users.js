import express from 'express';
import {getUser, getUsers, deleteUser, updateUser, createUser} from '../controllers/users.js'
const router = express.Router()


router.get('/', getUsers)

router.post('/', createUser)

router.get('/:id', getUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)
// module.exports = router;
export default router;
