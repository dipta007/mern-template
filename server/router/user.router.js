const express = require('express');
const { SOME_THING_WENT_WRONG } = require('../config/constants');
const router = express.Router();
const User = require('../models/user.model');

// get all users
router.get('/', async (req, res) => {
    try {
        // const users = await User.find({});
        res.status(200).json({ success: true, data: SOME_THING_WENT_WRONG });
    } catch (error) {
        res.status(500).json({ success: false, message: SOME_THING_WENT_WRONG });
    }
    }
);

module.exports = router;