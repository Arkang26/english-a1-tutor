// ============================================================
// app.js - SPA Router, State Management & Core Functionality
// English A1 American Tutor
// ============================================================

(function() {
    'use strict';

    // ---- Module Registry ----
    const modules = {
        home: null, // built-in
        pronunciation: () => window.Pronunciation,
        grammar: () => window.Grammar,
        vocabulary: () => window.Vocabulary,
        dialogues: () => window.Dialogues,
        flashcards: () => window.Flashcards,
        goldlist: () => window.Goldlist,
        quizzes: () => window.Quizzes,
        progress: () => window.Progress
    };

    // ---- App State ----
    const defaultState = {
        currentPage: 'home',
        user: {
            name: '',
            registeredAt: null,
            xp: 0,
            level: 1,
            streak: 0,
            lastStudyDate: null,
            wordsLearned: 0,
            dailyXP: 0,
            dailyGoal: 60, // XP goal per day (1 hour session)
            totalStudyMinutes: 0,
            achievements: [],
            completedLessons: [],
            a1Checklist: {}
        }
    };

    let state = {};
    let currentModule = null;

    // ---- XP / Level System ----
    const XP_PER_LEVEL = 100;

    function calculateLevel(xp) {
        return Math.floor(xp / XP_PER_LEVEL) + 1;
    }

    function xpForCurrentLevel(xp) {
        return xp % XP_PER_LEVEL;
    }

    // ---- Streak System ----
    function updateStreak() {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = state.user.lastStudyDate;
        
        if (lastDate === today) return; // Already studied today
        
        if (lastDate) {
            const last = new Date(lastDate);
            const now = new Date(today);
            const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                state.user.streak++;
            } else if (diffDays > 1) {
                state.user.streak = 1; // Reset streak
            }
        } else {
            state.user.streak = 1;
        }
        
        state.user.lastStudyDate = today;
        state.user.dailyXP = 0;
        saveState();
        updateUI();
    }

    // ---- TTS (Text-to-Speech) ----
    function speak(text, lang = 'en-US') {
        if (!('speechSynthesis' in window)) {
            console.warn('TTS not supported');
            return;
        }
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.85;
        utterance.pitch = 1;
        
        // Try to find an American English voice
        const voices = window.speechSynthesis.getVoices();
        const americanVoice = voices.find(v => v.lang === 'en-US') ||
                              voices.find(v => v.lang.startsWith('en'));
        if (americanVoice) utterance.voice = americanVoice;
        
        window.speechSynthesis.speak(utterance);
    }

    // ---- Toast Notifications ----
    function showToast(message, type = 'info', duration = 3000) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span class="toast-icon">${type === 'xp' ? '⚡' : type === 'achievement' ? '🏆' : type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
            <span class="toast-message">${message}</span>
        `;
        container.appendChild(toast);
        
        requestAnimationFrame(() => toast.classList.add('show'));
        
        setTimeout(() => {
            toast.classList.remove('show');
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400);
        }, duration);
    }

    // ---- Add XP ----
    function addXP(amount) {
        const oldLevel = state.user.level;
        state.user.xp += amount;
        state.user.dailyXP += amount;
        state.user.level = calculateLevel(state.user.xp);
        
        updateStreak();
        saveState();
        updateUI();
        
        showToast(`+${amount} XP`, 'xp', 2000);
        
        if (state.user.level > oldLevel) {
            setTimeout(() => {
                showToast(`🎉 ¡Subiste al Nivel ${state.user.level}!`, 'achievement', 4000);
            }, 500);
        }
        
        checkAchievements();
    }

    // ---- Achievements ----
    function checkAchievements() {
        if (!window.CourseData || !window.CourseData.achievements) return;
        
        const earned = state.user.achievements;
        const achievements = window.CourseData.achievements;
        
        achievements.forEach(ach => {
            if (earned.includes(ach.id)) return;
            
            let unlocked = false;
            switch (ach.id) {
                case 'first_step': unlocked = state.user.completedLessons.length > 0; break;
                case 'grammar_starter': unlocked = state.user.completedLessons.some(l => l.startsWith('grammar')); break;
                case 'sound_master': unlocked = state.user.completedLessons.filter(l => l.startsWith('pron')).length >= 5; break;
                case 'word_10': unlocked = state.user.wordsLearned >= 10; break;
                case 'word_50': unlocked = state.user.wordsLearned >= 50; break;
                case 'word_100': unlocked = state.user.wordsLearned >= 100; break;
                case 'streak_3': unlocked = state.user.streak >= 3; break;
                case 'streak_7': unlocked = state.user.streak >= 7; break;
                case 'streak_30': unlocked = state.user.streak >= 30; break;
                case 'quiz_master': unlocked = Storage.load('quiz_perfect', false); break;
                case 'conversationalist': unlocked = (Storage.load('dialogues_completed', [])).length >= 6; break;
                case 'card_shark': unlocked = (Storage.load('leitner_box5', [])).length >= 10; break;
                case 'goldlist_guru': unlocked = Storage.load('goldlist_distillations', 0) > 0; break;
                case 'a1_champion': unlocked = Object.values(state.user.a1Checklist).filter(v => v).length >= 15; break;
                case 'xp_legend': unlocked = state.user.xp >= 1000; break;
            }
            
            if (unlocked) {
                earned.push(ach.id);
                showToast(`🏆 ¡Logro desbloqueado: ${ach.title}!`, 'achievement', 5000);
                saveState();
            }
        });
    }

    // ---- Mark lesson complete ----
    function completeLesson(lessonId) {
        if (!state.user.completedLessons.includes(lessonId)) {
            state.user.completedLessons.push(lessonId);
            saveState();
        }
    }

    // ---- Add words learned ----
    function addWordsLearned(count) {
        state.user.wordsLearned += count;
        saveState();
        updateUI();
        checkAchievements();
    }

    // ---- State Persistence ----
    function saveState() {
        Storage.save('appState', state);
    }

    function loadState() {
        const saved = Storage.load('appState', null);
        if (saved) {
            state = { ...defaultState, ...saved, user: { ...defaultState.user, ...saved.user } };
        } else {
            state = JSON.parse(JSON.stringify(defaultState));
        }
        // Check if streak should reset
        const today = new Date().toISOString().split('T')[0];
        if (state.user.lastStudyDate && state.user.lastStudyDate !== today) {
            const last = new Date(state.user.lastStudyDate);
            const now = new Date(today);
            const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
            if (diffDays > 1) {
                state.user.streak = 0;
            }
            state.user.dailyXP = 0;
        }
    }

    // ---- UI Updates ----
    function updateUI() {
        // Streak
        const streakEl = document.getElementById('streak-value');
        if (streakEl) streakEl.textContent = state.user.streak;
        
        // XP
        const xpEl = document.getElementById('xp-value');
        if (xpEl) xpEl.textContent = state.user.xp;
        
        // Words
        const wordsEl = document.getElementById('words-value');
        if (wordsEl) wordsEl.textContent = state.user.wordsLearned;
        
        // Level
        const levelBadge = document.getElementById('level-badge');
        if (levelBadge) levelBadge.textContent = state.user.level;
        
        const levelFill = document.getElementById('level-progress-fill');
        if (levelFill) {
            const progress = (xpForCurrentLevel(state.user.xp) / XP_PER_LEVEL) * 100;
            levelFill.style.width = progress + '%';
        }
        
        // Daily goal
        const goalFill = document.getElementById('goal-fill');
        if (goalFill) {
            const goalProgress = Math.min((state.user.dailyXP / state.user.dailyGoal) * 100, 100);
            goalFill.style.width = goalProgress + '%';
        }

        // Streak animation
        const streakStat = document.getElementById('stat-streak');
        if (streakStat && state.user.streak > 0) {
            streakStat.classList.add('active');
        }
    }

    // ---- Home Page ----
    function renderHome(container) {
        const completedCount = state.user.completedLessons.length;
        const todayGreeting = getGreeting();
        const userName = state.user.name || 'Estudiante';
        
        container.innerHTML = `
            <div class="page-home fade-in">
                <div class="welcome-section">
                    <div class="welcome-card glass-card">
                        <div class="welcome-content">
                            <h2>${todayGreeting} ${userName} 👋</h2>
                            <p class="welcome-subtitle">¡Bienvenido a tu tutor de inglés americano A1!</p>
                            <div class="welcome-stats">
                                <div class="mini-stat">
                                    <span class="mini-stat-value">${state.user.streak}</span>
                                    <span class="mini-stat-label">Días seguidos</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-stat-value">${state.user.xp}</span>
                                    <span class="mini-stat-label">XP Total</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-stat-value">${state.user.wordsLearned}</span>
                                    <span class="mini-stat-label">Palabras</span>
                                </div>
                                <div class="mini-stat">
                                    <span class="mini-stat-value">${completedCount}</span>
                                    <span class="mini-stat-label">Lecciones</span>
                                </div>
                            </div>
                        </div>
                        <div class="welcome-illustration">🎓</div>
                    </div>
                </div>

                <div class="daily-goal-section">
                    <div class="daily-card glass-card">
                        <h3>🎯 Meta Diaria</h3>
                        <p>Estudia 1 hora para alcanzar tu meta de hoy</p>
                        <div class="daily-progress-bar">
                            <div class="daily-progress-fill" style="width: ${Math.min((state.user.dailyXP / state.user.dailyGoal) * 100, 100)}%"></div>
                        </div>
                        <span class="daily-progress-text">${state.user.dailyXP} / ${state.user.dailyGoal} XP</span>
                    </div>
                </div>

                <h3 class="section-title">📚 Módulos de Aprendizaje</h3>
                <div class="modules-grid">
                    ${renderModuleCard('pronunciation', '🔊', 'Pronunciación', 'Domina los 5 sonidos americanos', '#8b5cf6', true)}
                    ${renderModuleCard('grammar', '📝', 'Gramática', 'Estructuras del nivel A1', '#3b82f6')}
                    ${renderModuleCard('vocabulary', '📖', 'Vocabulario', '150+ palabras esenciales', '#10b981')}
                    ${renderModuleCard('dialogues', '💬', 'Diálogos', 'Conversaciones situacionales', '#f59e0b')}
                </div>

                <h3 class="section-title">🏋️ Práctica</h3>
                <div class="modules-grid">
                    ${renderModuleCard('flashcards', '🃏', 'Flashcards', 'Sistema Leitner de repetición', '#ec4899')}
                    ${renderModuleCard('goldlist', '📓', 'Goldlist', 'Método de cuaderno analógico', '#14b8a6')}
                    ${renderModuleCard('quizzes', '🎯', 'Quizzes', 'Pon a prueba tu conocimiento', '#f97316')}
                    ${renderModuleCard('progress', '📊', 'Mi Progreso', 'Estadísticas y logros', '#6366f1')}
                </div>

                <div class="quick-tip glass-card">
                    <h3>💡 Consejo del día</h3>
                    <p>${getRandomTip()}</p>
                </div>
            </div>
        `;

        // Bind module card clicks
        container.querySelectorAll('.module-card').forEach(card => {
            card.addEventListener('click', () => {
                const page = card.dataset.page;
                if (page) navigate(page);
            });
        });
    }

    function renderModuleCard(page, icon, title, subtitle, color, priority = false) {
        const completed = state.user.completedLessons.filter(l => l.startsWith(page)).length;
        const progress = Math.min(completed * 10, 100); // rough estimate
        
        return `
            <div class="module-card glass-card" data-page="${page}" style="--module-color: ${color}">
                <div class="module-card-header">
                    <span class="module-icon">${icon}</span>
                    ${priority ? '<span class="priority-badge">★ PRIORIDAD</span>' : ''}
                </div>
                <h4 class="module-title">${title}</h4>
                <p class="module-subtitle">${subtitle}</p>
                <div class="module-progress">
                    <div class="module-progress-bar">
                        <div class="module-progress-fill" style="width: ${progress}%; background: ${color}"></div>
                    </div>
                    <span class="module-progress-text">${progress}%</span>
                </div>
            </div>
        `;
    }

    function getGreeting() {
        const hour = new Date().getHours();
        if (hour < 12) return '¡Buenos días!';
        if (hour < 18) return '¡Buenas tardes!';
        return '¡Buenas noches!';
    }

    function getRandomTip() {
        const tips = [
            'En inglés americano, la "R" siempre se pronuncia, incluso al final de la palabra. Practica con: car, door, teacher.',
            'La "T" entre vocales suena como una "D" rápida en americano: water → "wader", better → "beder".',
            'No agregues una "E" antes de palabras que empiezan con "S": speak, NOT "e-speak".',
            'El sonido schwa /ə/ es el más común en inglés. Es como un suspiro corto: about, banana, computer.',
            'Las contracciones son obligatorias al hablar: "I am" → "I\'m", "He is" → "He\'s". ¡Suena más natural!',
            'En americano se dice "apartment" (no "flat") y "truck" (no "lorry").',
            'Los sustantivos incontables nunca llevan "a/an": water ✓, a water ✗.',
            'Practica deletrear tu nombre en inglés. Es una habilidad básica del nivel A1.',
            'El orden en inglés es fijo: Sujeto + Verbo + Objeto. Nunca omitas el sujeto.',
            'Usa "some" en afirmativas y "any" en negativas y preguntas. Some coffee ✓, Any coffee? ✓'
        ];
        return tips[Math.floor(Math.random() * tips.length)];
    }

    // ---- Navigation / Router ----
    function navigate(pageName) {
        const content = document.getElementById('content');
        if (!content) return;

        // Cleanup current module
        if (currentModule && currentModule.cleanup) {
            currentModule.cleanup();
        }

        // Update active states
        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.page === pageName);
        });
        document.querySelectorAll('.mobile-nav-item').forEach(el => {
            el.classList.toggle('active', el.dataset.page === pageName);
        });

        // Close mobile sidebar
        document.getElementById('sidebar').classList.remove('open');

        // Add page transition
        content.classList.add('page-exit');
        
        setTimeout(() => {
            content.classList.remove('page-exit');
            
            if (pageName === 'home') {
                renderHome(content);
                currentModule = null;
            } else {
                const getModule = modules[pageName];
                if (getModule) {
                    const mod = getModule();
                    if (mod && mod.render) {
                        mod.render(content);
                        if (mod.init) mod.init();
                        currentModule = mod;
                    } else {
                        content.innerHTML = `
                            <div class="page-placeholder fade-in">
                                <div class="placeholder-icon">🚧</div>
                                <h2>Módulo en construcción</h2>
                                <p>Este módulo estará disponible pronto.</p>
                                <button class="btn btn-primary" onclick="window.App.navigate('home')">Volver al inicio</button>
                            </div>
                        `;
                        currentModule = null;
                    }
                }
            }
            
            content.classList.add('page-enter');
            setTimeout(() => content.classList.remove('page-enter'), 500);
            
            state.currentPage = pageName;
            saveState();

            // Record study activity
            updateStreak();
        }, 200);
    }

    // ---- Onboarding Screen ----
    function showOnboarding() {
        const overlay = document.createElement('div');
        overlay.id = 'onboarding-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(10,14,26,0.95);z-index:9999;display:flex;align-items:center;justify-content:center;padding:1.5rem;';
        overlay.innerHTML = `
            <div style="background:rgba(17,24,39,0.95);border:1px solid rgba(255,255,255,0.1);border-radius:1.25rem;padding:3rem;max-width:480px;width:100%;text-align:center;backdrop-filter:blur(20px);animation:fadeIn 0.5s ease">
                <div style="font-size:4rem;margin-bottom:1rem">🎓</div>
                <h1 style="font-size:1.75rem;font-weight:800;margin-bottom:0.5rem;background:linear-gradient(135deg,#818cf8,#f59e0b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">English A1 Tutor</h1>
                <p style="color:#94a3b8;margin-bottom:2rem;font-size:0.95rem">Tu tutor personalizado de inglés americano</p>
                <div style="text-align:left;margin-bottom:1.5rem">
                    <label style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.5rem;color:#f1f5f9">¿Cuál es tu nombre?</label>
                    <input type="text" id="onboarding-name" placeholder="Escribe tu nombre aquí..." maxlength="30" style="width:100%;padding:0.85rem 1rem;background:rgba(255,255,255,0.06);border:2px solid rgba(255,255,255,0.1);border-radius:0.75rem;color:#f1f5f9;font-size:1rem;outline:none;transition:border 0.2s" onfocus="this.style.borderColor='#6366f1'" onblur="this.style.borderColor='rgba(255,255,255,0.1)'">
                </div>
                <button id="onboarding-start" style="width:100%;padding:0.9rem;background:linear-gradient(135deg,#6366f1,#4f46e5);color:white;border:none;border-radius:0.75rem;font-size:1rem;font-weight:700;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 15px rgba(99,102,241,0.3)" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
                    🚀 ¡Comenzar mi aprendizaje!
                </button>
                <p style="color:#64748b;font-size:0.75rem;margin-top:1.5rem">Tu progreso se guardará en este navegador</p>
            </div>
        `;
        document.body.appendChild(overlay);

        const nameInput = document.getElementById('onboarding-name');
        const startBtn = document.getElementById('onboarding-start');

        nameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') startBtn.click();
        });

        startBtn.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if (!name) {
                nameInput.style.borderColor = '#ef4444';
                nameInput.setAttribute('placeholder', '⚠️ Por favor escribe tu nombre');
                return;
            }
            state.user.name = name;
            state.user.registeredAt = new Date().toISOString();
            saveState();
            overlay.style.opacity = '0';
            overlay.style.transition = 'opacity 0.3s ease';
            setTimeout(() => { overlay.remove(); updateUI(); navigate('home'); }, 300);
            showToast(`¡Bienvenido/a ${name}! 🎉`, 'success', 4000);
        });

        setTimeout(() => nameInput.focus(), 500);
    }

    // ---- Share Progress Report ----
    function shareProgress() {
        const u = state.user;
        const pronStudied = Storage.load('pronunciation_studied', []);
        const gramCompleted = Storage.load('grammar_completed', []);
        const vocabLearned = Storage.load('vocab_learned', []);
        const dialoguesCompleted = Storage.load('dialogues_completed', []);
        const bestScores = Storage.load('quiz_best_scores', {});
        const registeredDate = u.registeredAt ? new Date(u.registeredAt).toLocaleDateString() : 'N/A';
        const today = new Date().toLocaleDateString();

        const report = `📊 REPORTE DE PROGRESO - English A1 Tutor
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Estudiante: ${u.name || 'Sin nombre'}
📅 Registrado: ${registeredDate}
📅 Reporte: ${today}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ XP Total: ${u.xp} | Nivel: ${u.level}
🔥 Racha: ${u.streak} días seguidos
📖 Palabras aprendidas: ${u.wordsLearned}
✅ Lecciones completadas: ${u.completedLessons.length}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 DETALLE POR MÓDULO:
🔊 Pronunciación: ${pronStudied.length}/5 reglas
📝 Gramática: ${gramCompleted.length}/8 temas
📖 Vocabulario: ${vocabLearned.length} palabras
💬 Diálogos: ${dialoguesCompleted.length}/6
🎯 Mejor Quiz: Gram ${bestScores.grammar||0}% | Vocab ${bestScores.vocabulary||0}% | Pron ${bestScores.pronunciation||0}%
🏆 Logros: ${u.achievements.length}/15
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

        if (navigator.clipboard) {
            navigator.clipboard.writeText(report).then(() => {
                showToast('📋 ¡Reporte copiado al portapapeles!', 'success', 3000);
            });
        } else {
            const textarea = document.createElement('textarea');
            textarea.value = report;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
            showToast('📋 ¡Reporte copiado al portapapeles!', 'success', 3000);
        }
    }

    // ---- Initialize App ----
    function init() {
        loadState();
        
        // Load TTS voices
        if ('speechSynthesis' in window) {
            window.speechSynthesis.getVoices();
            window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
        }

        // Bind sidebar navigation
        document.querySelectorAll('[data-page]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                navigate(el.dataset.page);
            });
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        const sidebarClose = document.getElementById('sidebar-close');

        if (menuToggle) {
            menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
        }
        if (sidebarClose) {
            sidebarClose.addEventListener('click', () => sidebar.classList.remove('open'));
        }

        // Handle hash navigation
        window.addEventListener('hashchange', () => {
            const page = window.location.hash.slice(1) || 'home';
            if (modules.hasOwnProperty(page) || page === 'home') {
                navigate(page);
            }
        });

        updateUI();
        
        // Show onboarding if first visit (no name set)
        if (!state.user.name) {
            showOnboarding();
        } else {
            // Navigate to initial page
            const initialPage = window.location.hash.slice(1) || 'home';
            navigate(initialPage);
        }
    }

    // ---- Public API ----
    window.App = {
        navigate,
        addXP,
        speak,
        showToast,
        getState: () => state,
        completeLesson,
        addWordsLearned,
        checkAchievements,
        saveState,
        updateUI,
        shareProgress
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
