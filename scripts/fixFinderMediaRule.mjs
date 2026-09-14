import fs from 'node:fs';

const file = 'src/index.css';
const source = fs.readFileSync(file, 'utf8');
if (!source.includes('+@media (max-width: 640px)')) throw new Error('Expected malformed media rule not found');
fs.writeFileSync(file, source.replace('+@media (max-width: 640px)', '@media (max-width: 640px)'));
