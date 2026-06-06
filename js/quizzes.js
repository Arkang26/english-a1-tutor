// ============================================================
// quizzes.js - Quiz Module
// ============================================================
window.Quizzes = {
    _handler: null,

    render(container) {
        const bestScores = Storage.load('quiz_best_scores', {});
        const quizTypes = [
            { id: 'grammar', icon: '📝', name: 'Gramática', count: window.CourseData.quizzes.grammar.length, color: 'var(--color-grammar)' },
            { id: 'vocabulary', icon: '📖', name: 'Vocabulario', count: window.CourseData.quizzes.vocabulary.length, color: 'var(--color-vocabulary)' },
            { id: 'pronunciation', icon: '🔊', name: 'Pronunciación', count: window.CourseData.quizzes.pronunciation.length, color: 'var(--color-pronunciation)' },
            { id: 'mixed', icon: '🎲', name: 'Mixto', count: 10, color: 'var(--color-quizzes)' }
        ];

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>🎯 Quizzes y Ejercicios</h2>
                <p>Pon a prueba tu conocimiento del inglés A1</p>
            </div>
            <div class="quiz-types">
                ${quizTypes.map(qt => `
                    <div class="quiz-type-card glass-card" data-quiz-type="${qt.id}" style="cursor:pointer">
                        <div class="quiz-icon">${qt.icon}</div>
                        <div class="quiz-name">${qt.name}</div>
                        <div class="quiz-count">${qt.count} preguntas</div>
                        ${bestScores[qt.id] !== undefined ? `<div style="margin-top:0.5rem;font-size:0.8rem;color:var(--accent)">🏆 Mejor: ${bestScores[qt.id]}%</div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>`;
    },

    _startQuiz(container, type) {
        let questions;
        const data = window.CourseData.quizzes;
        if (type === 'mixed') {
            questions = [...data.grammar, ...data.vocabulary, ...data.pronunciation].sort(() => Math.random() - 0.5).slice(0, 10);
        } else {
            questions = [...data[type]].sort(() => Math.random() - 0.5);
        }

        let current = 0, score = 0;

        const renderQ = () => {
            if (current >= questions.length) {
                const pct = Math.round(score / questions.length * 100);
                const bestScores = Storage.load('quiz_best_scores', {});
                if (!bestScores[type] || pct > bestScores[type]) {
                    bestScores[type] = pct;
                    Storage.save('quiz_best_scores', bestScores);
                }
                if (pct === 100) { Storage.save('quiz_perfect', true); window.App.checkAchievements(); }

                container.innerHTML = `
                <div class="quiz-score fade-in">
                    <div class="score-circle ${pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'poor'}">${pct}%</div>
                    <h2>${pct >= 80 ? '🎉 ¡Excelente!' : pct >= 50 ? '👍 ¡Bien hecho!' : '💪 ¡Sigue practicando!'}</h2>
                    <p style="color:var(--text-secondary);margin:0.5rem 0">${score} de ${questions.length} correctas</p>
                    <p style="color:var(--accent);font-weight:700;margin-bottom:2rem">+${score * 5} XP ganados</p>
                    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
                        <button class="btn btn-primary" data-retry="${type}">🔄 Repetir Quiz</button>
                        <button class="btn btn-outline" data-back-quiz>← Otros Quizzes</button>
                    </div>
                </div>`;
                this.init();
                return;
            }

            const q = questions[current];
            container.innerHTML = `
            <div class="quiz-container fade-in">
                <button class="btn btn-outline back-btn" data-back-quiz>← Salir</button>
                <div class="quiz-progress"><div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(current/questions.length)*100}%"></div></div>
                <div class="quiz-progress-text">Pregunta ${current + 1} de ${questions.length}</div></div>
                <div class="quiz-question-card">
                    <div class="quiz-question-text">${q.q}</div>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `<button class="quiz-option" data-qa="${opt}"><span class="option-letter">${String.fromCharCode(65+i)}</span>${opt}</button>`).join('')}
                    </div>
                    <div class="exercise-feedback" id="quiz-fb"></div>
                </div>
            </div>`;

            container.querySelectorAll('.quiz-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    const selected = btn.dataset.qa;
                    const isCorrect = selected === q.answer;
                    if (isCorrect) { score++; window.App.addXP(5); btn.classList.add('correct'); }
                    else { btn.classList.add('incorrect'); container.querySelector(`[data-qa="${q.answer}"]`).classList.add('correct'); }
                    container.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
                    const fb = document.getElementById('quiz-fb');
                    fb.className = `exercise-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
                    fb.innerHTML = (isCorrect ? '✅ ¡Correcto! ' : '❌ Respuesta: <strong>' + q.answer + '</strong>. ') + q.explanation;
                    setTimeout(() => { current++; renderQ(); }, 2000);
                });
            });
            this.init();
        };
        renderQ();
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const typeCard = e.target.closest('.quiz-type-card');
            if (typeCard) { this._startQuiz(container, typeCard.dataset.quizType); }
            const backBtn = e.target.closest('[data-back-quiz]');
            if (backBtn) { this.render(container); this.init(); }
            const retryBtn = e.target.closest('[data-retry]');
            if (retryBtn) { this._startQuiz(container, retryBtn.dataset.retry); }
        };
        container.addEventListener('click', this._handler);
    },

    cleanup() {
        const container = document.getElementById('content');
        if (this._handler) container.removeEventListener('click', this._handler);
    }
};
