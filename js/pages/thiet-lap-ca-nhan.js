import { requireAuth, setViewportHeight } from '../utils.js';
document.addEventListener("DOMContentLoaded", async () => {
  setViewportHeight();
  requireAuth('../login.html');
});
