const router = require('express').Router();
const api =  require('./api')
const viewRoutes =  require('./view_routes')


router.use('/api', api)
router.use('/', viewRoutes)

module.exports = router;