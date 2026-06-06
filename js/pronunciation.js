// ============================================================
// pronunciation.js - Pronunciation Module (PRIORITY)
// ============================================================
window.Pronunciation = {
    _handler: null,

    render(container) {
        const data = window.CourseData.pronunciation;
        const studied = Storage.load('pronunciation_studied', []);
        const progress = Math.round((studied.length / data.length) * 100);

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>🔊 Pronunciación Americana</h2>
                <p>Domina los 5 sonidos fundamentales del inglés americano</p>
                <div class="header-stats">
                    <span class="header-stat">📊 ${studied.length}/${data.length} reglas completadas</span>
                    <span class="header-stat">⭐ Prioridad: Alta</span>
                </div>
            </div>

            <div class="module-progress" style="margin-bottom: 2rem;">
                <div class="module-progress-bar" style="height:10px;">
                    <div class="module-progress-fill" style="width:${progress}%;background:var(--color-pronunciation)"></div>
                </div>
                <span class="module-progress-text">${progress}% completado</span>
            </div>

            <h3 class="section-title">🎯 Las 5 Reglas Fundamentales</h3>
            ${data.map((rule, i) => `
                <div class="lesson-card pronunciation-rule ${studied.includes(rule.id) ? 'completed' : ''}" data-rule-id="${rule.id}">
                    <div class="lesson-card-header" data-toggle="${i}">
                        <div class="lesson-card-icon" style="background:rgba(139,92,246,0.15)">${rule.icon}</div>
                        <div class="lesson-card-info">
                            <div class="lesson-card-title">${rule.title}</div>
                            <div class="lesson-card-subtitle">${rule.explanation.substring(0, 80)}...</div>
                        </div>
                        <span class="lesson-card-status">${studied.includes(rule.id) ? '✅' : ''}</span>
                        <span class="lesson-card-toggle">▼</span>
                    </div>
                    <div class="lesson-card-body">
                        <div class="lesson-card-content">
                            <div class="rule-explanation">
                                <strong>📖 Explicación:</strong><br>${rule.explanation}
                            </div>
                            <div class="tip-box">
                                <h4>🎯 Cómo articularlo:</h4>
                                <p>${rule.howTo}</p>
                            </div>
                            <h4 style="margin:1.5rem 0 0.5rem">🔊 Palabras de Práctica</h4>
                            <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:0.75rem">Haz clic en cada palabra para escuchar la pronunciación</p>
                            <div class="word-grid">
                                ${rule.words.map(w => `
                                    <div class="word-chip" data-word="${w.word}">
                                        <span class="speaker-btn">🔊</span>
                                        <div>
                                            <strong>${w.word}</strong>
                                            <div style="font-size:0.75rem;color:var(--color-pronunciation);font-style:italic">${w.phonetic}</div>
                                            <div style="font-size:0.7rem;color:var(--text-muted)">${w.spanish}</div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                            <div class="tip-box" style="background:rgba(245,158,11,0.1);border-color:rgba(245,158,11,0.2);border-left-color:var(--accent)">
                                <h4>💡 Tip para hispanohablantes:</h4>
                                <p>${rule.tip}</p>
                            </div>
                            <div class="complete-btn-wrapper">
                                ${studied.includes(rule.id) 
                                    ? '<button class="btn btn-outline" disabled>✅ Completado</button>'
                                    : `<button class="btn btn-primary mark-complete-btn" data-rule="${rule.id}">Marcar como estudiado (+10 XP)</button>`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}

            <h3 class="section-title" style="margin-top:2.5rem">🎵 Patrones de Entonación</h3>
            ${window.CourseData.intonation.map(int => `
                <div class="glass-card" style="margin-bottom:1rem">
                    <h4>${int.pattern}</h4>
                    <p style="color:var(--text-secondary);font-size:0.9rem;margin:0.5rem 0">${int.description}</p>
                    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
                        ${int.examples.map(ex => `<span class="word-chip" data-word="${ex.replace(/[↘↗]/g,'').trim()}" style="flex:none"><span class="speaker-btn">🔊</span> ${ex}</span>`).join('')}
                    </div>
                </div>
            `).join('')}

            <h3 class="section-title" style="margin-top:2.5rem">⚠️ Errores Comunes de Hispanohablantes</h3>
            ${window.CourseData.spanishErrors.map(err => `
                <div class="glass-card" style="margin-bottom:1rem;border-left:3px solid var(--error)">
                    <h4 style="color:var(--error-light)">${err.error}</h4>
                    <p style="color:var(--text-secondary);font-size:0.9rem;margin:0.5rem 0">${err.explanation}</p>
                    <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-top:0.75rem">
                        ${err.pairs.map(p => `<div class="word-chip" data-word="${p[0].replace(/[✓✗"]/g,'').trim()}" style="flex:none"><span class="speaker-btn">🔊</span> <strong>${p[0]}</strong> vs <strong>${p[1]}</strong></div>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>`;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const toggle = e.target.closest('[data-toggle]');
            if (toggle) {
                const card = toggle.closest('.lesson-card');
                card.classList.toggle('expanded');
            }
            const wordChip = e.target.closest('.word-chip');
            if (wordChip) {
                const word = wordChip.dataset.word;
                if (word) window.App.speak(word);
                wordChip.style.transform = 'scale(0.95)';
                setTimeout(() => wordChip.style.transform = '', 150);
            }
            const completeBtn = e.target.closest('.mark-complete-btn');
            if (completeBtn) {
                const ruleId = completeBtn.dataset.rule;
                const studied = Storage.load('pronunciation_studied', []);
                if (!studied.includes(ruleId)) {
                    studied.push(ruleId);
                    Storage.save('pronunciation_studied', studied);
                    window.App.addXP(10);
                    window.App.completeLesson('pron_' + ruleId);
                    this.render(container);
                    this.init();
                    if (studied.length >= 5) {
                        window.App.addXP(20);
                        window.App.showToast('🏆 ¡Completaste todas las reglas de pronunciación!', 'achievement', 5000);
                    }
                }
            }
        };
        container.addEventListener('click', this._handler);
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
    }
};
