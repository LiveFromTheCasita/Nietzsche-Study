export const willToPowerSource = {
  archivePageUrl: "https://archive.org/details/FriedrichNietzscheTheWillToPower",
  pdfUrl:
    "https://ia803205.us.archive.org/27/items/FriedrichNietzscheTheWillToPower/Friedrich%20Nietzsche%20-%20The%20Will%20to%20Power.pdf",
  fullTextUrl:
    "https://archive.org/stream/FriedrichNietzscheTheWillToPower/Friedrich%20Nietzsche%20-%20The%20Will%20to%20Power_djvu.txt",
};

export const willToPowerBooks = [
  {
    title: "Book One: European Nihilism",
    range: "§§1-134",
    focus: "The collapse of inherited meaning, the psychology of nihilism, and the need for new value-creation.",
    themeIds: ["death-of-god-nihilism", "revaluation-philosophizing-with-hammer"],
  },
  {
    title: "Book Two: Critique of the Highest Values Hitherto",
    range: "§§135-461",
    focus: "Religion, morality, philosophy, herd valuation, Christianity, and the hidden drives behind ideals.",
    themeIds: ["master-slave-ressentiment", "ascetic-ideal-life-denial", "herd-morality-last-man"],
  },
  {
    title: "Book Three: Principles of a New Evaluation",
    range: "§§462-853",
    focus: "Perspectivism, knowledge, will to power, life, nature, society, and art.",
    themeIds: ["will-to-power-self-overcoming", "perspectivism-truth", "dionysian-tragic-affirmation"],
  },
  {
    title: "Book Four: Discipline and Breeding",
    range: "§§854-1067",
    focus: "Order of rank, higher types, discipline, Dionysus, and the eternal recurrence.",
    themeIds: ["nobility-rank-higher-type", "overman-transformation", "eternal-recurrence-amor-fati"],
  },
];

export const willToPowerReadingPrinciples = [
  "Read it as Nachlass material: a posthumous editorial compilation from notebooks, not a finished book Nietzsche prepared.",
  "Use section numbers and themes to orient yourself, then compare the same problem in the published works.",
  "Treat strong formulations as experiments in thought, diagnosis, and provocation before turning them into doctrine.",
  "Let the page function as a bridge back into the rest of Nietzsche, not as a replacement for the finished books.",
];

export const willToPowerPassages = [
  {
    id: "wtp-2",
    citation: "§2",
    notebookDate: "Spring-Fall 1887",
    book: "Book One: European Nihilism",
    part: "I. Nihilism",
    title: "Nihilism and the loss of the why",
    summary:
      "Nietzsche compresses nihilism into the collapse of inherited aims: the old highest values no longer answer the question of purpose.",
    whyItMatters:
      "This is the cleanest gateway into the site's death of God thread because it names nihilism as a value crisis, not merely unbelief.",
    themeIds: ["death-of-god-nihilism", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["gs-125", "gs-343", "gm-iii-27"],
  },
  {
    id: "wtp-3",
    citation: "§3",
    notebookDate: "Spring-Fall 1887",
    book: "Book One: European Nihilism",
    part: "I. Nihilism",
    title: "Radical nihilism and the vanished beyond",
    summary:
      "The note links radical nihilism to the loss of any right to posit a divine beyond, an in-itself, or a moral world behind becoming.",
    whyItMatters:
      "It joins the nihilism theme to Nietzsche's critique of the true world and to his suspicion of metaphysical rescue stories.",
    themeIds: ["death-of-god-nihilism", "perspectivism-truth"],
    companionPassageIds: ["ti-true-world", "gs-344", "bge-34"],
  },
  {
    id: "wtp-12",
    citation: "§12",
    notebookDate: "November 1887-March 1888",
    book: "Book One: European Nihilism",
    part: "I. Nihilism",
    title: "The decline of cosmological values",
    summary:
      "Nietzsche analyzes how goal, unity, and true world lose their authority, leaving becoming without a guaranteed moral destination.",
    whyItMatters:
      "This passage turns nihilism into a sequence of psychological disappointments and prepares the need for revaluation.",
    themeIds: ["death-of-god-nihilism", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["ti-true-world", "gs-343", "eh-clever-9-10"],
  },
  {
    id: "wtp-254",
    citation: "§254",
    notebookDate: "1885-1886",
    book: "Book Two: Critique of the Highest Values Hitherto",
    part: "II. Critique of Morality",
    title: "Evaluation as interpretation",
    summary:
      "Moral tables are treated as interpretations rooted in life, drives, and physiological conditions rather than as neutral moral facts.",
    whyItMatters:
      "This note connects will to power with genealogy: values need to be judged by the kind of life they serve.",
    themeIds: ["will-to-power-self-overcoming", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["gm-preface-6", "bge-36", "z-thousand-one-goals"],
  },
  {
    id: "wtp-274",
    citation: "§274",
    notebookDate: "Spring-Fall 1887",
    book: "Book Two: Critique of the Highest Values Hitherto",
    part: "II. Critique of Morality, The Herd",
    title: "Morality as herd will to power",
    summary:
      "The note asks whose will to power speaks through morality and answers by tracing moral domination to herd, suffering, and mediocre instincts.",
    whyItMatters:
      "It lets readers see herd morality as an active strategy of valuation, not as a harmless preference for kindness.",
    themeIds: ["herd-morality-last-man", "will-to-power-self-overcoming", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["gs-116", "bge-201-202", "z-tarantulas"],
  },
  {
    id: "wtp-280",
    citation: "§280",
    notebookDate: "Spring-Fall 1887",
    book: "Book Two: Critique of the Highest Values Hitherto",
    part: "II. Critique of Morality, The Herd",
    title: "The herd and the exception",
    summary:
      "Nietzsche describes how the herd treats the middle as safest and converts exceptional strength into service, suspicion, or guilt.",
    whyItMatters:
      "This is a bridge from herd morality to order of rank: the same social instinct fears both lower and higher exceptions.",
    themeIds: ["herd-morality-last-man", "nobility-rank-higher-type"],
    companionPassageIds: ["z-prologue-5", "bge-199", "bge-257"],
  },
  {
    id: "wtp-481",
    citation: "§481",
    notebookDate: "1883-1888",
    book: "Book Three: Principles of a New Evaluation",
    part: "I. The Will to Power as Knowledge",
    title: "Perspectivism against bare facts",
    summary:
      "Nietzsche challenges positivism by arguing that what appears as fact is already organized through interpretation, need, and drive.",
    whyItMatters:
      "This is one of the sharpest notebook formulations of perspectivism and belongs beside Beyond Good and Evil's critique of neutral truth.",
    themeIds: ["perspectivism-truth", "will-to-power-self-overcoming"],
    companionPassageIds: ["bge-22", "bge-34", "bge-6"],
  },
  {
    id: "wtp-511",
    citation: "§511",
    notebookDate: "1885-1886",
    book: "Book Three: Principles of a New Evaluation",
    part: "I. The Will to Power as Knowledge",
    title: "Logic, equality, and useful simplification",
    summary:
      "The note ties logic to the drive to make unlike things manageable, comparable, and useful for life.",
    whyItMatters:
      "It links truth, reason, and herd intelligibility to a deeper question: what kind of simplification helps a form of life command the world?",
    themeIds: ["perspectivism-truth", "herd-morality-last-man"],
    companionPassageIds: ["gs-110", "bge-22", "gm-iii-24"],
  },
  {
    id: "wtp-688",
    citation: "§688",
    notebookDate: "March-June 1888",
    book: "Book Three: Principles of a New Evaluation",
    part: "II. The Will to Power in Nature",
    title: "Will to power as primitive affect",
    summary:
      "Nietzsche sketches a unified psychology in which drives are read through expansion, resistance, incorporation, and increase of power.",
    whyItMatters:
      "This gives the will to power page its conceptual center while still needing comparison with the finished works.",
    themeIds: ["will-to-power-self-overcoming", "perspectivism-truth"],
    companionPassageIds: ["bge-36", "z-self-overcoming", "a-2"],
  },
  {
    id: "wtp-856",
    citation: "§856",
    notebookDate: "1885-1886",
    book: "Book Four: Discipline and Breeding",
    part: "I. Order of Rank",
    title: "Order of rank as order of power",
    summary:
      "The revaluation of values is connected to rank, danger, discipline, and the question of what can sustain higher forms of life.",
    whyItMatters:
      "This note shows why Nietzsche's rank language cannot be treated as mere snobbery; it is tied to formation, risk, and valuation.",
    themeIds: ["nobility-rank-higher-type", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["bge-257", "bge-211", "bge-188"],
  },
  {
    id: "wtp-886",
    citation: "§886",
    notebookDate: "Spring-Fall 1887",
    book: "Book Four: Discipline and Breeding",
    part: "I. Order of Rank",
    title: "Solitary and gregarious types",
    summary:
      "Nietzsche distinguishes the value of herd types from the value of solitary types and warns against judging one by the needs of the other.",
    whyItMatters:
      "It clarifies a difficult point: Nietzsche does not simply deny the herd's usefulness, but refuses to let herd standards rule every type.",
    themeIds: ["nobility-rank-higher-type", "herd-morality-last-man"],
    companionPassageIds: ["bge-287", "z-prologue-5", "eh-wise-6"],
  },
  {
    id: "wtp-1059",
    citation: "§1059",
    notebookDate: "1884",
    book: "Book Four: Discipline and Breeding",
    part: "III. The Eternal Recurrence",
    title: "Recurrence and the revaluation of values",
    summary:
      "The thought of recurrence is framed as the hardest idea, one that requires new values capable of affirming uncertainty, becoming, and power.",
    whyItMatters:
      "It connects eternal recurrence directly to revaluation: one must become able to affirm becoming without appeal to a final escape.",
    themeIds: ["eternal-recurrence-amor-fati", "revaluation-philosophizing-with-hammer"],
    companionPassageIds: ["gs-341", "z-vision-riddle", "eh-clever-9-10"],
  },
  {
    id: "wtp-1067",
    citation: "§1067",
    notebookDate: "1885",
    book: "Book Four: Discipline and Breeding",
    part: "III. The Eternal Recurrence",
    title: "The Dionysian world of force",
    summary:
      "The final note imagines the world as self-creating, self-destroying force: becoming, recurrence, and will to power gathered in one image.",
    whyItMatters:
      "It makes a powerful closing bridge between Dionysian affirmation, will to power, and eternal recurrence.",
    themeIds: ["dionysian-tragic-affirmation", "will-to-power-self-overcoming", "eternal-recurrence-amor-fati"],
    companionPassageIds: ["bt-24", "z-self-overcoming", "gs-341"],
  },
];

export function getWillToPowerPassagesForTheme(themeId) {
  return willToPowerPassages.filter((passage) => passage.themeIds.includes(themeId));
}
