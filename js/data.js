// ============================================================
// data.js - Complete Course Data for English A1 American Tutor
// ============================================================
window.CourseData = {

// ---- PRONUNCIATION ----
pronunciation: [
  {
    id: 'rhotic_r', title: 'La R Rótica (Rhotic R)', icon: '🔤',
    explanation: 'El inglés americano es estrictamente "fótico": la letra R se pronuncia SIEMPRE, en todas las posiciones de la palabra, incluyendo al final de la sílaba o después de una vocal.',
    howTo: 'Curva la punta de la lengua ligeramente hacia atrás SIN tocar el paladar superior. Canaliza el aire a través del espacio mientras los labios se proyectan sutilmente hacia adelante.',
    tip: 'No uses la R vibrante del español. La R americana es suave, sin vibración. Piensa en un gruñido suave.',
    words: [
      { word: 'car', phonetic: 'KAR', spanish: 'carro' },
      { word: 'work', phonetic: 'WERK', spanish: 'trabajo' },
      { word: 'mirror', phonetic: 'MIR-er', spanish: 'espejo' },
      { word: 'water', phonetic: 'WAH-ter', spanish: 'agua' },
      { word: 'teacher', phonetic: 'TEE-cher', spanish: 'profesor' },
      { word: 'river', phonetic: 'RIV-er', spanish: 'río' },
      { word: 'park', phonetic: 'PARK', spanish: 'parque' },
      { word: 'door', phonetic: 'DOR', spanish: 'puerta' }
    ]
  },
  {
    id: 'flap_t', title: 'La T de Aleteo (Flap T)', icon: '👅',
    explanation: 'Cuando la T está entre dos vocales y precede a una sílaba no acentuada, se transforma en un sonido suave que para el oído hispanohablante suena como una "D" rápida o la "R" simple del español en palabras como "cara".',
    howTo: 'La punta de la lengua golpea rápidamente la cresta alveolar (detrás de los dientes superiores), como un aleteo ligero.',
    tip: 'Piensa en la R suave del español en "cara" o "pero". Así suena la T americana en "water" → "wader".',
    words: [
      { word: 'water', phonetic: 'WAH-der', spanish: 'agua' },
      { word: 'better', phonetic: 'BEH-der', spanish: 'mejor' },
      { word: 'city', phonetic: 'SIH-dee', spanish: 'ciudad' },
      { word: 'party', phonetic: 'PAR-dee', spanish: 'fiesta' },
      { word: 'butter', phonetic: 'BUH-der', spanish: 'mantequilla' },
      { word: 'letter', phonetic: 'LEH-der', spanish: 'carta' },
      { word: 'matter', phonetic: 'MAH-der', spanish: 'importar' },
      { word: 'beautiful', phonetic: 'BYOO-dih-ful', spanish: 'hermoso' }
    ]
  },
  {
    id: 'dark_l', title: 'La L Oscura (Dark L)', icon: '🌑',
    explanation: 'En inglés americano, la consonante L adquiere una resonancia velar profunda en casi todas las posiciones, diferenciándose de la L clara del español.',
    howTo: 'Doble movimiento: la punta de la lengua presiona la cresta alveolar (detrás de dientes superiores), mientras la parte posterior de la lengua se ELEVA hacia el paladar blando. Se genera una vibración profunda.',
    tip: 'Mientras la punta toca detrás de los dientes, eleva la parte posterior de la lengua. Sentirás la vibración en la garganta. Practica con "full" y "milk".',
    words: [
      { word: 'full', phonetic: 'FUUL', spanish: 'lleno' },
      { word: 'people', phonetic: 'PEE-pul', spanish: 'gente' },
      { word: 'milk', phonetic: 'MILK', spanish: 'leche' },
      { word: 'call', phonetic: 'KAL', spanish: 'llamar' },
      { word: 'ball', phonetic: 'BAL', spanish: 'pelota' },
      { word: 'feel', phonetic: 'FEEL', spanish: 'sentir' },
      { word: 'school', phonetic: 'SKOOL', spanish: 'escuela' },
      { word: 'apple', phonetic: 'AH-pul', spanish: 'manzana' }
    ]
  },
  {
    id: 'schwa', title: 'La Vocal Neutra Schwa (/ə/)', icon: '😮',
    explanation: 'Es el sonido vocálico MÁS FRECUENTE en inglés. Es breve, átono y neutro — como un suspiro corto y perezoso. Aparece en TODAS las sílabas no acentuadas, reduciendo la nitidez de la vocal original.',
    howTo: 'Relaja completamente la boca. No fuerces ninguna posición. Emite un sonido breve y neutro, como un suspiro corto "uh". Es el estado de relajación máxima.',
    tip: 'El schwa es la CLAVE del ritmo inglés. En inglés, las sílabas NO acentuadas se comprimen y debilitan. No pronuncies todas las sílabas con la misma fuerza como en español.',
    words: [
      { word: 'about', phonetic: 'uh-BAUT', spanish: 'acerca de' },
      { word: 'banana', phonetic: 'buh-NA-nuh', spanish: 'banana' },
      { word: 'computer', phonetic: 'kum-PYOO-ter', spanish: 'computadora' },
      { word: 'problem', phonetic: 'PRAH-blum', spanish: 'problema' },
      { word: 'again', phonetic: 'uh-GEN', spanish: 'otra vez' },
      { word: 'today', phonetic: 'tuh-DAY', spanish: 'hoy' },
      { word: 'support', phonetic: 'suh-PORT', spanish: 'apoyar' },
      { word: 'animal', phonetic: 'AH-nuh-mul', spanish: 'animal' }
    ]
  },
  {
    id: 'flat_a', title: 'La A Plana (/æ/) + Nasalización', icon: '😬',
    explanation: 'El sonido en palabras como "cat", "man" requiere una apertura mandibular amplia, empujando la lengua hacia adelante contra los dientes inferiores. En americano, las palabras tipo "bath" usan esta A plana (/æ/), a diferencia de la A profunda del inglés británico.',
    howTo: 'Abre la boca más de lo normal y empuja la lengua hacia adelante y abajo. Cuando esta vocal precede a /m/, /n/, /ŋ/, el aire se desvía parcialmente por la nariz (nasalización).',
    tip: 'En americano: "dance" rima con "ants" (no con "aunts"). Abre bien la boca, como sonriendo exageradamente.',
    words: [
      { word: 'cat', phonetic: 'KAET', spanish: 'gato' },
      { word: 'man', phonetic: 'MAEN', spanish: 'hombre' },
      { word: 'bath', phonetic: 'BAETH', spanish: 'baño' },
      { word: 'can', phonetic: 'KAEN', spanish: 'poder' },
      { word: 'hang', phonetic: 'HAENG', spanish: 'colgar' },
      { word: 'dance', phonetic: 'DAENS', spanish: 'bailar' },
      { word: 'hat', phonetic: 'HAET', spanish: 'sombrero' },
      { word: 'happy', phonetic: 'HAE-pee', spanish: 'feliz' }
    ]
  }
],

intonation: [
  { pattern: 'Descendente ↘', description: 'Para oraciones afirmativas y preguntas con Wh- (What, Where, When, Who, Why, How)', examples: ['I live in New York. ↘', 'Where is the station? ↘', 'My name is Carlos. ↘'] },
  { pattern: 'Ascendente ↗', description: 'Para preguntas de sí o no (Yes/No questions)', examples: ['Do you speak English? ↗', 'Is this your book? ↗', 'Can I have some water? ↗'] },
  { pattern: 'Ascenso-Descenso ↗↘', description: 'Para expresar sorpresa o al enumerar listas', examples: ['Really? ↗↘', 'I have a pen, ↗ a book, ↗ and a bag. ↘'] }
],

spanishErrors: [
  { error: 'Confusión /b/ vs /v/', explanation: 'En español no hay diferencia, pero en inglés V es labiodental (labio inferior toca dientes superiores) y B es bilabial (ambos labios juntos).', pairs: [['very', 'berry'], ['vote', 'boat'], ['vet', 'bet']] },
  { error: 'Vocal protética "E"', explanation: 'Los hispanohablantes tienden a añadir una E antes de palabras que empiezan con S + consonante. Elimina esa E.', pairs: [['speak ✓', '"e-speak" ✗'], ['stop ✓', '"e-stop" ✗'], ['school ✓', '"e-school" ✗']] }
],

// ---- GRAMMAR ----
grammar: [
  {
    id: 'to_be', title: 'Verbo To Be (am/is/are)', icon: '🔷',
    explanation: 'El verbo "to be" es el núcleo descriptivo primario. Se usa para expresar origen, identidad, precio, edad y estados emocionales.',
    content: {
      conjugation: [
        { subject: 'I', verb: 'am', contraction: "I'm", example: "I'm a student." },
        { subject: 'You', verb: 'are', contraction: "You're", example: "You're from Colombia." },
        { subject: 'He', verb: 'is', contraction: "He's", example: "He's 25 years old." },
        { subject: 'She', verb: 'is', contraction: "She's", example: "She's a doctor." },
        { subject: 'It', verb: 'is', contraction: "It's", example: "It's cold today." },
        { subject: 'We', verb: 'are', contraction: "We're", example: "We're happy." },
        { subject: 'They', verb: 'are', contraction: "They're", example: "They're teachers." }
      ],
      rules: [
        'Las contracciones son OBLIGATORIAS al hablar naturalmente.',
        'NUNCA se contrae en respuestas afirmativas cortas: "Yes, I am." ✓ / "Yes, I\'m." ✗',
        'Negativo: am not, isn\'t, aren\'t',
        'Preguntas: inversión (Am I? Is he? Are they?)',
        'Para clima siempre usa "it": It is cold. It\'s sunny.'
      ]
    },
    exercises: [
      { q: 'She ___ a teacher.', options: ['is', 'am', 'are', 'be'], answer: 'is', explanation: '"She" es tercera persona singular → "is"' },
      { q: 'I ___ from Colombia.', options: ['is', 'am', 'are', 'be'], answer: 'am', explanation: '"I" siempre va con "am"' },
      { q: 'They ___ happy today.', options: ['is', 'am', 'are', 'be'], answer: 'are', explanation: '"They" es plural → "are"' },
      { q: '___ you a student?', options: ['Is', 'Am', 'Are', 'Do'], answer: 'Are', explanation: 'Para preguntas con "you" → "Are you...?"' },
      { q: 'It ___ cold outside.', options: ['is', 'am', 'are', 'be'], answer: 'is', explanation: 'El clima usa "it is" (it\'s)' }
    ]
  },
  {
    id: 'present_simple', title: 'Presente Simple', icon: '🔄',
    explanation: 'Se usa para describir hábitos, rutinas y verdades universales. La tercera persona (he/she/it) requiere agregar -s o -es al verbo.',
    content: {
      rules: [
        'Estructura: Sujeto + Verbo (base) + Complemento',
        'He/She/It: agregar -s (plays) o -es (watches, goes)',
        '-es después de: ch, sh, s, x, z, o (watches, goes, fixes)',
        'Negativo: don\'t / doesn\'t + verbo base',
        'Preguntas: Do / Does + sujeto + verbo base?',
        'Adverbios de frecuencia: always, usually, often, sometimes, rarely, never'
      ],
      examples: [
        { en: 'I play soccer every weekend.', es: 'Juego fútbol cada fin de semana.' },
        { en: 'She watches TV at night.', es: 'Ella mira TV en la noche.' },
        { en: 'He doesn\'t like coffee.', es: 'A él no le gusta el café.' },
        { en: 'Do you speak English?', es: '¿Hablas inglés?' }
      ]
    },
    exercises: [
      { q: 'I ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'go', explanation: '"I" usa verbo base sin -s' },
      { q: 'She ___ breakfast at 7.', options: ['have', 'has', 'having', 'had'], answer: 'has', explanation: '"She" = tercera persona → "has"' },
      { q: '___ you like coffee?', options: ['Do', 'Does', 'Are', 'Is'], answer: 'Do', explanation: 'Auxiliar para "you" en presente simple = "Do"' },
      { q: 'He doesn\'t ___ a car.', options: ['have', 'has', 'having', 'had'], answer: 'have', explanation: 'Después de doesn\'t, siempre verbo BASE' },
      { q: 'My mother ___ English.', options: ['speak', 'speaks', 'speaking', 'spoke'], answer: 'speaks', explanation: '"My mother" = she → agrega -s' }
    ]
  },
  {
    id: 'present_continuous', title: 'Presente Continuo', icon: '▶️',
    explanation: 'Se usa para acciones que ocurren AHORA mismo o situaciones temporales actuales. Forma: am/is/are + verbo-ing.',
    content: {
      rules: [
        'Forma: am/is/are + verbo + -ing',
        'Uso: acciones en progreso AHORA o situaciones temporales',
        'PROHIBIDO con verbos de estado (stative verbs): be, have, like, love, hate, prefer, need, want, know',
        'Si el verbo termina en -e, se elimina: make → making',
        'Si termina en consonante-vocal-consonante (CVC), se duplica: run → running'
      ],
      examples: [
        { en: 'I am studying English right now.', es: 'Estoy estudiando inglés ahora mismo.' },
        { en: 'She is cooking dinner.', es: 'Ella está cocinando la cena.' },
        { en: 'They are playing soccer.', es: 'Ellos están jugando fútbol.' }
      ]
    },
    exercises: [
      { q: 'They ___ playing soccer now.', options: ['is', 'am', 'are', 'be'], answer: 'are', explanation: '"They" = plural → "are"' },
      { q: 'I ___ reading a book.', options: ['is', 'am', 'are', 'be'], answer: 'am', explanation: '"I" siempre va con "am"' },
      { q: '¿Cuál verbo NO puede usarse en continuo?', options: ['play', 'run', 'know', 'cook'], answer: 'know', explanation: '"Know" es un verbo de estado (stative verb)' },
      { q: 'She is ___ dinner. (cook)', options: ['cooking', 'cooked', 'cooks', 'cook'], answer: 'cooking', explanation: 'Presente continuo = verbo + ing' },
      { q: 'He ___ working today. (negativo)', options: ["isn't", "doesn't", "don't", "aren't"], answer: "isn't", explanation: '"He" → "is" → negativo "isn\'t"' }
    ]
  },
  {
    id: 'past_simple', title: 'Pasado Simple', icon: '⏮️',
    explanation: 'Se divide en dos: el verbo "be" en pasado (was/were) y los verbos de acción con -ed (regulares) o formas únicas (irregulares). Se usa did/didn\'t para preguntas y negaciones.',
    content: {
      waswere: [
        { subject: 'I/He/She/It', verb: 'was', negative: "wasn't" },
        { subject: 'You/We/They', verb: 'were', negative: "weren't" }
      ],
      irregulars: [
        ['go', 'went'], ['eat', 'ate'], ['see', 'saw'], ['have', 'had'],
        ['make', 'made'], ['take', 'took'], ['come', 'came'], ['get', 'got'],
        ['do', 'did'], ['say', 'said'], ['give', 'gave'], ['know', 'knew'],
        ['think', 'thought'], ['find', 'found'], ['buy', 'bought'], ['read', 'read'],
        ['write', 'wrote'], ['run', 'ran'], ['drink', 'drank'], ['tell', 'told']
      ],
      rules: [
        'Was/Were: NO usa auxiliares. Preguntas por inversión: Was she happy?',
        'Regulares: agregar -ed (played, watched, stopped)',
        'CVC de una sílaba: duplicar consonante final (stop → stopped, plan → planned)',
        'Did/Didn\'t + verbo BASE. NUNCA doble pasado: "Did you went" ✗ → "Did you go?" ✓',
        '"Born" siempre en pasado: I was born in 1995.'
      ]
    },
    exercises: [
      { q: 'I ___ born in 1995.', options: ['am', 'was', 'were', 'is'], answer: 'was', explanation: '"Born" siempre usa "was" en pasado' },
      { q: 'They ___ to the park yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 'went', explanation: 'Pasado de "go" = "went" (irregular)' },
      { q: '___ she happy yesterday?', options: ['Was', 'Were', 'Did', 'Does'], answer: 'Was', explanation: '"She" → "was" y las preguntas se hacen por inversión' },
      { q: 'I didn\'t ___ the movie.', options: ['see', 'saw', 'seen', 'seeing'], answer: 'see', explanation: 'Después de didn\'t, siempre verbo BASE' },
      { q: 'We ___ dinner at 8 last night.', options: ['have', 'has', 'had', 'having'], answer: 'had', explanation: 'Pasado de "have" = "had"' }
    ]
  },
  {
    id: 'future', title: 'Futuro (be going to / will)', icon: '⏭️',
    explanation: 'Dos formas: "be going to" para planes e intenciones, y "will" para predicciones, promesas y decisiones espontáneas.',
    content: {
      rules: [
        'Be going to: planes e intenciones definidas + predicciones con evidencia visible',
        'Will: predicciones con think/hope, promesas, decisiones espontáneas, rechazos (won\'t)',
        'Se puede omitir "go" si el verbo principal es "go": "I\'m going shopping" en vez de "I\'m going to go shopping"',
        'Will contracción: I\'ll, You\'ll, He\'ll, She\'ll, We\'ll, They\'ll',
        'Won\'t = will not (rechazo absoluto)'
      ]
    },
    exercises: [
      { q: 'I ___ going to study tonight.', options: ['am', 'is', 'are', 'will'], answer: 'am', explanation: '"I" + "am going to" para planes' },
      { q: 'I think it ___ rain tomorrow.', options: ['is going to', 'will', 'going', 'does'], answer: 'will', explanation: 'Con "I think" se usa "will" para predicciones' },
      { q: 'She ___ visit her mother next week.', options: ["is going to", "will to", "going to", "goes to"], answer: "is going to", explanation: 'Plan definido = "is going to"' },
      { q: 'I ___ help you! (promesa)', options: ['will', 'am going to', 'going', 'can'], answer: 'will', explanation: 'Promesas usan "will"' },
      { q: 'Look at those clouds! It ___ rain.', options: ["is going to", "will", "is", "does"], answer: "is going to", explanation: 'Predicción con evidencia visible = "is going to"' }
    ]
  },
  {
    id: 'can_cant', title: 'Can / Can\'t', icon: '💪',
    explanation: 'Verbo modal para expresar habilidad, permiso y posibilidad. Es invariable (no cambia con la persona).',
    content: {
      rules: [
        'No agrega -s en tercera persona: "She can swim" ✓ / "She cans swim" ✗',
        'Infinitivo SIN "to": "I can swim" ✓ / "I can to swim" ✗',
        'NO usa do/does: "Can you swim?" ✓ / "Do you can swim?" ✗',
        'Negativo: can\'t (cannot)',
        'Usos: habilidad (I can swim), permiso (Can I go?), posibilidad (It can be cold)'
      ]
    },
    exercises: [
      { q: '___ you speak English?', options: ['Can', 'Do', 'Are', 'Have'], answer: 'Can', explanation: 'Habilidad = "Can"' },
      { q: 'She ___ play the piano.', options: ['can', 'cans', 'can to', 'does can'], answer: 'can', explanation: 'Can es invariable, no agrega -s' },
      { q: 'I ___ swim. (negativo)', options: ["can't", "don't can", "not can", "doesn't can"], answer: "can't", explanation: 'Negativo de can = can\'t' },
      { q: '___ I have some water, please?', options: ['Can', 'Do', 'Am', 'Will'], answer: 'Can', explanation: 'Permiso cortés = "Can I...?"' },
      { q: 'He can ___ very fast.', options: ['run', 'runs', 'to run', 'running'], answer: 'run', explanation: 'Después de can, verbo BASE sin "to"' }
    ]
  },
  {
    id: 'articles', title: 'Artículos (a/an/the)', icon: '📌',
    explanation: 'Los artículos determinan si un sustantivo es específico o general.',
    content: {
      rules: [
        'A: antes de sonido consonántico (a car, a university [sonido /j/], a uniform)',
        'An: antes de sonido vocálico o H muda (an apple, an hour, an umbrella)',
        'The: cosas específicas, únicas, superlativos, instrumentos, lugares conocidos',
        'Sin artículo (zero): plurales generales, comidas, idiomas, con next/last',
        'OJO: "university" empieza con sonido /j/ → "a university" ✓'
      ]
    },
    exercises: [
      { q: 'This is ___ university.', options: ['a', 'an', 'the', '--'], answer: 'a', explanation: '"University" empieza con sonido /j/ (consonante) → "a"' },
      { q: 'I need ___ hour to finish.', options: ['a', 'an', 'the', '--'], answer: 'an', explanation: '"Hour" tiene H muda, empieza con sonido vocálico → "an"' },
      { q: '___ sun is very bright today.', options: ['A', 'An', 'The', '--'], answer: 'The', explanation: 'El sol es único → "the"' },
      { q: 'I have ___ for breakfast.', options: ['a eggs', 'an eggs', 'the eggs', 'eggs'], answer: 'eggs', explanation: 'Comidas y plurales generales → sin artículo' },
      { q: 'She is ___ best student.', options: ['a', 'an', 'the', '--'], answer: 'the', explanation: 'Superlativos siempre llevan "the"' }
    ]
  },
  {
    id: 'prepositions', title: 'Preposiciones de Lugar', icon: '📍',
    explanation: 'Las preposiciones de lugar sitúan objetos en el espacio tridimensional.',
    content: {
      prepositions: [
        { prep: 'at', meaning: 'punto específico', example: 'He is at the bus stop.' },
        { prep: 'in', meaning: 'dentro de un espacio', example: 'The keys are in the kitchen.' },
        { prep: 'on', meaning: 'sobre una superficie', example: 'The book is on the desk.' },
        { prep: 'next to', meaning: 'al lado de', example: 'The bakery is next to the pharmacy.' },
        { prep: 'between', meaning: 'entre dos cosas', example: 'The house is between the park and the river.' },
        { prep: 'in front of', meaning: 'delante de', example: 'Park in front of the hotel.' },
        { prep: 'behind', meaning: 'detrás de', example: 'The dog is behind the door.' },
        { prep: 'opposite', meaning: 'enfrente de / cara a cara', example: 'The post office is opposite the library.' },
        { prep: 'under', meaning: 'debajo de', example: 'The cat is under the table.' },
        { prep: 'above / over', meaning: 'encima de', example: 'There is a shelf above the sink.' }
      ]
    },
    exercises: [
      { q: 'The cat is ___ the table.', options: ['in', 'on', 'under', 'at'], answer: 'under', explanation: 'Debajo de = "under"' },
      { q: 'She is waiting ___ the bus stop.', options: ['in', 'on', 'at', 'under'], answer: 'at', explanation: 'Punto específico = "at"' },
      { q: 'The book is ___ the desk.', options: ['in', 'on', 'at', 'under'], answer: 'on', explanation: 'Sobre una superficie = "on"' },
      { q: 'My house is ___ the park and the school.', options: ['next to', 'between', 'behind', 'in'], answer: 'between', explanation: 'Entre dos puntos = "between"' },
      { q: 'The keys are ___ my bag.', options: ['at', 'on', 'in', 'under'], answer: 'in', explanation: 'Dentro de un espacio cerrado = "in"' }
    ]
  }
],

// ---- VOCABULARY ----
vocabulary: {
  family: {
    name: 'Familia e Identidad', icon: '👨‍👩‍👧‍👦', color: '#ec4899',
    words: [
      { english: 'father', spanish: 'padre', phonetic: 'FA-ther', example: 'My father is fifty years old.', exampleEs: 'Mi padre tiene cincuenta años.', countable: true },
      { english: 'mother', spanish: 'madre', phonetic: 'MUH-ther', example: 'My mother is a teacher.', exampleEs: 'Mi madre es profesora.', countable: true },
      { english: 'brother', spanish: 'hermano', phonetic: 'BRUH-ther', example: 'I have two brothers.', exampleEs: 'Tengo dos hermanos.', countable: true },
      { english: 'sister', spanish: 'hermana', phonetic: 'SIS-ter', example: 'My sister is younger than me.', exampleEs: 'Mi hermana es menor que yo.', countable: true },
      { english: 'husband', spanish: 'esposo', phonetic: 'HUZ-band', example: 'Her husband is a doctor.', exampleEs: 'Su esposo es doctor.', countable: true },
      { english: 'wife', spanish: 'esposa', phonetic: 'WAIF', example: 'His wife is very kind.', exampleEs: 'Su esposa es muy amable.', countable: true },
      { english: 'baby', spanish: 'bebé', phonetic: 'BAY-bee', example: 'The baby is sleeping.', exampleEs: 'El bebé está durmiendo.', countable: true },
      { english: 'teacher', spanish: 'profesor/a', phonetic: 'TEE-cher', example: 'The teacher is in the classroom.', exampleEs: 'El profesor está en el salón.', countable: true },
      { english: 'student', spanish: 'estudiante', phonetic: 'STOO-dent', example: 'I am a student.', exampleEs: 'Soy estudiante.', countable: true },
      { english: 'doctor', spanish: 'doctor/a', phonetic: 'DAK-ter', example: 'She is a good doctor.', exampleEs: 'Ella es una buena doctora.', countable: true },
      { english: 'nurse', spanish: 'enfermero/a', phonetic: 'NERS', example: 'The nurse is very helpful.', exampleEs: 'La enfermera es muy servicial.', countable: true },
      { english: 'friend', spanish: 'amigo/a', phonetic: 'FREND', example: 'He is my best friend.', exampleEs: 'Él es mi mejor amigo.', countable: true },
      { english: 'name', spanish: 'nombre', phonetic: 'NAYM', example: 'My name is Carlos.', exampleEs: 'Mi nombre es Carlos.', countable: true },
      { english: 'old', spanish: 'viejo / años', phonetic: 'OLD', example: 'I am twenty-five years old.', exampleEs: 'Tengo veinticinco años.', countable: false }
    ]
  },
  housing: {
    name: 'Vivienda', icon: '🏠', color: '#3b82f6',
    words: [
      { english: 'house', spanish: 'casa', phonetic: 'HAUS', example: 'I live in a big house.', exampleEs: 'Vivo en una casa grande.', countable: true },
      { english: 'apartment', spanish: 'apartamento', phonetic: 'uh-PART-ment', example: 'I live in a small apartment.', exampleEs: 'Vivo en un apartamento pequeño.', countable: true },
      { english: 'kitchen', spanish: 'cocina', phonetic: 'KIT-chen', example: 'The kitchen is clean.', exampleEs: 'La cocina está limpia.', countable: true },
      { english: 'bathroom', spanish: 'baño', phonetic: 'BATH-room', example: 'Where is the bathroom?', exampleEs: '¿Dónde está el baño?', countable: true },
      { english: 'bedroom', spanish: 'dormitorio', phonetic: 'BED-room', example: 'My bedroom is upstairs.', exampleEs: 'Mi dormitorio está arriba.', countable: true },
      { english: 'living room', spanish: 'sala', phonetic: 'LIV-ing room', example: 'We watch TV in the living room.', exampleEs: 'Vemos TV en la sala.', countable: true },
      { english: 'bed', spanish: 'cama', phonetic: 'BED', example: 'The bed is comfortable.', exampleEs: 'La cama es cómoda.', countable: true },
      { english: 'desk', spanish: 'escritorio', phonetic: 'DESK', example: 'The book is on the desk.', exampleEs: 'El libro está en el escritorio.', countable: true },
      { english: 'couch', spanish: 'sofá', phonetic: 'KAUCH', example: 'Sit on the couch.', exampleEs: 'Siéntate en el sofá.', countable: true },
      { english: 'lamp', spanish: 'lámpara', phonetic: 'LAMP', example: 'Turn on the lamp.', exampleEs: 'Enciende la lámpara.', countable: true },
      { english: 'key', spanish: 'llave', phonetic: 'KEE', example: 'Where are the keys?', exampleEs: '¿Dónde están las llaves?', countable: true },
      { english: 'yard', spanish: 'patio/jardín', phonetic: 'YARD', example: 'The yard is beautiful.', exampleEs: 'El patio es hermoso.', countable: true }
    ]
  },
  routine: {
    name: 'Rutina Diaria', icon: '⏰', color: '#f59e0b',
    words: [
      { english: 'morning', spanish: 'mañana', phonetic: 'MOR-ning', example: 'I wake up in the morning.', exampleEs: 'Me despierto en la mañana.', countable: true },
      { english: 'afternoon', spanish: 'tarde', phonetic: 'af-ter-NOON', example: 'I study in the afternoon.', exampleEs: 'Estudio en la tarde.', countable: true },
      { english: 'evening', spanish: 'noche (temprano)', phonetic: 'EEV-ning', example: 'I cook dinner in the evening.', exampleEs: 'Cocino la cena en la noche.', countable: true },
      { english: 'night', spanish: 'noche', phonetic: 'NAIT', example: 'Good night!', exampleEs: '¡Buenas noches!', countable: true },
      { english: 'breakfast', spanish: 'desayuno', phonetic: 'BREK-fast', example: 'I have breakfast at seven.', exampleEs: 'Desayuno a las siete.', countable: false },
      { english: 'lunch', spanish: 'almuerzo', phonetic: 'LUNCH', example: 'Lunch is at noon.', exampleEs: 'El almuerzo es al mediodía.', countable: false },
      { english: 'dinner', spanish: 'cena', phonetic: 'DIN-er', example: 'We have dinner at eight.', exampleEs: 'Cenamos a las ocho.', countable: false },
      { english: 'weekend', spanish: 'fin de semana', phonetic: 'WEEK-end', example: 'On weekends I read books.', exampleEs: 'Los fines de semana leo libros.', countable: true },
      { english: 'time', spanish: 'tiempo/hora', phonetic: 'TAIM', example: 'What time is it?', exampleEs: '¿Qué hora es?', countable: false },
      { english: "o'clock", spanish: 'en punto', phonetic: 'oh-KLAK', example: "It's seven o'clock.", exampleEs: 'Son las siete en punto.', countable: false },
      { english: 'today', spanish: 'hoy', phonetic: 'tuh-DAY', example: 'Today is Monday.', exampleEs: 'Hoy es lunes.', countable: false },
      { english: 'work', spanish: 'trabajo', phonetic: 'WERK', example: 'I go to work at nine.', exampleEs: 'Voy al trabajo a las nueve.', countable: false }
    ]
  },
  food: {
    name: 'Comida y Bebida', icon: '🍕', color: '#ef4444',
    words: [
      { english: 'bread', spanish: 'pan', phonetic: 'BRED', example: 'I eat bread for breakfast.', exampleEs: 'Como pan en el desayuno.', countable: false },
      { english: 'water', spanish: 'agua', phonetic: 'WAH-der', example: 'Can I have some water?', exampleEs: '¿Me puede dar agua?', countable: false },
      { english: 'milk', spanish: 'leche', phonetic: 'MILK', example: 'I drink milk every morning.', exampleEs: 'Tomo leche cada mañana.', countable: false },
      { english: 'coffee', spanish: 'café', phonetic: 'KAW-fee', example: 'I drink coffee every day.', exampleEs: 'Tomo café todos los días.', countable: false },
      { english: 'tea', spanish: 'té', phonetic: 'TEE', example: 'Would you like some tea?', exampleEs: '¿Te gustaría un poco de té?', countable: false },
      { english: 'cheese', spanish: 'queso', phonetic: 'CHEEZ', example: 'I like cheese on my sandwich.', exampleEs: 'Me gusta el queso en mi sándwich.', countable: false },
      { english: 'chicken', spanish: 'pollo', phonetic: 'CHIK-en', example: 'Can I have a chicken sandwich?', exampleEs: '¿Me puede dar un sándwich de pollo?', countable: false },
      { english: 'meat', spanish: 'carne', phonetic: 'MEET', example: 'I don\'t eat meat.', exampleEs: 'No como carne.', countable: false },
      { english: 'sandwich', spanish: 'sándwich', phonetic: 'SAND-wich', example: 'I want a sandwich, please.', exampleEs: 'Quiero un sándwich, por favor.', countable: true },
      { english: 'pizza', spanish: 'pizza', phonetic: 'PEET-suh', example: 'Let\'s order pizza!', exampleEs: '¡Pidamos pizza!', countable: true },
      { english: 'apple', spanish: 'manzana', phonetic: 'AH-pul', example: 'I eat an apple every day.', exampleEs: 'Como una manzana todos los días.', countable: true },
      { english: 'rice', spanish: 'arroz', phonetic: 'RAIS', example: 'I have rice for lunch.', exampleEs: 'Como arroz en el almuerzo.', countable: false }
    ]
  },
  transport: {
    name: 'Transporte y Ciudad', icon: '🚌', color: '#8b5cf6',
    words: [
      { english: 'airport', spanish: 'aeropuerto', phonetic: 'AIR-port', example: 'Check-in at the airport.', exampleEs: 'Registrarse en el aeropuerto.', countable: true },
      { english: 'hotel', spanish: 'hotel', phonetic: 'hoh-TEL', example: 'The hotel is near the park.', exampleEs: 'El hotel está cerca del parque.', countable: true },
      { english: 'street', spanish: 'calle', phonetic: 'STREET', example: 'Go straight on this street.', exampleEs: 'Ve recto por esta calle.', countable: true },
      { english: 'store', spanish: 'tienda', phonetic: 'STOR', example: 'The store is closed.', exampleEs: 'La tienda está cerrada.', countable: true },
      { english: 'park', spanish: 'parque', phonetic: 'PARK', example: 'Let\'s go to the park.', exampleEs: 'Vamos al parque.', countable: true },
      { english: 'station', spanish: 'estación', phonetic: 'STAY-shun', example: 'Where is the station?', exampleEs: '¿Dónde está la estación?', countable: true },
      { english: 'car', spanish: 'carro/auto', phonetic: 'KAR', example: 'I drive a car.', exampleEs: 'Manejo un carro.', countable: true },
      { english: 'bus', spanish: 'autobús', phonetic: 'BUS', example: 'I take the bus to work.', exampleEs: 'Tomo el autobús al trabajo.', countable: true },
      { english: 'train', spanish: 'tren', phonetic: 'TRAYN', example: 'The train is at 3 o\'clock.', exampleEs: 'El tren es a las 3.', countable: true },
      { english: 'plane', spanish: 'avión', phonetic: 'PLAYN', example: 'I fly by plane.', exampleEs: 'Vuelo en avión.', countable: true },
      { english: 'subway', spanish: 'metro', phonetic: 'SUB-way', example: 'Where is the subway station?', exampleEs: '¿Dónde está la estación del metro?', countable: true },
      { english: 'ticket', spanish: 'boleto', phonetic: 'TIK-et', example: 'Buy a bus ticket.', exampleEs: 'Compra un boleto de autobús.', countable: true }
    ]
  },
  clothing: {
    name: 'Ropa y Compras', icon: '👔', color: '#14b8a6',
    words: [
      { english: 'shirt', spanish: 'camisa', phonetic: 'SHERT', example: 'How much is this shirt?', exampleEs: '¿Cuánto cuesta esta camisa?', countable: true },
      { english: 'pants', spanish: 'pantalones', phonetic: 'PANTS', example: 'These pants are cheap.', exampleEs: 'Estos pantalones son baratos.', countable: true },
      { english: 'dress', spanish: 'vestido', phonetic: 'DRES', example: 'She is wearing a red dress.', exampleEs: 'Ella lleva un vestido rojo.', countable: true },
      { english: 'shoes', spanish: 'zapatos', phonetic: 'SHOOZ', example: 'I need new shoes.', exampleEs: 'Necesito zapatos nuevos.', countable: true },
      { english: 'coat', spanish: 'abrigo', phonetic: 'KOHT', example: 'Put on your coat.', exampleEs: 'Ponte el abrigo.', countable: true },
      { english: 'hat', spanish: 'sombrero/gorra', phonetic: 'HAT', example: 'He always wears a hat.', exampleEs: 'Él siempre usa sombrero.', countable: true },
      { english: 'cheap', spanish: 'barato', phonetic: 'CHEEP', example: 'This is very cheap.', exampleEs: 'Esto es muy barato.', countable: false },
      { english: 'expensive', spanish: 'caro', phonetic: 'ek-SPEN-siv', example: 'That bag is too expensive.', exampleEs: 'Esa bolsa es muy cara.', countable: false },
      { english: 'price', spanish: 'precio', phonetic: 'PRAIS', example: 'What is the price?', exampleEs: '¿Cuál es el precio?', countable: true },
      { english: 'dollar', spanish: 'dólar', phonetic: 'DAH-ler', example: 'I have fifty dollars.', exampleEs: 'Tengo cincuenta dólares.', countable: true },
      { english: 'size', spanish: 'talla', phonetic: 'SAIZ', example: 'What size do you need?', exampleEs: '¿Qué talla necesitas?', countable: true },
      { english: 'socks', spanish: 'medias/calcetines', phonetic: 'SAKS', example: 'I need white socks.', exampleEs: 'Necesito medias blancas.', countable: true }
    ]
  },
  weather: {
    name: 'Clima y Naturaleza', icon: '🌤️', color: '#f97316',
    words: [
      { english: 'weather', spanish: 'clima', phonetic: 'WEH-ther', example: 'The weather is sunny today.', exampleEs: 'El clima está soleado hoy.', countable: false },
      { english: 'sun', spanish: 'sol', phonetic: 'SUN', example: 'The sun is very bright.', exampleEs: 'El sol está muy brillante.', countable: true },
      { english: 'rain', spanish: 'lluvia', phonetic: 'RAYN', example: 'It\'s going to rain tomorrow.', exampleEs: 'Va a llover mañana.', countable: false },
      { english: 'snow', spanish: 'nieve', phonetic: 'SNOH', example: 'It\'s snowing outside.', exampleEs: 'Está nevando afuera.', countable: false },
      { english: 'hot', spanish: 'caliente/calor', phonetic: 'HAT', example: 'It is very hot today.', exampleEs: 'Hace mucho calor hoy.', countable: false },
      { english: 'cold', spanish: 'frío', phonetic: 'KOHLD', example: 'It is very cold this morning.', exampleEs: 'Hace mucho frío esta mañana.', countable: false },
      { english: 'sunny', spanish: 'soleado', phonetic: 'SUH-nee', example: 'It\'s a sunny day.', exampleEs: 'Es un día soleado.', countable: false },
      { english: 'wind', spanish: 'viento', phonetic: 'WIND', example: 'The wind is strong.', exampleEs: 'El viento es fuerte.', countable: false },
      { english: 'beach', spanish: 'playa', phonetic: 'BEECH', example: 'Let\'s go to the beach.', exampleEs: 'Vamos a la playa.', countable: true },
      { english: 'tree', spanish: 'árbol', phonetic: 'TREE', example: 'There is a big tree in the park.', exampleEs: 'Hay un árbol grande en el parque.', countable: true },
      { english: 'flower', spanish: 'flor', phonetic: 'FLAU-er', example: 'The flowers are beautiful.', exampleEs: 'Las flores son hermosas.', countable: true },
      { english: 'river', spanish: 'río', phonetic: 'RIV-er', example: 'The river is very long.', exampleEs: 'El río es muy largo.', countable: true }
    ]
  },
  abilities: {
    name: 'Habilidades y Estados', icon: '💪', color: '#6366f1',
    words: [
      { english: 'speak', spanish: 'hablar', phonetic: 'SPEEK', example: 'I can speak English.', exampleEs: 'Puedo hablar inglés.', countable: false },
      { english: 'read', spanish: 'leer', phonetic: 'REED', example: 'I read books every night.', exampleEs: 'Leo libros cada noche.', countable: false },
      { english: 'write', spanish: 'escribir', phonetic: 'RAIT', example: 'She can write very well.', exampleEs: 'Ella puede escribir muy bien.', countable: false },
      { english: 'listen', spanish: 'escuchar', phonetic: 'LIS-en', example: 'Listen to the teacher.', exampleEs: 'Escucha al profesor.', countable: false },
      { english: 'play', spanish: 'jugar/tocar', phonetic: 'PLAY', example: 'I play soccer on weekends.', exampleEs: 'Juego fútbol los fines de semana.', countable: false },
      { english: 'run', spanish: 'correr', phonetic: 'RUN', example: 'He can run very fast.', exampleEs: 'Él puede correr muy rápido.', countable: false },
      { english: 'swim', spanish: 'nadar', phonetic: 'SWIM', example: 'Can you swim?', exampleEs: '¿Sabes nadar?', countable: false },
      { english: 'happy', spanish: 'feliz', phonetic: 'HAE-pee', example: 'I am very happy today.', exampleEs: 'Estoy muy feliz hoy.', countable: false },
      { english: 'tired', spanish: 'cansado/a', phonetic: 'TAIRD', example: 'I feel tired after work.', exampleEs: 'Me siento cansado después del trabajo.', countable: false },
      { english: 'busy', spanish: 'ocupado/a', phonetic: 'BIZ-ee', example: 'She is very busy today.', exampleEs: 'Ella está muy ocupada hoy.', countable: false },
      { english: 'sick', spanish: 'enfermo/a', phonetic: 'SIK', example: 'He is sick today.', exampleEs: 'Él está enfermo hoy.', countable: false },
      { english: 'hungry', spanish: 'hambriento/a', phonetic: 'HUN-gree', example: 'I am very hungry.', exampleEs: 'Tengo mucha hambre.', countable: false }
    ]
  }
},

// ---- DIALOGUES ----
dialogues: [
  {
    id: 'greeting', title: 'Saludos y Deletrear Nombres', icon: '👋', situation: 'Dos personas se conocen por primera vez y practican deletrear sus nombres.',
    lines: [
      { speaker: 'A', en: "Hi! My name is Sarah. What's your name?", es: '¡Hola! Mi nombre es Sarah. ¿Cuál es tu nombre?' },
      { speaker: 'B', en: "Hello! I'm Carlos. Nice to meet you!", es: '¡Hola! Soy Carlos. ¡Mucho gusto!' },
      { speaker: 'A', en: 'Nice to meet you too! How do you spell your name?', es: '¡Mucho gusto también! ¿Cómo deletreas tu nombre?' },
      { speaker: 'B', en: 'C-A-R-L-O-S.', es: 'C-A-R-L-O-S.' },
      { speaker: 'A', en: 'Where are you from?', es: '¿De dónde eres?' },
      { speaker: 'B', en: "I'm from Colombia. And you?", es: 'Soy de Colombia. ¿Y tú?' },
      { speaker: 'A', en: "I'm from the United States.", es: 'Soy de los Estados Unidos.' },
      { speaker: 'B', en: 'How old are you?', es: '¿Cuántos años tienes?' },
      { speaker: 'A', en: "I'm twenty-five years old.", es: 'Tengo veinticinco años.' }
    ],
    keyPhrases: ["What's your name?", "Nice to meet you!", "How do you spell...?", "Where are you from?", "I'm from...", "How old are you?"],
    grammarNotes: 'Se usa el verbo TO BE para identidad (I\'m Carlos), origen (I\'m from Colombia) y edad (I\'m 25 years old). Las contracciones son naturales al hablar.'
  },
  {
    id: 'restaurant', title: 'En un Restaurante', icon: '🍽️', situation: 'Un cliente ordena comida en un restaurante.',
    lines: [
      { speaker: 'A', en: "Good evening! Here's the menu.", es: '¡Buenas noches! Aquí está el menú.' },
      { speaker: 'B', en: 'Thank you. Can I have a chicken sandwich, please?', es: 'Gracias. ¿Me puede dar un sándwich de pollo, por favor?' },
      { speaker: 'A', en: 'Sure. Would you like something to drink?', es: 'Claro. ¿Le gustaría algo de tomar?' },
      { speaker: 'B', en: "Yes, I'd like a coffee, please.", es: 'Sí, me gustaría un café, por favor.' },
      { speaker: 'A', en: 'Anything else?', es: '¿Algo más?' },
      { speaker: 'B', en: "No, that's all. How much is it?", es: 'No, eso es todo. ¿Cuánto cuesta?' },
      { speaker: 'A', en: "That's twelve dollars.", es: 'Son doce dólares.' },
      { speaker: 'B', en: 'Here you go. Thank you!', es: 'Aquí tiene. ¡Gracias!' }
    ],
    keyPhrases: ["Can I have...please?", "Would you like...?", "I'd like...", "Anything else?", "How much is it?", "Here you go."],
    grammarNotes: '"Can I have" para pedir cortésmente. "Would like" (I\'d like) para deseos formales. "How much is it?" para preguntar el precio.'
  },
  {
    id: 'shopping', title: 'Comprando Ropa', icon: '🛍️', situation: 'Un cliente busca una camisa en una tienda de ropa.',
    lines: [
      { speaker: 'B', en: 'Excuse me, how much is this blue shirt?', es: 'Disculpe, ¿cuánto cuesta esta camisa azul?' },
      { speaker: 'A', en: "It's twenty-five dollars.", es: 'Cuesta veinticinco dólares.' },
      { speaker: 'B', en: 'Do you have it in a different size?', es: '¿La tienen en otra talla?' },
      { speaker: 'A', en: 'Yes, we have small, medium, and large.', es: 'Sí, tenemos pequeña, mediana y grande.' },
      { speaker: 'B', en: "I'd like the medium, please.", es: 'Quisiera la mediana, por favor.' },
      { speaker: 'A', en: 'Here you go. Would you like anything else?', es: 'Aquí tiene. ¿Le gustaría algo más?' },
      { speaker: 'B', en: "No, thank you. I'll take it.", es: 'No, gracias. Me lo llevo.' }
    ],
    keyPhrases: ["How much is...?", "Do you have it in...?", "I'd like the...", "I'll take it."],
    grammarNotes: '"How much" para preguntar precios. "Do you have" (presente simple con do). "I\'ll take it" (will para decisión espontánea).'
  },
  {
    id: 'directions', title: 'Pidiendo Direcciones', icon: '🗺️', situation: 'Un turista pide indicaciones para llegar a la estación del metro.',
    lines: [
      { speaker: 'B', en: 'Excuse me, where is the subway station?', es: 'Disculpe, ¿dónde está la estación del metro?' },
      { speaker: 'A', en: 'Go straight on this road, then turn left at the park.', es: 'Ve recto por esta calle, luego gira a la izquierda en el parque.' },
      { speaker: 'B', en: 'Is it far from here?', es: '¿Está lejos de aquí?' },
      { speaker: 'A', en: "No, it's about five minutes on foot.", es: 'No, está a unos cinco minutos a pie.' },
      { speaker: 'B', en: 'Thank you very much!', es: '¡Muchas gracias!' },
      { speaker: 'A', en: "You're welcome!", es: '¡De nada!' }
    ],
    keyPhrases: ["Where is...?", "Go straight", "Turn left/right", "Is it far?", "On foot", "You're welcome!"],
    grammarNotes: '"Where is" para ubicaciones. Imperativo (Go, Turn) para dar instrucciones. Preposiciones de lugar (on, at).'
  },
  {
    id: 'hotel', title: 'Check-in en Hotel', icon: '🏨', situation: 'Un huésped se registra en la recepción del hotel.',
    lines: [
      { speaker: 'B', en: 'Good afternoon. I have a reservation.', es: 'Buenas tardes. Tengo una reservación.' },
      { speaker: 'A', en: "What's your name, please?", es: '¿Cuál es su nombre, por favor?' },
      { speaker: 'B', en: 'My name is Carlos Martinez. M-A-R-T-I-N-E-Z.', es: 'Mi nombre es Carlos Martínez. M-A-R-T-I-N-E-Z.' },
      { speaker: 'A', en: 'Yes, I found it. Room 305, on the third floor.', es: 'Sí, lo encontré. Habitación 305, en el tercer piso.' },
      { speaker: 'B', en: 'What time is check-out?', es: '¿A qué hora es el check-out?' },
      { speaker: 'A', en: "Check-out is at eleven o'clock.", es: 'El check-out es a las once en punto.' },
      { speaker: 'B', en: 'Thank you!', es: '¡Gracias!' }
    ],
    keyPhrases: ["I have a reservation.", "What's your name?", "Room 305", "On the third floor", "What time is...?", "At eleven o'clock"],
    grammarNotes: '"I have" (americano, no "I\'ve got"). Deletrear apellidos. Números ordinales (third floor). Hora con "at" + o\'clock.'
  },
  {
    id: 'routine', title: 'Rutina Diaria', icon: '📅', situation: 'Dos amigos hablan sobre sus rutinas y actividades diarias.',
    lines: [
      { speaker: 'A', en: 'What time do you wake up?', es: '¿A qué hora te despiertas?' },
      { speaker: 'B', en: "I wake up at seven o'clock.", es: 'Me despierto a las siete en punto.' },
      { speaker: 'A', en: 'What do you do in the morning?', es: '¿Qué haces en la mañana?' },
      { speaker: 'B', en: 'I have breakfast and then I go to work.', es: 'Desayuno y luego voy al trabajo.' },
      { speaker: 'A', en: 'What do you do on weekends?', es: '¿Qué haces los fines de semana?' },
      { speaker: 'B', en: 'On weekends I read books and go to the park.', es: 'Los fines de semana leo libros y voy al parque.' },
      { speaker: 'A', en: 'Do you play any sports?', es: '¿Practicas algún deporte?' },
      { speaker: 'B', en: 'Yes, I can swim and I play soccer.', es: 'Sí, sé nadar y juego fútbol.' }
    ],
    keyPhrases: ["What time do you...?", "I wake up at...", "What do you do...?", "I have breakfast", "On weekends", "Do you play...?"],
    grammarNotes: 'Presente simple para rutinas. "Do you" para preguntas. Preposiciones de tiempo: "at" (hora), "in" (mañana/tarde), "on" (días).'
  }
],

// ---- QUIZZES ----
quizzes: {
  grammar: [
    { q: 'She ___ a teacher.', options: ['is', 'am', 'are', 'be'], answer: 'is', explanation: '"She" es tercera persona singular → "is"' },
    { q: 'I ___ to school every day.', options: ['go', 'goes', 'going', 'went'], answer: 'go', explanation: '"I" usa verbo base sin -s' },
    { q: 'They ___ playing soccer now.', options: ['is', 'am', 'are', 'be'], answer: 'are', explanation: '"They" = plural → "are" + playing (presente continuo)' },
    { q: 'He ___ breakfast at 7.', options: ['have', 'has', 'having', 'had'], answer: 'has', explanation: '"He" = tercera persona → "has" (presente simple)' },
    { q: '___ you like coffee?', options: ['Do', 'Does', 'Are', 'Is'], answer: 'Do', explanation: 'Auxiliar para "you" en presente simple = "Do"' },
    { q: "She doesn't ___ a car.", options: ['have', 'has', 'having', 'had'], answer: 'have', explanation: "Después de doesn't, siempre verbo BASE" },
    { q: 'I ___ born in 1995.', options: ['am', 'was', 'were', 'is'], answer: 'was', explanation: '"Born" siempre en pasado con "was"' },
    { q: 'They ___ to the park yesterday.', options: ['go', 'goes', 'went', 'going'], answer: 'went', explanation: 'Pasado de "go" = "went" (irregular)' },
    { q: '___ you speak English?', options: ['Do', 'Can', 'Are', 'Have'], answer: 'Can', explanation: 'Habilidad = "Can" (modal)' },
    { q: "I'd like ___ a coffee.", options: ['have', 'having', 'to have', 'had'], answer: 'to have', explanation: 'Would like + to + infinitivo' },
    { q: 'There ___ many people in the park.', options: ['is', 'are', 'was', 'has'], answer: 'are', explanation: '"People" es plural → "are"' },
    { q: 'This is ___ university.', options: ['a', 'an', 'the', '--'], answer: 'a', explanation: '"University" empieza con sonido /j/ (consonante) → "a"' },
    { q: 'The cat is ___ the table.', options: ['in', 'on', 'under', 'at'], answer: 'under', explanation: 'Debajo de = "under"' },
    { q: "I don't have ___ money.", options: ['some', 'any', 'many', 'a'], answer: 'any', explanation: 'Oración negativa → "any"' },
    { q: "___ go to the movies!", options: ['Let', "Let's", 'Lets', 'Let we'], answer: "Let's", explanation: 'Sugerencia colectiva = "Let\'s"' }
  ],
  vocabulary: [
    { q: '¿Cómo se dice "hermano" en inglés?', options: ['brother', 'sister', 'father', 'cousin'], answer: 'brother', explanation: 'Brother = hermano' },
    { q: '"Kitchen" en español es:', options: ['cocina', 'baño', 'sala', 'dormitorio'], answer: 'cocina', explanation: 'Kitchen = cocina' },
    { q: '¿Cómo se dice "desayuno"?', options: ['dinner', 'lunch', 'breakfast', 'supper'], answer: 'breakfast', explanation: 'Breakfast = desayuno' },
    { q: '"Apartment" en español es:', options: ['casa', 'apartamento', 'piso', 'edificio'], answer: 'apartamento', explanation: 'Apartment = apartamento (americano)' },
    { q: '¿Cuál es la palabra para "barato"?', options: ['expensive', 'cheap', 'price', 'cost'], answer: 'cheap', explanation: 'Cheap = barato' },
    { q: '"Weather" significa:', options: ['agua', 'clima', 'viento', 'lluvia'], answer: 'clima', explanation: 'Weather = clima' },
    { q: '¿Cómo se dice "boleto"?', options: ['ticket', 'wallet', 'purse', 'card'], answer: 'ticket', explanation: 'Ticket = boleto' },
    { q: '"Tired" en español es:', options: ['feliz', 'triste', 'cansado', 'enojado'], answer: 'cansado', explanation: 'Tired = cansado' },
    { q: '¿Cuál es lo opuesto de "hot"?', options: ['warm', 'cool', 'cold', 'sunny'], answer: 'cold', explanation: 'Hot ↔ Cold (caliente ↔ frío)' },
    { q: '"Subway" significa:', options: ['autobús', 'tren', 'metro', 'avión'], answer: 'metro', explanation: 'Subway = metro (americano)' },
    { q: '¿Cómo se dice "zapatos"?', options: ['socks', 'shoes', 'shirt', 'pants'], answer: 'shoes', explanation: 'Shoes = zapatos' },
    { q: '"Husband" en español es:', options: ['hermano', 'esposo', 'padre', 'hijo'], answer: 'esposo', explanation: 'Husband = esposo' },
    { q: '¿Cómo pides un sándwich cortésmente?', options: ['Give me', 'I want', 'Can I have', 'Take me'], answer: 'Can I have', explanation: '"Can I have...please?" es cortés' },
    { q: '¿Cuál NO es incontable?', options: ['water', 'bread', 'apple', 'milk'], answer: 'apple', explanation: 'Apple es contable (one apple, two apples)' },
    { q: '"Morning" significa:', options: ['tarde', 'noche', 'mañana', 'mediodía'], answer: 'mañana', explanation: 'Morning = mañana' }
  ],
  pronunciation: [
    { q: 'En inglés americano, ¿cómo suena la T en "water"?', options: ['Como T fuerte', 'Como D suave', 'Como R española', 'Silenciosa'], answer: 'Como D suave', explanation: 'Flap T: entre vocales, la T suena como D suave' },
    { q: '¿Qué es el sonido "schwa"?', options: ['Vocal fuerte', 'Vocal neutra breve', 'Consonante', 'Silencio'], answer: 'Vocal neutra breve', explanation: 'Schwa /ə/ es el sonido vocálico más frecuente: breve, neutro, como suspiro' },
    { q: 'La R americana se pronuncia:', options: ['Vibrando la lengua', 'Curvando la lengua hacia atrás', 'No se pronuncia', 'Igual que en español'], answer: 'Curvando la lengua hacia atrás', explanation: 'Rhotic R: la lengua se curva hacia atrás sin tocar el paladar' },
    { q: '¿Cuál es un error común de hispanohablantes?', options: ["Decir 'e-speak'", 'Pronunciar bien la R', 'Omitir la T', 'Agregar S al final'], answer: "Decir 'e-speak'", explanation: 'Vocal protética: agregar E antes de S+consonante' },
    { q: 'La Dark L americana es:', options: ['Igual que la L española', 'Tiene resonancia profunda', 'No se pronuncia', 'Suena como R'], answer: 'Tiene resonancia profunda', explanation: 'Dark L tiene resonancia velar profunda' },
    { q: '¿En qué palabra hay sonido schwa?', options: ['cat', 'about', 'tree', 'dog'], answer: 'about', explanation: 'About = /uh-BAUT/, la primera sílaba tiene schwa' },
    { q: 'Las oraciones afirmativas tienen entonación:', options: ['Ascendente ↗', 'Descendente ↘', 'Plana →', 'Variable'], answer: 'Descendente ↘', explanation: 'Afirmaciones = entonación descendente ↘' },
    { q: '"Dance" en americano rima con:', options: ['ants', 'aunts', 'arts', 'lots'], answer: 'ants', explanation: 'Flat A americana: dance /dæns/ rima con ants' },
    { q: '¿Cómo diferenciar "very" de "berry"?', options: ['V labiodental, B bilabial', 'Son iguales', 'Solo cambia el tono', 'Por el contexto'], answer: 'V labiodental, B bilabial', explanation: 'V: labio inferior toca dientes. B: ambos labios juntos' },
    { q: 'Las preguntas de sí/no tienen entonación:', options: ['Descendente ↘', 'Ascendente ↗', 'Plana →', 'Desc-Asc ↘↗'], answer: 'Ascendente ↗', explanation: 'Yes/No questions = entonación ascendente ↗' }
  ]
},

// ---- ACHIEVEMENTS ----
achievements: [
  { id: 'first_step', title: 'Primer Paso', description: 'Completa tu primera lección', icon: '🌟' },
  { id: 'grammar_starter', title: 'Gramático Novato', description: 'Completa tu primer ejercicio de gramática', icon: '📝' },
  { id: 'sound_master', title: 'Maestro del Sonido', description: 'Completa todas las reglas de pronunciación', icon: '🔊' },
  { id: 'word_10', title: 'Coleccionista (10)', description: 'Aprende 10 palabras de vocabulario', icon: '📖' },
  { id: 'word_50', title: 'Coleccionista (50)', description: 'Aprende 50 palabras de vocabulario', icon: '📖' },
  { id: 'word_100', title: 'Coleccionista (100)', description: 'Aprende 100 palabras de vocabulario', icon: '📖' },
  { id: 'streak_3', title: 'Racha de 3 Días', description: 'Estudia 3 días seguidos', icon: '🔥' },
  { id: 'streak_7', title: 'Racha de 7 Días', description: 'Estudia 7 días seguidos', icon: '🔥' },
  { id: 'streak_30', title: 'Racha de 30 Días', description: 'Estudia 30 días seguidos', icon: '🔥' },
  { id: 'quiz_master', title: 'Quiz Perfecto', description: 'Obtén 100% en cualquier quiz', icon: '🎯' },
  { id: 'conversationalist', title: 'Conversador', description: 'Completa todos los diálogos', icon: '💬' },
  { id: 'card_shark', title: 'As de las Cartas', description: 'Lleva 10 flashcards a la Caja 5', icon: '🃏' },
  { id: 'goldlist_guru', title: 'Gurú Goldlist', description: 'Completa tu primera destilación', icon: '📓' },
  { id: 'a1_champion', title: 'Campeón A1', description: 'Completa todos los módulos', icon: '🏆' },
  { id: 'xp_legend', title: 'Leyenda XP', description: 'Gana 1000 XP', icon: '⭐' }
],

// ---- A1 CHECKLIST ----
a1Checklist: [
  'Puedo presentarme y presentar a otros',
  'Puedo deletrear mi nombre',
  'Puedo preguntar y decir mi edad',
  'Puedo describir a mi familia',
  'Puedo hablar sobre mi casa',
  'Puedo describir mi rutina diaria',
  'Puedo pedir comida en un restaurante',
  'Puedo preguntar precios y comprar cosas',
  'Puedo pedir y dar direcciones básicas',
  'Puedo registrarme en un hotel',
  'Puedo hablar sobre el clima',
  'Puedo usar presente, pasado y futuro básicos',
  'Puedo usar can/can\'t para habilidades',
  'Puedo entender instrucciones simples',
  'Puedo pronunciar los 5 sonidos americanos'
]

};
