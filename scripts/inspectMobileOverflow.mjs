const targets = await (await fetch('http://127.0.0.1:9222/json')).json();
const target = targets.find(item => item.type === 'page' && item.url.includes('127.0.0.1:5173'));
if (!target) throw new Error('Finder page target not found');

const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

const expression = `JSON.stringify({
  innerWidth: window.innerWidth,
  clientWidth: document.documentElement.clientWidth,
  scrollWidth: document.documentElement.scrollWidth,
  offenders: [...document.querySelectorAll('*')].map(el => {
    const r = el.getBoundingClientRect();
    return { tag: el.tagName, cls: String(el.className).slice(0, 160), left: Math.round(r.left), right: Math.round(r.right), width: Math.round(r.width), text: (el.textContent || '').trim().slice(0, 70) };
  }).filter(x => x.right > window.innerWidth + 1 || x.left < -1).sort((a, b) => b.right - a.right).slice(0, 20)
})`;

socket.send(JSON.stringify({ id: 1, method: 'Runtime.evaluate', params: { expression, returnByValue: true } }));
const result = await new Promise((resolve, reject) => {
  socket.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.id === 1) resolve(message);
  });
  socket.addEventListener('error', reject, { once: true });
});
console.log(result.result.result.value);
socket.close();
