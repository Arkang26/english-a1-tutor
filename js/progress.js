// ============================================================
// progress.js - Progress Dashboard Module
// ============================================================
window.Progress = {
    _handler: null,

    render(container) {
        const state = window.App.getState();
        const user = state.user;
        const pronStudied = Storage.load('pronunciation_studied', []);
        const gramCompleted = Storage.load('grammar_completed', []);
        const vocabLearned = Storage.load('vocab_learned', []);
        const dialoguesCompleted = Storage.load('dialogues_completed', []);
        const leitnerCards = Storage.load('leitner_cards', []);
        const box5 = leitnerCards.filter(c => c.box === 5).length;
        const goldlistDist = Storage.load('goldlist_distillations', 0);
        const bestScores = Storage.load('quiz_best_scores', {});
        const bestQuiz = Math.max(0, ...Object.values(bestScores));
        const a1Checks = Storage.load('a1_checklist', {});
        const a1Items = window.CourseData.a1Checklist;
        const a1Done = Object.values(a1Checks).filter(v => v).length;
        const achievements = window.CourseData.achievements;
        const earned = user.achievements || [];
        const xpForLevel = user.xp % 100;

        const modules = [
            { icon: '🔊', name: 'Pronunciación', done: pronStudied.length, total: 5, color: 'var(--color-pronunciation)' },
            { icon: '📝', name: 'Gramática', done: gramCompleted.length, total: 8, color: 'var(--color-grammar)' },
            { icon: '📖', name: 'Vocabulario', done: vocabLearned.length, total: 96, color: 'var(--color-vocabulary)' },
            { icon: '💬', name: 'Diálogos', done: dialoguesCompleted.length, total: 6, color: 'var(--color-dialogues)' },
            { icon: '🃏', name: 'Flashcards (Caja 5)', done: box5, total: leitnerCards.length || 96, color: 'var(--color-flashcards)' },
            { icon: '📓', name: 'Goldlist', done: goldlistDist, total: Math.max(goldlistDist, 1), color: 'var(--color-goldlist)' },
            { icon: '🎯', name: 'Mejor Quiz', done: bestQuiz, total: 100, color: 'var(--color-quizzes)', suffix: '%' }
        ];

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>📊 Mi Progreso</h2>
                <p>Tu camino al dominio del inglés A1 americano</p>
            </div>

            <div class="progress-overview">
                <div class="progress-card glass-card">
                    <div class="progress-icon">🔥</div>
                    <div class="progress-value">${user.streak}</div>
                    <div class="progress-label">Días de racha</div>
                </div>
                <div class="progress-card glass-card">
                    <div class="progress-icon">⚡</div>
                    <div class="progress-value">${user.xp}</div>
                    <div class="progress-label">XP Total (Nivel ${user.level})</div>
                </div>
                <div class="progress-card glass-card">
                    <div class="progress-icon">📖</div>
                    <div class="progress-value">${user.wordsLearned}</div>
                    <div class="progress-label">Palabras aprendidas</div>
                </div>
                <div class="progress-card glass-card">
                    <div class="progress-icon">✅</div>
                    <div class="progress-value">${user.completedLessons.length}</div>
                    <div class="progress-label">Lecciones completadas</div>
                </div>
            </div>

            <div class="glass-card" style="margin-bottom:2rem">
                <h4>📈 Nivel ${user.level} — Progreso al Nivel ${user.level + 1}</h4>
                <div style="margin-top:1rem">
                    <div class="module-progress-bar" style="height:12px"><div class="module-progress-fill" style="width:${xpForLevel}%;background:linear-gradient(90deg,var(--primary),var(--accent))"></div></div>
                    <p style="text-align:center;font-size:0.85rem;color:var(--text-muted);margin-top:0.5rem">${xpForLevel}/100 XP</p>
                </div>
            </div>

            <h3 class="section-title">📊 Progreso por Módulo</h3>
            <div class="module-progress-list" style="margin-bottom:2rem">
                ${modules.map(m => {
                    const pct = Math.min(Math.round(m.done / m.total * 100), 100);
                    return `
                    <div class="module-progress-row">
                        <span class="row-icon">${m.icon}</span>
                        <span class="row-name">${m.name}</span>
                        <div class="row-bar"><div class="row-fill" style="width:${pct}%;background:${m.color}"></div></div>
                        <span class="row-percent">${m.done}${m.suffix || ''}/${m.total}${m.suffix || ''}</span>
                    </div>`;
                }).join('')}
            </div>

            <h3 class="section-title">✅ Checklist A1 (MCER)</h3>
            <div class="glass-card" style="margin-bottom:2rem">
                <div class="module-progress" style="margin-bottom:1rem">
                    <div class="module-progress-bar" style="height:8px"><div class="module-progress-fill" style="width:${Math.round(a1Done/a1Items.length*100)}%;background:var(--success)"></div></div>
                    <span class="module-progress-text">${a1Done}/${a1Items.length}</span>
                </div>
                <div class="checklist">
                    ${a1Items.map((item, i) => `
                        <div class="checklist-item ${a1Checks[i] ? 'checked' : ''}" data-check="${i}">
                            <div class="checklist-checkbox"></div>
                            <span class="checklist-text">${item}</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <h3 class="section-title">🏆 Logros (${earned.length}/${achievements.length})</h3>
            <div class="achievements-grid" style="margin-bottom:2rem">
                ${achievements.map(ach => {
                    const isEarned = earned.includes(ach.id);
                    return `
                    <div class="achievement-card ${isEarned ? 'earned' : 'locked'}">
                        <div class="ach-icon">${ach.icon}</div>
                        <div class="ach-title">${ach.title}</div>
                        <div class="ach-desc">${ach.description}</div>
                    </div>`;
                }).join('')}
            </div>

            <div style="text-align:center;margin-top:2rem;display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
                <button class="btn btn-gold" data-share-progress>📋 Enviar Reporte de Progreso</button>
                <button class="btn btn-sm btn-outline" data-reset-progress>🗑️ Reiniciar Progreso</button>
            </div>
        </div>`;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const checkItem = e.target.closest('.checklist-item');
            if (checkItem) {
                const idx = parseInt(checkItem.dataset.check);
                const checks = Storage.load('a1_checklist', {});
                checks[idx] = !checks[idx];
                Storage.save('a1_checklist', checks);
                
                const state = window.App.getState();
                state.user.a1Checklist = checks;
                window.App.saveState();
                window.App.checkAchievements();
                
                checkItem.classList.toggle('checked');
            }
            const shareBtn = e.target.closest('[data-share-progress]');
            if (shareBtn) {
                window.App.shareProgress();
            }
            const resetBtn = e.target.closest('[data-reset-progress]');
            if (resetBtn) {
                if (confirm('⚠️ ¿Estás seguro? Esto borrará TODO tu progreso, XP, racha y logros. No se puede deshacer.')) {
                    Storage.clear();
                    location.reload();
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
