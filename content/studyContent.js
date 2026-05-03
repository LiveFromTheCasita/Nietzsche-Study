export const periods = [
  {
    name: "Early Nietzsche",
    years: "1869–1876",
    focus: "Tragedy, art, Schopenhauer, Wagner, Greek culture",
    works: "The Birth of Tragedy; Untimely Meditations",
    accent: "amber",
    question: "Can art justify existence in the face of suffering?",
  },
  {
    name: "Middle Nietzsche",
    years: "1878–1882",
    focus: "Free spirits, psychology, genealogy, anti-metaphysics",
    works: "Human, All Too Human; Daybreak; The Gay Science",
    accent: "sky",
    question: "What remains after inherited ideals are examined psychologically?",
  },
  {
    name: "Late Nietzsche",
    years: "1883–1888",
    focus: "Revaluation, will to power, Christianity, decadence, affirmation",
    works: "Zarathustra; Beyond Good and Evil; Genealogy; Twilight; Antichrist; Ecce Homo",
    accent: "rose",
    question: "How can new values be created after the death of God?",
  },
];

export const startingPoints = [
  {
    title: "I am new to Nietzsche",
    instruction:
      "Begin with The Gay Science §125, then read the Beyond Good and Evil Preface. You meet the central problem before the harder prophetic style of Zarathustra.",
    marker: "first hour",
  },
  {
    title: "I want the big problem",
    instruction:
      "Follow the death of God into nihilism: Gay Science §108, §125, §343, then Genealogy III §27. Ask what still has authority after inherited values collapse.",
    marker: "core thread",
  },
  {
    title: "I want transformation",
    instruction:
      "Move from self-overcoming to amor fati: Zarathustra, ‘On Self-Overcoming,’ Gay Science §341, and Ecce Homo, ‘Why I Am So Clever’ §§9–10.",
    marker: "life practice",
  },
];

export const beginnerReadingPath = [
  {
    step: "The problem appears",
    reading: "The Gay Science §125",
    purpose: "Meet the death of God as a cultural and spiritual crisis, not merely a claim about belief.",
  },
  {
    step: "The philosopher is unmasked",
    reading: "Beyond Good and Evil, Preface and §6",
    purpose: "See how Nietzsche questions the hidden motives inside philosophy itself.",
  },
  {
    step: "Morality gets a history",
    reading: "On the Genealogy of Morals, Preface and Essay I",
    purpose: "Learn Nietzsche’s genealogical method through master morality, slave morality, and ressentiment.",
  },
  {
    step: "A new human possibility appears",
    reading: "Thus Spoke Zarathustra, Prologue §3–5",
    purpose: "Encounter the overman and the last man as rival images of humanity’s future.",
  },
  {
    step: "Affirmation becomes the test",
    reading: "The Gay Science §341 and Ecce Homo, ‘Why I Am So Clever’ §§9–10",
    purpose: "Move from critique to the question of whether life can be affirmed without reservation.",
  },
];

export const themeMeta = {
  "master-slave-ressentiment": {
    tag: "morality",
    period: "late",
    difficulty: "essential",
    question: "Do values arise from strength that names itself good, or from weakness that condemns its opposite?",
    misreading:
      "Do not translate this into a simple praise of cruelty or class hierarchy. Nietzsche is diagnosing types of valuation and their psychological origins.",
    relatedThemeIds: [
      "bad-conscience-guilt",
      "herd-morality-last-man",
      "nobility-rank-higher-type",
      "revaluation-philosophizing-with-hammer",
    ],
  },
  "death-of-god-nihilism": {
    tag: "nihilism",
    period: "middle → late",
    difficulty: "essential",
    question: "What happens when the highest inherited source of value loses authority?",
    misreading:
      "Do not read the death of God as a simple atheist slogan. Nietzsche is asking what happens to value, truth, purpose, and culture after belief loses authority.",
    relatedThemeIds: [
      "eternal-recurrence-amor-fati",
      "revaluation-philosophizing-with-hammer",
      "overman-transformation",
      "herd-morality-last-man",
      "perspectivism-truth",
    ],
  },
  "will-to-power-self-overcoming": {
    tag: "psychology",
    period: "late",
    difficulty: "advanced",
    question: "What drives interpretation, growth, resistance, command, and self-overcoming?",
    misreading:
      "Do not flatten will to power into brute domination. Nietzsche uses it to interpret growth, ordering, incorporation, and transformation.",
    relatedThemeIds: [
      "overman-transformation",
      "nobility-rank-higher-type",
      "eternal-recurrence-amor-fati",
      "perspectivism-truth",
      "dionysian-tragic-affirmation",
    ],
  },
  "eternal-recurrence-amor-fati": {
    tag: "affirmation",
    period: "middle → late",
    difficulty: "advanced",
    question: "Could you will the whole of your life again, exactly as it has been?",
    misreading:
      "Do not reduce eternal recurrence too quickly to a cosmological doctrine. Its existential force is the test of whether one can affirm life without reservation.",
    relatedThemeIds: [
      "death-of-god-nihilism",
      "will-to-power-self-overcoming",
      "dionysian-tragic-affirmation",
      "overman-transformation",
    ],
  },
  "perspectivism-truth": {
    tag: "truth",
    period: "middle → late",
    difficulty: "advanced",
    question: "What becomes of truth when knowing is always embodied, interested, and interpretive?",
    misreading:
      "Do not confuse perspectivism with lazy relativism. Nietzsche asks how interpretations are formed, ranked, strengthened, and tested.",
    relatedThemeIds: [
      "death-of-god-nihilism",
      "revaluation-philosophizing-with-hammer",
      "ascetic-ideal-life-denial",
      "will-to-power-self-overcoming",
    ],
  },
  "herd-morality-last-man": {
    tag: "modernity",
    period: "middle → late",
    difficulty: "intermediate",
    question: "What kind of humanity wants comfort more than greatness?",
    misreading:
      "Do not read this as simple contempt for ordinary people. Nietzsche is diagnosing a value-orientation that makes comfort the highest goal.",
    relatedThemeIds: [
      "death-of-god-nihilism",
      "master-slave-ressentiment",
      "overman-transformation",
      "nobility-rank-higher-type",
    ],
  },
  "nobility-rank-higher-type": {
    tag: "culture",
    period: "late",
    difficulty: "advanced",
    question: "What conditions make higher culture, excellence, and spiritual distance possible?",
    misreading:
      "Do not reduce order of rank to crude social snobbery. Nietzsche is asking what kinds of discipline, distance, and valuation make higher forms of life possible.",
    relatedThemeIds: [
      "master-slave-ressentiment",
      "will-to-power-self-overcoming",
      "overman-transformation",
      "herd-morality-last-man",
    ],
  },
  "bad-conscience-guilt": {
    tag: "psychology",
    period: "late",
    difficulty: "advanced",
    question: "What happens when blocked aggression becomes moral judgment against the self?",
    misreading:
      "Do not treat bad conscience as simple remorse. Nietzsche is tracing a historical structure of internalized cruelty, guilt, and debt.",
    relatedThemeIds: [
      "master-slave-ressentiment",
      "ascetic-ideal-life-denial",
      "revaluation-philosophizing-with-hammer",
    ],
  },
  "ascetic-ideal-life-denial": {
    tag: "religion",
    period: "late",
    difficulty: "advanced",
    question: "When does a moral ideal become a will against life?",
    misreading:
      "Do not reduce Nietzsche’s critique to simple unbelief. His deepest target is the moral interpretation of suffering and the type of human being it cultivates.",
    relatedThemeIds: [
      "bad-conscience-guilt",
      "master-slave-ressentiment",
      "death-of-god-nihilism",
      "perspectivism-truth",
    ],
  },
  "dionysian-tragic-affirmation": {
    tag: "art",
    period: "early → late",
    difficulty: "essential",
    question: "How do form and rapture together make tragic affirmation possible?",
    misreading:
      "Do not treat the Apollonian and Dionysian as a simple good-versus-bad opposition. Their tension is productive; tragedy arises from their difficult union.",
    relatedThemeIds: [
      "eternal-recurrence-amor-fati",
      "will-to-power-self-overcoming",
      "death-of-god-nihilism",
    ],
  },
  "revaluation-philosophizing-with-hammer": {
    tag: "method",
    period: "middle → late",
    difficulty: "advanced",
    question: "How can inherited values be judged, overturned, and recreated?",
    misreading:
      "Do not treat revaluation as a new list of commandments. Nietzsche is asking what our values are worth and what kinds of life they serve.",
    relatedThemeIds: [
      "death-of-god-nihilism",
      "master-slave-ressentiment",
      "ascetic-ideal-life-denial",
      "perspectivism-truth",
    ],
  },
  "overman-transformation": {
    tag: "self-overcoming",
    period: "late",
    difficulty: "essential",
    question: "What kind of human being could create values after the collapse of old ideals?",
    misreading:
      "Do not turn the overman into a comic-book strongman. The issue is a higher form of value-creation and self-discipline.",
    relatedThemeIds: [
      "death-of-god-nihilism",
      "will-to-power-self-overcoming",
      "nobility-rank-higher-type",
      "herd-morality-last-man",
      "eternal-recurrence-amor-fati",
    ],
  },
};

export const submittedPapersByTheme = {
  "master-slave-ressentiment": [
    {
      id: "master-morality-slave-morality-ressentiment-paper-1",
      slug: "master-morality-slave-morality-and-ressentiment-in-nietzsche",
      fileName: "master-morality-slave-morality-and-ressentiment-in-nietzsche.md",
      title: "Master Morality, Slave Morality, and Ressentiment in Nietzsche",
      submittedOn: "May 3, 2026",
      status: "Submitted",
      type: "Markdown",
      summary:
        "A paper on Nietzsche’s distinction between master morality and slave morality as two fundamentally different ways of valuing, with ressentiment as the reactive psychological engine that turns suffering, blocked action, and revenge into moral judgment.",
    },
    {
      id: "master-morality-slave-morality-ressentiment-paper-2",
      slug: "nietzsche-on-master-morality-slave-morality-and-ressentiment",
      fileName: "nietzsche-on-master-morality-slave-morality-and-ressentiment.md",
      title: "Nietzsche on Master Morality, Slave Morality, and Ressentiment",
      author: "ChatGPT Deep Research",
      submittedOn: "May 3, 2026",
      status: "Submitted",
      type: "Markdown",
      summary:
        "A research-style synthesis of Nietzsche’s account of master morality, slave morality, and ressentiment across the corpus, with primary-text references and a dedicated sources section.",
    },
  ],
  "death-of-god-nihilism": [],
  "will-to-power-self-overcoming": [],
  "eternal-recurrence-amor-fati": [],
  "perspectivism-truth": [],
  "herd-morality-last-man": [],
  "nobility-rank-higher-type": [],
  "bad-conscience-guilt": [],
  "ascetic-ideal-life-denial": [],
  "dionysian-tragic-affirmation": [],
  "revaluation-philosophizing-with-hammer": [],
  "overman-transformation": [],
};

export const featuredThemeIds = [
  "death-of-god-nihilism",
  "master-slave-ressentiment",
  "will-to-power-self-overcoming",
  "eternal-recurrence-amor-fati",
  "overman-transformation",
  "revaluation-philosophizing-with-hammer",
];

export const deepDiveThemeIds = [
  "master-slave-ressentiment",
  "bad-conscience-guilt",
  "ascetic-ideal-life-denial",
  "perspectivism-truth",
];

export const themeWeb = [
  {
    centerThemeId: "master-slave-ressentiment",
    idea: "Reactive valuation",
    connects: ["bad-conscience-guilt", "ascetic-ideal-life-denial", "herd-morality-last-man", "revaluation-philosophizing-with-hammer"],
    note: "Ressentiment is the engine of reactive value-creation: blocked force cannot strike outward, so it invents a moral interpretation of the enemy.",
  },
  {
    centerThemeId: "death-of-god-nihilism",
    idea: "Collapse of inherited authority",
    connects: ["eternal-recurrence-amor-fati", "revaluation-philosophizing-with-hammer", "overman-transformation", "perspectivism-truth"],
    note: "Once the highest old source of value loses authority, Nietzsche asks whether humanity will sink into comfort or create new tables of value.",
  },
  {
    centerThemeId: "will-to-power-self-overcoming",
    idea: "Interpretive force",
    connects: ["nobility-rank-higher-type", "overman-transformation", "eternal-recurrence-amor-fati", "perspectivism-truth"],
    note: "Will to power links psychology, interpretation, culture, discipline, and transformation. It bridges critique and affirmation.",
  },
  {
    centerThemeId: "ascetic-ideal-life-denial",
    idea: "Meaning for suffering",
    connects: ["bad-conscience-guilt", "master-slave-ressentiment", "death-of-god-nihilism", "perspectivism-truth"],
    note: "The ascetic ideal solves one problem—meaningless suffering—by giving suffering an interpretation that may turn against life itself.",
  },
];

export const lessonModes = [
  {
    level: "Beginner",
    title: "Concept lesson",
    description: "A clean explanation of one theme with short passages, vocabulary, and five questions.",
    sample: "What is ressentiment, and why is it different from ordinary resentment?",
  },
  {
    level: "Intermediate",
    title: "Passage lesson",
    description: "A guided close reading of a specific aphorism or section, with context from the surrounding work.",
    sample: "Read Genealogy I §10 as Nietzsche’s decisive statement of reactive value-creation.",
  },
  {
    level: "Advanced",
    title: "Corpus lesson",
    description: "A theme traced across early, middle, and late Nietzsche, with cross-references and misreadings to avoid.",
    sample: "Trace self-overcoming from The Birth of Tragedy to Zarathustra and Ecce Homo.",
  },
];

export const studyTracks = [
  {
    title: "Start with the free spirit",
    level: "Beginner",
    description: "A clear path into Nietzsche’s mature concerns without beginning with Zarathustra’s prophetic style.",
    readings: ["The Gay Science Preface", "The Gay Science §125", "Beyond Good and Evil Preface", "Genealogy I", "Twilight, ‘The Problem of Socrates’"],
  },
  {
    title: "The problem of nihilism",
    level: "Intermediate",
    description: "Follow Nietzsche from the death of God to the problem of value-creation after inherited ideals collapse.",
    readings: ["The Gay Science §108", "The Gay Science §125", "The Gay Science §343", "Genealogy III §27", "The Antichrist §§1–7"],
  },
  {
    title: "Affirmation and self-overcoming",
    level: "Advanced",
    description: "Read Nietzsche as a philosopher of transformation, discipline, and becoming who one is.",
    readings: ["Zarathustra, Prologue", "Zarathustra, ‘On Self-Overcoming’", "The Gay Science §341", "Ecce Homo, Preface", "Ecce Homo, ‘Why I Am So Clever’ §§9–10"],
  },
];

export const worksShelf = {
  "birth-of-tragedy": {
    note: "Art, Greek tragedy, Apollo and Dionysus",
    edition: "Read together with Nietzsche’s later self-criticism in Ecce Homo.",
  },
  "untimely-meditations": {
    note: "Culture, history, education, and the uses of untimeliness",
    edition: "Best read as Nietzsche’s early cultural diagnosis between The Birth of Tragedy and the free-spirit turn.",
  },
  "human-all-too-human": {
    note: "Free spirits, suspicion, anti-metaphysics",
    edition: "A major break from Wagnerian romanticism and Schopenhauerian consolation.",
  },
  daybreak: {
    note: "Moral psychology and the critique of custom",
    edition: "One of the most important preparations for the Genealogy.",
  },
  "gay-science": {
    note: "Death of God, experiment, cheerfulness, recurrence",
    edition: "Central for §125, §341, and §344.",
  },
  zarathustra: {
    note: "Overman, recurrence, self-overcoming, poetic philosophy",
    edition: "Read poetically and philosophically; do not flatten it into doctrine.",
  },
  "beyond-good-and-evil": {
    note: "Philosophers of the future, rank, perspectivism",
    edition: "An excellent bridge into the mature Nietzsche.",
  },
  "genealogy-of-morals": {
    note: "Ressentiment, guilt, bad conscience, ascetic ideal",
    edition: "Best entry for morality, method, and spiritual diagnosis.",
  },
  "twilight-of-the-idols": {
    note: "Compressed late critique and diagnosis",
    edition: "A sharp summary of many central late attacks.",
  },
  antichrist: {
    note: "Christianity, decadence, revaluation",
    edition: "Powerful but polemical; best read beside the Genealogy.",
  },
  "ecce-homo": {
    note: "Autobiography, self-interpretation, destiny",
    edition: "Essential for Nietzsche’s own retrospective framing of the project.",
  },
};

export const editionNotes = [
  "Prefer citing Nietzsche by work, essay, and section number rather than by page number alone.",
  "Use stable section references so readers can compare translations without losing their place.",
  "Treat The Will to Power as a posthumous editorial compilation, not as a finished book prepared by Nietzsche.",
  "Distinguish published works from Nachlass notes whenever the site expands into notebook material.",
];

export const aphorisms = [
  {
    line: "One must still have chaos in oneself to give birth to a dancing star.",
    source: "Thus Spoke Zarathustra, Prologue §5",
  },
  {
    line: "What, if some day or night a demon were to steal after you into your loneliest loneliness?",
    source: "The Gay Science §341",
  },
  {
    line: "There are no moral phenomena at all, but only a moral interpretation of phenomena.",
    source: "Beyond Good and Evil §108",
  },
];

export const principles = [
  "Begin with the section number, not with the slogan.",
  "Ask what psychological need a value serves.",
  "Track the period: early, middle, or late.",
  "Distinguish critique from Nietzsche’s own affirmative ideal.",
];
