// friendRequest.controller.js
const FriendRequest = require("../Models/friendreq.model");

exports.sendFriendRequest = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        const newFriendRequest = new FriendRequest({ sender: senderId, receiver: receiverId });
        await newFriendRequest.save();
        res.status(200).json({ message: 'Friend request sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.acceptFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        const friendRequest = await FriendRequest.findById(requestId);
        if (!friendRequest) {
            return res.status(404).json({ error: 'Friend request not found' });
        }
        friendRequest.status = 'accepted';
        await friendRequest.save();
        res.status(200).json({ message: 'Friend request accepted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.rejectFriendRequest = async (req, res) => {
    try {
        const { requestId } = req.body;
        const friendRequest = await FriendRequest.findById(requestId);
        if (!friendRequest) {
            return res.status(404).json({ error: 'Friend request not found' });
        }
        friendRequest.status = 'rejected';
        await friendRequest.save();
        res.status(200).json({ message: 'Friend request rejected successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
