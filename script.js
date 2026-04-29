function toggleChat() {
  const win = document.getElementById('chat-window');
  win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
}

function sendMsg() {
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');
  const text = input.value.trim();
  if (!text) return;

  messages.innerHTML += `<div class="user-msg">${text}</div>`;
  messages.innerHTML += `<div class="bot-msg">I'm still learning... check back soon 👾</div>`;
  input.value = '';
  messages.scrollTop = messages.scrollHeight;
}