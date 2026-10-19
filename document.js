document.addEventListener('DOMContentLoaded', () => {

    // --- Server Status Tracker ---
    const playerCount = document.getElementById('playerCount');
    // Generates a dynamic realistic mock lobby count
    playerCount.textContent = Math.floor(Math.random() * (1450 - 1100 + 1)) + 1100;

    // --- Copy Server IP Address Utility ---
    const copyBtn = document.getElementById('copyIpBtn');
    copyBtn.addEventListener('click', () => {
        const ipText = "://phantomnet.com";
        navigator.clipboard.writeText(ipText).then(() => {
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> IP Copied!`;
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        });
    });

    // --- Interactive Chat Engine Simulation ---
    const chatMessages = document.getElementById('chatMessages');
    const chatForm = document.getElementById('chatForm');
    const usernameInput = document.getElementById('usernameInput');
    const messageInput = document.getElementById('messageInput');

    // Preloaded network chat message instances
    const baseBotMessages = [
        { user: "GamerTag_99", text: "Anyone down to form a new faction on Realm 1?" },
        { user: "Vortex_Builds", text: "The skyblock economy wipe is exactly what we needed, so much fairer now." },
        { user: "Mod_Shadow", text: "Remember to report any glitch abusers in our discord ticket system folks!" },
        { user: "MinerPro", text: "Just pulled a legendary crate reward out of survival let's gooo!" }
    ];

    // Seed chat box with default entries
    baseBotMessages.forEach(msg => insertMessage(msg.user, msg.text, false));

    // Handle incoming user entries
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const message = messageInput.value.trim();

        if(!username || !message) return;

        // Render user message layout container block
        insertMessage(username, message, true);
        messageInput.value = '';

        // Trigger an automated bot reply a few seconds later to simulate network activity
        setTimeout(() => {
            const replies = [
                "Yo welcome to the network!",
                "Factions server is popping off right now.",
                "Is anyone trading diamonds on Survival?",
                "That build is insane."
            ];
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            const randomBot = "PhantomPlayer_" + Math.floor(Math.random() * 900);
            insertMessage(randomBot, randomReply, false);
        }, 1500);
    });

    function insertMessage(user, text, isUser) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message');
        if(isUser) msgDiv.classList.add('user-sent');

        msgDiv.innerHTML = `
            <span class="msg-meta">${user}</span>
            <span class="msg-text">${text}</span>
        `;

        chatMessages.appendChild(msgDiv);
        // Automatically slide window down onto latest entries
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
