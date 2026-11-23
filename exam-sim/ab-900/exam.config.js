/* AB-900 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'AB-900',
  title: 'AB-900 exam simulator',
  certName: 'Microsoft 365 and AI administration',
  lede: 'A full-length practice exam built from the two Microsoft Learn AB-900 learning paths: Microsoft 365 administration, and Microsoft 365 Copilot and agent administration. Run the whole exam or drill a single domain, with architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 45,
  secondsPerQuestion: 80,
  storagePrefix: 'ab900-sim',

  domains: {
    admin: {
      label: 'M365 administration',
      full: 'Explore Microsoft 365 core services and administration',
      weight: '20-25%',
      color: '#0369a1'
    },
    security: {
      label: 'Security and identity',
      full: 'Explore Microsoft 365 security foundations',
      weight: '25-30%',
      color: '#b91c1c'
    },
    data: {
      label: 'Data governance',
      full: 'Protect and govern Microsoft 365 data',
      weight: '20-25%',
      color: '#0d9488'
    },
    copilot: {
      label: 'Copilot and agents',
      full: 'Explore Microsoft 365 Copilot and agent administration',
      weight: '25-30%',
      color: '#7c3aed'
    }
  },

  domainOrder: ['admin', 'security', 'data', 'copilot'],

  // Midpoints of the skills-measured ranges: 22.5 / 27.5 / 22.5 / 27.5.
  // A 45-question draw yields 10 / 13 / 10 / 12 by domain.
  domainWeight: {
    admin: 22.5,
    security: 27.5,
    data: 22.5,
    copilot: 27.5
  },

  presets: [
    { key: 'full', label: 'Full 45', count: 45, domains: ['admin', 'security', 'data', 'copilot'] },
    { key: 'admin', label: 'Core 10', count: 10, domains: ['admin'] },
    { key: 'security', label: 'Security 10', count: 10, domains: ['security'] },
    { key: 'data', label: 'Data 10', count: 10, domains: ['data'] },
    { key: 'copilot', label: 'Copilot 12', count: 12, domains: ['copilot'] },
    { key: 'quick', label: 'Quick 12', count: 12, domains: ['admin', 'security', 'data', 'copilot'] }
  ]
};
