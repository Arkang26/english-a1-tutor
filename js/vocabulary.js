// ============================================================
// vocabulary.js - Vocabulary Module
// ============================================================
window.Vocabulary = {
    _handler: null,
    _currentCategory: null,

    render(container) {
        if (this._currentCategory) {
            this._renderCategory(container, this._currentCategory);
        } else {
            this._renderCategoryGrid(container);
        }
    },

    _renderCategoryGrid(container) {
        const vocab = window.CourseData.vocabulary;
        const categories = Object.keys(vocab);
        const totalWords = categories.reduce((sum, cat) => sum + vocab[cat].words.length, 0);
        const learnedWords = Storage.load('vocab_learned', []);

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>📖 Vocabulario Temático</h2>
                <p>Aprende más de ${totalWords} palabras esenciales del nivel A1</p>
                <div class="header-stats">
                    <span class="header-stat">📊 ${learnedWords.length}/${totalWords} palabras aprendidas</span>
                </div>
            </div>
            <div class="category-grid">
                ${categories.map(key => {
                    const cat = vocab[key];
                    const catLearned = learnedWords.filter(w => w.startsWith(key + '_')).length;
                    return `
                    <div class="category-card glass-card" data-category="${key}" style="--module-color:${cat.color}">
                        <div class="cat-icon">${cat.icon}</div>
                        <div class="cat-name">${cat.name}</div>
                        <div class="cat-count">${catLearned}/${cat.words.length} palabras</div>
                        <div class="module-progress" style="margin-top:0.75rem">
                            <div class="module-progress-bar"><div class="module-progress-fill" style="width:${Math.round(catLearned/cat.words.length*100)}%;background:${cat.color}"></div></div>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
    },

    _renderCategory(container, catKey) {
        const cat = window.CourseData.vocabulary[catKey];
        if (!cat) return;
        const learned = Storage.load('vocab_learned', []);

        container.innerHTML = `
        <div class="fade-in">
            <button class="btn btn-outline back-btn" data-back>← Volver a categorías</button>
            <div class="page-header">
                <h2>${cat.icon} ${cat.name}</h2>
                <p>${learned.filter(w => w.startsWith(catKey + '_')).length}/${cat.words.length} palabras aprendidas</p>
            </div>
            <div class="vocab-grid">
                ${cat.words.map((word, i) => {
                    const wordId = catKey + '_' + word.english;
                    const isLearned = learned.includes(wordId);
                    return `
                    <div class="vocab-card glass-card">
                        <div style="display:flex;justify-content:space-between;align-items:start">
                            <div>
                                <div class="word-english">${word.english}</div>
                                <div class="word-phonetic">/${word.phonetic}/</div>
                                <div class="word-spanish">${word.spanish}</div>
                            </div>
                            <button class="btn btn-icon" data-speak="${word.english}" style="font-size:1.3rem" title="Escuchar">🔊</button>
                        </div>
                        <div class="word-example">"${word.example}"</div>
                        <div class="word-example-es">${word.exampleEs}</div>
                        <div class="word-tags">
                            ${word.countable !== false ? '<span class="tag">Contable</span>' : '<span class="tag">Incontable</span>'}
                            ${isLearned ? '<span class="tag learned">✅ Aprendida</span>' : `<button class="btn btn-sm btn-success learn-word-btn" data-learn="${wordId}">+ Aprendida</button>`}
                        </div>
                    </div>`;
                }).join('')}
            </div>
            <div style="text-align:center;margin-top:2rem">
                <button class="btn btn-gold quick-quiz-btn" data-cat="${catKey}">🎯 Quiz Rápido de esta categoría</button>
            </div>
        </div>`;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const catCard = e.target.closest('.category-card');
            if (catCard) {
                this._currentCategory = catCard.dataset.category;
                this.render(container);
                this.init();
                return;
            }
            const backBtn = e.target.closest('[data-back]');
            if (backBtn) {
                this._currentCategory = null;
                this.render(container);
                this.init();
                return;
            }
            const speakBtn = e.target.closest('[data-speak]');
            if (speakBtn) {
                window.App.speak(speakBtn.dataset.speak);
            }
            const learnBtn = e.target.closest('.learn-word-btn');
            if (learnBtn) {
                const wordId = learnBtn.dataset.learn;
                const learned = Storage.load('vocab_learned', []);
                if (!learned.includes(wordId)) {
                    learned.push(wordId);
                    Storage.save('vocab_learned', learned);
                    window.App.addWordsLearned(1);
                    window.App.addXP(2);
                    learnBtn.outerHTML = '<span class="tag learned">✅ Aprendida</span>';
                }
            }
            const quizBtn = e.target.closest('.quick-quiz-btn');
            if (quizBtn) {
                this._startQuickQuiz(container, quizBtn.dataset.cat);
            }
        };
        container.addEventListener('click', this._handler);
    },

    _startQuickQuiz(container, catKey) {
        const cat = window.CourseData.vocabulary[catKey];
        const words = [...cat.words].sort(() => Math.random() - 0.5).slice(0, 5);
        let current = 0, score = 0;

        const renderQuestion = () => {
            if (current >= words.length) {
                container.innerHTML = `
                <div class="quiz-score fade-in">
                    <div class="score-circle ${score >= 4 ? 'great' : score >= 3 ? 'good' : 'poor'}">${score}/${words.length}</div>
                    <h2>${score >= 4 ? '🎉 ¡Excelente!' : score >= 3 ? '👍 ¡Bien hecho!' : '💪 ¡Sigue practicando!'}</h2>
                    <p style="color:var(--text-secondary);margin:1rem 0">Ganaste ${score * 2} XP</p>
                    <button class="btn btn-primary" data-back>Volver a ${cat.name}</button>
                </div>`;
                this.init();
                return;
            }
            const w = words[current];
            const showSpanish = Math.random() > 0.5;
            const question = showSpanish ? `¿Cómo se dice "${w.spanish}" en inglés?` : `¿Qué significa "${w.english}"?`;
            const correctAnswer = showSpanish ? w.english : w.spanish;
            const otherWords = cat.words.filter(x => x.english !== w.english).sort(() => Math.random() - 0.5).slice(0, 3);
            const options = [...otherWords.map(x => showSpanish ? x.english : x.spanish), correctAnswer].sort(() => Math.random() - 0.5);

            container.innerHTML = `
            <div class="quiz-container fade-in">
                <button class="btn btn-outline back-btn" data-back>← Salir del quiz</button>
                <div class="quiz-progress"><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(current/words.length)*100}%"></div></div>
                <div class="quiz-progress-text">Pregunta ${current + 1} de ${words.length}</div></div>
                <div class="quiz-question-card">
                    <div class="quiz-question-text">${question}</div>
                    <div class="quiz-options">
                        ${options.map((opt, i) => `<button class="quiz-option" data-quiz-answer="${opt}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${opt}</button>`).join('')}
                    </div>
                </div>
            </div>`;
            
            container.querySelectorAll('.quiz-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const selected = btn.dataset.quizAnswer;
                    const isCorrect = selected === correctAnswer;
                    if (isCorrect) { score++; window.App.addXP(2); btn.classList.add('correct'); }
                    else { btn.classList.add('incorrect'); container.querySelector(`[data-quiz-answer="${correctAnswer}"]`).classList.add('correct'); }
                    container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                    setTimeout(() => { current++; renderQuestion(); }, 1200);
                });
            });
            this.init();
        };
        renderQuestion();
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
        this._currentCategory = null;
    }
};
