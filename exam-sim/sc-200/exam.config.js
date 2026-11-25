/* SC-200 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'SC-200',
  title: 'SC-200 exam simulator',
  certName: 'Microsoft Security Operations Analyst',
  lede: 'A full-length practice exam built from the Microsoft Learn SC-200 learning paths: Defender XDR, Microsoft Sentinel, detection engineering with KQL, and incident investigation and response. Run the whole exam or drill a single domain, with architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 50,
  secondsPerQuestion: 120,
  storagePrefix: 'sc200-sim',

  domains: {
    xdr: {
      label: 'Defender XDR',
      full: 'Mitigate threats using Microsoft Defender XDR',
      weight: '25-30%',
      color: '#b91c1c'
    },
    sentinel: {
      label: 'Microsoft Sentinel',
      full: 'Mitigate threats using Microsoft Sentinel',
      weight: '30-35%',
      color: '#0369a1'
    },
    kql: {
      label: 'Detection & KQL',
      full: 'Create and manage detection rules and KQL queries',
      weight: '20-25%',
      color: '#0f766e'
    },
    response: {
      label: 'Investigation & response',
      full: 'Investigate and respond to security incidents',
      weight: '15-20%',
      color: '#7c3aed'
    }
  },

  domainOrder: ['xdr', 'sentinel', 'kql', 'response'],

  // Midpoints of the official skills-measured ranges. A 50-question draw
  // yields 14 / 16 / 11 / 9 by domain.
  domainWeight: {
    xdr: 27.5,
    sentinel: 32.5,
    kql: 22.5,
    response: 17.5
  },

  presets: [
    { key: 'full', label: 'Full 50', count: 50, domains: ['xdr', 'sentinel', 'kql', 'response'] },
    { key: 'xdr', label: 'XDR 14', count: 14, domains: ['xdr'] },
    { key: 'sentinel', label: 'Sentinel 16', count: 16, domains: ['sentinel'] },
    { key: 'kql', label: 'KQL 11', count: 11, domains: ['kql'] },
    { key: 'response', label: 'Response 9', count: 9, domains: ['response'] },
    { key: 'quick', label: 'Quick 10', count: 10, domains: ['xdr', 'sentinel', 'kql', 'response'] }
  ]
};
