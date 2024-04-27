// friendRequest.route.js
const express = require('express');
const router = express.Router();
const friendRequestController = require('../controllers/friendRequest.controller');

router.post('/send', friendRequestController.sendFriendRequest);
router.post('/accept', friendRequestController.acceptFriendRequest);
router.post('/reject', friendRequestController.rejectFriendRequest);

module.exports = router;
