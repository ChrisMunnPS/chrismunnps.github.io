/* MD-102 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'MD-102',
  title: 'MD-102 exam simulator',
  certName: 'Microsoft 365 Certified: Endpoint Administrator Associate',
  lede: 'A full-length practice exam built from the Microsoft Learn MD-102 learning paths: Entra ID device identity and enrolment, Windows Autopilot, configuration and compliance policy, endpoint protection, Windows update rings, and app deployment with Intune. Run the whole exam or drill one area, with architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 50,
  secondsPerQuestion: 120,
  storagePrefix: 'md102-sim',

  domains: {
    deploy: {
      label: 'Deploy Windows client',
      full: 'Deploy the Windows client',
      weight: '25-30%',
      color: '#0e7490'
    },
    identity: {
      label: 'Identity & compliance',
      full: 'Manage identity and compliance',
      weight: '25-30%',
      color: '#6d28d9'
    },
    manage: {
      label: 'Manage & protect devices',
      full: 'Manage, maintain, and protect devices',
      weight: '35-40%',
      color: '#b45309'
    },
    apps: {
      label: 'Apps & resources',
      full: 'Manage applications and resources',
      weight: '15-20%',
      color: '#047857'
    }
  },

  domainOrder: ['deploy', 'identity', 'manage', 'apps'],

  // Midpoints of the skills-measured ranges (27.5 / 27.5 / 37.5 / 17.5)
  // normalised to 100. A 50-question draw yields 13 / 12 / 17 / 8.
  domainWeight: {
    deploy: 25,
    identity: 25,
    manage: 34,
    apps: 16
  },

  presets: [
    { key: 'full', label: 'Full 50', count: 50, domains: ['deploy', 'identity', 'manage', 'apps'] },
    { key: 'deploy', label: 'Deploy 13', count: 13, domains: ['deploy'] },
    { key: 'identity', label: 'Identity 12', count: 12, domains: ['identity'] },
    { key: 'manage', label: 'Manage 17', count: 17, domains: ['manage'] },
    { key: 'apps', label: 'Apps 8', count: 8, domains: ['apps'] },
    { key: 'quick', label: 'Quick 10', count: 10, domains: ['deploy', 'identity', 'manage', 'apps'] }
  ],

  // Tag-based drills. Every question can carry tags= in its source header;
  // these presets draw from a tag instead of a domain.
  focusDrills: [
    { key: 'intune', label: 'Intune drills', tag: 'intune', count: 12, note: 'Enrolment, policy delivery, profiles, and the Intune admin center.' },
    { key: 'security', label: 'Security drills', tag: 'security', count: 12, note: 'Compliance, Conditional Access, Defender, BitLocker, and baselines.' },
    { key: 'devices', label: 'Device management drills', tag: 'devices', count: 12, note: 'Lifecycle, remote actions, update rings, and inventory.' },
    { key: 'troubleshooting', label: 'Troubleshooting drills', tag: 'troubleshooting', count: 12, note: 'Failed enrolments, policy conflicts, app installs, and update errors.' }
  ]
};
