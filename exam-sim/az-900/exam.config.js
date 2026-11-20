/* AZ-900 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'AZ-900',
  title: 'AZ-900 exam simulator',
  certName: 'Microsoft Azure Fundamentals',
  lede: 'A full-length practice exam built from the Microsoft Learn AZ-900 learning paths. Run the whole exam or drill a single domain, with architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 40,
  secondsPerQuestion: 90,
  storagePrefix: 'az900-sim',

  domains: {
    cloud: {
      label: 'Cloud concepts',
      full: 'Describe cloud concepts',
      weight: '25-30%',
      color: '#0369a1'
    },
    architecture: {
      label: 'Architecture & services',
      full: 'Describe Azure architecture and services',
      weight: '35-40%',
      color: '#0d9488'
    },
    governance: {
      label: 'Management & governance',
      full: 'Describe Azure management and governance',
      weight: '30-35%',
      color: '#7c3aed'
    }
  },

  domainOrder: ['cloud', 'architecture', 'governance'],

  // Midpoints of the skills-measured ranges: 27.5 / 37.5 / 35.
  // A 40-question draw yields 11 / 15 / 14 by domain.
  domainWeight: {
    cloud: 27.5,
    architecture: 37.5,
    governance: 35
  },

  presets: [
    { key: 'full', label: 'Full 40', count: 40, domains: ['cloud', 'architecture', 'governance'] },
    { key: 'cloud', label: 'Cloud 12', count: 12, domains: ['cloud'] },
    { key: 'architecture', label: 'Architecture 16', count: 16, domains: ['architecture'] },
    { key: 'governance', label: 'Governance 14', count: 14, domains: ['governance'] },
    { key: 'quick', label: 'Quick 10', count: 10, domains: ['cloud', 'architecture', 'governance'] }
  ]
};
