import { Router } from 'express'
import { login } from '../ctr/admin.ctr.js'

let router = Router()

router.post('/login', login )


export default router