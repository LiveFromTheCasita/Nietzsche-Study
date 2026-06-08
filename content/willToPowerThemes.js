export const willToPowerEditorialCautions = [
  "The Will to Power is not Nietzsche's completed final system.",
  "The volume is posthumously arranged Nachlass notebook material from 1883-1888.",
  "The editorial books and headings are useful for navigation, but they are not Nietzsche's own finished structure.",
  "Strong formulations should be read as experiments, diagnoses, provocations, and workshop notes alongside the finished books.",
];

export const willToPowerThemes = [
  {
    id: "european-nihilism",
    title: "European Nihilism",
    description:
      "The collapse of inherited values; what happens when Christianity, morality, truth, and metaphysics lose their binding authority.",
    coreQuestion: "What happens when the highest values devalue themselves?",
    passageClusters: [
      { label: "Core diagnosis", passages: ["§§1-27"], note: "The densest opening sequence on the event and experience of nihilism." },
      { label: "Broader range", passages: ["§§1-56"], note: "The surrounding notes widen the diagnosis into culture, morality, and history." },
    ],
    readWith: ["The Gay Science §125", "Zarathustra Prologue", "Twilight of the Idols", "The Antichrist"],
    caution:
      "Do not treat nihilism as mere pessimism. Nietzsche is diagnosing a value-crisis created by the very ideals Europe inherited.",
  },
  {
    id: "history-of-european-nihilism",
    title: "History of European Nihilism",
    description:
      "Nietzsche's attempt to diagnose how Europe reached spiritual exhaustion, skepticism, decadence, and loss of meaning.",
    coreQuestion: "How did European culture arrive at nihilism?",
    passageClusters: [
      { label: "Historical diagnosis", passages: ["§§57-134"], note: "A sequence on skepticism, decadence, exhaustion, and the long afterlife of Christian-moral values." },
    ],
    readWith: ["The Gay Science Book V", "Beyond Good and Evil", "On the Genealogy of Morals"],
    caution:
      "The notes are not a linear history textbook. Read them as diagnostic sketches for the cultural situation Nietzsche calls European nihilism.",
  },
  {
    id: "critique-of-religion",
    title: "Critique of Religion",
    description:
      "Religion, especially Christianity, as a moral-psychological system that redirects weakness, suffering, ressentiment, and the need for meaning.",
    coreQuestion: "What kind of life needs Christianity to be true?",
    passageClusters: [
      { label: "Main range", passages: ["§§135-252"], note: "Religion treated as psychology, moral strategy, and interpretation of suffering." },
      { label: "Focused passages", passages: ["§§145", "167", "172", "179", "202", "205-207", "215", "217", "221"], note: "Priestly power, resentment, pity, and the Christian need for moral interpretation." },
    ],
    readWith: ["The Antichrist", "Genealogy I", "Genealogy III", "Twilight of the Idols"],
    caution:
      "Nietzsche's critique is not only unbelief. He asks what religion does for certain forms of suffering life.",
  },
  {
    id: "master-slave-morality-ressentiment",
    title: "Master/Slave Morality, Ressentiment, Herd Morality",
    description:
      "A theme cluster around noble valuation, slave revolt, ressentiment, herd utility, equality, guilt, pity, and the inversion of values.",
    coreQuestion: "Whose will to power is expressed by morality?",
    passageClusters: [
      { label: "Herd morality core", passages: ["§§274-287"], note: "The direct herd-morality arc: moral command, herd utility, exceptionality, altruism, and rank." },
      { label: "Christianity and priestly inversion", passages: ["§§145", "167", "172", "179", "202", "205-207", "215", "217", "221"], note: "Priestly power, Christian ressentiment, pity, equality, and the negation of noble values." },
      { label: "Ressentiment and revenge", passages: ["§§167", "172", "179", "350", "351", "765"], note: "Reactive ideals, blame-seeking, revenge, and the moral imagination of the underprivileged." },
      { label: "Good/evil, guilt, and the good man", passages: ["§§268", "295-296", "350-353"], note: "Decadent morality, bad conscience, moralized pain, and the mutilation of stronger drives." },
      { label: "Nobility, rank, and higher type", passages: ["§317", "§§373-374", "§§400-403", "§§765-773", "§784", "§§859-866"], note: "Rank, individual value-creation, anti-equality, anti-mediocrity, and higher-type formation." },
    ],
    expandedPassageMap: {
      intro:
        "Read this theme as a cluster, not as one isolated idea. Master valuation begins by affirming itself as good, while slave valuation begins by naming the threatening other evil, then defines itself as good by contrast. The notebook passages below connect that opposition to ressentiment, herd morality, priestly values, Christianity, pity, equality, decadence, nobility, rank, suffering, cruelty, and revaluation.",
      sections: [
        {
          title: "Core Will to Power passages for master/slave morality",
          entries: [
            {
              passage: "§274",
              theme: "Herd morality as will to power",
              whyItMatters:
                "One of the most important passages. Nietzsche asks whose will to power morality expresses, then identifies three forces behind moral domination: the herd against the strong, the suffering against the fortunate, and the mediocre against the exceptional.",
            },
            {
              passage: "§275",
              theme: "\"Thou shalt,\" equality, herd instinct",
              whyItMatters:
                "A major passage on the moral imperative. Nietzsche interprets the authority behind moral command not as God or pure reason, but as the herd instinct trying to become master.",
            },
            {
              passage: "§276",
              theme: "European morality as herd utility",
              whyItMatters:
                "Nietzsche says European morality is based on what is useful to the herd, and that higher, rarer men suffer because their distinguishing qualities are felt as discreditable.",
            },
            {
              passage: "§284",
              theme: "Virtues as herd-preservation",
              whyItMatters:
                "Nietzsche lists praised virtues such as peaceability, modesty, obedience, sympathy, and industry, then argues that they are valued because they serve society and the herd.",
            },
            {
              passage: "§285",
              theme: "The herd against criminals and higher types",
              whyItMatters:
                "The herd preserves one type and defends itself both against those beneath it and those above it. Herd morality is not only anti-criminal; it is also anti-exceptional.",
            },
            {
              passage: "§286",
              theme: "Altruism as herd-sign",
              whyItMatters:
                "Nietzsche says that if one hears the moral imperative in the altruistic sense, one belongs to the herd. This is a compressed critique of altruistic morality.",
            },
            {
              passage: "§287",
              theme: "Order of rank versus individualistic morality",
              whyItMatters:
                "Nietzsche explicitly says his philosophy aims at an ordering of rank, not individualistic morality. Herd ideas should rule in the herd, while leaders and independent types require different valuations.",
            },
          ],
        },
        {
          title: "Ressentiment, revenge, and the slave revolt",
          entries: [
            {
              passage: "§167",
              theme: "Christianity in the seat of ressentiment",
              whyItMatters:
                "Nietzsche presents Christianity as beginning in a peace movement but being reversed by Paul into something that condemns, tortures, swears, and hates.",
            },
            {
              passage: "§172",
              theme: "Ressentiment and the underprivileged",
              whyItMatters:
                "Nietzsche says ressentiment among lowly placed people is gambled upon by Christian doctrine, close to Genealogy I's claim that priestly morality mobilizes ressentiment.",
            },
            {
              passage: "§179",
              theme: "Christianity's driving force as ressentiment",
              whyItMatters:
                "One of the clearest direct hits. Nietzsche describes Christianity's driving force as ressentiment, popular uprising, and the revolt of the underprivileged.",
            },
            {
              passage: "§350",
              theme: "Ressentiment ideals",
              whyItMatters:
                "Nietzsche says every ideal presupposes love and hate, reverence and contempt, and that hate and contempt are the primary motive in all ressentiment ideals.",
            },
            {
              passage: "§351",
              theme: "The good man as mutilated type",
              whyItMatters:
                "Nietzsche attacks the ideal of the purely good person and argues that strong life includes affirmation and negation, love and hate, gratitude and revenge.",
            },
            {
              passage: "§765",
              theme: "Pessimism of indignation",
              whyItMatters:
                "Nietzsche analyzes the desire to assign blame for one's condition to society, ruling classes, education, the Jews, the nobility, or the successful.",
            },
          ],
        },
        {
          title: "Christianity, priestly inversion, and slave valuation",
          entries: [
            {
              passage: "§145",
              theme: "Religions of ruling and oppressed classes",
              whyItMatters:
                "Nietzsche contrasts affirmative religions of ruling classes with negative religions of oppressed classes, placing the New Testament in the latter category.",
            },
            {
              passage: "§202",
              theme: "Reversal of values",
              whyItMatters:
                "Nietzsche says a certain Christian type began to reverse values according to its own image, making itself the measure of God, truth, love, and wisdom.",
            },
            {
              passage: "§205",
              theme: "The noble soul against Christian modest virtues",
              whyItMatters:
                "Nietzsche says Jesus and Paul put ideas into the heads of little people, bringing more valuable qualities into disrepute and setting bad conscience against the noble soul's self-sufficiency.",
            },
            {
              passage: "§206",
              theme: "New Testament as rage for defamation",
              whyItMatters:
                "Nietzsche hears in the Gospels an indirect rage for defamation and destruction, and says they lack knowledge of higher nature.",
            },
            {
              passage: "§207",
              theme: "Primitive Christianity and abolition of rank",
              whyItMatters:
                "Nietzsche reads primitive Christianity as abolishing state, class distinction, self-defense, and worldly hierarchy, exposing the egalitarian and anti-aristocratic dimension of slave morality.",
            },
            {
              passage: "§215",
              theme: "Christianity as denaturalized herd morality",
              whyItMatters:
                "A major passage. Nietzsche explicitly calls Christianity a denaturalization of herd-animal morality and describes oppressed types as desiring power through imagined freedom, equal rights, privileges, and exclusive power.",
            },
            {
              passage: "§217",
              theme: "Against the Christian ideal",
              whyItMatters:
                "Nietzsche attacks the elevation of the simple, pure in heart, suffering, and unfortunate, linking the Christian ideal to the slave-moral glorification of weakness.",
            },
            {
              passage: "§221",
              theme: "The Christian ideal negates the noble ideal",
              whyItMatters:
                "Nietzsche lists what Christianity negates: pride, pathos of distance, responsibility, splendid animality, warlike and passionate instincts, knowledge, dangerousness, and the future-oriented human being.",
            },
          ],
        },
        {
          title: "Good/evil, guilt, bad conscience, and moral psychology",
          entries: [
            {
              passage: "§268",
              theme: "Two types of morality",
              whyItMatters:
                "Nietzsche warns against confusing a morality by which healthy instinct defends itself against decadence with a morality by which decadence defines, justifies, and deepens itself.",
            },
            {
              passage: "§295",
              theme: "Bad conscience attached to natural inclinations",
              whyItMatters:
                "Nietzsche says natural inclinations have been joined to bad conscience and suggests the reverse experiment: attach bad conscience to world-slandering, anti-natural ideals.",
            },
            {
              passage: "§296",
              theme: "Great crimes in psychology",
              whyItMatters:
                "Nietzsche says pain has been moralized as guilt, strong pleasures branded sinful, weakness sanctified, greatness reinterpreted as selflessness, and love falsified as surrender.",
            },
            {
              passage: "§352",
              theme: "Power includes helping and harming",
              whyItMatters:
                "Nietzsche argues that morality poisons life when it separates the power to help from the power to harm, giving a compact critique of good/evil dualism.",
            },
            {
              passage: "§353",
              theme: "Critique of the good man",
              whyItMatters:
                "Nietzsche asks whether traits such as dignity, justice, honesty, humanity, and good conscience have value in themselves or only through their use and consequences.",
            },
          ],
        },
        {
          title: "Nobility, rank, strength, and the higher type",
          entries: [
            {
              passage: "§317",
              theme: "Virtue as rare, aristocratic exception",
              whyItMatters:
                "Nietzsche says virtue should be defended from preachers of virtue because they turn it into an ideal for everyone and strip it of rarity, inimitability, exceptionalness, and aristocratic magic.",
            },
            {
              passage: "§373",
              theme: "Egoism and physiological rank",
              whyItMatters:
                "Nietzsche argues that egoism has different value depending on the physiological value of the person who possesses it. Ascending life has a different right to egoism than descending life.",
            },
            {
              passage: "§400",
              theme: "Morality as protest of the common, weak, and mediocre",
              whyItMatters:
                "Nietzsche summarizes moral history as the protest of the common person, the underprivileged, and the mediocre. Morality becomes biologically suspicious when it develops at the expense of rulers, independent types, and higher possibilities.",
            },
            {
              passage: "§401",
              theme: "Morality as revenge of the exhausted and disinherited",
              whyItMatters:
                "Nietzsche says morality as supreme value is the instinct of decadence: the exhausted and disinherited take revenge and play the master.",
            },
            {
              passage: "§766",
              theme: "The herd is a means, not the goal",
              whyItMatters:
                "Nietzsche says it is a basic error to place the goal in the herd rather than in single individuals, marking the constructive side of his anti-herd thought.",
            },
            {
              passage: "§767",
              theme: "Individual value-creation",
              whyItMatters:
                "Nietzsche says the individual derives the value of his acts from himself and creatively interprets inherited words and formulas.",
            },
            {
              passage: "§770",
              theme: "Freedom as positive power",
              whyItMatters:
                "Nietzsche defines freedom as the degree of resistance one must overcome to remain on top, close to the noble ideal of self-command rather than mere absence of constraint.",
            },
            {
              passage: "§773",
              theme: "Self-esteem, inequality, and individual self-reliance",
              whyItMatters:
                "Nietzsche explains how pride in rank, inequality, and distance can serve as a school for individual self-reliance.",
            },
            {
              passage: "§§859-862",
              theme: "Order of rank, anti-equality, anti-mediocrity",
              whyItMatters:
                "These severe passages are philosophically central: Nietzsche rejects equal freedom as the guiding problem and focuses instead on rank, power, and the production of a higher type.",
            },
            {
              passage: "§863",
              theme: "Stronger and weaker man",
              whyItMatters:
                "Nietzsche distinguishes the strong as accumulated force from the weak as fragmentation or decline; the mass reacts slowly, defends itself, and does not create.",
            },
            {
              passage: "§§865-866",
              theme: "No uniformity; higher type beyond leveling",
              whyItMatters:
                "Nietzsche rejects uniformity, describes virtue as a noble madness and beautiful exception, then opposes modern leveling with the production of a higher type.",
            },
          ],
        },
      ],
      readingOrder: [
        {
          step: "Start with the herd-morality core",
          passages: "§§274-287",
        },
        {
          step: "Move to Christianity and priestly inversion",
          passages: "§§145, 167, 172, 179, 202, 205-207, 215, 217, 221",
        },
        {
          step: "Read the moral psychology of guilt and the good man",
          passages: "§§268, 295-296, 350-353",
        },
        {
          step: "Then read the revaluation and rank passages",
          passages: "§§373-374, §§400-403",
        },
        {
          step: "Finish with society, the individual, and the higher type",
          passages: "§§765-773, §784, §§859-866",
        },
      ],
      coreCluster: "§§274-287 + §§350-353 + §§400-401 + §§859-866",
      coreClusterNote:
        "This gives the whole arc: herd morality, ressentiment, good/evil dualism, attack on nobility, morality as disguised will to power, order of rank, and higher type.",
    },
    readWith: ["Beyond Good and Evil §260", "Genealogy I", "Genealogy II", "The Antichrist"],
    caution:
      "Do not present master morality as Nietzsche's simple final ideal. His mature concern is the creation of higher types after nihilism, not a return to ancient brutality.",
  },
  {
    id: "critique-of-morality",
    title: "Critique of Morality",
    description:
      "Morality as symptom, weapon, discipline, protection, revenge, herd-preservation, and disguised will to power.",
    coreQuestion: "What does a morality reveal about the kind of life that created it?",
    passageClusters: [
      { label: "Main moral-psychological range", passages: ["§§253-461"] },
      { label: "Pressure points", passages: ["§§254-255", "274-287", "295-296", "317", "350-353", "400-403"], note: "Herd utility, revenge, rank, good conscience, and the hidden work of moral valuation." },
    ],
    readWith: ["Beyond Good and Evil", "On the Genealogy of Morals", "Twilight of the Idols"],
    caution:
      "Nietzsche is not merely rejecting every discipline. He distinguishes moralities that diminish life from forms of training that heighten it.",
  },
  {
    id: "critique-of-philosophy",
    title: "Critique of Philosophy",
    description:
      "Nietzsche's attack on metaphysics, idealism, true-world thinking, causality, subjecthood, philosophical prejudice, and the philosopher's hidden moral commitments.",
    coreQuestion: "What instincts hide behind philosophy's claim to truth?",
    passageClusters: [
      { label: "Philosophy and morality", passages: ["§§419-461"], note: "Philosophical systems read as symptoms of drives and valuations." },
      { label: "Epistemological extension", passages: ["§§462-590"], note: "The critique moves from philosophy into truth, knowledge, logic, and interpretation." },
    ],
    readWith: ["Beyond Good and Evil Preface", "Beyond Good and Evil Part One", "Twilight, Reason in Philosophy"],
    caution:
      "Do not turn the notebook critique into anti-thinking. Nietzsche attacks philosophy when it hides its valuations under the mask of pure reason.",
  },
  {
    id: "truth-knowledge-perspectivism",
    title: "Truth, Knowledge, and Perspectivism",
    description:
      "Knowledge as interpretation, simplification, valuation, and life-serving falsification rather than neutral access to a thing-in-itself.",
    coreQuestion: "What if knowing is a form of interpreting and organizing rather than mirroring reality?",
    passageClusters: [
      { label: "Main range", passages: ["§§462-590"] },
      { label: "Core notes", passages: ["§§480", "494-495", "511", "552", "556", "589-590"], note: "Interpretation, useful error, logic, perspective, and the need to organize becoming." },
    ],
    readWith: ["Beyond Good and Evil §§1-23", "The Gay Science §§110-112", "The Gay Science §354", "Genealogy III"],
    caution:
      "Perspectivism is not lazy relativism. Nietzsche asks how interpretations are formed, strengthened, ranked, and tested.",
  },
  {
    id: "will-to-power",
    title: "The Will to Power",
    description:
      "The central organizing idea: life, thought, value, society, and interpretation are understood through forces striving to expand, command, shape, overcome, rank, and impose form.",
    coreQuestion:
      "What if reality is best understood not as substance, moral order, mechanism, or happiness-seeking, but as dynamic relations of force?",
    passageClusters: [
      { label: "Knowledge and interpretation", passages: ["§§480", "494-495", "511", "552", "556", "589-590", "616-617"] },
      { label: "Nature, force, life, organism", passages: ["§§619", "635-636", "639", "643", "652", "655-658", "660", "681", "685", "688-694", "702-703"] },
      { label: "Value and morality", passages: ["§§254-255", "274", "400-403", "713-715", "786", "856"] },
      { label: "Society, state, individual", passages: ["§§717", "751", "770", "774-776", "784", "957"] },
      { label: "Art, Dionysus, world-conception", passages: ["§§341", "1033", "1066"] },
      { label: "Absolute core", passages: ["§254", "§274", "§480", "§§494-495", "§511", "§552", "§556", "§§589-590", "§§616-617", "§619", "§643", "§§655-658", "§§688-694", "§§702-703", "§§713-715", "§717", "§770", "§§774-776", "§856", "§957", "§1033", "§1066"] },
    ],
    readWith: ["Beyond Good and Evil §13", "Beyond Good and Evil §36", "Beyond Good and Evil §259", "On the Genealogy of Morals", "Zarathustra, On Self-Overcoming"],
    caution:
      "Do not reduce will to power to crude domination. It includes interpretation, incorporation, self-command, creation, form-giving, valuation, and overcoming.",
  },
  {
    id: "life-nature-biology",
    title: "Life, Nature, and Biology",
    description:
      "Life as growth, incorporation, resistance, assimilation, command, obedience, and expansion rather than mere survival or adaptation.",
    coreQuestion: "What does life seek beyond self-preservation?",
    passageClusters: [
      { label: "Main biological range", passages: ["§§635-704"] },
      { label: "Focused passages", passages: ["§§635-636", "643", "655-658", "681", "685", "688-694", "702-703"], note: "Life as ordering, assimilation, resistance, and force-relation." },
    ],
    readWith: ["Beyond Good and Evil §13", "Genealogy II", "Zarathustra, On Self-Overcoming"],
    caution:
      "Nietzsche's life-language is not simple Darwinian adaptation. Survival is often secondary to expansion, incorporation, and ordering.",
  },
  {
    id: "revaluation-of-values",
    title: "Revaluation of Values",
    description:
      "The project of overturning inherited Christian-moral values and creating new standards rooted in life, strength, rank, becoming, and affirmation.",
    coreQuestion: "What values become possible after the collapse of old values?",
    passageClusters: [
      { label: "Core revaluation notes", passages: ["§§254-255", "400-403", "713-715", "786", "856", "957", "972", "1001", "1033"] },
    ],
    readWith: ["The Antichrist", "Twilight of the Idols", "Ecce Homo", "Beyond Good and Evil"],
    caution:
      "Revaluation is not a new rulebook. It is the testing, ranking, and creation of values after inherited authority has lost credibility.",
  },
  {
    id: "society-state-individual",
    title: "Society, State, and Individual",
    description:
      "Society and the state as expressions of force, ordering, herd formation, discipline, domination, and the production or obstruction of higher types.",
    coreQuestion: "Is society an end in itself, or a condition for higher human possibilities?",
    passageClusters: [
      { label: "Main range", passages: ["§§716-784"] },
      { label: "Focused passages", passages: ["§717", "§751", "§§766-770", "§§773-776", "§784"], note: "Social ordering, higher types, individual formation, and the risk of herd ends." },
    ],
    readWith: ["Beyond Good and Evil §§199-203", "Beyond Good and Evil §§257-260", "On the Genealogy of Morals"],
    caution:
      "Do not read Nietzsche's anti-egalitarian notes as a ready political program. They are diagnostics of culture, discipline, rank, and type-formation.",
  },
  {
    id: "art",
    title: "Art",
    description:
      "Art as transfiguration, creation, illusion, form-giving, and the great counterforce to nihilism.",
    coreQuestion: "Why is art more life-affirming than the ascetic demand for truth at any cost?",
    passageClusters: [
      { label: "Art range", passages: ["§§794-853"] },
      { label: "Dionysian extensions", passages: ["§341", "§1033", "§1066"], note: "Art connects to tragic affirmation, world-interpretation, and the late Dionysian vocabulary." },
    ],
    readWith: ["The Birth of Tragedy", "The Gay Science Preface", "Twilight, Skirmishes", "Thus Spoke Zarathustra"],
    caution:
      "Art is not ornament here. It is a way life gives form to chaos, suffering, appearance, and affirmation.",
  },
  {
    id: "order-of-rank",
    title: "Order of Rank",
    description:
      "Nietzsche's anti-egalitarian theme: higher and lower types, strength and weakness, distance, nobility, command, hierarchy, and value-ranking.",
    coreQuestion: "What becomes possible only when rank is acknowledged?",
    passageClusters: [
      { label: "Main range", passages: ["§§854-879"] },
      { label: "Focused passages", passages: ["§856", "§§859-866", "§§868-870"], note: "Rank, higher types, nobility, distance, and the critique of leveling." },
    ],
    readWith: ["Beyond Good and Evil §§257-260", "Genealogy I", "Thus Spoke Zarathustra"],
    caution:
      "Order of rank is not mere social snobbery. Nietzsche is asking how values can distinguish higher and lower forms of life.",
  },
  {
    id: "strong-and-weak",
    title: "The Strong and the Weak",
    description:
      "Nietzsche's distinction between ascending and descending life, accumulated force and fragmentation, strength and decadence.",
    coreQuestion: "What is the difference between strength and weakness as forms of life?",
    passageClusters: [
      { label: "Main range", passages: ["§§880-912"] },
      { label: "Focused passages", passages: ["§§897-912"], note: "Strength as digestion, self-command, resistance, courage, and hard schooling." },
    ],
    readWith: ["Twilight of the Idols", "The Antichrist", "On the Genealogy of Morals"],
    caution:
      "Strength is not loud aggression. In these notes it often means organization, endurance, digestion, and freedom from reactive poisoning.",
  },
  {
    id: "higher-type-self-overcoming",
    title: "Higher-Type Self-Overcoming",
    description:
      "The transformation of the human being into a self-commanding hierarchy of forces through resistance, discipline, suffering, selection, courage, hardness, independence, and value-creation.",
    coreQuestion: "How does a human being become capable of commanding himself and creating values?",
    passageClusters: [
      { label: "Drive hierarchy", passages: ["§492"] },
      { label: "Becoming and overcoming", passages: ["§§616-617", "§§702-703"] },
      { label: "Strength and schooling", passages: ["§§906-912", "§§918-921"], note: "Digestion, courage, hardness, independence, endurance, mastery, and degrees of strength." },
      { label: "Command and form", passages: ["§§940-943", "§§859-868", "§870"], note: "Obedience, willing, nobility, higher type, and overcoming slavish morality." },
      { label: "Late horizon", passages: ["§972", "§§1013-1014", "§1050"], note: "Value-legislation, great health, and Dionysian affirmation." },
      { label: "Best reading order", passages: ["§492", "§617", "§702", "§§906-912", "§§918-921", "§§940-943", "§§859-868", "§870", "§972", "§§1013-1014", "§1050"] },
    ],
    readWith: ["Zarathustra, On Self-Overcoming", "Zarathustra Prologue", "Ecce Homo", "Beyond Good and Evil §§211-213"],
    caution:
      "This is not ordinary self-improvement. It is the reorganization of drives, values, discipline, suffering, and creative power.",
  },
  {
    id: "overman-higher-type",
    title: "The Overman / Higher Type",
    description:
      "The Overman appears in The Will to Power through related terms: higher type, stronger species, great human being, highest man, legislator of values, Dionysian man, and future philosopher.",
    coreQuestion: "What kind of human being could create values after the collapse of old ideals?",
    passageClusters: [
      { label: "Direct Overman passages", passages: ["§804", "§866", "§1001"] },
      { label: "Higher type / stronger species", passages: ["§27", "§382", "§§859-870"] },
      { label: "Strong of the future", passages: ["§§897-905"] },
      { label: "Future rulers and legislators", passages: ["§§954-957", "§§971-972"] },
      { label: "Great human being / highest man", passages: ["§§993-1003"] },
      { label: "Dionysian background", passages: ["§1067"] },
      { label: "Core reading order", passages: ["§27", "§382", "§804", "§§859-870", "§§897-905", "§§954-957", "§§971-972", "§§993-1003", "§1067"] },
      { label: "Absolute core", passages: ["§866", "§898", "§954", "§957", "§972", "§997", "§1001", "§1003"] },
    ],
    readWith: ["Zarathustra Prologue §§3-5", "Zarathustra, On the Gift-Giving Virtue", "Beyond Good and Evil §211", "Ecce Homo"],
    caution:
      "Do not reduce the Overman to a superhero, biological superior, political tyrant, or fantasy of domination. Treat it as a higher, value-creating, self-overcoming type capable of affirming life after nihilism.",
  },
  {
    id: "noble-human-being-noble-soul",
    title: "Noble Human Being / Noble Soul",
    description:
      "Nobility as distance, self-reverence, self-command, generosity from abundance, solitude, discipline, and refusal of herd standards.",
    coreQuestion: "What does Nietzsche mean by nobility after aristocratic society has collapsed?",
    passageClusters: [
      { label: "Noble type cluster", passages: ["§317", "§373", "§770", "§773", "§§859-866", "§§908-912", "§§919-921", "§§940-943", "§§993-1003"] },
    ],
    readWith: ["Beyond Good and Evil §260", "Beyond Good and Evil §265", "Beyond Good and Evil §287", "Genealogy I"],
    caution:
      "Nobility is not reducible to inherited class. The late question is whether rank of soul can survive after old aristocratic structures collapse.",
  },
  {
    id: "dionysus",
    title: "Dionysus",
    description:
      "Dionysus as tragic affirmation: saying yes to becoming, suffering, destruction, creation, recurrence, and life as a whole.",
    coreQuestion: "What kind of spirit can affirm life without needing it morally justified?",
    passageClusters: [
      { label: "Main late range", passages: ["§§1003-1067"] },
      { label: "Focused passages", passages: ["§1033", "§1050", "§§1066-1067"], note: "Art, tragic affirmation, recurrence, and the world as self-creating force." },
    ],
    readWith: ["The Birth of Tragedy", "Twilight, What I Owe to the Ancients", "Ecce Homo"],
    caution:
      "Dionysus is not simple ecstasy. It names affirmation that can include suffering, destruction, and becoming without moral escape.",
  },
  {
    id: "eternal-recurrence",
    title: "Eternal Recurrence",
    description:
      "The highest test of affirmation: whether one could will life, becoming, suffering, joy, and necessity again and again.",
    coreQuestion: "Can one affirm existence so completely that one would will its recurrence?",
    passageClusters: [
      { label: "Recurrence range", passages: ["§§1053-1067"], note: "Notebook formulations of recurrence read beside the published existential test." },
    ],
    readWith: ["The Gay Science §341", "Zarathustra, The Vision and the Riddle", "Zarathustra, The Convalescent", "Ecce Homo"],
    caution:
      "Do not force the recurrence notes into a settled cosmological doctrine. Their strongest published force is existential and affirmative.",
  },
];

export const willToPowerReadingPaths = [
  {
    title: "The Nihilism Problem",
    question: "How does Europe lose its highest values, and what remains to be created?",
    themeIds: [
      "european-nihilism",
      "history-of-european-nihilism",
      "critique-of-religion",
      "critique-of-morality",
      "revaluation-of-values",
    ],
  },
  {
    title: "Knowledge as Interpretation",
    question: "How do truth, philosophy, and knowing become expressions of life and valuation?",
    themeIds: [
      "critique-of-philosophy",
      "truth-knowledge-perspectivism",
      "will-to-power",
      "life-nature-biology",
    ],
  },
  {
    title: "Morality, Rank, and Type",
    question: "How do moral systems reveal strength, weakness, herd formation, and higher possibility?",
    themeIds: [
      "master-slave-morality-ressentiment",
      "society-state-individual",
      "order-of-rank",
      "strong-and-weak",
      "noble-human-being-noble-soul",
    ],
  },
  {
    title: "The Affirmative Horizon",
    question: "What kind of human being can create values after nihilism?",
    themeIds: [
      "higher-type-self-overcoming",
      "overman-higher-type",
      "art",
      "dionysus",
      "eternal-recurrence",
    ],
  },
];
