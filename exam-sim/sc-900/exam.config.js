/* SC-900 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'SC-900',
  title: 'SC-900 exam simulator',
  certName: 'Microsoft Security, Compliance, and Identity Fundamentals',
  lede: 'A full-length practice exam built from the Microsoft Learn SC-900 learning paths. Run the whole exam or drill a single domain, with security architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 45,
  secondsPerQuestion: 80,
  storagePrefix: 'sc900-sim',

  domains: {
    security: {
      label: 'Security concepts',
      full: 'Describe security, compliance, and identity concepts',
      weight: '10-15%',
      color: '#0369a1'
    },
    identity: {
      label: 'Identity & access',
      full: 'Describe identity and access management concepts',
      weight: '25-30%',
      color: '#4f46e5'
    },
    solutions: {
      label: 'Security solutions',
      full: 'Describe Microsoft security solutions',
      weight: '35-40%',
      color: '#0d9488'
    },
    compliance: {
      label: 'Compliance',
      full: 'Describe Microsoft compliance solutions',
      weight: '25-30%',
      color: '#7c3aed'
    }
  },

  domainOrder: ['security', 'identity', 'solutions', 'compliance'],

  // Midpoints of the skills-measured ranges: 12.5 / 27.5 / 37.5 / 27.5.
  // A 45-question draw yields 5 / 12 / 16 / 12 by domain.
  domainWeight: {
    security: 12.5,
    identity: 27.5,
    solutions: 37.5,
    compliance: 27.5
  },

  presets: [
    { key: 'full', label: 'Full 45', count: 45, domains: ['security', 'identity', 'solutions', 'compliance'] },
    { key: 'security', label: 'Concepts 8', count: 8, domains: ['security'] },
    { key: 'identity', label: 'Identity 12', count: 12, domains: ['identity'] },
    { key: 'solutions', label: 'Solutions 16', count: 16, domains: ['solutions'] },
    { key: 'compliance', label: 'Compliance 12', count: 12, domains: ['compliance'] },
    { key: 'quick', label: 'Quick 12', count: 12, domains: ['security', 'identity', 'solutions', 'compliance'] }
  ]
};
