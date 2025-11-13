// Tra cứu nghĩa vụ thuế Page JavaScript

import { requireAuth, setViewportHeight } from '../utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  setViewportHeight();
  await requireAuth('../login.html');
});

