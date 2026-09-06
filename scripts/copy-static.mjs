import { cpSync } from 'node:fs';
// Keep the original media and the essay's established URL available in production.
cpSync('assets', 'dist/assets', { recursive: true });
cpSync('iat210-researchessay.html', 'dist/iat210-researchessay.html');
