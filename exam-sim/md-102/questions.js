// MD-102 Exam Simulator - question bank
// Generated from sources/*.md by tools/build-questions.mjs. Do not edit by hand.
window.CASE_STUDIES = [
  {
    "id": "contoso-autopilot",
    "title": "Contoso Global Device Modernisation",
    "html": "<h4>Background</h4>\n<p>Contoso is a manufacturing company with 4,000 Windows 10 laptops and desktops. Devices are joined to an on-premises Active Directory domain, and Group Policy currently delivers all configuration. The company has Microsoft 365 E3 and Microsoft Entra ID Connect, but no Configuration Manager.</p>\n<h4>Current environment</h4>\n<ul><li>Two data centres host file servers and a line-of-business ERP client that authenticates with Kerberos.</li><li>Devices are purchased from three resellers and imaged by IT with a thick image.</li><li>Service desk reimages about 40 devices a week, which takes four hours each.</li><li>300 contractors need a Windows desktop but cannot be issued corporate hardware.</li></ul>\n<h4>Requirements</h4>\n<ul><li>New devices must be provisioned with zero touch and no thick image.</li><li>Existing domain devices must keep access to on-premises file shares and the ERP client.</li><li>Contractors must receive a managed Windows desktop without a physical laptop.</li><li>The rollout must be staged, with a pilot group before the broad estate.</li></ul>"
  },
  {
    "id": "fabrikam-byod",
    "title": "Fabrikam BYOD Initiative",
    "html": "<h4>Background</h4>\n<p>Fabrikam is a professional services firm with 5,000 employees. Most staff use personal iOS and Android phones for email, Teams, and OneDrive. The security team has approved BYOD but requires corporate data protection, and employees have refused full device enrolment.</p>\n<h4>Current environment</h4>\n<ul><li>Corporate laptops are Entra joined and Intune managed.</li><li>Personal phones are not enrolled, and some are jailbroken or rooted.</li><li>Conditional Access currently requires MFA for all cloud apps.</li><li>The service desk has no process for removing corporate data from a personal phone.</li></ul>\n<h4>Requirements</h4>\n<ul><li>Corporate data on personal phones must be protected without enrolment.</li><li>Access must require a protected app and a device that meets minimum health checks.</li><li>When an employee leaves, corporate data must be removed without touching personal data.</li><li>Users must be able to use personal and work accounts side by side.</li></ul>"
  },
  {
    "id": "tailwind-hardening",
    "title": "Tailwind Retail Security Hardening",
    "html": "<h4>Background</h4>\n<p>Tailwind Retail operates 300 stores with 1,200 Windows 11 devices. Stores use shared point-of-sale (POS) devices, back-office laptops, and a small number of manager tablets. Devices are Entra joined and Intune managed.</p>\n<h4>Current environment</h4>\n<ul><li>POS devices run in a shared account with local administrator rights.</li><li>Back-office laptops have Defender antivirus but no attack surface reduction rules.</li><li>BitLocker is enabled on laptops but recovery keys are stored in a local spreadsheet.</li><li>Updates are installed manually by store staff when prompted.</li></ul>\n<h4>Requirements</h4>\n<ul><li>POS devices must run only the POS app with no desktop access.</li><li>Shared devices must not give every user local administrator rights.</li><li>Security settings must follow Microsoft recommendations and be measurable.</li><li>Updates must install within 14 days, with a pilot store group first.</li><li>A lost laptop must be locked quickly, and data must be recoverable only by authorised staff.</li></ul>"
  }
];

window.QUESTIONS = [
  {
    "id": 1,
    "domain": "deploy",
    "topic": "Intune service scope",
    "stem": "A mid-sized company wants one cloud service to manage Windows laptops, iOS phones, and Android tablets, and to protect company data in apps on devices it does not own. Which Microsoft service meets the requirement with the least additional infrastructure?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Intune, because it combines MDM and MAM in one cloud service"
      },
      {
        "letter": "B",
        "text": "Configuration Manager, because it manages every platform natively"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra ID, because it stores device objects and groups"
      },
      {
        "letter": "D",
        "text": "Windows Server Update Services, because it delivers all client policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune is the cloud service that combines mobile device management (MDM) and mobile application management (MAM). MDM enrols and configures the device; MAM protects corporate data inside apps, including on personal devices that are never enrolled. Configuration Manager is strong for Windows on the corporate network but does not natively manage iOS or Android, Entra ID provides identity and device records rather than configuration, and WSUS only distributes Microsoft updates.\n\nExam tip: If the requirement mentions both owned and personal devices, look for Intune's MDM plus MAM pairing.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — What is Microsoft Intune and how does it work?",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 2,
    "domain": "deploy",
    "topic": "Co-management workload authority",
    "stem": "A company co-manages Windows devices with Configuration Manager and Intune. The security team wants compliance policies evaluated and reported by Intune while software deployment stays in Configuration Manager. What should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Move the Compliance policies workload slider to Intune and leave App deployments with Configuration Manager"
      },
      {
        "letter": "B",
        "text": "Move every workload slider to Intune and remove the Configuration Manager client"
      },
      {
        "letter": "C",
        "text": "Enable tenant attach and leave all workload sliders with Configuration Manager"
      },
      {
        "letter": "D",
        "text": "Create a second enrolment profile that enrols devices to Intune only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Co-management splits authority per workload. Each slider decides whether Configuration Manager or Intune is the authority for that workload, so moving only Compliance policies to Intune gives Intune evaluation and reporting while App deployments stay with Configuration Manager. Moving all workloads effectively retires the Configuration Manager role for those devices, tenant attach is read-only visibility, and a second enrolment profile does not change workload authority.\n\nExam tip: Co-management questions are almost always about which workload slider is authoritative, not about enrolment.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare Configuration Manager, Intune, and co-management",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 3,
    "domain": "deploy",
    "topic": "Tenant attach versus co-management",
    "stem": "An organisation wants Configuration Manager to keep full management authority but also wants administrators to view device inventory and run some Intune actions from the Intune admin center. The devices already run the Configuration Manager client. Which configuration provides this without moving workload authority?",
    "options": [
      {
        "letter": "A",
        "text": "Tenant attach with the Microsoft Intune connection in the Configuration Manager console"
      },
      {
        "letter": "B",
        "text": "Co-management with all workload sliders set to Intune"
      },
      {
        "letter": "C",
        "text": "Automatic MDM enrolment for all users"
      },
      {
        "letter": "D",
        "text": "A hybrid Microsoft Entra join for every device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Tenant attach uploads Configuration Manager device data to the Intune admin center so administrators get a combined inventory and can trigger a limited set of actions, while Configuration Manager keeps authority. Co-management with all sliders on Intune does the opposite of the requirement, and neither automatic enrolment nor hybrid join gives Configuration Manager authority with Intune-side visibility. Tenant attach is the \"look, do not take over\" option.\n\nExam tip: Attach equals visibility; co-management equals shared authority per workload.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare Configuration Manager, Intune, and co-management",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 4,
    "domain": "deploy",
    "topic": "MDM versus MAM authority",
    "stem": "A retailer allows staff to use personal phones for email. The security team refuses to enrol personal devices but must prevent copying work email into personal apps. Which Intune capability should you use?",
    "options": [
      {
        "letter": "A",
        "text": "App protection policies applied without device enrolment"
      },
      {
        "letter": "B",
        "text": "Device compliance policies applied to all personal phones"
      },
      {
        "letter": "C",
        "text": "Configuration profiles that disable the camera"
      },
      {
        "letter": "D",
        "text": "A full device wipe of any phone that opens email"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App protection policies (MAM) work without enrolment. They control data movement inside managed apps, for example blocking copy and paste into unmanaged apps or requiring a PIN before Outlook opens. Compliance policies and configuration profiles need an enrolled device, so they cannot satisfy a no-enrolment requirement, and wiping a personal phone is disproportionate and usually unacceptable.\n\nExam tip: \"No enrolment\" in the stem points to MAM, not MDM.",
    "source": "Manage applications using Microsoft Intune — Understand Mobile Application Management (MAM) and App Protection Policies",
    "level": "easy",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 5,
    "domain": "deploy",
    "topic": "Cloud-only management model",
    "stem": "A startup has no on-premises Active Directory and buys laptops directly from a reseller. New starters should receive a laptop that joins Microsoft Entra ID, enrols in Intune, and receives policies during first boot. Which management model fits?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud-only with Windows Autopilot and Microsoft Entra join"
      },
      {
        "letter": "B",
        "text": "Hybrid with Microsoft Entra hybrid join and Configuration Manager"
      },
      {
        "letter": "C",
        "text": "Co-managed with Configuration Manager as the authority"
      },
      {
        "letter": "D",
        "text": "Domain-joined with Group Policy over a VPN"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A cloud-only model uses Entra join for device identity and Intune for management, with no domain controllers or Configuration Manager site. Autopilot turns the reseller device into a managed endpoint at first boot. Hybrid and co-managed models both depend on on-premises infrastructure that this company does not have, and domain join with VPN-based Group Policy is the legacy approach the startup is avoiding.\n\nExam tip: No on-premises AD means no hybrid join; choose cloud-only and Autopilot.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Evaluate device management models",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 6,
    "domain": "deploy",
    "topic": "Automatic MDM enrolment scope",
    "stem": "Windows devices already joined to Microsoft Entra ID must enrol in Intune automatically the first time a user signs in. Automatic enrolment is enabled, but devices stay unenrolled. Which setting should you verify?",
    "options": [
      {
        "letter": "A",
        "text": "The MDM user scope in the Microsoft Entra ID mobility settings is set to All or to the affected group"
      },
      {
        "letter": "B",
        "text": "The device limit restriction is set to 1"
      },
      {
        "letter": "C",
        "text": "The Intune Administrator role is assigned to all users"
      },
      {
        "letter": "D",
        "text": "The Company Portal app is installed on each device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automatic enrolment depends on MDM user scope in Entra ID. When the scope is None, users can join devices but no MDM enrolment is triggered. The device limit affects how many devices a user can enrol, not whether enrolment starts, the Intune Administrator role grants administrative rights rather than enrolment, and Company Portal is optional for automatic enrolment on Windows.\n\nExam tip: Automatic enrolment failures on Windows usually trace back to MDM user scope or a licensing gap.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Windows devices using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 7,
    "domain": "deploy",
    "topic": "Enrolment restrictions versus device limit",
    "stem": "A company must block personally owned Android devices from enrolling while still allowing corporate-owned Android devices. Which control should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Device type and platform restrictions in enrolment restrictions"
      },
      {
        "letter": "B",
        "text": "The per-user device limit in enrolment restrictions"
      },
      {
        "letter": "C",
        "text": "A compliance policy that requires encryption"
      },
      {
        "letter": "D",
        "text": "A configuration profile that removes the Company Portal"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Enrolment restrictions control which platforms and ownership types may enrol, and they are evaluated before a device is enrolled. Blocking personally owned Android devices is a platform and ownership restriction. The device limit caps how many devices a user may enrol, a compliance policy evaluates an already-enrolled device, and removing Company Portal does not prevent enrolment through other paths.\n\nExam tip: Restrictions decide whether a device can enrol; compliance decides whether it keeps access.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure enrollment restrictions",
    "level": "medium",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 8,
    "domain": "deploy",
    "topic": "Device enrolment manager account",
    "stem": "A staging team enrols and then hands out 400 shared tablets each month. The team does not want each tablet tied to an individual employee identity. Which enrolment approach should you use?",
    "options": [
      {
        "letter": "A",
        "text": "A device enrolment manager account that can enrol many devices"
      },
      {
        "letter": "B",
        "text": "A shared user account with a password known to the whole team"
      },
      {
        "letter": "C",
        "text": "Autopilot self-deploying mode for every tablet"
      },
      {
        "letter": "D",
        "text": "Per-user enrolment with a temporary access pass"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A device enrolment manager (DEM) account is designed for bulk enrolment and can enrol far more devices than a normal user. It creates a device-only association instead of tying each tablet to a person. A shared user account breaks accountability and MFA, self-deploying Autopilot applies to Windows rather than Android tablets, and per-user enrolment reintroduces the identity problem the team is avoiding.\n\nExam tip: High-volume, no-primary-user enrolment is the DEM account scenario.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Choose an enrollment strategy",
    "level": "hard",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 9,
    "domain": "deploy",
    "topic": "Bulk enrolment token expiry",
    "stem": "A technician builds a Windows provisioning package for bulk enrolment. Enrolment works for several weeks and then every new package fails with an authentication error. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The bulk enrolment token in the package has expired"
      },
      {
        "letter": "B",
        "text": "The Intune service has stopped supporting Windows"
      },
      {
        "letter": "C",
        "text": "The devices need a Configuration Manager client"
      },
      {
        "letter": "D",
        "text": "The provisioning package must be signed with a public certificate"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Bulk enrolment uses a token embedded in the provisioning package. The token is time-limited, so packages built with an old token eventually fail authentication even though nothing else changed. Rebuild the package with a fresh token and re-deploy it. Intune still supports Windows, Configuration Manager is irrelevant here, and package signing is optional rather than the cause of a token rejection.\n\nExam tip: Bulk enrolment suddenly failing after weeks is almost always an expired token.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Windows devices using Microsoft Intune",
    "level": "easy",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 10,
    "domain": "deploy",
    "topic": "Hybrid join enrolment prerequisites",
    "stem": "Domain-joined Windows devices must become Microsoft Entra hybrid joined and then enrol in Intune automatically. Which two components are required? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra Connect configured to sync devices"
      },
      {
        "letter": "B",
        "text": "A service connection point published in Active Directory"
      },
      {
        "letter": "C",
        "text": "A Device Enrolment Manager account for every user"
      },
      {
        "letter": "D",
        "text": "An Apple push certificate"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Hybrid join needs Entra Connect to synchronise the on-premises device object into Entra ID, and it needs a service connection point (SCP) in Active Directory so clients know where to register. Automatic enrolment then follows from MDM user scope. A DEM account is for bulk enrolment, not hybrid join, and an Apple push certificate only matters for Apple device management.\n\nExam tip: Hybrid join equals Entra Connect plus the SCP; without both, dsregcmd reports the device as not joined.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "level": "medium",
    "tags": [
      "devices",
      "security"
    ]
  },
  {
    "id": 11,
    "domain": "deploy",
    "topic": "Autopilot hardware hash import",
    "stem": "Review the diagram. A reseller supplies 50 new Windows laptops. You need each device to receive an Autopilot profile before the user powers it on. What must be uploaded or registered first?",
    "options": [
      {
        "letter": "A",
        "text": "The hardware hash for each device"
      },
      {
        "letter": "B",
        "text": "The BitLocker recovery key for each device"
      },
      {
        "letter": "C",
        "text": "The Windows product key for each device"
      },
      {
        "letter": "D",
        "text": "The user's primary refresh token"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot identifies a device by its hardware hash, which is combined with the serial number, manufacturer, and model into a device record. Without that record, the device boots through normal OOBE and never contacts the Autopilot service. BitLocker keys, product keys, and refresh tokens are unrelated to the Autopilot identity and cannot register a device.\n\nExam tip: Autopilot registration is hash-driven; if the record is missing, the profile cannot apply.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Register and import devices into Autopilot",
    "diagram": "autopilot-flow",
    "level": "easy",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 12,
    "domain": "deploy",
    "topic": "Autopilot existing device conversion",
    "stem": "You have an existing Windows 11 device already in use. You want it to go through Autopilot at the next reset without collecting its hash manually. Which Autopilot profile setting should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Convert all targeted devices to Autopilot"
      },
      {
        "letter": "B",
        "text": "Allow Windows to skip the out-of-box experience"
      },
      {
        "letter": "C",
        "text": "Pre-provision with white glove"
      },
      {
        "letter": "D",
        "text": "Enrol as a self-deploying device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The \"Convert all targeted devices to Autopilot\" option tells Intune to register devices that receive the profile as Autopilot devices, so the next reset triggers the Autopilot experience. It is intended for existing managed devices whose hash you do not want to gather by hand. The other options change the first-run experience or the enrolment mode but do not create the Autopilot record.\n\nExam tip: Conversion is a one-way door in the profile; enable it only when the device should be Autopilot-managed from now on.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Autopilot profiles and deployment modes",
    "level": "hard",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 13,
    "domain": "deploy",
    "topic": "Enrolment Status Page timeout",
    "stem": "During Autopilot, devices sit on the Enrolment Status Page for about an hour and then continue to the desktop even though a required app never installed. Which explanation fits best?",
    "options": [
      {
        "letter": "A",
        "text": "The ESP timed out and released the device after its configured timeout"
      },
      {
        "letter": "B",
        "text": "The device failed to join Microsoft Entra ID"
      },
      {
        "letter": "C",
        "text": "The Autopilot profile was not assigned to the device"
      },
      {
        "letter": "D",
        "text": "The Intune licence expired for the tenant"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Enrolment Status Page waits for tracked workloads such as device preparation, device setup, and account setup. If a tracked app or profile does not finish within the ESP timeout, the page stops blocking and the user reaches the desktop with incomplete setup. A failed Entra join or missing profile would stop the flow much earlier, and a tenant-wide licence expiry would affect every device, not one app.\n\nExam tip: \"User reached the desktop but an app is missing\" is an ESP tracking or timeout symptom.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "easy",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 14,
    "domain": "deploy",
    "topic": "Autopilot pre-provisioning",
    "stem": "Review the diagram. A deployment team wants to hand users a device that is already joined, enrolled, and has device-targeted apps installed before the user signs in. Which Autopilot capability provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Pre-provisioning with white glove"
      },
      {
        "letter": "B",
        "text": "Self-deploying mode"
      },
      {
        "letter": "C",
        "text": "Autopilot reset"
      },
      {
        "letter": "D",
        "text": "Enrolment restrictions"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Pre-provisioning, also called white glove, runs the device phase first: the technician signs in, the device joins Entra ID, enrols in Intune, and installs device-targeted apps and profiles. The device is then resealed, and the user completes only the account phase. Self-deploying mode targets shared or kiosk devices without a user, Autopilot reset re-provisions an existing device, and enrolment restrictions only allow or block enrolment.\n\nExam tip: Pre-provisioning splits the ESP into a technician device phase and a user account phase.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Pre-provision devices using Autopilot",
    "diagram": "autopilot-flow",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 15,
    "domain": "deploy",
    "topic": "Autopilot Reset outcome",
    "stem": "Review the diagram. A help desk needs to return a malfunctioning laptop to a clean, ready-to-use state for the same user while keeping its Microsoft Entra join and Intune enrolment. Which action should they run?",
    "options": [
      {
        "letter": "A",
        "text": "Autopilot Reset"
      },
      {
        "letter": "B",
        "text": "Full wipe without the keep-enrolment option"
      },
      {
        "letter": "C",
        "text": "Retire"
      },
      {
        "letter": "D",
        "text": "Fresh Start"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot Reset removes user files, apps, and settings and returns Windows to a business-ready state, but it keeps the device's Entra join, Intune enrolment, and Autopilot registration, so the same or another user can sign in quickly. A full wipe removes the enrolment, Retire ends management without cleaning the device, and Fresh Start reinstalls Windows while removing the Intune enrolment.\n\nExam tip: Keep identity and management, remove user state: Autopilot Reset.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "diagram": "device-lifecycle",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 16,
    "domain": "deploy",
    "topic": "Autopilot device preparation",
    "stem": "An administrator compares Autopilot device preparation with classic Autopilot deployment profiles. Which statement describes device preparation?",
    "options": [
      {
        "letter": "A",
        "text": "It uses a single policy that combines deployment settings and is built on the Windows Autopilot device preparation model with Entra join only"
      },
      {
        "letter": "B",
        "text": "It supports Microsoft Entra hybrid join and Configuration Manager co-management"
      },
      {
        "letter": "C",
        "text": "It requires the device to be pre-registered with a hardware hash from the OEM"
      },
      {
        "letter": "D",
        "text": "It deploys only to devices running Windows 10 version 1809"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot device preparation is the newer, simpler model: one policy holds the deployment settings, the device joins Entra ID (not hybrid), and the flow is designed around a consistent, policy-driven setup. It does not require pre-registered hashes in the same way as classic profiles, does not support hybrid join, and is not limited to old Windows 10 builds.\n\nExam tip: Device preparation means Entra join only and a single policy object; classic profiles carry the hybrid and self-deploying options.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Autopilot profiles and deployment modes",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 17,
    "domain": "deploy",
    "topic": "Autopilot user account type",
    "stem": "An Autopilot profile must make the first user a standard user rather than a local administrator. Which profile setting controls this?",
    "options": [
      {
        "letter": "A",
        "text": "User account type"
      },
      {
        "letter": "B",
        "text": "Device name template"
      },
      {
        "letter": "C",
        "text": "Join type"
      },
      {
        "letter": "D",
        "text": "Out-of-box experience language"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The User account type setting in an Autopilot profile determines whether the account created during OOBE becomes an administrator or a standard user. Device name template only formats the computer name, join type selects Entra join versus hybrid join, and language settings control the OOBE display. For least privilege, set the account type to Standard and grant elevation separately.\n\nExam tip: Standard user by default is the least-privilege answer unless the scenario needs local admin.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Autopilot profiles and deployment modes",
    "level": "medium",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 18,
    "domain": "deploy",
    "topic": "Autopilot enrolment restriction error",
    "stem": "A Windows 11 device completes the Autopilot profile download but enrolment fails with error 0x80180014. Which cause should you investigate first?",
    "options": [
      {
        "letter": "A",
        "text": "An enrolment restriction is blocking the device's platform or ownership type"
      },
      {
        "letter": "B",
        "text": "The Autopilot profile has the wrong device name template"
      },
      {
        "letter": "C",
        "text": "The user has too many pinned apps in the Company Portal"
      },
      {
        "letter": "D",
        "text": "The device is missing the latest Defender definition update"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "0x80180014 is the classic \"device type is blocked by enrolment restrictions\" error. The profile downloaded, so Autopilot registration and assignment worked; the block happens when Intune evaluates the enrolment request against platform and ownership restrictions. Name templates and app pins do not block enrolment, and Defender definitions are unrelated to MDM registration.\n\nExam tip: 0x80180014 means restrictions, not Autopilot; check the default and device-type restriction policies.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Troubleshoot device enrollment",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 19,
    "domain": "deploy",
    "topic": "Windows 365 provisioning policy components",
    "stem": "A company is creating a Windows 365 provisioning policy. Which three choices does the policy define for new Cloud PCs? Select three.",
    "options": [
      {
        "letter": "A",
        "text": "The image used for the Cloud PC"
      },
      {
        "letter": "B",
        "text": "The Microsoft Entra join type"
      },
      {
        "letter": "C",
        "text": "The network connection for the Cloud PC"
      },
      {
        "letter": "D",
        "text": "The BitLocker recovery password for the host"
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "A provisioning policy defines the image, the join type (Entra join or hybrid join), and the network connection (Microsoft-hosted network or an Azure network connection), along with the assignment group and region. It does not set a BitLocker recovery password; encryption is handled by policy after provisioning. Getting these three choices right is what determines whether the Cloud PC can be reached and managed.\n\nExam tip: Image, join type, network: the three pillars of a Windows 365 provisioning policy.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Set up Windows 365 provisioning policies",
    "level": "medium",
    "tags": [
      "devices",
      "intune"
    ]
  },
  {
    "id": 20,
    "domain": "deploy",
    "topic": "Windows 365 licensing model",
    "stem": "A manager asks how Windows 365 is licensed for a team of 20 employees who each need a dedicated Cloud PC. What should you explain?",
    "options": [
      {
        "letter": "A",
        "text": "Each user needs a Windows 365 licence that includes a Cloud PC size and Windows Enterprise benefit"
      },
      {
        "letter": "B",
        "text": "One licence covers unlimited Cloud PCs for the tenant"
      },
      {
        "letter": "C",
        "text": "Windows 365 is included with every Microsoft 365 Business Basic licence"
      },
      {
        "letter": "D",
        "text": "Cloud PCs are billed only by the minute of active use"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 is licensed per user, and each licence includes a defined Cloud PC configuration (vCPU, RAM, storage) plus the Windows Enterprise benefit for that Cloud PC. One licence does not cover unlimited Cloud PCs, Business Basic does not include Windows 365, and Cloud PCs are not metered by the minute in the way Azure consumption is.\n\nExam tip: Windows 365 equals per-user subscription; Azure Virtual Desktop equals Azure consumption.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Identify Windows 365 licensing, service plans, and prerequisites",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 21,
    "domain": "deploy",
    "topic": "AVD host pool type",
    "stem": "A company runs Azure Virtual Desktop for 60 task workers who can share any session host. Each worker needs a consistent desktop image but not a dedicated VM. Which host pool type should you choose?",
    "options": [
      {
        "letter": "A",
        "text": "Pooled host pool"
      },
      {
        "letter": "B",
        "text": "Personal host pool"
      },
      {
        "letter": "C",
        "text": "Windows 365 shared Cloud PC"
      },
      {
        "letter": "D",
        "text": "Remote Desktop Services session collection"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A pooled host pool assigns users to any available session host, which suits task workers who do not need a persistent personal desktop. A personal host pool gives each user a dedicated host, which wastes capacity for this workload. Windows 365 shared Cloud PCs are a different product, and RDS session collections are the on-premises predecessor rather than an AVD host pool type.\n\nExam tip: Pooled equals many users per host; personal equals one user per host.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Examine host pools, session hosts, and scaling",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 22,
    "domain": "deploy",
    "topic": "AVD scaling plan",
    "stem": "An AVD pooled host pool runs 40 session hosts around the clock even though peak usage is 09:00 to 17:00. Costs must drop without manual intervention. What should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "A scaling plan with ramp-up, peak, and ramp-down schedules"
      },
      {
        "letter": "B",
        "text": "A personal host pool for every user"
      },
      {
        "letter": "C",
        "text": "A Windows 365 provisioning policy"
      },
      {
        "letter": "D",
        "text": "A configuration profile that disables sleep on session hosts"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A scaling plan starts session hosts before peak hours and stops or deallocates them outside the schedule, which reduces compute cost automatically. A personal host pool increases cost, Windows 365 provisioning policies create Cloud PCs rather than scaling AVD hosts, and disabling sleep keeps hosts running, which is the opposite of the goal.\n\nExam tip: AVD cost questions usually resolve to scaling plans or autoscale, not to resizing every VM.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Examine host pools, session hosts, and scaling",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 23,
    "domain": "deploy",
    "topic": "AVD session host Intune enrolment",
    "stem": "Session hosts in an AVD host pool must receive Intune compliance and configuration policies. How should the session hosts be managed?",
    "options": [
      {
        "letter": "A",
        "text": "Enrol each session host in Intune like any other Windows device, then assign policies"
      },
      {
        "letter": "B",
        "text": "Assign policies to the host pool resource in Azure"
      },
      {
        "letter": "C",
        "text": "Use only Azure Policy because Intune cannot manage session hosts"
      },
      {
        "letter": "D",
        "text": "Join the session hosts to Configuration Manager and enable tenant attach"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "AVD session hosts are Windows devices, so they enrol in Intune and receive the same compliance, configuration, and security policies as physical endpoints. You target the devices or their group, not the host pool. Azure Policy governs Azure resources rather than the guest OS, and Configuration Manager is optional rather than required.\n\nExam tip: If it runs Windows, Intune manages it; the host pool is just an Azure container.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Enroll Azure Virtual Desktop session hosts in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 24,
    "domain": "deploy",
    "topic": "Windows 365 user self-service actions",
    "stem": "A user's Cloud PC is corrupted after a bad driver install. The user needs the Cloud PC returned to a working state from an earlier point in time without losing the assigned Cloud PC identity. Which action should be enabled for the user?",
    "options": [
      {
        "letter": "A",
        "text": "Restore the Cloud PC to a previous restore point"
      },
      {
        "letter": "B",
        "text": "Reset the Cloud PC, which reprovisions it and deletes user data"
      },
      {
        "letter": "C",
        "text": "Reprovision the Cloud PC with a new provisioning policy"
      },
      {
        "letter": "D",
        "text": "Delete the Cloud PC and reassign the licence"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 restore points let a user or administrator roll the Cloud PC back to an earlier state while keeping the same Cloud PC. Reset reprovisions the device and deletes user data and apps, which is more destructive than the requirement, and creating a new provisioning policy or deleting the Cloud PC replaces rather than restores it.\n\nExam tip: Restore rolls back; reset rebuilds. Read the data-loss wording carefully.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Assign and manage Cloud PCs",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 25,
    "domain": "deploy",
    "topic": "Windows subscription activation",
    "stem": "Windows 11 Pro laptops are covered by Microsoft 365 E3. Users should receive Windows 11 Enterprise features without a full reinstall. What enables this?",
    "options": [
      {
        "letter": "A",
        "text": "Windows subscription activation, which steps devices up from Pro to Enterprise"
      },
      {
        "letter": "B",
        "text": "A Windows 11 feature update policy that reinstalls the OS"
      },
      {
        "letter": "C",
        "text": "A provisioning package that changes the product key to Enterprise"
      },
      {
        "letter": "D",
        "text": "An in-place upgrade task sequence in Configuration Manager"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Subscription activation uses the user's licence to step a Pro device up to Enterprise without a product key or reinstall. The edition changes at sign-in and reverts if the licence is removed. A feature update policy moves Windows versions rather than editions, manual key changes are unsupported, and a task sequence is unnecessary for an edition step-up.\n\nExam tip: Pro to Enterprise with an E3/E5 licence equals subscription activation, not an upgrade project.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand the role of Microsoft Entra ID in endpoint management",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 26,
    "domain": "deploy",
    "topic": "Windows 11 feature update deployment",
    "stem": "An estate of Windows 10 devices must move to Windows 11 with a pilot group first, then everyone. Which Intune feature should you use to control the rollout?",
    "options": [
      {
        "letter": "A",
        "text": "A feature update policy targeted to the pilot group, then broadened"
      },
      {
        "letter": "B",
        "text": "A quality update ring with a 7-day deferral"
      },
      {
        "letter": "C",
        "text": "A configuration profile that sets the Windows edition"
      },
      {
        "letter": "D",
        "text": "A Win32 app that runs setup.exe /auto upgrade on every device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A feature update policy targets a specific Windows version to a group and controls when devices move to it. Targeting the pilot group first, validating, then adding the rest is the standard staged rollout. Quality update rings patch the current build rather than change the version, configuration profiles do not install a new build, and a Win32 package gives no built-in rollout control or reporting.\n\nExam tip: Version change equals feature update policy; monthly patch equals quality update ring.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "level": "medium",
    "tags": [
      "devices",
      "troubleshooting"
    ]
  },
  {
    "id": 27,
    "domain": "deploy",
    "topic": "Provisioning package use case",
    "stem": "A field team must set up Windows tablets at a customer site with no network access to the corporate MDM service during staging. The tablets should join Entra ID and enrol when connectivity returns. Which tool fits best?",
    "options": [
      {
        "letter": "A",
        "text": "A Windows provisioning package built with Windows Configuration Designer"
      },
      {
        "letter": "B",
        "text": "A Windows Autopilot deployment profile"
      },
      {
        "letter": "C",
        "text": "An Apple Device Enrolment token"
      },
      {
        "letter": "D",
        "text": "A Conditional Access policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A provisioning package is a file that applies settings such as network configuration, a join, and an enrolment token at first run, and it can be applied without the device already being cloud-registered. Autopilot needs the device record and connectivity at OOBE, an Apple token is irrelevant to Windows, and Conditional Access controls access rather than provisioning.\n\nExam tip: Offline or bulk staging without pre-registration points to a provisioning package.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Windows devices using Microsoft Intune",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 28,
    "domain": "deploy",
    "topic": "User data migration approach",
    "stem": "A company replaces Windows 10 laptops with Windows 11 devices. User files and settings must follow the user with minimal IT effort. Which approach should you recommend?",
    "options": [
      {
        "letter": "A",
        "text": "OneDrive Known Folder Move plus Enterprise State Roaming"
      },
      {
        "letter": "B",
        "text": "USMT with a hard-link migration store on each old laptop"
      },
      {
        "letter": "C",
        "text": "A full backup to a USB drive handled by the help desk"
      },
      {
        "letter": "D",
        "text": "Folder redirection to a local file server"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Known Folder Move redirects Desktop, Documents, and Pictures to OneDrive, so files follow the user to the new device, and Enterprise State Roaming carries supported Windows settings. USMT is designed for on-premises migrations and requires a migration store and task sequence, USB backups do not scale, and local folder redirection keeps data on-premises rather than making it portable.\n\nExam tip: Cloud-era migration questions favour OneDrive KFM over USMT.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Deploy the Windows client",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 29,
    "domain": "deploy",
    "topic": "Autopilot self-deploying mode",
    "stem": "A hospital needs lobby kiosks that boot straight to a shared desktop with no user sign-in during Autopilot. Which deployment mode fits, and what does it require?",
    "options": [
      {
        "letter": "A",
        "text": "Self-deploying mode, which requires TPM 2.0 and device-based authentication"
      },
      {
        "letter": "B",
        "text": "User-driven mode with a shared standard account"
      },
      {
        "letter": "C",
        "text": "Pre-provisioning with white glove and a technician account"
      },
      {
        "letter": "D",
        "text": "Autopilot reset with the keep-enrolment option"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Self-deploying mode provisions a device without a user, which suits kiosks and shared devices. It relies on device authentication and requires TPM 2.0 so the device can prove its identity. User-driven mode needs a user at OOBE, pre-provisioning still ends with a user account phase, and Autopilot reset re-provisions a device rather than choosing a no-user deployment mode.\n\nExam tip: No user at OOBE plus TPM 2.0 equals self-deploying mode.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Autopilot profiles and deployment modes",
    "level": "easy",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 30,
    "domain": "deploy",
    "topic": "Enrolment Status Page blocking apps",
    "stem": "An Autopilot profile should prevent users from reaching the desktop until a critical VPN client is installed. Which ESP setting controls this?",
    "options": [
      {
        "letter": "A",
        "text": "Block device use until required apps are installed if they are assigned to the device"
      },
      {
        "letter": "B",
        "text": "Show an error when installation takes longer than the specified number of minutes"
      },
      {
        "letter": "C",
        "text": "Allow users to reset the device during installation"
      },
      {
        "letter": "D",
        "text": "Turn on log collection and diagnostics"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The ESP tracks selected apps and profiles and can block the desktop until they finish. Choosing the blocking behaviour for required apps assigned to the device keeps the user on the status page until the VPN client installs. The timeout setting only changes how long the page waits before showing an error, reset and diagnostics are convenience options, and none of them enforce installation completion.\n\nExam tip: ESP has separate controls for what is tracked, what blocks, and how long it waits.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 31,
    "domain": "deploy",
    "topic": "Device categories and dynamic groups",
    "stem": "Devices must automatically join a group based on a department value stored on the device record so that department-specific profiles apply. Which two features combine to achieve this? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Device categories or a group tag on the device record"
      },
      {
        "letter": "B",
        "text": "A dynamic device group with a membership rule"
      },
      {
        "letter": "C",
        "text": "A compliance policy with a grace period"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A device category or Autopilot group tag writes a value to the device record, and a dynamic device group rule can query that value to add the device automatically. Compliance policies evaluate state rather than populate groups, and app protection policies protect app data rather than group membership.\n\nExam tip: Dynamic groups need an attribute to query; categories and group tags provide it.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Use dynamic group membership and filters in Microsoft Entra ID",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 32,
    "domain": "deploy",
    "topic": "Autopilot group tag",
    "stem": "A deployment team wants devices ordered for the finance department to receive finance profiles automatically at enrolment. Which Autopilot feature should they use?",
    "options": [
      {
        "letter": "A",
        "text": "A group tag on the Autopilot device record, queried by a dynamic device group"
      },
      {
        "letter": "B",
        "text": "A device name template that starts with FIN"
      },
      {
        "letter": "C",
        "text": "An enrolment restriction limited to finance users"
      },
      {
        "letter": "D",
        "text": "A compliance policy assigned to all devices"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Autopilot group tag is stored on the device record and can be queried by a dynamic group rule, so the device lands in the finance group before profiles are assigned. A name template is cosmetic, enrolment restrictions allow or block enrolment rather than target policy, and a compliance policy evaluates devices after enrolment.\n\nExam tip: Group tag is the supported hook for order-time targeting; do not rely on device names.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Register and import devices into Autopilot",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 33,
    "domain": "deploy",
    "topic": "Apple enrolment prerequisites",
    "stem": "An organisation wants automatic device enrolment for iPads purchased through Apple Business Manager. Which two artefacts must be maintained and renewed? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "An Apple MDM push certificate"
      },
      {
        "letter": "B",
        "text": "An Apple Business Manager device enrolment token"
      },
      {
        "letter": "C",
        "text": "A Windows Autopilot hardware hash"
      },
      {
        "letter": "D",
        "text": "A Microsoft Entra Connect service connection point"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Apple management needs an MDM push certificate so Intune can send commands to devices, and an ABM device enrolment token so Intune can pull serial numbers and assign setup profiles. Both expire and must be renewed or enrolment and management stop. Autopilot hashes are Windows-only, and the SCP is for hybrid Windows join.\n\nExam tip: Expired Apple tokens are a classic \"enrolment suddenly stopped\" cause; check both certificates.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll iOS and iPadOS devices",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 34,
    "domain": "deploy",
    "topic": "Android work profile ownership",
    "stem": "Employees use personal Android phones for work. The company must keep work apps and data separate from personal apps without wiping the phone. Which enrolment type should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Android Enterprise personally owned work profile"
      },
      {
        "letter": "B",
        "text": "Android Enterprise fully managed"
      },
      {
        "letter": "C",
        "text": "Android Enterprise dedicated"
      },
      {
        "letter": "D",
        "text": "Android device administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The personally owned work profile creates a separate work container on the device, so corporate apps and data are managed and can be selectively removed while personal apps remain untouched. Fully managed and dedicated profiles assume corporate ownership and control the whole device, and device administrator is the deprecated legacy model.\n\nExam tip: Personal phone plus separation equals work profile; corporate phone plus full control equals fully managed.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Android devices",
    "level": "medium",
    "tags": [
      "devices",
      "security"
    ]
  },
  {
    "id": 35,
    "domain": "deploy",
    "topic": "Android device administrator deprecation",
    "stem": "A company still enrols Android devices with device administrator. What is the recommended direction?",
    "options": [
      {
        "letter": "A",
        "text": "Migrate to Android Enterprise enrolment types, because device administrator is deprecated"
      },
      {
        "letter": "B",
        "text": "Keep device administrator and add a compliance policy"
      },
      {
        "letter": "C",
        "text": "Move the devices to Apple Business Manager"
      },
      {
        "letter": "D",
        "text": "Disable Android enrolment entirely"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Google deprecated Android device administrator, and Intune has been withdrawing support for it, so new deployments should use Android Enterprise work profile, fully managed, or dedicated enrolment. Adding compliance or switching to Apple does not solve the platform direction, and disabling Android enrolment avoids a legitimate business requirement.\n\nExam tip: Any answer that keeps device administrator for new Android deployments is a legacy trap.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Android devices",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 36,
    "domain": "deploy",
    "topic": "macOS enrolment options",
    "stem": "A design team uses Macs. Devices must enrol automatically at first boot with a company setup assistant, and users should not be able to skip management. Which approach fits?",
    "options": [
      {
        "letter": "A",
        "text": "Apple Business Manager with automated device enrolment and a macOS setup assistant profile"
      },
      {
        "letter": "B",
        "text": "Manual Company Portal enrolment by each user"
      },
      {
        "letter": "C",
        "text": "A Windows provisioning package"
      },
      {
        "letter": "D",
        "text": "Apple Configurator with a supervised profile applied after setup"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automated device enrolment through Apple Business Manager ties the Mac's serial number to Intune and applies a setup assistant that requires management, which is the closest macOS equivalent of Autopilot. Manual Company Portal enrolment is user-initiated and skippable, Windows provisioning packages do not apply to macOS, and post-setup supervision is weaker than enrolment-time supervision.\n\nExam tip: On Apple platforms, \"zero-touch\" means ADE through Apple Business Manager.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll macOS devices",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 37,
    "domain": "deploy",
    "topic": "Enrolment method selection",
    "stem": "A company has 200 existing Windows devices already in use, a mix of domain-joined and workgroup machines, and wants them managed by Intune within a month without reimaging. Which approach is most practical?",
    "options": [
      {
        "letter": "A",
        "text": "Enrol the existing devices through automatic enrolment or a bulk provisioning package, then migrate policy"
      },
      {
        "letter": "B",
        "text": "Require every user to reset to factory settings and use Autopilot"
      },
      {
        "letter": "C",
        "text": "Replace all devices with Windows 365 Cloud PCs"
      },
      {
        "letter": "D",
        "text": "Wait for the next hardware refresh and enrol only new devices"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Existing devices can be enrolled without reimaging through automatic enrolment (for Entra joined or hybrid joined devices) or a bulk provisioning package for workgroup machines. A factory reset is unnecessary for enrolment, Cloud PCs are a different delivery model rather than an enrolment method, and deferring until refresh leaves the estate unmanaged.\n\nExam tip: Autopilot is for provisioning; enrolment of in-use devices is a separate decision.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Choose an enrollment strategy",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 38,
    "domain": "deploy",
    "topic": "Autopilot hardware hash collection",
    "stem": "An administrator has one device in hand and needs its Autopilot hardware hash for import. Which method is supported?",
    "options": [
      {
        "letter": "A",
        "text": "Run the Get-WindowsAutopilotInfo script to write a CSV, then import it"
      },
      {
        "letter": "B",
        "text": "Copy the BitLocker recovery key from Entra ID"
      },
      {
        "letter": "C",
        "text": "Export the device from Configuration Manager as a CAB file"
      },
      {
        "letter": "D",
        "text": "Read the hash from the Windows product ID in Settings"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Get-WindowsAutopilotInfo script reads the device's hardware hash and writes it to a CSV that can be imported into Intune. BitLocker keys are unrelated, Configuration Manager exports do not produce Autopilot hashes, and the product ID is not the hardware identity used by Autopilot.\n\nExam tip: Hash collection is a script plus CSV import, or direct upload with the -Online switch.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Register and import devices into Autopilot",
    "level": "medium",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 39,
    "domain": "deploy",
    "topic": "Autopilot record deletion",
    "stem": "A device was registered in Autopilot by mistake and now receives a deployment profile. The device must return to normal OOBE. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Delete the Autopilot device record, then reset the device"
      },
      {
        "letter": "B",
        "text": "Retire the device from Intune"
      },
      {
        "letter": "C",
        "text": "Remove the user from the Entra group"
      },
      {
        "letter": "D",
        "text": "Disable the enrolment status page"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Deleting the Autopilot device record removes the registration that triggers the profile; resetting the device then lets it boot through normal OOBE. Retire ends management but leaves the Autopilot registration, removing a user from a group may not affect device-targeted profiles, and disabling the ESP changes the experience rather than the registration.\n\nExam tip: Wrong Autopilot behaviour starts with the device record, not the profile assignment.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Troubleshoot Autopilot deployment issues",
    "level": "hard",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 40,
    "domain": "deploy",
    "topic": "Autopilot deployment monitoring",
    "stem": "After rolling out Autopilot to a pilot group, an administrator needs per-device deployment status and failure reasons. Where should they look?",
    "options": [
      {
        "letter": "A",
        "text": "The Autopilot deployments report in the Intune admin center"
      },
      {
        "letter": "B",
        "text": "The Microsoft 365 admin center service health page"
      },
      {
        "letter": "C",
        "text": "The Entra ID sign-in log only"
      },
      {
        "letter": "D",
        "text": "The Windows Update compliance report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Autopilot deployments report shows each device's deployment state, profile, and error details, which is the right place to confirm a pilot before broad rollout. Service health reports tenant-wide outages rather than per-device deployment, sign-in logs show authentication events but not deployment steps, and update compliance covers patching.\n\nExam tip: Pilot verification means the Autopilot deployment report, not a general device count.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 41,
    "domain": "deploy",
    "topic": "Windows 365 Boot",
    "stem": "Shift workers should sign in directly to their Cloud PC when they power on a shared physical device, without using the local Windows desktop. Which Windows 365 feature should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 365 Boot"
      },
      {
        "letter": "B",
        "text": "Windows 365 Switch"
      },
      {
        "letter": "C",
        "text": "Windows 365 restore points"
      },
      {
        "letter": "D",
        "text": "Azure Virtual Desktop scaling plans"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 Boot configures a physical device to start the sign-in experience against the Cloud PC, so the user lands in Windows 365 rather than the local desktop. Switch moves between an already running local desktop and a Cloud PC, restore points roll back a Cloud PC, and AVD scaling plans manage session hosts rather than Cloud PC boot behaviour.\n\nExam tip: Boot equals start in the cloud; Switch equals toggle between local and cloud.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Explore the Windows 365 endpoint experience",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 42,
    "domain": "deploy",
    "topic": "Windows 365 Switch",
    "stem": "A user has a laptop and a Cloud PC and wants to move between the local desktop and the Cloud PC with the same Task View gesture. Which feature provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 365 Switch"
      },
      {
        "letter": "B",
        "text": "Windows 365 Boot"
      },
      {
        "letter": "C",
        "text": "Remote Desktop client with a saved workspace"
      },
      {
        "letter": "D",
        "text": "AVD personal host pool"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 Switch adds the Cloud PC as a desktop in Task View so the user can move between local and cloud sessions. Boot starts the device in the Cloud PC, a saved RDP workspace is a manual connection rather than an integrated switch, and a personal AVD host pool is a different product with a different client experience.\n\nExam tip: The Task View integration is the giveaway for Switch.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Explore the Windows 365 endpoint experience",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 43,
    "domain": "deploy",
    "topic": "AVD FSLogix profile container",
    "stem": "Users on a pooled AVD host pool lose their desktop wallpaper, Outlook profile, and recent files whenever they land on a different session host. Which technology should you add?",
    "options": [
      {
        "letter": "A",
        "text": "FSLogix profile containers stored on Azure Files"
      },
      {
        "letter": "B",
        "text": "A personal host pool for every user"
      },
      {
        "letter": "C",
        "text": "Windows 365 restore points"
      },
      {
        "letter": "D",
        "text": "OneDrive Known Folder Move only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Pooled session hosts are stateless between assignments, so the user profile must live outside the host. FSLogix profile containers store the profile in a VHD(X) on shared storage and attach it at sign-in, which preserves the experience across hosts. Personal hosts avoid the symptom but defeat pooling, restore points apply to Cloud PCs, and KFM covers files but not the full profile.\n\nExam tip: Pooled AVD plus roaming profile equals FSLogix, not a bigger host.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Examine host pools, session hosts, and scaling",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 44,
    "domain": "deploy",
    "topic": "AVD RDP Shortpath",
    "stem": "Users of an AVD host pool report high latency even though bandwidth is sufficient. The network team can allow direct UDP traffic between clients and session hosts. Which feature should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "RDP Shortpath"
      },
      {
        "letter": "B",
        "text": "A scaling plan"
      },
      {
        "letter": "C",
        "text": "FSLogix Office container"
      },
      {
        "letter": "D",
        "text": "Windows 365 Boot"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "RDP Shortpath establishes a direct UDP transport between the client and the session host instead of relying on the gateway path, which lowers latency and improves responsiveness when the network allows it. Scaling plans change host availability, FSLogix handles profiles, and Windows 365 Boot is a Cloud PC feature.\n\nExam tip: Latency with adequate bandwidth points to transport path, so think Shortpath.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Monitor and troubleshoot Azure Virtual Desktop with Microsoft Intune",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 45,
    "domain": "deploy",
    "topic": "Cloud PC provisioning failure",
    "stem": "A user who was assigned a Windows 365 licence never receives a Cloud PC. The provisioning policy exists. Which two items should you check first? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "The user is in the group assigned to the provisioning policy"
      },
      {
        "letter": "B",
        "text": "The provisioning policy has a valid network connection and image"
      },
      {
        "letter": "C",
        "text": "The user has a valid Autopilot hardware hash"
      },
      {
        "letter": "D",
        "text": "The device is joined to Configuration Manager"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Cloud PC creation requires the user to be in the assigned group and the policy to resolve a valid image and network connection. Without group membership no Cloud PC is requested; without a usable image or network the request fails. Autopilot hashes are irrelevant to Cloud PCs, and Configuration Manager is not part of Windows 365 provisioning.\n\nExam tip: No Cloud PC at all usually means assignment, licence, or policy inputs, not a broken device.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Set up Windows 365 provisioning policies",
    "level": "easy",
    "tags": [
      "troubleshooting",
      "devices"
    ]
  },
  {
    "id": 46,
    "domain": "deploy",
    "topic": "Windows 365 Frontline shared Cloud PC",
    "stem": "A retail chain has 90 shift workers but only 30 ever work at the same time. Each needs a full Windows desktop but not a permanently assigned PC. Which Windows 365 option fits best?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 365 Frontline shared Cloud PCs"
      },
      {
        "letter": "B",
        "text": "Windows 365 Enterprise dedicated Cloud PCs for all 90 users"
      },
      {
        "letter": "C",
        "text": "An AVD personal host pool with 90 hosts"
      },
      {
        "letter": "D",
        "text": "Windows 365 Boot on the store laptops"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Frontline shared Cloud PCs let a pool of shift workers share Cloud PCs, with each licence supporting a small number of concurrent users, which matches the 30-at-a-time pattern and avoids paying for 90 idle desktops. Dedicated Cloud PCs and personal AVD hosts over-provision, and Boot changes the sign-in experience rather than the licensing model.\n\nExam tip: Shift-based concurrency is the Frontline shared Cloud PC scenario.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Identify Windows 365 licensing, service plans, and prerequisites",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 47,
    "domain": "deploy",
    "topic": "AVD multi-session host image",
    "stem": "A pooled AVD host pool must host several users per VM. Which operating system image supports this?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 11 Enterprise multi-session"
      },
      {
        "letter": "B",
        "text": "Windows 11 Pro"
      },
      {
        "letter": "C",
        "text": "Windows 11 Enterprise"
      },
      {
        "letter": "D",
        "text": "Windows Server 2019 with Remote Desktop Session Host only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 11 Enterprise multi-session is the client OS built for multiple concurrent users on one AVD session host. Windows 11 Pro and standard Enterprise are single-session client editions, and while Windows Server with RDS supports multi-session, it is a server image rather than the client multi-session option the question describes.\n\nExam tip: Multi-session on AVD means the Enterprise multi-session image.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Understand Azure Virtual Desktop architecture",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 48,
    "domain": "deploy",
    "topic": "Windows 11 readiness assessment",
    "stem": "Before a Windows 11 rollout, an administrator needs to identify devices that fail hardware requirements and apps with known compatibility issues. Which Intune capability helps?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint analytics Windows 11 readiness reporting"
      },
      {
        "letter": "B",
        "text": "The Windows Update compliance report"
      },
      {
        "letter": "C",
        "text": "A device compliance policy"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Endpoint analytics includes readiness reporting that highlights hardware eligibility and app compatibility signals so the rollout can be planned around real data. Update compliance shows patch state, compliance policies evaluate configured rules rather than upgrade readiness, and the Autopilot report covers provisioning.\n\nExam tip: Readiness is an analytics question; compliance and update reports answer different questions.",
    "source": "Automate and optimize endpoint management using Microsoft Intune — Use Endpoint Analytics to optimize device performance",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 49,
    "domain": "deploy",
    "topic": "Autopilot TPM attestation",
    "stem": "During Autopilot, a device fails the attestation step even though it has TPM 2.0 enabled. Which action is most likely to resolve the issue?",
    "options": [
      {
        "letter": "A",
        "text": "Clear and re-initialise the TPM, then retry the deployment"
      },
      {
        "letter": "B",
        "text": "Delete the Autopilot profile and recreate it with a new name"
      },
      {
        "letter": "C",
        "text": "Disable the Enrolment Status Page for the device group"
      },
      {
        "letter": "D",
        "text": "Assign the device a Windows 365 licence"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot attestation validates the TPM state with the Microsoft attestation service. A TPM that is owned, locked out, or in an inconsistent state fails even when the hardware supports 2.0, and clearing and re-initialising it commonly restores attestation. Recreating the profile, hiding the ESP, or adding a licence does not change the TPM evidence.\n\nExam tip: Attestation failures are TPM state problems, not profile problems.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Troubleshoot Autopilot deployment issues",
    "level": "easy",
    "tags": [
      "security",
      "devices"
    ]
  },
  {
    "id": 50,
    "domain": "deploy",
    "topic": "Autopilot language and keyboard",
    "stem": "A global company wants Autopilot devices in Germany to start with German language and keyboard defaults without technician input. Which profile settings should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Language (Region) and automatically configure keyboard"
      },
      {
        "letter": "B",
        "text": "Device name template and group tag"
      },
      {
        "letter": "C",
        "text": "Join type and user account type"
      },
      {
        "letter": "D",
        "text": "Enrolment status page timeout"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot profiles include language and keyboard settings that preselect the OOBE language and input method, which removes a manual step for regional deployments. Device name and group tag affect identity and targeting, join type and account type affect identity and privilege, and the ESP timeout affects waiting behaviour.\n\nExam tip: Regional OOBE defaults live in the language and keyboard fields of the profile.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Autopilot profiles and deployment modes",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 51,
    "domain": "deploy",
    "topic": "Missing Intune licence enrolment failure",
    "stem": "A user can sign in to Windows but automatic enrolment fails with a message that the user is not licensed for MDM. What should you check?",
    "options": [
      {
        "letter": "A",
        "text": "Whether the user has an Intune licence through a Microsoft 365 or EMS plan"
      },
      {
        "letter": "B",
        "text": "Whether the device has a BitLocker recovery key"
      },
      {
        "letter": "C",
        "text": "Whether the user is a member of the Domain Admins group"
      },
      {
        "letter": "D",
        "text": "Whether the Autopilot profile has a device name template"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "MDM enrolment requires an Intune licence, either standalone or through a plan such as Microsoft 365 E3/E5 or Enterprise Mobility + Security. Without it, Entra ID accepts the sign-in but refuses the enrolment. BitLocker keys, domain admin membership, and name templates do not grant the service entitlement.\n\nExam tip: Enrolment errors that mention licensing are entitlement problems, not device problems.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Windows devices using Microsoft Intune",
    "level": "medium",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 52,
    "domain": "deploy",
    "topic": "Per-user device limit",
    "stem": "A power user cannot enrol a new laptop and receives an error that the device limit has been reached. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The user already has the maximum number of enrolled devices allowed by the device limit restriction"
      },
      {
        "letter": "B",
        "text": "The laptop's TPM is version 1.2"
      },
      {
        "letter": "C",
        "text": "The user has too many Microsoft 365 groups"
      },
      {
        "letter": "D",
        "text": "The tenant has reached its Autopilot device cap"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Enrolment restrictions include a per-user device limit, and once a user reaches it, further enrolments are refused until an old device is retired or the limit is raised. TPM version would produce an attestation or security error, group count does not block enrolment, and an Autopilot cap would affect registration rather than a single user's enrolment.\n\nExam tip: A single user blocked at enrolment points to the device limit, not to platform restrictions.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure enrollment restrictions",
    "level": "medium",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 53,
    "domain": "deploy",
    "topic": "Azure network connection for Cloud PCs",
    "stem": "Cloud PCs must be hybrid joined to the corporate domain so they can reach on-premises resources. Which Windows 365 component is required?",
    "options": [
      {
        "letter": "A",
        "text": "An Azure network connection that connects the Cloud PC network to the corporate network"
      },
      {
        "letter": "B",
        "text": "A Microsoft-hosted network with no additional configuration"
      },
      {
        "letter": "C",
        "text": "A Windows Autopilot self-deploying profile"
      },
      {
        "letter": "D",
        "text": "A public DNS zone for the Cloud PC name"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hybrid-joined Cloud PCs need line of sight to a domain controller, which an Azure network connection provides by linking the Cloud PC network to an Azure virtual network connected to the corporate network. The Microsoft-hosted network is the simpler cloud-only option, Autopilot profiles do not provide network reachability, and public DNS does not supply domain connectivity.\n\nExam tip: Hybrid Cloud PC equals an Azure network connection plus domain join credentials.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Set up Windows 365 provisioning policies",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 54,
    "domain": "deploy",
    "topic": "Cloud PC resize",
    "stem": "A finance user's Cloud PC runs out of RAM during month-end reporting. The user must keep the same Cloud PC and data. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Resize the Cloud PC to a larger configuration"
      },
      {
        "letter": "B",
        "text": "Reset the Cloud PC and reassign the licence"
      },
      {
        "letter": "C",
        "text": "Delete the Cloud PC and create a new provisioning policy"
      },
      {
        "letter": "D",
        "text": "Enable Windows 365 Boot"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 supports resizing a Cloud PC to a different configuration, which changes CPU, RAM, and storage while keeping the Cloud PC and its data. Reset or delete and recreate would destroy or replace the environment, and Boot only changes how the user connects.\n\nExam tip: Performance shortfall on an existing Cloud PC equals resize, not rebuild.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Assign and manage Cloud PCs",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 55,
    "domain": "deploy",
    "topic": "Cloud PC reprovision",
    "stem": "A Cloud PC is unusable after a failed in-place upgrade, and the user's data is already backed up to OneDrive. IT wants a clean Cloud PC built from the current provisioning policy. Which action fits?",
    "options": [
      {
        "letter": "A",
        "text": "Reprovision the Cloud PC"
      },
      {
        "letter": "B",
        "text": "Resize the Cloud PC"
      },
      {
        "letter": "C",
        "text": "Enable restore points"
      },
      {
        "letter": "D",
        "text": "Assign a second provisioning policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Reprovisioning rebuilds the Cloud PC from its provisioning policy, which is appropriate when the environment is beyond repair and data is safe elsewhere. Resizing keeps the existing OS state, restore points roll back rather than rebuild, and assigning another policy does not replace the existing Cloud PC.\n\nExam tip: Backup done plus clean rebuild equals reprovision; rollback equals restore.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Assign and manage Cloud PCs",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 56,
    "domain": "deploy",
    "topic": "ESP user reset option",
    "stem": "During a pilot, a device fails at the Enrolment Status Page and the user is stuck. The team wants users to be able to restart the deployment themselves. Which ESP setting should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Allow users to reset the device during installation"
      },
      {
        "letter": "B",
        "text": "Block device use until all apps are installed"
      },
      {
        "letter": "C",
        "text": "Turn on log collection and diagnostics"
      },
      {
        "letter": "D",
        "text": "Show an error when installation takes longer than the specified number of minutes"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The reset option gives the user a way out of a failed deployment by resetting the device and starting again, which reduces help desk calls during a pilot. Blocking until apps install makes the wait longer, diagnostics collects logs but does not unblock the user, and the timeout message only surfaces the failure.\n\nExam tip: ESP usability settings are about recovery and diagnostics, not about policy enforcement.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "hard",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 57,
    "domain": "deploy",
    "topic": "Autopilot profile assignment target",
    "stem": "An Autopilot deployment profile is assigned to a user group, but devices never receive it. What is the correct targeting?",
    "options": [
      {
        "letter": "A",
        "text": "Assign the profile to a device group that contains the Autopilot devices"
      },
      {
        "letter": "B",
        "text": "Assign the profile to the user group and enable device-based licensing"
      },
      {
        "letter": "C",
        "text": "Assign the profile to the All Users group and exclude the device group"
      },
      {
        "letter": "D",
        "text": "Assign the profile to the Enrolment Status Page"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot deployment profiles are device-targeted because the profile must be resolved before any user signs in. Assigning to a user group leaves the device without a profile at OOBE. Licensing does not change assignment, excluding devices from All Users cannot help, and the ESP is configured inside the profile rather than being an assignment target.\n\nExam tip: Anything that runs before sign-in must be assigned to devices.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 58,
    "domain": "deploy",
    "topic": "Windows 365 Business versus Enterprise",
    "stem": "A 40-person company wants Cloud PCs joined to its on-premises domain and connected to its Azure virtual network. Which Windows 365 edition is required?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 365 Enterprise, because Business does not support Azure network connections and hybrid join"
      },
      {
        "letter": "B",
        "text": "Windows 365 Business, because it includes Azure network connections"
      },
      {
        "letter": "C",
        "text": "Either edition, because network choice is independent of edition"
      },
      {
        "letter": "D",
        "text": "Windows 365 Frontline only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 Business is the simpler small-business offering with Microsoft-hosted networking and cloud-only join, while Enterprise adds Azure network connections, hybrid join, and broader management. A 40-person company could fit the Business seat range, but the networking and hybrid requirements force Enterprise.\n\nExam tip: Hybrid join or custom networking on Cloud PCs means Windows 365 Enterprise.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Identify Windows 365 licensing, service plans, and prerequisites",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 59,
    "domain": "deploy",
    "topic": "Provisioning package versus Autopilot",
    "stem": "A school needs to configure 300 lab PCs that are not registered with any cloud service and may be staged offline. Which approach is the better fit?",
    "options": [
      {
        "letter": "A",
        "text": "A provisioning package applied during staging, with enrolment when connectivity is available"
      },
      {
        "letter": "B",
        "text": "Autopilot self-deploying mode for every PC"
      },
      {
        "letter": "C",
        "text": "Windows 365 Cloud PCs for every student"
      },
      {
        "letter": "D",
        "text": "Manual enrolment by each student at first sign-in"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Provisioning packages can apply settings and enrolment tokens at first run without the device being pre-registered, which suits offline staging and shared lab hardware. Autopilot needs registration and connectivity at OOBE, Cloud PCs replace rather than configure the hardware, and student-led manual enrolment does not scale or give consistent configuration.\n\nExam tip: Unregistered plus offline staging equals provisioning package; pre-registered plus zero touch equals Autopilot.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Choose an enrollment strategy",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 60,
    "domain": "deploy",
    "topic": "AVD client access options",
    "stem": "Users need to connect to AVD from Windows, macOS, and a web browser without installing software on locked-down devices. Which statement is correct?",
    "options": [
      {
        "letter": "A",
        "text": "The Remote Desktop client is available for Windows and macOS, and the web client covers browser access"
      },
      {
        "letter": "B",
        "text": "AVD requires the Windows Store Remote Desktop app on every platform"
      },
      {
        "letter": "C",
        "text": "AVD sessions can only be started from a domain-joined PC"
      },
      {
        "letter": "D",
        "text": "Users must install Configuration Manager to launch a session"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft provides the Remote Desktop client for Windows and macOS plus a browser-based web client, so users can connect from managed and unmanaged devices. The Store app is one option rather than a requirement, domain join is not needed for AVD access, and Configuration Manager is unrelated to launching a session.\n\nExam tip: AVD access is client-agnostic; do not let an answer force a single platform.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Understand Azure Virtual Desktop architecture",
    "level": "easy",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 61,
    "domain": "identity",
    "topic": "Intune Administrator role scope",
    "stem": "A service desk lead must manage devices, policies, and apps in Intune but must not be able to create Conditional Access policies. Which Microsoft Entra role should be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "Intune Administrator"
      },
      {
        "letter": "B",
        "text": "Global Administrator"
      },
      {
        "letter": "C",
        "text": "Conditional Access Administrator"
      },
      {
        "letter": "D",
        "text": "User Administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune Administrator grants full management of Intune objects without granting tenant-wide directory control or Conditional Access authoring. Global Administrator is far broader than needed, Conditional Access Administrator is the role that can create the policies the lead must not touch, and User Administrator manages identities rather than endpoints.\n\nExam tip: Give the smallest role that covers the workload; Intune Administrator is the standard endpoint admin role.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign Microsoft Entra ID roles for device management",
    "level": "medium",
    "tags": [
      "security",
      "intune"
    ]
  },
  {
    "id": 62,
    "domain": "identity",
    "topic": "Cloud Device Administrator role",
    "stem": "A security analyst needs to review and delete stale device objects in Microsoft Entra ID and read BitLocker recovery keys, but must not change Intune policies. Which role fits?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Device Administrator"
      },
      {
        "letter": "B",
        "text": "Intune Administrator"
      },
      {
        "letter": "C",
        "text": "Security Reader"
      },
      {
        "letter": "D",
        "text": "Global Administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Cloud Device Administrator can enable, disable, and delete devices in Entra ID and read BitLocker keys, which matches the device-object task without granting policy authoring. Intune Administrator can change policies, Security Reader is read-only and cannot delete devices, and Global Administrator is excessive.\n\nExam tip: Device objects in Entra ID are governed by Cloud Device Administrator, not by Intune roles.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign Microsoft Entra ID roles for device management",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 63,
    "domain": "identity",
    "topic": "Administrative units for delegated admin",
    "stem": "A multinational wants regional IT teams to manage only the users and devices in their own country. Which Microsoft Entra feature should scope the delegated administration?",
    "options": [
      {
        "letter": "A",
        "text": "Administrative units"
      },
      {
        "letter": "B",
        "text": "Dynamic device groups"
      },
      {
        "letter": "C",
        "text": "Scope tags in Intune"
      },
      {
        "letter": "D",
        "text": "Conditional Access named locations"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Administrative units restrict role assignments to a defined collection of users, groups, or devices, which is how Entra ID delegates administration by region or department. Dynamic groups organise objects but do not restrict an administrator's permissions, Intune scope tags limit Intune objects rather than directory roles, and named locations are used in Conditional Access conditions.\n\nExam tip: Directory-level delegation equals administrative units; Intune-level delegation equals scope tags.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign Microsoft Entra ID roles for device management",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 64,
    "domain": "identity",
    "topic": "Intune Help Desk Operator role",
    "stem": "A first-line team must reset device passcodes, retire devices, and run remote actions, but must not edit configuration profiles. Which Intune RBAC role should they receive?",
    "options": [
      {
        "letter": "A",
        "text": "Help Desk Operator"
      },
      {
        "letter": "B",
        "text": "Policy and Profile Manager"
      },
      {
        "letter": "C",
        "text": "Intune Administrator"
      },
      {
        "letter": "D",
        "text": "Application Manager"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Help Desk Operator is built for support tasks such as remote actions and device administration without policy authoring. Policy and Profile Manager can create and edit profiles, which exceeds the requirement, Intune Administrator is broader still, and Application Manager focuses on app deployment rather than device support.\n\nExam tip: Support staff get Help Desk Operator; policy authors get Policy and Profile Manager.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Understand RBAC and scope tags in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 65,
    "domain": "identity",
    "topic": "Scope tags versus RBAC roles",
    "stem": "A company has one Intune tenant but two support teams, one for Europe and one for Asia. Each team must see and manage only its own devices and policies. Which two components are required? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "An Intune role assignment scoped to a scope tag"
      },
      {
        "letter": "B",
        "text": "Scope tags applied to the devices and policies"
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy per region"
      },
      {
        "letter": "D",
        "text": "Separate Intune tenants per region"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Scope tags partition Intune objects, and a role assignment that includes a scope tag limits what the assignee can see and change. Both halves are required: tags on the objects and a role assignment that references the tag. Conditional Access controls access to resources rather than admin visibility, and separate tenants are unnecessary.\n\nExam tip: Scope tags without a scoped role assignment change nothing; pair them.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Configure scoped administration for regional or business unit separation",
    "level": "hard",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 66,
    "domain": "identity",
    "topic": "Custom Intune role",
    "stem": "Built-in Intune roles grant more access than a team needs. The team requires a narrow set of read and remote-action permissions. What should you create?",
    "options": [
      {
        "letter": "A",
        "text": "A custom Intune role with only the required permissions"
      },
      {
        "letter": "B",
        "text": "A new Global Administrator account for each team member"
      },
      {
        "letter": "C",
        "text": "A dynamic device group"
      },
      {
        "letter": "D",
        "text": "An administrative unit in Entra ID"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune supports custom roles built from individual permissions, which lets you grant exactly the read and action rights the team needs. Global Administrator violates least privilege, dynamic groups organise devices, and administrative units scope directory roles rather than Intune permissions.\n\nExam tip: When every built-in role is too broad, build a custom role instead of over-granting.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Assign roles and permissions for multi-admin environments",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 67,
    "domain": "identity",
    "topic": "Assigned versus dynamic groups",
    "stem": "A company wants new Windows devices to join a policy group automatically based on their operating system, with no manual membership work. Which group type should they use?",
    "options": [
      {
        "letter": "A",
        "text": "A dynamic device group with an operating system rule"
      },
      {
        "letter": "B",
        "text": "An assigned security group maintained by the service desk"
      },
      {
        "letter": "C",
        "text": "A Microsoft 365 group for the IT department"
      },
      {
        "letter": "D",
        "text": "A distribution list"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Dynamic device groups evaluate a membership rule against device attributes such as operating system, so new Windows devices are added without manual work. Assigned groups require someone to add members, Microsoft 365 groups are collaboration objects rather than the usual Intune targeting container, and distribution lists are mail objects that Intune does not use for assignment.\n\nExam tip: \"Automatically based on an attribute\" means dynamic group, not assigned.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Use dynamic group membership and filters in Microsoft Entra ID",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 68,
    "domain": "identity",
    "topic": "Dynamic device group rule syntax",
    "stem": "Which membership rule creates a dynamic device group containing only Windows devices?",
    "options": [
      {
        "letter": "A",
        "text": "device.deviceOSType -eq \"Windows\""
      },
      {
        "letter": "B",
        "text": "user.department -eq \"Windows\""
      },
      {
        "letter": "C",
        "text": "device.displayName -contains \"Windows\""
      },
      {
        "letter": "D",
        "text": "device.deviceOSType -eq \"Windows 11\""
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device dynamic rules use the device object's properties, and deviceOSType stores values such as Windows, iOS, and Android. Matching the display name is unreliable, the user object does not describe the device OS, and the OS type value is not a version string such as Windows 11.\n\nExam tip: Dynamic rules must reference properties that exist on the object type you are targeting.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Use dynamic group membership and filters in Microsoft Entra ID",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 69,
    "domain": "identity",
    "topic": "Group-based licensing prerequisite",
    "stem": "A dynamic group is used to assign Intune licences to users. Users are added to the group but never receive a licence. What should you verify?",
    "options": [
      {
        "letter": "A",
        "text": "The group is enabled for group-based licensing and the tenant has enough licences"
      },
      {
        "letter": "B",
        "text": "The group is a device group rather than a user group"
      },
      {
        "letter": "C",
        "text": "The users are local administrators on their devices"
      },
      {
        "letter": "D",
        "text": "The group has a scope tag"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Group-based licensing must be enabled on the group and the tenant must have available licences; otherwise membership alone grants nothing. Device groups cannot license users, local admin rights are unrelated, and scope tags affect Intune administration rather than licence assignment.\n\nExam tip: Dynamic membership grants access to the group, not automatically to the product licence.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Create and manage users and groups in Microsoft Entra ID",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 70,
    "domain": "identity",
    "topic": "Assignment filters versus groups",
    "stem": "An administrator must apply a policy to only the Surface laptops in a large group without creating new groups or waiting for membership updates. Which feature fits?",
    "options": [
      {
        "letter": "A",
        "text": "An assignment filter on the device model"
      },
      {
        "letter": "B",
        "text": "A dynamic group rule on the device model"
      },
      {
        "letter": "C",
        "text": "A compliance policy with a grace period"
      },
      {
        "letter": "D",
        "text": "An exclusion group containing every other model"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Assignment filters are evaluated when a policy is delivered, so a filter on device model narrows the assignment without changing group membership. A dynamic group would also work but requires group changes and membership evaluation, the compliance grace period is unrelated, and maintaining an exclusion group is fragile.\n\nExam tip: Filters are the lightweight, per-assignment scoping tool; groups are the durable container.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Use dynamic group membership and filters in Microsoft Entra ID",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 71,
    "domain": "identity",
    "topic": "Device filter rule syntax",
    "stem": "Which filter rule targets devices whose model contains \"Surface\"?",
    "options": [
      {
        "letter": "A",
        "text": "device.model -contains \"Surface\""
      },
      {
        "letter": "B",
        "text": "user.model -contains \"Surface\""
      },
      {
        "letter": "C",
        "text": "device.deviceOSType -eq \"Surface\""
      },
      {
        "letter": "D",
        "text": "device.manufacturer -contains \"Surface\""
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Filters support device properties such as model, manufacturer, operating system, and enrolment profile name. The model property is the right one for a product name, the user object has no model property, deviceOSType holds the platform, and manufacturer would match the vendor rather than the model.\n\nExam tip: Learn the common filter properties: model, manufacturer, deviceOSType, enrollmentProfileName.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Use dynamic group membership and filters in Microsoft Entra ID",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 72,
    "domain": "identity",
    "topic": "Exclusion precedence in assignment",
    "stem": "A policy is assigned to All Devices and excluded from a pilot group. A pilot device is also a member of All Devices. What happens?",
    "options": [
      {
        "letter": "A",
        "text": "The device is excluded, because exclusions take precedence over inclusions"
      },
      {
        "letter": "B",
        "text": "The device receives the policy, because All Devices is broader"
      },
      {
        "letter": "C",
        "text": "The device receives the policy twice"
      },
      {
        "letter": "D",
        "text": "The device is blocked from enrolling"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune evaluates exclusions after inclusions, so a device in an excluded group does not receive the assignment even when it also matches a broader include. The policy is not duplicated, and assignment has no effect on enrolment.\n\nExam tip: Include broad, exclude narrow is the standard pattern for staged rollouts.",
    "source": "Manage and maintain devices using Microsoft Intune — Assign configuration profiles using groups and filters",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 73,
    "domain": "identity",
    "topic": "All Devices group targeting",
    "stem": "A baseline policy must apply to every device in the tenant. Which assignment is simplest and safest?",
    "options": [
      {
        "letter": "A",
        "text": "Assign to All Devices and exclude a break-glass test group"
      },
      {
        "letter": "B",
        "text": "Assign to every user individually"
      },
      {
        "letter": "C",
        "text": "Assign to a dynamic user group"
      },
      {
        "letter": "D",
        "text": "Assign to the local Administrators group"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "All Devices is the built-in virtual group for tenant-wide device targeting, and excluding a small test group preserves a way to validate changes. Individual user assignments do not scale, user groups target users rather than devices, and a local Administrators group is a device-local object that Intune does not use for assignment.\n\nExam tip: Tenant-wide device policy is All Devices plus a narrow exclusion for testing.",
    "source": "Manage and maintain devices using Microsoft Intune — Assign configuration profiles using groups and filters",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 74,
    "domain": "identity",
    "topic": "Device category reporting",
    "stem": "An administrator wants to report on devices by department but does not want to change group membership. Which device property is designed for this?",
    "options": [
      {
        "letter": "A",
        "text": "Device category"
      },
      {
        "letter": "B",
        "text": "Compliance state"
      },
      {
        "letter": "C",
        "text": "Enrolment date"
      },
      {
        "letter": "D",
        "text": "BitLocker key identifier"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device categories are labels that administrators or users assign to describe a device's purpose or department, and they can drive reporting and dynamic group rules. Compliance state reflects policy evaluation, enrolment date is a timestamp, and the key identifier is an encryption artefact.\n\nExam tip: Categories describe what a device is for; compliance describes whether it meets policy.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 75,
    "domain": "identity",
    "topic": "Entra registered device definition",
    "stem": "An employee signs in to a personal phone with a work account to read email, and the phone is not enrolled in Intune. How is the device represented in Microsoft Entra ID?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra registered"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra joined"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra hybrid joined"
      },
      {
        "letter": "D",
        "text": "Domain joined only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A personal device that signs in with a work account without organisational enrolment is Entra registered. Registration gives the device an identity for Conditional Access and SSO but does not give Intune management. Entra join and hybrid join are organisational ownership models, and domain join requires on-premises Active Directory.\n\nExam tip: BYOD plus no enrolment equals registered, not joined.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 76,
    "domain": "identity",
    "topic": "Entra joined device definition",
    "stem": "A new laptop is purchased by the company, has no on-premises domain membership, and signs in users with work accounts only. Which device identity model is in use?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra joined"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra registered"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra hybrid joined"
      },
      {
        "letter": "D",
        "text": "Workgroup joined"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entra joined devices are organisation-owned and cloud-native: the device object lives in Entra ID, users sign in with work accounts, and there is no on-premises domain. Registered devices are typically personal, hybrid joined devices are also domain-joined, and a workgroup is simply not domain-joined.\n\nExam tip: No on-premises AD plus organisation ownership equals Entra join.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 77,
    "domain": "identity",
    "topic": "Hybrid joined device definition",
    "stem": "A desktop is joined to on-premises Active Directory and also registered with Microsoft Entra ID so users get SSO to Microsoft 365. Which state is this?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra hybrid joined"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra joined"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra registered only"
      },
      {
        "letter": "D",
        "text": "Cloud-only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hybrid join combines an on-premises domain join with an Entra ID device registration, giving the device both identities. Entra join is cloud-only with no domain membership, registered-only describes a personal device without domain join, and cloud-only excludes on-premises AD.\n\nExam tip: DomainJoined YES and AzureAdJoined YES is hybrid; both are required.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 78,
    "domain": "identity",
    "topic": "dsregcmd status interpretation",
    "stem": "Running dsregcmd /status on a laptop shows AzureAdJoined : YES and DomainJoined : NO. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "The device is Microsoft Entra joined"
      },
      {
        "letter": "B",
        "text": "The device is hybrid joined"
      },
      {
        "letter": "C",
        "text": "The device is only registered"
      },
      {
        "letter": "D",
        "text": "The device is not joined to any directory"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "AzureAdJoined YES with DomainJoined NO is the signature of an Entra joined device. Hybrid join shows both values as YES, registration alone does not set AzureAdJoined to YES in the same way, and a device with no directory relationship shows NO for both.\n\nExam tip: dsregcmd is the fastest way to prove which join type a Windows device actually has.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Validate and troubleshoot device identity and trust issues",
    "level": "easy",
    "tags": [
      "troubleshooting",
      "security"
    ]
  },
  {
    "id": 79,
    "domain": "identity",
    "topic": "Primary refresh token role",
    "stem": "After a user signs in to an Entra joined device, cloud apps do not require a separate sign-in. Which mechanism provides this single sign-on?",
    "options": [
      {
        "letter": "A",
        "text": "A primary refresh token issued to the device and user"
      },
      {
        "letter": "B",
        "text": "A BitLocker recovery password"
      },
      {
        "letter": "C",
        "text": "An Autopilot group tag"
      },
      {
        "letter": "D",
        "text": "A device compliance policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The primary refresh token (PRT) is issued during sign-in and used to obtain tokens for cloud apps, which is what enables SSO on Entra joined and hybrid joined devices. BitLocker protects data at rest, group tags target Autopilot devices, and compliance policies evaluate state rather than issue tokens.\n\nExam tip: SSO on Windows is PRT-driven; if SSO fails, investigate device identity and PRT issuance.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand device identities in Microsoft Entra ID",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 80,
    "domain": "identity",
    "topic": "Device registration settings",
    "stem": "An administrator must prevent users from joining personal devices to Microsoft Entra ID while still allowing company devices to join. Which setting controls this?",
    "options": [
      {
        "letter": "A",
        "text": "Users may join devices to Microsoft Entra ID, set to None or Selected"
      },
      {
        "letter": "B",
        "text": "Maximum number of devices per user"
      },
      {
        "letter": "C",
        "text": "Require MFA to join devices"
      },
      {
        "letter": "D",
        "text": "Local administrator password rotation"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The device registration setting controls whether users may join devices, and it can be limited to a selected group. The device maximum caps how many each user may join but does not prevent joining, MFA strengthens the join rather than blocking it, and password rotation is unrelated.\n\nExam tip: Join permission is a tenant-wide switch with an optional group allow list.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 81,
    "domain": "identity",
    "topic": "Service connection point purpose",
    "stem": "Domain-joined clients cannot find the Microsoft Entra ID registration endpoint, so hybrid join fails. Which Active Directory object provides that discovery information?",
    "options": [
      {
        "letter": "A",
        "text": "The service connection point published in the forest configuration naming context"
      },
      {
        "letter": "B",
        "text": "A Group Policy object linked to the domain root"
      },
      {
        "letter": "C",
        "text": "A DNS forwarder for login.microsoftonline.com"
      },
      {
        "letter": "D",
        "text": "A certificate template on the enterprise CA"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hybrid join discovery relies on the service connection point (SCP) in Active Directory, which tells clients the tenant and registration service. Group Policy configures behaviour but does not publish the endpoint, DNS resolution alone does not supply tenant details, and certificate templates support certificate trust rather than join discovery.\n\nExam tip: Hybrid join failure plus \"no SCP\" equals a missing service connection point.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure device trust and join settings",
    "level": "easy",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 82,
    "domain": "identity",
    "topic": "Device object versus Intune record",
    "stem": "A device appears in Microsoft Entra ID but not in the Intune devices list. What is the most likely explanation?",
    "options": [
      {
        "letter": "A",
        "text": "The device is registered or joined but has not completed MDM enrolment"
      },
      {
        "letter": "B",
        "text": "The device has no BitLocker recovery key"
      },
      {
        "letter": "C",
        "text": "The user has no mailbox"
      },
      {
        "letter": "D",
        "text": "The device is excluded from Conditional Access"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entra ID and Intune hold related but separate objects. A device can have an Entra identity through registration or join without ever enrolling in Intune, in which case it has no Intune management record. Encryption keys, mailboxes, and Conditional Access exclusions do not create an Intune record.\n\nExam tip: Two consoles, two objects; enrolment is what creates the Intune side.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand the role of Microsoft Entra ID in endpoint management",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 83,
    "domain": "identity",
    "topic": "Stale device cleanup",
    "stem": "An administrator must remove devices that have not checked in for 180 days from Intune. Which approach is supported?",
    "options": [
      {
        "letter": "A",
        "text": "Use device cleanup rules to retire devices after the inactivity period"
      },
      {
        "letter": "B",
        "text": "Delete the users who own the devices"
      },
      {
        "letter": "C",
        "text": "Disable Conditional Access for the tenant"
      },
      {
        "letter": "D",
        "text": "Remove the Intune licence from the tenant"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune device cleanup rules can automatically retire devices that have not checked in for a configured number of days, which keeps inventory and licensing accurate. Deleting users is destructive and unnecessary, disabling Conditional Access weakens security, and removing licences breaks management for everyone.\n\nExam tip: Inactive device hygiene is a cleanup rule, not a manual quarterly purge.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Monitor tenant health and Intune service communications",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 84,
    "domain": "identity",
    "topic": "Windows Hello for Business key trust",
    "stem": "A cloud-only company wants passwordless Windows sign-in using TPM-protected keys without deploying a certificate authority. Which Windows Hello for Business trust model fits?",
    "options": [
      {
        "letter": "A",
        "text": "Key trust"
      },
      {
        "letter": "B",
        "text": "Certificate trust"
      },
      {
        "letter": "C",
        "text": "Cloud Kerberos trust only"
      },
      {
        "letter": "D",
        "text": "Smart card trust"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Key trust uses the TPM key pair and Entra ID to authenticate the user, so no certificate infrastructure is needed. Certificate trust requires a PKI and certificate deployment, cloud Kerberos trust is aimed at accessing on-premises Kerberos resources, and smart card trust is a separate credential model.\n\nExam tip: No PKI plus cloud-only equals key trust.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 85,
    "domain": "identity",
    "topic": "Windows Hello certificate trust requirement",
    "stem": "A company must use certificate-based Windows Hello for Business because of an existing PKI requirement. What must be deployed?",
    "options": [
      {
        "letter": "A",
        "text": "A certificate registration authority and certificate templates for Hello credentials"
      },
      {
        "letter": "B",
        "text": "Only a Conditional Access policy requiring MFA"
      },
      {
        "letter": "C",
        "text": "A Windows Autopilot self-deploying profile"
      },
      {
        "letter": "D",
        "text": "A device compliance policy with BitLocker"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Certificate trust issues a Hello for Business authentication certificate from a PKI, so it needs certificate templates and a registration authority such as NDES or a cloud certificate connector. Conditional Access, Autopilot, and compliance policies do not issue certificates.\n\nExam tip: Certificate trust exists because the organisation already has a PKI; key trust avoids one.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 86,
    "domain": "identity",
    "topic": "Cloud Kerberos trust",
    "stem": "Users need Windows Hello for Business and must access on-premises file shares that use Kerberos, but the company will not deploy a PKI. Which trust model should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Kerberos trust"
      },
      {
        "letter": "B",
        "text": "Certificate trust"
      },
      {
        "letter": "C",
        "text": "Key trust alone"
      },
      {
        "letter": "D",
        "text": "Password-based SSO"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Cloud Kerberos trust uses Microsoft Entra ID to issue a partial Kerberos ticket-granting ticket, which lets Hello for Business users reach on-premises Kerberos resources without certificates. Certificate trust needs a PKI, key trust alone does not provide on-premises Kerberos tickets, and password SSO defeats the passwordless goal.\n\nExam tip: Hello plus on-premises Kerberos plus no PKI equals cloud Kerberos trust.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 87,
    "domain": "identity",
    "topic": "Windows Hello PIN security",
    "stem": "A user asks why a Windows Hello PIN is acceptable when it is shorter than the account password. What should you explain?",
    "options": [
      {
        "letter": "A",
        "text": "The PIN is bound to the device TPM and is not transmitted to the server"
      },
      {
        "letter": "B",
        "text": "The PIN is stored in Active Directory for verification"
      },
      {
        "letter": "C",
        "text": "The PIN is only a convenience and provides no security"
      },
      {
        "letter": "D",
        "text": "The PIN is sent to Microsoft Entra ID with every sign-in"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A Hello PIN unlocks a TPM-protected key pair on the specific device, so it is not a network credential and cannot be replayed from another machine. It is not stored in Active Directory, it does provide real security, and it is not transmitted to Entra ID.\n\nExam tip: Hello PIN equals local gesture plus hardware-backed key, not a shorter password.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 88,
    "domain": "identity",
    "topic": "Temporary Access Pass use case",
    "stem": "A new employee receives a laptop before their phone is set up and cannot complete MFA registration. Which credential helps them onboard securely?",
    "options": [
      {
        "letter": "A",
        "text": "A Temporary Access Pass"
      },
      {
        "letter": "B",
        "text": "A shared service account password"
      },
      {
        "letter": "C",
        "text": "A BitLocker recovery key"
      },
      {
        "letter": "D",
        "text": "An Autopilot group tag"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A Temporary Access Pass is a time-limited passcode that lets a user register passwordless methods and sign in when their normal strong credential is not yet available. Shared passwords break accountability, BitLocker keys recover disks, and group tags target devices.\n\nExam tip: TAP exists for bootstrap scenarios such as first-day setup and credential recovery.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 89,
    "domain": "identity",
    "topic": "Passwordless phone sign-in",
    "stem": "Users should sign in to Microsoft 365 without typing a password, using their phone to approve the sign-in. Which method provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Authenticator phone sign-in"
      },
      {
        "letter": "B",
        "text": "SMS verification codes"
      },
      {
        "letter": "C",
        "text": "Security questions"
      },
      {
        "letter": "D",
        "text": "A local Windows PIN"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Authenticator phone sign-in turns the phone into a passwordless credential: the user enters a username, then approves a number match in the app. SMS codes are still a password-plus-second-factor flow, security questions are a recovery mechanism, and a Windows PIN unlocks the device rather than the cloud account.\n\nExam tip: True passwordless means no password at all, so code-based methods do not qualify.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 90,
    "domain": "identity",
    "topic": "Authentication methods policy",
    "stem": "An administrator must allow Authenticator push but block SMS for a group of finance users. Where should this be configured?",
    "options": [
      {
        "letter": "A",
        "text": "The Microsoft Entra authentication methods policy, targeted to the group"
      },
      {
        "letter": "B",
        "text": "A Windows configuration profile"
      },
      {
        "letter": "C",
        "text": "An Intune compliance policy"
      },
      {
        "letter": "D",
        "text": "A Conditional Access named location"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The authentication methods policy controls which methods are enabled and for which groups, so it can enable Microsoft Authenticator and disable SMS for finance. A configuration profile configures Windows settings, compliance evaluates device state, and named locations are conditions rather than method controls.\n\nExam tip: Method enablement lives in Entra ID, not in Intune device policy.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Understand authentication methods-key trust, certificate trust, and TPM",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 91,
    "domain": "identity",
    "topic": "Compliance policy versus configuration profile",
    "stem": "Review the diagram. A Windows device must report whether BitLocker is enabled, and access to email must be blocked when it is not. Which two policy types are involved? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A compliance policy that evaluates BitLocker state"
      },
      {
        "letter": "B",
        "text": "A Conditional Access policy that requires a compliant device"
      },
      {
        "letter": "C",
        "text": "A configuration profile that installs an app"
      },
      {
        "letter": "D",
        "text": "An app protection policy that blocks copy and paste"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The compliance policy defines the rule and reports compliant or not compliant; Conditional Access turns that signal into an access decision. A configuration profile could enforce encryption settings, but it does not itself gate access, and app protection policies govern data inside apps rather than device encryption state.\n\nExam tip: Compliance evaluates, Conditional Access enforces, configuration configures.",
    "source": "Protect devices using Microsoft Intune — Understand compliance policies and risk-based enforcement",
    "diagram": "compliance-evaluation",
    "level": "easy",
    "tags": [
      "security",
      "intune"
    ]
  },
  {
    "id": 92,
    "domain": "identity",
    "topic": "Devices without compliance policy default",
    "stem": "A tenant has no compliance policy assigned to a group of devices, yet Conditional Access requires a compliant device. What is the default behaviour for devices with no compliance policy?",
    "options": [
      {
        "letter": "A",
        "text": "They are treated as compliant by the tenant-wide compliance setting unless it is changed"
      },
      {
        "letter": "B",
        "text": "They are always blocked because no policy exists"
      },
      {
        "letter": "C",
        "text": "They are automatically enrolled in Defender"
      },
      {
        "letter": "D",
        "text": "They are removed from Intune after seven days"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune has a tenant-wide setting that determines whether devices without an assigned compliance policy are marked compliant or not compliant, and the default is compliant. That default is convenient during rollout but risky for Conditional Access, so many organisations switch it to not compliant. Missing policy does not trigger Defender onboarding or automatic removal.\n\nExam tip: Check the tenant compliance setting before blaming Conditional Access for unexpected access.",
    "source": "Protect devices using Microsoft Intune — Create compliance policies for supported platforms",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 93,
    "domain": "identity",
    "topic": "Compliance grace period",
    "stem": "A compliance policy marks devices noncompliant immediately, but users need one business day to install updates before access is blocked. Which setting should you change?",
    "options": [
      {
        "letter": "A",
        "text": "The schedule for the Mark device noncompliant action"
      },
      {
        "letter": "B",
        "text": "The BitLocker cipher strength"
      },
      {
        "letter": "C",
        "text": "The enrolment device limit"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment mode"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Compliance actions run on a schedule, and setting the Mark device noncompliant action to one day creates a grace period before the device state changes and Conditional Access reacts. Cipher strength, device limits, and Autopilot modes do not control the timing of noncompliance.\n\nExam tip: Grace periods live on the compliance action, not on the Conditional Access policy.",
    "source": "Protect devices using Microsoft Intune — Configure actions for noncompliant devices",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 94,
    "domain": "identity",
    "topic": "Compliance notification email",
    "stem": "Users should receive an email explaining what to fix when their device becomes noncompliant, before access is blocked. Which compliance action provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Send email to end users"
      },
      {
        "letter": "B",
        "text": "Mark device noncompliant"
      },
      {
        "letter": "C",
        "text": "Remote lock"
      },
      {
        "letter": "D",
        "text": "Retire"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The email action sends a customisable message to the user with remediation guidance, and it can be scheduled ahead of the noncompliant action. Marking noncompliant changes state, remote lock blocks the device physically, and retire removes management rather than guiding the user.\n\nExam tip: Sequence the actions: notify first, then mark noncompliant, then escalate.",
    "source": "Protect devices using Microsoft Intune — Configure actions for noncompliant devices",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 95,
    "domain": "identity",
    "topic": "BitLocker compliance rule",
    "stem": "A compliance policy must fail any Windows device that has BitLocker turned off. Which compliance setting enforces the evaluation?",
    "options": [
      {
        "letter": "A",
        "text": "Require BitLocker"
      },
      {
        "letter": "B",
        "text": "Require Secure Boot"
      },
      {
        "letter": "C",
        "text": "Require code integrity"
      },
      {
        "letter": "D",
        "text": "Require a minimum OS version"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Require BitLocker setting checks the device's encryption state and reports noncompliance when encryption is off. Secure Boot and code integrity check boot and driver trust, and a minimum OS version checks the build rather than encryption.\n\nExam tip: Compliance rules mirror the security controls in the baseline; pick the rule that matches the control named.",
    "source": "Protect devices using Microsoft Intune — Implement device encryption",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 96,
    "domain": "identity",
    "topic": "Defender compliance requirements",
    "stem": "A compliance policy must require that Defender antivirus and firewall are running and that Defender for Endpoint risk level is not high. Which three settings are involved? Select three.",
    "options": [
      {
        "letter": "A",
        "text": "Require Defender antivirus"
      },
      {
        "letter": "B",
        "text": "Require firewall"
      },
      {
        "letter": "C",
        "text": "Require the device to be at or under the machine risk score"
      },
      {
        "letter": "D",
        "text": "Require BitLocker"
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Windows compliance policies expose Defender antivirus, firewall, and machine risk score settings, which map directly to the three requirements. BitLocker and OS version are valid compliance settings but they answer different controls, so they do not satisfy this scenario.\n\nExam tip: Risk score compliance depends on Defender for Endpoint onboarding; without it the signal is missing.",
    "source": "Protect devices using Microsoft Intune — Create compliance policies for supported platforms",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 97,
    "domain": "identity",
    "topic": "Conditional Access compliant device grant",
    "stem": "Review the diagram. A Conditional Access policy must block email access from devices that fail compliance. Which grant control should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Require device to be marked as compliant"
      },
      {
        "letter": "B",
        "text": "Require multi-factor authentication"
      },
      {
        "letter": "C",
        "text": "Require an approved client app"
      },
      {
        "letter": "D",
        "text": "Require a named location"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The compliant device grant reads the device state published by Intune and denies access when the device is not compliant. MFA proves the user, an approved client app governs the app, and a named location is a condition rather than a grant.\n\nExam tip: Device state grants require Intune compliance; user grants such as MFA do not replace them.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "diagram": "conditional-access-flow",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 98,
    "domain": "identity",
    "topic": "Conditional Access report-only mode",
    "stem": "Before enforcing a new Conditional Access policy, an administrator wants to see who would be blocked without affecting access. Which setting should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Report-only mode"
      },
      {
        "letter": "B",
        "text": "Off mode"
      },
      {
        "letter": "C",
        "text": "A one-hour session control"
      },
      {
        "letter": "D",
        "text": "A named location exclusion"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Report-only mode evaluates the policy and records the result in sign-in logs without enforcing it, which is the safe way to validate impact. Off mode evaluates nothing, session controls limit session lifetime rather than policy impact, and an exclusion changes who the policy applies to rather than previewing it.\n\nExam tip: Pilot Conditional Access in report-only, review the sign-in log, then enforce.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 99,
    "domain": "identity",
    "topic": "Conditional Access device platform condition",
    "stem": "A policy must apply only when users sign in from Android devices. Which Conditional Access condition should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Device platform, set to Android"
      },
      {
        "letter": "B",
        "text": "Client apps, set to browser"
      },
      {
        "letter": "C",
        "text": "Named locations, set to the office IP range"
      },
      {
        "letter": "D",
        "text": "Sign-in risk, set to high"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The device platform condition filters by operating system reported by the device, so selecting Android scopes the policy correctly. Client apps filters by app type, named locations filters by network origin, and sign-in risk filters by identity risk rather than platform.\n\nExam tip: Platform conditions depend on the device reporting an OS; unmanaged devices may report unknown.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 100,
    "domain": "identity",
    "topic": "Conditional Access layered grants",
    "stem": "Review the diagram. A policy must require both MFA and a compliant device for Microsoft 365 access. Which two grant controls should be selected in the same policy? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Require multi-factor authentication"
      },
      {
        "letter": "B",
        "text": "Require device to be marked as compliant"
      },
      {
        "letter": "C",
        "text": "Require password change"
      },
      {
        "letter": "D",
        "text": "Block access"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Grant controls selected together in one policy are combined with AND by default, so the user must satisfy both MFA and compliance. Requiring a password change addresses credential age rather than this scenario, and Block access contradicts the goal of allowing compliant users.\n\nExam tip: Multiple grants in one policy combine; use separate policies when you need OR behaviour.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "diagram": "conditional-access-flow",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 101,
    "domain": "identity",
    "topic": "Conditional Access sign-in frequency",
    "stem": "A security team wants users on unmanaged devices to reauthenticate every four hours. Which session control should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Sign-in frequency"
      },
      {
        "letter": "B",
        "text": "Persistent browser session"
      },
      {
        "letter": "C",
        "text": "Application enforced restrictions"
      },
      {
        "letter": "D",
        "text": "Continuous access evaluation"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Sign-in frequency sets how often a user must sign in again for a cloud app, and it can be scoped to browser sessions and specific groups. Persistent browser session controls whether the browser remembers the sign-in, application enforced restrictions limits data in unmanaged browsers, and continuous access evaluation reacts to real-time risk events rather than a fixed interval.\n\nExam tip: Fixed reauthentication interval equals sign-in frequency.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 102,
    "domain": "identity",
    "topic": "Conditional Access app protection grant",
    "stem": "BYOD users access corporate email in Outlook without enrolling their phones. Access must require an app protection policy. Which grant control fits?",
    "options": [
      {
        "letter": "A",
        "text": "Require app protection policy"
      },
      {
        "letter": "B",
        "text": "Require hybrid joined device"
      },
      {
        "letter": "C",
        "text": "Require compliant device"
      },
      {
        "letter": "D",
        "text": "Require a trusted location"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The app protection policy grant requires the app to be protected by an Intune app protection policy, which works without device enrolment. Hybrid join and compliance both require device management, and a trusted location is a condition rather than a grant.\n\nExam tip: No enrolment plus data protection equals the app protection grant, not the compliance grant.",
    "source": "Manage applications using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 103,
    "domain": "identity",
    "topic": "Break-glass account exclusion",
    "stem": "A Conditional Access rollout accidentally locks every administrator out of the tenant. Which practice prevents this?",
    "options": [
      {
        "letter": "A",
        "text": "Exclude at least one emergency access account from all Conditional Access policies and monitor it"
      },
      {
        "letter": "B",
        "text": "Assign Global Administrator to every user"
      },
      {
        "letter": "C",
        "text": "Disable MFA for all administrators"
      },
      {
        "letter": "D",
        "text": "Set every policy to report-only permanently"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Emergency access, or break-glass, accounts are excluded from Conditional Access so administrators can regain control if a policy misfires. The accounts should be cloud-only, heavily monitored, and use strong credentials. Granting global admin broadly or disabling MFA creates far bigger risks, and permanent report-only means nothing is enforced.\n\nExam tip: Every Conditional Access design needs a tested break-glass path.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 104,
    "domain": "identity",
    "topic": "Compliance evaluation timing",
    "stem": "Review the diagram. A user enabled BitLocker an hour ago, but the device still shows noncompliant in Intune. What is the most likely explanation?",
    "options": [
      {
        "letter": "A",
        "text": "The device has not checked in and re-evaluated compliance yet"
      },
      {
        "letter": "B",
        "text": "BitLocker is not supported on Windows"
      },
      {
        "letter": "C",
        "text": "The compliance policy was deleted"
      },
      {
        "letter": "D",
        "text": "Conditional Access disabled the device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Compliance is evaluated when the device checks in and on the compliance schedule, so a recent change can take time to appear. A manual sync from the Company Portal or admin center forces evaluation. BitLocker is supported, a deleted policy would remove the rule, and Conditional Access blocks access rather than changing the reported state.\n\nExam tip: State changes lag until check-in; sync before you troubleshoot the policy.",
    "source": "Protect devices using Microsoft Intune — Monitor and report on compliance results",
    "diagram": "compliance-evaluation",
    "level": "medium",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 105,
    "domain": "identity",
    "topic": "Noncompliant device escalation",
    "stem": "Review the diagram. A device remains noncompliant for 30 days. The security team wants corporate data removed while leaving the user's personal files intact on a BYOD Windows device. Which action fits?",
    "options": [
      {
        "letter": "A",
        "text": "Retire the device"
      },
      {
        "letter": "B",
        "text": "Wipe the device"
      },
      {
        "letter": "C",
        "text": "Delete the Intune record"
      },
      {
        "letter": "D",
        "text": "Disable the user account"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Retire removes company data, policies, and management while leaving personal files in place, which suits a BYOD device leaving managed status. Wipe resets the device and removes personal data, deleting the record leaves the device unmanaged without cleaning it, and disabling the user account is an identity action rather than device remediation.\n\nExam tip: BYOD plus keep personal data equals retire, not wipe.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "diagram": "device-lifecycle",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 106,
    "domain": "identity",
    "topic": "Jailbroken device compliance",
    "stem": "A compliance policy must mark jailbroken or rooted mobile devices as noncompliant. Which setting should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Jailbroken devices, set to Block"
      },
      {
        "letter": "B",
        "text": "Minimum OS version"
      },
      {
        "letter": "C",
        "text": "Require a password to unlock mobile devices"
      },
      {
        "letter": "D",
        "text": "Require encryption on mobile devices"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Mobile compliance policies include a jailbroken or rooted device setting that marks compromised devices noncompliant. Minimum OS version, password, and encryption rules check different controls and would not detect a compromised OS.\n\nExam tip: Rooted or jailbroken is its own compliance rule, not a side effect of encryption.",
    "source": "Protect devices using Microsoft Intune — Create compliance policies for supported platforms",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 107,
    "domain": "identity",
    "topic": "Compliance policy assignment scope",
    "stem": "A compliance policy must apply only to corporate-owned Windows laptops, not to personal devices or servers. Which assignment approach is best?",
    "options": [
      {
        "letter": "A",
        "text": "Assign to a dynamic device group filtered by ownership and platform, with exclusions"
      },
      {
        "letter": "B",
        "text": "Assign to All Users"
      },
      {
        "letter": "C",
        "text": "Assign to All Devices with no exclusions"
      },
      {
        "letter": "D",
        "text": "Assign to the local Administrators group"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A dynamic device group that selects corporate Windows devices, combined with exclusions for servers or test devices, scopes the policy precisely. All Users targets people rather than device ownership, All Devices without exclusions over-applies, and a local group is not an Intune assignment target.\n\nExam tip: Compliance targeting is device-based; build the group from device properties.",
    "source": "Protect devices using Microsoft Intune — Assign and scope compliance policies using groups and filters",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 108,
    "domain": "identity",
    "topic": "Multiple compliance policies precedence",
    "stem": "Two compliance policies apply to the same Windows device. One requires BitLocker and one does not. How is compliance determined?",
    "options": [
      {
        "letter": "A",
        "text": "The device must satisfy both policies, so the stricter requirement wins"
      },
      {
        "letter": "B",
        "text": "The policy created most recently wins"
      },
      {
        "letter": "C",
        "text": "The policy with more assignments wins"
      },
      {
        "letter": "D",
        "text": "The device is marked compliant if it meets either policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "When multiple compliance policies apply, the device must meet all of them, so the most restrictive combination determines the result. Creation date, assignment count, and a permissive OR interpretation do not override an applicable rule.\n\nExam tip: Compliance is cumulative; configuration conflicts are a different mechanism.",
    "source": "Protect devices using Microsoft Intune — Assign and scope compliance policies using groups and filters",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 109,
    "domain": "identity",
    "topic": "Windows LAPS backup target",
    "stem": "Local administrator passwords must be backed up to Microsoft Entra ID and rotated automatically. Which policy should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A Windows LAPS policy in Intune with backup to Microsoft Entra ID"
      },
      {
        "letter": "B",
        "text": "A BitLocker policy with a recovery key escrow"
      },
      {
        "letter": "C",
        "text": "A Windows Hello for Business policy"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows LAPS manages the local administrator password, rotates it on a schedule, and can back it up to Microsoft Entra ID or on-premises Active Directory. BitLocker escrows disk recovery keys, Hello manages user sign-in, and app protection governs app data.\n\nExam tip: LAPS is about the local admin account; BitLocker is about the disk.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 110,
    "domain": "identity",
    "topic": "LAPS password retrieval permission",
    "stem": "A technician must read a device's local administrator password from Intune. Which permission is required?",
    "options": [
      {
        "letter": "A",
        "text": "An Intune role that includes the local administrator password permission for the device scope"
      },
      {
        "letter": "B",
        "text": "Global Reader in Microsoft Entra ID"
      },
      {
        "letter": "C",
        "text": "The Device Enrolment Manager role"
      },
      {
        "letter": "D",
        "text": "A Conditional Access Administrator role"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Retrieving a LAPS password requires an Intune RBAC permission for local administrator password recovery, scoped to the device. Global Reader is read-only and does not expose secrets, DEM is for bulk enrolment, and Conditional Access Administrator manages access policies rather than device secrets.\n\nExam tip: Secrets follow least privilege; grant the narrow Intune permission, not a directory-wide role.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 111,
    "domain": "identity",
    "topic": "Windows LAPS prerequisites",
    "stem": "Which two requirements must be met before Windows LAPS can manage a local administrator password through Intune? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "The device runs a supported Windows version with the LAPS policy CSP"
      },
      {
        "letter": "B",
        "text": "The local administrator account is enabled and identified in the policy"
      },
      {
        "letter": "C",
        "text": "The device is joined to Configuration Manager"
      },
      {
        "letter": "D",
        "text": "The user has a Windows Hello PIN"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Windows LAPS needs a supported Windows build that exposes the policy CSP, and the policy must target an existing local administrator account, including creating one if necessary. Configuration Manager is not required, and a Hello PIN is unrelated to the local account password.\n\nExam tip: LAPS fails quietly when the target account does not exist; verify the account name in the policy.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 112,
    "domain": "identity",
    "topic": "Local user group membership policy",
    "stem": "A help desk must be added to the local Administrators group on all Windows devices, and the change must be removed automatically if the device leaves the group. Which Intune feature fits?",
    "options": [
      {
        "letter": "A",
        "text": "A local user group membership configuration profile"
      },
      {
        "letter": "B",
        "text": "A compliance policy"
      },
      {
        "letter": "C",
        "text": "An app protection policy"
      },
      {
        "letter": "D",
        "text": "A Conditional Access policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The local user group membership profile adds or removes members from local groups such as Administrators, and it reverses the change when the assignment no longer applies. Compliance evaluates state, app protection governs app data, and Conditional Access controls access.\n\nExam tip: Managing local group membership is configuration, not compliance.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 113,
    "domain": "identity",
    "topic": "Legacy Microsoft LAPS versus Windows LAPS",
    "stem": "A company still uses the legacy Microsoft LAPS client-side extension. What is the recommended direction?",
    "options": [
      {
        "letter": "A",
        "text": "Move to built-in Windows LAPS and its Intune policy, because the legacy solution is being retired"
      },
      {
        "letter": "B",
        "text": "Keep the legacy solution and disable password rotation"
      },
      {
        "letter": "C",
        "text": "Replace LAPS with BitLocker"
      },
      {
        "letter": "D",
        "text": "Store local admin passwords in a spreadsheet"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows LAPS is built into supported Windows versions and is managed through Intune or Group Policy, while the legacy Microsoft LAPS MSI is on a retirement path. Disabling rotation, substituting BitLocker, or storing passwords manually all weaken security and do not provide managed rotation.\n\nExam tip: New LAPS deployments should use Windows LAPS, not the legacy installer.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Configure Microsoft Entra ID device registration settings",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 114,
    "domain": "identity",
    "topic": "Hybrid join alternative grant",
    "stem": "An organisation cannot enrol devices in Intune yet but still wants Conditional Access to trust domain-joined Windows devices. Which grant control can help?",
    "options": [
      {
        "letter": "A",
        "text": "Require Microsoft Entra hybrid joined device"
      },
      {
        "letter": "B",
        "text": "Require app protection policy"
      },
      {
        "letter": "C",
        "text": "Require compliant device"
      },
      {
        "letter": "D",
        "text": "Require approved client app"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The hybrid joined device grant trusts devices that are both domain-joined and registered with Entra ID, which works without full Intune compliance. The compliant device grant needs Intune, the app protection grant applies to apps on unmanaged devices, and the approved client app grant governs which app is used.\n\nExam tip: No Intune yet plus domain devices equals the hybrid joined grant, with the security trade-offs that implies.",
    "source": "Protect devices using Microsoft Intune — Configure Conditional Access policies for application access control",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 115,
    "domain": "identity",
    "topic": "Compliance state in Entra ID",
    "stem": "Where does Conditional Access read the device compliance signal from?",
    "options": [
      {
        "letter": "A",
        "text": "The device object in Microsoft Entra ID, updated by Intune"
      },
      {
        "letter": "B",
        "text": "The Windows Update history on the device"
      },
      {
        "letter": "C",
        "text": "The Configuration Manager console directly"
      },
      {
        "letter": "D",
        "text": "The user's mailbox rules"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune writes compliance state to the device object in Entra ID, and Conditional Access evaluates that attribute during sign-in. Update history is local data, Configuration Manager is not queried by Conditional Access, and mailbox rules are unrelated.\n\nExam tip: Intune decides compliance, Entra ID stores the state, Conditional Access enforces it.",
    "source": "Protect devices using Microsoft Intune — Understand compliance policies and risk-based enforcement",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 116,
    "domain": "manage",
    "topic": "Wi-Fi profile deployment",
    "stem": "Windows laptops must connect automatically to a WPA2-Enterprise wireless network using a certificate for authentication. Which Intune profile type should you create?",
    "options": [
      {
        "letter": "A",
        "text": "A Wi-Fi configuration profile"
      },
      {
        "letter": "B",
        "text": "A VPN configuration profile"
      },
      {
        "letter": "C",
        "text": "An email configuration profile"
      },
      {
        "letter": "D",
        "text": "A device restrictions profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Wi-Fi template carries SSID, security type, authentication method, server validation, and the certificate selection needed for WPA2-Enterprise. VPN profiles create remote access tunnels, email profiles configure mail clients, and device restrictions control features such as camera or USB use.\n\nExam tip: Match the template name to the connectivity method before you look at settings.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "easy",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 117,
    "domain": "manage",
    "topic": "Settings catalog versus templates",
    "stem": "An administrator needs one place to browse and configure hundreds of individual Windows settings without using a template. Which profile type should they use?",
    "options": [
      {
        "letter": "A",
        "text": "Settings catalog"
      },
      {
        "letter": "B",
        "text": "Administrative templates"
      },
      {
        "letter": "C",
        "text": "Custom OMA-URI"
      },
      {
        "letter": "D",
        "text": "A security baseline"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The settings catalog exposes a searchable, unified list of settings across Windows and other platforms, which is the modern way to build granular profiles. Administrative templates are ADMX-backed and limited to policy-style settings, custom OMA-URI requires exact CSP paths, and a baseline is a predefined set rather than a picker.\n\nExam tip: New granular Windows profiles usually start with the settings catalog.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 118,
    "domain": "manage",
    "topic": "Administrative templates profile",
    "stem": "A Windows setting is only exposed through an ADMX policy that the company already uses in Group Policy. Which Intune profile type maps most directly?",
    "options": [
      {
        "letter": "A",
        "text": "Administrative templates"
      },
      {
        "letter": "B",
        "text": "Settings catalog only"
      },
      {
        "letter": "C",
        "text": "Custom OMA-URI"
      },
      {
        "letter": "D",
        "text": "A compliance policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Administrative templates surface ADMX-backed Windows policies with the same names and values as Group Policy, which makes them the direct migration path. The settings catalog may also expose some of these settings, but the ADMX template is the closest match; custom OMA-URI is the fallback, and compliance does not configure settings.\n\nExam tip: ADMX policy equals administrative templates; unknown CSP equals custom OMA-URI.",
    "source": "Manage and maintain devices using Microsoft Intune — Analyze and migrate Group Policy using Group Policy analytics",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 119,
    "domain": "manage",
    "topic": "Custom OMA-URI profile",
    "stem": "A Windows setting has no settings catalog entry and no ADMX policy. Which two details must you supply in a custom profile? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "The OMA-URI path for the CSP setting"
      },
      {
        "letter": "B",
        "text": "The value type and data for that setting"
      },
      {
        "letter": "C",
        "text": "The BitLocker recovery key"
      },
      {
        "letter": "D",
        "text": "The user's primary refresh token"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A custom profile needs the exact OMA-URI from the policy CSP documentation plus the correct data type and value, for example an integer or a string. BitLocker keys and refresh tokens are unrelated to configuration delivery.\n\nExam tip: Custom profiles are powerful and unforgiving; validate the URI against the CSP reference.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 120,
    "domain": "manage",
    "topic": "Policy conflict diagnosis",
    "stem": "Review the diagram. A device reports that a setting is in conflict. Which explanation matches how Intune handles two profiles that configure the same setting differently?",
    "options": [
      {
        "letter": "A",
        "text": "Both profiles are delivered and Intune reports a conflict per setting; the device ends up with one value"
      },
      {
        "letter": "B",
        "text": "Intune automatically merges the two values into a combined setting"
      },
      {
        "letter": "C",
        "text": "The older profile always wins and no conflict is reported"
      },
      {
        "letter": "D",
        "text": "The device blocks all policy until an administrator deletes both profiles"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune does not arbitrate between two profiles that set the same value differently. It reports a conflict for that setting, and the device applies whichever value arrives last, which makes behaviour unpredictable. The fix is to remove the duplicate setting from one profile or split assignments so only one profile targets the device.\n\nExam tip: A conflict is a design problem; resolve it by making one profile authoritative.",
    "source": "Manage and maintain devices using Microsoft Intune — Troubleshoot configuration profile and policy conflicts",
    "diagram": "policy-processing",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 121,
    "domain": "manage",
    "topic": "Device check-in interval",
    "stem": "An administrator changes a profile and wants to know how long a device may wait before it receives the change. What is the default check-in behaviour?",
    "options": [
      {
        "letter": "A",
        "text": "Devices check in on a schedule of roughly every 8 hours, and a manual sync forces an immediate check"
      },
      {
        "letter": "B",
        "text": "Devices only check in when the user restarts"
      },
      {
        "letter": "C",
        "text": "Devices check in every 5 minutes by default"
      },
      {
        "letter": "D",
        "text": "Devices never check in unless the profile is reassigned"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune devices check in periodically, with about eight hours between scheduled check-ins, and a manual sync from the Company Portal or admin center triggers an immediate policy refresh. Restart-only or five-minute intervals are not the default, and reassignment is not required for a device to receive changes.\n\nExam tip: When testing a policy change, sync the device instead of waiting for the schedule.",
    "source": "Manage and maintain devices using Microsoft Intune — Understand the troubleshooting workflow in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 122,
    "domain": "manage",
    "topic": "Group Policy analytics",
    "stem": "A company wants to know which of its existing Group Policy objects can be replaced by Intune settings before migrating. Which tool should they use?",
    "options": [
      {
        "letter": "A",
        "text": "Group Policy analytics, by importing a GPO XML export"
      },
      {
        "letter": "B",
        "text": "The Intune device compliance report"
      },
      {
        "letter": "C",
        "text": "Windows Update for Business reports"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Group Policy analytics imports an exported GPO and reports which settings have MDM equivalents, which are partially supported, and which are unsupported, which directly informs migration planning. The other reports cover compliance, updates, and provisioning rather than GPO equivalence.\n\nExam tip: Export the GPO, import it into analytics, then rebuild supported settings in the catalog.",
    "source": "Manage and maintain devices using Microsoft Intune — Analyze and migrate Group Policy using Group Policy analytics",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 123,
    "domain": "manage",
    "topic": "Profile not applying checklist",
    "stem": "Review the diagram. A configuration profile shows as assigned but a device never receives it. Which check should come first?",
    "options": [
      {
        "letter": "A",
        "text": "Confirm the device or user is in the assigned group and not in an exclusion or failing filter"
      },
      {
        "letter": "B",
        "text": "Reinstall Windows on the device"
      },
      {
        "letter": "C",
        "text": "Delete the Intune tenant"
      },
      {
        "letter": "D",
        "text": "Rotate the BitLocker key"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Most \"not applying\" cases are targeting problems: the object is not in the include group, is in an exclusion, or fails an assignment filter. Confirming effective assignment before touching the device avoids unnecessary remediation. Reimaging, tenant changes, and key rotation do not address delivery.\n\nExam tip: Assignment first, filter second, device sync third, logs last.",
    "source": "Manage and maintain devices using Microsoft Intune — Troubleshoot device configuration and policy application issues",
    "diagram": "policy-processing",
    "level": "medium",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 124,
    "domain": "manage",
    "topic": "Device restrictions profile",
    "stem": "A company must disable the camera and block USB storage on Windows laptops. Which profile type is designed for this?",
    "options": [
      {
        "letter": "A",
        "text": "Device restrictions"
      },
      {
        "letter": "B",
        "text": "Wi-Fi"
      },
      {
        "letter": "C",
        "text": "Email"
      },
      {
        "letter": "D",
        "text": "VPN"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device restrictions profiles contain platform-specific controls for hardware and features such as camera, USB, Bluetooth, and password rules. Wi-Fi, email, and VPN profiles configure connectivity rather than hardware restrictions.\n\nExam tip: Hardware and feature toggles live in device restrictions; granular OS settings live in the catalog.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "easy",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 125,
    "domain": "manage",
    "topic": "Kiosk profile configuration",
    "stem": "A retail store needs Windows devices that run only a point-of-sale app, with no access to the desktop. Which profile type should you use?",
    "options": [
      {
        "letter": "A",
        "text": "A kiosk profile with assigned access"
      },
      {
        "letter": "B",
        "text": "A device restrictions profile that hides Settings"
      },
      {
        "letter": "C",
        "text": "A compliance policy that requires encryption"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Kiosk profiles configure assigned access so the device runs a single app or a restricted set of apps in a locked experience. Hiding Settings is weaker and reversible, compliance evaluates state, and app protection protects data inside apps rather than locking the shell.\n\nExam tip: Locked-down shared devices equal kiosk or assigned access, not just restrictions.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 126,
    "domain": "manage",
    "topic": "Security baseline versus custom profile",
    "stem": "A security team wants Microsoft-recommended defaults for a broad set of Windows security settings, with the ability to adjust individual values. Which object should they deploy?",
    "options": [
      {
        "letter": "A",
        "text": "A security baseline that can be customised per setting"
      },
      {
        "letter": "B",
        "text": "A single custom OMA-URI profile"
      },
      {
        "letter": "C",
        "text": "A compliance policy"
      },
      {
        "letter": "D",
        "text": "An app configuration policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Security baselines package Microsoft-recommended values across many controls, and each setting can be reviewed and changed before deployment. A single custom profile cannot cover the breadth, compliance evaluates rather than configures, and app configuration policies configure applications.\n\nExam tip: Baselines give a defensible starting point; customise deliberately and document deviations.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 127,
    "domain": "manage",
    "topic": "Baseline version update",
    "stem": "Microsoft releases a new version of a security baseline. What happens to the existing baseline profile?",
    "options": [
      {
        "letter": "A",
        "text": "A new baseline instance is available to review and deploy, while the old profile remains until replaced"
      },
      {
        "letter": "B",
        "text": "The existing profile updates automatically with no review"
      },
      {
        "letter": "C",
        "text": "All devices are wiped and re-enrolled"
      },
      {
        "letter": "D",
        "text": "The baseline stops applying immediately"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Baseline versions are published as new instances so administrators can compare settings, accept or override changes, and then deploy the new version. Existing profiles do not silently change, devices are not wiped, and the old baseline keeps applying until it is replaced.\n\nExam tip: Baseline updates are a change-management event, not an automatic patch.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 128,
    "domain": "manage",
    "topic": "Baseline conflict with custom profile",
    "stem": "A security baseline and a custom configuration profile set the same Windows setting to different values. What should you expect?",
    "options": [
      {
        "letter": "A",
        "text": "A conflict is reported for that setting and the device may apply either value"
      },
      {
        "letter": "B",
        "text": "The baseline always wins because it is a Microsoft product"
      },
      {
        "letter": "C",
        "text": "The custom profile is automatically deleted"
      },
      {
        "letter": "D",
        "text": "The device becomes noncompliant but keeps both values"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Baselines are configuration profiles underneath, so the same conflict rules apply: two different values for one setting produce a conflict report and unpredictable effective state. Microsoft does not give baselines automatic precedence, profiles are not deleted, and compliance is a separate evaluation.\n\nExam tip: When you customise a baseline, remove the same setting from other profiles.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "security"
    ]
  },
  {
    "id": 129,
    "domain": "manage",
    "topic": "Firewall profile deployment",
    "stem": "A company must enable the Windows Defender Firewall for all profiles and allow a specific inbound port for a line-of-business app. Which Intune workload should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint security Firewall policy"
      },
      {
        "letter": "B",
        "text": "A compliance policy"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Endpoint security includes a Firewall workload that configures profile state, rules, and logging. Compliance only checks state, Wi-Fi configures wireless connectivity, and app protection governs app data rather than network ports.\n\nExam tip: Defender Firewall rules are endpoint security, not a generic device restriction.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 130,
    "domain": "manage",
    "topic": "Endpoint protection versus security baseline",
    "stem": "An administrator needs to configure Defender antivirus scan schedules and exclusions. Which workload is the right home for these settings?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint security antivirus policy"
      },
      {
        "letter": "B",
        "text": "A security baseline only"
      },
      {
        "letter": "C",
        "text": "A device restrictions profile"
      },
      {
        "letter": "D",
        "text": "A Conditional Access policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Antivirus policy in endpoint security exposes scan schedule, scan type, exclusions, and remediation actions. A baseline sets recommended security values but is not the place for operational scan configuration, device restrictions cover hardware and features, and Conditional Access controls access.\n\nExam tip: Baselines set posture; antivirus policy sets operational scanning behaviour.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 131,
    "domain": "manage",
    "topic": "Defender for Endpoint onboarding",
    "stem": "Windows devices must send endpoint detection and response signals to Microsoft Defender for Endpoint. Which Intune configuration enables this at scale?",
    "options": [
      {
        "letter": "A",
        "text": "An Endpoint detection and response policy that onboards devices automatically"
      },
      {
        "letter": "B",
        "text": "A compliance policy that requires antivirus"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with certificate authentication"
      },
      {
        "letter": "D",
        "text": "A device restrictions profile that blocks USB"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Endpoint detection and response policy in endpoint security carries the onboarding configuration and can onboard devices without a manually deployed script. Compliance checks Defender state but does not onboard, and the other profiles address connectivity or hardware.\n\nExam tip: Onboarding is a policy, not a one-off script, when Intune manages the device.",
    "source": "Protect devices using Microsoft Intune — Onboard devices to Microsoft Defender using Intune",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 132,
    "domain": "manage",
    "topic": "ASR rule modes",
    "stem": "A security team wants to measure how often an attack surface reduction rule would block activity without disrupting users. Which mode should they set?",
    "options": [
      {
        "letter": "A",
        "text": "Audit"
      },
      {
        "letter": "B",
        "text": "Block"
      },
      {
        "letter": "C",
        "text": "Warn"
      },
      {
        "letter": "D",
        "text": "Disabled"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Audit mode logs what the rule would have blocked, which is the standard way to assess impact before enforcement. Block prevents the activity, Warn prompts the user, and Disabled turns the rule off entirely. Review audit events for a representative period and scope the change to a pilot group before enforcing it.\n\nExam tip: Pilot ASR in audit, review events, then move to block.",
    "source": "Protect devices using Microsoft Intune — Configure Attack Surface Reduction rules using Microsoft Intune",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 133,
    "domain": "manage",
    "topic": "EDR block mode",
    "stem": "A company runs a third-party antivirus product but still wants Defender for Endpoint to block malicious behaviour. Which capability should they enable?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint detection and response in block mode"
      },
      {
        "letter": "B",
        "text": "A device restrictions profile"
      },
      {
        "letter": "C",
        "text": "A compliance grace period"
      },
      {
        "letter": "D",
        "text": "Windows Hello for Business"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "EDR block mode lets Defender for Endpoint remediate malicious artefacts even when a non-Microsoft antivirus is the primary engine, which closes the gap between detection and response. Device restrictions, compliance grace, and Hello address different controls.\n\nExam tip: Third-party AV plus Defender response equals EDR block mode.",
    "source": "Protect devices using Microsoft Intune — Configure Endpoint Detection and Response policies",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 134,
    "domain": "manage",
    "topic": "Tamper protection",
    "stem": "Users must not be able to turn off Defender antivirus or change its security settings locally. Which control enforces this?",
    "options": [
      {
        "letter": "A",
        "text": "Tamper protection"
      },
      {
        "letter": "B",
        "text": "A compliance policy"
      },
      {
        "letter": "C",
        "text": "An app protection policy"
      },
      {
        "letter": "D",
        "text": "A Wi-Fi profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Tamper protection prevents local changes to Defender security settings, including disabling real-time protection, and it is managed through the security baseline or Defender settings. Compliance reports state, app protection covers app data, and Wi-Fi is connectivity.\n\nExam tip: Tamper protection is the anti-tampering control; compliance only observes the result.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 135,
    "domain": "manage",
    "topic": "Defender scan schedule",
    "stem": "A company wants a full antivirus scan every Saturday at 02:00. Which settings should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Scan type, scheduled scan day, and time in the antivirus policy"
      },
      {
        "letter": "B",
        "text": "A compliance rule requiring antivirus"
      },
      {
        "letter": "C",
        "text": "A Conditional Access session control"
      },
      {
        "letter": "D",
        "text": "An app configuration policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Antivirus policy includes the scan type, schedule day, time, and related options such as randomising start time and checking signature freshness. A compliance rule only verifies antivirus presence, Conditional Access controls access, and app configuration configures apps.\n\nExam tip: Scheduling is operational configuration; do not confuse it with the compliance check.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 136,
    "domain": "manage",
    "topic": "Device risk score signal",
    "stem": "A compliance policy must fail devices that Defender for Endpoint rates as high risk. Which prerequisite matters most?",
    "options": [
      {
        "letter": "A",
        "text": "The device must be onboarded to Defender for Endpoint so the risk signal exists"
      },
      {
        "letter": "B",
        "text": "The device must have a Wi-Fi profile"
      },
      {
        "letter": "C",
        "text": "The user must have a Windows Hello PIN"
      },
      {
        "letter": "D",
        "text": "The device must be in a kiosk group"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The machine risk score in a compliance policy comes from Defender for Endpoint, so an unonboarded device has no meaningful signal. Wi-Fi, Hello, and kiosk configuration do not produce risk assessments. Without onboarding, the policy has no risk data and may report the device as compliant or not applicable.\n\nExam tip: Risk-based compliance depends on the Defender integration being healthy.",
    "source": "Protect devices using Microsoft Intune — Configure Endpoint Detection and Response policies",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 137,
    "domain": "manage",
    "topic": "ASR rule exclusions",
    "stem": "After enabling an ASR rule in block mode, a line-of-business app stops working. What is the safest immediate step?",
    "options": [
      {
        "letter": "A",
        "text": "Move the rule to audit for the affected group while you validate an exclusion"
      },
      {
        "letter": "B",
        "text": "Disable all ASR rules for the tenant"
      },
      {
        "letter": "C",
        "text": "Remove the app from Intune"
      },
      {
        "letter": "D",
        "text": "Turn off tamper protection"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Switching the rule to audit for the affected scope stops the disruption while preserving visibility, and then you can add a targeted exclusion or fix the app. Disabling every rule removes protection broadly, removing the app does not solve the block, and disabling tamper protection weakens the estate.\n\nExam tip: Use the narrowest scope and the least permissive mode that restores service.",
    "source": "Protect devices using Microsoft Intune — Configure Attack Surface Reduction rules using Microsoft Intune",
    "level": "hard",
    "tags": [
      "security",
      "troubleshooting"
    ]
  },
  {
    "id": 138,
    "domain": "manage",
    "topic": "Defender security intelligence updates",
    "stem": "An administrator must ensure antivirus definitions are current even when devices are offline for long periods. Which setting helps?",
    "options": [
      {
        "letter": "A",
        "text": "Security intelligence update channel and update interval in the antivirus policy"
      },
      {
        "letter": "B",
        "text": "A compliance policy with a grace period"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with a hidden SSID"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Antivirus policy controls the security intelligence update channel and interval, and it can fall back to Microsoft Update or a defined source when the device has been offline. Compliance grace periods and connectivity profiles do not refresh definitions.\n\nExam tip: Definition freshness is an antivirus policy setting, not a compliance rule.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 139,
    "domain": "manage",
    "topic": "Defender live response",
    "stem": "An analyst needs to run commands on a compromised endpoint to collect evidence and contain the threat. Which Defender for Endpoint capability provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Live response"
      },
      {
        "letter": "B",
        "text": "A compliance policy"
      },
      {
        "letter": "C",
        "text": "An Intune remote restart"
      },
      {
        "letter": "D",
        "text": "A Wi-Fi profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Live response opens a remote shell on the device so analysts can run supported commands, gather artefacts, and contain threats. Compliance policies evaluate state, restart reboots the device, and Wi-Fi configures connectivity.\n\nExam tip: Investigation shell equals live response; Intune remote actions are lifecycle tasks, not forensics.",
    "source": "Protect devices using Microsoft Intune — Investigate and respond to endpoint threats using Microsoft Defender",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 140,
    "domain": "manage",
    "topic": "Defender device groups and RBAC",
    "stem": "A security team must see only the devices in its region inside the Defender portal. Which mechanism scopes visibility?",
    "options": [
      {
        "letter": "A",
        "text": "Device groups in Defender for Endpoint combined with role-based access control"
      },
      {
        "letter": "B",
        "text": "Intune scope tags only"
      },
      {
        "letter": "C",
        "text": "Conditional Access named locations"
      },
      {
        "letter": "D",
        "text": "Autopilot group tags"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Endpoint uses device groups plus RBAC roles to scope which devices and actions a security team can access. Intune scope tags govern Intune objects rather than the Defender portal, named locations are a Conditional Access condition, and group tags target Autopilot deployment.\n\nExam tip: Portal visibility in Defender is Defender RBAC plus device groups, not Intune RBAC.",
    "source": "Protect devices using Microsoft Intune — Monitor and triage incidents in the Microsoft Defender portal",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 141,
    "domain": "manage",
    "topic": "BitLocker silent enablement",
    "stem": "Company laptops must encrypt automatically at first sign-in without prompting the user, using TPM-only protection. Which two conditions are required? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A BitLocker disk encryption policy that enables silent encryption"
      },
      {
        "letter": "B",
        "text": "TPM 2.0 present and ready on the device"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with EAP-TLS"
      },
      {
        "letter": "D",
        "text": "A kiosk profile"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Silent encryption needs the disk encryption policy to allow it and a usable TPM so Windows can protect the key without user interaction. Wi-Fi and kiosk profiles have no bearing on encryption. Devices without a usable TPM fall back to a user prompt or stay unencrypted until the TPM is prepared.\n\nExam tip: Silent BitLocker equals policy plus TPM; without a ready TPM the user is prompted.",
    "source": "Protect devices using Microsoft Intune — Configure BitLocker policies using Microsoft Intune",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 142,
    "domain": "manage",
    "topic": "BitLocker recovery key escrow",
    "stem": "A user replaces a motherboard and needs the BitLocker recovery key. Where should the key be stored so the help desk can retrieve it?",
    "options": [
      {
        "letter": "A",
        "text": "Escrowed to Microsoft Entra ID or Active Directory through policy"
      },
      {
        "letter": "B",
        "text": "In the user's OneDrive folder"
      },
      {
        "letter": "C",
        "text": "In the Autopilot profile"
      },
      {
        "letter": "D",
        "text": "In the Wi-Fi profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "BitLocker policy can escrow recovery information to Entra ID or AD, where authorised administrators can retrieve it. OneDrive is user-accessible storage, and Autopilot and Wi-Fi profiles have no key escrow function. The policy must be in place before encryption runs, because the key is escrowed when it is created.\n\nExam tip: Key escrow is a policy decision made before the device encrypts.",
    "source": "Protect devices using Microsoft Intune — Manage BitLocker recovery keys and user self-service options",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 143,
    "domain": "manage",
    "topic": "BitLocker key rotation",
    "stem": "A recovery key may have been exposed during a support call. Which Intune action should you run?",
    "options": [
      {
        "letter": "A",
        "text": "Rotate the BitLocker recovery key"
      },
      {
        "letter": "B",
        "text": "Sync the device"
      },
      {
        "letter": "C",
        "text": "Restart the device"
      },
      {
        "letter": "D",
        "text": "Retire the device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The rotate action generates a new recovery key and escrows it, which invalidates the exposed key. Sync refreshes policy, restart reboots, and retire removes management without changing the key. After rotation the old key is invalid, so update any support notes or tickets that reference it.\n\nExam tip: Exposure means rotation, not deletion of the device record.",
    "source": "Protect devices using Microsoft Intune — Manage BitLocker recovery keys and user self-service options",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 144,
    "domain": "manage",
    "topic": "BitLocker TPM plus PIN",
    "stem": "A high-security group must require a PIN at startup in addition to the TPM. Which BitLocker setting should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Require additional authentication at startup with TPM and PIN"
      },
      {
        "letter": "B",
        "text": "Allow BitLocker without a compatible TPM"
      },
      {
        "letter": "C",
        "text": "Enable silent encryption"
      },
      {
        "letter": "D",
        "text": "Store recovery information in Entra ID"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Requiring additional authentication at startup with TPM and PIN adds a pre-boot PIN, which strengthens protection against attacks that can use the TPM alone. Allowing BitLocker without a TPM weakens the design, silent encryption removes prompts, and escrow only stores the recovery key.\n\nExam tip: TPM-only is transparent; TPM plus PIN adds a pre-boot secret.",
    "source": "Protect devices using Microsoft Intune — Configure BitLocker policies using Microsoft Intune",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 145,
    "domain": "manage",
    "topic": "Encryption report",
    "stem": "An administrator needs a tenant-wide view of which devices are encrypted and which are not. Where should they look?",
    "options": [
      {
        "letter": "A",
        "text": "The Encryption report in Intune"
      },
      {
        "letter": "B",
        "text": "The Autopilot deployment report"
      },
      {
        "letter": "C",
        "text": "The Wi-Fi profile status"
      },
      {
        "letter": "D",
        "text": "The app install report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Encryption report summarises BitLocker and other encryption state across managed devices, including recovery key escrow status. Autopilot reports provisioning, Wi-Fi reports connectivity, and app reports installation.\n\nExam tip: Encryption posture is its own report; do not infer it from compliance alone.",
    "source": "Protect devices using Microsoft Intune — Monitor BitLocker compliance and encryption status in Microsoft Intune",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 146,
    "domain": "manage",
    "topic": "Windows servicing channels",
    "stem": "A device must stay on a fixed feature version for five years because of a certified line-of-business app. Which servicing option fits?",
    "options": [
      {
        "letter": "A",
        "text": "Windows LTSC"
      },
      {
        "letter": "B",
        "text": "General Availability Channel with a 30-day deferral"
      },
      {
        "letter": "C",
        "text": "Windows Insider Preview"
      },
      {
        "letter": "D",
        "text": "Windows 365 Business"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Long-Term Servicing Channel releases are supported for extended periods with a fixed feature set, which suits appliances and certified apps that cannot take annual feature updates. The General Availability Channel still receives feature updates, Insider is pre-release, and Windows 365 is a delivery model rather than a servicing channel.\n\nExam tip: Fixed feature set for years equals LTSC; stay current equals General Availability Channel.",
    "source": "Manage and maintain devices using Microsoft Intune — Manage Windows servicing channels for enterprise devices",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 147,
    "domain": "manage",
    "topic": "Update ring deferral",
    "stem": "Review the diagram. A pilot ring should receive quality updates two days after release, and the broad ring after nine days. Which update ring setting controls this?",
    "options": [
      {
        "letter": "A",
        "text": "Quality update deferral period"
      },
      {
        "letter": "B",
        "text": "Feature update deferral period"
      },
      {
        "letter": "C",
        "text": "Active hours"
      },
      {
        "letter": "D",
        "text": "Restart grace period"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The quality update deferral period delays monthly security and reliability updates by the configured number of days. Feature update deferral applies to new Windows versions, active hours protect working time, and the grace period controls restart postponement.\n\nExam tip: Monthly patches equal quality updates; new Windows versions equal feature updates.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "diagram": "update-ring",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 148,
    "domain": "manage",
    "topic": "Update deadline enforcement",
    "stem": "Users postpone restarts indefinitely and devices remain unpatched. Which update ring setting forces installation by a date?",
    "options": [
      {
        "letter": "A",
        "text": "Deadline for quality updates with a grace period"
      },
      {
        "letter": "B",
        "text": "Active hours only"
      },
      {
        "letter": "C",
        "text": "Feature update deferral only"
      },
      {
        "letter": "D",
        "text": "A compliance policy with no actions"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The deadline sets a maximum number of days before an update must install and the device restarts, and the grace period defines how long the user may postpone before the deadline applies. Active hours only protect working time, feature deferral delays versions, and a compliance policy without actions does not install anything.\n\nExam tip: Deadline enforces; deferral delays; active hours only shift the restart window.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 149,
    "domain": "manage",
    "topic": "Active hours configuration",
    "stem": "Users complain that devices restart during the working day. Which update setting should you adjust?",
    "options": [
      {
        "letter": "A",
        "text": "Active hours"
      },
      {
        "letter": "B",
        "text": "Quality update deferral"
      },
      {
        "letter": "C",
        "text": "Feature update deferral"
      },
      {
        "letter": "D",
        "text": "Delivery optimisation"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Active hours define the window when Windows should not restart for updates, so aligning them with the working day prevents daytime reboots. Deferrals delay installation, delivery optimisation controls content sharing, and neither prevents a badly timed restart.\n\nExam tip: Restart timing complaints equal active hours, not deferral.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 150,
    "domain": "manage",
    "topic": "Feature update policy rollout",
    "stem": "An administrator must make Windows 11 24H2 available to a pilot group on a specific date and require installation within 14 days. Which policy type provides this control?",
    "options": [
      {
        "letter": "A",
        "text": "A feature update policy with a rollout schedule and deadline"
      },
      {
        "letter": "B",
        "text": "A quality update ring with active hours"
      },
      {
        "letter": "C",
        "text": "A device restrictions profile"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Feature update policies target a Windows version and support a rollout date plus a deadline, which is exactly the control described. Quality update rings patch the current build, device restrictions control features, and app protection governs app data.\n\nExam tip: Version targeting with a schedule equals feature update policy.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 151,
    "domain": "manage",
    "topic": "Windows Autopatch eligibility",
    "stem": "A company wants Microsoft to manage update rings automatically with minimal administrative effort. Which licensing requirement matters?",
    "options": [
      {
        "letter": "A",
        "text": "Windows Enterprise E3 or E5 (or Microsoft 365 E3/E5) for the users whose devices are managed"
      },
      {
        "letter": "B",
        "text": "Any Windows 10 Pro licence"
      },
      {
        "letter": "C",
        "text": "A Microsoft 365 Business Basic licence"
      },
      {
        "letter": "D",
        "text": "An Azure subscription only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows Autopatch is included with Windows Enterprise E3/E5 and Microsoft 365 E3/E5 licensing, which is why eligibility is checked before enrolment. Windows Pro alone, Business Basic, and a bare Azure subscription do not include the service.\n\nExam tip: Autopatch is an Enterprise benefit; check licensing before designing rings.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement Windows Autopatch for automated update management",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 152,
    "domain": "manage",
    "topic": "Autopatch deployment rings",
    "stem": "Windows Autopatch organises devices into rings for staged rollout. Which ring receives updates first?",
    "options": [
      {
        "letter": "A",
        "text": "The test ring"
      },
      {
        "letter": "B",
        "text": "The broad ring"
      },
      {
        "letter": "C",
        "text": "The fast ring"
      },
      {
        "letter": "D",
        "text": "The first ring"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopatch creates test, first, fast, and broad rings, with the test ring receiving updates first and the broad ring last, which limits blast radius. Broad is the largest and slowest group, fast follows first, and first follows test.\n\nExam tip: Order the rings test, first, fast, broad; the smallest and earliest is the test ring.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement Windows Autopatch for automated update management",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 153,
    "domain": "manage",
    "topic": "Hotpatch requirements",
    "stem": "Review the diagram. A company wants monthly security fixes without restarting devices. Which requirement must be met for Windows Hotpatch?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 11 Enterprise 24H2 or later with virtualization-based security enabled"
      },
      {
        "letter": "B",
        "text": "Windows 10 Pro 22H2 with BitLocker disabled"
      },
      {
        "letter": "C",
        "text": "Windows Server 2019 with WSUS"
      },
      {
        "letter": "D",
        "text": "Windows 11 Home with a local account"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hotpatch is available on supported Windows 11 Enterprise builds, currently 24H2 and later, and depends on virtualization-based security. It delivers monthly updates without a restart, with a quarterly baseline that does require one. Older Windows 10 builds, server editions, and Home editions do not meet the requirements.\n\nExam tip: Hotpatch equals Enterprise, 24H2+, VBS on; the quarterly baseline still reboots.",
    "source": "Manage and maintain devices using Microsoft Intune — Configure and manage Hotpatch with Microsoft Intune",
    "diagram": "update-ring",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 154,
    "domain": "manage",
    "topic": "Update compliance reporting",
    "stem": "An administrator must show which devices are missing the latest quality update. Which report should they use?",
    "options": [
      {
        "letter": "A",
        "text": "The Windows Update compliance report"
      },
      {
        "letter": "B",
        "text": "The Autopilot deployment report"
      },
      {
        "letter": "C",
        "text": "The app install report"
      },
      {
        "letter": "D",
        "text": "The encryption report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows Update compliance reports show update state per device, including devices that are not current or have failed updates. Autopilot covers provisioning, app reports cover installation, and encryption covers BitLocker.\n\nExam tip: Patching questions end in the update compliance report, not in device inventory.",
    "source": "Manage and maintain devices using Microsoft Intune — Monitor Windows Update rings and feature update deployments",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 155,
    "domain": "manage",
    "topic": "Pausing quality updates",
    "stem": "A critical application breaks after a monthly update, and the team needs time to test a fix. Which update ring option provides temporary relief?",
    "options": [
      {
        "letter": "A",
        "text": "Pause quality updates for a defined number of days"
      },
      {
        "letter": "B",
        "text": "Set active hours to 24 hours"
      },
      {
        "letter": "C",
        "text": "Disable the Windows Update service by script"
      },
      {
        "letter": "D",
        "text": "Remove the device from Intune"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The pause setting stops quality updates from installing for a limited period, which gives the team time to validate. Active hours only shift restart timing, disabling the update service is unsupported and unmanaged, and removing the device from Intune stops all management.\n\nExam tip: Pause is temporary and bounded; use it for a known bad update, not as a strategy.",
    "source": "Manage and maintain devices using Microsoft Intune — Troubleshoot update deployment and compliance issues",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 156,
    "domain": "manage",
    "topic": "Driver update policy",
    "stem": "A manufacturer ships a display driver that fixes flickering on a laptop model. The fix should reach only that model. Which approach is best?",
    "options": [
      {
        "letter": "A",
        "text": "A driver update policy or ring targeted to a group containing that model, with a filter"
      },
      {
        "letter": "B",
        "text": "A feature update policy for all Windows devices"
      },
      {
        "letter": "C",
        "text": "A compliance policy requiring a minimum OS version"
      },
      {
        "letter": "D",
        "text": "A Wi-Fi profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Driver updates can be approved and targeted through Windows update policies, and scoping the assignment to the affected model limits risk. Feature update policies move Windows versions, compliance checks state, and Wi-Fi configures connectivity.\n\nExam tip: Hardware-specific fixes should be targeted by model, not deployed to the estate.",
    "source": "Manage and maintain devices using Microsoft Intune — Understand the Windows servicing model and update types",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 157,
    "domain": "manage",
    "topic": "Update failure investigation",
    "stem": "Devices repeatedly fail to install a quality update. Which two sources are most useful? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "The Windows Update compliance report and per-device update status"
      },
      {
        "letter": "B",
        "text": "The Windows Update event logs and the UpdateHandler logs on the device"
      },
      {
        "letter": "C",
        "text": "The Autopilot hardware hash"
      },
      {
        "letter": "D",
        "text": "The Wi-Fi certificate profile"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The compliance report identifies which devices fail and with what status, and the local Windows Update logs provide the error detail needed to fix it. Hashes and Wi-Fi certificates do not explain update installation failures.\n\nExam tip: Start with the report to find the pattern, then read logs on one representative device.",
    "source": "Manage and maintain devices using Microsoft Intune — Troubleshoot update deployment and compliance issues",
    "level": "hard",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 158,
    "domain": "manage",
    "topic": "Delivery Optimization",
    "stem": "Branch offices have limited internet bandwidth, and many devices download the same update. Which feature reduces WAN usage?",
    "options": [
      {
        "letter": "A",
        "text": "Delivery Optimization with peer-to-peer caching"
      },
      {
        "letter": "B",
        "text": "Active hours"
      },
      {
        "letter": "C",
        "text": "A feature update deadline"
      },
      {
        "letter": "D",
        "text": "A compliance grace period"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Delivery Optimization lets devices share update content with peers on the local network, which reduces repeated downloads over the WAN. Active hours, deadlines, and grace periods affect timing rather than bandwidth.\n\nExam tip: Bandwidth problems point to Delivery Optimization; timing problems point to rings.",
    "source": "Manage and maintain devices using Microsoft Intune — Understand the Windows servicing model and update types",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 159,
    "domain": "manage",
    "topic": "WSUS versus Windows Update for Business",
    "stem": "A company is moving update management to the cloud. Which two statements are correct? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Windows Update for Business is cloud-managed through Intune"
      },
      {
        "letter": "B",
        "text": "WSUS requires on-premises infrastructure and is not the target for cloud-managed devices"
      },
      {
        "letter": "C",
        "text": "WSUS is required for Autopilot devices"
      },
      {
        "letter": "D",
        "text": "Windows Update for Business requires Configuration Manager"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Windows Update for Business delivers update policy from Intune in the cloud, while WSUS depends on on-premises servers. Autopilot devices do not need WSUS, and Configuration Manager is optional rather than required for WUfB.\n\nExam tip: Cloud-managed updates equal WUfB; on-premises update servers equal WSUS.",
    "source": "Manage and maintain devices using Microsoft Intune — Understand the Windows servicing model and update types",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 160,
    "domain": "manage",
    "topic": "Conflicting update rings",
    "stem": "A device is a member of two update rings with different deferral values. What is the result?",
    "options": [
      {
        "letter": "A",
        "text": "Conflicting settings are reported and the effective behaviour is unpredictable until one ring is removed"
      },
      {
        "letter": "B",
        "text": "The ring with the longer deferral is ignored automatically"
      },
      {
        "letter": "C",
        "text": "Both deferrals are added together"
      },
      {
        "letter": "D",
        "text": "The device is removed from Intune"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Update rings are configuration objects, so two rings with different values for the same setting create a conflict and an unpredictable effective policy. Intune does not add or prioritise values, and the device stays managed.\n\nExam tip: One device, one update ring; use groups and exclusions to enforce it.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "level": "hard",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 161,
    "domain": "manage",
    "topic": "Endpoint analytics startup score",
    "stem": "Users report slow boot times, and the team wants a measured baseline before changing anything. Which Endpoint analytics metric fits?",
    "options": [
      {
        "letter": "A",
        "text": "The startup score and startup performance details"
      },
      {
        "letter": "B",
        "text": "The encryption report"
      },
      {
        "letter": "C",
        "text": "The app protection status report"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Endpoint analytics scores startup performance and identifies devices, apps, and processes that slow boot, which gives a baseline for improvement. Encryption, app protection, and Autopilot reports answer different questions.\n\nExam tip: Performance questions belong to Endpoint analytics, not to compliance.",
    "source": "Automate and optimize endpoint management using Microsoft Intune — Use Endpoint Analytics to optimize device performance",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 162,
    "domain": "manage",
    "topic": "Proactive remediation components",
    "stem": "A remediation must detect a missing registry value and then create it. Which two scripts are required? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A detection script that reports the problem"
      },
      {
        "letter": "B",
        "text": "A remediation script that fixes it"
      },
      {
        "letter": "C",
        "text": "A compliance policy that blocks access"
      },
      {
        "letter": "D",
        "text": "A Wi-Fi profile"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A remediation package pairs a detection script, which returns a non-zero exit code when the device is unhealthy, with a remediation script that corrects the condition. Compliance and Wi-Fi do not run scripts. Keep the detection script fast and read-only, and make the remediation idempotent so repeated runs are safe.\n\nExam tip: Detection decides whether to act; remediation acts. Both are required.",
    "source": "Manage and maintain devices using Microsoft Intune — Use Remediations to fix common device issues",
    "level": "medium",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 163,
    "domain": "manage",
    "topic": "Remediation script execution context",
    "stem": "A remediation script must modify a machine-wide registry key. In which context does it run by default?",
    "options": [
      {
        "letter": "A",
        "text": "As SYSTEM in a 64-bit PowerShell host"
      },
      {
        "letter": "B",
        "text": "As the signed-in user in a 32-bit host"
      },
      {
        "letter": "C",
        "text": "As a domain administrator over the network"
      },
      {
        "letter": "D",
        "text": "As a restricted service account with no local rights"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Remediation scripts run as SYSTEM in a 64-bit PowerShell host by default, which allows machine-wide changes without a user signed in. They do not run as the interactive user, do not use domain admin credentials, and are not restricted from local changes.\n\nExam tip: SYSTEM context means HKCU assumptions will fail; target HKLM deliberately.",
    "source": "Manage and maintain devices using Microsoft Intune — Use Remediations to fix common device issues",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 164,
    "domain": "manage",
    "topic": "Remediation run now",
    "stem": "A remediation is scheduled daily, but a support call needs it applied immediately to one device. Which action should the technician use?",
    "options": [
      {
        "letter": "A",
        "text": "Run remediation on the device from the device overview"
      },
      {
        "letter": "B",
        "text": "Change the schedule to hourly for the whole tenant"
      },
      {
        "letter": "C",
        "text": "Restart the device"
      },
      {
        "letter": "D",
        "text": "Retire the device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune allows an on-demand run of a remediation against a single device, which is ideal during a support call. Changing the tenant schedule affects everyone, restarting does not trigger the script, and retiring removes management.\n\nExam tip: On-demand remediation exists so you do not have to reshape the schedule.",
    "source": "Manage and maintain devices using Microsoft Intune — Use Remediations to fix common device issues",
    "level": "medium",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 165,
    "domain": "manage",
    "topic": "Policy health report",
    "stem": "Review the diagram. An administrator needs to see how many devices succeeded, failed, or conflicted for a specific configuration profile. Which report fits?",
    "options": [
      {
        "letter": "A",
        "text": "The profile's device status or policy health report"
      },
      {
        "letter": "B",
        "text": "The Windows Update compliance report"
      },
      {
        "letter": "C",
        "text": "The encryption report"
      },
      {
        "letter": "D",
        "text": "The app protection report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Each configuration profile exposes per-device status with success, error, conflict, and not-applicable counts, and the policy health view aggregates this. Update, encryption, and app protection reports cover other workloads.\n\nExam tip: Profile-level success and conflict counts are the first stop for policy delivery issues.",
    "source": "Manage and maintain devices using Microsoft Intune — View device and policy health in the Intune admin center",
    "diagram": "policy-processing",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 166,
    "domain": "manage",
    "topic": "Compliance reporting export",
    "stem": "A compliance manager needs a recurring export of device compliance data for an audit. Which approach is supported?",
    "options": [
      {
        "letter": "A",
        "text": "Use Intune reporting or the Graph API export jobs to retrieve the data on a schedule"
      },
      {
        "letter": "B",
        "text": "Take screenshots of the console each month"
      },
      {
        "letter": "C",
        "text": "Ask users to email their compliance status"
      },
      {
        "letter": "D",
        "text": "Read the Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune reports and the Graph reporting API can export data programmatically, which supports scheduled audit evidence. Screenshots and user emails are not reliable or complete, and Autopilot reports do not contain compliance state.\n\nExam tip: Audit evidence should come from an export, not from manual console captures.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Export, schedule, and share reporting data securely",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 167,
    "domain": "manage",
    "topic": "Diagnostic settings to Log Analytics",
    "stem": "An operations team wants Intune audit and operational logs in a central SIEM. Which Intune feature streams them?",
    "options": [
      {
        "letter": "A",
        "text": "Diagnostic settings that send logs to Log Analytics, Event Hubs, or a storage account"
      },
      {
        "letter": "B",
        "text": "A compliance policy with a grace period"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with EAP-TLS"
      },
      {
        "letter": "D",
        "text": "An app configuration policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Diagnostic settings route Intune logs to Azure destinations, including Log Analytics and Event Hubs, where a SIEM can consume them. Compliance, Wi-Fi, and app configuration do not export platform logs. Choose the destination that matches your retention and query needs; Event Hubs suits streaming to a SIEM.\n\nExam tip: Central logging equals diagnostic settings, not a report export.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Monitor tenant health and Intune service communications",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 168,
    "domain": "manage",
    "topic": "Intune service health",
    "stem": "Users report that policy changes are not arriving, and the administrator suspects a service incident. Where should they check first?",
    "options": [
      {
        "letter": "A",
        "text": "The Intune service health page in the Microsoft 365 admin center"
      },
      {
        "letter": "B",
        "text": "The device's Wi-Fi settings"
      },
      {
        "letter": "C",
        "text": "The Autopilot hardware hash"
      },
      {
        "letter": "D",
        "text": "The app protection report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Service health publishes active incidents and advisories for Intune and related services, which confirms whether the problem is platform-wide. Device settings, hashes, and app protection reports describe the device rather than the service.\n\nExam tip: Check service health before deep device troubleshooting when many users are affected.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Monitor tenant health and Intune service communications",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 169,
    "domain": "manage",
    "topic": "Tenant status connectors",
    "stem": "An administrator wants to confirm that the Intune connectors for services such as Exchange and Teams are healthy. Where is this shown?",
    "options": [
      {
        "letter": "A",
        "text": "The Tenant status page in the Intune admin center"
      },
      {
        "letter": "B",
        "text": "The device compliance report"
      },
      {
        "letter": "C",
        "text": "The Windows Update compliance report"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Tenant status page shows connector health and service status for integrated workloads, which is where a broken connector surfaces. Device, update, and Autopilot reports describe endpoints rather than service connectors.\n\nExam tip: Connector problems affect many devices at once; tenant status is the fastest signal.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Monitor tenant health and Intune service communications",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 170,
    "domain": "manage",
    "topic": "Intune audit logs",
    "stem": "An administrator must find out who deleted a configuration profile last week. Which log should they review?",
    "options": [
      {
        "letter": "A",
        "text": "Intune audit logs"
      },
      {
        "letter": "B",
        "text": "The device's local event log"
      },
      {
        "letter": "C",
        "text": "The Windows Update compliance report"
      },
      {
        "letter": "D",
        "text": "The Wi-Fi profile status"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune audit logs record administrative actions such as creating, changing, and deleting objects, including the actor and time. Local device logs, update reports, and Wi-Fi status do not record console actions. Audit logs also capture app assignments and role changes, so they support both security and change investigations.\n\nExam tip: \"Who changed what in Intune\" is an audit log question.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Audit admin actions and monitor configuration changes",
    "level": "medium",
    "tags": [
      "intune",
      "security"
    ]
  },
  {
    "id": 171,
    "domain": "manage",
    "topic": "Audit log retention and export",
    "stem": "An auditor needs Intune audit events older than the console retains. Which two options help? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Export audit logs to a storage account or Log Analytics through diagnostic settings"
      },
      {
        "letter": "B",
        "text": "Use the Graph API to retrieve and archive audit events"
      },
      {
        "letter": "C",
        "text": "Rely on device event logs"
      },
      {
        "letter": "D",
        "text": "Ask Microsoft support to restore deleted events"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Diagnostic settings can stream audit data to durable storage, and the Graph API can retrieve audit events for archiving. Device event logs do not contain admin actions, and support does not restore tenant audit history on request.\n\nExam tip: If retention matters, stream or export before the console window closes.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Audit admin actions and monitor configuration changes",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 172,
    "domain": "manage",
    "topic": "Sync remote action",
    "stem": "A user reports that a newly assigned app has not appeared. The administrator has confirmed the assignment. Which remote action should they run first?",
    "options": [
      {
        "letter": "A",
        "text": "Sync"
      },
      {
        "letter": "B",
        "text": "Wipe"
      },
      {
        "letter": "C",
        "text": "Retire"
      },
      {
        "letter": "D",
        "text": "Remote lock"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Sync tells the device to check in immediately and pull pending policy and app assignments, which resolves most delivery delays without disruption. Wipe and retire are destructive lifecycle actions, and remote lock only locks the screen.\n\nExam tip: Sync is the least invasive action and the right first step for delivery lag.",
    "source": "Manage and maintain devices using Microsoft Intune — Understand the troubleshooting workflow in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 173,
    "domain": "manage",
    "topic": "Restart remote action",
    "stem": "A device is stuck with pending updates that require a reboot, and the user is unavailable. Which action should the administrator use?",
    "options": [
      {
        "letter": "A",
        "text": "Restart"
      },
      {
        "letter": "B",
        "text": "Retire"
      },
      {
        "letter": "C",
        "text": "Wipe"
      },
      {
        "letter": "D",
        "text": "Reset passcode"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The restart action reboots the device remotely so pending updates can finish. Retire removes management, wipe erases the device, and reset passcode changes a local credential rather than rebooting. Warn the user first where possible, because an unexpected restart can discard unsaved work.\n\nExam tip: Restart is for pending reboots; it is not a reset.",
    "source": "Manage and maintain devices using Microsoft Intune — View device and policy health in the Intune admin center",
    "level": "medium",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 174,
    "domain": "manage",
    "topic": "Collect diagnostics action",
    "stem": "A Windows device is failing policy checks, and the support team needs logs without interrupting the user. Which action fits?",
    "options": [
      {
        "letter": "A",
        "text": "Collect diagnostics"
      },
      {
        "letter": "B",
        "text": "Remote lock"
      },
      {
        "letter": "C",
        "text": "Wipe"
      },
      {
        "letter": "D",
        "text": "Retire"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Collect diagnostics silently gathers registry keys, MDM event logs, and system information into a package that can be downloaded from the device record. Remote lock interrupts the user, and wipe and retire are destructive.\n\nExam tip: Silent log collection equals Collect diagnostics; it is the support-friendly option.",
    "source": "Manage and maintain devices using Microsoft Intune — Use logs and diagnostics to investigate device issues",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 175,
    "domain": "manage",
    "topic": "Remote lock action",
    "stem": "Review the diagram. A laptop was left in a taxi, and the company wants to lock the screen immediately without erasing data. Which action should they use?",
    "options": [
      {
        "letter": "A",
        "text": "Remote lock"
      },
      {
        "letter": "B",
        "text": "Wipe"
      },
      {
        "letter": "C",
        "text": "Retire"
      },
      {
        "letter": "D",
        "text": "Fresh Start"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Remote lock locks the device and requires the existing passcode or PIN to unlock, which protects data without destroying it. Wipe and Fresh Start erase or rebuild, and retire removes management without locking the device.\n\nExam tip: Lost device plus keep data equals remote lock; data exposure risk may justify wipe.",
    "source": "Manage and maintain devices using Microsoft Intune — View device and policy health in the Intune admin center",
    "diagram": "remote-actions",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 176,
    "domain": "manage",
    "topic": "Wipe versus retire decision",
    "stem": "Review the diagram. A departing employee returns a company laptop that will be reissued to a new starter. Which action should the administrator run?",
    "options": [
      {
        "letter": "A",
        "text": "Wipe, to remove all data and return the device to a clean state"
      },
      {
        "letter": "B",
        "text": "Retire, to remove management and keep the existing user profile"
      },
      {
        "letter": "C",
        "text": "Remote lock, to secure the device until reassignment"
      },
      {
        "letter": "D",
        "text": "Delete the record, to remove the device from Intune"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A device moving to a new user should be wiped so the previous user's data, apps, and settings are removed. Retire leaves user data in place, remote lock only locks the screen, and deleting the record removes management data without cleaning the disk.\n\nExam tip: Reissue equals wipe; leaving the organisation with a personal device equals retire.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "diagram": "remote-actions",
    "level": "hard",
    "tags": [
      "devices",
      "security"
    ]
  },
  {
    "id": 177,
    "domain": "manage",
    "topic": "Fresh Start action",
    "stem": "A device has accumulated OEM trial software and a corrupted Windows install, but the user's files must be preserved. Which action fits best?",
    "options": [
      {
        "letter": "A",
        "text": "Fresh Start"
      },
      {
        "letter": "B",
        "text": "Wipe"
      },
      {
        "letter": "C",
        "text": "Retire"
      },
      {
        "letter": "D",
        "text": "Remote lock"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Fresh Start reinstalls Windows and removes OEM-installed apps while preserving user data, which addresses both the corruption and the unwanted software. Wipe removes user data, retire keeps the corrupted install, and remote lock does nothing to the OS.\n\nExam tip: Keep user data but rebuild Windows equals Fresh Start, not wipe.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 178,
    "domain": "manage",
    "topic": "Delete device record",
    "stem": "An administrator deletes a device record from Intune. What is the effect on the physical device?",
    "options": [
      {
        "letter": "A",
        "text": "Management data is removed, but the device is not wiped or remotely changed"
      },
      {
        "letter": "B",
        "text": "The device is factory reset immediately"
      },
      {
        "letter": "C",
        "text": "Company data is selectively wiped"
      },
      {
        "letter": "D",
        "text": "The device is locked until it checks in"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Deleting the record removes the Intune object and its management history; it does not send a wipe or selective wipe to the device. If the device is still Entra joined and automatic enrolment applies, it may re-enrol and reappear. Use retire or wipe when the intent is to remove corporate data, and keep delete for records that are no longer needed.\n\nExam tip: Delete is a record-keeping action, not a security action.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 179,
    "domain": "manage",
    "topic": "Bulk device actions",
    "stem": "Review the diagram. A company is retiring 60 laptops at once. Which approach reduces repetitive work?",
    "options": [
      {
        "letter": "A",
        "text": "Select the devices and run a bulk device action"
      },
      {
        "letter": "B",
        "text": "Open each device and run the action individually"
      },
      {
        "letter": "C",
        "text": "Delete the users who own the devices"
      },
      {
        "letter": "D",
        "text": "Disable the Intune connector"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune supports selecting multiple devices and running a bulk action such as retire, wipe, or reset, with a job that can be monitored. Individual actions do not scale, deleting users is destructive and unrelated, and disabling the connector breaks management.\n\nExam tip: Lifecycle at scale equals bulk actions plus a monitored job.",
    "source": "Manage and maintain devices using Microsoft Intune — Retire and reset devices using Microsoft Intune",
    "diagram": "device-lifecycle",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 180,
    "domain": "manage",
    "topic": "Remote Help capabilities",
    "stem": "A support agent needs to view the user's screen, request control, and elevate an app during a call. Which two capabilities does Remote Help provide? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Screen sharing with a request for control"
      },
      {
        "letter": "B",
        "text": "Elevation of an application during the session"
      },
      {
        "letter": "C",
        "text": "Automatic BitLocker key rotation"
      },
      {
        "letter": "D",
        "text": "Autopilot profile assignment"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Remote Help, part of the Intune Suite, provides attended remote assistance with screen sharing, control requests, chat, and the ability to elevate an app when policy allows. BitLocker rotation and Autopilot assignment are separate Intune actions.\n\nExam tip: Remote Help is attended support; unattended device lifecycle actions are separate.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Understand Remote Help and its role in end-user support",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 181,
    "domain": "manage",
    "topic": "Remote Help permissions",
    "stem": "A help desk agent can start Remote Help sessions but cannot elevate apps. Which control governs this?",
    "options": [
      {
        "letter": "A",
        "text": "The Remote Help role permissions assigned to the agent"
      },
      {
        "letter": "B",
        "text": "The device's Wi-Fi profile"
      },
      {
        "letter": "C",
        "text": "The Autopilot group tag"
      },
      {
        "letter": "D",
        "text": "The compliance grace period"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Remote Help actions are governed by role-based permissions, so the agent's role determines whether elevation is allowed in a session. Wi-Fi, group tags, and compliance timing do not grant session capabilities. Review role membership regularly, because session capabilities change as soon as a role assignment changes.\n\nExam tip: Session capabilities follow RBAC; grant elevation deliberately.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Configure and deploy Remote Help with Microsoft Intune",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 182,
    "domain": "manage",
    "topic": "Endpoint Privilege Management",
    "stem": "Standard users must be able to run one approved finance application as administrator without being made local admins. Which Intune Suite feature fits?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint Privilege Management with an elevation rule for that app"
      },
      {
        "letter": "B",
        "text": "A device restrictions profile"
      },
      {
        "letter": "C",
        "text": "A compliance policy"
      },
      {
        "letter": "D",
        "text": "Windows Hello for Business"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Endpoint Privilege Management provides just-in-time elevation governed by rules, so a specific app can run elevated while the user stays standard. Device restrictions limit features, compliance evaluates state, and Hello handles authentication rather than elevation.\n\nExam tip: Least-privilege elevation for specific apps equals EPM, not local admin.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Understand just-in-time elevation in Endpoint Privilege Management",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 183,
    "domain": "manage",
    "topic": "EPM elevation rule scope",
    "stem": "An EPM rule should apply only to the finance department's devices. Which mechanism scopes the rule?",
    "options": [
      {
        "letter": "A",
        "text": "Assign the EPM policy to a group containing those devices"
      },
      {
        "letter": "B",
        "text": "Put the rule in a Wi-Fi profile"
      },
      {
        "letter": "C",
        "text": "Use a compliance grace period"
      },
      {
        "letter": "D",
        "text": "Add the app to the Autopilot profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "EPM policies are assigned like other Intune policies, so targeting a device or user group scopes which devices receive the elevation rules. Wi-Fi, compliance, and Autopilot do not carry EPM rules. Add an assignment filter when the rule should apply to only a subset of the targeted group.\n\nExam tip: EPM rules follow normal assignment and filter mechanics.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Configure elevation policies and rules",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 184,
    "domain": "manage",
    "topic": "Cloud PKI benefits",
    "stem": "A company wants certificate issuance for Wi-Fi and VPN without maintaining on-premises certificate servers. Which two statements describe Microsoft Cloud PKI? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "It provides a Microsoft-hosted certificate authority integrated with Intune"
      },
      {
        "letter": "B",
        "text": "It can issue and renew certificates for managed devices"
      },
      {
        "letter": "C",
        "text": "It replaces Conditional Access"
      },
      {
        "letter": "D",
        "text": "It requires a third-party MDM"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Cloud PKI is part of the Intune Suite and provides hosted certificate authority services with automated issuance and renewal for profiles such as Wi-Fi and VPN. It does not replace Conditional Access and does not require another MDM.\n\nExam tip: Cloud PKI removes certificate server maintenance, not access policy.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Set up cloud-based PKI",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 185,
    "domain": "manage",
    "topic": "Microsoft Tunnel for MAM",
    "stem": "Personal mobile devices must reach on-premises apps without full device enrolment. Which Intune Suite component enables per-app VPN access?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Tunnel for MAM"
      },
      {
        "letter": "B",
        "text": "Windows Autopilot"
      },
      {
        "letter": "C",
        "text": "Endpoint analytics"
      },
      {
        "letter": "D",
        "text": "Cloud PKI alone"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft Tunnel provides a VPN gateway, and the MAM variant extends per-app tunnel access to unenrolled devices using protected apps. Autopilot provisions Windows, analytics reports performance, and Cloud PKI issues certificates rather than providing network access.\n\nExam tip: Unenrolled device plus on-premises app equals Tunnel for MAM.",
    "source": "Protect devices using Microsoft Intune — Extend support to MAM devices",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 186,
    "domain": "manage",
    "topic": "Advanced Analytics in Intune Suite",
    "stem": "An administrator needs custom, long-term reporting across Intune data beyond built-in reports. Which Intune Suite capability fits?",
    "options": [
      {
        "letter": "A",
        "text": "Advanced Analytics"
      },
      {
        "letter": "B",
        "text": "Remote Help"
      },
      {
        "letter": "C",
        "text": "Endpoint Privilege Management"
      },
      {
        "letter": "D",
        "text": "Windows Autopatch"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Advanced Analytics adds deeper reporting and data exploration for Intune, including custom queries and longer retention. Remote Help is support, EPM is elevation, and Autopatch is update automation. Advanced Analytics suits reporting teams that need to join Intune data with other sources and keep history longer.\n\nExam tip: Suite components are distinct; pick the one named for the outcome.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Explore advanced reporting with Intune Suite analytics",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 187,
    "domain": "manage",
    "topic": "Intune Suite licensing",
    "stem": "A company wants Remote Help and Endpoint Privilege Management for its administrators and support staff. How are these licensed?",
    "options": [
      {
        "letter": "A",
        "text": "As Intune Suite add-on licences assigned per user"
      },
      {
        "letter": "B",
        "text": "Included with every Windows 10 Pro licence"
      },
      {
        "letter": "C",
        "text": "Free with any Azure subscription"
      },
      {
        "letter": "D",
        "text": "Per device through Autopilot"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Intune Suite capabilities are licensed as a per-user add-on, and users who need the features must be assigned a licence. Windows Pro, Azure subscriptions, and Autopilot registration do not include the Suite.\n\nExam tip: Suite features follow user licensing; check assignment before troubleshooting a missing capability.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Plan licensing and deployment strategies for the Microsoft Intune Suite",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 188,
    "domain": "manage",
    "topic": "RBAC role assignment scope",
    "stem": "An Intune role assignment must apply only to a specific support group and a specific set of devices. Which two scope elements are configured? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Scope groups that define which users or devices the admin can act on"
      },
      {
        "letter": "B",
        "text": "Scope tags that filter the objects the admin can see"
      },
      {
        "letter": "C",
        "text": "Conditional Access named locations"
      },
      {
        "letter": "D",
        "text": "Autopilot group tags"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "An Intune role assignment combines the role, the members who receive it, scope groups that bound the objects they can manage, and optional scope tags for finer filtering. Named locations and Autopilot group tags are unrelated to admin scoping.\n\nExam tip: Role plus members plus scope groups plus scope tags is the full RBAC picture.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Configure scoped administration for regional or business unit separation",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 189,
    "domain": "manage",
    "topic": "Change tracking for policy drift",
    "stem": "An administrator suspects that a colleague changed a profile outside the change process. Which evidence source is most direct?",
    "options": [
      {
        "letter": "A",
        "text": "Intune audit logs showing the object change, actor, and timestamp"
      },
      {
        "letter": "B",
        "text": "The device's startup score"
      },
      {
        "letter": "C",
        "text": "The encryption report"
      },
      {
        "letter": "D",
        "text": "The app install report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Audit logs record object-level changes with the actor and time, which is exactly what a change-control investigation needs. Startup scores, encryption, and app reports describe endpoint state rather than administrative actions.\n\nExam tip: Change-control questions are answered by audit logs, not by device telemetry.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Audit admin actions and monitor configuration changes",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 190,
    "domain": "manage",
    "topic": "Tenant-wide device cleanup",
    "stem": "Devices that have not contacted Intune for a year still appear in reports and consume licences. Which two actions help? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Configure device cleanup rules to retire inactive devices"
      },
      {
        "letter": "B",
        "text": "Review and delete stale device records on a schedule"
      },
      {
        "letter": "C",
        "text": "Disable Conditional Access for all users"
      },
      {
        "letter": "D",
        "text": "Remove the Intune licence from active users"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Cleanup rules automate retirement after an inactivity period, and periodic review removes records that are no longer relevant. Disabling Conditional Access weakens security, and removing licences from active users breaks their management.\n\nExam tip: Hygiene is automated cleanup plus periodic review, not a one-off purge.",
    "source": "Support operational excellence and readiness using Microsoft Intune — Monitor tenant health and Intune service communications",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 191,
    "domain": "apps",
    "topic": "Win32 app packaging",
    "stem": "A line-of-business application ships as an EXE with a setup program and supporting files. Which Intune app type should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Windows app (Win32) packaged as .intunewin"
      },
      {
        "letter": "B",
        "text": "Microsoft Store app"
      },
      {
        "letter": "C",
        "text": "Web link"
      },
      {
        "letter": "D",
        "text": "Microsoft 365 Apps"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Win32 apps support EXE or MSI installers with custom install and uninstall commands, detection rules, and requirement rules, and the content is wrapped as an .intunewin package. Store apps target packaged apps, web links open URLs, and Microsoft 365 Apps deploys Office.\n\nExam tip: EXE installer plus custom logic equals Win32, not a Store app.",
    "source": "Manage applications using Microsoft Intune — Deploy Win32 apps using Microsoft Intune",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 192,
    "domain": "apps",
    "topic": "IntuneWinAppUtil packaging",
    "stem": "Which tool wraps a Win32 installer and its files into the format Intune expects?",
    "options": [
      {
        "letter": "A",
        "text": "The Microsoft Win32 Content Prep Tool (IntuneWinAppUtil.exe)"
      },
      {
        "letter": "B",
        "text": "Windows Configuration Designer"
      },
      {
        "letter": "C",
        "text": "The Microsoft Graph PowerShell SDK"
      },
      {
        "letter": "D",
        "text": "Windows Assessment and Deployment Kit"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "IntuneWinAppUtil.exe scans the installer, identifies the setup file, and produces an encrypted .intunewin package with the content and metadata Intune needs. Configuration Designer builds provisioning packages, Graph PowerShell calls the service, and the ADK builds Windows images.\n\nExam tip: .intunewin creation is a packaging step before upload, not an upload format conversion in the portal.",
    "source": "Manage applications using Microsoft Intune — Deploy Win32 apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 193,
    "domain": "apps",
    "topic": "Microsoft Store app deployment",
    "stem": "Users need a packaged app from the Microsoft Store, and it must install without requiring a Store account. Which app type fits?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Store app (new) assigned as required"
      },
      {
        "letter": "B",
        "text": "A web link to the Store page"
      },
      {
        "letter": "C",
        "text": "A Win32 package containing a shortcut"
      },
      {
        "letter": "D",
        "text": "A Microsoft 365 Apps deployment"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Microsoft Store app type deploys packaged apps through Intune without users needing a Store account, and a required assignment installs it automatically. A web link only opens the Store page, a shortcut is not the app, and Microsoft 365 Apps deploys Office.\n\nExam tip: Store apps come through the Store app type, not through a URL shortcut.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft Store apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 194,
    "domain": "apps",
    "topic": "Line-of-business MSI app",
    "stem": "A vendor supplies an MSI installer that must be deployed silently to all finance laptops. Which app type is the simplest fit?",
    "options": [
      {
        "letter": "A",
        "text": "Line-of-business app with an MSI installer and a product code detection rule"
      },
      {
        "letter": "B",
        "text": "Web link"
      },
      {
        "letter": "C",
        "text": "Microsoft Store app"
      },
      {
        "letter": "D",
        "text": "Managed Google Play app"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The line-of-business app type accepts MSI, MSIX, and appx packages and uses the MSI product code for detection, with a silent install command such as msiexec /i /qn. Web links and Store apps do not deploy arbitrary MSI files, and Managed Google Play is Android.\n\nExam tip: MSI plus product code detection is the LOB app pattern.",
    "source": "Manage applications using Microsoft Intune — Deploy line-of-business (LOB) apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 195,
    "domain": "apps",
    "topic": "Web link app purpose",
    "stem": "A team needs a Company Portal shortcut that opens the HR portal in the default browser. Which app type should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Web link"
      },
      {
        "letter": "B",
        "text": "Win32 app"
      },
      {
        "letter": "C",
        "text": "Microsoft 365 Apps"
      },
      {
        "letter": "D",
        "text": "Line-of-business MSI"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A web link app creates a shortcut to a URL and can appear in the Company Portal or on the device, which is exactly the requirement. Win32 and LOB apps install software, and Microsoft 365 Apps deploys Office. A web link is also useful for internal portals that must appear in the Company Portal without packaging.\n\nExam tip: A URL shortcut is a web link app, not a packaged browser.",
    "source": "Manage applications using Microsoft Intune — Understand application deployment options in Microsoft Intune",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 196,
    "domain": "apps",
    "topic": "Win32 detection rule types",
    "stem": "A Win32 app must be detected only when a specific file version exists. Which two detection methods can confirm this? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A file detection rule with a version check"
      },
      {
        "letter": "B",
        "text": "A registry detection rule for a version value"
      },
      {
        "letter": "C",
        "text": "A web link assignment"
      },
      {
        "letter": "D",
        "text": "A compliance policy"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Win32 detection rules can check a file path, existence, and version, or a registry key and value, and either can prove the required version is present. Web links do not detect installations, and compliance policies evaluate device state rather than app presence.\n\nExam tip: Detection must be specific enough to avoid false positives after an upgrade.",
    "source": "Manage applications using Microsoft Intune — Configure default install and detection settings",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 197,
    "domain": "apps",
    "topic": "Win32 requirement rules",
    "stem": "A Win32 app must install only on 64-bit Windows 11 devices with at least 8 GB of RAM. Which feature enforces this?",
    "options": [
      {
        "letter": "A",
        "text": "Requirement rules for architecture, OS version, and memory"
      },
      {
        "letter": "B",
        "text": "Detection rules for a file path"
      },
      {
        "letter": "C",
        "text": "A compliance grace period"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Requirement rules gate whether an app is offered or installed based on device attributes such as architecture, OS version, and memory. Detection rules determine whether the app is already installed, compliance evaluates policy, and app protection governs data.\n\nExam tip: Requirements decide whether to install; detection decides whether it is already there.",
    "source": "Manage applications using Microsoft Intune — Configure app availability, targeting, and install behavior",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 198,
    "domain": "apps",
    "topic": "Win32 install context",
    "stem": "A Win32 app must write to HKLM and run even when no user is signed in. Which install behaviour should you choose?",
    "options": [
      {
        "letter": "A",
        "text": "System context"
      },
      {
        "letter": "B",
        "text": "User context"
      },
      {
        "letter": "C",
        "text": "Available to enrolled devices only"
      },
      {
        "letter": "D",
        "text": "A web link assignment"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "System context runs the installer as SYSTEM, which allows machine-wide changes and installation before sign-in. User context runs with the user's rights and requires a signed-in user, and available assignments affect delivery rather than the install identity.\n\nExam tip: HKLM or no-user installation means system context.",
    "source": "Manage applications using Microsoft Intune — Deploy Win32 apps using Microsoft Intune",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 199,
    "domain": "apps",
    "topic": "Win32 return codes",
    "stem": "A Win32 installer exits with code 3010. How should Intune interpret this?",
    "options": [
      {
        "letter": "A",
        "text": "Success, with a soft reboot required"
      },
      {
        "letter": "B",
        "text": "Failure, because any non-zero code fails"
      },
      {
        "letter": "C",
        "text": "Success, with no action required"
      },
      {
        "letter": "D",
        "text": "A retryable network error"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "3010 means success but a restart is needed, and Intune treats it as success when the return code is configured that way. 0 is success without a reboot, 1641 is success with a hard reboot, and 1618 indicates another installation is in progress and should be retried.\n\nExam tip: 3010 and 1641 are success codes; do not let a non-zero value fool you.",
    "source": "Manage applications using Microsoft Intune — Monitor app deployment and troubleshoot failures",
    "level": "medium",
    "tags": [
      "intune",
      "troubleshooting"
    ]
  },
  {
    "id": 200,
    "domain": "apps",
    "topic": "Win32 supersedence",
    "stem": "Version 2 of a Win32 app must replace version 1 and remove the old version during upgrade. Which feature should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Supersedence with the uninstall previous version option"
      },
      {
        "letter": "B",
        "text": "A dependency on version 1"
      },
      {
        "letter": "C",
        "text": "A requirement rule for version 2"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Supersedence links a new app to an older one and can uninstall the previous version as part of the upgrade. A dependency installs a prerequisite without replacing it, requirement rules only gate installation, and app protection governs data.\n\nExam tip: Replace and remove equals supersedence; install first equals dependency.",
    "source": "Manage applications using Microsoft Intune — Monitor updates and supersedence",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 201,
    "domain": "apps",
    "topic": "Win32 dependencies",
    "stem": "A reporting app requires a specific runtime to be installed before it can run. Which app relationship should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A dependency on the runtime app"
      },
      {
        "letter": "B",
        "text": "Supersedence of the runtime app"
      },
      {
        "letter": "C",
        "text": "An uninstall assignment for the runtime"
      },
      {
        "letter": "D",
        "text": "A detection rule for the runtime"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A dependency tells Intune to install the prerequisite app before the dependent app, and it can be automatic or require manual installation. Supersedence replaces an app, an uninstall assignment removes it, and detection only checks presence.\n\nExam tip: Prerequisite first equals dependency; upgrade equals supersedence.",
    "source": "Manage applications using Microsoft Intune — Configure app update and assignment settings",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 202,
    "domain": "apps",
    "topic": "App install log location",
    "stem": "A Win32 app fails to install on a Windows device. Which log should you check first for the Intune Management Extension workload?",
    "options": [
      {
        "letter": "A",
        "text": "IntuneManagementExtension.log"
      },
      {
        "letter": "B",
        "text": "The Windows Update log"
      },
      {
        "letter": "C",
        "text": "The Wi-Fi operational log"
      },
      {
        "letter": "D",
        "text": "The Autopilot deployment report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Intune Management Extension handles Win32 app and PowerShell script workloads, and IntuneManagementExtension.log plus AppWorkload.log record download, execution, and detection results. Update logs, Wi-Fi logs, and Autopilot reports do not contain app installation detail.\n\nExam tip: Win32 app failures live in the IME logs on the device.",
    "source": "Manage applications using Microsoft Intune — Manage app deployment failures using logs and troubleshooting tools",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "intune"
    ]
  },
  {
    "id": 203,
    "domain": "apps",
    "topic": "ESP app blocking",
    "stem": "During Autopilot, a required app must finish installing before the user reaches the desktop. Which setting controls this?",
    "options": [
      {
        "letter": "A",
        "text": "Block device use until required apps are installed if they are assigned to the device"
      },
      {
        "letter": "B",
        "text": "Allow users to reset the device during installation"
      },
      {
        "letter": "C",
        "text": "The app's detection rule"
      },
      {
        "letter": "D",
        "text": "The app's requirement rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Enrolment Status Page tracks selected apps and can block the desktop until they install. Detection and requirement rules decide whether an app is needed and applicable, but they do not control the ESP blocking behaviour. Track only apps that must exist before the user starts work, because each tracked app extends enrolment time.\n\nExam tip: ESP blocking is a deployment setting, not an app property.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 204,
    "domain": "apps",
    "topic": "Microsoft 365 Apps deployment",
    "stem": "A company wants Office deployed with a standard set of apps and a defined update channel. Which Intune app type should you use?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft 365 Apps (Windows 10 and later)"
      },
      {
        "letter": "B",
        "text": "A Win32 package containing setup.exe"
      },
      {
        "letter": "C",
        "text": "A web link"
      },
      {
        "letter": "D",
        "text": "A line-of-business MSI"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Microsoft 365 Apps app type builds an Office configuration with selected apps, architecture, and update channel, and it can apply an XML configuration. Repackaging Office as Win32 is unnecessary, a web link does not install Office, and an LOB MSI is for third-party installers.\n\nExam tip: Office deployment has a dedicated app type; use it rather than wrapping setup.exe.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft 365 apps using Microsoft Intune",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 205,
    "domain": "apps",
    "topic": "Microsoft 365 Apps update channel",
    "stem": "A company needs Office feature updates three times a year rather than monthly. Which update channel fits?",
    "options": [
      {
        "letter": "A",
        "text": "Semi-Annual Enterprise Channel"
      },
      {
        "letter": "B",
        "text": "Current Channel"
      },
      {
        "letter": "C",
        "text": "Monthly Enterprise Channel"
      },
      {
        "letter": "D",
        "text": "Windows Insider"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Semi-Annual Enterprise Channel delivers feature updates roughly twice a year, while Current Channel is monthly and Monthly Enterprise Channel provides monthly updates on a predictable schedule. Windows Insider is a Windows programme, not an Office channel.\n\nExam tip: Fewer feature updates equals Semi-Annual; monthly predictability equals Monthly Enterprise.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft 365 apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 206,
    "domain": "apps",
    "topic": "Click-to-Run versus MSI Office",
    "stem": "Why is Click-to-Run the preferred Office installation technology for Intune-managed devices?",
    "options": [
      {
        "letter": "A",
        "text": "It supports update channels and streaming installation and is managed by Office policies"
      },
      {
        "letter": "B",
        "text": "It is the only way to activate Office"
      },
      {
        "letter": "C",
        "text": "It removes the need for a licence"
      },
      {
        "letter": "D",
        "text": "It requires no network connection"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Click-to-Run supports channel-based updates, streaming installation, and policy-based management, which integrates with Intune and the Office cloud policy service. MSI-based Office is legacy and lacks the same update model. Activation and licensing are separate, and installation still needs content.\n\nExam tip: Modern Office deployment equals C2R plus a channel, not an MSI.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft 365 apps using Microsoft Intune",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 207,
    "domain": "apps",
    "topic": "MAM versus MDM",
    "stem": "Review the diagram. A company must protect corporate data in Outlook on personal phones without enrolling the devices. Which approach fits?",
    "options": [
      {
        "letter": "A",
        "text": "App protection policies without device enrolment"
      },
      {
        "letter": "B",
        "text": "Compliance policies on enrolled devices"
      },
      {
        "letter": "C",
        "text": "Configuration profiles that disable the camera"
      },
      {
        "letter": "D",
        "text": "A full device wipe"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App protection policies protect data inside managed apps and work without enrolment, which is the MAM-without-enrolment model. Compliance and configuration profiles require management, and wiping personal devices is unacceptable. The policy can still require a PIN and block data transfer without the company owning the phone.\n\nExam tip: No enrolment plus data protection equals MAM, not MDM.",
    "source": "Manage applications using Microsoft Intune — Understand Mobile Application Management (MAM) and App Protection Policies",
    "diagram": "byod-architecture",
    "level": "easy",
    "tags": [
      "security"
    ]
  },
  {
    "id": 208,
    "domain": "apps",
    "topic": "App protection data protection settings",
    "stem": "A policy must prevent users from copying text from a managed app into a personal app. Which setting should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Restrict cut, copy, and paste with other apps"
      },
      {
        "letter": "B",
        "text": "Require a PIN"
      },
      {
        "letter": "C",
        "text": "Block jailbroken devices"
      },
      {
        "letter": "D",
        "text": "Require a minimum OS version"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Data transfer settings control whether content can be cut, copied, or pasted between managed and unmanaged apps. PIN, jailbreak, and OS version settings are access and conditional-launch controls rather than data movement controls.\n\nExam tip: Data movement equals data protection settings; device state equals conditional launch.",
    "source": "Manage applications using Microsoft Intune — Define data protection, encryption, and app restriction settings",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 209,
    "domain": "apps",
    "topic": "App protection conditional launch",
    "stem": "A managed app must block access when the device is jailbroken or rooted. Which policy area contains this control?",
    "options": [
      {
        "letter": "A",
        "text": "Conditional launch"
      },
      {
        "letter": "B",
        "text": "Data protection"
      },
      {
        "letter": "C",
        "text": "App configuration"
      },
      {
        "letter": "D",
        "text": "Assignment"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Conditional launch defines access requirements such as a minimum OS version, a maximum OS version, a device threat level, or a jailbroken device check, and it can block or wipe corporate data. Data protection governs movement, app configuration supplies settings, and assignment targets users.\n\nExam tip: Access gates live in conditional launch; data rules live in data protection.",
    "source": "Manage applications using Microsoft Intune — Define access requirements and conditional launch behaviors",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 210,
    "domain": "apps",
    "topic": "Selective wipe of app data",
    "stem": "An employee leaves the company, and corporate data must be removed from managed apps on a personal phone without touching personal photos. Which action fits?",
    "options": [
      {
        "letter": "A",
        "text": "Selective wipe of company data through the app protection policy"
      },
      {
        "letter": "B",
        "text": "Full device wipe"
      },
      {
        "letter": "C",
        "text": "Retire the device"
      },
      {
        "letter": "D",
        "text": "Remote lock"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Selective wipe removes corporate data from managed apps and can also remove the work account, leaving personal data intact. A full wipe erases everything, retire removes management but may not clear app data on an unenrolled device, and remote lock only locks the screen.\n\nExam tip: BYOD departure equals selective wipe, not factory reset.",
    "source": "Manage applications using Microsoft Intune — Assign and monitor App Protection Policies",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 211,
    "domain": "apps",
    "topic": "MAM-WE characteristics",
    "stem": "Review the diagram. A company wants app-level protection on unenrolled devices. Which two statements describe MAM without enrolment? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Protection applies to data inside managed apps, not to the whole device"
      },
      {
        "letter": "B",
        "text": "The user does not need to enrol the device in Intune"
      },
      {
        "letter": "C",
        "text": "The device must be compliant before any app opens"
      },
      {
        "letter": "D",
        "text": "The company can wipe the entire phone"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "MAM without enrolment protects the app data boundary and requires no device enrolment. Device compliance and full-device wipe are MDM capabilities, which is exactly the trade-off the diagram shows. Use MAM-WE when employees refuse enrolment but still need protected access to corporate email and files.\n\nExam tip: MAM protects data, MDM controls the device; do not promise device control with MAM.",
    "source": "Manage applications using Microsoft Intune — Configure App Protection Policies for unenrolled BYOD devices",
    "diagram": "byod-architecture",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 212,
    "domain": "apps",
    "topic": "Multi-identity in managed apps",
    "stem": "A user has both a personal and a work account in Outlook on the same phone. Corporate data must be protected only for the work account. Which concept enables this?",
    "options": [
      {
        "letter": "A",
        "text": "Multi-identity support in managed apps"
      },
      {
        "letter": "B",
        "text": "A device compliance policy"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile"
      },
      {
        "letter": "D",
        "text": "Autopilot self-deploying mode"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Multi-identity apps separate personal and work accounts and apply protection only to the work identity. Compliance policies evaluate the whole device, Wi-Fi configures connectivity, and Autopilot is Windows provisioning.\n\nExam tip: Personal and work accounts in one app equals multi-identity protection.",
    "source": "Manage applications using Microsoft Intune — Define data protection, encryption, and app restriction settings",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 213,
    "domain": "apps",
    "topic": "App protection policy assignment",
    "stem": "An app protection policy must apply to a pilot group of users before the whole company. How should it be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "To a security group containing the pilot users, then broaden the group"
      },
      {
        "letter": "B",
        "text": "To the All Devices group"
      },
      {
        "letter": "C",
        "text": "To a device group filtered by model"
      },
      {
        "letter": "D",
        "text": "To the local Administrators group"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App protection policies are user-targeted because they protect app data for a user identity, so assigning to a pilot user group and then broadening is the standard rollout. All Devices and device filters are device scoping, and a local group is not an assignment target.\n\nExam tip: MAM targets users; MDM configuration usually targets devices.",
    "source": "Manage applications using Microsoft Intune — Assign and monitor App Protection Policies",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 214,
    "domain": "apps",
    "topic": "App configuration policy purpose",
    "stem": "A managed app needs a server URL and account name preconfigured at install. Which policy type provides this?",
    "options": [
      {
        "letter": "A",
        "text": "An app configuration policy"
      },
      {
        "letter": "B",
        "text": "An app protection policy"
      },
      {
        "letter": "C",
        "text": "A compliance policy"
      },
      {
        "letter": "D",
        "text": "A device restrictions profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App configuration policies deliver key-value or XML settings to apps that support them, such as server URLs and account names. App protection governs data, compliance evaluates state, and device restrictions control hardware and features.\n\nExam tip: App settings equal app configuration; data protection equals app protection.",
    "source": "Manage applications using Microsoft Intune — Configure default application settings and user experience",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 215,
    "domain": "apps",
    "topic": "App configuration delivery channel",
    "stem": "An app configuration policy for an iOS app is not reaching the device. Which requirement is most likely missing?",
    "options": [
      {
        "letter": "A",
        "text": "The app must be a managed app that supports app configuration and must be targeted by an Intune app install"
      },
      {
        "letter": "B",
        "text": "The device must be in a kiosk profile"
      },
      {
        "letter": "C",
        "text": "The user must have a Windows Hello PIN"
      },
      {
        "letter": "D",
        "text": "The device must be BitLocker encrypted"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App configuration only works for apps that support it, and the app must be delivered as a managed app through Intune so the configuration can be applied. Kiosk, Hello, and BitLocker are unrelated to app configuration delivery.\n\nExam tip: No managed app, no configuration; check app support before the policy.",
    "source": "Manage applications using Microsoft Intune — Configure default application settings and user experience",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 216,
    "domain": "apps",
    "topic": "Edge IE mode site list",
    "stem": "A legacy intranet site only works in Internet Explorer. Users should open it in Microsoft Edge without a separate browser. Which configuration should you deploy?",
    "options": [
      {
        "letter": "A",
        "text": "An Enterprise Mode Site List hosted at an HTTPS URL and referenced by an Edge policy"
      },
      {
        "letter": "B",
        "text": "A web link app to the site"
      },
      {
        "letter": "C",
        "text": "A Win32 package that installs Internet Explorer"
      },
      {
        "letter": "D",
        "text": "A device restrictions profile that blocks Edge"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "IE mode in Edge uses an Enterprise Mode Site List XML that lists sites to open in the IE engine, and the Edge policy points to the list URL. A web link still opens the modern engine, reinstalling IE is unsupported, and blocking Edge defeats the purpose.\n\nExam tip: Legacy site plus modern browser equals IE mode and a site list.",
    "source": "Manage applications using Microsoft Intune — Understand application deployment options in Microsoft Intune",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 217,
    "domain": "apps",
    "topic": "Edge security baseline",
    "stem": "A company wants Microsoft-recommended security settings for Edge across all devices. Which approach is most efficient?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the Edge security baseline and customise exceptions"
      },
      {
        "letter": "B",
        "text": "Configure every Edge setting manually in a custom profile"
      },
      {
        "letter": "C",
        "text": "Block Edge with a device restriction"
      },
      {
        "letter": "D",
        "text": "Ask users to enable settings themselves"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Edge security baseline provides a reviewed set of recommended settings that can be customised, which is faster and more defensible than building everything by hand. Manual configuration risks gaps, blocking the browser is not a security posture, and user-managed settings are not enforceable.\n\nExam tip: Browser hardening starts from the baseline, then documents deviations.",
    "source": "Protect devices using Microsoft Intune — Configure Microsoft Defender endpoint security settings and baselines",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 218,
    "domain": "apps",
    "topic": "Required versus available assignment",
    "stem": "An app should be installed automatically on finance laptops but only offered to contractors through the Company Portal. Which assignment types fit?",
    "options": [
      {
        "letter": "A",
        "text": "Required for finance, available for contractors"
      },
      {
        "letter": "B",
        "text": "Available for finance, required for contractors"
      },
      {
        "letter": "C",
        "text": "Uninstall for both groups"
      },
      {
        "letter": "D",
        "text": "Required for both groups"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Required installs automatically, while available lets the user choose to install from the Company Portal. Uninstall removes the app, and making both required removes user choice for contractors. You can assign different intents to different groups on the same app object.\n\nExam tip: Automatic equals required; optional self-service equals available.",
    "source": "Manage applications using Microsoft Intune — Configure app availability, targeting, and install behavior",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 219,
    "domain": "apps",
    "topic": "App uninstall assignment",
    "stem": "A retired app must be removed from devices that still have it. Which assignment should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Uninstall for the group that currently has the app required"
      },
      {
        "letter": "B",
        "text": "Available for the group"
      },
      {
        "letter": "C",
        "text": "Required for a new group"
      },
      {
        "letter": "D",
        "text": "A web link assignment"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The uninstall assignment tells Intune to remove a required app from targeted devices. Available would offer installation, required would keep or install it, and a web link does not remove software.\n\nExam tip: To remove, change the assignment intent to uninstall rather than deleting the app object first.",
    "source": "Manage applications using Microsoft Intune — Update and retire applications in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 220,
    "domain": "apps",
    "topic": "App install report",
    "stem": "An administrator needs to know which devices failed to install a Win32 app and why. Which report should they use?",
    "options": [
      {
        "letter": "A",
        "text": "The app's install status report with per-device details"
      },
      {
        "letter": "B",
        "text": "The encryption report"
      },
      {
        "letter": "C",
        "text": "The Autopilot deployment report"
      },
      {
        "letter": "D",
        "text": "The Windows Update compliance report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The app install status report shows installed, failed, pending, and not-applicable counts with per-device error details. Encryption, Autopilot, and update reports cover other workloads. The per-device view also links to the app's installation log details for that device.\n\nExam tip: App failures start in the app report, then move to device logs for the error detail.",
    "source": "Manage applications using Microsoft Intune — Monitor app deployment and troubleshoot failures",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 221,
    "domain": "apps",
    "topic": "Company Portal self-service install",
    "stem": "A user needs to install an optional app without contacting the help desk. What must be true?",
    "options": [
      {
        "letter": "A",
        "text": "The app is assigned as available to the user's group and appears in the Company Portal"
      },
      {
        "letter": "B",
        "text": "The app is assigned as required to all devices"
      },
      {
        "letter": "C",
        "text": "The app is uninstalled from the tenant"
      },
      {
        "letter": "D",
        "text": "The user is a local administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Available assignments publish the app to the Company Portal for the targeted user, who can install it on demand. Required installs without user action, an uninstalled app is not available, and local admin rights are not required for Company Portal installs.\n\nExam tip: Self-service equals available assignment plus Company Portal.",
    "source": "Manage applications using Microsoft Intune — Configure app availability, targeting, and install behavior",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 222,
    "domain": "apps",
    "topic": "App supersedence monitoring",
    "stem": "After deploying version 3 of an app with supersedence, some devices still report version 2. Which check is most useful?",
    "options": [
      {
        "letter": "A",
        "text": "Review the app install report for supersedence failures and the device's app logs"
      },
      {
        "letter": "B",
        "text": "Reboot every device in the estate"
      },
      {
        "letter": "C",
        "text": "Delete the app record"
      },
      {
        "letter": "D",
        "text": "Disable the Company Portal"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The install report shows which devices failed the upgrade, and device logs explain whether detection, dependency, or installer exit codes blocked it. Rebooting everything is disruptive and unlikely to fix a detection issue, deleting the record loses reporting, and disabling the portal affects users.\n\nExam tip: Supersedence problems are usually detection or dependency problems.",
    "source": "Manage applications using Microsoft Intune — Monitor updates and supersedence",
    "level": "hard",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 223,
    "domain": "apps",
    "topic": "Managed Google Play app",
    "stem": "A company uses Android Enterprise and needs to deploy an app from the managed Play Store to work profile devices. Which app type fits?",
    "options": [
      {
        "letter": "A",
        "text": "Managed Google Play app"
      },
      {
        "letter": "B",
        "text": "Win32 app"
      },
      {
        "letter": "C",
        "text": "Microsoft 365 Apps"
      },
      {
        "letter": "D",
        "text": "Web link"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Managed Google Play apps are approved in the Play Store and assigned through Intune to Android Enterprise devices, including work profile devices. Win32 is Windows, Microsoft 365 Apps is Office, and a web link is only a shortcut.\n\nExam tip: Android Enterprise apps come through Managed Google Play approval.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft Store apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 224,
    "domain": "apps",
    "topic": "App protection for Edge",
    "stem": "Users must open corporate intranet sites on personal phones with protected data and no enrolment. Which app should be protected?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Edge with an app protection policy"
      },
      {
        "letter": "B",
        "text": "Notepad"
      },
      {
        "letter": "C",
        "text": "Windows Terminal"
      },
      {
        "letter": "D",
        "text": "The Settings app"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Edge supports Intune app protection, so browser sessions can be protected on unenrolled devices. Notepad, Terminal, and Settings are not managed apps that carry corporate data protection. The policy can block copying data from the protected browser into personal apps.\n\nExam tip: Protected browsing on BYOD equals a protected Edge app, not a device VPN.",
    "source": "Manage applications using Microsoft Intune — Configure App Protection Policies for unenrolled BYOD devices",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 225,
    "domain": "apps",
    "topic": "App protection policy conflict",
    "stem": "Two app protection policies apply to the same user with different PIN requirements. What is the result?",
    "options": [
      {
        "letter": "A",
        "text": "The most restrictive setting wins for the overlapping requirement"
      },
      {
        "letter": "B",
        "text": "The user is blocked from all apps"
      },
      {
        "letter": "C",
        "text": "The policies cancel each other out"
      },
      {
        "letter": "D",
        "text": "The older policy is deleted"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "When multiple app protection policies apply, Intune uses the most restrictive value for each setting, so the stricter PIN requirement takes effect. Users are not blocked outright, policies do not cancel, and nothing is deleted.\n\nExam tip: MAM combines restrictively, similar to compliance, not like configuration conflicts.",
    "source": "Manage applications using Microsoft Intune — Troubleshoot application protection policy issues",
    "level": "hard",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 226,
    "domain": "apps",
    "topic": "App dependency versus supersedence",
    "stem": "Which two statements correctly distinguish dependencies from supersedence? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A dependency installs a prerequisite before the app"
      },
      {
        "letter": "B",
        "text": "Supersedence replaces an older app version and can uninstall it"
      },
      {
        "letter": "C",
        "text": "A dependency replaces the app with a newer version"
      },
      {
        "letter": "D",
        "text": "Supersedence installs a prerequisite first"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Dependencies install required prerequisites in order, while supersedence links versions so a new app replaces an older one. The other two options swap the definitions. Supersedence can also be configured to uninstall the older app automatically during the upgrade.\n\nExam tip: Prerequisite equals dependency; version replacement equals supersedence.",
    "source": "Manage applications using Microsoft Intune — Configure app update and assignment settings",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 227,
    "domain": "apps",
    "topic": "Retiring an app from Intune",
    "stem": "An app is no longer needed, but its install history must remain available for audit. What should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Change the assignment to uninstall and keep the app object"
      },
      {
        "letter": "B",
        "text": "Delete the app object immediately"
      },
      {
        "letter": "C",
        "text": "Wipe all devices"
      },
      {
        "letter": "D",
        "text": "Remove the Intune licence"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Changing the intent to uninstall removes the app from devices while keeping the object and its reporting history. Deleting the object removes the record, wiping devices is disproportionate, and removing licences breaks management.\n\nExam tip: Retire the deployment first; delete the object only when reporting is no longer needed.",
    "source": "Manage applications using Microsoft Intune — Update and retire applications in Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 228,
    "domain": "apps",
    "topic": "App install failure 1603",
    "stem": "A Win32 app fails with exit code 1603 on some devices. What does this usually indicate?",
    "options": [
      {
        "letter": "A",
        "text": "A fatal error during installation, often permissions, prerequisites, or an existing version"
      },
      {
        "letter": "B",
        "text": "A successful install that needs a reboot"
      },
      {
        "letter": "C",
        "text": "A network timeout that retries automatically"
      },
      {
        "letter": "D",
        "text": "A detection rule that is too strict"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "1603 is a generic MSI fatal error, commonly caused by insufficient rights, a missing prerequisite, or a conflicting installed version. It is not a success code, is not a retryable timeout, and a detection rule affects reporting after install rather than the installer exit.\n\nExam tip: 1603 needs the installer log, not a blind retry.",
    "source": "Manage applications using Microsoft Intune — Manage app deployment failures using logs and troubleshooting tools",
    "level": "hard",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 229,
    "domain": "apps",
    "topic": "Store app update behavior",
    "stem": "A Microsoft Store app deployed through Intune receives an update from the Store. What happens to the Intune deployment?",
    "options": [
      {
        "letter": "A",
        "text": "The app updates through the Store while Intune continues to track it as installed"
      },
      {
        "letter": "B",
        "text": "The app is removed from Intune and must be re-added"
      },
      {
        "letter": "C",
        "text": "The device becomes noncompliant automatically"
      },
      {
        "letter": "D",
        "text": "The app is converted to a Win32 app"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Store apps update through the Store mechanism, and Intune continues to report the app as installed. The deployment is not removed, compliance is unaffected by the update itself, and the app type does not change.\n\nExam tip: Store apps self-update; Win32 apps need supersedence or a new version. If a Store app must be pinned to a version, use a Win32 or MSIX package instead.",
    "source": "Manage applications using Microsoft Intune — Deploy Microsoft Store apps using Microsoft Intune",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 230,
    "domain": "apps",
    "topic": "App install failure self-service",
    "stem": "A user cannot install an available app from the Company Portal. Which first step should the help desk take?",
    "options": [
      {
        "letter": "A",
        "text": "Confirm the app is assigned as available to a group that contains the user and that the device meets requirements"
      },
      {
        "letter": "B",
        "text": "Wipe the device"
      },
      {
        "letter": "C",
        "text": "Delete the app from Intune"
      },
      {
        "letter": "D",
        "text": "Remove the user's licence"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Most self-service failures are targeting or requirement problems: the user is not in the assigned group, the app is not available, or the device fails a requirement rule. Wiping, deleting the app, or removing licences are destructive and unlikely to help.\n\nExam tip: Check assignment, then requirements, then the device's Company Portal logs.",
    "source": "Manage applications using Microsoft Intune — Monitor app deployment and troubleshoot failures",
    "level": "easy",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 231,
    "domain": "deploy",
    "topic": "Contoso join model decision",
    "stem": "Review the diagram. Contoso must keep Kerberos access to on-premises file shares and the ERP client while moving device provisioning to the cloud. Which device identity model should the new Autopilot deployment use?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra hybrid joined"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra joined with no on-premises connection"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra registered only"
      },
      {
        "letter": "D",
        "text": "Workgroup joined"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hybrid join keeps the on-premises domain membership that Kerberos and the ERP client depend on while adding an Entra identity for Intune and Microsoft 365. A pure Entra join would remove domain membership, registered-only is for personal devices without management, and a workgroup has no domain identity at all.\n\nExam tip: If the case requires on-premises Kerberos, hybrid join is usually the answer.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "diagram": "autopilot-flow",
    "case": "contoso-autopilot",
    "level": "medium",
    "tags": [
      "devices",
      "security"
    ]
  },
  {
    "id": 232,
    "domain": "deploy",
    "topic": "Contoso Autopilot hybrid prerequisites",
    "stem": "Contoso configures an Autopilot profile for hybrid join, but devices fail at the domain join step. Which two prerequisites should the team verify? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A service connection point is published and Entra Connect is syncing device objects"
      },
      {
        "letter": "B",
        "text": "The devices can reach a domain controller and the offline domain join process is available"
      },
      {
        "letter": "C",
        "text": "Every user has a Windows 365 licence"
      },
      {
        "letter": "D",
        "text": "The Autopilot profile has a group tag"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Hybrid Autopilot needs the SCP and Entra Connect for the Entra side, and network line of sight to a domain controller for the domain join itself. Windows 365 licences are unrelated to device join, and a group tag only affects targeting.\n\nExam tip: Hybrid join failures split into directory discovery and network reachability; check both.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Pre-provision devices using Autopilot",
    "case": "contoso-autopilot",
    "level": "hard",
    "tags": [
      "troubleshooting",
      "devices"
    ]
  },
  {
    "id": 233,
    "domain": "deploy",
    "topic": "Contoso ESP tracking scope",
    "stem": "Contoso wants the Enrolment Status Page to wait for the VPN client and the ERP client before users reach the desktop. Which two settings should the team configure? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Assign the apps as required to the device group"
      },
      {
        "letter": "B",
        "text": "Select the apps for ESP tracking and block device use until they install"
      },
      {
        "letter": "C",
        "text": "Assign the apps as available to all users"
      },
      {
        "letter": "D",
        "text": "Disable the ESP timeout"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The ESP can only track apps that are required for the device, and the profile must include them in the tracked list with the blocking option enabled. Available apps are user-initiated, and disabling the timeout is not a supported way to guarantee installation.\n\nExam tip: ESP tracking requires required assignments plus explicit selection in the profile.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "case": "contoso-autopilot",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 234,
    "domain": "deploy",
    "topic": "Contoso contractor Cloud PC choice",
    "stem": "Contractors need a managed Windows desktop but cannot receive corporate hardware, and they must reach on-premises resources. Which solution fits best?",
    "options": [
      {
        "letter": "A",
        "text": "Windows 365 Enterprise Cloud PCs with an Azure network connection"
      },
      {
        "letter": "B",
        "text": "Windows 365 Business Cloud PCs with Microsoft-hosted networking"
      },
      {
        "letter": "C",
        "text": "Windows Autopilot self-deploying mode on contractor-owned PCs"
      },
      {
        "letter": "D",
        "text": "Azure Virtual Desktop with no host pool"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Windows 365 Enterprise provides Cloud PCs with Azure network connections and hybrid join, which supports on-premises access without issuing hardware. Business does not support Azure network connections, Autopilot would require managing contractor hardware, and AVD without a host pool provides nothing.\n\nExam tip: Contractor desktop plus on-premises access equals Enterprise Cloud PCs and an ANC.",
    "source": "Deliver cloud-hosted desktops using Azure Virtual Desktop and Windows 365 — Set up Windows 365 provisioning policies",
    "case": "contoso-autopilot",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 235,
    "domain": "deploy",
    "topic": "Contoso provisioning package fallback",
    "stem": "One reseller cannot upload hardware hashes before shipping. Contoso still needs consistent enrolment for those devices. Which fallback is most practical?",
    "options": [
      {
        "letter": "A",
        "text": "A provisioning package applied at first run with an enrolment token"
      },
      {
        "letter": "B",
        "text": "A second Autopilot profile with a different name"
      },
      {
        "letter": "C",
        "text": "A compliance policy requiring BitLocker"
      },
      {
        "letter": "D",
        "text": "A Windows 365 licence for each device"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Without a pre-registered hash, a provisioning package can still join the device and enrol it when it first runs, which keeps configuration consistent. A second profile still needs a device record, compliance evaluates state rather than enrolling, and a Cloud PC licence does not enrol physical hardware.\n\nExam tip: No hash means no Autopilot; a provisioning package is the supported fallback.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Enroll Windows devices using Microsoft Intune",
    "case": "contoso-autopilot",
    "level": "hard",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 236,
    "domain": "deploy",
    "topic": "Contoso staged Autopilot rollout",
    "stem": "Contoso wants a pilot of 50 devices before the broad rollout. Which approach supports safe staging?",
    "options": [
      {
        "letter": "A",
        "text": "Assign the Autopilot profile to a pilot device group, validate the deployment report, then expand the assignment"
      },
      {
        "letter": "B",
        "text": "Assign the profile to All Devices and monitor for a week"
      },
      {
        "letter": "C",
        "text": "Assign the profile to All Users and exclude nothing"
      },
      {
        "letter": "D",
        "text": "Deploy the profile only after every device is registered"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Autopilot profiles are device-targeted, so a pilot device group limits the blast radius, and the deployment report confirms success before expansion. Assigning to everything is not a pilot, user targeting does not apply the profile at OOBE, and waiting for full registration delays the project without adding safety.\n\nExam tip: Pilot with a device group and read the deployment report before broadening.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Assign profiles and monitor Autopilot deployments",
    "case": "contoso-autopilot",
    "level": "medium",
    "tags": [
      "intune"
    ]
  },
  {
    "id": 237,
    "domain": "deploy",
    "topic": "Contoso Autopilot failure diagnosis",
    "stem": "Review the diagram. A batch of devices from one reseller boots through normal OOBE instead of Autopilot. What is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The devices were never registered with Autopilot, so no profile could be resolved"
      },
      {
        "letter": "B",
        "text": "The ESP timeout is too short"
      },
      {
        "letter": "C",
        "text": "BitLocker is not enabled"
      },
      {
        "letter": "D",
        "text": "The users are not licensed for Windows 365"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Normal OOBE means the device never contacted the Autopilot service with a matching record, which points to missing or incorrect hardware hashes from that reseller. An ESP timeout would show the status page, BitLocker is unrelated, and Windows 365 licensing does not affect Autopilot registration.\n\nExam tip: No Autopilot experience at all means registration, not profile settings.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Troubleshoot Autopilot deployment issues",
    "diagram": "autopilot-flow",
    "case": "contoso-autopilot",
    "level": "hard",
    "tags": [
      "troubleshooting"
    ]
  },
  {
    "id": 238,
    "domain": "identity",
    "topic": "Fabrikam MAM without enrolment",
    "stem": "Review the diagram. Fabrikam will not enrol personal phones. Which control protects corporate data in Outlook and Teams?",
    "options": [
      {
        "letter": "A",
        "text": "App protection policies applied to the users"
      },
      {
        "letter": "B",
        "text": "Device compliance policies applied to all phones"
      },
      {
        "letter": "C",
        "text": "Configuration profiles that require BitLocker"
      },
      {
        "letter": "D",
        "text": "A full device wipe on first sign-in"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App protection policies protect data inside managed apps without requiring enrolment, which is the only option that satisfies the no-enrolment constraint. Compliance and configuration profiles need management, and wiping personal phones is unacceptable.\n\nExam tip: No enrolment plus data protection equals MAM-WE.",
    "source": "Manage applications using Microsoft Intune — Configure App Protection Policies for unenrolled BYOD devices",
    "diagram": "byod-architecture",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 239,
    "domain": "identity",
    "topic": "Fabrikam Conditional Access app protection grant",
    "stem": "Review the diagram. Access to Exchange Online from personal phones must require an app protected by Intune. Which Conditional Access grant should Fabrikam configure?",
    "options": [
      {
        "letter": "A",
        "text": "Require app protection policy"
      },
      {
        "letter": "B",
        "text": "Require compliant device"
      },
      {
        "letter": "C",
        "text": "Require hybrid joined device"
      },
      {
        "letter": "D",
        "text": "Require a trusted IP location"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The app protection grant requires the app to be managed by an Intune app protection policy, which works on unenrolled devices. Compliance and hybrid join both require device management, and a trusted location is a condition rather than a grant.\n\nExam tip: For BYOD with no enrolment, pair Conditional Access with the app protection grant.",
    "source": "Manage applications using Microsoft Intune — Configure Conditional Access policies for application access control",
    "diagram": "conditional-access-flow",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 240,
    "domain": "identity",
    "topic": "Fabrikam conditional launch health checks",
    "stem": "Fabrikam must block managed apps on jailbroken or rooted phones and on devices below the minimum OS version. Which policy area should the team configure?",
    "options": [
      {
        "letter": "A",
        "text": "Conditional launch in the app protection policy"
      },
      {
        "letter": "B",
        "text": "Data protection settings in the app protection policy"
      },
      {
        "letter": "C",
        "text": "The device compliance policy"
      },
      {
        "letter": "D",
        "text": "A Wi-Fi configuration profile"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Conditional launch holds access requirements such as jailbreak or root detection and minimum OS version, and it can block access or wipe corporate data. Data protection controls movement of content, compliance needs enrolment, and Wi-Fi is connectivity.\n\nExam tip: App-level health checks live in conditional launch, not in device compliance.",
    "source": "Manage applications using Microsoft Intune — Define access requirements and conditional launch behaviors",
    "case": "fabrikam-byod",
    "level": "hard",
    "tags": [
      "security"
    ]
  },
  {
    "id": 241,
    "domain": "identity",
    "topic": "Fabrikam departure data removal",
    "stem": "An employee leaves Fabrikam. Corporate data must be removed from managed apps on a personal phone while personal photos and apps remain. Which two steps fit? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Run a selective wipe of company data for the user"
      },
      {
        "letter": "B",
        "text": "Remove the user from the app protection policy assignment"
      },
      {
        "letter": "C",
        "text": "Wipe the entire phone"
      },
      {
        "letter": "D",
        "text": "Delete the user's personal Microsoft account"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A selective wipe clears corporate data from managed apps, and removing the user from the policy assignment prevents re-provisioning of work data. A full wipe destroys personal data, and the personal Microsoft account is outside the company's control.\n\nExam tip: BYOD departure equals selective wipe plus assignment removal.",
    "source": "Manage applications using Microsoft Intune — Assign and monitor App Protection Policies",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 242,
    "domain": "identity",
    "topic": "Fabrikam registered device SSO",
    "stem": "A personal phone is not enrolled but the user wants SSO to Microsoft 365 apps after signing in with a work account. What does the device registration provide?",
    "options": [
      {
        "letter": "A",
        "text": "A device identity in Entra ID that supports Conditional Access and SSO without MDM"
      },
      {
        "letter": "B",
        "text": "Full Intune management of the phone"
      },
      {
        "letter": "C",
        "text": "Automatic BitLocker encryption"
      },
      {
        "letter": "D",
        "text": "A local administrator account"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entra registration gives the phone an identity for SSO and Conditional Access without enrolling it in MDM. It does not provide device management, BitLocker (a Windows feature), or local admin rights. Registration is also what lets Conditional Access recognise the device as known rather than unknown.\n\nExam tip: Registration is identity, enrolment is management; BYOD often needs only the former.",
    "source": "Prepare infrastructure for devices using Microsoft Intune and Microsoft Entra ID — Compare device registration, Microsoft Entra join, and hybrid join",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 243,
    "domain": "identity",
    "topic": "Fabrikam corporate device compliance",
    "stem": "Corporate laptops must meet encryption and OS version rules before accessing email. Which policy type should Fabrikam use for those laptops?",
    "options": [
      {
        "letter": "A",
        "text": "A device compliance policy combined with a Conditional Access compliant device grant"
      },
      {
        "letter": "B",
        "text": "An app protection policy only"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile"
      },
      {
        "letter": "D",
        "text": "A web link app"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Corporate devices are enrolled, so compliance policies can evaluate encryption and OS version, and Conditional Access can require a compliant device. App protection alone protects data but does not evaluate device state, Wi-Fi is connectivity, and a web link is a shortcut.\n\nExam tip: Enrolled corporate devices use compliance plus Conditional Access; BYOD uses MAM.",
    "source": "Protect devices using Microsoft Intune — Understand compliance policies and risk-based enforcement",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 244,
    "domain": "identity",
    "topic": "Fabrikam multi-identity personal and work",
    "stem": "Users want to keep personal and work accounts in the same Outlook app, with protection applied only to work data. Which capability makes this possible?",
    "options": [
      {
        "letter": "A",
        "text": "Multi-identity support in managed apps"
      },
      {
        "letter": "B",
        "text": "Device enrolment"
      },
      {
        "letter": "C",
        "text": "A kiosk profile"
      },
      {
        "letter": "D",
        "text": "BitLocker"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Multi-identity apps separate personal and work accounts and apply app protection only to the work identity, which is exactly the requirement. Enrolment is not required for MAM, kiosk is a Windows shared-device mode, and BitLocker encrypts disks.\n\nExam tip: One app, two identities, protection on work only.",
    "source": "Manage applications using Microsoft Intune — Define data protection, encryption, and app restriction settings",
    "case": "fabrikam-byod",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 245,
    "domain": "manage",
    "topic": "Tailwind POS kiosk configuration",
    "stem": "POS devices must run only the POS application with no access to the Windows desktop. Which configuration should Tailwind deploy?",
    "options": [
      {
        "letter": "A",
        "text": "A kiosk profile with assigned access to the POS app"
      },
      {
        "letter": "B",
        "text": "A device restrictions profile that hides the Start menu"
      },
      {
        "letter": "C",
        "text": "A compliance policy requiring encryption"
      },
      {
        "letter": "D",
        "text": "An app protection policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Kiosk profiles use assigned access to lock the device to a single app or a restricted app set, which is the supported way to prevent desktop access. Hiding the Start menu is weaker and reversible, compliance evaluates state, and app protection governs app data rather than the shell.\n\nExam tip: Shared POS plus single app equals kiosk assigned access.",
    "source": "Manage and maintain devices using Microsoft Intune — Create configuration profiles",
    "case": "tailwind-hardening",
    "level": "easy",
    "tags": [
      "intune",
      "devices"
    ]
  },
  {
    "id": 246,
    "domain": "manage",
    "topic": "Tailwind shared device local admin",
    "stem": "Shared POS devices currently run with local administrator rights for every user. Which approach removes standing admin rights while still allowing the POS app to run?",
    "options": [
      {
        "letter": "A",
        "text": "Endpoint Privilege Management with an elevation rule for the POS app"
      },
      {
        "letter": "B",
        "text": "A compliance policy with a grace period"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with certificate authentication"
      },
      {
        "letter": "D",
        "text": "A second local administrator account shared by all stores"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Endpoint Privilege Management provides just-in-time elevation for specific apps so users can remain standard. Compliance does not remove rights, Wi-Fi is connectivity, and a shared admin account keeps the original risk. EPM rules can require support approval before elevation, which adds an audit trail for each request.\n\nExam tip: Remove standing admin, elevate the app, not the user.",
    "source": "Extend endpoint capabilities using Microsoft Intune Suite — Understand just-in-time elevation in Endpoint Privilege Management",
    "case": "tailwind-hardening",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 247,
    "domain": "manage",
    "topic": "Tailwind BitLocker key escrow",
    "stem": "BitLocker recovery keys must be retrievable only by authorised staff, not stored in a spreadsheet. Which configuration should Tailwind use?",
    "options": [
      {
        "letter": "A",
        "text": "Escrow recovery keys to Microsoft Entra ID and restrict retrieval with Intune RBAC"
      },
      {
        "letter": "B",
        "text": "Store the keys in a shared OneDrive folder"
      },
      {
        "letter": "C",
        "text": "Email the keys to each store manager"
      },
      {
        "letter": "D",
        "text": "Disable BitLocker on laptops"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "BitLocker policy can escrow recovery information to Entra ID, and Intune RBAC controls who may read the key. A shared folder or email exposes keys broadly, and disabling encryption removes protection. The encryption report then shows which devices have escrowed keys and which still need attention.\n\nExam tip: Escrow plus least-privilege retrieval, never a spreadsheet.",
    "source": "Protect devices using Microsoft Intune — Manage BitLocker recovery keys and user self-service options",
    "case": "tailwind-hardening",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 248,
    "domain": "manage",
    "topic": "Tailwind update deadline and pilot",
    "stem": "Review the diagram. Updates must install within 14 days, with a pilot store group receiving them first. Which two settings should Tailwind configure? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "A pilot update ring assigned to the pilot store group"
      },
      {
        "letter": "B",
        "text": "A deadline for quality updates with a grace period"
      },
      {
        "letter": "C",
        "text": "Active hours set to 24 hours"
      },
      {
        "letter": "D",
        "text": "A feature update policy that pins Windows 10"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A pilot ring stages the rollout, and a deadline with a grace period forces installation within the required window. Active hours protect working time but do not enforce a deadline, and pinning Windows 10 contradicts the Windows 11 estate.\n\nExam tip: Pilot ring for safety, deadline for compliance; both are needed.",
    "source": "Manage and maintain devices using Microsoft Intune — Implement update rings and feature update policies in Intune",
    "diagram": "update-ring",
    "case": "tailwind-hardening",
    "level": "medium",
    "tags": [
      "devices"
    ]
  },
  {
    "id": 249,
    "domain": "manage",
    "topic": "Tailwind lost laptop response",
    "stem": "Review the diagram. A manager's laptop is lost in an airport. Tailwind wants to lock it immediately and preserve the option to wipe if it does not reappear. Which sequence is best?",
    "options": [
      {
        "letter": "A",
        "text": "Remote lock now, then wipe if the device is not recovered"
      },
      {
        "letter": "B",
        "text": "Wipe immediately and skip remote lock"
      },
      {
        "letter": "C",
        "text": "Retire the device and delete the record"
      },
      {
        "letter": "D",
        "text": "Rotate the BitLocker key only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Remote lock secures the device without destroying data, and a wipe remains available if recovery fails. Wiping immediately removes the chance of recovery, retiring leaves the device usable and removes management, and rotating the key does not lock the screen.\n\nExam tip: Lost device playbook: lock, monitor, then wipe on a decision point.",
    "source": "Manage and maintain devices using Microsoft Intune — View device and policy health in the Intune admin center",
    "diagram": "remote-actions",
    "case": "tailwind-hardening",
    "level": "hard",
    "tags": [
      "security",
      "devices"
    ]
  },
  {
    "id": 250,
    "domain": "manage",
    "topic": "Tailwind Defender hardening",
    "stem": "Tailwind wants Microsoft-recommended security settings plus ASR rules in audit mode before enforcement. Which two actions fit? Select two.",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the Windows security baseline and review deviations"
      },
      {
        "letter": "B",
        "text": "Enable ASR rules in audit mode for a pilot group"
      },
      {
        "letter": "C",
        "text": "Disable Defender antivirus to avoid conflicts"
      },
      {
        "letter": "D",
        "text": "Set every ASR rule to block immediately for all stores"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The security baseline provides recommended settings, and ASR in audit mode measures impact before enforcement. Disabling antivirus weakens protection, and blocking every rule immediately risks breaking store applications. Review audit events per rule, then move the rules that show no business impact to block mode.\n\nExam tip: Baseline plus audit, then enforce with evidence.",
    "source": "Protect devices using Microsoft Intune — Configure Attack Surface Reduction rules using Microsoft Intune",
    "case": "tailwind-hardening",
    "level": "medium",
    "tags": [
      "security"
    ]
  },
  {
    "id": 251,
    "domain": "manage",
    "topic": "Tailwind compliance and access enforcement",
    "stem": "Review the diagram. Tailwind must block store devices that fall out of compliance from accessing corporate resources, while still allowing a grace period for remediation. Which combination fits?",
    "options": [
      {
        "letter": "A",
        "text": "A compliance policy with scheduled actions and a Conditional Access compliant device grant"
      },
      {
        "letter": "B",
        "text": "An app protection policy alone"
      },
      {
        "letter": "C",
        "text": "A Wi-Fi profile with EAP-TLS"
      },
      {
        "letter": "D",
        "text": "A kiosk profile with no compliance policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The compliance policy defines the rules and schedules when a device is marked noncompliant, and Conditional Access blocks access based on that state, which provides a remediation window before enforcement. App protection covers app data, Wi-Fi is connectivity, and a kiosk profile does not evaluate compliance.\n\nExam tip: Compliance defines and schedules; Conditional Access enforces.",
    "source": "Protect devices using Microsoft Intune — Configure actions for noncompliant devices",
    "diagram": "compliance-evaluation",
    "case": "tailwind-hardening",
    "level": "hard",
    "tags": [
      "security"
    ]
  }
];
