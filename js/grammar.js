// ============================================================
// grammar.js - Grammar Module
// ============================================================
window.Grammar = {
    _handler: null,

    render(container) {
        const topics = window.CourseData.grammar;
        const completed = Storage.load('grammar_completed', []);

        container.innerHTML = `
        <div class="fade-in">
            <div class="page-header">
                <h2>📝 Gramática A1</h2>
                <p>Aprende las estructuras fundamentales del inglés americano</p>
                <div class="header-stats">
                    <span class="header-stat">📊 ${completed.length}/${topics.length} temas completados</span>
                </div>
            </div>

            ${topics.map((topic, i) => `
                <div class="lesson-card" data-topic-id="${topic.id}">
                    <div class="lesson-card-header" data-toggle="${i}">
                        <div class="lesson-card-icon" style="background:rgba(59,130,246,0.15)">${topic.icon}</div>
                        <div class="lesson-card-info">
                            <div class="lesson-card-title">${topic.title}</div>
                            <div class="lesson-card-subtitle">${topic.explanation.substring(0, 90)}...</div>
                        </div>
                        <span class="lesson-card-status">${completed.includes(topic.id) ? '✅' : ''}</span>
                        <span class="lesson-card-toggle">▼</span>
                    </div>
                    <div class="lesson-card-body">
                        <div class="lesson-card-content">
                            <div class="rule-explanation">${topic.explanation}</div>
                            ${this._renderTopicContent(topic)}
                            ${this._renderExercises(topic)}
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>`;
    },

    _renderTopicContent(topic) {
        let html = '';
        const c = topic.content;
        if (!c) return '';

        if (c.conjugation) {
            html += `<table class="grammar-table"><thead><tr><th>Sujeto</th><th>Verbo</th><th>Contracción</th><th>Ejemplo</th></tr></thead><tbody>`;
            c.conjugation.forEach(row => {
                html += `<tr><td>${row.subject}</td><td class="highlight">${row.verb}</td><td class="highlight">${row.contraction}</td><td>${row.example} <span class="speaker-btn" data-word="${row.example}" style="cursor:pointer">🔊</span></td></tr>`;
            });
            html += `</tbody></table>`;
        }
        if (c.rules) {
            html += `<div class="tip-box grammar"><h4>📌 Reglas Clave:</h4><ul style="margin-top:0.5rem;padding-left:1.2rem;list-style:disc">`;
            c.rules.forEach(r => html += `<li style="margin-bottom:0.3rem;font-size:0.9rem;color:var(--text-secondary)">${r}</li>`);
            html += `</ul></div>`;
        }
        if (c.examples) {
            html += `<div style="margin:1rem 0"><h4 style="margin-bottom:0.5rem">📝 Ejemplos:</h4>`;
            c.examples.forEach(ex => {
                html += `<div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.5rem;font-size:0.9rem"><span class="speaker-btn" data-word="${ex.en}" style="cursor:pointer">🔊</span><strong>${ex.en}</strong><span style="color:var(--text-muted)">— ${ex.es}</span></div>`;
            });
            html += `</div>`;
        }
        if (c.waswere) {
            html += `<table class="grammar-table"><thead><tr><th>Sujeto</th><th>Afirmativo</th><th>Negativo</th></tr></thead><tbody>`;
            c.waswere.forEach(row => html += `<tr><td>${row.subject}</td><td class="highlight">${row.verb}</td><td class="highlight">${row.negative}</td></tr>`);
            html += `</tbody></table>`;
        }
        if (c.irregulars) {
            html += `<div style="margin:1rem 0"><h4 style="margin-bottom:0.5rem">📋 Verbos Irregulares Comunes:</h4><div class="word-grid">`;
            c.irregulars.forEach(([base, past]) => {
                html += `<div class="word-chip" data-word="${past}" style="justify-content:center;text-align:center"><span class="speaker-btn">🔊</span><div><strong>${base}</strong> → <span class="highlight" style="color:var(--accent)">${past}</span></div></div>`;
            });
            html += `</div></div>`;
        }
        if (c.prepositions) {
            html += `<table class="grammar-table"><thead><tr><th>Preposición</th><th>Significado</th><th>Ejemplo</th></tr></thead><tbody>`;
            c.prepositions.forEach(p => {
                html += `<tr><td class="highlight">${p.prep}</td><td>${p.meaning}</td><td>${p.example} <span class="speaker-btn" data-word="${p.example}" style="cursor:pointer">🔊</span></td></tr>`;
            });
            html += `</tbody></table>`;
        }
        return html;
    },

    _renderExercises(topic) {
        if (!topic.exercises) return '';
        const topicState = Storage.load('grammar_ex_' + topic.id, {});
        let html = `<div class="exercise-block"><h4>✏️ Ejercicios de Práctica</h4>`;
        topic.exercises.forEach((ex, i) => {
            const answered = topicState[i];
            html += `
            <div class="exercise-item" data-exercise="${i}" data-topic="${topic.id}">
                <div class="exercise-question">${ex.q.replace('___', '<span class="blank">____</span>')}</div>
                <div class="exercise-options">
                    ${ex.options.map(opt => {
                        let cls = 'exercise-option';
                        if (answered) {
                            if (opt === ex.answer) cls += ' correct';
                            else if (opt === answered && answered !== ex.answer) cls += ' incorrect';
                        }
                        return `<button class="${cls}" data-answer="${opt}" ${answered ? 'disabled' : ''}>${opt}</button>`;
                    }).join('')}
                </div>
                <div class="exercise-feedback ${answered ? 'show' : ''} ${answered === ex.answer ? 'correct' : (answered ? 'incorrect' : '')}">
                    ${answered ? (answered === ex.answer ? '✅ ¡Correcto! ' : '❌ Incorrecto. La respuesta es: <strong>' + ex.answer + '</strong>. ') + ex.explanation : ''}
                </div>
            </div>`;
        });
        html += `</div>`;
        return html;
    },

    init() {
        const container = document.getElementById('content');
        this._handler = (e) => {
            const toggle = e.target.closest('[data-toggle]');
            if (toggle) {
                toggle.closest('.lesson-card').classList.toggle('expanded');
            }
            const speakerBtn = e.target.closest('.speaker-btn');
            if (speakerBtn) {
                const word = speakerBtn.dataset.word || speakerBtn.closest('[data-word]')?.dataset.word;
                if (word) window.App.speak(word);
            }
            const answerBtn = e.target.closest('.exercise-option:not([disabled])');
            if (answerBtn) {
                const item = answerBtn.closest('.exercise-item');
                const topicId = item.dataset.topic;
                const exIdx = parseInt(item.dataset.exercise);
                const answer = answerBtn.dataset.answer;
                const topic = window.CourseData.grammar.find(t => t.id === topicId);
                const exercise = topic.exercises[exIdx];
                
                const state = Storage.load('grammar_ex_' + topicId, {});
                state[exIdx] = answer;
                Storage.save('grammar_ex_' + topicId, state);

                if (answer === exercise.answer) {
                    window.App.addXP(5);
                    answerBtn.classList.add('correct');
                } else {
                    answerBtn.classList.add('incorrect');
                    item.querySelector(`[data-answer="${exercise.answer}"]`).classList.add('correct');
                }
                item.querySelectorAll('.exercise-option').forEach(b => b.disabled = true);
                const fb = item.querySelector('.exercise-feedback');
                fb.className = `exercise-feedback show ${answer === exercise.answer ? 'correct' : 'incorrect'}`;
                fb.innerHTML = (answer === exercise.answer ? '✅ ¡Correcto! ' : '❌ Incorrecto. Respuesta: <strong>' + exercise.answer + '</strong>. ') + exercise.explanation;

                // Check completion
                const allAnswered = Object.keys(state).length >= topic.exercises.length;
                if (allAnswered) {
                    const completed = Storage.load('grammar_completed', []);
                    if (!completed.includes(topicId)) {
                        completed.push(topicId);
                        Storage.save('grammar_completed', completed);
                        window.App.completeLesson('grammar_' + topicId);
                        window.App.showToast('📝 ¡Tema de gramática completado!', 'success');
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
