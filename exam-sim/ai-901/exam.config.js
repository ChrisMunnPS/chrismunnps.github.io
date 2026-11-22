/* AI-901 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'AI-901',
  title: 'AI-901 exam simulator',
  certName: 'Microsoft Azure AI Fundamentals',
  lede: 'A full-length practice exam built from the Microsoft Learn AI-901 learning paths. Run the whole exam or drill a single domain, with AI architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 45,
  secondsPerQuestion: 80,
  storagePrefix: 'ai901-sim',

  domains: {
    fundamentals: {
      label: 'AI fundamentals',
      full: 'Describe artificial intelligence workloads and considerations',
      weight: '15-20%',
      color: '#0369a1'
    },
    ml: {
      label: 'Machine learning',
      full: 'Describe fundamental principles of machine learning on Azure',
      weight: '25-30%',
      color: '#4f46e5'
    },
    vision: {
      label: 'Computer vision',
      full: 'Describe features of computer vision workloads on Azure',
      weight: '15-20%',
      color: '#0d9488'
    },
    language: {
      label: 'Natural language',
      full: 'Describe features of natural language processing workloads on Azure',
      weight: '15-20%',
      color: '#b45309'
    },
    genai: {
      label: 'Generative AI',
      full: 'Describe features of generative AI workloads on Azure',
      weight: '20-25%',
      color: '#7c3aed'
    }
  },

  domainOrder: ['fundamentals', 'ml', 'vision', 'language', 'genai'],

  // Midpoints of the skills-measured ranges: 17.5 / 27.5 / 17.5 / 17.5 / 22.5.
  // A 45-question draw yields 8 / 12 / 8 / 7 / 10 by domain.
  domainWeight: {
    fundamentals: 17.5,
    ml: 27.5,
    vision: 17.5,
    language: 17.5,
    genai: 22.5
  },

  presets: [
    { key: 'full', label: 'Full 45', count: 45, domains: ['fundamentals', 'ml', 'vision', 'language', 'genai'] },
    { key: 'fundamentals', label: 'Concepts 8', count: 8, domains: ['fundamentals'] },
    { key: 'ml', label: 'ML 12', count: 12, domains: ['ml'] },
    { key: 'vision', label: 'Vision 8', count: 8, domains: ['vision'] },
    { key: 'language', label: 'Language 8', count: 8, domains: ['language'] },
    { key: 'genai', label: 'GenAI 10', count: 10, domains: ['genai'] },
    { key: 'quick', label: 'Quick 12', count: 12, domains: ['fundamentals', 'ml', 'vision', 'language', 'genai'] }
  ]
};
