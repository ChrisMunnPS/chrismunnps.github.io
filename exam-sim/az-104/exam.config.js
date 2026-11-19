/* AZ-104 exam configuration - loaded before app.js */
window.EXAM_CONFIG = {
  code: 'AZ-104',
  title: 'AZ-104 exam simulator',
  certName: 'Microsoft Azure Administrator',
  lede: 'A full-length practice exam built from the Microsoft Learn AZ-104 learning paths. Run the whole exam or drill a single domain, with architecture diagrams, a timed attempt, and a score report that mirrors the real one.',
  passMark: 700,
  defaultCount: 50,
  secondsPerQuestion: 120,
  storagePrefix: 'az104-sim',

  domains: {
    identity: {
      label: 'Identities & governance',
      full: 'Manage Azure identities and governance',
      weight: '20-25%',
      color: '#4f46e5'
    },
    storage: {
      label: 'Storage',
      full: 'Implement and manage storage',
      weight: '15-20%',
      color: '#0891b2'
    },
    compute: {
      label: 'Compute',
      full: 'Deploy and manage Azure compute resources',
      weight: '20-25%',
      color: '#7c3aed'
    },
    network: {
      label: 'Networking',
      full: 'Implement and manage virtual networking',
      weight: '15-20%',
      color: '#0d9488'
    },
    monitor: {
      label: 'Monitoring & backup',
      full: 'Monitor and maintain Azure resources',
      weight: '10-15%',
      color: '#c2410c'
    }
  },

  domainOrder: ['identity', 'storage', 'compute', 'network', 'monitor'],

  // Midpoints of the official skills-measured ranges. A 50-question draw
  // yields 12 / 9 / 12 / 9 / 8 by domain.
  domainWeight: {
    identity: 22.5,
    storage: 17.5,
    compute: 22.5,
    network: 17.5,
    monitor: 12.5
  },

  presets: [
    { key: 'full', label: 'Full 50', count: 50, domains: ['identity', 'storage', 'compute', 'network', 'monitor'] },
    { key: 'identity', label: 'Identity 12', count: 12, domains: ['identity'] },
    { key: 'storage', label: 'Storage 10', count: 10, domains: ['storage'] },
    { key: 'compute', label: 'Compute 12', count: 12, domains: ['compute'] },
    { key: 'network', label: 'Network 10', count: 10, domains: ['network'] },
    { key: 'monitor', label: 'Monitor 8', count: 8, domains: ['monitor'] },
    { key: 'quick', label: 'Quick 10', count: 10, domains: ['identity', 'storage', 'compute', 'network', 'monitor'] }
  ]
};
