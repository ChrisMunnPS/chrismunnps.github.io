import { WorkExperience, Certification, ContactInfo, Project } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: "chris.munn@outlook.com",
  phone: "+4407715961218",
  location: "London W11, United Kingdom",
  website: "https://chrismunnPS.github.io",
  linkedin: "https://www.linkedin.com/in/chrismunn/",
  github: "https://github.com/chrismunnPS"
};

export const SUMMARY = "Accomplished Senior Systems Administrator with over 15 years of experience architecting, securing, and optimising Microsoft-based enterprise and hybrid cloud infrastructures. Demonstrated expertise in modernising legacy systems, enhancing virtualisation performance, and driving automation through PowerShell and Azure technologies. Recognised for aligning IT strategy with organisational goals, reducing operational risk, and delivering scalable, high-availability solutions that elevate performance and resilience.";

export const SKILLS = [
  "Microsoft Infrastructure Management",
  "Backup & Disaster Recovery Planning",
  "Messaging & Collaboration Technologies",
  "Network & Systems Security Operations",
  "Virtualisation & Cloud Platforms",
  "IT Governance & Regulatory Compliance",
  "Cybersecurity & Identity Administration",
  "Infrastructure Integration & Optimisation",
  "Automation & Scripting Solutions",
  "Technical Leadership & Mentorship"
];

export const CERTIFICATIONS: Certification[] = [
  { id: '1', name: "Azure Administrator Associate", code: "AZ-104", date: "09/2025" },
  { id: '2', name: "Security, Compliance, and Identity Fundamentals", code: "SC-900", date: "07/2024" },
  { id: '3', name: "Microsoft 365 Fundamentals", code: "MS-900", date: "07/2024" },
  { id: '4', name: "Azure Fundamentals", code: "AZ-900", date: "08/2024" },
  { id: '5', name: "Microsoft Certified Systems Engineer", code: "MCSE", date: "Certified" },
  { id: '6', name: "CompTIA Security+", code: "SY0-601", date: "Certified" },
  { id: '7', name: "CompTIA Network+", code: "N10-008", date: "Certified" },
  { id: '8', name: "CompTIA A+", code: "220-1101", date: "Certified" },
];

export const PROJECTS: Project[] = [
  {
    id: 'lab-kit',
    name: "Windows 11 Office 365 Lab Kit",
    description: "Complete automation kit for deploying a hybrid Windows 11 and Office 365 lab environment.",
    url: "https://github.com/ChrisMunnPS/windows-11-office-365-lab-kit",
    tags: ["PowerShell", "Hyper-V", "Lab"]
  },
  {
    id: 'clear-logs',
    name: "ClearLogs",
    description: "Efficient utility for managing and clearing Windows Event Logs for system maintenance.",
    url: "https://github.com/ChrisMunnPS/ClearLogs",
    tags: ["PowerShell", "Maintenance"]
  },
  {
    id: 'app-import-export',
    name: "ApplicationImportExport",
    description: "Tooling to streamline the import and export of application configurations across environments.",
    url: "https://github.com/ChrisMunnPS/ApplicationImportExport",
    tags: ["PowerShell", "Intune", "MECM"]
  },
  {
    id: 'dc-health',
    name: "DomainControllerHealthDashboard",
    description: "A dashboard solution for visualising and monitoring the health status of Domain Controllers.",
    url: "https://github.com/ChrisMunnPS/DomainControllerHealthDashboard",
    tags: ["PowerShell", "Active Directory", "Dashboard"]
  },
  {
    id: 'ad-flag-scanner',
    name: "ActiveDirectory_Flag_Scanner",
    description: "Scanner to identify specific user account flags and security attributes within Active Directory.",
    url: "https://github.com/ChrisMunnPS/ActiveDirectory_Flag_Scanner",
    tags: ["PowerShell", "Security", "Auditing"]
  },
  {
    id: 'event-id-checker',
    name: "EventIDChecker",
    description: "Rapid diagnostic tool for querying specific Windows Event IDs to troubleshoot issues.",
    url: "https://github.com/ChrisMunnPS/EventIDChecker",
    tags: ["PowerShell", "Troubleshooting"]
  }
];

export const WORK_HISTORY: WorkExperience[] = [
  {
    id: 'indep',
    company: "Independent Projects & Professional Development",
    role: "Independent Consultant / Developer",
    location: "London, United Kingdom",
    startDate: "05/2024",
    endDate: "Current",
    description: [
      "Developed and published enterprise-grade PowerShell automation scripts on GitHub to streamline onboarding, offboarding, and Active Directory health monitoring, reducing manual workload by 70%, and improving system reliability.",
      "Built and maintained a Hybrid Infrastructure Lab, integrating Active Directory, Azure AD, Intune, and Exchange Online, enabling secure simulation of enterprise hybrid environments for testing and optimisation.",
      "Created and shared open-source IT administration tools and process documentation with the global technical community, promoting automation best practices, and secure infrastructure deployment standards.",
      "Tested and validated hybrid cloud and identity management frameworks to ensure compliance with Microsoft Azure governance, Conditional Access, and security baseline configurations.",
      "Earned multiple Microsoft certifications (AZ-104, SC-900, MS-900, AZ-900), demonstrating a strong commitment to continuous learning and applied technical excellence in cloud administration and automation."
    ]
  },
  {
    id: 'ugle',
    company: "United Grand Lodge of England",
    role: "Senior Systems Administrator",
    location: "London, United Kingdom",
    startDate: "11/2014",
    endDate: "05/2024",
    description: [
      "Engineered and executed a multi-phase Microsoft Exchange migration (2010 → 2019) with hybrid Exchange Online integration for 500+ users, achieving zero downtime, and reducing maintenance costs by 20%.",
      "Automated Active Directory user provisioning and deprovisioning using PowerShell, cutting setup time by 75%, eliminating manual errors, and enhancing operational efficiency.",
      "Modernised virtual infrastructure across VMware vSphere and Hyper-V platforms (6.x → 7.x), increasing VM density by 30%, and reducing host failure rates by 20%.",
      "Designed and implemented a robust disaster recovery and backup framework using Veeam and Rapid Recovery, consistently maintaining RTO ≤ 4 hours and RPO ≤ 15 minutes, in compliance with enterprise standards.",
      "Strengthened endpoint security by deploying Palo Alto XDR across enterprise systems, achieving a 40% reduction in phishing and malware incidents, and improving first-call resolution by 25% through staff mentorship and escalation support."
    ]
  },
  {
    id: 'prime',
    company: "prIME Oncology",
    role: "IT Systems Administrator",
    location: "Atlanta, GA, United States",
    startDate: "04/2010",
    endDate: "08/2013",
    description: [
      "Administered and maintained Active Directory and Group Policy Objects (GPO) for over 250 users across three international offices (Atlanta, The Hague, and Moscow), ensuring secure and consistent identity management.",
      "Developed and implemented a standardised laptop imaging and deployment framework, reducing system rollout time from one day to under four hours, and accelerating employee onboarding.",
      "Consolidated decentralized PST-based mail systems into a centralised Microsoft Exchange environment, improving data governance, strengthening compliance, and cutting restore times by 60%.",
      "Deployed and configured VOIP and softphone solutions across multiple sites, enhancing communication reliability and lowering telecom costs by 30%.",
      "Automated patching, endpoint monitoring, and system updates using Kaseya achieve over 95% patch compliance, reduce vulnerabilities, and reclaim more than 10 hours per week in manual IT labour."
    ]
  }
];