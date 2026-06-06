// ============================================================
// flashcards.js - Leitner System Flashcards Module
// ============================================================
window.Flashcards = {
    _handler: null,
    _studying: false,
    _currentDeck: null,
    _cardIndex: 0,
    _studyCards: [],

    _initCards() {
        let cards = Storage.load('leitner_cards', null);
        if (!cards) {
            cards = [];
            const vocab = window.CourseData.vocabulary;
            Object.keys(vocab).forEach(catKey => {
                vocab[catKey].words.forEach(w => {
                    cards.push({
                        id: catKey + '_' + w.english,
                        front: w.spanish,
                        back: w.english,
                        phonetic: w.phonetic,
                        example: w.example,
                        box: 1,
                        lastReviewed: null,
                        deck: catKey
                    });
                });
            });
            Storage.save('leitner_cards', cards);
        }
        return cards;
    },

    render(container) {
        if (this._studying) {
            this._renderStudy(container);
        } else {
            this._renderOverview(container);
        }
    },

    _renderOverview(container) {
        const cards = this._initCards();
        const boxCounts = [0, 0, 0, 0, 0];
        cards.forEach(c => boxCounts[c.box - 1]++);
        const boxLabels = ['Diario', 'Cada 2 días', 'Cada 4 días', 'Semanal', '¡Dominado!'];
        const boxColors = ['var(--error)', 'var(--warning)', '#eab308', 'var(--success)', 'var(--info)'];
        const vocab = window.CourseData.vocabulary;

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>🃏 Flashcards - Sistema Leitner</h2>
                <p>Repite las tarjetas hasta dominarlas. Las correctas suben de caja, las incorrectas vuelven a la Caja 1.</p>
            </div>
            <div class="leitner-boxes">
                ${boxCounts.map((count, i) => `
                    <div class="leitner-box ${this._currentDeck === null ? '' : ''}" data-box="${i+1}">
                        <div class="box-num" style="color:${boxColors[i]}">${count}</div>
                        <div class="box-count">tarjetas</div>
                        <div class="box-label">Caja ${i+1}: ${boxLabels[i]}</div>
                    </div>
                `).join('')}
            </div>
            <h3 class="section-title">📂 Seleccionar Mazo</h3>
            <div class="deck-grid">
                <div class="deck-card ${this._currentDeck === null ? 'active' : ''}" data-deck="all">
                    <div class="deck-icon">📚</div>
                    <div class="deck-name">Todas</div>
                    <div class="deck-count">${cards.length} tarjetas</div>
                </div>
                ${Object.keys(vocab).map(key => {
                    const deckCards = cards.filter(c => c.deck === key);
                    return `
                    <div class="deck-card ${this._currentDeck === key ? 'active' : ''}" data-deck="${key}">
                        <div class="deck-icon">${vocab[key].icon}</div>
                        <div class="deck-name">${vocab[key].name}</div>
                        <div class="deck-count">${deckCards.length} tarjetas</div>
                    </div>`;
                }).join('')}
            </div>
            <div style="text-align:center;margin-top:2rem">
                <button class="btn btn-lg btn-primary start-study-btn">🎴 Empezar a Estudiar</button>
            </div>
            <div class="glass-card" style="margin-top:2rem">
                <h4>📊 Estadísticas</h4>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:1rem;text-align:center">
                    <div><div style="font-size:1.5rem;font-weight:800">${cards.length}</div><div style="font-size:0.8rem;color:var(--text-muted)">Total Tarjetas</div></div>
                    <div><div style="font-size:1.5rem;font-weight:800;color:var(--success)">${boxCounts[4]}</div><div style="font-size:0.8rem;color:var(--text-muted)">Dominadas</div></div>
                    <div><div style="font-size:1.5rem;font-weight:800;color:var(--error)">${boxCounts[0]}</div><div style="font-size:0.8rem;color:var(--text-muted)">Por Repasar</div></div>
                </div>
            </div>
        </div>`;
    },

    _renderStudy(container) {
        if (this._cardIndex >= this._studyCards.length) {
            this._studying = false;
            window.App.showToast('🎉 ¡Sesión completada!', 'success');
            this._renderOverview(container);
            this.init();
            return;
        }
        const card = this._studyCards[this._cardIndex];
        const cards = this._initCards();
        const cardData = cards.find(c => c.id === card.id) || card;

        container.innerHTML = `
        <div class="fade-in">
            <button class="btn btn-outline back-btn" data-stop-study>← Terminar sesión</button>
            <div class="quiz-progress"><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(this._cardIndex/this._studyCards.length)*100}%"></div></div>
            <div class="quiz-progress-text">Tarjeta ${this._cardIndex + 1} de ${this._studyCards.length} | Caja ${cardData.box}</div></div>
            <div class="flashcard-area">
                <div class="flashcard" id="flashcard">
                    <div class="flashcard-inner">
                        <div class="flashcard-front">
                            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem">🇪🇸 Español</div>
                            <div class="flashcard-word">${cardData.front}</div>
                            <div class="flashcard-hint">Toca para voltear</div>
                        </div>
                        <div class="flashcard-back">
                            <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem">🇺🇸 English</div>
                            <div class="flashcard-word">${cardData.back}</div>
                            <div class="flashcard-phonetic">/${cardData.phonetic}/</div>
                            <div class="flashcard-example">"${cardData.example}"</div>
                            <button class="btn btn-sm btn-outline" data-speak-card="${cardData.back}" style="margin-top:0.75rem">🔊 Escuchar</button>
                        </div>
                    </div>
                </div>
                <div class="flashcard-actions" id="flashcard-actions" style="display:none">
                    <button class="btn btn-lg btn-danger" data-card-wrong>✗ No lo sé</button>
                    <button class="btn btn-lg btn-success" data-card-right>✓ Lo sé</button>
                </div>
            </div>
        </div>`;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const deckCard = e.target.closest('.deck-card');
            if (deckCard) {
                const deck = deckCard.dataset.deck;
                this._currentDeck = deck === 'all' ? null : deck;
                container.querySelectorAll('.deck-card').forEach(d => d.classList.remove('active'));
                deckCard.classList.add('active');
            }
            const startBtn = e.target.closest('.start-study-btn');
            if (startBtn) {
                const cards = this._initCards();
                let studyCards = this._currentDeck ? cards.filter(c => c.deck === this._currentDeck) : cards;
                studyCards = studyCards.filter(c => c.box < 5).sort(() => Math.random() - 0.5).slice(0, 10);
                if (studyCards.length === 0) {
                    window.App.showToast('No hay tarjetas para repasar', 'info');
                    return;
                }
                this._studyCards = studyCards;
                this._cardIndex = 0;
                this._studying = true;
                this.render(container);
                this.init();
            }
            const stopBtn = e.target.closest('[data-stop-study]');
            if (stopBtn) {
                this._studying = false;
                this.render(container);
                this.init();
            }
            const flashcard = e.target.closest('.flashcard');
            if (flashcard && !flashcard.classList.contains('flipped')) {
                flashcard.classList.add('flipped');
                const actions = document.getElementById('flashcard-actions');
                if (actions) actions.style.display = 'flex';
                const cardData = this._studyCards[this._cardIndex];
                if (cardData) window.App.speak(cardData.back);
            }
            const speakCard = e.target.closest('[data-speak-card]');
            if (speakCard) {
                window.App.speak(speakCard.dataset.speakCard);
            }
            const rightBtn = e.target.closest('[data-card-right]');
            if (rightBtn) {
                this._moveCard(true);
                this._cardIndex++;
                this.render(container);
                this.init();
            }
            const wrongBtn = e.target.closest('[data-card-wrong]');
            if (wrongBtn) {
                this._moveCard(false);
                this._cardIndex++;
                this.render(container);
                this.init();
            }
        };
        container.addEventListener('click', this._handler);
    },

    _moveCard(correct) {
        const cards = this._initCards();
        const studyCard = this._studyCards[this._cardIndex];
        const idx = cards.findIndex(c => c.id === studyCard.id);
        if (idx === -1) return;

        if (correct) {
            cards[idx].box = Math.min(cards[idx].box + 1, 5);
            window.App.addXP(2);
        } else {
            cards[idx].box = 1;
            window.App.addXP(1);
        }
        cards[idx].lastReviewed = new Date().toISOString();
        Storage.save('leitner_cards', cards);

        const box5Count = cards.filter(c => c.box === 5).length;
        Storage.save('leitner_box5', cards.filter(c => c.box === 5).map(c => c.id));
        window.App.checkAchievements();
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
        this._studying = false;
    }
};
