// chat.js
const chatAppId = 'YOUR_PHOTON_APP_ID'; // Replace with your actual AppId
const chatClient = new Photon.Chat.ChatClient();

// Connect to Photon Chat
chatClient.connect(chatAppId);

// Subscribe to a chat channel (e.g., "general")
chatClient.subscribe('general');

// Handle incoming messages
chatClient.onMessageReceived = (channel, user, message) => {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML += `<p><strong>${user}</strong>: ${message}</p>`;
};

// Send a message
function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value;
    chatClient.publishMessage('general', message);
    input.value = ''; // Clear input field
}
