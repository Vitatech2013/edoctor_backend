import { Router } from 'express'

import Doctor from './Doctor'
import Admin from './Admin'
import Patient from './Patient'
import Hospital from './Hospital'

const router = new Router()

router.use('/admin', Admin)
router.use('/Doctor', Doctor)
router.use('/Patient', Patient)
router.use('/Hospital', Hospital)

export default router