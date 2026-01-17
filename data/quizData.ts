export const quizQuestions = [
  {
    question: "Why does simple keyword exclusion (NOT 'Car') fail for Electro-Voice?",
    explanation: "Simple exclusion is fragile. If a DJ posts 'Setting up my EV speakers at the Car Show', a global 'NOT Car' rule would delete this relevant post (False Negative).",
    options: [
      { text: "It uses too much data", isCorrect: false },
      { text: "It risks removing relevant posts (False Negatives)", isCorrect: true },
      { text: "Brandwatch doesn't support NOT", isCorrect: false },
      { text: "Electro-Voice makes cars too", isCorrect: false },
    ]
  },
  {
    question: "What is the recommended proximity distance for the NEAR operator to link Brand to Category?",
    explanation: "Research indicates 10-15 words is the 'Golden Zone' to match average sentence length while balancing precision with natural language variation.",
    options: [
      { text: "NEAR/1 (Adjacent)", isCorrect: false },
      { text: "NEAR/50 (Whole Paragraph)", isCorrect: false },
      { text: "NEAR/10 to NEAR/15", isCorrect: true },
      { text: "AND operator is better", isCorrect: false },
    ]
  },
  {
    question: "How should you handle the keyword 'Battery' regarding EVERSE speakers?",
    explanation: "This is the 'Battery Paradox'. EV Cars use batteries (Noise), but EVERSE speakers use batteries (Signal). You cannot globally exclude 'Battery'. You must use contextual negation: NOT ('EV' NEAR/5 'Car Battery').",
    options: [
      { text: "Exclude 'Battery' globally to be safe", isCorrect: false },
      { text: "Do not exclude 'Battery', use specific contextual exclusions like 'Car Battery'", isCorrect: true },
      { text: "Only track speakers that plug into the wall", isCorrect: false },
    ]
  },
  {
    question: "Which BigQuery function is recommended for high-volume analysis due to speed?",
    explanation: "LIKE is significantly faster (approx 10x) and uses Search Indexes, making it best for unique names. REGEXP is more powerful but slower/costlier.",
    options: [
      { text: "REGEXP_CONTAINS", isCorrect: false },
      { text: "LIKE", isCorrect: true },
      { text: "MATCH", isCorrect: false },
      { text: "JSON_EXTRACT", isCorrect: false },
    ]
  }
];