// ============================================================
// storage.js - localStorage Wrapper
// ============================================================
window.Storage = {
    save(key, data) {
        try { localStorage.setItem('tutor_' + key, JSON.stringify(data)); }
        catch(e) { console.warn('Storage save error:', e); }
    },
    load(key, defaultValue) {
        try {
            const data = localStorage.getItem('tutor_' + key);
            return data ? JSON.parse(data) : defaultValue;
        } catch(e) { return defaultValue; }
    },
    remove(key) { localStorage.removeItem('tutor_' + key); },
    clear() {
        Object.keys(localStorage)
            .filter(k => k.startsWith('tutor_'))
            .forEach(k => localStorage.removeItem(k));
    }
};
