// api/chat.js

const Ably = require('ably/promises');

export default async (req, res) => {
    try {
        const ably = new Ably.Realtime({ key: 'ILKnaA.sN1VZg:5sr1DjlEuTxqt-UEFeWiS7Qm6RT-isFhAxEdcQwXcjw' });
        const channel = ably.channels.get('chat-channel');

        // Handle incoming messages
        channel.subscribe('message', (message) => {
            console.log('Received message:', message.data);
        });

        // Send a message
        channel.publish('message', 'Hello from Ably!');

        res.status(200).json({ message: 'Connected to Ably' });
    } catch (error) {
        console.error('Error connecting to Ably:', error);
        res.status(500).json({ error: 'Failed to connect to Ably' });
    }
};
