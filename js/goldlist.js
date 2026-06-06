// ============================================================
// goldlist.js - Goldlist Method Module
// ============================================================
window.Goldlist = {
    _handler: null,

    render(container) {
        const lists = Storage.load('goldlists', []);
        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>📓 Cuaderno Goldlist</h2>
                <p>Método de memorización profunda sin esfuerzo consciente</p>
            </div>
            <div class="glass-card" style="margin-bottom:2rem;border-left:3px solid var(--color-goldlist)">
                <h4>📖 ¿Cómo funciona el Método Goldlist?</h4>
                <ol style="padding-left:1.2rem;margin-top:0.75rem;color:var(--text-secondary);font-size:0.9rem;line-height:1.8">
                    <li><strong>Escribe 20 expresiones</strong> español → inglés (Lista Madre)</li>
                    <li><strong>Espera 14 días</strong> sin estudiar esa lista</li>
                    <li><strong>Evalúate:</strong> ~30% se recordará naturalmente</li>
                    <li><strong>Destila</strong> las no recordadas al siguiente cuadrante</li>
                    <li><strong>Repite</strong> el proceso 3 veces más</li>
                </ol>
                <p style="margin-top:0.75rem;font-size:0.85rem;color:var(--text-muted)">💡 Las palabras que sobreviven 3 destilaciones quedan grabadas permanentemente en tu memoria.</p>
            </div>

            <div style="text-align:center;margin-bottom:2rem">
                <button class="btn btn-lg btn-gold create-goldlist-btn">📝 Crear Nueva Lista (20 palabras)</button>
            </div>

            ${lists.length === 0 ? `
                <div class="glass-card" style="text-align:center;padding:3rem">
                    <div style="font-size:3rem;margin-bottom:1rem">📓</div>
                    <h3>Aún no tienes listas</h3>
                    <p style="color:var(--text-secondary)">Crea tu primera Lista Madre para comenzar</p>
                </div>
            ` : `
                <h3 class="section-title">📚 Mis Listas</h3>
                ${lists.map((list, i) => {
                    const created = new Date(list.createdAt);
                    const now = new Date();
                    const daysDiff = Math.floor((now - created) / (1000 * 60 * 60 * 24));
                    const canDistill = daysDiff >= 14 && list.currentQuadrant < 4;
                    const distilled = list.currentQuadrant > 1;
                    return `
                    <div class="glass-card" style="margin-bottom:1rem">
                        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem">
                            <div>
                                <h4>Lista #${i + 1} — Cuadrante ${String.fromCharCode(64 + list.currentQuadrant)}</h4>
                                <p style="font-size:0.85rem;color:var(--text-muted)">Creada: ${created.toLocaleDateString()} · ${list.items.length} expresiones</p>
                            </div>
                            <div style="display:flex;gap:0.5rem">
                                ${canDistill ? `<button class="btn btn-sm btn-gold distill-btn" data-list="${i}">🔬 Destilar</button>` : ''}
                                ${!canDistill && list.currentQuadrant < 4 ? `<span class="header-stat">⏳ Faltan ${14 - daysDiff} días</span>` : ''}
                                ${list.currentQuadrant >= 4 ? '<span class="header-stat" style="color:var(--success)">✅ Completada</span>' : ''}
                                <button class="btn btn-sm btn-outline view-list-btn" data-list="${i}">👁️ Ver</button>
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            `}
        </div>`;
    },

    _createList(container) {
        const vocab = window.CourseData.vocabulary;
        const allWords = [];
        Object.keys(vocab).forEach(cat => {
            vocab[cat].words.forEach(w => allWords.push({ spanish: w.spanish, english: w.english }));
        });
        const selected = allWords.sort(() => Math.random() - 0.5).slice(0, 20);

        const lists = Storage.load('goldlists', []);
        lists.push({
            createdAt: new Date().toISOString(),
            currentQuadrant: 1,
            items: selected,
            distillations: []
        });
        Storage.save('goldlists', lists);
        window.App.addXP(10);
        window.App.showToast('📓 ¡Lista Madre creada! Vuelve en 14 días para destilar.', 'success', 5000);
        this.render(container);
        this.init();
    },

    _distill(container, listIdx) {
        const lists = Storage.load('goldlists', []);
        const list = lists[listIdx];
        let current = 0;
        let remembered = [];
        let forgotten = [];

        const renderItem = () => {
            if (current >= list.items.length) {
                list.distillations.push({ date: new Date().toISOString(), remembered: remembered.length, total: list.items.length });
                list.items = forgotten;
                list.currentQuadrant++;
                list.createdAt = new Date().toISOString();
                Storage.save('goldlists', lists);
                Storage.save('goldlist_distillations', (Storage.load('goldlist_distillations', 0) + 1));
                window.App.addXP(25);
                window.App.checkAchievements();
                
                container.innerHTML = `
                <div class="quiz-score fade-in">
                    <div class="score-circle great">${Math.round(remembered.length / (remembered.length + forgotten.length) * 100)}%</div>
                    <h2>🧠 ¡Destilación Completada!</h2>
                    <p style="color:var(--text-secondary);margin:1rem 0">Recordaste <strong>${remembered.length}</strong> de ${remembered.length + forgotten.length} expresiones sin esfuerzo.</p>
                    <p style="color:var(--text-muted);font-size:0.9rem">${forgotten.length} expresiones pasan al Cuadrante ${String.fromCharCode(64 + list.currentQuadrant)}</p>
                    <button class="btn btn-primary" data-back-gl style="margin-top:1.5rem">Volver al Cuaderno</button>
                </div>`;
                this.init();
                return;
            }

            const item = list.items[current];
            container.innerHTML = `
            <div class="fade-in" style="max-width:600px;margin:0 auto">
                <div class="quiz-progress"><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(current/list.items.length)*100}%"></div></div>
                <div class="quiz-progress-text">${current + 1} de ${list.items.length}</div></div>
                <div class="quiz-question-card" style="text-align:center">
                    <div style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">¿Recuerdas cómo se dice en inglés?</div>
                    <div style="font-size:1.5rem;font-weight:700;margin-bottom:2rem">${item.spanish}</div>
                    <div style="display:flex;gap:1rem;justify-content:center">
                        <button class="btn btn-danger distill-no" data-idx="${current}">❌ No lo recuerdo</button>
                        <button class="btn btn-success distill-yes" data-idx="${current}">✅ Lo recuerdo</button>
                    </div>
                    <div class="tip-box" style="margin-top:1.5rem;text-align:left" id="answer-reveal" hidden>
                        <p>Respuesta: <strong>${item.english}</strong></p>
                    </div>
                </div>
            </div>`;

            container.querySelector('.distill-yes')?.addEventListener('click', () => {
                remembered.push(item); current++; renderItem();
            });
            container.querySelector('.distill-no')?.addEventListener('click', () => {
                document.getElementById('answer-reveal').hidden = false;
                forgotten.push(item);
                setTimeout(() => { current++; renderItem(); }, 2000);
            });
        };
        renderItem();
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            if (e.target.closest('.create-goldlist-btn')) { this._createList(container); }
            if (e.target.closest('.distill-btn')) { this._distill(container, parseInt(e.target.closest('.distill-btn').dataset.list)); }
            if (e.target.closest('[data-back-gl]')) { this.render(container); this.init(); }
            if (e.target.closest('.view-list-btn')) {
                const idx = parseInt(e.target.closest('.view-list-btn').dataset.list);
                const lists = Storage.load('goldlists', []);
                const list = lists[idx];
                window.App.showToast(`Lista tiene ${list.items.length} expresiones en Cuadrante ${String.fromCharCode(64 + list.currentQuadrant)}`, 'info');
            }
        };
        container.addEventListener('click', this._handler);
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
    }
};
