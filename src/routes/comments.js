const express = require('express');
const router = express.Router();
const { addComments } = require('../controllers/addComments')


router.post('/', [ addComments
]);


module.exports = router;

