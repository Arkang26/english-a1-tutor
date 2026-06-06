// ============================================================
// dialogues.js - Dialogues Module
// ============================================================
window.Dialogues = {
    _handler: null,
    _currentDialogue: null,

    render(container) {
        if (this._currentDialogue !== null) {
            this._renderDialogue(container, this._currentDialogue);
        } else {
            this._renderList(container);
        }
    },

    _renderList(container) {
        const dialogues = window.CourseData.dialogues;
        const completed = Storage.load('dialogues_completed', []);

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>💬 Diálogos Situacionales</h2>
                <p>Practica conversaciones reales en inglés americano</p>
                <div class="header-stats">
                    <span class="header-stat">📊 ${completed.length}/${dialogues.length} completados</span>
                </div>
            </div>
            <div class="dialogue-list">
                ${dialogues.map((d, i) => `
                    <div class="dialogue-card glass-card" data-dialogue="${i}" style="cursor:pointer">
                        <div style="display:flex;align-items:center;gap:1rem">
                            <span style="font-size:2rem">${d.icon}</span>
                            <div style="flex:1">
                                <h4>${d.title}</h4>
                                <p style="font-size:0.85rem;color:var(--text-secondary)">${d.situation}</p>
                            </div>
                            <span>${completed.includes(d.id) ? '✅' : '▶️'}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    _renderDialogue(container, idx) {
        const d = window.CourseData.dialogues[idx];
        const completed = Storage.load('dialogues_completed', []);
        const showTranslations = Storage.load('dialogue_show_trans', true);

        container.innerHTML = `
        <div class="fade-in">
            <button class="btn btn-outline back-btn" data-back>← Volver a diálogos</button>
            <div class="page-header">
                <h2>${d.icon} ${d.title}</h2>
                <p>${d.situation}</p>
            </div>
            <div style="display:flex;gap:0.75rem;margin-bottom:1.5rem;flex-wrap:wrap">
                <button class="btn btn-sm ${showTranslations ? 'btn-primary' : 'btn-outline'}" data-toggle-trans>
                    ${showTranslations ? '👁️ Ocultar traducciones' : '👁️ Mostrar traducciones'}
                </button>
                <button class="btn btn-sm btn-outline" data-play-all>🔊 Reproducir todo</button>
            </div>
            <div class="chat-container">
                ${d.lines.map((line, i) => `
                    <div class="chat-bubble ${line.speaker === 'A' ? 'left' : 'right'}" style="animation-delay:${i * 0.1}s">
                        <div class="chat-speaker">${line.speaker === 'A' ? '👤 Persona A' : '👤 Persona B'}</div>
                        <div class="chat-english">${line.en}</div>
                        ${showTranslations ? `<div class="chat-spanish">${line.es}</div>` : ''}
                        <span class="speaker-btn" data-speak-line="${line.en}">🔊</span>
                    </div>
                `).join('')}
            </div>
            <div class="glass-card" style="margin-top:2rem">
                <h4>🔑 Frases Clave</h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
                    ${d.keyPhrases.map(p => `<span class="word-chip" data-speak-line="${p}" style="flex:none"><span class="speaker-btn">🔊</span> ${p}</span>`).join('')}
                </div>
            </div>
            <div class="tip-box grammar" style="margin-top:1rem">
                <h4>📝 Notas de Gramática</h4>
                <p>${d.grammarNotes}</p>
            </div>
            <div class="complete-btn-wrapper">
                ${completed.includes(d.id)
                    ? '<button class="btn btn-outline" disabled>✅ Completado</button>'
                    : `<button class="btn btn-success mark-dialogue-done" data-did="${d.id}">✅ Marcar como completado (+15 XP)</button>`
                }
            </div>
        </div>`;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const card = e.target.closest('.dialogue-card');
            if (card) { this._currentDialogue = parseInt(card.dataset.dialogue); this.render(container); this.init(); return; }
            const back = e.target.closest('[data-back]');
            if (back) { this._currentDialogue = null; this.render(container); this.init(); return; }
            const speakLine = e.target.closest('[data-speak-line]');
            if (speakLine) { window.App.speak(speakLine.dataset.speakLine); }
            const toggleTrans = e.target.closest('[data-toggle-trans]');
            if (toggleTrans) {
                const current = Storage.load('dialogue_show_trans', true);
                Storage.save('dialogue_show_trans', !current);
                this.render(container); this.init();
            }
            const playAll = e.target.closest('[data-play-all]');
            if (playAll) {
                const d = window.CourseData.dialogues[this._currentDialogue];
                let i = 0;
                const playNext = () => {
                    if (i < d.lines.length) {
                        window.App.speak(d.lines[i].en);
                        i++;
                        setTimeout(playNext, 3000);
                    }
                };
                playNext();
            }
            const doneBtn = e.target.closest('.mark-dialogue-done');
            if (doneBtn) {
                const did = doneBtn.dataset.did;
                const completed = Storage.load('dialogues_completed', []);
                if (!completed.includes(did)) {
                    completed.push(did);
                    Storage.save('dialogues_completed', completed);
                    window.App.addXP(15);
                    window.App.completeLesson('dialogue_' + did);
                    this.render(container); this.init();
                }
            }
        };
        container.addEventListener('click', this._handler);
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
        this._currentDialogue = null;
    }
};
