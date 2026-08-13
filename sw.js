// Minimal service worker — just enough to satisfy "installable app" requirements.
// All real data lives in localStorage on the device; nothing here needs network caching logic.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {}); // no-op: let the browser handle all requests normally
