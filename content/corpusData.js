export const relationTypes = {
  core: { label: "Core", rank: 1 },
  direct: { label: "Direct", rank: 2 },
  related: { label: "Related", rank: 3 },
  background: { label: "Background", rank: 4 },
};

export const works = [
  { id: "birth-of-tragedy", readingUrl: "https://www.gutenberg.org/cache/epub/51356/pg51356-images.html", title: "The Birth of Tragedy", period: "early", publicationOrder: 1, publicationYear: "1872", expandedEditionYear: "1886", dateNote: "First published 1872; An Attempt at Self-Criticism added 1886." },
  {
    id: "untimely-meditations", readingUrl: "https://www.gutenberg.org/files/38226/38226-h/38226-h.htm",
    title: "Untimely Meditations",
    period: "early",
    publicationOrder: 2,
    publicationYear: "1873–1876",
  },
  { id: "human-all-too-human", readingUrl: "https://www.gutenberg.org/files/51935/51935-h/51935-h.htm", title: "Human, All Too Human", period: "middle", publicationOrder: 3, publicationYear: "1878" },
  { id: "daybreak", readingUrl: "https://www.gutenberg.org/files/39955/39955-h/39955-h.html", title: "Daybreak", period: "middle", publicationOrder: 4, publicationYear: "1881" },
  { id: "gay-science", readingUrl: "https://www.gutenberg.org/files/52881/52881-h/52881-h.htm", title: "The Gay Science", period: "middle", publicationOrder: 5, publicationYear: "1882", expandedEditionYear: "1887", dateNote: "Books I–IV first published 1882; new preface and Book V added 1887." },
  { id: "zarathustra", readingUrl: "https://www.gutenberg.org/files/1998/1998-h/1998-h.htm", title: "Thus Spoke Zarathustra", period: "late", publicationOrder: 6, publicationYear: "1883–1885", dateNote: "Parts I–III published 1883–1884; Part IV privately printed 1885 and publicly issued 1892." },
  { id: "beyond-good-and-evil", readingUrl: "https://www.gutenberg.org/files/4363/4363-h/4363-h.htm", title: "Beyond Good and Evil", period: "late", publicationOrder: 7, publicationYear: "1886" },
  { id: "genealogy-of-morals", readingUrl: "https://www.gutenberg.org/files/52319/52319-h/52319-h.htm", title: "On the Genealogy of Morals", period: "late", publicationOrder: 8, publicationYear: "1887" },
  { id: "twilight-of-the-idols", readingUrl: "https://www.gutenberg.org/cache/epub/52263/pg52263-images.html", title: "Twilight of the Idols", period: "late", publicationOrder: 9, publicationYear: "1889", writtenYear: "1888", dateNote: "Written 1888; first published 1889." },
  { id: "antichrist", readingUrl: "https://www.gutenberg.org/ebooks/19322", title: "The Antichrist", period: "late", publicationOrder: 10, publicationYear: "1895", writtenYear: "1888", dateNote: "Written 1888; first published 1895." },
  { id: "ecce-homo", readingUrl: "https://www.gutenberg.org/files/52190/52190-h/52190-h.htm", title: "Ecce Homo", period: "late", publicationOrder: 11, publicationYear: "1908", writtenYear: "1888", dateNote: "Written 1888; first published 1908." },
];

export const passages = [
  {
    id: "bt-1",
    workId: "birth-of-tragedy",
    citation: "§1",
    title: "Apollo and Dionysus",
    summary:
      "Nietzsche opens his first book by staging Greek art through two drives: Apollonian form, measure, and dream against Dionysian excess, music, and dissolution.",
    tags: ["Apollonian", "Dionysian", "tragedy", "art", "affirmation"],
  },
  {
    id: "bt-5",
    workId: "birth-of-tragedy",
    citation: "§5",
    title: "The tragic chorus and Dionysian release",
    summary: "Nietzsche traces tragedy to the chorus and its Dionysian experience, in which the boundaries of ordinary individuality are suspended.",
    tags: ["chorus", "Dionysian", "tragedy", "community", "music"],
    citation: "§§7–8",
    title: "The tragic chorus and Dionysian release",
  },
  {
    id: "bt-7",
    workId: "birth-of-tragedy",
    citation: "§7",
    title: "Tragedy as Dionysian wisdom in images",
    summary: "Tragic insight threatens action by exposing suffering and destruction; art offers the sublime and comic as ways of making this knowledge bearable.",
    tags: ["tragedy", "wisdom", "Dionysian", "Apollonian", "art"],
    title: "Tragic knowledge and the power to act",
  },
  {
    id: "bt-24",
    workId: "birth-of-tragedy",
    citation: "§24",
    title: "Existence justified aesthetically",
    summary:
      "Nietzsche returns to the claim that life is most deeply defended not by morality or metaphysics but by artistic transfiguration.",
    tags: ["aesthetic justification", "art", "life", "affirmation", "tragedy"],
  },
  {
    id: "hh-45",
    workId: "human-all-too-human",
    citation: "§45",
    title: "Double prehistory of good and evil",
    summary:
      "Nietzsche offers an early genealogical sketch of how moral distinctions arise historically rather than descending from eternal truths.",
    tags: ["genealogy", "good and evil", "morality", "history", "custom"],
  },
  {
    id: "d-9",
    workId: "daybreak",
    citation: "§9",
    title: "Morality of custom",
    summary:
      "Morality appears here as inherited obedience to social custom rather than as transparent insight into the good.",
    tags: ["custom", "obedience", "morality", "community", "herd"],
  },
  {
    id: "gs-107",
    workId: "gay-science",
    citation: "§107",
    title: "As an aesthetic phenomenon life remains bearable",
    summary:
      "Art is treated as a practical defense against disgust, severity, and the weight of existence.",
    tags: ["art", "aesthetic justification", "affirmation", "style", "life"],
  },
  {
    id: "gs-109",
    workId: "gay-science",
    citation: "§109",
    title: "Let us beware",
    summary:
      "Nietzsche warns against projecting moral, rational, or theological order onto nature itself.",
    tags: ["nature", "truth", "projection", "anti-metaphysics", "interpretation"],
  },
  {
    id: "gs-110",
    workId: "gay-science",
    citation: "§110",
    title: "Origins of knowledge",
    summary:
      "What we call knowledge is traced back to practical simplifications, habits, and useful errors rather than pure contemplation.",
    tags: ["knowledge", "truth", "error", "habit", "interpretation"],
  },
  {
    id: "gs-116",
    workId: "gay-science",
    citation: "§116",
    title: "Herd instinct",
    summary:
      "Nietzsche treats the herd instinct as one of the chief forces shaping moral judgment and conformity.",
    tags: ["herd", "morality", "instinct", "conformity", "obedience"],
  },
  {
    id: "gs-125",
    workId: "gay-science",
    citation: "§125",
    title: "The madman",
    summary:
      "The death of God is announced not as an easy victory but as a civilizational event whose consequences have scarcely been absorbed.",
    tags: ["death of God", "nihilism", "modernity", "crisis", "meaning"],
  },
  {
    id: "gs-290",
    workId: "gay-science",
    citation: "§290",
    title: "Giving style to one’s character",
    summary:
      "Nietzsche describes self-formation as the artistic labor of arranging strengths, weaknesses, and habits into a single style.",
    tags: ["style", "self-formation", "character", "self-overcoming", "art"],
  },
  {
    id: "gs-341",
    workId: "gay-science",
    citation: "§341",
    title: "The greatest weight",
    summary:
      "Eternal recurrence is presented as an existential test: can one affirm one’s life so completely as to will its repetition?",
    tags: ["eternal recurrence", "affirmation", "time", "testing", "amor fati"],
  },
  {
    id: "gs-343",
    workId: "gay-science",
    citation: "§343",
    title: "Our cheerfulness",
    summary:
      "After the death of God, a frightening openness appears together with new freedom, danger, and possibility.",
    tags: ["death of God", "nihilism", "freedom", "future", "danger"],
    period: "late",
    publicationYear: "1887",
    dateNote: "Book V, added in the expanded 1887 edition.",
  },
  {
    id: "gs-344",
    workId: "gay-science",
    citation: "§344",
    title: "How far the will to truth still seduces us",
    summary:
      "Nietzsche presses the question of why truth should be preferred at all, exposing the moral commitments inside the will to truth.",
    tags: ["truth", "will to truth", "critique", "science", "values"],
    period: "late",
    publicationYear: "1887",
    dateNote: "Book V, added in the expanded 1887 edition.",
  },
  {
    id: "z-prologue-3",
    workId: "zarathustra",
    citation: "Prologue, §3",
    title: "I teach you the overman",
    summary:
      "Zarathustra introduces the overman as a task of transformation rather than as a settled doctrine or biological type.",
    tags: ["overman", "transformation", "becoming", "task", "future"],
  },
  {
    id: "z-prologue-5",
    workId: "zarathustra",
    citation: "Prologue, §5",
    title: "The last man",
    summary:
      "The last man embodies comfort, mediocrity, and the refusal of risk, greatness, and self-transcendence.",
    tags: ["last man", "herd", "comfort", "nihilism", "mediocrity"],
  },
  {
    id: "z-three-metamorphoses",
    workId: "zarathustra",
    citation: "On the Three Metamorphoses",
    title: "Camel, lion, and child",
    summary:
      "Spirit advances through burden, negation, and creative innocence, giving Nietzsche one of his sharpest images of transformation.",
    tags: ["transformation", "self-overcoming", "child", "lion", "becoming"],
  },
  {
    id: "z-thousand-one-goals",
    workId: "zarathustra",
    citation: "On the Thousand and One Goals",
    title: "Peoples create values",
    summary:
      "Values are shown as human creations tied to forms of life rather than as timeless objects waiting to be discovered.",
    tags: ["values", "creation", "revaluation", "culture", "goals"],
  },
  {
    id: "z-tarantulas",
    workId: "zarathustra",
    citation: "On the Tarantulas",
    title: "Equality-preaching as disguised revenge",
    summary:
      "Certain moral and political languages of equality are interpreted as revenge wearing the mask of justice.",
    tags: ["ressentiment", "revenge", "justice", "equality", "tarantulas"],
  },
  {
    id: "z-self-overcoming",
    workId: "zarathustra",
    citation: "On Self-Overcoming",
    title: "Life interprets itself as will to power",
    summary: "Zarathustra connects life with commanding, obeying, risking, and overcoming. His speech joins self-transformation to struggles over power and the creation and destruction of values.",
    tags: ["self-overcoming", "will to power", "life", "command", "growth"],
  },
  {
    id: "z-redemption",
    workId: "zarathustra",
    citation: "On Redemption",
    title: "Revenge against time and the it-was",
    summary:
      "Revenge is widened from social hostility to a deeper protest against time, irreversibility, and necessity.",
    tags: ["revenge", "time", "redemption", "necessity", "affirmation"],
  },
  {
    id: "z-vision-riddle",
    workId: "zarathustra",
    citation: "On the Vision and the Riddle",
    title: "The gateway of the moment",
    summary:
      "The thought of recurrence appears symbolically as a confrontation with the circular burden of time and willing.",
    tags: ["eternal recurrence", "time", "vision", "riddle", "affirmation"],
  },
  {
    id: "z-gift-giving-virtue",
    workId: "zarathustra",
    citation: "On the Gift-Giving Virtue",
    title: "Overflowing as a virtue",
    summary:
      "Higher creation is imagined as abundance and self-bestowal rather than as moral self-denial.",
    tags: ["gift-giving virtue", "abundance", "higher type", "virtue", "creation"],
  },
  {
    id: "bge-preface",
    workId: "beyond-good-and-evil",
    citation: "Preface",
    title: "Truth as an old seduction",
    summary:
      "Nietzsche frames his book by treating dogmatic philosophy as a long seduction by moralized conceptions of truth.",
    tags: ["truth", "dogmatism", "philosophy", "critique", "revaluation"],
  },
  {
    id: "bge-6",
    workId: "beyond-good-and-evil",
    citation: "§6",
    title: "Philosophy as confession",
    summary:
      "Every great philosophy is interpreted as the personal confession and involuntary memoir of its author.",
    tags: ["perspectivism", "philosophy", "confession", "drives", "interpretation"],
  },
  {
    id: "bge-22",
    workId: "beyond-good-and-evil",
    citation: "§22",
    title: "Interpretation and laws of nature",
    summary:
      "Natural law language is treated as one interpretation among others rather than as a neutral reading of reality.",
    tags: ["interpretation", "nature", "law", "perspectivism", "science"],
  },
  {
    id: "bge-34",
    workId: "beyond-good-and-evil",
    citation: "§34",
    title: "Appearance and truth",
    summary:
      "Nietzsche presses the possibility that appearance, simplification, and perspective are conditions of life rather than defects to be purified away.",
    tags: ["appearance", "truth", "perspective", "life", "metaphysics"],
  },
  {
    id: "bge-36",
    workId: "beyond-good-and-evil",
    citation: "§36",
    title: "The world viewed from inside",
    summary:
      "Nietzsche experiments with the idea that the world interpreted from within may be describable as will to power and nothing besides.",
    tags: ["will to power", "interpretation", "world", "drives", "life"],
  },
  {
    id: "bge-188",
    workId: "beyond-good-and-evil",
    citation: "§188",
    title: "Long obedience in one direction",
    summary:
      "Greatness of soul is tied to prolonged discipline, ordering, and training rather than spontaneous sincerity.",
    tags: ["discipline", "self-overcoming", "obedience", "formation", "rank"],
  },
  {
    id: "bge-199",
    workId: "beyond-good-and-evil",
    citation: "§199",
    title: "Herd obedience",
    summary:
      "The pressure to obey is treated as a durable human tendency that sustains social morality and conformity.",
    tags: ["herd", "obedience", "morality", "conformity", "command"],
  },
  {
    id: "bge-201-202",
    workId: "beyond-good-and-evil",
    citation: "§§201–202",
    title: "Morality of fear and herd morality",
    summary:
      "Modern morality is diagnosed as a morality of safety, tameness, and reciprocal protection.",
    tags: ["herd morality", "fear", "safety", "modernity", "equality"],
  },
  {
    id: "bge-211",
    workId: "beyond-good-and-evil",
    citation: "§211",
    title: "Philosophers as commanders and legislators",
    summary:
      "Nietzsche distinguishes mere scholars from rare philosophers who create rankings, tasks, and future values.",
    tags: ["philosopher", "legislation", "values", "rank", "future"],
  },
  {
    id: "bge-257",
    workId: "beyond-good-and-evil",
    citation: "§257",
    title: "Pathos of distance",
    summary: "Nietzsche explicitly links aristocratic culture to social hierarchy and forms of slavery, then connects social distance to distance within the soul. The inward reading does not erase the political claim.",
    tags: ["pathos of distance", "rank", "aristocracy", "nobility", "culture"],
  },
  {
    id: "bge-260",
    workId: "beyond-good-and-evil",
    citation: "§260",
    title: "Master morality and slave morality",
    summary:
      "Nietzsche gives a compressed distinction between noble self-affirming valuation and reactive slave valuation.",
    tags: ["master morality", "slave morality", "rank", "values", "ressentiment"],
  },
  {
    id: "bge-287",
    workId: "beyond-good-and-evil",
    citation: "§287",
    title: "What is noble?",
    summary:
      "Nobility becomes a question of spiritual bearing, self-reverence, and rank of soul rather than mere external station.",
    tags: ["nobility", "higher type", "rank", "self-reverence", "spirit"],
  },
  {
    id: "gm-preface-6",
    workId: "genealogy-of-morals",
    citation: "Preface, §6",
    title: "The value of our values must be questioned",
    summary:
      "Nietzsche states the genealogical program plainly: not just where values came from, but whether they should continue to rule.",
    tags: ["genealogy", "values", "critique", "revaluation", "morality"],
  },
  {
    id: "gm-i-2",
    workId: "genealogy-of-morals",
    citation: "First Essay, §2",
    title: "The noble origin of good",
    summary:
      "Good first names the self-experience of noble and powerful people before it becomes moralized in later hands.",
    tags: ["good", "nobility", "rank", "origin", "master morality"],
  },
  {
    id: "gm-i-5",
    workId: "genealogy-of-morals",
    citation: "First Essay, §5",
    title: "Priestly valuation and spiritual revenge",
    summary: "Nietzsche contrasts priestly with knightly valuation and argues that priestly hostility drives a reversal of noble values. His sweeping history and portrayal of Judaism require critical scrutiny.",
    tags: ["priestly morality", "revenge", "interpretation", "weakness", "values"],
    citation: "First Essay, §§6–7",
  },
  {
    id: "gm-i-10",
    workId: "genealogy-of-morals",
    citation: "First Essay, §10",
    title: "Ressentiment becomes creative",
    summary:
      "Slave morality is born when resentment creates values by first negating what it cannot enact or embody.",
    tags: ["ressentiment", "slave revolt", "value creation", "revenge", "morality"],
  },
  {
    id: "gm-i-13",
    workId: "genealogy-of-morals",
    citation: "First Essay, §13",
    title: "Birds of prey and lambs",
    summary:
      "Nietzsche resists moral fictions that demand strength behave as if it were not strength at all.",
    tags: ["strength", "weakness", "blame", "moral fiction", "ressentiment"],
  },
  {
    id: "gm-i-14-15",
    workId: "genealogy-of-morals",
    citation: "First Essay, §§14–15",
    title: "Imagined revenge and cosmic justice",
    summary:
      "Revenge becomes metaphysical when the powerless imagine a moral universe in which strength will finally be punished.",
    tags: ["revenge", "afterlife", "justice", "ressentiment", "religion"],
  },
  {
    id: "gm-ii-12",
    workId: "genealogy-of-morals",
    citation: "Second Essay, §12",
    title: "Punishment has no single meaning",
    summary: "Nietzsche separates a practice’s origin from its later purposes. Interpretation and appropriation repeatedly impose new functions: punishment supplies the case, and will to power the explanatory proposal.",
    tags: ["punishment", "genealogy", "meaning", "history", "guilt"],
    title: "Origin, purpose, and the imposition of meaning",
  },
  {
    id: "gm-ii-16",
    workId: "genealogy-of-morals",
    citation: "Second Essay, §16",
    title: "Bad conscience and internalization",
    summary: "Nietzsche hypothesizes that forced social confinement turns outward instincts against the self. He connects this internal cruelty both to suffering and to the capacity for self-formation.",
    tags: ["bad conscience", "internalization", "instinct", "cruelty", "guilt"],
    citation: "Second Essay, §§16–18",
  },
  {
    id: "gm-ii-18",
    workId: "genealogy-of-morals",
    citation: "Second Essay, §18",
    title: "Debt, guilt, and the gods",
    summary: "Nietzsche follows indebtedness to ancestors into divine obligation and the Christian intensification of guilt. This development is distinct from the account of inward cruelty in §18.",
    tags: ["debt", "guilt", "gods", "punishment", "morality"],
    citation: "Second Essay, §§19–22",
  },
  {
    id: "gm-iii-1",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §1",
    title: "What do ascetic ideals mean?",
    summary:
      "Nietzsche opens the third essay by asking why the ascetic ideal has spoken to so many different human types.",
    tags: ["ascetic ideal", "meaning", "suffering", "morality", "life-denial"],
  },
  {
    id: "gm-iii-11",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §11",
    title: "The ascetic priest",
    summary:
      "The ascetic priest gives suffering a meaning and thereby wins interpretive power over damaged, burdened lives.",
    tags: ["ascetic priest", "suffering", "meaning", "power", "priestly morality"],
  },
  {
    id: "gm-iii-13-15",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §§13–15",
    title: "Managing suffering through ascetic interpretation",
    summary: "Nietzsche presents the ascetic ideal as a means by which damaged life preserves itself. The priest manages suffering and redirects ressentiment toward the sufferer, at a further cost to health.",
    tags: ["ascetic ideal", "suffering", "discipline", "blame", "interpretation"],
  },
  {
    id: "gm-iii-23",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §23",
    title: "Science as a late form of the ascetic ideal",
    summary:
      "Science is challenged as potentially continuous with ascetic seriousness when it treats truth as unconditionally binding.",
    tags: ["science", "truth", "ascetic ideal", "critique", "knowledge"],
  },
  {
    id: "gm-iii-24",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §24",
    title: "The will to truth needs critique",
    summary:
      "Even the will to truth must answer for its value rather than pretending to stand beyond valuation.",
    tags: ["will to truth", "critique", "values", "science", "truth"],
  },
  {
    id: "gm-iii-27",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §27",
    title: "European nihilism",
    summary: "Christian truthfulness first undermines belief in God and then calls morality and the value of truth into question. Nietzsche presents this self-overcoming as an approaching European crisis.",
    tags: ["nihilism", "Europe", "meaning", "ideal collapse", "future"],
    title: "The will to truth turns against itself",
  },
  {
    id: "ti-morality-as-anti-nature",
    workId: "twilight-of-the-idols",
    citation: "Morality as Anti-Nature",
    title: "Morality as anti-nature",
    summary:
      "Nietzsche attacks moral systems that condemn instinct instead of ordering, refining, or transfiguring it.",
    tags: ["anti-nature", "instinct", "morality", "life-denial", "critique"],
  },
  {
    id: "ti-true-world",
    workId: "twilight-of-the-idols",
    citation: "How the 'True World' Finally Became a Fable",
    title: "The collapse of the true world",
    summary:
      "The opposition between true world and apparent world is dismantled as a historical fiction whose death changes morality and metaphysics together.",
    tags: ["true world", "appearance", "truth", "metaphysics", "revaluation"],
  },
  {
    id: "ti-maxims-8",
    workId: "twilight-of-the-idols",
    citation: "Maxims and Arrows, §8",
    title: "What does not kill me",
    summary:
      "Nietzsche condenses an ethic of strengthening through ordeal into one of his most famous late aphorisms.",
    tags: ["strength", "self-overcoming", "ordeal", "growth", "discipline"],
  },
  {
    id: "a-2",
    workId: "antichrist",
    citation: "§2",
    title: "What is good? what is bad?",
    summary:
      "Nietzsche answers moral language physiologically by tying good to power, ascent, and enhancement and bad to decline and weakness.",
    tags: ["good and bad", "strength", "weakness", "physiology", "revaluation"],
  },
  {
    id: "a-5-7",
    workId: "antichrist",
    citation: "§§5–7",
    title: "Christianity, pity, and decadence",
    summary:
      "Christian pity is criticized as a life-weakening valuation that preserves decline and moralizes frailty.",
    tags: ["Christianity", "pity", "decadence", "weakness", "life-denial"],
  },
  {
    id: "a-24",
    workId: "antichrist",
    citation: "§24",
    title: "Priestly revaluation",
    summary:
      "Nietzsche links Christianity to a priestly reversal of noble values and a spiritual politics of ressentiment.",
    tags: ["priestly revaluation", "Christianity", "values", "ressentiment", "morality"],
  },
  {
    id: "a-43",
    workId: "antichrist",
    citation: "§43",
    title: "Guilt, punishment, and divine accounting",
    summary: "Nietzsche attacks Christian personal immortality and equality before God, connecting them to a rejection of earthly rank. His criticism has explicitly anti-egalitarian implications.",
    tags: ["guilt", "sin", "punishment", "Christianity", "bad conscience"],
    title: "Immortal souls and the equality of persons",
  },
  {
    id: "eh-wise-6",
    workId: "ecce-homo",
    citation: "Why I Am So Wise, §6",
    title: "Freedom from ressentiment",
    summary:
      "Nietzsche presents immunity to ressentiment as a sign of health, discipline, and strength.",
    tags: ["ressentiment", "health", "strength", "discipline", "self-mastery"],
  },
  {
    id: "eh-clever-9-10",
    workId: "ecce-homo",
    citation: "Why I Am So Clever, §§9–10",
    title: "Amor fati",
    summary:
      "Nietzsche’s late formula of greatness centers on affirming necessity without subtraction, resentment, or appeal to another world.",
    tags: ["amor fati", "affirmation", "necessity", "fate", "anti-ressentiment"],
  },
  {
    id: "bt-self-criticism",
    workId: "birth-of-tragedy",
    citation: "An Attempt at Self-Criticism, §§1–7",
    title: "A later reckoning with the first book",
    summary: "In his 1886 preface Nietzsche criticizes the book’s style, Schopenhauerian formulas, and hopes for German music while reopening its question about pessimism and strength.",
    tags: ["Dionysian", "self-criticism", "pessimism", "Wagner", "art"],
    period: "late",
    publicationYear: "1886",
    dateNote: "New preface added in 1886; the original book appeared in 1872.",
  },
  {
    id: "gs-276",
    workId: "gay-science",
    citation: "§276",
    title: "Learning to love necessity",
    summary: "Nietzsche presents amor fati as an aspiration: to see necessity as beautiful and become someone who affirms. Read its future-oriented promise beside the test in §341.",
    tags: ["amor fati", "affirmation", "necessity", "new year", "life"],
  },
  {
    id: "gs-374",
    workId: "gay-science",
    citation: "§374",
    title: "Our new infinite",
    summary: "Nietzsche asks how far the perspectival character of existence extends, while denying that human inquiry can step outside its own perspectives to settle the matter.",
    tags: ["perspectivism", "interpretation", "knowledge", "limits", "infinite"],
    period: "late",
    publicationYear: "1887",
    dateNote: "Book V, added in the expanded 1887 edition.",
  },
  {
    id: "z-convalescent",
    workId: "zarathustra",
    citation: "Part III, The Convalescent, §§1–2",
    title: "Recurrence and the return of the small human",
    summary: "Zarathustra struggles with the return of the human smallness he despises. His animals articulate recurrence, but his response makes their formula part of a dramatic problem rather than a transparent doctrinal statement.",
    tags: ["eternal recurrence", "affirmation", "disgust", "animals", "time"],
  },
  {
    id: "bge-13",
    workId: "beyond-good-and-evil",
    citation: "§13",
    title: "Life and the discharge of strength",
    summary: "Nietzsche challenges self-preservation as the fundamental drive of life and proposes will to power instead. This is a philosophical claim to assess, not an established biological result.",
    tags: ["will to power", "life", "self-preservation", "strength", "biology"],
  },
  {
    id: "bge-259",
    workId: "beyond-good-and-evil",
    citation: "§259",
    title: "Appropriation, exploitation, and power",
    summary: "Nietzsche identifies life with appropriation, incorporation, and exploitation and challenges their universal elimination. This difficult passage prevents will to power from becoming a harmless slogan for personal growth.",
    tags: ["will to power", "appropriation", "exploitation", "life", "aristocracy"],
  },
  {
    id: "gm-ii-4-5",
    workId: "genealogy-of-morals",
    citation: "Second Essay, §§4–5",
    title: "Debt, compensation, and cruelty",
    summary: "Nietzsche connects the moral concept of guilt with material debt and reconstructs creditor–debtor compensation through pain. The linguistic connection begins a historical hypothesis, not a proof of the entire genealogy.",
    tags: ["debt", "guilt", "creditor", "cruelty", "punishment"],
  },
  {
    id: "gm-ii-14-15",
    workId: "genealogy-of-morals",
    citation: "Second Essay, §§14–15",
    title: "Does punishment produce guilt?",
    summary: "Nietzsche disputes the assumption that punishment normally creates remorse. Its effects can include fear, calculation, and hardening rather than the bad conscience whose origin he is seeking.",
    tags: ["punishment", "guilt", "bad conscience", "remorse", "history"],
  },
  {
    id: "gm-iii-12",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §12",
    title: "Perspectival knowing and objectivity",
    summary: "Nietzsche rejects a knowing subject stripped of affect and direction. He reconceives objectivity through the disciplined use of multiple perspectives, rather than through the elimination of perspective.",
    tags: ["perspectivism", "objectivity", "knowledge", "affect", "interpretation"],
  },
  {
    id: "gm-iii-28",
    workId: "genealogy-of-morals",
    citation: "Third Essay, §28",
    title: "The meaning of suffering and the will to nothingness",
    summary: "The ascetic ideal gives suffering a meaning and thereby preserves willing, even as it directs willing against life. This paradox closes the essay: nihilistic valuation can protect people from sheer meaninglessness.",
    tags: ["ascetic ideal", "suffering", "meaning", "nihilism", "will"],
  },
  {
    id: "ti-ancients-5",
    workId: "twilight-of-the-idols",
    citation: "What I Owe to the Ancients, §5",
    title: "The late meaning of Dionysian affirmation",
    summary: "Nietzsche interprets the Dionysian as affirmation of becoming, including destruction and suffering, and connects this account with recurrence and his earlier book on tragedy.",
    tags: ["Dionysian", "affirmation", "tragedy", "becoming", "eternal recurrence"],
  },
];

const link = (passageId, relation, importance, readingOrder, relevance, connectedPassageIds = []) => ({
  passageId,
  relation,
  importance,
  readingOrder,
  relevance,
  connectedPassageIds,
});

const arc = (phase, description, representativePassageIds) => ({
  phase,
  description,
  representativePassageIds,
});

export const themes = [
  {
    id: "master-slave-ressentiment",
    title: "Master Morality, Slave Morality, and Ressentiment",
    shortTitle: "Master / Slave Morality",
    category: "Morality and Value-Creation",
    shortDescription:
      "Nietzsche’s account of noble self-affirmation, reactive moral inversion, and the psychological creativity of resentment.",
    overview:
      "This theme tracks Nietzsche’s most famous genealogy of morality. Master morality begins from self-affirmation: a powerful type names itself good before naming the opposite bad. Slave morality begins reactively by saying no to what it fears or envies and then naming itself good by contrast. Ressentiment is the engine of this reversal: blocked force becomes interpretation, judgment, and revenge in moral form.",
    essentialPassageIds: ["bge-260", "gm-i-2", "gm-i-5", "gm-i-10", "gm-i-13", "gm-i-14-15"],
    aliases: [
      "master morality",
      "slave morality",
      "ressentiment",
      "slave revolt",
      "noble morality",
      "priestly morality",
      "revenge",
      "moral inversion",
    ],
    relatedConcepts: [
      "Pathos of distance",
      "Priestly morality",
      "Herd morality",
      "Pity",
      "Christian morality",
      "Bad conscience",
      "Revaluation of values",
      "Strength and weakness",
    ],
    developmentalArc: [
      arc(
        "Genealogical Preparation",
        "Nietzsche first learns to treat morality historically and psychologically rather than as eternal truth.",
        ["hh-45", "d-9", "gs-116"]
      ),
      arc(
        "The Genealogical Breakthrough",
        "The opposition between noble valuation and reactive valuation becomes explicit in Beyond Good and Evil and the First Essay of the Genealogy.",
        ["bge-260", "gm-i-10", "gm-i-13"]
      ),
      arc(
        "Late Anti-Christian Intensification",
        "The theme widens into a critique of Christian pity, decadence, and anti-natural morality.",
        ["ti-morality-as-anti-nature", "a-5-7", "eh-wise-6"]
      ),
    ],
    passageLinks: [
      link("bge-260", "core", 5, 1, "The best compact map of noble valuation versus reactive valuation.", ["gm-i-2", "gm-i-10", "gm-i-13", "bge-257", "bge-287"]),
      link("gm-i-2", "core", 5, 2, "Grounds master morality in rank, distance, and aristocratic self-affirmation.", ["bge-260", "bge-257", "gm-i-5"]),
      link("gm-i-5", "core", 5, 3, "Shows how priestly weakness becomes interpretive power and prepares ressentiment.", ["gm-i-10", "a-24", "bge-260"]),
      link("gm-i-10", "core", 5, 4, "Defines ressentiment as a creative force in reactive value-formation.", ["gm-i-13", "gm-i-14-15", "z-tarantulas", "eh-wise-6"]),
      link("gm-i-13", "core", 5, 5, "Clarifies how moral blame can arise from the standpoint of weakness judging strength.", ["gm-i-10", "gm-i-14-15", "ti-morality-as-anti-nature"]),
      link("gm-i-14-15", "core", 5, 6, "Shows resentment becoming metaphysical through imagined justice and revenge.", ["gm-i-10", "a-43", "z-redemption"]),
      link("gs-116", "direct", 4, 7, "Early middle-period anticipation of herd morality and reactive moral pressure.", ["d-9", "bge-199", "bge-201-202"]),
      link("z-tarantulas", "direct", 5, 8, "Poetic rendering of revenge disguising itself as justice and equality.", ["gm-i-10", "z-prologue-5", "bge-201-202"]),
      link("bge-199", "direct", 4, 9, "Links herd obedience to the social conditions that nourish slave morality.", ["gs-116", "bge-201-202", "d-9"]),
      link("bge-201-202", "direct", 4, 10, "Extends slave morality into the modern atmosphere of safety and tameness.", ["bge-199", "z-prologue-5", "a-5-7"]),
      link("bge-257", "direct", 5, 11, "Explains the rank-feeling behind noble valuation.", ["gm-i-2", "bge-260", "bge-287"]),
      link("bge-287", "direct", 5, 12, "Adds self-reverence and inward rank to the social hierarchy discussed in §257; it does not cancel that hierarchy.", ["bge-257", "bge-260", "gs-290"]),
      link("a-24", "direct", 5, 13, "Late companion passage on priestly revaluation and Christian moral inversion.", ["gm-i-5", "a-5-7", "bge-260"]),
      link("a-5-7", "direct", 4, 14, "Shows how pity and decadence fit into the late form of Nietzsche’s anti-slave-morality critique.", ["ti-morality-as-anti-nature", "a-24"]),
      link("ti-morality-as-anti-nature", "direct", 4, 15, "Recasts the critique physiologically as hostility to instinct and life.", ["gm-i-13", "a-5-7", "eh-wise-6"]),
      link("eh-wise-6", "direct", 5, 16, "Shows ressentiment as a live spiritual danger, not only a historical one.", ["gm-i-10", "eh-clever-9-10", "z-redemption"]),
      link("gs-290", "related", 4, 17, "Suggests a constructive alternative to reactive moral organization: style and self-formation.", ["eh-clever-9-10", "z-self-overcoming"]),
      link("z-redemption", "related", 4, 18, "Broadens revenge from social hostility into metaphysical resentment toward time itself.", ["gm-i-14-15", "eh-clever-9-10", "z-vision-riddle"]),
      link("hh-45", "background", 3, 19, "Early genealogical preparation for the later master/slave account.", ["d-9", "gm-preface-6"]),
      link("d-9", "background", 3, 20, "Supplies the background in custom and obedience that later becomes herd morality.", ["gs-116", "bge-199", "hh-45"]),
      link("gm-preface-6", "background", 4, 21, "Frames the entire project as a revaluation of morality itself.", ["hh-45", "bge-preface", "gm-i-10"]),
    ],
  },
  {
    id: "death-of-god-nihilism",
    title: "The Death of God and European Nihilism",
    shortTitle: "Death of God / Nihilism",
    category: "Crisis of Meaning",
    shortDescription:
      "Nietzsche’s diagnosis of a civilizational loss of metaphysical guarantee and the struggle to survive its consequences.",
    overview:
      "The death of God names the collapse of inherited metaphysical and moral guarantees, not a simple declaration of unbelief. Nihilism follows when old values still command obedience even after the world that justified them has disappeared. Nietzsche treats this crisis as both danger and opening: a terrifying loss of orientation and an opportunity for new value-creation.",
    essentialPassageIds: ["gs-125", "gs-343", "z-prologue-5", "gm-iii-27", "ti-true-world", "a-2"],
    aliases: [
      "God is dead",
      "nihilism",
      "meaning crisis",
      "European nihilism",
      "collapse of values",
      "the madman",
      "last man",
    ],
    relatedConcepts: [
      "The last man",
      "Revaluation of values",
      "The true world",
      "Ascetic ideal",
      "Will to truth",
      "Future philosophy",
      "Danger and freedom",
    ],
    developmentalArc: [
      arc(
        "The crisis announced, 1882",
        "The original Gay Science questions inherited pictures of nature and dramatizes the death of God through the madman.",
        ["gs-109", "gs-110", "gs-125"]
      ),
      arc(
        "Responses and diagnosis, 1883–1887",
        "Zarathustra’s last human, Beyond Good and Evil, and the new Book V of The Gay Science explore what follows the loss of inherited authority.",
        ["z-prologue-5", "bge-preface", "gs-343"]
      ),
      arc(
        "The European aftermath, 1887–1888",
        "The Genealogy and writings of 1888 examine the self-destruction of inherited ideals and the demand for revaluation.",
        ["gm-iii-27", "ti-true-world", "a-2"]
      ),
    ],
    passageLinks: [
      link("gs-125", "core", 5, 1, "The foundational dramatization of the death of God as a cultural catastrophe.", ["gs-343", "gm-iii-27", "ti-true-world"]),
      link("gs-343", "core", 5, 2, "Shows the crisis as both exposure and new possibility after inherited horizons collapse.", ["gs-125", "gm-iii-27", "bge-preface"]),
      link("z-prologue-5", "core", 5, 3, "The last man gives nihilism a human face: comfort without height or risk.", ["gs-125", "bge-201-202", "z-prologue-3"]),
      link("gm-iii-27", "core", 5, 4, "Names European nihilism as a crisis born from the exhaustion of inherited ideals.", ["gs-125", "gs-343", "gm-iii-24"]),
      link("ti-true-world", "core", 5, 5, "Tracks the historical collapse of the metaphysical world that used to guarantee moral certainty.", ["bge-preface", "gs-109", "a-2"]),
      link("a-2", "core", 5, 6, "Begins the late attempt to replace moral-metaphysical valuation with a physiological one.", ["a-5-7", "bge-211", "gm-preface-6"]),
      link("bge-preface", "direct", 4, 7, "Treats old philosophy as an inherited seduction by moralized conceptions of truth.", ["gs-343", "ti-true-world", "gm-preface-6"]),
      link("gs-109", "direct", 4, 8, "Removes moral and theological comfort from nature itself.", ["gs-110", "bge-22", "ti-true-world"]),
      link("gs-110", "direct", 4, 9, "Explains how our truth-concepts arise from practical needs rather than transcendence.", ["gs-109", "gs-344", "bge-6"]),
      link("z-thousand-one-goals", "direct", 4, 10, "If peoples create values, then values can also decay, fracture, and be remade.", ["gm-preface-6", "bge-211", "z-prologue-3"]),
      link("gm-iii-23", "direct", 4, 11, "Shows how even science can inherit ascetic seriousness after religion weakens.", ["gs-344", "gm-iii-24", "gs-125"]),
      link("gm-iii-24", "direct", 5, 12, "The will to truth itself becomes questionable once old guarantees disappear.", ["gs-344", "gm-iii-23", "gm-iii-27"]),
      link("a-5-7", "direct", 4, 13, "Extends nihilism into a critique of life-denying moral responses to suffering.", ["a-2", "ti-morality-as-anti-nature", "gm-iii-11"]),
      link("eh-clever-9-10", "related", 4, 14, "Offers amor fati as an affirmative answer to the vacuum left by collapsing ideals.", ["gs-341", "z-redemption", "eh-wise-6"]),
      link("gs-341", "related", 4, 15, "Eternal recurrence tests whether one can answer nihilism with full affirmation instead of escape.", ["z-vision-riddle", "eh-clever-9-10", "gs-343"]),
      link("hh-45", "background", 3, 16, "An early sign that morality can be historicized and thereby destabilized.", ["gs-110", "gm-preface-6"]),
      link("gm-preface-6", "background", 4, 17, "Frames nihilism as a crisis that cannot be solved without reevaluating values.", ["bge-preface", "a-2", "gm-iii-27"]),
    ],
  },
  {
    id: "will-to-power-self-overcoming",
    title: "Will to Power and Self-Overcoming",
    shortTitle: "Will to Power",
    category: "Power, Growth, and Formation",
    shortDescription:
      "Nietzsche’s language of force, ordering, growth, and self-transformation as an alternative to passive or moralized models of life.",
    overview:
      "Nietzsche uses will to power to interpret life, drives, struggle, and the imposition of meaning. These uses include self-formation but also appropriation, domination, and social hierarchy. Whether they form a single psychological, biological, or metaphysical doctrine is disputed. Read the experimental argument of BGE §36 alongside the more troubling account of exploitation in §259, then ask how either relates to self-overcoming.",
    essentialPassageIds: ["bge-13", "z-self-overcoming", "bge-36", "gm-ii-12", "bge-259", "gs-290"],
    aliases: [
      "will to power",
      "self-overcoming",
      "strength",
      "discipline",
      "growth",
      "ordering drives",
      "formation",
    ],
    relatedConcepts: [
      "Long obedience",
      "Character style",
      "Amor fati",
      "Higher types",
      "Transformation",
      "Rank of soul",
      "Command and obedience",
    ],
    developmentalArc: [
      arc(
        "Aesthetic Self-Formation",
        "Nietzsche first imagines formation as artistic shaping rather than moral self-renunciation.",
        ["bt-24", "gs-107", "gs-290"]
      ),
      arc(
        "Transformation in Zarathustra",
        "Self-overcoming becomes a dramatic existential task expressed through metamorphosis, command, and creative release.",
        ["z-three-metamorphoses", "z-self-overcoming", "z-gift-giving-virtue"]
      ),
      arc(
        "Late Discipline and Interpretation",
        "In 1886–1887, Nietzsche tests will to power as an interpretation of life, appropriation, and historical changes of function.",
        ["bge-13", "bge-259", "gm-ii-12"]
      ),
    ],
    passageLinks: [
      link("bge-13", "core", 5, 1, "Begin with the challenge to self-preservation, then assess the proposed alternative.", ["bge-36", "bge-259"]),
      link("z-self-overcoming", "core", 5, 2, "The most direct Zarathustrian statement of life as continual reinterpretation and surpassing.", ["bge-36", "z-three-metamorphoses", "eh-wise-6"]),
      link("bge-36", "core", 5, 3, "Experiments with will to power as a unifying interpretation of life from within.", ["z-self-overcoming", "bge-211", "bge-188"]),
      link("gm-ii-12", "core", 5, 4, "Shows power at work in the reinterpretation of a practice and its purposes.", ["bge-36", "bge-259"]),
      link("bge-259", "core", 5, 5, "Confronts appropriation and exploitation explicitly; personal growth alone cannot capture this claim.", ["bge-257", "bge-13", "gm-ii-12"]),
      link("gs-290", "core", 5, 6, "Self-overcoming here appears as patient aesthetic ordering of one’s own character.", ["z-three-metamorphoses", "eh-clever-9-10", "bge-188"]),
      link("z-three-metamorphoses", "direct", 5, 7, "Shows transformation as a sequence of burden, resistance, and creative innocence.", ["z-self-overcoming", "z-prologue-3", "gs-290"]),
      link("ti-maxims-8", "related", 3, 8, "Condenses the strengthening-through-resistance motif into a memorable late aphorism.", ["bge-188", "eh-wise-6", "gs-290"]),
      link("eh-wise-6", "direct", 5, 9, "Presents self-mastery and freedom from ressentiment as signs of genuine strength.", ["eh-clever-9-10", "z-redemption", "gs-290"]),
      link("bge-188", "direct", 5, 10, "Highlights discipline as a condition of higher growth rather than its enemy.", ["ti-maxims-8", "bge-211", "gs-290"]),
      link("bge-211", "direct", 4, 11, "Connects power with philosophical legislation and future-shaping.", ["z-thousand-one-goals", "a-2", "bge-36"]),
      link("z-gift-giving-virtue", "direct", 4, 12, "Self-overcoming culminates not in privation but in abundance and bestowal.", ["z-prologue-3", "gs-290", "bge-287"]),
      link("eh-clever-9-10", "direct", 4, 13, "Amor fati names a late spiritual discipline of affirmative necessity.", ["gs-341", "z-redemption", "eh-wise-6"]),
      link("gs-107", "related", 4, 14, "Makes art a survival technique that prepares the later language of style and strength.", ["bt-24", "gs-290"]),
      link("z-redemption", "related", 4, 15, "Shows that overcoming includes the ability to stop taking revenge on time and fate.", ["eh-clever-9-10", "gs-341"]),
      link("bt-24", "background", 3, 16, "Early foundation for interpreting greatness as artistic transfiguration rather than moral purity.", ["gs-107", "gs-290"]),
      link("gs-110", "background", 3, 17, "Suggests cognition itself grows from practical needs and simplifications.", ["bge-6", "bge-22"]),
    ],
  },
  {
    id: "eternal-recurrence-amor-fati",
    title: "Eternal Recurrence and Amor Fati",
    shortTitle: "Eternal Recurrence",
    category: "Affirmation and Time",
    shortDescription:
      "Nietzsche’s deepest test of affirmation: whether one can will necessity, repetition, and one’s entire life without resentment.",
    overview:
      "Eternal recurrence is one of Nietzsche’s hardest thoughts because it joins cosmological imagery to existential testing. The question is whether one can affirm one’s life so fully that one would will it again, down to its suffering and irreversibility. Amor fati is the corresponding disposition: not resignation, but love of necessity without appeal to another world or a moral alibi.",
    essentialPassageIds: ["gs-276", "gs-341", "z-vision-riddle", "z-convalescent", "z-redemption", "eh-clever-9-10"],
    aliases: [
      "eternal recurrence",
      "eternal return",
      "amor fati",
      "affirmation of fate",
      "the greatest weight",
      "recurrence of the same",
    ],
    relatedConcepts: [
      "Necessity",
      "Time",
      "Self-overcoming",
      "Anti-ressentiment",
      "The gateway moment",
      "Tragic affirmation",
    ],
    developmentalArc: [
      arc(
        "Aesthetic Preparation",
        "Nietzsche first defends life through style and artistic transfiguration before recurrence becomes explicit.",
        ["bt-24", "gs-107", "gs-290"]
      ),
      arc(
        "The Existential Test",
        "The Gay Science and Zarathustra turn affirmation into a direct confrontation with time, repetition, and willing.",
        ["gs-276", "gs-341", "z-convalescent"]
      ),
      arc(
        "Late Formula of Greatness",
        "In Ecce Homo, amor fati becomes Nietzsche’s compressed name for radical affirmation.",
        ["eh-clever-9-10", "eh-wise-6", "ti-maxims-8"]
      ),
    ],
    passageLinks: [
      link("gs-276", "core", 5, 1, "Introduces amor fati as an aspiration before recurrence becomes a test.", ["gs-341", "eh-clever-9-10"]),
      link("gs-341", "core", 5, 2, "The clearest statement of recurrence as a test of how one values one’s own life.", ["z-vision-riddle", "eh-clever-9-10", "gs-343"]),
      link("z-vision-riddle", "core", 5, 3, "Transforms recurrence into a symbolic confrontation with circular time and willing.", ["gs-341", "z-redemption", "z-self-overcoming"]),
      link("z-convalescent", "core", 5, 4, "Tests affirmation against the return of what Zarathustra finds hardest to bear.", ["z-vision-riddle", "gs-341", "z-prologue-5"]),
      link("z-redemption", "core", 5, 5, "Connects affirmation to the overcoming of revenge against the irreversibility of the past.", ["eh-clever-9-10", "eh-wise-6", "gs-341"]),
      link("eh-clever-9-10", "core", 5, 6, "Amor fati gives Nietzsche’s late personal formula for affirming necessity without residue.", ["gs-341", "z-redemption", "gs-290"]),
      link("gs-343", "related", 4, 7, "Shows why recurrence matters after old guarantees vanish and life must be affirmed from within.", ["gs-125", "gs-341", "ti-true-world"]),
      link("z-self-overcoming", "direct", 4, 8, "Affirmation requires active transformation, not passive endurance.", ["z-three-metamorphoses", "eh-wise-6", "bge-36"]),
      link("gs-107", "direct", 4, 9, "Art prepares the affirmative temperament by making life bearable without moral consolation.", ["bt-24", "gs-290"]),
      link("z-gift-giving-virtue", "direct", 4, 10, "Affirmation culminates in overflow and generosity rather than mere endurance.", ["z-prologue-3", "gs-290"]),
      link("eh-wise-6", "direct", 4, 11, "Freedom from resentment is a precondition for willing necessity.", ["z-redemption", "eh-clever-9-10"]),
      link("ti-maxims-8", "related", 3, 12, "Strengthening through ordeal belongs to the psychology required by recurrence.", ["eh-wise-6", "bge-188"]),
      link("bt-24", "background", 3, 13, "Early statement that existence is justified aesthetically rather than morally.", ["gs-107", "gs-341"]),
      link("gs-290", "background", 4, 14, "Style is a practical training in saying yes to one’s materials rather than escaping them.", ["eh-clever-9-10", "z-three-metamorphoses"]),
    ],
  },
  {
    id: "perspectivism-truth",
    title: "Perspectivism and the Critique of Truth",
    shortTitle: "Perspectivism / Truth",
    category: "Knowledge and Interpretation",
    shortDescription:
      "Nietzsche’s challenge to disinterested truth, neutral observation, and the moral innocence of knowledge.",
    overview:
      "Nietzsche does not simply replace truth with arbitrary opinion. He asks what drives, needs, and evaluative commitments operate inside our claims to truth. Perspectivism means that knowing is interpretive, situated, and bound up with life. The deepest question is not only whether a claim is true, but why truth itself should be unconditionally preferred.",
    essentialPassageIds: ["gm-iii-12", "gs-374", "bge-6", "bge-22", "gs-344", "gm-iii-24"],
    aliases: [
      "perspectivism",
      "truth",
      "will to truth",
      "appearance",
      "interpretation",
      "science critique",
      "anti-metaphysics",
    ],
    relatedConcepts: [
      "Interpretation",
      "Appearance",
      "Science",
      "Genealogy",
      "The true world",
      "Useful error",
      "Drives of knowing",
    ],
    developmentalArc: [
      arc(
        "Useful Error and Human Knowing",
        "Middle-period Nietzsche explains knowledge through habit, simplification, and the projection of human needs.",
        ["gs-109", "gs-110"]
      ),
      arc(
        "Perspective Against Dogma",
        "Beyond Good and Evil attacks the dream of disinterested reason and neutral metaphysics.",
        ["bge-preface", "bge-6", "bge-22"]
      ),
      arc(
        "Truth Put on Trial",
        "Late Nietzsche subjects even the will to truth to genealogical and evaluative critique.",
        ["gs-344", "gs-374", "gm-iii-12", "gm-iii-24", "ti-true-world"]
      ),
    ],
    passageLinks: [
      link("gm-iii-12", "core", 5, 1, "The central published account of perspectival knowing and a revised meaning of objectivity.", ["gs-374", "bge-6", "gm-iii-24"]),
      link("gs-374", "core", 5, 2, "Limits claims about all possible perspectives while opening inquiry beyond the human standpoint.", ["gm-iii-12", "bge-22", "gs-344"]),
      link("bge-6", "core", 5, 3, "A signature perspectivist claim: philosophies confess the character and drives of their authors.", ["gs-110", "bge-preface", "bge-22"]),
      link("bge-22", "core", 5, 4, "Treats even scientific descriptions of nature as interpretations rather than raw access to being.", ["gs-109", "bge-34", "ti-true-world"]),
      link("gs-344", "core", 5, 5, "Pushes the question from what is true to why truth should rule at all.", ["gm-iii-24", "gm-iii-23", "bge-preface"]),
      link("gm-iii-24", "core", 5, 6, "Turns critique back on the will to truth itself, refusing to exempt it from valuation.", ["gs-344", "gm-iii-23", "gm-preface-6"]),
      link("bge-34", "direct", 5, 7, "Shows how appearance and simplification may belong to life itself rather than merely hiding truth.", ["gs-109", "gs-110", "ti-true-world"]),
      link("ti-true-world", "direct", 5, 8, "Dismantles the metaphysical structure that elevated truth over appearance in the first place.", ["bge-preface", "bge-34", "gs-125"]),
      link("gs-109", "direct", 4, 9, "Removes moral order and teleology from nature to clear space for interpretive humility.", ["bge-22", "gs-110", "ti-true-world"]),
      link("gs-110", "direct", 4, 10, "Treats knowledge as sedimented utility and habit, not pure receptivity.", ["bge-6", "gs-344", "hh-45"]),
      link("bge-preface", "direct", 4, 11, "Frames the critique of truth as a critique of dogmatic philosophy.", ["bge-6", "ti-true-world", "gm-preface-6"]),
      link("bge-36", "direct", 4, 12, "Illustrates Nietzsche’s willingness to advance interpretations without disguising them as absolutes.", ["z-self-overcoming", "bge-22", "gm-iii-24"]),
      link("gm-iii-23", "direct", 4, 13, "Makes science answer for the ideal of truth it continues to inherit.", ["gs-344", "gm-iii-24", "gs-125"]),
      link("hh-45", "background", 3, 14, "An early step toward genealogizing moral and conceptual distinctions.", ["gs-110", "gm-preface-6"]),
      link("gm-preface-6", "background", 4, 15, "Explains why values, including epistemic values, must themselves be interrogated.", ["gs-344", "bge-preface"]),
    ],
  },
  {
    id: "herd-morality-last-man",
    title: "Herd Morality and the Last Man",
    shortTitle: "Herd Morality",
    category: "Modern Conformity",
    shortDescription:
      "Nietzsche’s critique of safety-first morality, leveling, obedience, and the shrinking of human aspiration.",
    overview:
      "Herd morality names the social atmosphere in which comfort, security, and reciprocal harmlessness become the measure of the good. The last man is its most memorable figure: a human being who avoids danger, transcendence, and depth in favor of managed contentment. His attack on diminished aspiration is entangled with explicit criticism of democracy and equality. Those political commitments need examination alongside the psychological diagnosis.",
    essentialPassageIds: ["gs-116", "z-prologue-5", "bge-199", "bge-201-202", "d-9", "z-tarantulas"],
    aliases: [
      "herd morality",
      "the herd",
      "last man",
      "conformity",
      "tameness",
      "safety morality",
      "leveling",
    ],
    relatedConcepts: [
      "Slave morality",
      "Equality",
      "Comfort",
      "Obedience",
      "Fear morality",
      "Custom",
      "Mediocrity",
    ],
    developmentalArc: [
      arc(
        "Custom and Moral Obedience",
        "Nietzsche first locates morality in inherited practices of obedience and communal pressure.",
        ["d-9", "hh-45", "gs-116"]
      ),
      arc(
        "Poetic Diagnosis",
        "Zarathustra gives modern conformism a vivid image in the last man and the revenge of the tarantulas.",
        ["z-prologue-5", "z-tarantulas", "z-thousand-one-goals"]
      ),
      arc(
        "Late Social Psychology",
        "Beyond Good and Evil and the late polemics diagnose herd morality as a rule of fear, safety, and leveling.",
        ["bge-199", "bge-201-202", "a-5-7"]
      ),
    ],
    passageLinks: [
      link("gs-116", "core", 5, 1, "An early direct naming of herd instinct as a force behind moral judgment.", ["d-9", "bge-199", "bge-201-202"]),
      link("z-prologue-5", "core", 5, 2, "The last man crystallizes Nietzsche’s fear of comfort becoming the highest value.", ["bge-201-202", "gs-125", "z-prologue-3"]),
      link("bge-199", "core", 5, 3, "Shows herd morality as rooted in obedience and the desire to be guided.", ["gs-116", "bge-201-202", "d-9"]),
      link("bge-201-202", "core", 5, 4, "Makes explicit the link between fear, security, and moral leveling.", ["bge-199", "z-prologue-5", "a-5-7"]),
      link("d-9", "core", 4, 5, "Supplies the background in custom and obedience that later hardens into herd morality.", ["hh-45", "gs-116", "bge-199"]),
      link("z-tarantulas", "core", 4, 6, "Shows how the language of justice and equality can conceal revenge and leveling.", ["gm-i-10", "z-prologue-5", "bge-201-202"]),
      link("gm-i-10", "direct", 4, 7, "The creative force of ressentiment helps explain herd moralization.", ["z-tarantulas", "gm-i-13", "bge-201-202"]),
      link("gm-i-13", "direct", 4, 8, "Exposes the moralization of weakness that fuels herd judgment of strength.", ["gm-i-10", "a-5-7"]),
      link("a-5-7", "direct", 4, 9, "Late critique of pity as a value system that keeps decline in circulation.", ["bge-201-202", "ti-morality-as-anti-nature"]),
      link("ti-morality-as-anti-nature", "related", 4, 10, "Shows herd morality at the level of instinct-denying moral psychology.", ["a-5-7", "gm-i-13"]),
      link("hh-45", "background", 3, 11, "Early genealogical groundwork for viewing morality as historically produced.", ["d-9", "gm-preface-6"]),
      link("z-thousand-one-goals", "related", 3, 12, "Values are human creations, which means they can also collapse into leveling formations.", ["bge-211", "z-prologue-3"]),
    ],
  },
  {
    id: "nobility-rank-higher-type",
    title: "Nobility, Rank, and Higher Types",
    shortTitle: "Nobility / Rank",
    category: "Excellence and Differentiation",
    shortDescription:
      "Nietzsche’s language of rank, distinction, spiritual bearing, and the conditions under which higher human possibilities emerge.",
    overview:
      "Nietzsche links nobility both to aristocratic social relations and to an inward ordering of drives. BGE §257 explicitly invokes hierarchy and slavery; §287 shifts attention toward self-reverence. Reading these together prevents either social domination or personal cultivation from explaining the whole theme. Ask what his ideal of higher culture demands of others, and whether that demand can be defended.",
    essentialPassageIds: ["bge-257", "bge-260", "bge-287", "gm-i-2", "z-gift-giving-virtue", "bge-211"],
    aliases: [
      "higher type",
      "nobility",
      "rank",
      "pathos of distance",
      "aristocratic",
      "self-reverence",
      "spiritual rank",
    ],
    relatedConcepts: [
      "Master morality",
      "Pathos of distance",
      "Long obedience",
      "Gift-giving virtue",
      "Self-overcoming",
      "Value creation",
    ],
    developmentalArc: [
      arc(
        "Early and Middle Hints",
        "Nietzsche begins to oppose conformity with self-formation and exceptional standards.",
        ["hh-45", "gs-290", "gs-107"]
      ),
      arc(
        "Zarathustrian Elevation",
        "Higher humanity is dramatized as transformation, giving, and future-directed creation.",
        ["z-prologue-3", "z-three-metamorphoses", "z-gift-giving-virtue"]
      ),
      arc(
        "Late Rank Theory",
        "Beyond Good and Evil and the Genealogy formalize nobility as rank, distance, and self-affirming valuation.",
        ["bge-257", "bge-287", "gm-i-2"]
      ),
    ],
    passageLinks: [
      link("bge-257", "core", 5, 1, "The best statement of the pathos of distance and the role of rank in valuation.", ["bge-260", "gm-i-2", "bge-287"]),
      link("bge-260", "core", 5, 2, "Links nobility to self-affirming value-creation rather than reactive moralization.", ["bge-257", "gm-i-2", "gm-i-10"]),
      link("bge-287", "core", 5, 3, "Defines nobility as a style of soul rather than merely a political class.", ["bge-257", "z-gift-giving-virtue", "gs-290"]),
      link("gm-i-2", "core", 5, 4, "Explains how good originally names noble self-experience.", ["bge-257", "bge-260", "gm-i-5"]),
      link("z-gift-giving-virtue", "core", 4, 5, "Shows the higher type as overflowing and generous rather than merely dominant.", ["z-prologue-3", "bge-287", "gs-290"]),
      link("bge-211", "core", 4, 6, "Ties higher humanity to the capacity to legislate values and shape futures.", ["z-thousand-one-goals", "bge-36", "a-2"]),
      link("z-prologue-3", "direct", 4, 7, "The overman appears as a horizon for humanity rather than a moralized equality ideal.", ["z-three-metamorphoses", "z-gift-giving-virtue"]),
      link("z-three-metamorphoses", "direct", 4, 8, "Higher possibility requires a painful transformation of spirit.", ["gs-290", "z-self-overcoming"]),
      link("gs-290", "direct", 4, 9, "Gives the middle-period practical version of spiritual rank: style rather than grievance.", ["bge-287", "eh-clever-9-10"]),
      link("bge-188", "direct", 4, 10, "Shows that rank depends on discipline and formative severity.", ["ti-maxims-8", "bge-211"]),
      link("eh-wise-6", "related", 4, 11, "Freedom from ressentiment is a late sign of genuine strength and elevation.", ["eh-clever-9-10", "z-redemption"]),
      link("a-2", "related", 4, 12, "Late physiological compression of noble valuation into ascent, power, and increase.", ["bge-260", "bge-211"]),
      link("hh-45", "background", 3, 13, "Early groundwork for treating moral value historically rather than democratically given.", ["gm-preface-6"]),
    ],
  },
  {
    id: "bad-conscience-guilt",
    title: "Bad Conscience, Guilt, and Internalization",
    shortTitle: "Bad Conscience / Guilt",
    category: "Psychology of Moralization",
    shortDescription:
      "Nietzsche’s account of how blocked aggression turns inward and becomes guilt, debt, and self-accusation.",
    overview:
      "Bad conscience is not simply remorse. It arises when instincts that once discharged outwardly are forced inward by social organization and begin to operate against the self. Nietzsche ties guilt to debt, punishment, priestly interpretation, and the production of inwardly burdened human beings. This theme shows how morality becomes psychological architecture.",
    essentialPassageIds: ["gm-ii-4-5", "gm-ii-12", "gm-ii-14-15", "gm-ii-16", "gm-ii-18", "gm-iii-13-15"],
    aliases: [
      "bad conscience",
      "guilt",
      "debt",
      "punishment",
      "internalization",
      "self-accusation",
      "sin consciousness",
    ],
    relatedConcepts: [
      "Ressentiment",
      "Ascetic priest",
      "Punishment",
      "Debt",
      "Christian guilt",
      "Instinct",
      "Cruelty turned inward",
    ],
    developmentalArc: [
      arc(
        "Custom and Social Formation",
        "Nietzsche first situates morality in obedience and social training before turning to inner psychic consequence.",
        ["d-9", "hh-45", "gs-116"]
      ),
      arc(
        "Genealogical Psychology",
        "The Second Essay of the Genealogy explains guilt through debt, punishment, and internalization.",
        ["gm-ii-4-5", "gm-ii-14-15", "gm-ii-16", "gm-ii-18"]
      ),
      arc(
        "Priestly Intensification",
        "Late religion and ascetic interpretation deepen guilt into spiritual self-hostility.",
        ["gm-iii-11", "a-43", "ti-morality-as-anti-nature"]
      ),
    ],
    passageLinks: [
      link("gm-ii-4-5", "core", 5, 1, "Starts with material debt and the problem of compensating injury through cruelty.", ["gm-ii-18", "gm-ii-14-15"]),
      link("gm-ii-12", "core", 5, 2, "Prevents simplistic readings by showing punishment as historically plural in meaning.", ["gm-ii-16", "gm-i-14-15"]),
      link("gm-ii-14-15", "core", 5, 3, "Separates punishment’s actual effects from the supposed production of guilt.", ["gm-ii-12", "gm-ii-16"]),
      link("gm-ii-16", "core", 5, 4, "The defining text on instincts turned inward and the birth of bad conscience.", ["gm-ii-18", "gm-iii-11", "a-43"]),
      link("gm-ii-18", "core", 5, 5, "Shows how debt relations and divine accounting deepen guilt.", ["gm-ii-16", "a-43", "gm-ii-12"]),
      link("gm-iii-13-15", "core", 5, 6, "Follows the priest’s redirection of suffering and ressentiment toward the sufferer.", ["gm-iii-11", "gm-ii-16", "gm-iii-28"]),
      link("gm-i-14-15", "background", 4, 7, "Imagined revenge and cosmic justice prepare the moral universe in which guilt intensifies.", ["gm-i-10", "a-43", "z-redemption"]),
      link("d-9", "background", 4, 8, "Provides the social background of obedience and custom that precedes bad conscience.", ["hh-45", "gm-ii-16", "gs-116"]),
      link("gm-i-10", "background", 4, 9, "Reactive value-creation helps explain the psychic conditions under which guilt acquires force.", ["gm-i-14-15", "gm-i-13"]),
      link("gm-iii-11", "direct", 4, 10, "The ascetic priest organizes guilt by giving suffering a moral meaning.", ["gm-ii-16", "a-43", "gm-iii-13-15"]),
      link("a-43", "direct", 5, 11, "A political counterpoint: Christian personal immortality and equality before God are attacked as hostile to rank.", ["gm-ii-18", "gm-iii-11", "a-24"]),
      link("ti-morality-as-anti-nature", "direct", 4, 12, "Shows the instinct-denying side of moral psychology once aggression turns inward.", ["a-5-7", "gm-ii-16"]),
      link("eh-wise-6", "related", 3, 13, "Late contrast case: health appears as freedom from chronic reactive self-poisoning.", ["z-redemption", "eh-clever-9-10"]),
      link("gs-116", "background", 3, 14, "Herd pressure gives moral judgment its social persistence.", ["d-9", "bge-199"]),
      link("hh-45", "background", 3, 15, "Early groundwork for the later genealogy of guilt.", ["d-9", "gm-preface-6"]),
    ],
  },
  {
    id: "ascetic-ideal-life-denial",
    title: "The Ascetic Ideal and Life-Denial",
    shortTitle: "Ascetic Ideal",
    category: "Religion, Suffering, and Denial",
    shortDescription:
      "Nietzsche’s diagnosis of moral and religious systems that condemn instinct, give suffering a hostile meaning, and turn life against itself.",
    overview:
      "The ascetic ideal makes suffering meaningful and organizes a will that might otherwise collapse. Nietzsche therefore presents it as both hostile to flourishing and a strategy through which damaged life preserves itself. The Third Essay follows this paradox from the priest’s management of guilt to the supposedly secular devotion to truth. Its ending asks why human beings would rather will nothingness than have nothing to will.",
    essentialPassageIds: ["gm-iii-1", "gm-iii-11", "gm-iii-13-15", "gm-iii-23", "gm-iii-24", "gm-iii-27", "gm-iii-28"],
    aliases: [
      "ascetic ideal",
      "life denial",
      "ascetic priest",
      "anti-natural morality",
      "Christian morality",
      "pity",
      "suffering with meaning",
    ],
    relatedConcepts: [
      "Bad conscience",
      "Will to truth",
      "Pity",
      "Priestly power",
      "Sin and guilt",
      "Nihilism",
    ],
    developmentalArc: [
      arc(
        "From Custom to Self-Suspicion",
        "Nietzsche first loosens trust in inherited moral obedience and begins to ask what morality does to the body and psyche.",
        ["d-9", "hh-45", "gs-116"]
      ),
      arc(
        "The Genealogy of the Ascetic Priest",
        "The Third Essay explains how suffering becomes governable when given an ascetic meaning.",
        ["gm-iii-1", "gm-iii-11", "gm-iii-13-15"]
      ),
      arc(
        "Late Anti-Christian Polemic",
        "Late Nietzsche condenses the critique into anti-natural morality, pity, decadence, and the collapse of old ideals.",
        ["ti-morality-as-anti-nature", "a-5-7", "a-2"]
      ),
    ],
    passageLinks: [
      link("gm-iii-1", "core", 5, 1, "Frames the ascetic ideal as a cross-type solution to suffering and meaning.", ["gm-iii-11", "gm-iii-13-15", "gm-iii-27"]),
      link("gm-iii-11", "core", 5, 2, "The ascetic priest is the chief manager of wounded life.", ["gm-iii-13-15", "gm-ii-16", "a-43"]),
      link("gm-iii-13-15", "core", 5, 3, "Shows the practical mechanics of turning suffering into blame, duty, and control.", ["gm-iii-11", "a-5-7", "gm-ii-16"]),
      link("gm-iii-23", "core", 5, 4, "Even science may continue the ascetic ideal when it sanctifies truth without critique.", ["gm-iii-24", "gs-344", "gs-125"]),
      link("gm-iii-24", "core", 5, 5, "The will to truth itself is revealed as an inheritance needing revaluation.", ["gs-344", "gm-iii-23"]),
      link("gm-iii-27", "core", 5, 6, "Shows how the exhaustion of the ascetic ideal shades into nihilism.", ["gs-125", "gs-343", "ti-true-world"]),
      link("gm-iii-28", "core", 5, 7, "The conclusion holds together life-preservation, the meaning of suffering, and willing nothingness.", ["gm-iii-13-15", "gm-iii-24", "gm-iii-27"]),
      link("ti-morality-as-anti-nature", "direct", 5, 8, "Compresses the whole critique into hostility to instinct and the falsification of life.", ["a-5-7", "a-2", "gm-i-13"]),
      link("a-2", "direct", 5, 9, "Provides a counter-valuation in physiological rather than ascetic terms.", ["a-5-7", "bge-211", "ti-true-world"]),
      link("a-5-7", "direct", 5, 10, "Pity and decadence appear as the social morality of declining life.", ["ti-morality-as-anti-nature", "gm-iii-11", "a-24"]),
      link("a-43", "direct", 4, 11, "A late political extension of the critique: personal immortality and equality before God.", ["gm-ii-18", "gm-iii-11"]),
      link("d-9", "background", 3, 12, "The moral regime begins in social obedience before it deepens into spiritual hostility.", ["hh-45", "gs-116"]),
      link("bge-188", "related", 3, 13, "Important counterpoint: Nietzsche distinguishes life-enhancing discipline from ascetic self-negation.", ["ti-maxims-8", "gs-290"]),
    ],
  },
  {
    id: "dionysian-tragic-affirmation",
    title: "The Dionysian and Tragic Affirmation",
    shortTitle: "Dionysian / Tragic",
    category: "Art and Affirmation",
    shortDescription:
      "Nietzsche’s early and enduring attempt to justify life through art, form, excess, and the tragic saying-yes to existence.",
    overview:
      "The Dionysian is Nietzsche’s name for ecstasy, dissolution, musical intensity, and the ability to affirm life without demanding that suffering disappear. Tragic affirmation does not deny horror; it transforms it. The language changes substantially after The Birth of Tragedy. Nietzsche’s 1886 self-criticism challenges his earlier framework; the late account in Twilight should be compared with that break as well as with the continuities.",
    essentialPassageIds: ["bt-1", "bt-5", "bt-24", "gs-107", "bt-self-criticism", "ti-ancients-5"],
    aliases: [
      "Dionysian",
      "tragic wisdom",
      "tragedy",
      "Apollonian",
      "aesthetic justification",
      "art and life",
    ],
    relatedConcepts: [
      "Aesthetic justification",
      "Eternal recurrence",
      "Amor fati",
      "Style",
      "Music",
      "Greek tragedy",
    ],
    developmentalArc: [
      arc(
        "The Tragic Origin",
        "Nietzsche first discovers affirmation in the Greek tragic synthesis of Apollonian form and Dionysian truth.",
        ["bt-1", "bt-5", "bt-7"]
      ),
      arc(
        "Aesthetic Survival",
        "The middle works preserve the theme by treating art and style as supports of bearable existence.",
        ["gs-107", "gs-290"]
      ),
      arc(
        "Affirmation Beyond Art Theory",
        "The 1886 self-criticism revises the early project; the writings of 1888 connect the Dionysian with affirmation of becoming and recurrence.",
        ["bt-self-criticism", "ti-ancients-5", "eh-clever-9-10"]
      ),
    ],
    passageLinks: [
      link("bt-1", "core", 5, 1, "Introduces the two artistic drives that structure Nietzsche’s first theory of affirmation.", ["bt-5", "bt-7", "bt-24"]),
      link("bt-5", "core", 5, 2, "Shows Dionysian release as communal and anti-individual in its most intense moments.", ["bt-1", "bt-7"]),
      link("bt-24", "core", 5, 3, "The strongest early formulation of life being justified aesthetically rather than morally.", ["gs-107", "gs-341", "eh-clever-9-10"]),
      link("gs-107", "core", 4, 4, "Carries the early insight forward: art makes existence bearable without otherworldly consolation.", ["bt-24", "gs-290"]),
      link("bt-self-criticism", "core", 5, 5, "Read the 1886 preface against the original book: Nietzsche criticizes his own vocabulary and cultural hopes.", ["bt-1", "bt-24", "ti-ancients-5"]),
      link("ti-ancients-5", "core", 5, 6, "The late retrospective ties Dionysian affirmation to becoming, suffering, and recurrence.", ["bt-self-criticism", "z-convalescent", "eh-clever-9-10"]),
      link("bt-7", "direct", 5, 7, "Presents tragedy as a visual-musical way of surviving dreadful truth.", ["bt-5", "bt-24", "gs-107"]),
      link("z-vision-riddle", "direct", 4, 8, "Brings tragic affirmation into a confrontation with time, recurrence, and necessity.", ["gs-341", "z-redemption", "eh-clever-9-10"]),
      link("z-redemption", "direct", 4, 9, "Affirmation now means no revenge against time or necessity.", ["eh-clever-9-10", "gs-341"]),
      link("gs-341", "direct", 4, 10, "Recurrence radicalizes the tragic yes into a demand for total affirmation.", ["z-vision-riddle", "eh-clever-9-10"]),
      link("eh-clever-9-10", "direct", 4, 11, "Amor fati is the late distilled form of tragic affirmation.", ["gs-341", "z-redemption"]),
      link("gs-290", "related", 4, 12, "Style becomes the middle-period practical version of artistic self-affirmation.", ["gs-107", "z-gift-giving-virtue"]),
      link("ti-maxims-8", "related", 3, 13, "Strength through ordeal belongs to the same affirmative ethos, even outside explicit art language.", ["eh-wise-6", "bge-188"]),
      link("gs-109", "background", 3, 14, "Clears away moralized nature so affirmation must arise immanently.", ["ti-true-world", "gs-107"]),
    ],
  },
  {
    id: "revaluation-philosophizing-with-hammer",
    title: "Revaluation of Values and Philosophizing with a Hammer",
    shortTitle: "Revaluation",
    category: "Critique and Creation",
    shortDescription:
      "Nietzsche’s project of testing inherited values, exposing their origins, and preparing the ground for new evaluations.",
    overview:
      "Revaluation is the broadest name for Nietzsche’s mature project. It begins critically by sounding out idols, moral certainties, and truth-claims to see what sustains them. But it is not merely destructive: if values are historical creations, then they can also be ranked, tested, and recreated. This theme gathers Nietzsche as diagnostician, genealogist, and future legislator.",
    essentialPassageIds: ["gm-preface-6", "bge-preface", "ti-true-world", "a-24", "z-thousand-one-goals", "bge-211"],
    aliases: [
      "revaluation of values",
      "transvaluation",
      "hammer",
      "sound out idols",
      "future philosophy",
      "genealogy of values",
    ],
    relatedConcepts: [
      "Genealogy",
      "Will to truth",
      "Priestly revaluation",
      "Legislation",
      "Creation of values",
      "Death of God",
    ],
    developmentalArc: [
      arc(
        "Historical Suspicion",
        "Early and middle Nietzsche learns to treat moral and intellectual ideals as historically made rather than eternally given.",
        ["hh-45", "gs-110"]
      ),
      arc(
        "Genealogical Critique",
        "The Genealogy and Beyond Good and Evil give revaluation a method: trace values to their creators, drives, and uses.",
        ["bge-preface", "bge-211", "gs-344", "gm-preface-6"]
      ),
      arc(
        "Hammer and Counter-Valuation",
        "Late Nietzsche openly dismantles idols and proposes stronger, more life-affirming criteria of value.",
        ["ti-true-world", "a-24", "a-2"]
      ),
    ],
    passageLinks: [
      link("gm-preface-6", "core", 5, 1, "States the task directly: the value of our values must itself be questioned.", ["bge-preface", "gm-i-10", "gm-iii-24"]),
      link("bge-preface", "core", 5, 2, "Opens the critique by treating philosophical truth-claims as moral seductions.", ["bge-6", "ti-true-world", "gm-preface-6"]),
      link("ti-true-world", "core", 5, 3, "A model hammer-piece: a whole metaphysical structure is sounded out and dissolved.", ["gs-125", "bge-34", "a-2"]),
      link("a-24", "core", 5, 4, "Shows revaluation historically, as priestly reversal of noble values.", ["gm-i-5", "gm-i-10", "a-2"]),
      link("z-thousand-one-goals", "core", 4, 5, "If peoples create values, then value-creation becomes a human and historical act.", ["bge-211", "z-prologue-3", "gm-preface-6"]),
      link("bge-211", "core", 4, 6, "Transforms critique into a positive task of future legislation.", ["z-thousand-one-goals", "a-2", "bge-36"]),
      link("gs-344", "direct", 4, 7, "Even truth is not exempt from revaluation.", ["gm-iii-24", "gs-110"]),
      link("bge-22", "direct", 4, 8, "Shows how what looks neutral often hides an interpretation in command position.", ["bge-6", "ti-true-world"]),
      link("gm-i-10", "direct", 4, 9, "Revaluation can happen reactively as well as nobly; genealogy teaches us to distinguish them.", ["gm-i-5", "a-24"]),
      link("gm-iii-24", "direct", 4, 10, "Pushes revaluation into epistemic values by interrogating the will to truth.", ["gs-344", "gm-preface-6"]),
      link("a-2", "direct", 5, 11, "Provides Nietzsche’s own counter-valuation in compressed late form.", ["a-5-7", "bge-211", "ti-morality-as-anti-nature"]),
      link("hh-45", "background", 3, 12, "Early genealogical practice before the mature language of revaluation arrives.", ["gs-110", "gm-preface-6"]),
      link("gs-110", "background", 3, 13, "Knowledge becomes historical and interpretive rather than sacred.", ["bge-6", "gs-344"]),
    ],
  },
  {
    id: "overman-transformation",
    title: "The Overman and Human Transformation",
    shortTitle: "Overman / Transformation",
    category: "Future Humanity",
    shortDescription:
      "Nietzsche’s forward-facing language of becoming, metamorphosis, and the demand that humanity become more than it presently is.",
    overview:
      "The overman is not a finished species but a horizon of transformation. Nietzsche uses the figure to resist both complacent humanism and herd modernity. Becoming more than man requires self-overcoming, new valuation, and a capacity to affirm life without recourse to external guarantees. This theme collects the future-directed side of Nietzsche’s thought.",
    essentialPassageIds: ["z-prologue-3", "z-three-metamorphoses", "z-self-overcoming", "z-gift-giving-virtue", "gs-290", "eh-wise-6"],
    aliases: [
      "overman",
      "superman",
      "transformation",
      "becoming",
      "self-overcoming",
      "future humanity",
      "higher human type",
    ],
    relatedConcepts: [
      "Last man",
      "Gift-giving virtue",
      "Style",
      "Self-overcoming",
      "Rank",
      "Future philosophy",
    ],
    developmentalArc: [
      arc(
        "Styling the Self",
        "Middle Nietzsche gives a non-metaphysical preparation for transformation through style and self-ordering.",
        ["gs-107", "gs-290", "d-9"]
      ),
      arc(
        "Zarathustra’s Future Figures",
        "Transformation becomes dramatic in the overman, metamorphoses, and the work of self-overcoming.",
        ["z-prologue-3", "z-three-metamorphoses", "z-self-overcoming"]
      ),
      arc(
        "Late Criteria of Height",
        "The late works evaluate whether strength, rank, and future legislation can sustain higher human possibilities.",
        ["bge-211", "bge-287", "eh-wise-6"]
      ),
    ],
    passageLinks: [
      link("z-prologue-3", "core", 5, 1, "The clearest announcement that humanity is a bridge and task, not an endpoint.", ["z-prologue-5", "z-three-metamorphoses", "z-gift-giving-virtue"]),
      link("z-three-metamorphoses", "core", 5, 2, "Maps the inner transformations required for higher creation.", ["z-self-overcoming", "gs-290", "z-prologue-3"]),
      link("z-self-overcoming", "core", 5, 3, "Shows becoming higher as continual reordering rather than static perfection.", ["bge-36", "z-three-metamorphoses", "eh-wise-6"]),
      link("z-gift-giving-virtue", "core", 4, 4, "The transformed human being is marked by abundance, not merely severity.", ["z-prologue-3", "bge-287", "gs-290"]),
      link("gs-290", "core", 4, 5, "Middle-period practical preparation for transformation through style.", ["z-three-metamorphoses", "eh-clever-9-10"]),
      link("eh-wise-6", "core", 4, 6, "Late criterion: higher life is free from chronic resentment and reactive poisoning.", ["z-redemption", "eh-clever-9-10"]),
      link("bge-211", "direct", 4, 7, "Higher humanity requires legislators, not only critics and scholars.", ["z-thousand-one-goals", "a-2"]),
      link("bge-287", "direct", 4, 8, "Gives the mature language of rank and self-reverence that the overman theme presupposes.", ["bge-257", "z-gift-giving-virtue"]),
      link("ti-maxims-8", "direct", 3, 9, "Strength through ordeal belongs to Nietzsche’s picture of transformation.", ["bge-188", "eh-wise-6"]),
      link("eh-clever-9-10", "direct", 4, 10, "Amor fati gives the affective basis of a life capable of becoming more.", ["gs-341", "z-redemption", "gs-290"]),
      link("gs-341", "related", 4, 11, "Recurrence tests whether transformation reaches total affirmation.", ["z-vision-riddle", "eh-clever-9-10"]),
      link("z-redemption", "related", 4, 12, "The future human being must stop taking revenge on time.", ["z-vision-riddle", "eh-wise-6"]),
      link("gs-107", "background", 3, 13, "Art first teaches survival without metaphysical comfort.", ["bt-24", "gs-290"]),
    ],
  },
];
