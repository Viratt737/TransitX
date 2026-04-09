const express = require('express')
const router = express.Router()
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controllers');
router.get('/get-coordinates',authMiddleware.authUser, async (req, res) =>{

})


module.exports = router;