// SC-200 Exam Simulator - question bank
// Generated from sources/*.md by tools/build-questions.mjs. Do not edit by hand.
window.CASE_STUDIES = [
  {
    "id": "contoso-ransomware",
    "title": "Case Study 1 - Contoso Manufacturing ransomware response",
    "html": "<p>Contoso Manufacturing runs 2,400 staff across four plants. It uses Microsoft Defender XDR, Microsoft Sentinel on a single Log Analytics workspace, and a hybrid identity model in which an on-premises Active Directory forest is synchronized to Microsoft Entra ID.</p><h4>Current estate</h4><ul><li>1,900 Windows 11 workstations and 260 Windows Server 2022 servers, all onboarded to Defender for Endpoint.</li><li>Six domain controllers running Windows Server 2022, with Defender for Identity deployed on four of them.</li><li>Microsoft 365 E5 for all staff, with Defender for Office 365 protection and Safe Links enabled.</li><li>Sentinel ingests Defender XDR incidents, Entra ID sign-in and audit logs, and Microsoft 365 audit records.</li><li>A tier-0 set of 40 privileged accounts is documented in the identity governance system.</li></ul><h4>The incident</h4><p>On a Friday evening an analyst notices that a file server is renaming documents with a `.locked` extension. Within twenty minutes alerts appear on eleven servers and two hypervisors.</p><h4>Requirements</h4><ul><li>Leadership wants the encryption stopped and the environment restored without paying the ransom.</li><li>Legal wants evidence preserved because the insurer requires a forensic report.</li><li>The board wants to know which ransomware family is responsible and what recovery time is realistic.</li><li>The change advisory board has frozen production changes, so any containment must be justified as an emergency action.</li></ul>"
  },
  {
    "id": "fabrikam-identity",
    "title": "Case Study 2 - Fabrikam Financial credential attack",
    "html": "<p>Fabrikam Financial Services has 6,000 staff and is regulated by a financial authority that requires three years of retained authentication records. It runs Microsoft Sentinel on a single workspace in West Europe and uses Microsoft Entra ID P2, Defender for Cloud Apps, and Defender for Office 365.</p><h4>Current estate</h4><ul><li>Microsoft Entra ID with Conditional Access, MFA enforced for all staff, and no passwordless methods yet.</li><li>Two VPN vendors: one for office users and one retained after an acquisition. Both write logs with different field names.</li><li>Sentinel ingests Entra ID sign-in and audit logs, Microsoft 365 audit records, and Defender XDR incidents.</li><li>The service desk resets passwords but has no authority to disable accounts.</li><li>A list of 120 finance and treasury accounts is maintained by the identity team.</li></ul><h4>The incident</h4><p>On a Monday morning, 800 accounts receive one sign-in attempt each from a small set of cloud-hosted IP addresses using the password `Winter2026!`. Nine attempts succeed. One of those accounts then registers a new authentication method and consents to a mail-reading application.</p><h4>Requirements</h4><ul><li>Detect the spray, the successful sign-ins, and the application consent as one investigation.</li><li>Reduce the time to detect future sprays to under one minute.</li><li>Report spray volume and success rate to the board every week.</li><li>Retain authentication records for three years without paying for three years of full analytics retention.</li></ul>"
  },
  {
    "id": "tailwind-insider",
    "title": "Case Study 3 - Tailwind Logistics insider data theft",
    "html": "<p>Tailwind Logistics employs 1,800 people. A senior pricing analyst with access to the full customer rate card has resigned and will leave in three weeks. Human Resources has asked security to investigate without alerting the employee.</p><h4>Current estate</h4><ul><li>Microsoft 365 E5 with Microsoft Purview data loss prevention policies for financial data.</li><li>Microsoft Sentinel ingests Microsoft 365 audit records, Defender for Cloud Apps alerts, and Entra ID sign-in logs.</li><li>UEBA is enabled in the Sentinel workspace.</li><li>All staff use OneDrive for Business; the pricing team uses a SharePoint site holding 40,000 rate-card documents.</li><li>Endpoint devices run Defender for Endpoint with network protection enabled.</li></ul><h4>The concern</h4><p>Over the past eleven days the analyst has downloaded 2,300 documents between 22:00 and 02:00, well outside their normal pattern, and has uploaded files to a personal cloud storage account.</p><h4>Requirements</h4><ul><li>Preserve evidence that will stand up in an employment tribunal.</li><li>Determine whether customer data actually left the organisation.</li><li>Keep the employee working normally until HR decides on the interview.</li><li>Retain mailbox and file evidence for legal hold after the employee leaves.</li></ul>"
  }
];

window.QUESTIONS = [
  {
    "id": 1,
    "domain": "xdr",
    "topic": "Cross-workload incident correlation",
    "stem": "Review the diagram.\n\nA security operations centre receives several alerts within ten minutes: a malicious PowerShell command on a laptop, a risky sign-in for the laptop's user, and a phishing message delivered to the same user's mailbox. The analyst wants these detections treated as one attack instead of three unrelated tickets.\n\nWhich Microsoft component performs this correlation by default?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Defender XDR"
      },
      {
        "letter": "B",
        "text": "A Microsoft Sentinel scheduled analytics rule"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender for Endpoint"
      },
      {
        "letter": "D",
        "text": "A Log Analytics workspace query"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft Defender XDR ingests signals from Defender for Endpoint, Defender for Identity, Defender for Office 365, and Defender for Cloud Apps, then correlates related alerts and entities into a single incident. The shared user and device become the evidence that links the email, identity, and endpoint activity. In the diagram the four workload boxes feed one correlation service, which is why the same user and device end up in a single incident.\n\n- **B** is wrong. A Sentinel scheduled analytics rule can create incidents from its own queries, but it does not natively correlate Defender workload alerts unless they are ingested and the rule is written to do so.\n- **C** is wrong. Defender for Endpoint sees endpoint telemetry only; it does not own mailbox or identity detections.\n- **D** is wrong. Log Analytics stores and queries data, but correlation into an XDR incident is a Defender XDR capability.\n\n**Exam tip:** Defender XDR is the correlation layer; the individual Defender products are the signal sources.",
    "source": "Mitigate threats using Microsoft Defender XDR — Explore Microsoft Defender XDR",
    "diagram": "defender-xdr"
  },
  {
    "id": 2,
    "domain": "xdr",
    "topic": "Attack story view",
    "stem": "An incident contains alerts from a phishing email, a suspicious sign-in, and a ransomware detection on the user's device. The analyst needs a single chronological view that shows how the alerts and entities relate.\n\nWhich incident tab should the analyst open?",
    "options": [
      {
        "letter": "A",
        "text": "Attack story"
      },
      {
        "letter": "B",
        "text": "Incident queue"
      },
      {
        "letter": "C",
        "text": "Threat analytics"
      },
      {
        "letter": "D",
        "text": "Device inventory"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The attack story tab presents the alerts, entities, and remediation actions for an incident in one timeline, so an analyst can follow the chain from initial access to impact without opening each alert separately.\n\n- **B** is wrong. The incident queue is the list of incidents used for triage, not the detailed timeline of one incident.\n- **C** is wrong. Threat analytics describes tracked threat actors and campaigns, not the evidence in a specific incident.\n- **D** is wrong. Device inventory lists devices and their risk, not the sequence of events in an incident.\n\n**Exam tip:** queue for triage, attack story for the narrative, advanced hunting for your own queries.",
    "source": "Mitigate threats using Microsoft Defender XDR — Manage incidents"
  },
  {
    "id": 3,
    "domain": "xdr",
    "topic": "Incident queue prioritisation",
    "stem": "A two-person SOC cannot review every incident. Leadership wants analysts to work the incidents that are active, high severity, and still unassigned before anything else.\n\nWhich queue configuration best matches that requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Filter to Active status, sort by severity, and filter to unassigned incidents."
      },
      {
        "letter": "B",
        "text": "Sort by incident ID ascending and review every incident once."
      },
      {
        "letter": "C",
        "text": "Filter to Resolved incidents so the team can learn from past cases."
      },
      {
        "letter": "D",
        "text": "Sort by the number of alerts and ignore severity and status."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The incident queue supports filters for status, severity, assignment, service source, and tags. Filtering to active, high-severity, unassigned incidents concentrates limited analyst time on the work that is both urgent and not already owned.\n\n- **B** is wrong. Incident ID order has no relationship to business risk and would waste time on low-severity items.\n- **C** is wrong. Resolved incidents are useful for reporting and lessons learned, not for live triage.\n- **D** is wrong. Alert count alone can reflect noisy detections; severity and active status are better risk signals.\n\n**Exam tip:** triage by severity, status, and ownership first, then pivot into the attack story.",
    "source": "Mitigate threats using Microsoft Defender XDR — Prioritize incidents"
  },
  {
    "id": 4,
    "domain": "xdr",
    "topic": "Incident entity types",
    "stem": "An incident lists a user who signed in from a new country, the laptop that user was issued, and the mailbox that received a phishing message. The analyst wants to identify the entity type that represents the user's directory account.\n\nWhich entity type should the analyst select?",
    "options": [
      {
        "letter": "A",
        "text": "Account"
      },
      {
        "letter": "B",
        "text": "Mailbox"
      },
      {
        "letter": "C",
        "text": "Device"
      },
      {
        "letter": "D",
        "text": "IP address"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender XDR models a user's directory identity as an Account entity. Account entities can be pivoted to sign-ins, alerts, and related devices, which is how analysts determine whether the same identity appears in other incidents.\n\n- **B** is wrong. A Mailbox entity represents the mail-enabled store and its email activity, not the directory account itself.\n- **C** is wrong. A Device entity represents the endpoint and its telemetry.\n- **D** is wrong. An IP address entity represents network origin or destination, which can be shared by many users.\n\n**Exam tip:** the Account entity is the pivot point for identity-centric investigations.",
    "source": "Mitigate threats using Microsoft Defender XDR — Investigate incidents"
  },
  {
    "id": 5,
    "domain": "xdr",
    "topic": "Incident management actions",
    "stem": "An analyst has confirmed that an incident is a true positive and is now working it with a teammate.\n\nWhich two actions can the analyst take directly from the incident in the Defender portal? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Assign the incident to a named analyst."
      },
      {
        "letter": "B",
        "text": "Change the incident status and classification."
      },
      {
        "letter": "C",
        "text": "Rewrite the analytics rule that produced the alert."
      },
      {
        "letter": "D",
        "text": "Delete the underlying raw events from the Log Analytics workspace."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Incident ownership and lifecycle are managed on the incident itself: analysts assign an owner, set status to Active or Resolved, and classify the result as a true positive, false positive, or informational activity. These fields drive queue filters and reporting.\n\n- **C** is wrong. Rule logic is edited in the analytics rule or custom detection definition, not on the incident record.\n- **D** is wrong. Incidents reference alert evidence; deleting raw workspace events is a separate data-management operation and is not an incident action.\n\n**Exam tip:** assignment, status, and classification are the three incident fields exam questions use most.",
    "source": "Mitigate threats using Microsoft Defender XDR — Manage incidents"
  },
  {
    "id": 6,
    "domain": "xdr",
    "topic": "Correlation layer in the XDR architecture",
    "stem": "Review the architecture diagram.\n\nSeveral Defender workloads send detections to a central service, which then presents one incident.\n\nWhich component performs the correlation?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Defender XDR"
      },
      {
        "letter": "B",
        "text": "Defender for Office 365"
      },
      {
        "letter": "C",
        "text": "Defender for Cloud Apps"
      },
      {
        "letter": "D",
        "text": "The Log Analytics workspace"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The diagram shows the four workload signals converging on Microsoft Defender XDR, which correlates alerts and evidence before producing the unified incident. Correlation is the platform function, not a function of any one workload.\n\n- **B** is wrong. Defender for Office 365 supplies email and collaboration detections but does not correlate endpoint and identity alerts.\n- **C** is wrong. Defender for Cloud Apps supplies SaaS and OAuth activity but is one of the sources.\n- **D** is wrong. Log Analytics stores log data; it is not the XDR correlation engine shown in the diagram.\n\n**Exam tip:** in XDR diagrams, the middle box that receives every workload is always the correlation layer.",
    "source": "Mitigate threats using Microsoft Defender XDR — Explore Microsoft Defender XDR",
    "diagram": "defender-xdr"
  },
  {
    "id": 7,
    "domain": "xdr",
    "topic": "Unified role-based access control",
    "stem": "A security team wants one permission model for endpoint, identity, email, and cloud-app investigations. Analysts should receive only the permissions needed for their tier, without separate role assignments in four product portals.\n\nWhat should the team configure?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Defender XDR unified role-based access control"
      },
      {
        "letter": "B",
        "text": "Azure RBAC role assignments on each subscription"
      },
      {
        "letter": "C",
        "text": "Microsoft Entra security groups with no roles"
      },
      {
        "letter": "D",
        "text": "Separate custom roles in each Defender workload only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Unified RBAC in the Defender portal centralises permissions across the Defender workloads. You assign users to roles such as Security Reader, Security Operator, or Security Administrator, and the permissions apply across the integrated products.\n\n- **B** is wrong. Azure RBAC governs Azure resources; it does not replace Defender workload permissions.\n- **C** is wrong. Group membership alone grants no permissions.\n- **D** is wrong. Per-workload roles are the fragmented model unified RBAC is designed to replace.\n\n**Exam tip:** unified RBAC is configured once in the Defender portal and applies across the integrated workloads.",
    "source": "Mitigate threats using Microsoft Defender XDR — Microsoft Defender XDR unified RBAC"
  },
  {
    "id": 8,
    "domain": "xdr",
    "topic": "Advanced hunting data scope",
    "stem": "An analyst wants to write a custom query that joins endpoint process events with email delivery events for the same user.\n\nWhich statement describes the data available to advanced hunting in the Defender portal?",
    "options": [
      {
        "letter": "A",
        "text": "It queries the Defender XDR schema, including Device, Email, Identity, and CloudApp tables, retained for up to 30 days."
      },
      {
        "letter": "B",
        "text": "It queries only Microsoft Sentinel workspace tables and follows the workspace retention period."
      },
      {
        "letter": "C",
        "text": "It queries endpoint telemetry only and cannot join email events."
      },
      {
        "letter": "D",
        "text": "It queries the last 24 hours of data and cannot be changed."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Advanced hunting uses the Defender XDR schema, which includes endpoint, email, identity, and cloud-app tables. Query results cover up to 30 days of retained data, which is enough to join process and email activity for an investigation.\n\n- **B** is wrong. Sentinel queries run against the Log Analytics workspace; advanced hunting in the Defender portal uses the XDR schema.\n- **C** is wrong. The XDR schema spans multiple workloads, which is what makes cross-domain joins possible.\n- **D** is wrong. The lookback is up to 30 days, not fixed at 24 hours.\n\n**Exam tip:** if a query needs 90-day retention or custom workspace tables, use Sentinel, not XDR advanced hunting.",
    "source": "Mitigate threats using Microsoft Defender XDR — Advanced hunting"
  },
  {
    "id": 9,
    "domain": "xdr",
    "topic": "Custom detection response actions",
    "stem": "An analyst has a KQL query that reliably finds credential-dumping behaviour. The team wants the device isolated automatically whenever the query returns a result, without waiting for a scheduled Sentinel rule.\n\nWhich Defender XDR feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "A custom detection rule with a response action"
      },
      {
        "letter": "B",
        "text": "A Sentinel workbook"
      },
      {
        "letter": "C",
        "text": "An alert tuning rule"
      },
      {
        "letter": "D",
        "text": "A device group with standard automation only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Custom detection rules run advanced hunting queries on a schedule and can take response actions such as isolating a device or marking a user as compromised. That makes them the native way to turn a hunting query into automated containment.\n\n- **B** is wrong. Workbooks visualise data; they do not execute response actions.\n- **C** is wrong. Alert tuning suppresses or adjusts alerts and does not isolate devices.\n- **D** is wrong. Device group automation controls investigation and remediation of alerts, but the query-based trigger still needs a custom detection.\n\n**Exam tip:** custom detection = KQL plus optional response action; Sentinel analytics rule = alert and incident, with playbooks for action.",
    "source": "Mitigate threats using Microsoft Defender XDR — Custom detections"
  },
  {
    "id": 10,
    "domain": "xdr",
    "topic": "Automatic attack disruption",
    "stem": "During a high-confidence identity attack, Defender XDR disables a compromised user account and contains affected devices while the SOC is still reading the first alert.\n\nWhich capability performed this containment?",
    "options": [
      {
        "letter": "A",
        "text": "Automatic attack disruption"
      },
      {
        "letter": "B",
        "text": "Safe Attachments"
      },
      {
        "letter": "C",
        "text": "Manual live response"
      },
      {
        "letter": "D",
        "text": "Threat Explorer"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automatic attack disruption uses high-fidelity signals to contain an attack at machine speed, for example by disabling a compromised account or isolating a device. It is designed to limit damage before an analyst can act.\n\n- **B** is wrong. Safe Attachments detonates email attachments; it does not disable accounts.\n- **C** is wrong. Live response is an analyst-initiated remote shell session.\n- **D** is wrong. Threat Explorer is an email investigation and hunting tool.\n\n**Exam tip:** attack disruption is automatic containment; AIR is automated investigation and remediation of alerts.",
    "source": "Mitigate threats using Microsoft Defender XDR — Automatic attack disruption"
  },
  {
    "id": 11,
    "domain": "xdr",
    "topic": "Alert versus incident",
    "stem": "Review the diagram.\n\nA new analyst asks why the portal shows 40 alerts but only 6 incidents.\n\nWhich explanation is correct?",
    "options": [
      {
        "letter": "A",
        "text": "An incident groups related alerts that together describe an attack, while an alert is a single detection."
      },
      {
        "letter": "B",
        "text": "An alert groups related incidents, while an incident is a single detection."
      },
      {
        "letter": "C",
        "text": "Alerts and incidents are two names for the same object."
      },
      {
        "letter": "D",
        "text": "Incidents are created only by Microsoft Sentinel, never by Defender XDR."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "An alert is one detection raised by a security product. Defender XDR correlates alerts that share entities or timing into an incident, giving the analyst one case with a combined attack story. The diagram shows several detections arriving from different workloads and resolving into one incident record, which is why the alert count is far higher than the incident count.\n\n- **B** is wrong. The relationship is the other way round: incidents contain alerts.\n- **C** is wrong. They are distinct objects with different lifecycles and identifiers.\n- **D** is wrong. Defender XDR creates incidents natively from correlated alerts.\n\n**Exam tip:** one incident can contain many alerts, and one alert can appear in only one incident at a time.",
    "source": "Mitigate threats using Microsoft Defender XDR — Manage incidents",
    "diagram": "defender-xdr"
  },
  {
    "id": 12,
    "domain": "xdr",
    "topic": "Unified incident queue benefits",
    "stem": "A global SOC currently triages endpoint, email, and identity alerts in three separate consoles. Management wants a single queue with correlated cases.\n\nWhich two outcomes does the unified incident queue provide? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "A cross-workload view of related alerts in one incident."
      },
      {
        "letter": "B",
        "text": "Correlation that reduces duplicate triage of the same attack."
      },
      {
        "letter": "C",
        "text": "Automatic ingestion of every third-party firewall log."
      },
      {
        "letter": "D",
        "text": "A guarantee that every incident is a true positive."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The unified queue presents incidents built from multiple Defender workloads and groups related alerts, so analysts see one case instead of several product-specific tickets. Fewer duplicate cases means less repeated triage.\n\n- **C** is wrong. Third-party log ingestion is a data-connector concern, typically in Sentinel or the Log Analytics pipeline.\n- **D** is wrong. Correlation improves context but cannot eliminate false positives.\n\n**Exam tip:** unified queue benefits are visibility and reduced duplication, not data onboarding or accuracy guarantees.",
    "source": "Mitigate threats using Microsoft Defender XDR — Prioritize incidents"
  },
  {
    "id": 13,
    "domain": "xdr",
    "topic": "Device inventory",
    "stem": "A security administrator needs to confirm which Windows servers are onboarded to Defender for Endpoint, what risk level each carries, and which ones have unresolved vulnerabilities.\n\nWhich page provides that consolidated view?",
    "options": [
      {
        "letter": "A",
        "text": "Device inventory"
      },
      {
        "letter": "B",
        "text": "Action center"
      },
      {
        "letter": "C",
        "text": "Threat analytics"
      },
      {
        "letter": "D",
        "text": "Incident queue"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device inventory lists onboarded devices with onboarding status, operating system, risk level, exposure level, and vulnerability findings. It is the starting point for device-centric investigations and coverage checks.\n\n- **B** is wrong. Action center lists pending and completed remediation actions.\n- **C** is wrong. Threat analytics describes tracked adversaries and campaigns.\n- **D** is wrong. The incident queue lists cases, not device posture.\n\n**Exam tip:** device coverage and risk questions point to Device inventory; pending fixes point to Action center.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Explore the device inventory"
  },
  {
    "id": 14,
    "domain": "xdr",
    "topic": "Threat and vulnerability prioritisation",
    "stem": "A vulnerability manager has thousands of findings and limited patching windows. The manager wants to fix the vulnerabilities most likely to be exploited and most exposed to attack first.\n\nWhich approach should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Review security recommendations in threat and vulnerability management, prioritised by exposure and threat intelligence."
      },
      {
        "letter": "B",
        "text": "Patch every finding alphabetically by CVE identifier."
      },
      {
        "letter": "C",
        "text": "Patch only the oldest devices first, regardless of exploitability."
      },
      {
        "letter": "D",
        "text": "Disable vulnerability scanning and rely on alerts alone."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Threat and vulnerability management prioritises recommendations using exposure, exploitability, and threat intelligence. That lets a team address the findings that materially reduce risk instead of treating every CVE as equally urgent.\n\n- **B** is wrong. CVE order has no relationship to organisational risk.\n- **C** is wrong. Device age is not a measure of exploitability or exposure.\n- **D** is wrong. Removing scanning blinds the team to the vulnerabilities it needs to manage.\n\n**Exam tip:** TVM answers \"what should we fix first?\", not \"what exists?\".",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Explore threat and vulnerability management"
  },
  {
    "id": 15,
    "domain": "xdr",
    "topic": "Device isolation",
    "stem": "A workstation is communicating with a confirmed command-and-control server. The analyst must stop outbound malware traffic immediately but keep the device available for forensics.\n\nWhich action should the analyst take first?",
    "options": [
      {
        "letter": "A",
        "text": "Isolate the device with full isolation."
      },
      {
        "letter": "B",
        "text": "Run a full antivirus scan and wait for it to finish."
      },
      {
        "letter": "C",
        "text": "Collect an investigation package and then close the incident."
      },
      {
        "letter": "D",
        "text": "Remove the device from Defender for Endpoint."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Full isolation blocks network communication while preserving the device and its evidence for investigation. Analysts can view the device and run live response while it remains isolated.\n\n- **B** is wrong. A scan takes time and does not stop active command-and-control traffic.\n- **C** is wrong. Collecting a package preserves evidence but does not contain the live connection.\n- **D** is wrong. Offboarding removes management and telemetry, which is the opposite of what an investigation needs.\n\n**Exam tip:** contain first with isolation, then investigate; offboarding is not a containment action.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Take response actions on a device"
  },
  {
    "id": 16,
    "domain": "xdr",
    "topic": "Live response",
    "stem": "An analyst needs an interactive remote session on an isolated device to list processes, copy a suspicious file to the evidence library, and delete a persistence key.\n\nWhich capability should the analyst use?",
    "options": [
      {
        "letter": "A",
        "text": "Live response"
      },
      {
        "letter": "B",
        "text": "Device timeline"
      },
      {
        "letter": "C",
        "text": "Investigation package collection"
      },
      {
        "letter": "D",
        "text": "Attack surface reduction"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Live response opens a remote shell on the device with a controlled command set. It supports investigation commands, file collection, and remediation while the device stays managed and, if needed, isolated.\n\n- **B** is wrong. Device timeline is a read-only historical view of events.\n- **C** is wrong. The investigation package is a static collection of artifacts for offline analysis.\n- **D** is wrong. ASR rules block behaviours; they do not provide an interactive session.\n\n**Exam tip:** live response is interactive and can change the device; the investigation package is a snapshot.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Live response"
  },
  {
    "id": 17,
    "domain": "xdr",
    "topic": "Investigation package",
    "stem": "A device must be rebuilt, but the incident response team needs process, network, autorun, and scheduled-task evidence preserved for offline analysis.\n\nWhich Defender for Endpoint action should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Collect an investigation package."
      },
      {
        "letter": "B",
        "text": "Isolate the device."
      },
      {
        "letter": "C",
        "text": "Run an advanced hunting query."
      },
      {
        "letter": "D",
        "text": "Restrict app execution."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The investigation package collects forensic artifacts from the device, including process information, network connections, autoruns, and scheduled tasks, and makes them available for download and offline analysis.\n\n- **B** is wrong. Isolation stops network traffic but does not package evidence.\n- **C** is wrong. Hunting queries historical telemetry; it does not collect local artifacts.\n- **D** is wrong. Restricting app execution blocks applications and is a containment measure.\n\n**Exam tip:** rebuilding a device? Collect the investigation package before reimaging.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Collect an investigation package"
  },
  {
    "id": 18,
    "domain": "xdr",
    "topic": "Pivoting on an entity in the investigation graph",
    "stem": "Review the incident investigation diagram.\n\nAn analyst sees an alert on a device and wants to know which other alerts and events involve the same signed-in user.\n\nWhich action should the analyst take?",
    "options": [
      {
        "letter": "A",
        "text": "Expand the Account entity in the investigation graph."
      },
      {
        "letter": "B",
        "text": "Open the device inventory and sort by risk."
      },
      {
        "letter": "C",
        "text": "Run a vulnerability scan on the device."
      },
      {
        "letter": "D",
        "text": "Export the investigation package."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The investigation graph lets an analyst pivot from an entity to related alerts, events, and bookmarks. Expanding the Account entity shows every item connected to that identity, which is how the analyst scopes the incident.\n\n- **B** is wrong. Device inventory is a posture list, not a relationship view for one incident.\n- **C** is wrong. A vulnerability scan does not reveal related alerts.\n- **D** is wrong. The investigation package collects endpoint artifacts, not cross-incident relationships.\n\n**Exam tip:** in the graph, the entity you expand determines the scope of the investigation.",
    "source": "Mitigate threats using Microsoft Defender XDR — Investigate incidents",
    "diagram": "investigation-graph"
  },
  {
    "id": 19,
    "domain": "xdr",
    "topic": "Attack surface reduction rules",
    "stem": "An organisation wants to stop malicious documents from launching PowerShell and other child processes, without blocking legitimate user productivity applications.\n\nWhich control should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Attack surface reduction rules"
      },
      {
        "letter": "B",
        "text": "Safe Attachments"
      },
      {
        "letter": "C",
        "text": "Device isolation"
      },
      {
        "letter": "D",
        "text": "Web content filtering"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Attack surface reduction rules block risky behaviours such as Office applications creating child processes, script files launching downloaded content, and credential theft from LSASS. They target the behaviour rather than the application.\n\n- **B** is wrong. Safe Attachments detonates email attachments; it does not block local child-process creation.\n- **C** is wrong. Isolation is a response action after compromise.\n- **D** is wrong. Web content filtering blocks categories of websites.\n\n**Exam tip:** ASR is behavioural prevention; Safe Attachments is email detonation.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Attack surface reduction"
  },
  {
    "id": 20,
    "domain": "xdr",
    "topic": "Action center remediation",
    "stem": "An automated investigation has completed and recommends quarantining a file and removing a registry key, but the actions are waiting for approval.\n\nWhere does the analyst approve those actions?",
    "options": [
      {
        "letter": "A",
        "text": "Action center"
      },
      {
        "letter": "B",
        "text": "Device inventory"
      },
      {
        "letter": "C",
        "text": "Threat analytics"
      },
      {
        "letter": "D",
        "text": "Advanced hunting"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Action center lists pending and completed remediation actions from automated investigations and manual response. Analysts approve, reject, or review the actions there, and the history supports audit and reporting.\n\n- **B** is wrong. Device inventory shows device posture and coverage.\n- **C** is wrong. Threat analytics describes adversaries and campaigns.\n- **D** is wrong. Advanced hunting runs queries; it does not approve remediation.\n\n**Exam tip:** pending remediation = Action center; incident narrative = attack story.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Automated investigation and remediation"
  },
  {
    "id": 21,
    "domain": "xdr",
    "topic": "Device discovery",
    "stem": "A security team suspects that contractor laptops are connecting to the corporate network without the Defender for Endpoint agent. The team wants Defender for Endpoint to identify these unmanaged devices from network observations.\n\nWhich capability should be enabled?",
    "options": [
      {
        "letter": "A",
        "text": "Device discovery"
      },
      {
        "letter": "B",
        "text": "Live response"
      },
      {
        "letter": "C",
        "text": "Attack surface reduction"
      },
      {
        "letter": "D",
        "text": "Threat and vulnerability management"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device discovery uses onboarded devices and network telemetry to find unmanaged devices that are communicating on the network. The discovered devices appear in the device inventory so the team can assess and onboard them.\n\n- **B** is wrong. Live response connects to an already onboarded device.\n- **C** is wrong. ASR rules block behaviours on managed endpoints.\n- **D** is wrong. TVM assesses vulnerabilities on known devices; it does not discover unknown ones.\n\n**Exam tip:** coverage gaps and unknown assets point to device discovery.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Configure device discovery"
  },
  {
    "id": 22,
    "domain": "xdr",
    "topic": "Least privilege for response actions",
    "stem": "A tier-one analyst needs to isolate compromised devices and run live response, but must not be able to change security settings or manage roles.\n\nWhich built-in Defender XDR role should be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "Security Operator"
      },
      {
        "letter": "B",
        "text": "Security Reader"
      },
      {
        "letter": "C",
        "text": "Security Administrator"
      },
      {
        "letter": "D",
        "text": "Global Administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Security Operator role can read security data and perform limited management, including response actions such as isolating a device. It does not carry the full configuration and role-management rights of Security Administrator.\n\n- **B** is wrong. Security Reader is read-only and cannot isolate devices.\n- **C** is wrong. Security Administrator can change settings and roles, which exceeds the requirement.\n- **D** is wrong. Global Administrator is far broader than the task and should not be used for routine SOC work.\n\n**Exam tip:** choose the smallest role that includes the response action: Reader < Operator < Administrator.",
    "source": "Mitigate threats using Microsoft Defender XDR — Microsoft Defender XDR unified RBAC"
  },
  {
    "id": 23,
    "domain": "xdr",
    "topic": "Endpoint response actions",
    "stem": "A device is confirmed compromised. The analyst wants to stop the malware from spreading and prevent the attacker's unsigned tooling from running again.\n\nWhich two Defender for Endpoint actions should the analyst use? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Isolate the device."
      },
      {
        "letter": "B",
        "text": "Restrict app execution."
      },
      {
        "letter": "C",
        "text": "Disable the user's mailbox."
      },
      {
        "letter": "D",
        "text": "Revoke the user's OAuth consent."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Isolation blocks network communication to contain the device, and restricting app execution prevents unsigned or untrusted executables from running. Together they contain the endpoint while investigation continues.\n\n- **C** is wrong. Mailbox disabling is an Exchange or identity action, not an endpoint response.\n- **D** is wrong. OAuth consent revocation is handled through Entra ID and Defender for Cloud Apps.\n\n**Exam tip:** endpoint containment = isolate; endpoint execution control = restrict app execution.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Take response actions on a device"
  },
  {
    "id": 24,
    "domain": "xdr",
    "topic": "Device groups and automation levels",
    "stem": "An organisation wants automated investigations to remediate threats fully on test workstations, but only collect evidence and wait for approval on production servers.\n\nWhich configuration supports that requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Create separate device groups and set a different automation level on each."
      },
      {
        "letter": "B",
        "text": "Set one automation level for the whole tenant and accept the same behaviour everywhere."
      },
      {
        "letter": "C",
        "text": "Disable automated investigation on all devices."
      },
      {
        "letter": "D",
        "text": "Use Safe Attachments policies for servers."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Device groups let you apply different automation levels, such as full remediation, semi-automation with approvals, or no automation. Assigning servers and workstations to different groups gives each population the behaviour it needs.\n\n- **B** is wrong. A single tenant-wide level cannot express different risk tolerances.\n- **C** is wrong. Disabling investigation removes the automated evidence collection and remediation the team wants on test devices.\n- **D** is wrong. Safe Attachments is an email protection feature and does not control endpoint automation.\n\n**Exam tip:** automation level is a property of the device group, not of the individual alert.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Create a device group"
  },
  {
    "id": 25,
    "domain": "xdr",
    "topic": "Defender for Identity sensor placement",
    "stem": "An organisation wants Defender for Identity to detect credential theft and lateral movement in its on-premises Active Directory.\n\nWhere must the Defender for Identity sensor be installed?",
    "options": [
      {
        "letter": "A",
        "text": "On domain controllers and other AD DS, AD FS, or AD CS servers."
      },
      {
        "letter": "B",
        "text": "On every user's workstation."
      },
      {
        "letter": "C",
        "text": "On the perimeter firewall only."
      },
      {
        "letter": "D",
        "text": "In the Azure subscription as a virtual network gateway."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Identity sensors are installed on domain controllers and, where relevant, AD FS, AD CS, and Microsoft Entra Connect servers. Domain controllers hold the authentication traffic the sensor needs to detect identity attacks.\n\n- **B** is wrong. Workstations do not carry the directory authentication traffic the sensor analyses.\n- **C** is wrong. A firewall sees network flows, not Kerberos and NTLM authentication details.\n- **D** is wrong. A virtual network gateway is a networking component and cannot read directory events.\n\n**Exam tip:** Defender for Identity is an on-premises AD sensor; Defender for Endpoint is the endpoint agent.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Deploy Defender for Identity"
  },
  {
    "id": 26,
    "domain": "xdr",
    "topic": "Pass-the-Hash detection",
    "stem": "Review the diagram.\n\nAn attacker obtains an NTLM password hash from one workstation and uses it to authenticate to a server without knowing the plaintext password.\n\nWhich attack technique is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Pass-the-Hash"
      },
      {
        "letter": "B",
        "text": "Kerberoasting"
      },
      {
        "letter": "C",
        "text": "Golden Ticket"
      },
      {
        "letter": "D",
        "text": "Password spray"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Pass-the-Hash reuses a captured NTLM hash to authenticate, so the attacker never needs the password. Defender for Identity detects the resulting authentication patterns, such as a hash used from an unusual source or across multiple hosts. The diagram traces an NTLM hash taken from one host and replayed against another, which is the path Defender for Identity reports.\n\n- **B** is wrong. Kerberoasting requests service tickets and cracks them offline.\n- **C** is wrong. A Golden Ticket is a forged Kerberos TGT signed with the KRBTGT hash.\n- **D** is wrong. Password spray tries one common password against many accounts.\n\n**Exam tip:** hash without password = Pass-the-Hash; ticket without password = forgery or Kerberoasting.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate identity attacks",
    "diagram": "identity-attack"
  },
  {
    "id": 27,
    "domain": "xdr",
    "topic": "Golden Ticket attack",
    "stem": "An attacker who has obtained the KRBTGT account hash forges a Kerberos ticket-granting ticket with an unusually long lifetime and uses it to access many servers.\n\nWhich attack is this?",
    "options": [
      {
        "letter": "A",
        "text": "Golden Ticket"
      },
      {
        "letter": "B",
        "text": "Pass-the-Hash"
      },
      {
        "letter": "C",
        "text": "Password spray"
      },
      {
        "letter": "D",
        "text": "OAuth consent phishing"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A Golden Ticket is a forged Kerberos TGT signed with the KRBTGT hash. Because the ticket appears valid, it can grant broad access until the KRBTGT password is reset twice and the forged tickets expire.\n\n- **B** is wrong. Pass-the-Hash uses an NTLM hash, not a forged Kerberos TGT.\n- **C** is wrong. Password spray guesses passwords across many accounts.\n- **D** is wrong. OAuth consent phishing tricks a user into granting an application permissions.\n\n**Exam tip:** KRBTGT compromise is a domain-wide emergency; reset KRBTGT twice after containment.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate identity attacks"
  },
  {
    "id": 28,
    "domain": "xdr",
    "topic": "Kerberoasting",
    "stem": "An attacker requests Kerberos service tickets for accounts with service principal names, then takes the tickets offline to crack their passwords.\n\nWhich technique is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Kerberoasting"
      },
      {
        "letter": "B",
        "text": "Golden Ticket"
      },
      {
        "letter": "C",
        "text": "Pass-the-Ticket"
      },
      {
        "letter": "D",
        "text": "Brute force"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Kerberoasting abuses service tickets encrypted with a service account's password hash. The attacker requests tickets and cracks them offline, so failed attempts do not appear as repeated sign-in failures.\n\n- **B** is wrong. A Golden Ticket forges a TGT using the KRBTGT hash.\n- **C** is wrong. Pass-the-Ticket reuses a valid ticket; it does not crack service account passwords.\n- **D** is wrong. Brute force guesses passwords online, which typically produces many failed sign-ins.\n\n**Exam tip:** a burst of service-ticket requests with weak encryption (often RC4) is the Kerberoasting signature.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate identity attacks"
  },
  {
    "id": 29,
    "domain": "xdr",
    "topic": "Lateral movement detection",
    "stem": "Review the diagram.\n\nDefender for Identity raises an alert after a workstation account authenticates to several servers it has never contacted before, using remote service creation.\n\nWhich attack stage does this activity represent?",
    "options": [
      {
        "letter": "A",
        "text": "Lateral movement"
      },
      {
        "letter": "B",
        "text": "Initial access"
      },
      {
        "letter": "C",
        "text": "Exfiltration"
      },
      {
        "letter": "D",
        "text": "Impact"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Lateral movement is the attacker's attempt to move from a compromised host to additional systems. Unusual remote logons and service creation across multiple servers are classic identity-based movement signals. The diagram shows the logon relationships an attacker follows from a compromised workstation towards additional servers.\n\n- **B** is wrong. Initial access is the entry point into the environment.\n- **C** is wrong. Exfiltration is data leaving the environment.\n- **D** is wrong. Impact is the destructive or disruptive end goal, such as encryption.\n\n**Exam tip:** movement between hosts is lateral movement; entry from outside is initial access.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Understand lateral movement",
    "diagram": "identity-attack"
  },
  {
    "id": 30,
    "domain": "xdr",
    "topic": "Defender for Identity versus Entra ID Protection",
    "stem": "An organisation uses both Microsoft Entra ID Protection and Defender for Identity. An analyst is investigating suspicious Kerberos activity on an on-premises domain controller.\n\nWhich solution is the primary source for that detection?",
    "options": [
      {
        "letter": "A",
        "text": "Defender for Identity"
      },
      {
        "letter": "B",
        "text": "Microsoft Entra ID Protection"
      },
      {
        "letter": "C",
        "text": "Defender for Office 365"
      },
      {
        "letter": "D",
        "text": "Defender for Cloud Apps"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Identity monitors domain controller traffic and detects on-premises Active Directory attacks such as Kerberoasting, Pass-the-Hash, and forged tickets. Entra ID Protection focuses on cloud identity risk and sign-in behaviour.\n\n- **B** is wrong. Entra ID Protection evaluates Entra ID sign-ins and risk detections, not domain controller Kerberos traffic.\n- **C** is wrong. Defender for Office 365 covers email and collaboration.\n- **D** is wrong. Defender for Cloud Apps covers SaaS activity.\n\n**Exam tip:** on-prem AD attacks = Defender for Identity; cloud sign-in risk = Entra ID Protection.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Compare identity protection solutions"
  },
  {
    "id": 31,
    "domain": "xdr",
    "topic": "Honeytoken accounts",
    "stem": "A security team creates a fake user account that no legitimate process should ever use. Any authentication attempt against it should raise a high-severity alert.\n\nWhat is this detection technique called?",
    "options": [
      {
        "letter": "A",
        "text": "Honeytoken"
      },
      {
        "letter": "B",
        "text": "Safe Links"
      },
      {
        "letter": "C",
        "text": "Attack surface reduction"
      },
      {
        "letter": "D",
        "text": "Conditional Access"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A honeytoken is a decoy account or resource tagged in Defender for Identity. Because no legitimate activity should touch it, any authentication or access is a strong indicator of an attacker enumerating or using credentials.\n\n- **B** is wrong. Safe Links checks URLs at click time.\n- **C** is wrong. ASR blocks endpoint behaviours.\n- **D** is wrong. Conditional Access evaluates sign-in conditions and access.\n\n**Exam tip:** honeytokens detect credential misuse with very few false positives.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Detect credential theft"
  },
  {
    "id": 32,
    "domain": "xdr",
    "topic": "Identity attacks detected by Defender for Identity",
    "stem": "A SOC wants to improve detection of on-premises credential attacks.\n\nWhich two techniques does Defender for Identity specifically detect? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Pass-the-Hash"
      },
      {
        "letter": "B",
        "text": "Kerberoasting"
      },
      {
        "letter": "C",
        "text": "Safe Links click-through"
      },
      {
        "letter": "D",
        "text": "OAuth application consent"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Defender for Identity analyses domain controller authentication traffic and detects credential attacks such as Pass-the-Hash, Kerberoasting, forged tickets, and suspicious reconnaissance.\n\n- **C** is wrong. Safe Links is a Defender for Office 365 email protection.\n- **D** is wrong. OAuth consent abuse is detected by Defender for Cloud Apps and app governance.\n\n**Exam tip:** match the attack to the workload that sees the telemetry: directory traffic for identity attacks.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate identity attacks"
  },
  {
    "id": 33,
    "domain": "xdr",
    "topic": "Defender for Identity sensor health",
    "stem": "Defender for Identity has been deployed, but a newly promoted domain controller produces no alerts. Other domain controllers work normally.\n\nWhat should the analyst check first?",
    "options": [
      {
        "letter": "A",
        "text": "Confirm the sensor is installed and healthy on the new domain controller."
      },
      {
        "letter": "B",
        "text": "Disable Defender for Identity for the whole environment."
      },
      {
        "letter": "C",
        "text": "Delete the new domain controller from Active Directory."
      },
      {
        "letter": "D",
        "text": "Replace Safe Links policies."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A new domain controller needs the Defender for Identity sensor installed and connected, and the sensor health page should show it as running and up to date. Missing telemetry from one DC usually means the sensor is absent, stopped, or unable to reach the service.\n\n- **B** is wrong. Disabling the product removes coverage everywhere.\n- **C** is wrong. Removing a domain controller is a drastic action unrelated to sensor installation.\n- **D** is wrong. Safe Links is an email feature and has no role in directory sensor health.\n\n**Exam tip:** when one DC is silent, check sensor health before changing detections.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Manage sensor health"
  },
  {
    "id": 34,
    "domain": "xdr",
    "topic": "Safe Links time-of-click protection",
    "stem": "Users receive email containing URLs that were benign when delivered but are weaponised later. The organisation wants each URL checked when the user clicks it, including links in Teams messages.\n\nWhich Defender for Office 365 feature provides this?",
    "options": [
      {
        "letter": "A",
        "text": "Safe Links"
      },
      {
        "letter": "B",
        "text": "Safe Attachments"
      },
      {
        "letter": "C",
        "text": "Zero-hour auto purge"
      },
      {
        "letter": "D",
        "text": "Threat Explorer"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Safe Links rewrites URLs and evaluates them at click time, so a link that becomes malicious after delivery is still blocked. Policies can cover email, Teams, and supported Office applications.\n\n- **B** is wrong. Safe Attachments detonates attachments rather than evaluating URLs at click time.\n- **C** is wrong. ZAP removes messages after delivery; it does not scan a URL when clicked.\n- **D** is wrong. Threat Explorer is an investigation tool.\n\n**Exam tip:** time-of-click URL protection is Safe Links; attachment detonation is Safe Attachments.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Safe Links"
  },
  {
    "id": 35,
    "domain": "xdr",
    "topic": "Safe Attachments detonation",
    "stem": "An organisation wants unknown email attachments opened and observed in an isolated environment before users receive them.\n\nWhich feature should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Safe Attachments"
      },
      {
        "letter": "B",
        "text": "Safe Links"
      },
      {
        "letter": "C",
        "text": "Attack simulation training"
      },
      {
        "letter": "D",
        "text": "Defender for Cloud Apps session policy"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Safe Attachments sends unknown attachments to a sandbox, observes their behaviour, and blocks malicious content. Dynamic Delivery can deliver the message body while the attachment is still being analysed.\n\n- **B** is wrong. Safe Links evaluates URLs, not attachment behaviour.\n- **C** is wrong. Attack simulation training runs phishing exercises for users.\n- **D** is wrong. Session policies control SaaS sessions, not email attachment detonation.\n\n**Exam tip:** sandbox detonation of attachments = Safe Attachments.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Safe Attachments"
  },
  {
    "id": 36,
    "domain": "xdr",
    "topic": "Threat Explorer investigation",
    "stem": "An analyst needs to find all recipients of a phishing campaign, inspect the original message, and remove it from mailboxes.\n\nWhich tool should the analyst use?",
    "options": [
      {
        "letter": "A",
        "text": "Threat Explorer"
      },
      {
        "letter": "B",
        "text": "Device inventory"
      },
      {
        "letter": "C",
        "text": "Live response"
      },
      {
        "letter": "D",
        "text": "Sentinel workbooks"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Threat Explorer provides email-centric hunting and investigation: filter by sender, subject, URL, or recipient, view message details, and trigger actions such as soft delete or move to quarantine.\n\n- **B** is wrong. Device inventory covers endpoints.\n- **C** is wrong. Live response operates on an endpoint.\n- **D** is wrong. Workbooks visualise data but do not manage email messages.\n\n**Exam tip:** email campaign scoping and purge = Threat Explorer.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Threat Explorer"
  },
  {
    "id": 37,
    "domain": "xdr",
    "topic": "Zero-hour auto purge",
    "stem": "A malicious message was delivered before detonation completed. A later signature update confirms the attachment is malware. The organisation wants the message removed automatically from all affected mailboxes.\n\nWhich feature performs this cleanup?",
    "options": [
      {
        "letter": "A",
        "text": "Zero-hour auto purge"
      },
      {
        "letter": "B",
        "text": "Safe Links"
      },
      {
        "letter": "C",
        "text": "Attack surface reduction"
      },
      {
        "letter": "D",
        "text": "Conditional Access"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Zero-hour auto purge (ZAP) retroactively removes or quarantines messages that were delivered but later identified as malicious, including malware and high-confidence phishing.\n\n- **B** is wrong. Safe Links protects URLs at click time.\n- **C** is wrong. ASR is an endpoint behaviour control.\n- **D** is wrong. Conditional Access controls sign-in and access.\n\n**Exam tip:** already delivered and later found bad = ZAP.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Zero-hour auto purge"
  },
  {
    "id": 38,
    "domain": "xdr",
    "topic": "Attack simulation training",
    "stem": "A security awareness team wants to measure how many users click phishing links and then assign targeted training to the clickers.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Attack simulation training"
      },
      {
        "letter": "B",
        "text": "Safe Attachments"
      },
      {
        "letter": "C",
        "text": "Threat Explorer"
      },
      {
        "letter": "D",
        "text": "Defender for Cloud Apps"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Attack simulation training runs controlled phishing simulations, records user behaviour, and can assign training automatically to users who interact with the simulated phish.\n\n- **B** is wrong. Safe Attachments protects against real malicious attachments.\n- **C** is wrong. Threat Explorer investigates real email threats.\n- **D** is wrong. Defender for Cloud Apps monitors SaaS activity.\n\n**Exam tip:** simulation plus training is a user-risk reduction feature, not a mail-filtering feature.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Attack simulation training"
  },
  {
    "id": 39,
    "domain": "xdr",
    "topic": "User-reported message triage",
    "stem": "Users forward suspicious email to the security team. The team wants those reports to appear in a queue where analysts can review, classify, and trigger a purge.\n\nWhich capability supports that workflow?",
    "options": [
      {
        "letter": "A",
        "text": "Submissions in the Defender portal"
      },
      {
        "letter": "B",
        "text": "Safe Links policies"
      },
      {
        "letter": "C",
        "text": "Device groups"
      },
      {
        "letter": "D",
        "text": "Sentinel watchlists"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The submissions queue collects user-reported messages and administrator submissions so analysts can review them, classify the result, and take action such as purging similar messages.\n\n- **B** is wrong. Safe Links evaluates URLs but does not provide a user-report queue.\n- **C** is wrong. Device groups organise endpoints for automation.\n- **D** is wrong. Watchlists store reference data for queries.\n\n**Exam tip:** user reports land in Submissions; campaign scope often continues in Threat Explorer.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — User-reported messages"
  },
  {
    "id": 40,
    "domain": "xdr",
    "topic": "Email protection features",
    "stem": "A company wants layered protection against malicious links and malicious attachments in email.\n\nWhich two Defender for Office 365 features provide those controls? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Safe Links"
      },
      {
        "letter": "B",
        "text": "Safe Attachments"
      },
      {
        "letter": "C",
        "text": "Device isolation"
      },
      {
        "letter": "D",
        "text": "Session policies"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Safe Links protects against malicious URLs at click time, and Safe Attachments detonates attachments in a sandbox. Together they cover the two main email attack vectors.\n\n- **C** is wrong. Device isolation is an endpoint response action.\n- **D** is wrong. Session policies control SaaS sessions through Defender for Cloud Apps.\n\n**Exam tip:** link + attachment protection are the two core Defender for Office 365 controls.",
    "source": "Mitigate threats using Microsoft Defender for Office 365 — Configure protection policies"
  },
  {
    "id": 41,
    "domain": "xdr",
    "topic": "Cloud Discovery shadow IT",
    "stem": "Employees are using dozens of unsanctioned SaaS applications. The security team wants to discover which apps are in use, their risk scores, and how much data is uploaded, using existing firewall and proxy logs.\n\nWhich Defender for Cloud Apps capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud Discovery"
      },
      {
        "letter": "B",
        "text": "Session policies"
      },
      {
        "letter": "C",
        "text": "App governance"
      },
      {
        "letter": "D",
        "text": "File policies"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Cloud Discovery parses traffic logs from firewalls, proxies, and endpoints to identify cloud applications in use. It matches them to the cloud app catalog, assigns risk scores, and reports usage and data volume so the team can decide what to sanction.\n\n- **B** is wrong. Session policies control activity inside an app after a user connects.\n- **C** is wrong. App governance manages OAuth app permissions and behaviour.\n- **D** is wrong. File policies inspect content stored in connected apps.\n\n**Exam tip:** unknown SaaS usage is a discovery problem, so start with Cloud Discovery.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — Discover and manage shadow IT"
  },
  {
    "id": 42,
    "domain": "xdr",
    "topic": "OAuth application consent abuse",
    "stem": "A user consents to a third-party mail application that requests read access to all mailboxes. Days later, unusual mailbox rules appear across the tenant.\n\nWhich Defender solution is best suited to investigate the malicious OAuth application?",
    "options": [
      {
        "letter": "A",
        "text": "Defender for Cloud Apps"
      },
      {
        "letter": "B",
        "text": "Defender for Endpoint"
      },
      {
        "letter": "C",
        "text": "Defender for Identity"
      },
      {
        "letter": "D",
        "text": "Defender for Office 365"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Cloud Apps and app governance surface OAuth apps, their permissions, consent grants, and activity. An overprivileged app that reads mail and creates rules is a classic illicit consent grant, which is investigated through the app and its permissions.\n\n- **B** is wrong. Defender for Endpoint sees device activity, not OAuth grants.\n- **C** is wrong. Defender for Identity monitors domain controller authentication.\n- **D** is wrong. Defender for Office 365 investigates mail content and delivery, not the app's OAuth consent.\n\n**Exam tip:** app permissions and consent = Cloud Apps and app governance, even when the impact appears in mail.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — Detect and investigate OAuth apps"
  },
  {
    "id": 43,
    "domain": "xdr",
    "topic": "Cloud Apps control capabilities",
    "stem": "A company wants to block downloads of sensitive files from a sanctioned SaaS app and to detect OAuth apps with excessive permissions.\n\nWhich two Defender for Cloud Apps capabilities should be used? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Session policies"
      },
      {
        "letter": "B",
        "text": "App governance"
      },
      {
        "letter": "C",
        "text": "Device isolation"
      },
      {
        "letter": "D",
        "text": "Safe Links"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Session policies apply real-time controls such as blocking downloads or uploads during a user session, using Conditional Access App Control. App governance evaluates OAuth apps and their permissions, and can alert or respond when an app is overprivileged or behaving suspiciously.\n\n- **C** is wrong. Device isolation is a Defender for Endpoint action.\n- **D** is wrong. Safe Links protects URLs in email and Teams.\n\n**Exam tip:** session control is about user activity; app governance is about the application's permissions.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — Use session policies and app governance"
  },
  {
    "id": 44,
    "domain": "xdr",
    "topic": "Conditional Access App Control prerequisite",
    "stem": "An analyst wants Defender for Cloud Apps to monitor and block actions inside a SaaS application in real time. Users must still sign in through Microsoft Entra ID.\n\nWhich configuration is required?",
    "options": [
      {
        "letter": "A",
        "text": "A Conditional Access policy that routes the app through Conditional Access App Control."
      },
      {
        "letter": "B",
        "text": "A Safe Attachments policy applied to the app."
      },
      {
        "letter": "C",
        "text": "A device group with full automation."
      },
      {
        "letter": "D",
        "text": "An Exchange transport rule."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Session policies depend on Conditional Access App Control, which uses a reverse proxy. A Conditional Access policy selects the app and the session control, so traffic is routed through Defender for Cloud Apps where the session policy can inspect and block actions.\n\n- **B** is wrong. Safe Attachments is an email attachment feature.\n- **C** is wrong. Device groups control endpoint automation.\n- **D** is wrong. Transport rules affect mail flow, not SaaS sessions.\n\n**Exam tip:** no Conditional Access App Control, no real-time session policy.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — Configure Conditional Access App Control"
  },
  {
    "id": 45,
    "domain": "xdr",
    "topic": "Sanctioning discovered apps",
    "stem": "Cloud Discovery finds a project-management app used by 400 employees. The risk score is moderate, but the security team has not approved the vendor.\n\nHow should the team record the app's status while it is under review?",
    "options": [
      {
        "letter": "A",
        "text": "Mark the app as unsanctioned in Defender for Cloud Apps."
      },
      {
        "letter": "B",
        "text": "Isolate every user's device."
      },
      {
        "letter": "C",
        "text": "Delete the app from Microsoft Entra ID."
      },
      {
        "letter": "D",
        "text": "Add the app's URL to Safe Links."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The sanctioning workflow lets the team tag an app as sanctioned or unsanctioned. Marking it unsanctioned records the decision, supports reporting, and can drive alerts or blocks when combined with other controls.\n\n- **B** is wrong. Isolating devices is a disproportionate endpoint response.\n- **C** is wrong. The app may not be registered in the tenant, and deleting it is not a discovery workflow.\n- **D** is wrong. Safe Links evaluates URLs in supported clients, not SaaS governance status.\n\n**Exam tip:** Cloud Discovery findings become governance decisions through sanctioning.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — Manage discovered apps"
  },
  {
    "id": 46,
    "domain": "xdr",
    "topic": "App governance policies",
    "stem": "An OAuth application has been granted tenant-wide mail read permissions but is used by only one department. The security team wants alerts and the ability to disable the app if its behaviour becomes suspicious.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "App governance"
      },
      {
        "letter": "B",
        "text": "Cloud Discovery"
      },
      {
        "letter": "C",
        "text": "Device inventory"
      },
      {
        "letter": "D",
        "text": "Attack simulation training"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App governance provides visibility into OAuth app permissions and usage, and lets you create policies that alert, disable, or revoke permissions for apps that are overprivileged or anomalous.\n\n- **B** is wrong. Cloud Discovery finds apps from network traffic; it does not manage OAuth permissions.\n- **C** is wrong. Device inventory lists endpoints.\n- **D** is wrong. Attack simulation training targets user awareness.\n\n**Exam tip:** overprivileged OAuth app = app governance policy, not a mail rule.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — App governance"
  },
  {
    "id": 47,
    "domain": "xdr",
    "topic": "Cloud Apps file policies",
    "stem": "A sanctioned file-sharing app contains documents labelled Confidential. The security team wants to detect when those files are shared with external users and automatically remove external sharing.\n\nWhich Defender for Cloud Apps feature should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "A file policy"
      },
      {
        "letter": "B",
        "text": "A session policy"
      },
      {
        "letter": "C",
        "text": "Cloud Discovery"
      },
      {
        "letter": "D",
        "text": "An attack surface reduction rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "File policies scan content in connected apps, match sensitive information or labels, and apply governance actions such as removing external sharing, quarantining, or alerting.\n\n- **B** is wrong. Session policies act on user sessions in real time, not on stored files at rest.\n- **C** is wrong. Cloud Discovery identifies app usage from traffic logs.\n- **D** is wrong. ASR rules protect endpoints.\n\n**Exam tip:** data at rest in SaaS = file policy; data in an active session = session policy.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — File policies"
  },
  {
    "id": 48,
    "domain": "xdr",
    "topic": "Defender for Cloud secure score",
    "stem": "A company runs workloads in Azure, AWS, and GCP. Leadership wants one posture score with prioritised recommendations across all three clouds.\n\nWhich capability provides that view?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Defender for Cloud secure score and recommendations"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel workbooks"
      },
      {
        "letter": "C",
        "text": "Defender for Endpoint device inventory"
      },
      {
        "letter": "D",
        "text": "Defender for Identity sensor health"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Cloud continuously assesses resources across Azure, AWS, and GCP and rolls the results into secure score with recommendations. The score reflects posture, not incidents, and recommendations show what to fix to improve it.\n\n- **B** is wrong. Workbooks visualise data but do not calculate multi-cloud posture.\n- **C** is wrong. Device inventory covers endpoints.\n- **D** is wrong. Sensor health is about Defender for Identity coverage.\n\n**Exam tip:** posture across clouds = Defender for Cloud; threat detection in those clouds also flows from Defender for Cloud plans.",
    "source": "Mitigate threats using Microsoft Defender for Cloud — Strengthen security posture"
  },
  {
    "id": 49,
    "domain": "xdr",
    "topic": "Defender for Cloud alerts in Sentinel",
    "stem": "A SOC uses Microsoft Sentinel as its single incident queue and also wants Defender for Cloud alerts for Azure, AWS, and GCP resources to appear there.\n\nWhich configuration should the team use?",
    "options": [
      {
        "letter": "A",
        "text": "Connect Defender for Cloud to Sentinel with the Defender for Cloud data connector and enable the relevant alert types."
      },
      {
        "letter": "B",
        "text": "Install the Defender for Endpoint agent on every cloud resource."
      },
      {
        "letter": "C",
        "text": "Export Defender for Cloud alerts to a CSV file and upload it daily."
      },
      {
        "letter": "D",
        "text": "Disable Defender for Cloud alerts and rely on secure score."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Defender for Cloud connector streams alerts from the connected cloud accounts into the Sentinel workspace, where analytics rules and incidents can include them. Enabling the alert types controls volume and relevance.\n\n- **B** is wrong. Agent-based endpoint protection is not how PaaS and multi-cloud alerts are ingested.\n- **C** is wrong. Manual CSV upload is not an integration and cannot support timely detection.\n- **D** is wrong. Disabling alerts removes the detections the SOC needs.\n\n**Exam tip:** Sentinel is the aggregation layer; Defender for Cloud is one of its alert sources.",
    "source": "Mitigate threats using Microsoft Defender for Cloud — Connect Defender for Cloud alerts to Microsoft Sentinel"
  },
  {
    "id": 50,
    "domain": "xdr",
    "topic": "Automated investigation benefits",
    "stem": "A SOC wants faster, more consistent handling of commodity malware while analysts focus on advanced attacks.\n\nWhich two outcomes does automated investigation and remediation provide? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Consistent evidence collection and remediation for known alert types."
      },
      {
        "letter": "B",
        "text": "Automatic investigation of alerts according to the device group's automation level."
      },
      {
        "letter": "C",
        "text": "Complete replacement of human judgement for every incident."
      },
      {
        "letter": "D",
        "text": "Automatic onboarding of all third-party cloud accounts."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Automated investigation runs playbooks of investigation steps against alerts, collects evidence, and can remediate according to the configured automation level. This gives consistent handling at scale, while analysts retain judgement for complex cases.\n\n- **C** is wrong. Automation handles known patterns; it does not replace analysts for novel or high-impact incidents.\n- **D** is wrong. Cloud onboarding is a Defender for Cloud configuration task.\n\n**Exam tip:** AIR scales the known, analysts handle the novel.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Automated investigation and remediation"
  },
  {
    "id": 51,
    "domain": "xdr",
    "topic": "Automated investigation evidence",
    "stem": "An automated investigation has finished. The analyst wants to see which processes, files, and network connections the investigation examined before deciding whether to approve remediation.\n\nWhere should the analyst look?",
    "options": [
      {
        "letter": "A",
        "text": "The investigation details on the incident or device"
      },
      {
        "letter": "B",
        "text": "The threat analytics page"
      },
      {
        "letter": "C",
        "text": "The device inventory risk column"
      },
      {
        "letter": "D",
        "text": "The Safe Links policy report"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Investigation details show the evidence, entities, and findings collected by the automated investigation, along with the recommended actions. That evidence is what the analyst reviews before approving or rejecting remediation.\n\n- **B** is wrong. Threat analytics is curated adversary intelligence.\n- **C** is wrong. The risk column is a posture indicator, not investigation evidence.\n- **D** is wrong. Safe Links reporting covers URL clicks.\n\n**Exam tip:** AIR evidence lives with the investigation, and actions live in Action center.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Review automated investigation results"
  },
  {
    "id": 52,
    "domain": "xdr",
    "topic": "Security Copilot incident summary",
    "stem": "A tier-one analyst opens a large incident with dozens of alerts and little time to read each one. The analyst wants a natural-language summary of the incident and suggested next steps inside the Defender portal.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Security Copilot in Microsoft Defender XDR"
      },
      {
        "letter": "B",
        "text": "Sentinel watchlists"
      },
      {
        "letter": "C",
        "text": "Attack surface reduction"
      },
      {
        "letter": "D",
        "text": "Conditional Access App Control"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Security Copilot is embedded in the Defender portal and can summarise incidents, explain affected assets, and suggest investigation or response steps. It accelerates triage while leaving the decision to the analyst.\n\n- **B** is wrong. Watchlists store reference data for queries.\n- **C** is wrong. ASR rules block endpoint behaviours.\n- **D** is wrong. App Control governs SaaS sessions.\n\n**Exam tip:** Copilot summarises and drafts; it does not replace analyst approval for response.",
    "source": "Mitigate threats using Microsoft Security Copilot — Use Security Copilot in Microsoft Defender XDR"
  },
  {
    "id": 53,
    "domain": "xdr",
    "topic": "Threat analytics",
    "stem": "A ransomware group is reported in the news. The security team wants to know whether the organisation has exposure to that group's known techniques and whether any related incidents exist.\n\nWhich Defender XDR feature should the team use?",
    "options": [
      {
        "letter": "A",
        "text": "Threat analytics"
      },
      {
        "letter": "B",
        "text": "Device groups"
      },
      {
        "letter": "C",
        "text": "Action center"
      },
      {
        "letter": "D",
        "text": "Safe Attachments"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Threat analytics provides curated intelligence on tracked threat actors and campaigns, including the techniques they use, organisational exposure, and related incidents. It helps teams prioritise defences against threats that are relevant to them.\n\n- **B** is wrong. Device groups organise endpoints for automation.\n- **C** is wrong. Action center lists remediation actions.\n- **D** is wrong. Safe Attachments protects email attachments.\n\n**Exam tip:** actor and campaign intelligence = Threat analytics; your own queries = advanced hunting.",
    "source": "Mitigate threats using Microsoft Defender XDR — Threat analytics"
  },
  {
    "id": 54,
    "domain": "xdr",
    "topic": "Exposure management",
    "stem": "A security team wants to understand its most exposed internet-facing assets, the attack paths between them, and the controls that would reduce the greatest risk.\n\nWhich Defender XDR capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Security Exposure Management"
      },
      {
        "letter": "B",
        "text": "Incident queue"
      },
      {
        "letter": "C",
        "text": "Live response"
      },
      {
        "letter": "D",
        "text": "Attack simulation training"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Security Exposure Management continuously aggregates asset, identity, and vulnerability data to show attack surface, exposure score, and choke points. It answers which exposures matter most before an incident occurs.\n\n- **B** is wrong. The incident queue is reactive case management.\n- **C** is wrong. Live response is an endpoint investigation tool.\n- **D** is wrong. Attack simulation training measures user behaviour.\n\n**Exam tip:** pre-incident risk prioritisation is exposure management; post-detection work is incident response.",
    "source": "Mitigate threats using Microsoft Defender XDR — Microsoft Security Exposure Management"
  },
  {
    "id": 55,
    "domain": "sentinel",
    "topic": "SIEM and SOAR in Microsoft Sentinel",
    "stem": "A company wants one platform to collect logs, detect attacks with scheduled queries, and automate responses.\n\nWhich description of Microsoft Sentinel is correct?",
    "options": [
      {
        "letter": "A",
        "text": "A cloud-native SIEM with SOAR capabilities built on a Log Analytics workspace."
      },
      {
        "letter": "B",
        "text": "An endpoint antivirus product with no log-storage capability."
      },
      {
        "letter": "C",
        "text": "A posture-management tool that cannot create incidents."
      },
      {
        "letter": "D",
        "text": "A firewall management console for hybrid networks."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft Sentinel is a cloud-native security information and event management (SIEM) platform, with security orchestration, automation, and response (SOAR) built in. It stores data in a Log Analytics workspace, detects with analytics rules, and responds with automation rules and playbooks.\n\n- **B** is wrong. Endpoint protection is Defender for Endpoint; Sentinel is a platform for logs and incidents.\n- **C** is wrong. Sentinel creates incidents and supports response; posture management is Defender for Cloud.\n- **D** is wrong. Sentinel does not manage firewall policy.\n\n**Exam tip:** Sentinel = SIEM + SOAR; Defender for Cloud = posture, Defender for Endpoint = endpoint.",
    "source": "Configure your Microsoft Sentinel environment — What is Microsoft Sentinel?"
  },
  {
    "id": 56,
    "domain": "sentinel",
    "topic": "Sentinel workspace foundation",
    "stem": "An organisation is deploying Microsoft Sentinel for the first time and asks where the ingested security logs are stored.\n\nWhich underlying service provides storage and query for Sentinel?",
    "options": [
      {
        "letter": "A",
        "text": "A Log Analytics workspace"
      },
      {
        "letter": "B",
        "text": "A storage account container"
      },
      {
        "letter": "C",
        "text": "A SQL database on a virtual machine"
      },
      {
        "letter": "D",
        "text": "A Microsoft Defender for Endpoint device group"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Sentinel is enabled on a Log Analytics workspace, which stores ingested logs and exposes them to Kusto Query Language. All analytics rules, hunting queries, and workbooks query that workspace.\n\n- **B** is wrong. Blob storage can hold archived exports but is not the Sentinel analytics store.\n- **C** is wrong. Sentinel is a cloud-native service and does not require a SQL VM.\n- **D** is wrong. Device groups organise endpoints and have nothing to do with Sentinel storage.\n\n**Exam tip:** workspace first, then Sentinel on top; the workspace is the data boundary.",
    "source": "Configure your Microsoft Sentinel environment — Create and configure a Log Analytics workspace"
  },
  {
    "id": 57,
    "domain": "sentinel",
    "topic": "Workspace manager for multiple workspaces",
    "stem": "A company has separate Sentinel workspaces for production, development, and a recent acquisition. Analysts need to view and manage content across all three without switching portals.\n\nWhich feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel workspace manager"
      },
      {
        "letter": "B",
        "text": "Device inventory"
      },
      {
        "letter": "C",
        "text": "Safe Links policies"
      },
      {
        "letter": "D",
        "text": "A single analytics rule per workspace only"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Workspace manager lets you manage multiple Sentinel workspaces at scale from one view, including content deployment and cross-workspace operations, subject to permissions.\n\n- **B** is wrong. Device inventory is an endpoint list.\n- **C** is wrong. Safe Links is email URL protection.\n- **D** is wrong. Per-workspace rules do not provide a consolidated management view.\n\n**Exam tip:** multiple workspaces you own = workspace manager; multiple tenants as an MSSP = Azure Lighthouse.",
    "source": "Configure your Microsoft Sentinel environment — Microsoft Sentinel workspace manager"
  },
  {
    "id": 58,
    "domain": "sentinel",
    "topic": "Long-term retention",
    "stem": "A regulator requires seven years of security logs. Analysts need fast queries for the last 90 days, and rare access to older data at the lowest possible cost.\n\nWhich Sentinel retention approach fits?",
    "options": [
      {
        "letter": "A",
        "text": "Keep 90 days in analytics retention and extend total retention in the data lake for the remaining years."
      },
      {
        "letter": "B",
        "text": "Keep all seven years in analytics retention at full query performance."
      },
      {
        "letter": "C",
        "text": "Export logs to individual analyst laptops and delete the workspace data."
      },
      {
        "letter": "D",
        "text": "Retain only 30 days and rely on incident summaries."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Analytics retention keeps recent data fully queryable by rules and hunting, while total retention in the data lake extends the same data for up to 12 years at lower cost. Older data is reachable with search jobs, restore, or data lake queries rather than always-on analytics.\n\n- **B** is wrong. Analytics retention is limited to two years and is the expensive tier.\n- **C** is wrong. Laptop exports are insecure and unmanaged.\n- **D** is wrong. Thirty days does not satisfy a seven-year requirement.\n\n**Exam tip:** hot analytics retention for detection, cheap total retention for compliance.",
    "source": "Configure your Microsoft Sentinel environment — Log retention"
  },
  {
    "id": 59,
    "domain": "sentinel",
    "topic": "Sentinel roles",
    "stem": "A security engineer must create and edit analytics rules and workbooks but must not manage incident assignments or workspace permissions.\n\nWhich Microsoft Sentinel role is the minimum that allows the required work?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Sentinel Contributor"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel Reader"
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel Responder"
      },
      {
        "letter": "D",
        "text": "Owner on the subscription"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft Sentinel Contributor can create and edit Sentinel resources such as analytics rules and workbooks. Reader can only view, and Responder adds incident management but not authoring.\n\n- **B** is wrong. Reader cannot create or edit rules.\n- **C** is wrong. Responder manages incidents but is not the authoring role.\n- **D** is wrong. Subscription Owner is far broader than needed.\n\n**Exam tip:** Reader views, Responder works incidents, Contributor authors content.",
    "source": "Configure your Microsoft Sentinel environment — Roles and permissions"
  },
  {
    "id": 60,
    "domain": "sentinel",
    "topic": "Analytics rules in the ingestion pipeline",
    "stem": "Review the Sentinel data flow diagram.\n\nData has arrived in the Log Analytics workspace. The team wants scheduled queries to raise alerts and create incidents.\n\nWhich stage performs that function?",
    "options": [
      {
        "letter": "A",
        "text": "Analytics rules"
      },
      {
        "letter": "B",
        "text": "Data connectors"
      },
      {
        "letter": "C",
        "text": "The data collection rule"
      },
      {
        "letter": "D",
        "text": "The data lake"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Analytics rules query the workspace on a schedule, evaluate results against the rule logic, and create alerts that are grouped into incidents. Connectors bring data in; rules turn it into detections.\n\n- **B** is wrong. Connectors ingest data; they do not evaluate detection logic.\n- **C** is wrong. A data collection rule defines collection and transformation, not detection.\n- **D** is wrong. The data lake stores long-term data and does not run scheduled analytics rules.\n\n**Exam tip:** in data-flow questions, connectors are inbound and analytics rules are the detection stage.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — What is Microsoft Sentinel analytics?",
    "diagram": "sentinel-data-flow"
  },
  {
    "id": 61,
    "domain": "sentinel",
    "topic": "Content hub solutions",
    "stem": "An organisation wants to deploy the Sentinel solution for a third-party firewall, including its connector, analytics rule templates, workbook, and playbooks.\n\nWhere should the team install it?",
    "options": [
      {
        "letter": "A",
        "text": "Content hub"
      },
      {
        "letter": "B",
        "text": "Watchlists"
      },
      {
        "letter": "C",
        "text": "Action center"
      },
      {
        "letter": "D",
        "text": "Device inventory"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Content hub packages Sentinel solutions: data connectors, rule templates, workbooks, hunting queries, and playbooks. Installing a solution makes those components available in the workspace.\n\n- **B** is wrong. Watchlists store reference lists for queries.\n- **C** is wrong. Action center is an endpoint remediation list.\n- **D** is wrong. Device inventory lists endpoints.\n\n**Exam tip:** missing connector or rule template usually means the solution is not installed from Content hub.",
    "source": "Configure your Microsoft Sentinel environment — Content hub"
  },
  {
    "id": 62,
    "domain": "sentinel",
    "topic": "Azure Activity connector",
    "stem": "A SOC wants to detect when privileged Azure resources are deleted or when role assignments change.\n\nWhich data source should be connected to Sentinel?",
    "options": [
      {
        "letter": "A",
        "text": "Azure Activity logs"
      },
      {
        "letter": "B",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "C",
        "text": "Safe Links click logs"
      },
      {
        "letter": "D",
        "text": "Defender for Identity sensor logs"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Azure Activity logs record subscription-level control-plane operations such as resource deletion and role assignment changes. Connecting them to Sentinel lets analytics rules detect privileged or destructive administrative actions.\n\n- **B** is wrong. DeviceProcessEvents contains endpoint process telemetry.\n- **C** is wrong. Safe Links click logs cover URL clicks.\n- **D** is wrong. Defender for Identity logs cover directory authentication, not Azure control-plane operations.\n\n**Exam tip:** control-plane changes in Azure = Azure Activity; data-plane endpoint activity = Device* tables.",
    "source": "Connect logs to Microsoft Sentinel — Connect Azure Activity data"
  },
  {
    "id": 63,
    "domain": "sentinel",
    "topic": "Defender XDR connector behaviour",
    "stem": "Review the diagram.\n\nA company already uses Defender XDR and now wants its incidents visible in Sentinel. Analysts must avoid two incidents for the same attack.\n\nWhich statement describes the correct configuration?",
    "options": [
      {
        "letter": "A",
        "text": "Connect Defender XDR and keep Microsoft incident creation rules disabled for the integrated products to avoid duplicates."
      },
      {
        "letter": "B",
        "text": "Connect each Defender product separately and enable incident creation for all of them."
      },
      {
        "letter": "C",
        "text": "Disable the Defender XDR connector and forward alerts by email."
      },
      {
        "letter": "D",
        "text": "Use a watchlist to copy incidents into Sentinel."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Defender XDR connector streams alerts and incidents into Sentinel. For integrated products, Microsoft incident creation rules are turned off so Sentinel does not create a second incident for alerts that Defender XDR already grouped. In the diagram the Defender XDR connector is one inbound path into the workspace, so an incident already grouped upstream must not be recreated by a Microsoft Security rule.\n\n- **B** is wrong. Multiple connectors with incident creation enabled produce duplicate incidents.\n- **C** is wrong. Email forwarding is not an integration and loses incident context.\n- **D** is wrong. Watchlists store reference data; they do not copy incidents.\n\n**Exam tip:** one attack should produce one incident, even when both XDR and Sentinel are in use.",
    "source": "Connect logs to Microsoft Sentinel — Microsoft Sentinel and Defender XDR",
    "diagram": "sentinel-data-flow"
  },
  {
    "id": 64,
    "domain": "sentinel",
    "topic": "CEF and Syslog collection",
    "stem": "A network team wants to send firewall and proxy events to Sentinel in Common Event Format from an on-premises Linux forwarder.\n\nWhich connector should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Common Event Format (CEF) via AMA"
      },
      {
        "letter": "B",
        "text": "Azure Activity"
      },
      {
        "letter": "C",
        "text": "Microsoft Defender XDR"
      },
      {
        "letter": "D",
        "text": "Office 365"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The CEF connector collects Common Event Format messages through the Azure Monitor Agent on a Linux forwarder. Syslog collection uses a similar agent-based path, and ASIM parsers can normalise the result.\n\n- **B** is wrong. Azure Activity covers Azure control-plane events.\n- **C** is wrong. Defender XDR covers Microsoft security products.\n- **D** is wrong. Office 365 covers Microsoft 365 audit and email events.\n\n**Exam tip:** third-party appliances usually land through CEF or Syslog, then ASIM.",
    "source": "Connect logs to Microsoft Sentinel — Common Event Format and Syslog connector"
  },
  {
    "id": 65,
    "domain": "sentinel",
    "topic": "Custom log ingestion",
    "stem": "A company has a line-of-business application that can send JSON events over HTTPS but has no Sentinel connector.\n\nWhich method should the team use to ingest the events?",
    "options": [
      {
        "letter": "A",
        "text": "Logs Ingestion API with a data collection rule and custom table"
      },
      {
        "letter": "B",
        "text": "A Safe Attachments policy"
      },
      {
        "letter": "C",
        "text": "A device group"
      },
      {
        "letter": "D",
        "text": "An automation rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Logs Ingestion API accepts data through a data collection endpoint and data collection rule, which map the payload into a custom table in the workspace. It is the standard path for sources without a built-in connector.\n\n- **B** is wrong. Safe Attachments processes email attachments.\n- **C** is wrong. Device groups organise endpoints.\n- **D** is wrong. Automation rules respond to incidents and do not ingest raw events.\n\n**Exam tip:** no connector, but an HTTP API? Logs Ingestion API plus DCR.",
    "source": "Connect logs to Microsoft Sentinel — Custom connectors using the Logs Ingestion API"
  },
  {
    "id": 66,
    "domain": "sentinel",
    "topic": "ASIM normalisation",
    "stem": "A SOC ingests firewall logs from five vendors, each with different column names. Analysts want one set of rules and workbooks that works across all five.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Advanced Security Information Model (ASIM) parsers"
      },
      {
        "letter": "B",
        "text": "Watchlists"
      },
      {
        "letter": "C",
        "text": "Alert grouping"
      },
      {
        "letter": "D",
        "text": "Device isolation"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "ASIM provides a normalisation layer with a common schema and parsers for each source. Queries written against the ASIM schema work across vendors without rewriting field names.\n\n- **B** is wrong. Watchlists store reference lists, not normalised event schemas.\n- **C** is wrong. Alert grouping combines alerts into incidents.\n- **D** is wrong. Device isolation is an endpoint response.\n\n**Exam tip:** many sources, one schema = ASIM.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use ASIM parsers"
  },
  {
    "id": 67,
    "domain": "sentinel",
    "topic": "Data collection rules",
    "stem": "Review the diagram.\n\nAn engineer needs to send only specific Windows security events from a set of servers to Sentinel, and to filter noisy events before ingestion.\n\nWhich component controls that selection and transformation?",
    "options": [
      {
        "letter": "A",
        "text": "A data collection rule"
      },
      {
        "letter": "B",
        "text": "An analytics rule"
      },
      {
        "letter": "C",
        "text": "A playbook"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Data collection rules define which data an agent or API sends, which destination workspace or table it goes to, and any transformation applied before storage. Filtering at the DCR reduces ingestion cost and noise. The diagram places the data collection rule between the agent and the workspace table, ahead of any analytics rule.\n\n- **B** is wrong. Analytics rules query data after ingestion.\n- **C** is wrong. Playbooks automate responses.\n- **D** is wrong. Watchlists hold reference data.\n\n**Exam tip:** filter before storage with a DCR; detect after storage with an analytics rule.",
    "source": "Connect logs to Microsoft Sentinel — Data collection rules",
    "diagram": "sentinel-data-flow"
  },
  {
    "id": 68,
    "domain": "sentinel",
    "topic": "Multi-tenant MSSP management",
    "stem": "A managed security service provider runs Sentinel for 30 customer tenants. Engineers need delegated access without creating guest accounts in every tenant.\n\nWhich capability should the MSSP use?",
    "options": [
      {
        "letter": "A",
        "text": "Azure Lighthouse"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel workspace manager only"
      },
      {
        "letter": "C",
        "text": "Safe Links"
      },
      {
        "letter": "D",
        "text": "Device groups"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Azure Lighthouse provides delegated resource management across tenants, so the MSSP's engineers can manage customer Sentinel workspaces from their own tenant with role-based access. Workspace manager then organises the workspaces.\n\n- **B** is wrong. Workspace manager organises workspaces but does not provide cross-tenant delegation.\n- **C** is wrong. Safe Links protects URLs.\n- **D** is wrong. Device groups are an endpoint concept.\n\n**Exam tip:** cross-tenant delegation = Lighthouse; many workspaces in one tenant = workspace manager.",
    "source": "Configure your Microsoft Sentinel environment — Azure Lighthouse"
  },
  {
    "id": 69,
    "domain": "sentinel",
    "topic": "Cross-workspace queries",
    "stem": "An analyst needs to compare failed sign-ins in the production workspace with those in a subsidiary workspace from a single KQL query.\n\nWhich technique should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Query the other workspace with the workspace() operator."
      },
      {
        "letter": "B",
        "text": "Export both workspaces to CSV and compare manually."
      },
      {
        "letter": "C",
        "text": "Create a Safe Links policy for each workspace."
      },
      {
        "letter": "D",
        "text": "Disable one workspace and copy its data."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The workspace() operator lets a query in one workspace reference a table in another workspace to which the analyst has access, returning a combined result set.\n\n- **B** is wrong. Manual CSV comparison is slow and not repeatable.\n- **C** is wrong. Safe Links is unrelated to log queries.\n- **D** is wrong. Disabling a workspace destroys detection coverage.\n\n**Exam tip:** cross-workspace query syntax is workspace('name').Table.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query multiple workspaces"
  },
  {
    "id": 70,
    "domain": "sentinel",
    "topic": "Microsoft Entra sign-in logs",
    "stem": "An analyst needs to investigate failed sign-ins followed by a successful sign-in from a new country.\n\nWhich Sentinel table should the analyst query?",
    "options": [
      {
        "letter": "A",
        "text": "SigninLogs"
      },
      {
        "letter": "B",
        "text": "SecurityEvent"
      },
      {
        "letter": "C",
        "text": "DeviceProcessEvents"
      },
      {
        "letter": "D",
        "text": "OfficeActivity"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "SigninLogs contains Microsoft Entra ID sign-in events, including result, location, application, conditional access status, and risk details. It is the primary table for cloud identity investigations.\n\n- **B** is wrong. SecurityEvent contains Windows security events from servers and domain controllers.\n- **C** is wrong. DeviceProcessEvents contains endpoint process telemetry.\n- **D** is wrong. OfficeActivity contains Microsoft 365 workload audit events.\n\n**Exam tip:** cloud sign-ins = SigninLogs; on-prem Windows logons = SecurityEvent.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Entra ID data"
  },
  {
    "id": 71,
    "domain": "sentinel",
    "topic": "Scheduled analytics rule",
    "stem": "An analyst needs a detection that runs a KQL query every 15 minutes, looks back one hour, and creates an incident when results are returned.\n\nWhich rule type should the analyst create?",
    "options": [
      {
        "letter": "A",
        "text": "Scheduled analytics rule"
      },
      {
        "letter": "B",
        "text": "Fusion rule"
      },
      {
        "letter": "C",
        "text": "Microsoft Security rule"
      },
      {
        "letter": "D",
        "text": "Anomaly rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A scheduled analytics rule runs its query at a configured frequency over a configured lookback period. Matching results generate alerts, and the rule's incident settings decide whether those alerts become an incident.\n\n- **B** is wrong. Fusion correlates multistage signals using Microsoft's engine and does not accept a custom query.\n- **C** is wrong. Microsoft Security rules create incidents from alerts generated by connected Microsoft services.\n- **D** is wrong. Anomaly rules use machine learning to find unusual behaviour.\n\n**Exam tip:** custom KQL plus a schedule equals a scheduled analytics rule.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Create a scheduled analytics rule"
  },
  {
    "id": 72,
    "domain": "sentinel",
    "topic": "Near real-time rule",
    "stem": "A high-value detection must fire within about a minute of a privileged account being added to a directory role. The team cannot wait for a five-minute schedule.\n\nWhich rule type should be used?",
    "options": [
      {
        "letter": "A",
        "text": "NRT (near real-time) analytics rule"
      },
      {
        "letter": "B",
        "text": "Fusion"
      },
      {
        "letter": "C",
        "text": "A workbook"
      },
      {
        "letter": "D",
        "text": "An automation rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "NRT rules run continuously with very low latency, making them suitable for high-priority events that need immediate detection. They use a KQL query but do not run on a user-defined schedule.\n\n- **B** is wrong. Fusion correlates existing alerts and events; it is not a per-event query.\n- **C** is wrong. A workbook visualises data.\n- **D** is wrong. Automation rules respond to incidents; they do not detect events.\n\n**Exam tip:** when latency matters more than query complexity, choose NRT.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — NRT analytics rules"
  },
  {
    "id": 73,
    "domain": "sentinel",
    "topic": "Fusion multistage detection",
    "stem": "A company wants Sentinel to correlate low-fidelity alerts from identity, endpoint, and email into a high-confidence multistage attack incident, without writing a query.\n\nWhich rule type provides that capability?",
    "options": [
      {
        "letter": "A",
        "text": "Fusion"
      },
      {
        "letter": "B",
        "text": "Scheduled"
      },
      {
        "letter": "C",
        "text": "NRT"
      },
      {
        "letter": "D",
        "text": "Anomaly"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Fusion uses Microsoft's correlation engine and machine learning to combine signals across products into high-fidelity multistage attack incidents. It is enabled by default and does not require a custom query.\n\n- **B** is wrong. Scheduled rules run analyst-written queries.\n- **C** is wrong. NRT rules evaluate one query with low latency.\n- **D** is wrong. Anomaly rules flag unusual behaviour rather than correlating a multistage attack.\n\n**Exam tip:** Fusion is the built-in multistage correlation engine; you enable it, you do not author it.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Fusion"
  },
  {
    "id": 74,
    "domain": "sentinel",
    "topic": "Microsoft Security rules",
    "stem": "A company has connected Microsoft Defender XDR and Defender for Cloud to Sentinel. The SOC wants incidents created automatically from alerts raised by those connected services.\n\nWhich rule type should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Security"
      },
      {
        "letter": "B",
        "text": "Scheduled"
      },
      {
        "letter": "C",
        "text": "NRT"
      },
      {
        "letter": "D",
        "text": "Anomaly"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft Security rules create incidents from alerts generated by connected Microsoft security solutions. They are the simplest way to surface those product alerts as Sentinel incidents.\n\n- **B** is wrong. Scheduled rules run custom queries against workspace tables.\n- **C** is wrong. NRT rules are low-latency custom queries.\n- **D** is wrong. Anomaly rules identify unusual behaviour.\n\n**Exam tip:** connected Microsoft product generating alerts? Microsoft Security rule.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Microsoft Security rules"
  },
  {
    "id": 75,
    "domain": "sentinel",
    "topic": "ML behavior analytics",
    "stem": "A Sentinel rule learns each user's normal sign-in pattern and raises an alert when a user suddenly authenticates from an unusual location at an unusual time.\n\nWhich rule type is this?",
    "options": [
      {
        "letter": "A",
        "text": "ML behavior analytics"
      },
      {
        "letter": "B",
        "text": "Scheduled"
      },
      {
        "letter": "C",
        "text": "Fusion"
      },
      {
        "letter": "D",
        "text": "Microsoft Security"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "ML behavior analytics rules use Microsoft-trained machine learning models to detect anomalous behaviour, such as unusual sign-in patterns, without the analyst writing a query.\n\n- **B** is wrong. Scheduled rules use explicit KQL logic.\n- **C** is wrong. Fusion correlates alerts across stages.\n- **D** is wrong. Microsoft Security rules surface alerts from connected products.\n\n**Exam tip:** behaviour baseline plus anomaly = ML behavior analytics.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — ML behavior analytics"
  },
  {
    "id": 76,
    "domain": "sentinel",
    "topic": "Anomaly rules",
    "stem": "An analyst wants informational alerts about unusual spikes in failed sign-ins, without automatically creating incidents for every spike.\n\nWhich rule type produces informational anomaly alerts that the analyst can tune?",
    "options": [
      {
        "letter": "A",
        "text": "Anomaly"
      },
      {
        "letter": "B",
        "text": "Scheduled"
      },
      {
        "letter": "C",
        "text": "NRT"
      },
      {
        "letter": "D",
        "text": "Microsoft Security"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Anomaly rules use machine learning to identify unusual behaviour and produce informational alerts. Analysts can tune which anomalies are useful and decide how they feed incidents, which helps avoid a flood of low-value cases.\n\n- **B** is wrong. Scheduled rules follow explicit query logic and incident settings.\n- **C** is wrong. NRT rules are latency-focused custom queries.\n- **D** is wrong. Microsoft Security rules create incidents from connected product alerts.\n\n**Exam tip:** anomaly alerts are informational signals to tune, not automatic incident generators.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Anomaly rules"
  },
  {
    "id": 77,
    "domain": "sentinel",
    "topic": "Entity mapping",
    "stem": "A scheduled rule returns a compromised account, the device it signed in from, and an external IP address. The analyst wants incident responders to pivot from these values to related activity.\n\nWhat should be configured on the rule?",
    "options": [
      {
        "letter": "A",
        "text": "Entity mapping for Account, Host, and IP"
      },
      {
        "letter": "B",
        "text": "A watchlist with the analyst's name"
      },
      {
        "letter": "C",
        "text": "A workbook with a pie chart"
      },
      {
        "letter": "D",
        "text": "An automation rule that closes the incident"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entity mapping connects query columns to entity types such as Account, Host, IP, File, and Process. Mapped entities appear in the alert and incident, enabling pivots to related alerts, events, and timelines.\n\n- **B** is wrong. A watchlist stores reference data and does not map incident entities.\n- **C** is wrong. A workbook visualises data.\n- **D** is wrong. Closing incidents automatically removes the investigation opportunity.\n\n**Exam tip:** entity mapping is what makes the investigation graph useful.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Map data fields to entities"
  },
  {
    "id": 78,
    "domain": "sentinel",
    "topic": "Alert grouping",
    "stem": "A rule generates many alerts for the same user and host within a short window. The SOC wants one incident per entity instead of dozens.\n\nWhich setting should be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Alert grouping"
      },
      {
        "letter": "B",
        "text": "Rule suppression"
      },
      {
        "letter": "C",
        "text": "Entity mapping only"
      },
      {
        "letter": "D",
        "text": "A workbook"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Alert grouping combines alerts from the same rule into one incident based on time and entity. Grouping by entity produces one case per affected user or device, which reduces queue noise.\n\n- **B** is wrong. Suppression stops the query after an alert is generated and does not combine alerts into one incident.\n- **C** is wrong. Entity mapping enables pivots but does not group alerts.\n- **D** is wrong. Workbooks display data.\n\n**Exam tip:** grouping combines alerts; suppression prevents repeated alerts.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Configure alert grouping"
  },
  {
    "id": 79,
    "domain": "sentinel",
    "topic": "Create incidents from alerts",
    "stem": "A team wants alerts from a scheduled rule to remain as alerts for triage in the Logs blade, without creating incidents in the queue.\n\nWhich rule setting should be changed?",
    "options": [
      {
        "letter": "A",
        "text": "Turn off incident creation for the analytics rule."
      },
      {
        "letter": "B",
        "text": "Disable entity mapping."
      },
      {
        "letter": "C",
        "text": "Delete the Log Analytics workspace."
      },
      {
        "letter": "D",
        "text": "Change the rule to Fusion."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Scheduled rules have an incident settings option to create incidents from alerts. Turning it off leaves alerts in SecurityAlert for query-based triage but does not add them to the incident queue.\n\n- **B** is wrong. Entity mapping enriches alerts and does not control incident creation.\n- **C** is wrong. Deleting the workspace removes the data.\n- **D** is wrong. Fusion is a different rule type and cannot be used for a custom query.\n\n**Exam tip:** alerts vs incidents is controlled by the rule's incident creation setting.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Incident settings"
  },
  {
    "id": 80,
    "domain": "sentinel",
    "topic": "Rule suppression",
    "stem": "A noisy rule keeps raising the same alert every few minutes for a server that is already under investigation. The analyst wants the rule to stop generating duplicates for a period after an alert.\n\nWhich setting should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Suppression"
      },
      {
        "letter": "B",
        "text": "Alert grouping"
      },
      {
        "letter": "C",
        "text": "Entity mapping"
      },
      {
        "letter": "D",
        "text": "Custom details"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Suppression stops the query from running for a configured period after an alert is generated. It is designed to prevent duplicate alerts from the same condition during an active response.\n\n- **B** is wrong. Grouping combines alerts into an incident but still generates them.\n- **C** is wrong. Entity mapping adds context.\n- **D** is wrong. Custom details expose extra columns.\n\n**Exam tip:** suppression is a time-based mute; grouping is a case-combining feature.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Configure suppression"
  },
  {
    "id": 81,
    "domain": "sentinel",
    "topic": "MITRE ATT&CK on analytics rules",
    "stem": "A SOC manager wants to see which adversary tactics its active detections cover.\n\nWhere is that mapping defined for each analytics rule?",
    "options": [
      {
        "letter": "A",
        "text": "In the rule's tactics and techniques fields"
      },
      {
        "letter": "B",
        "text": "In the workspace retention setting"
      },
      {
        "letter": "C",
        "text": "In the watchlist CSV"
      },
      {
        "letter": "D",
        "text": "In the automation rule order"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Analytics rules carry MITRE ATT&CK tactic and technique metadata. Sentinel uses it for coverage views and Fusion eligibility, and analysts use it to find gaps in detection coverage.\n\n- **B** is wrong. Retention controls how long data is stored.\n- **C** is wrong. Watchlists hold reference data.\n- **D** is wrong. Automation order controls response sequence.\n\n**Exam tip:** coverage reporting depends on accurate tactics and techniques on each rule.",
    "source": "Perform threat hunting in Microsoft Sentinel — Use the MITRE ATT&CK framework"
  },
  {
    "id": 82,
    "domain": "sentinel",
    "topic": "Rule templates",
    "stem": "An analyst wants to use a Microsoft-provided detection for a common attack but needs to change the query and severity for the organisation.\n\nWhat should the analyst do?",
    "options": [
      {
        "letter": "A",
        "text": "Create a rule from the template and customise it."
      },
      {
        "letter": "B",
        "text": "Enable the template without changes and accept the defaults."
      },
      {
        "letter": "C",
        "text": "Delete the template from Content hub."
      },
      {
        "letter": "D",
        "text": "Convert the template into a watchlist."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Rule templates provide tested detection logic that you can review and clone into an active rule, then adjust query, schedule, severity, and entity mapping. The template itself remains as a reusable definition.\n\n- **B** is wrong. Defaults may not match the environment's data or risk tolerance.\n- **C** is wrong. Deleting the solution removes the template and related content.\n- **D** is wrong. Watchlists store data, not detection logic.\n\n**Exam tip:** templates are starting points; active rules are the customised copies.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Create a rule from a template"
  },
  {
    "id": 83,
    "domain": "sentinel",
    "topic": "Custom details",
    "stem": "An analyst wants each alert to show the affected department and the source IP as named fields, so responders do not have to open the raw query result.\n\nWhich rule feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Custom details"
      },
      {
        "letter": "B",
        "text": "Alert grouping"
      },
      {
        "letter": "C",
        "text": "Suppression"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Custom details map query columns to named key-value fields on the alert. They surface the most relevant context directly in the alert and incident view.\n\n- **B** is wrong. Grouping combines alerts into incidents.\n- **C** is wrong. Suppression pauses the rule after an alert.\n- **D** is wrong. Watchlists provide reference data to queries.\n\n**Exam tip:** custom details are for alert context; entity mapping is for investigation pivots.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Configure custom details"
  },
  {
    "id": 84,
    "domain": "sentinel",
    "topic": "Alert severity",
    "stem": "A rule detects a confirmed domain administrator compromise. The SOC wants these alerts treated as High severity and prioritised above routine reconnaissance.\n\nWhich rule property should be set?",
    "options": [
      {
        "letter": "A",
        "text": "Severity"
      },
      {
        "letter": "B",
        "text": "Retention"
      },
      {
        "letter": "C",
        "text": "Ingestion delay"
      },
      {
        "letter": "D",
        "text": "Workspace region"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Each analytics rule has a severity that flows to its alerts and influences incident priority. High severity should be reserved for urgent, high-impact detections so the queue remains meaningful.\n\n- **B** is wrong. Retention controls data lifetime.\n- **C** is wrong. Ingestion delay is a data-source characteristic.\n- **D** is wrong. Region affects data residency.\n\n**Exam tip:** severity is a triage signal, so calibrate it deliberately.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Analytics rule severity"
  },
  {
    "id": 85,
    "domain": "sentinel",
    "topic": "Query-based rule types",
    "stem": "A detection team wants to write custom KQL for two use cases: one scheduled every 10 minutes and one that must run with minimal latency.\n\nWhich two Sentinel rule types use analyst-written KQL queries? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Scheduled"
      },
      {
        "letter": "B",
        "text": "NRT"
      },
      {
        "letter": "C",
        "text": "Fusion"
      },
      {
        "letter": "D",
        "text": "Microsoft Security"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Scheduled and NRT rules both evaluate an analyst-written KQL query. Scheduled rules run on a frequency and lookback; NRT rules run continuously for low latency.\n\n- **C** is wrong. Fusion uses Microsoft's correlation engine and does not accept a custom query.\n- **D** is wrong. Microsoft Security rules surface alerts from connected products.\n\n**Exam tip:** custom KQL means Scheduled or NRT; everything else is correlation or product alerting.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Types of analytics rules"
  },
  {
    "id": 86,
    "domain": "sentinel",
    "topic": "SecurityIncident table",
    "stem": "An analyst wants to report on incident status, owner, and severity over time using KQL.\n\nWhich table stores Sentinel incidents?",
    "options": [
      {
        "letter": "A",
        "text": "SecurityIncident"
      },
      {
        "letter": "B",
        "text": "SecurityAlert"
      },
      {
        "letter": "C",
        "text": "SigninLogs"
      },
      {
        "letter": "D",
        "text": "DeviceEvents"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "SecurityIncident stores incident records, including status, owner, severity, classification, and related alert IDs. SecurityAlert stores the individual alerts that may be grouped into incidents.\n\n- **B** is wrong. SecurityAlert contains alert records, not incident records.\n- **C** is wrong. SigninLogs contains Entra sign-in events.\n- **D** is wrong. DeviceEvents contains endpoint telemetry.\n\n**Exam tip:** incident reporting = SecurityIncident; alert-level reporting = SecurityAlert.",
    "source": "Configure your Microsoft Sentinel environment — Sentinel tables"
  },
  {
    "id": 87,
    "domain": "sentinel",
    "topic": "Incident tasks",
    "stem": "An incident response process requires the analyst to check mailbox rules, review endpoint timeline, and contact the user. The SOC wants these steps tracked as a checklist on the incident.\n\nWhich incident feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Tasks"
      },
      {
        "letter": "B",
        "text": "Bookmarks"
      },
      {
        "letter": "C",
        "text": "Watchlists"
      },
      {
        "letter": "D",
        "text": "Workbooks"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Incident tasks provide a checklist of actions that can be assigned and completed during an investigation, giving the team a repeatable process and an audit trail.\n\n- **B** is wrong. Bookmarks preserve hunting query results.\n- **C** is wrong. Watchlists store reference data.\n- **D** is wrong. Workbooks visualise data.\n\n**Exam tip:** repeatable response steps belong in incident tasks, not in an analyst's notes.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Manage incident tasks"
  },
  {
    "id": 88,
    "domain": "sentinel",
    "topic": "Incident evidence and entities",
    "stem": "An analyst opens an incident and wants to see the affected account, host, and IP, and jump to related events.\n\nWhich incident area provides that view?",
    "options": [
      {
        "letter": "A",
        "text": "The Entities and evidence section"
      },
      {
        "letter": "B",
        "text": "The workspace retention page"
      },
      {
        "letter": "C",
        "text": "The Content hub"
      },
      {
        "letter": "D",
        "text": "The automation rule editor"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The incident's entities and evidence section lists the mapped entities and the alert evidence behind them. From there the analyst can pivot to related alerts, events, and the investigation graph.\n\n- **B** is wrong. Retention controls storage duration.\n- **C** is wrong. Content hub installs solutions.\n- **D** is wrong. Automation rules respond to incidents.\n\n**Exam tip:** entity mapping on the rule feeds the incident's evidence section.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Investigate incidents"
  },
  {
    "id": 89,
    "domain": "sentinel",
    "topic": "Incident ownership and status",
    "stem": "A tier-one analyst starts work on a new incident and wants other analysts to know it is being handled.\n\nWhich two fields should the analyst update? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Owner"
      },
      {
        "letter": "B",
        "text": "Status"
      },
      {
        "letter": "C",
        "text": "Workspace retention"
      },
      {
        "letter": "D",
        "text": "Rule lookback"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Assigning the incident sets the owner, and setting status to Active shows it is in progress. These fields drive queue filters and prevent duplicate work.\n\n- **C** is wrong. Retention is a workspace setting.\n- **D** is wrong. Lookback belongs to the analytics rule.\n\n**Exam tip:** owner + status are the first updates on any incident you pick up.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Manage incidents"
  },
  {
    "id": 90,
    "domain": "sentinel",
    "topic": "Incident classification",
    "stem": "An analyst finishes an investigation and concludes that the activity was authorised penetration testing. The SOC requires the decision and reason to be recorded on the incident.\n\nWhich action should the analyst take?",
    "options": [
      {
        "letter": "A",
        "text": "Classify the incident as a false positive and record the reason."
      },
      {
        "letter": "B",
        "text": "Delete the incident and the analytics rule."
      },
      {
        "letter": "C",
        "text": "Disable the workspace."
      },
      {
        "letter": "D",
        "text": "Add the tester to a watchlist and close without classification."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Closing an incident with a classification and reason records the outcome for reporting and tuning. Authorised testing is not malicious, so a false-positive classification with a clear reason is appropriate and preserves the audit trail.\n\n- **B** is wrong. Deleting evidence and the rule loses history and may remove useful detection.\n- **C** is wrong. Disabling the workspace stops all security monitoring.\n- **D** is wrong. Closing without classification loses the reason and skews metrics.\n\n**Exam tip:** always classify and document before closing; it drives tuning and reporting.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Close an incident"
  },
  {
    "id": 91,
    "domain": "sentinel",
    "topic": "Reducing false positives",
    "stem": "A scheduled rule repeatedly alerts on a known scanner service account. The SOC wants to keep the detection but stop the noise.\n\nWhich two actions are appropriate? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Exclude the scanner account using a watchlist or query filter."
      },
      {
        "letter": "B",
        "text": "Tune the query to require additional malicious behaviour."
      },
      {
        "letter": "C",
        "text": "Disable all analytics rules in the workspace."
      },
      {
        "letter": "D",
        "text": "Delete every incident the rule has created."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Excluding known benign entities and tightening the query logic reduce false positives without losing the detection. Both changes should be documented and reviewed so they do not create blind spots.\n\n- **C** is wrong. Disabling all rules removes detection coverage.\n- **D** is wrong. Deleting incidents destroys history and does not change future behaviour.\n\n**Exam tip:** tune the rule, do not switch it off; record why the exception exists.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Tune analytics rules"
  },
  {
    "id": 92,
    "domain": "sentinel",
    "topic": "Grouping versus suppression",
    "stem": "A SOC lead is choosing between alert grouping and suppression for a noisy rule.\n\nWhich statement correctly distinguishes them?",
    "options": [
      {
        "letter": "A",
        "text": "Grouping combines related alerts into one incident; suppression pauses the rule for a period after an alert."
      },
      {
        "letter": "B",
        "text": "Grouping pauses the rule; suppression combines alerts into one incident."
      },
      {
        "letter": "C",
        "text": "Both features delete the underlying events."
      },
      {
        "letter": "D",
        "text": "Both features disable the rule permanently."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Grouping reduces incident count by collecting related alerts into one case. Suppression reduces alert count by stopping the query for a configured time after an alert fires.\n\n- **B** is wrong. The definitions are reversed.\n- **C** is wrong. Neither feature deletes raw events.\n- **D** is wrong. Neither permanently disables the rule.\n\n**Exam tip:** grouping changes incident volume; suppression changes alert volume.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Alert grouping and suppression"
  },
  {
    "id": 93,
    "domain": "sentinel",
    "topic": "Frequency and lookback",
    "stem": "An analytics rule runs every 10 minutes. The analyst notices that events arriving late are missed.\n\nWhich setting should be reviewed first?",
    "options": [
      {
        "letter": "A",
        "text": "The query lookback period"
      },
      {
        "letter": "B",
        "text": "The workspace retention period"
      },
      {
        "letter": "C",
        "text": "The incident severity"
      },
      {
        "letter": "D",
        "text": "The watchlist size"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The lookback period determines how far back each run searches. If ingestion is delayed beyond the lookback, events fall outside the query window. The lookback should cover the run frequency plus expected ingestion delay.\n\n- **B** is wrong. Retention controls how long data is kept, not the window each run queries.\n- **C** is wrong. Severity affects triage.\n- **D** is wrong. Watchlist size is unrelated.\n\n**Exam tip:** frequency controls how often; lookback controls how much history; ingestion delay must fit inside both.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Query scheduling"
  },
  {
    "id": 94,
    "domain": "sentinel",
    "topic": "Analytics rule incident settings",
    "stem": "A team wants one incident per host per day for a low-severity rule, but immediate separate incidents for a critical rule.\n\nWhich rule-level configuration controls that behaviour?",
    "options": [
      {
        "letter": "A",
        "text": "Incident settings, including alert grouping"
      },
      {
        "letter": "B",
        "text": "Workspace retention"
      },
      {
        "letter": "C",
        "text": "Data collection rule transformation"
      },
      {
        "letter": "D",
        "text": "Content hub solution installation"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Incident settings on the analytics rule control whether alerts create incidents and how alerts are grouped. Different rules can use different grouping windows and entity settings to match their severity and response needs.\n\n- **B** is wrong. Retention affects data storage.\n- **C** is wrong. DCRs transform incoming data.\n- **D** is wrong. Content hub installs content.\n\n**Exam tip:** grouping strategy is configured per rule, not once for the workspace.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Incident settings"
  },
  {
    "id": 95,
    "domain": "sentinel",
    "topic": "Alerts versus incidents in Sentinel",
    "stem": "A SOC uses both SecurityAlert and SecurityIncident for reporting.\n\nWhich statement is correct?",
    "options": [
      {
        "letter": "A",
        "text": "SecurityAlert holds individual alerts, and SecurityIncident holds the incidents those alerts are grouped into."
      },
      {
        "letter": "B",
        "text": "SecurityIncident holds raw events, and SecurityAlert holds incidents."
      },
      {
        "letter": "C",
        "text": "Both tables hold the same rows with different names."
      },
      {
        "letter": "D",
        "text": "SecurityAlert is only used by Defender XDR."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Alerts are stored in SecurityAlert, and incident records are stored in SecurityIncident. An incident can reference multiple alerts, which is why the two tables have different schemas and use cases.\n\n- **B** is wrong. The definitions are reversed.\n- **C** is wrong. They are distinct tables.\n- **D** is wrong. SecurityAlert is used across Sentinel and Microsoft security integrations.\n\n**Exam tip:** count alerts in SecurityAlert; count cases in SecurityIncident.",
    "source": "Configure your Microsoft Sentinel environment — Sentinel tables"
  },
  {
    "id": 96,
    "domain": "sentinel",
    "topic": "Bookmarks in hunting",
    "stem": "A hunter runs a query that finds three suspicious sign-ins. The hunter wants to preserve those exact events, tag them, and add them to an incident later.\n\nWhich Sentinel feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Bookmarks"
      },
      {
        "letter": "B",
        "text": "Watchlists"
      },
      {
        "letter": "C",
        "text": "Workbooks"
      },
      {
        "letter": "D",
        "text": "Automation rules"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Bookmarks preserve hunting query results and the query that produced them. They can be tagged, investigated in the graph, and added to an incident as evidence.\n\n- **B** is wrong. Watchlists store reference lists for repeated use in queries.\n- **C** is wrong. Workbooks visualise data.\n- **D** is wrong. Automation rules respond to incidents.\n\n**Exam tip:** found something during hunting? Bookmark it before the data ages out.",
    "source": "Perform threat hunting in Microsoft Sentinel — Hunt by using bookmarks"
  },
  {
    "id": 97,
    "domain": "sentinel",
    "topic": "Turning a hunting query into a detection",
    "stem": "Review the diagram.\n\nA hunting query consistently finds a credential-theft pattern. The team now wants it to run automatically every hour and create incidents.\n\nWhat should the team do?",
    "options": [
      {
        "letter": "A",
        "text": "Create a scheduled analytics rule from the hunting query."
      },
      {
        "letter": "B",
        "text": "Save the query as a workbook."
      },
      {
        "letter": "C",
        "text": "Add the query to a watchlist."
      },
      {
        "letter": "D",
        "text": "Convert the query into a playbook."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A successful hunting query becomes a scheduled analytics rule by reusing the query, setting frequency and lookback, mapping entities, and enabling incident creation. This is the standard path from hunting to detection engineering. The final stage in the diagram is exactly this promotion step: validated findings become a detection that runs on a schedule.\n\n- **B** is wrong. Workbooks display data but do not create incidents.\n- **C** is wrong. Watchlists store lists, not detection logic.\n- **D** is wrong. Playbooks automate response after detection.\n\n**Exam tip:** hunt, prove, then promote the query to an analytics rule.",
    "source": "Perform threat hunting in Microsoft Sentinel — Create custom queries to refine threat hunting",
    "diagram": "hunting-workflow"
  },
  {
    "id": 98,
    "domain": "sentinel",
    "topic": "Livestream hunting",
    "stem": "A hunter wants an interactive session that keeps running a query and notifies immediately when a matching event arrives, while the investigation continues.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Livestream"
      },
      {
        "letter": "B",
        "text": "A search job"
      },
      {
        "letter": "C",
        "text": "A restore"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Livestream runs a query continuously in an interactive session and surfaces new matches as they arrive. The hunter can bookmark interesting events and pivot without waiting for a scheduled rule.\n\n- **B** is wrong. A search job runs asynchronously over historical long-term data and is not interactive.\n- **C** is wrong. Restore brings archived data back for querying.\n- **D** is wrong. Watchlists store reference data.\n\n**Exam tip:** livestream is for active hunting; search jobs are for historical sweeps.",
    "source": "Perform threat hunting in Microsoft Sentinel — Use livestream"
  },
  {
    "id": 99,
    "domain": "sentinel",
    "topic": "Search jobs over long-term data",
    "stem": "An investigator needs to search six months of archived logs for a rare indicator, but the data is in long-term retention and cannot be queried interactively at full speed.\n\nWhich feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "A search job"
      },
      {
        "letter": "B",
        "text": "Livestream"
      },
      {
        "letter": "C",
        "text": "An analytics rule"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A search job runs asynchronously against long-term data and writes matches to a results table that can be queried later. It is designed for large historical searches without restoring all data to analytics tier.\n\n- **B** is wrong. Livestream monitors new events in real time.\n- **C** is wrong. Analytics rules run on schedules against analytics-tier data.\n- **D** is wrong. Watchlists are reference data.\n\n**Exam tip:** broad and old = search job; narrow and recent = interactive query.",
    "source": "Perform threat hunting in Microsoft Sentinel — Use search jobs"
  },
  {
    "id": 100,
    "domain": "sentinel",
    "topic": "Restoring archived data",
    "stem": "An incident responder needs full KQL access to a specific two-day window of archived logs to reconstruct an attack timeline.\n\nWhich feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Restore"
      },
      {
        "letter": "B",
        "text": "A watchlist"
      },
      {
        "letter": "C",
        "text": "A workbook"
      },
      {
        "letter": "D",
        "text": "An automation rule"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Restore brings a selected time range of archived data back into the analytics tier for full KQL investigation. It is targeted and temporary, which keeps cost lower than retaining everything hot.\n\n- **B** is wrong. Watchlists hold reference lists.\n- **C** is wrong. Workbooks visualise data.\n- **D** is wrong. Automation rules respond to incidents.\n\n**Exam tip:** restore a window for deep analysis; use a search job for a broad indicator sweep.",
    "source": "Perform threat hunting in Microsoft Sentinel — Restore archived logs"
  },
  {
    "id": 101,
    "domain": "sentinel",
    "topic": "MITRE coverage view",
    "stem": "A detection engineering lead wants to see which MITRE ATT&CK tactics are covered by active analytics rules and where gaps remain.\n\nWhich Sentinel page should the lead use?",
    "options": [
      {
        "letter": "A",
        "text": "The MITRE ATT&CK page"
      },
      {
        "letter": "B",
        "text": "The watchlist page"
      },
      {
        "letter": "C",
        "text": "The data connectors page"
      },
      {
        "letter": "D",
        "text": "The workspace retention page"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The MITRE ATT&CK page maps active rules and hunting queries to tactics and techniques, showing coverage and gaps. It can also simulate coverage for rules that are not yet active.\n\n- **B** is wrong. Watchlists store reference data.\n- **C** is wrong. Connectors bring data in.\n- **D** is wrong. Retention controls storage duration.\n\n**Exam tip:** coverage questions point to the MITRE ATT&CK page, not to a workbook.",
    "source": "Perform threat hunting in Microsoft Sentinel — View current MITRE coverage"
  },
  {
    "id": 102,
    "domain": "sentinel",
    "topic": "Hunting query sources",
    "stem": "A team wants a library of community and Microsoft-authored hunting queries that can be run and customised.\n\nWhere should the team look first?",
    "options": [
      {
        "letter": "A",
        "text": "Content hub and the official Microsoft Sentinel GitHub repository"
      },
      {
        "letter": "B",
        "text": "The workspace retention settings"
      },
      {
        "letter": "C",
        "text": "The incident task list"
      },
      {
        "letter": "D",
        "text": "The device inventory"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Hunting queries are distributed through Content hub solutions and the Microsoft Sentinel GitHub repository. Teams can run them, adapt them to local data, and save the useful ones.\n\n- **B** is wrong. Retention does not contain queries.\n- **C** is wrong. Incident tasks are response checklists.\n- **D** is wrong. Device inventory lists endpoints.\n\n**Exam tip:** before writing from scratch, check Content hub and GitHub for a maintained query.",
    "source": "Perform threat hunting in Microsoft Sentinel — Explore Microsoft Sentinel on GitHub"
  },
  {
    "id": 103,
    "domain": "sentinel",
    "topic": "Historical hunting tools",
    "stem": "A hunter needs to investigate a campaign that ended four months ago, then preserve the most relevant events as evidence.\n\nWhich two Sentinel capabilities should the hunter use? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "A search job or restore for the historical data"
      },
      {
        "letter": "B",
        "text": "Bookmarks for the relevant events"
      },
      {
        "letter": "C",
        "text": "Livestream for the archived period"
      },
      {
        "letter": "D",
        "text": "An automation rule to rewrite history"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Historical data in long-term retention is reached with a search job or a restore, depending on the depth of analysis needed. Useful events are then bookmarked so they remain available as incident evidence.\n\n- **C** is wrong. Livestream watches new events, not archived history.\n- **D** is wrong. Automation rules cannot and should not rewrite past data.\n\n**Exam tip:** retrieve history first, then bookmark what matters.",
    "source": "Perform threat hunting in Microsoft Sentinel — Hunt using search jobs and bookmarks"
  },
  {
    "id": 104,
    "domain": "sentinel",
    "topic": "Entity pages",
    "stem": "An analyst wants one page that shows a user's alerts, incidents, sign-in behaviour, peer activity, and related devices.\n\nWhich Sentinel feature provides that consolidated view?",
    "options": [
      {
        "letter": "A",
        "text": "The entity page"
      },
      {
        "letter": "B",
        "text": "The Content hub"
      },
      {
        "letter": "C",
        "text": "The automation rule editor"
      },
      {
        "letter": "D",
        "text": "The workspace manager"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entity pages consolidate alerts, incidents, activity, and UEBA insights for a user, host, IP, or other entity. They are the fastest way to understand an entity's history before pivoting.\n\n- **B** is wrong. Content hub installs solutions.\n- **C** is wrong. Automation rules respond to incidents.\n- **D** is wrong. Workspace manager manages workspaces.\n\n**Exam tip:** start entity-centric investigations on the entity page, then open the graph.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Investigate entities"
  },
  {
    "id": 105,
    "domain": "sentinel",
    "topic": "Automation rules",
    "stem": "Review the diagram.\n\nA SOC wants every new high-severity incident assigned to the on-call analyst, tagged, and optionally passed to a playbook, without writing code.\n\nWhich Sentinel feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Automation rules"
      },
      {
        "letter": "B",
        "text": "Analytics rules"
      },
      {
        "letter": "C",
        "text": "Watchlists"
      },
      {
        "letter": "D",
        "text": "Workbooks"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automation rules apply conditions and actions to incidents, such as assigning an owner, changing severity or status, adding tags, and running a playbook. They are configured in the portal without code. In the diagram the automation rule sits between the incident and the playbook, deciding which incidents proceed and what the playbook receives.\n\n- **B** is wrong. Analytics rules create alerts and incidents.\n- **C** is wrong. Watchlists store reference data.\n- **D** is wrong. Workbooks visualise data.\n\n**Exam tip:** triage logic without code = automation rule; action workflow = playbook.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Automate incident handling with automation rules",
    "diagram": "sentinel-automation"
  },
  {
    "id": 106,
    "domain": "sentinel",
    "topic": "Playbooks",
    "stem": "A SOC wants an incident to post a message to a Teams channel, open a ServiceNow ticket, and email the incident owner.\n\nWhich Sentinel component should implement that workflow?",
    "options": [
      {
        "letter": "A",
        "text": "A playbook built on Azure Logic Apps"
      },
      {
        "letter": "B",
        "text": "A scheduled analytics rule"
      },
      {
        "letter": "C",
        "text": "A watchlist"
      },
      {
        "letter": "D",
        "text": "A workbook"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Playbooks are Azure Logic Apps triggered by Sentinel incidents or alerts. They can call connectors for Teams, ServiceNow, email, and hundreds of other services to execute a response workflow.\n\n- **B** is wrong. Analytics rules detect and create incidents.\n- **C** is wrong. Watchlists store reference data.\n- **D** is wrong. Workbooks display data.\n\n**Exam tip:** multi-system response workflow = playbook; simple incident field change = automation rule.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use playbooks"
  },
  {
    "id": 107,
    "domain": "sentinel",
    "topic": "Automation rule order",
    "stem": "Three automation rules apply to the same incident. The team needs them to run in a specific sequence, with the option to stop processing after a critical rule.\n\nWhich property controls that behaviour?",
    "options": [
      {
        "letter": "A",
        "text": "The order value on each automation rule"
      },
      {
        "letter": "B",
        "text": "The workspace retention period"
      },
      {
        "letter": "C",
        "text": "The analytics rule lookback"
      },
      {
        "letter": "D",
        "text": "The watchlist row count"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automation rules run in ascending order. Each rule can be configured to continue or stop processing, which lets a critical rule take precedence and prevent later rules from acting.\n\n- **B** is wrong. Retention controls data storage.\n- **C** is wrong. Lookback controls the query window.\n- **D** is wrong. Watchlist size is unrelated.\n\n**Exam tip:** automation rules are ordered; design the sequence deliberately.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Automation rule order"
  },
  {
    "id": 108,
    "domain": "sentinel",
    "topic": "Playbook permissions",
    "stem": "An automation rule cannot run its playbook. The playbook exists in a different resource group from the Sentinel workspace.\n\nWhat is the most likely cause?",
    "options": [
      {
        "letter": "A",
        "text": "The Sentinel automation service account lacks permission on the playbook's resource group."
      },
      {
        "letter": "B",
        "text": "The workspace has too much retention."
      },
      {
        "letter": "C",
        "text": "The analytics rule has no entity mapping."
      },
      {
        "letter": "D",
        "text": "The incident has no tasks."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Sentinel runs incident-trigger playbooks under a special service identity. That identity needs explicit permission on the resource group where the playbook lives, and the Microsoft Sentinel Automation Contributor role supports adding playbooks to automation rules.\n\n- **B** is wrong. Retention does not affect playbook execution.\n- **C** is wrong. Entity mapping enriches incidents.\n- **D** is wrong. Tasks are response checklists.\n\n**Exam tip:** playbook fails across resource groups? Check the automation service account's permissions.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Playbook permissions"
  },
  {
    "id": 109,
    "domain": "sentinel",
    "topic": "Logic Apps connectors",
    "stem": "A playbook must create a ticket in a third-party ITSM system that is not a Microsoft product.\n\nWhich capability makes that integration possible?",
    "options": [
      {
        "letter": "A",
        "text": "Logic Apps connectors, including custom connectors"
      },
      {
        "letter": "B",
        "text": "Watchlists"
      },
      {
        "letter": "C",
        "text": "Entity mapping"
      },
      {
        "letter": "D",
        "text": "Data collection rules"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Logic Apps provides built-in and custom connectors to external systems. A playbook uses those connectors to create tickets, update records, or call APIs as part of the response.\n\n- **B** is wrong. Watchlists store reference data.\n- **C** is wrong. Entity mapping adds incident context.\n- **D** is wrong. DCRs control ingestion.\n\n**Exam tip:** if the response system has an API, a Logic Apps connector can usually reach it.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Logic Apps connectors"
  },
  {
    "id": 110,
    "domain": "sentinel",
    "topic": "Playbook execution in the automation flow",
    "stem": "Review the Sentinel automation diagram.\n\nAn incident matches an automation rule, and the rule must send a Teams message and create a ticket.\n\nWhich component performs those actions?",
    "options": [
      {
        "letter": "A",
        "text": "The playbook"
      },
      {
        "letter": "B",
        "text": "The analytics rule"
      },
      {
        "letter": "C",
        "text": "The data connector"
      },
      {
        "letter": "D",
        "text": "The watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The diagram shows the incident feeding an automation rule, which invokes a playbook. The playbook is the Logic App that calls Teams, email, or ticketing connectors to perform the actions.\n\n- **B** is wrong. The analytics rule created the alert and incident; it does not run response workflows.\n- **C** is wrong. Connectors ingest data into the workspace.\n- **D** is wrong. Watchlists supply reference data.\n\n**Exam tip:** automation rule decides; playbook acts.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Sentinel automation architecture",
    "diagram": "sentinel-automation"
  },
  {
    "id": 111,
    "domain": "sentinel",
    "topic": "Automation rule actions",
    "stem": "A SOC wants an automation rule to triage new incidents before an analyst sees them.\n\nWhich two actions can the automation rule perform? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Assign the incident to a specific analyst or group."
      },
      {
        "letter": "B",
        "text": "Change the incident severity or status."
      },
      {
        "letter": "C",
        "text": "Rewrite the KQL query in the analytics rule."
      },
      {
        "letter": "D",
        "text": "Delete raw sign-in logs from the workspace."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Automation rules can assign ownership, set status and severity, add tags, and run playbooks. These actions standardise triage and route work to the right queue.\n\n- **C** is wrong. Rule logic is changed in the analytics rule.\n- **D** is wrong. Automation rules do not delete raw workspace data.\n\n**Exam tip:** automation rules operate on incident metadata; playbooks operate on external systems.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Automation rule actions"
  },
  {
    "id": 112,
    "domain": "sentinel",
    "topic": "UEBA BehaviourAnalytics",
    "stem": "An analyst wants to compare a user's current activity with the behaviour of similar users in the organisation.\n\nWhich Sentinel table and feature support that analysis?",
    "options": [
      {
        "letter": "A",
        "text": "BehaviorAnalytics and UEBA entity insights"
      },
      {
        "letter": "B",
        "text": "SecurityAlert and incident tasks"
      },
      {
        "letter": "C",
        "text": "Watchlist and bookmarks"
      },
      {
        "letter": "D",
        "text": "DeviceInventory and TVM"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "BehaviorAnalytics stores UEBA-derived activity and anomaly data, and entity pages surface peer-group comparisons, anomaly scores, and behavioural insights for users and hosts.\n\n- **B** is wrong. SecurityAlert holds alerts, and tasks are checklists.\n- **C** is wrong. Watchlists and bookmarks serve different purposes.\n- **D** is wrong. TVM covers vulnerabilities.\n\n**Exam tip:** peer-group behaviour questions point to UEBA and BehaviorAnalytics.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use entity behavior analytics"
  },
  {
    "id": 113,
    "domain": "sentinel",
    "topic": "UEBA anomaly signal",
    "stem": "A finance user normally works 09:00 to 17:00 from one city. Overnight, the account downloads 4 GB from a SharePoint site and accesses executive documents.\n\nWhich UEBA signal best supports the investigation?",
    "options": [
      {
        "letter": "A",
        "text": "An anomaly score showing activity outside the user's normal pattern and peer group."
      },
      {
        "letter": "B",
        "text": "The workspace retention setting."
      },
      {
        "letter": "C",
        "text": "The Safe Links policy mode."
      },
      {
        "letter": "D",
        "text": "The device group automation level."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "UEBA compares activity with the user's baseline and peer group, producing anomaly scores for unusual time, volume, location, and resource access. Those signals help prioritise the investigation.\n\n- **B** is wrong. Retention affects data storage.\n- **C** is wrong. Safe Links affects URL handling.\n- **D** is wrong. Device group automation affects endpoint remediation.\n\n**Exam tip:** UEBA answers \"is this unusual for this user?\", not \"is this signature malicious?\".",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Investigate anomalies with UEBA"
  },
  {
    "id": 114,
    "domain": "sentinel",
    "topic": "Enabling UEBA",
    "stem": "A Sentinel workspace has UEBA turned off. The SOC wants user and host behaviour insights and anomaly scores.\n\nWhat must be done?",
    "options": [
      {
        "letter": "A",
        "text": "Enable UEBA for the workspace and ensure relevant identity and activity data sources are connected."
      },
      {
        "letter": "B",
        "text": "Install Safe Links on every domain controller."
      },
      {
        "letter": "C",
        "text": "Delete the SecurityAlert table."
      },
      {
        "letter": "D",
        "text": "Convert all analytics rules to Fusion."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "UEBA is enabled per workspace and depends on connected identity and activity data, such as Entra sign-in logs and endpoint telemetry. Once enabled, Sentinel builds behaviour profiles and anomaly insights.\n\n- **B** is wrong. Safe Links is an email protection feature.\n- **C** is wrong. Deleting alerts removes detection history.\n- **D** is wrong. Fusion is unrelated to enabling UEBA.\n\n**Exam tip:** UEBA needs data breadth; connect identity and activity sources first.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Enable UEBA"
  },
  {
    "id": 115,
    "domain": "sentinel",
    "topic": "Threat intelligence indicators",
    "stem": "An analyst wants to store known malicious IP addresses, domains, and file hashes so queries and matching rules can use them.\n\nWhich Sentinel table stores those indicators?",
    "options": [
      {
        "letter": "A",
        "text": "ThreatIntelligenceIndicator"
      },
      {
        "letter": "B",
        "text": "SigninLogs"
      },
      {
        "letter": "C",
        "text": "SecurityIncident"
      },
      {
        "letter": "D",
        "text": "DeviceProcessEvents"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "ThreatIntelligenceIndicator stores indicators of compromise such as IPs, domains, URLs, and file hashes, whether uploaded manually or ingested from a feed. Matching analytics rules compare telemetry against this table.\n\n- **B** is wrong. SigninLogs contains authentication events.\n- **C** is wrong. SecurityIncident contains incident records.\n- **D** is wrong. DeviceProcessEvents contains process telemetry.\n\n**Exam tip:** IOC storage and matching = ThreatIntelligenceIndicator.",
    "source": "Connect logs to Microsoft Sentinel — Threat intelligence"
  },
  {
    "id": 116,
    "domain": "sentinel",
    "topic": "TAXII threat intelligence feed",
    "stem": "A company subscribes to a threat intelligence provider that exposes indicators through a TAXII server.\n\nWhich connector should the company use?",
    "options": [
      {
        "letter": "A",
        "text": "Threat intelligence - TAXII"
      },
      {
        "letter": "B",
        "text": "Azure Activity"
      },
      {
        "letter": "C",
        "text": "Common Event Format"
      },
      {
        "letter": "D",
        "text": "Office 365"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Threat intelligence - TAXII connector pulls STIX/TAXII indicators from a provider into the ThreatIntelligenceIndicator table, where matching rules and hunting queries can use them.\n\n- **B** is wrong. Azure Activity covers control-plane events.\n- **C** is wrong. CEF ingests appliance logs.\n- **D** is wrong. Office 365 ingests Microsoft 365 audit data.\n\n**Exam tip:** TAXII is the standard pull path for commercial TI feeds.",
    "source": "Connect logs to Microsoft Sentinel — Connect the threat intelligence TAXII connector"
  },
  {
    "id": 117,
    "domain": "sentinel",
    "topic": "Watchlists",
    "stem": "A SOC maintains a list of 200 executive accounts and 50 known scanner IP addresses that analysts reference in many queries.\n\nWhere should this list be stored for reuse in Sentinel?",
    "options": [
      {
        "letter": "A",
        "text": "In a watchlist"
      },
      {
        "letter": "B",
        "text": "In a workbook"
      },
      {
        "letter": "C",
        "text": "In an automation rule"
      },
      {
        "letter": "D",
        "text": "In a playbook"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Watchlists store imported lists such as VIP accounts, known benign scanners, or high-value assets. Analysts reference them from KQL and use them in analytics rules, hunting queries, and automation conditions.\n\n- **B** is wrong. Workbooks visualise data.\n- **C** is wrong. Automation rules respond to incidents.\n- **D** is wrong. Playbooks automate workflows.\n\n**Exam tip:** repeated reference lists belong in a watchlist, not hard-coded in every query.",
    "source": "Configure your Microsoft Sentinel environment — Use watchlists"
  },
  {
    "id": 118,
    "domain": "sentinel",
    "topic": "Watchlist queries",
    "stem": "An analyst needs to exclude the accounts in a watchlist named VIPUsers from a detection query.\n\nWhich KQL function retrieves the watchlist rows?",
    "options": [
      {
        "letter": "A",
        "text": "_GetWatchlist('VIPUsers')"
      },
      {
        "letter": "B",
        "text": "workspace('VIPUsers')"
      },
      {
        "letter": "C",
        "text": "union VIPUsers"
      },
      {
        "letter": "D",
        "text": "ThreatIntelligenceIndicator('VIPUsers')"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The _GetWatchlist() function returns the rows of a named watchlist so the query can join or filter against it. Watchlist data is also available in the Watchlist table.\n\n- **B** is wrong. workspace() references another workspace.\n- **C** is wrong. union combines tables but does not load a watchlist by name.\n- **D** is wrong. That table stores threat indicators.\n\n**Exam tip:** watchlists in KQL use _GetWatchlist('name').",
    "source": "Configure your Microsoft Sentinel environment — Use watchlists in KQL"
  },
  {
    "id": 119,
    "domain": "kql",
    "topic": "where operator",
    "stem": "An analyst has a query that returns every row in `SigninLogs`. The analyst only wants failed sign-ins.\n\nWhich operator should be added first?",
    "options": [
      {
        "letter": "A",
        "text": "`where ResultType != 0`"
      },
      {
        "letter": "B",
        "text": "`project ResultType`"
      },
      {
        "letter": "C",
        "text": "`summarize count() by ResultType`"
      },
      {
        "letter": "D",
        "text": "`render piechart`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`where` filters rows using a Boolean expression. `ResultType != 0` keeps rows that represent failed sign-ins and removes successful ones before later operators process them.\n\n- **B** is wrong. `project` selects columns; it does not filter rows.\n- **C** is wrong. `summarize` aggregates the rows but does not remove failures from the result.\n- **D** is wrong. `render` visualises the result set.\n\n**Exam tip:** filter early with `where` to reduce the rows every later operator must handle.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — The where operator"
  },
  {
    "id": 120,
    "domain": "kql",
    "topic": "project operator",
    "stem": "A query returns twenty columns, but the analyst needs only `TimeGenerated`, `UserPrincipalName`, and `IPAddress` in that order.\n\nWhich operator should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`project TimeGenerated, UserPrincipalName, IPAddress`"
      },
      {
        "letter": "B",
        "text": "`project-away TimeGenerated, UserPrincipalName, IPAddress`"
      },
      {
        "letter": "C",
        "text": "`extend TimeGenerated, UserPrincipalName, IPAddress`"
      },
      {
        "letter": "D",
        "text": "`summarize TimeGenerated, UserPrincipalName, IPAddress`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`project` selects and orders columns. Listing the three columns returns only those fields, which also reduces the amount of data returned to the client.\n\n- **B** is wrong. `project-away` removes the listed columns and keeps the rest.\n- **C** is wrong. `extend` creates calculated columns.\n- **D** is wrong. `summarize` aggregates and requires aggregation expressions.\n\n**Exam tip:** `project` keeps what you list; `project-away` removes what you list.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Project operator"
  },
  {
    "id": 121,
    "domain": "kql",
    "topic": "Selecting and removing columns",
    "stem": "An analyst wants one query that keeps `DeviceName` and `FileName` and another that keeps everything except `TenantId` and `SourceSystem`.\n\nWhich two operators should the analyst use? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "`project` to keep named columns"
      },
      {
        "letter": "B",
        "text": "`project-away` to remove named columns"
      },
      {
        "letter": "C",
        "text": "`where` to keep named columns"
      },
      {
        "letter": "D",
        "text": "`parse` to remove named columns"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "`project` returns only the columns you name, while `project-away` returns every column except the ones you name. Both are column-selection tools, not filters or parsers.\n\n- **C** is wrong. `where` filters rows by a condition.\n- **D** is wrong. `parse` extracts values from strings.\n\n**Exam tip:** column shape is controlled by `project` or `project-away`, not by `where`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Project-away operator"
  },
  {
    "id": 122,
    "domain": "kql",
    "topic": "extend operator",
    "stem": "An analyst wants to add a column that calculates the length of the `ProcessCommandLine` string for each process event.\n\nWhich operator should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`extend CommandLength = strlen(ProcessCommandLine)`"
      },
      {
        "letter": "B",
        "text": "`project CommandLength = strlen(ProcessCommandLine)`"
      },
      {
        "letter": "C",
        "text": "`where CommandLength = strlen(ProcessCommandLine)`"
      },
      {
        "letter": "D",
        "text": "`summarize CommandLength = strlen(ProcessCommandLine)`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`extend` adds one or more calculated columns to the existing rows. The original columns remain available, and the new column can be used by later operators.\n\n- **B** is wrong. `project` would replace the column set rather than add to it.\n- **C** is wrong. `where` filters rows and does not create a reusable column.\n- **D** is wrong. `summarize` aggregates rows.\n\n**Exam tip:** add a derived field with `extend`; keep only chosen fields with `project`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Extend operator"
  },
  {
    "id": 123,
    "domain": "kql",
    "topic": "summarize count by",
    "stem": "An analyst needs the number of failed sign-ins for each user in the last 24 hours.\n\nWhich query produces that result?",
    "options": [
      {
        "letter": "A",
        "text": "`SigninLogs | where TimeGenerated > ago(24h) and ResultType != 0 | summarize Failed = count() by UserPrincipalName`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs | where TimeGenerated > ago(24h) | project UserPrincipalName`"
      },
      {
        "letter": "C",
        "text": "`SigninLogs | summarize UserPrincipalName`"
      },
      {
        "letter": "D",
        "text": "`SigninLogs | extend Failed = count() by UserPrincipalName`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`summarize` groups rows by `UserPrincipalName` and applies `count()` to each group, producing one row per user with a `Failed` count. The `where` clause limits the data to failed sign-ins in the time window.\n\n- **B** is wrong. It returns users but no counts.\n- **C** is wrong. `summarize` requires an aggregation expression.\n- **D** is wrong. `extend` cannot aggregate by a group.\n\n**Exam tip:** group and count is always `summarize <agg>() by <column>`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Summarize operator"
  },
  {
    "id": 124,
    "domain": "kql",
    "topic": "dcount distinct count",
    "stem": "A manager wants to know how many different devices ran PowerShell in the last day, not how many PowerShell events occurred.\n\nWhich aggregation should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`dcount(DeviceName)`"
      },
      {
        "letter": "B",
        "text": "`count()`"
      },
      {
        "letter": "C",
        "text": "`count(DeviceName)`"
      },
      {
        "letter": "D",
        "text": "`sum(DeviceName)`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`dcount()` counts distinct values. Applying it to `DeviceName` returns the number of unique devices, which is different from the number of events.\n\n- **B** is wrong. `count()` counts rows, including repeated devices.\n- **C** is wrong. `count(DeviceName)` counts non-null values, not distinct devices.\n- **D** is wrong. `sum()` requires a numeric column.\n\n**Exam tip:** unique entities = `dcount`; total events = `count`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — dcount function"
  },
  {
    "id": 125,
    "domain": "kql",
    "topic": "arg_max latest row per group",
    "stem": "An analyst needs the most recent sign-in for each user, including all columns from that sign-in.\n\nWhich operator pattern should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`summarize arg_max(TimeGenerated, *) by UserPrincipalName`"
      },
      {
        "letter": "B",
        "text": "`summarize max(TimeGenerated) by UserPrincipalName`"
      },
      {
        "letter": "C",
        "text": "`project TimeGenerated, UserPrincipalName`"
      },
      {
        "letter": "D",
        "text": "`top 1 by TimeGenerated`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`arg_max(TimeGenerated, *)` returns the row with the latest timestamp for each group and keeps all columns. That gives the full latest sign-in record per user.\n\n- **B** is wrong. It returns only the maximum timestamp, not the rest of the row.\n- **C** is wrong. It returns every row, not the latest one per user.\n- **D** is wrong. It returns the single latest row overall.\n\n**Exam tip:** latest full record per entity = `arg_max(TimeGenerated, *) by Entity`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — arg_max function"
  },
  {
    "id": 126,
    "domain": "kql",
    "topic": "bin time series",
    "stem": "An analyst wants a count of security events per hour for the last day, so the results can be charted.\n\nWhich aggregation produces hourly buckets?",
    "options": [
      {
        "letter": "A",
        "text": "`summarize count() by bin(TimeGenerated, 1h)`"
      },
      {
        "letter": "B",
        "text": "`summarize count() by TimeGenerated`"
      },
      {
        "letter": "C",
        "text": "`project TimeGenerated, count()`"
      },
      {
        "letter": "D",
        "text": "`where TimeGenerated = 1h`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`bin(TimeGenerated, 1h)` groups timestamps into one-hour buckets, and `count()` totals the events in each bucket. The result is a time series ready for `render timechart`.\n\n- **B** is wrong. Grouping by the raw timestamp produces one row per distinct event time.\n- **C** is wrong. `project` cannot contain an aggregation.\n- **D** is wrong. `where` compares values and does not create buckets.\n\n**Exam tip:** time-based charts start with `summarize ... by bin(TimeGenerated, <interval>)`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Use summarize to create time series"
  },
  {
    "id": 127,
    "domain": "kql",
    "topic": "join and union",
    "stem": "An analyst needs to combine two result sets: one query that matches threat indicators to network events, and another that appends events from two tables with the same schema.\n\nWhich two operators should the analyst use? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "`join` to match rows across tables on a key"
      },
      {
        "letter": "B",
        "text": "`union` to append result sets with compatible columns"
      },
      {
        "letter": "C",
        "text": "`parse` to match rows across tables"
      },
      {
        "letter": "D",
        "text": "`project` to append result sets"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "`join` combines rows from two tables based on a matching key, such as an IP address. `union` appends rows from multiple tables or queries into one result set.\n\n- **C** is wrong. `parse` extracts values from strings.\n- **D** is wrong. `project` selects columns.\n\n**Exam tip:** match columns sideways with `join`; stack rows with `union`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Join and union operators"
  },
  {
    "id": 128,
    "domain": "kql",
    "topic": "parse operator",
    "stem": "A log line contains the text `User=alice Action=Delete Resource=Payroll`. The analyst wants to extract the user and action into separate columns.\n\nWhich operator is designed for this pattern?",
    "options": [
      {
        "letter": "A",
        "text": "`parse`"
      },
      {
        "letter": "B",
        "text": "`where`"
      },
      {
        "letter": "C",
        "text": "`summarize`"
      },
      {
        "letter": "D",
        "text": "`render`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`parse` matches a string pattern and assigns the variable parts to columns, for example `parse RawData with \"User=\" User \" Action=\" Action`. `extract` is the alternative when a regular expression is more suitable.\n\n- **B** is wrong. `where` filters rows.\n- **C** is wrong. `summarize` aggregates.\n- **D** is wrong. `render` visualises.\n\n**Exam tip:** structured text in a log column = `parse`; regex = `extract`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Parse operator"
  },
  {
    "id": 129,
    "domain": "kql",
    "topic": "extract with regular expressions",
    "stem": "A URL column contains values such as `https://contoso.example/login?id=42`. The analyst needs only the numeric ID and the pattern varies in length.\n\nWhich operator is the best fit?",
    "options": [
      {
        "letter": "A",
        "text": "`extract(@\"id=(\\d+)\", 1, Url)`"
      },
      {
        "letter": "B",
        "text": "`parse Url with \"id=\" Id`"
      },
      {
        "letter": "C",
        "text": "`project Url`"
      },
      {
        "letter": "D",
        "text": "`summarize count() by Url`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`extract` applies a regular expression and returns the selected capture group. `(\\d+)` captures the digits after `id=`, and the `1` selects that group.\n\n- **B** is wrong. `parse` needs a literal pattern and cannot express a variable-length numeric capture cleanly.\n- **C** is wrong. It returns the whole URL.\n- **D** is wrong. It counts URLs.\n\n**Exam tip:** variable patterns need `extract`; fixed delimiters suit `parse`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Extract function"
  },
  {
    "id": 130,
    "domain": "kql",
    "topic": "let statements",
    "stem": "An analyst wants to reuse the same time window and user list across several queries in one script.\n\nWhich construct should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`let`"
      },
      {
        "letter": "B",
        "text": "`project`"
      },
      {
        "letter": "C",
        "text": "`join`"
      },
      {
        "letter": "D",
        "text": "`render`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`let` binds a name to a scalar, table, or function for use later in the same query. It makes complex queries readable and avoids repeating the same definition.\n\n- **B** is wrong. `project` selects columns.\n- **C** is wrong. `join` combines tables.\n- **D** is wrong. `render` visualises.\n\n**Exam tip:** use `let` for reusable filters, lookup tables, and helper functions.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Declare and reuse variables"
  },
  {
    "id": 131,
    "domain": "kql",
    "topic": "Dynamic JSON fields",
    "stem": "A `DeviceInfo` record stores a `AdditionalFields` column as dynamic JSON with keys such as `OSVersion` and `Model`.\n\nWhich approach extracts `OSVersion` for filtering?",
    "options": [
      {
        "letter": "A",
        "text": "`extend OSVersion = tostring(AdditionalFields.OSVersion)`"
      },
      {
        "letter": "B",
        "text": "`where AdditionalFields = \"OSVersion\"`"
      },
      {
        "letter": "C",
        "text": "`summarize AdditionalFields`"
      },
      {
        "letter": "D",
        "text": "`project-away AdditionalFields`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Dynamic columns support dot notation to access keys. `tostring()` converts the value to a string so it can be compared or displayed in a filter.\n\n- **B** is wrong. It compares the whole dynamic object to a string.\n- **C** is wrong. It aggregates without extracting the key.\n- **D** is wrong. It removes the column instead of reading it.\n\n**Exam tip:** dynamic JSON = dot notation plus `tostring()` when you need a scalar.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Dynamic fields"
  },
  {
    "id": 132,
    "domain": "kql",
    "topic": "mv-expand arrays",
    "stem": "A column contains an array of IP addresses for each sign-in. The analyst wants one row per IP address.\n\nWhich operator should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`mv-expand IPAddress`"
      },
      {
        "letter": "B",
        "text": "`summarize IPAddress`"
      },
      {
        "letter": "C",
        "text": "`project IPAddress`"
      },
      {
        "letter": "D",
        "text": "`parse IPAddress`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`mv-expand` turns each element of a dynamic array into its own row, duplicating the other columns. That makes it possible to filter, join, or count individual values.\n\n- **B** is wrong. `summarize` aggregates without expanding.\n- **C** is wrong. It keeps the array intact.\n- **D** is wrong. `parse` extracts text patterns.\n\n**Exam tip:** arrays blocking per-value analysis? `mv-expand` first.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — mv-expand operator"
  },
  {
    "id": 133,
    "domain": "kql",
    "topic": "sort take and top",
    "stem": "An analyst wants the five accounts with the most failed sign-ins in the last day.\n\nWhich query is correct?",
    "options": [
      {
        "letter": "A",
        "text": "`SigninLogs | where TimeGenerated > ago(1d) and ResultType != 0 | summarize Failed = count() by UserPrincipalName | top 5 by Failed desc`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs | top 5 by TimeGenerated`"
      },
      {
        "letter": "C",
        "text": "`SigninLogs | where ResultType != 0 | project UserPrincipalName`"
      },
      {
        "letter": "D",
        "text": "`SigninLogs | summarize count() by UserPrincipalName | where Failed > 5`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The query filters to failures, counts them per user, then sorts descending and takes the top five. `top` combines ordering and limiting.\n\n- **B** is wrong. It returns the five latest events, not the busiest accounts.\n- **C** is wrong. It returns users without counts.\n- **D** is wrong. It filters groups by a threshold rather than selecting the highest five and references an alias that may not exist.\n\n**Exam tip:** aggregate first, then `top N by <measure>`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Top operator"
  },
  {
    "id": 134,
    "domain": "kql",
    "topic": "has versus contains",
    "stem": "An analyst wants fast term matching on the `ProcessCommandLine` column for the word `mimikatz`, and does not need substring matching inside other words.\n\nWhich operator is preferred for performance and term accuracy?",
    "options": [
      {
        "letter": "A",
        "text": "`has`"
      },
      {
        "letter": "B",
        "text": "`contains`"
      },
      {
        "letter": "C",
        "text": "`matches regex`"
      },
      {
        "letter": "D",
        "text": "`startswith`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`has` performs a term match on an indexed value and is faster and more precise than `contains`. It matches the whole term rather than an arbitrary substring.\n\n- **B** is wrong. `contains` performs substring matching and is slower.\n- **C** is wrong. Regular expressions are powerful but more expensive.\n- **D** is wrong. `startswith` only matches the beginning of the string.\n\n**Exam tip:** term search = `has`; substring search = `contains`; regex only when necessary.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — String operators"
  },
  {
    "id": 135,
    "domain": "kql",
    "topic": "Time filters with ago",
    "stem": "A query scans the entire retention period and times out. The analyst only needs the last 24 hours.\n\nWhich filter should be added?",
    "options": [
      {
        "letter": "A",
        "text": "`where TimeGenerated > ago(24h)`"
      },
      {
        "letter": "B",
        "text": "`where TimeGenerated < ago(24h)`"
      },
      {
        "letter": "C",
        "text": "`summarize by TimeGenerated`"
      },
      {
        "letter": "D",
        "text": "`project TimeGenerated`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`ago(24h)` returns the timestamp 24 hours before now, and `>` keeps rows newer than that point. Filtering on the time column first lets the engine prune data.\n\n- **B** is wrong. It keeps data older than 24 hours.\n- **C** is wrong. It groups without limiting time.\n- **D** is wrong. It selects the column without filtering.\n\n**Exam tip:** every hunting query should start with a time bound.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query time ranges"
  },
  {
    "id": 136,
    "domain": "kql",
    "topic": "Failed sign-in query result",
    "stem": "Review the query:\n\n`SigninLogs | where TimeGenerated > ago(24h) and ResultType != 0 | summarize Failed = count() by UserPrincipalName | top 10 by Failed desc`\n\nWhat does the query return?",
    "options": [
      {
        "letter": "A",
        "text": "The ten users with the most failed sign-ins in the last 24 hours, highest count first."
      },
      {
        "letter": "B",
        "text": "The ten most recent failed sign-ins, newest first."
      },
      {
        "letter": "C",
        "text": "Every failed sign-in for every user in the last 24 hours."
      },
      {
        "letter": "D",
        "text": "The ten users with the most successful sign-ins in the last 24 hours."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The query filters failures in the last day, counts them per user, sorts by the count descending, and keeps the top ten. The output is one row per user with a `Failed` count.\n\n- **B** is wrong. `summarize` removes individual events.\n- **C** is wrong. The result is aggregated to ten rows.\n- **D** is wrong. `ResultType != 0` selects failures.\n\n**Exam tip:** read a query inside out: filter, aggregate, sort, limit.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Real-world query examples"
  },
  {
    "id": 137,
    "domain": "kql",
    "topic": "Count by device query",
    "stem": "Review the query:\n\n`DeviceProcessEvents | where TimeGenerated > ago(7d) | summarize Events = count() by DeviceName | sort by Events desc`\n\nWhat does the query return?",
    "options": [
      {
        "letter": "A",
        "text": "One row per device with its total process-event count for seven days, largest first."
      },
      {
        "letter": "B",
        "text": "One row per process event for seven days."
      },
      {
        "letter": "C",
        "text": "The seven devices with the most events."
      },
      {
        "letter": "D",
        "text": "One row per device with the latest event time."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`summarize count() by DeviceName` produces one row per device, and `sort by Events desc` orders those rows by the count. The time filter limits the data to seven days.\n\n- **B** is wrong. Aggregation collapses individual events.\n- **C** is wrong. There is no `top` operator limiting the row count.\n- **D** is wrong. The query counts events; it does not select timestamps.\n\n**Exam tip:** no `top`/`take` means the result can contain every group.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Summarize operator"
  },
  {
    "id": 138,
    "domain": "kql",
    "topic": "Latest process per device",
    "stem": "Review the query:\n\n`DeviceProcessEvents | where TimeGenerated > ago(1d) | summarize arg_max(TimeGenerated, FileName, ProcessCommandLine) by DeviceName`\n\nWhat does the query return?",
    "options": [
      {
        "letter": "A",
        "text": "The most recent process event per device, with its file name and command line."
      },
      {
        "letter": "B",
        "text": "Every process event from the last day."
      },
      {
        "letter": "C",
        "text": "The device with the most process events."
      },
      {
        "letter": "D",
        "text": "The first process event per device."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`arg_max(TimeGenerated, FileName, ProcessCommandLine)` returns the row with the latest time for each device and includes the requested columns. The result is one row per device.\n\n- **B** is wrong. The aggregation collapses events.\n- **C** is wrong. It does not count events or rank devices.\n- **D** is wrong. `arg_max` returns the maximum timestamp, not the minimum.\n\n**Exam tip:** `arg_max` = latest; `arg_min` = earliest.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — arg_max function"
  },
  {
    "id": 139,
    "domain": "kql",
    "topic": "make_set unique values",
    "stem": "An analyst wants one row per user listing all distinct countries from which the user signed in during the last week.\n\nWhich aggregation should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`summarize make_set(Location) by UserPrincipalName`"
      },
      {
        "letter": "B",
        "text": "`summarize count(Location) by UserPrincipalName`"
      },
      {
        "letter": "C",
        "text": "`project UserPrincipalName, Location`"
      },
      {
        "letter": "D",
        "text": "`where Location != \"\"`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`make_set()` returns a dynamic array of the distinct values in each group. Combined with `by UserPrincipalName`, it produces one row per user with a set of countries.\n\n- **B** is wrong. It counts values but does not list them.\n- **C** is wrong. It returns one row per event.\n- **D** is wrong. It filters rows without aggregating.\n\n**Exam tip:** `make_set` = unique list; `make_list` = all values including duplicates.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — make_set function"
  },
  {
    "id": 140,
    "domain": "kql",
    "topic": "Hunting workflow stage",
    "stem": "Review the threat hunting workflow diagram.\n\nA hunter has written a KQL query and identified five suspicious devices. The team now wants to preserve those findings and open an investigation.\n\nWhich stage of the workflow comes next?",
    "options": [
      {
        "letter": "A",
        "text": "Findings, using bookmarks and entities"
      },
      {
        "letter": "B",
        "text": "Telemetry collection"
      },
      {
        "letter": "C",
        "text": "Connector configuration"
      },
      {
        "letter": "D",
        "text": "Workspace retention"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "After the query returns results, the findings stage captures them as bookmarks and entities so they can be investigated and added to an incident. Telemetry and connectors are earlier stages.\n\n- **B** is wrong. Telemetry is the input to the query, not what follows it.\n- **C** is wrong. Connectors are configured before hunting.\n- **D** is wrong. Retention controls storage duration.\n\n**Exam tip:** hunting moves telemetry → query → findings → investigation → response.",
    "source": "Perform threat hunting in Microsoft Sentinel — Process to hunt threats",
    "diagram": "hunting-workflow"
  },
  {
    "id": 141,
    "domain": "kql",
    "topic": "Summarize with extend",
    "stem": "An analyst wants a table of failed sign-in counts per user and a derived column showing whether the count exceeds 20.\n\nWhich query achieves this?",
    "options": [
      {
        "letter": "A",
        "text": "`SigninLogs | where ResultType != 0 | summarize Failed = count() by UserPrincipalName | extend HighRisk = Failed > 20`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs | extend HighRisk = Failed > 20 | summarize count() by UserPrincipalName`"
      },
      {
        "letter": "C",
        "text": "`SigninLogs | project UserPrincipalName, HighRisk`"
      },
      {
        "letter": "D",
        "text": "`SigninLogs | where HighRisk > 20`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`summarize` creates the `Failed` column per user, and `extend` then evaluates `Failed > 20` to create a Boolean `HighRisk` column. Operators run left to right.\n\n- **B** is wrong. `Failed` does not exist before the `summarize`.\n- **C** is wrong. `HighRisk` does not exist in the source table.\n- **D** is wrong. It references a column that has not been created.\n\n**Exam tip:** you can only reference a calculated column after the operator that creates it.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Extend operator"
  },
  {
    "id": 142,
    "domain": "kql",
    "topic": "Multiple aggregations",
    "stem": "An analyst wants, for each device, the number of process events and the number of distinct accounts involved.\n\nWhich summarize clause is correct?",
    "options": [
      {
        "letter": "A",
        "text": "`summarize Events = count(), Accounts = dcount(AccountName) by DeviceName`"
      },
      {
        "letter": "B",
        "text": "`summarize count() by DeviceName`"
      },
      {
        "letter": "C",
        "text": "`summarize dcount(DeviceName) by AccountName`"
      },
      {
        "letter": "D",
        "text": "`summarize count(), dcount() by DeviceName`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A single `summarize` can calculate multiple aggregations in the same group. Naming them makes the output readable and lets later operators reference them.\n\n- **B** is wrong. It omits the distinct account count.\n- **C** is wrong. It groups by account instead of device.\n- **D** is wrong. `dcount()` requires a column argument.\n\n**Exam tip:** one `summarize` can produce several named measures per group.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Summarize operator"
  },
  {
    "id": 143,
    "domain": "kql",
    "topic": "SigninLogs table",
    "stem": "An analyst needs to find sign-ins from a new country for a specific user.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`SigninLogs`"
      },
      {
        "letter": "B",
        "text": "`SecurityEvent`"
      },
      {
        "letter": "C",
        "text": "`DeviceProcessEvents`"
      },
      {
        "letter": "D",
        "text": "`CommonSecurityLog`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`SigninLogs` contains Microsoft Entra sign-in records with user, application, result, location, device, and conditional access details. Country-based sign-in analysis starts there.\n\n- **B** is wrong. `SecurityEvent` contains Windows security events from servers and domain controllers.\n- **C** is wrong. `DeviceProcessEvents` contains endpoint process activity.\n- **D** is wrong. `CommonSecurityLog` contains CEF appliance events.\n\n**Exam tip:** cloud authentication = `SigninLogs`; Windows logon = `SecurityEvent`.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Entra ID data"
  },
  {
    "id": 144,
    "domain": "kql",
    "topic": "SecurityEvent key fields",
    "stem": "An analyst is investigating a Windows server and wants to identify the type of security event and the computer that generated it.\n\nWhich two fields are most useful? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "`EventID`"
      },
      {
        "letter": "B",
        "text": "`Computer`"
      },
      {
        "letter": "C",
        "text": "`RemoteIP`"
      },
      {
        "letter": "D",
        "text": "`FileHashValue`"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "`SecurityEvent` records Windows events with `EventID` identifying the event type, such as 4624 or 4625, and `Computer` identifying the source host. Together they scope the event before deeper analysis.\n\n- **C** is wrong. `RemoteIP` is more typical of network tables.\n- **D** is wrong. `FileHashValue` belongs to file or indicator tables.\n\n**Exam tip:** Windows event triage starts with `EventID` plus `Computer`.",
    "source": "Connect logs to Microsoft Sentinel — Connect Windows security events"
  },
  {
    "id": 145,
    "domain": "kql",
    "topic": "DeviceProcessEvents table",
    "stem": "An analyst wants to see every process launched on a device, including the parent process and command line.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`DeviceProcessEvents`"
      },
      {
        "letter": "B",
        "text": "`DeviceNetworkEvents`"
      },
      {
        "letter": "C",
        "text": "`SigninLogs`"
      },
      {
        "letter": "D",
        "text": "`AuditLogs`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`DeviceProcessEvents` contains process creation events with fields such as `FileName`, `ProcessCommandLine`, `InitiatingProcessFileName`, `AccountName`, and `DeviceName`.\n\n- **B** is wrong. It contains network connections.\n- **C** is wrong. It contains Entra sign-ins.\n- **D** is wrong. It contains directory audit events.\n\n**Exam tip:** process lineage and command lines live in `DeviceProcessEvents`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — DeviceProcessEvents"
  },
  {
    "id": 146,
    "domain": "kql",
    "topic": "DeviceNetworkEvents table",
    "stem": "An analyst needs to identify outbound connections from a device to a known malicious IP address.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`DeviceNetworkEvents`"
      },
      {
        "letter": "B",
        "text": "`DeviceFileEvents`"
      },
      {
        "letter": "C",
        "text": "`SecurityEvent`"
      },
      {
        "letter": "D",
        "text": "`OfficeActivity`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`DeviceNetworkEvents` records connection attempts and network activity with fields such as `RemoteIP`, `RemotePort`, `RemoteUrl`, `InitiatingProcessFileName`, and `DeviceName`.\n\n- **B** is wrong. It records file operations.\n- **C** is wrong. It records Windows security events.\n- **D** is wrong. It records Microsoft 365 workload activity.\n\n**Exam tip:** IP and URL connections on endpoints = `DeviceNetworkEvents`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — DeviceNetworkEvents"
  },
  {
    "id": 147,
    "domain": "kql",
    "topic": "DeviceFileEvents table",
    "stem": "An analyst wants to find files created in a temporary folder just before a ransomware alert.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`DeviceFileEvents`"
      },
      {
        "letter": "B",
        "text": "`DeviceProcessEvents`"
      },
      {
        "letter": "C",
        "text": "`DeviceNetworkEvents`"
      },
      {
        "letter": "D",
        "text": "`SigninLogs`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`DeviceFileEvents` records file creation, modification, rename, and deletion activity, including folder path, file name, and hash. It is the table for file-system evidence on endpoints.\n\n- **B** is wrong. It records process execution.\n- **C** is wrong. It records network connections.\n- **D** is wrong. It records cloud sign-ins.\n\n**Exam tip:** file-system activity = `DeviceFileEvents`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — DeviceFileEvents"
  },
  {
    "id": 148,
    "domain": "kql",
    "topic": "DeviceEvents ActionType",
    "stem": "An analyst wants to confirm that an attack surface reduction rule blocked a suspicious Office child process.\n\nWhich table and field should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`DeviceEvents` and `ActionType`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs` and `ResultType`"
      },
      {
        "letter": "C",
        "text": "`AuditLogs` and `OperationName`"
      },
      {
        "letter": "D",
        "text": "`CommonSecurityLog` and `DeviceVendor`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`DeviceEvents` contains many endpoint event types, and `ActionType` identifies the specific activity, such as an ASR rule action. Filtering `ActionType` for the relevant ASR event confirms the block.\n\n- **B** is wrong. `ResultType` is a sign-in result code.\n- **C** is wrong. `OperationName` describes directory audit operations.\n- **D** is wrong. `DeviceVendor` identifies a CEF source.\n\n**Exam tip:** endpoint event categories beyond process and network often live in `DeviceEvents` with `ActionType`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — DeviceEvents"
  },
  {
    "id": 149,
    "domain": "kql",
    "topic": "AuditLogs table",
    "stem": "An analyst needs to find who changed a user's group membership in Microsoft Entra ID.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`AuditLogs`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs`"
      },
      {
        "letter": "C",
        "text": "`DeviceEvents`"
      },
      {
        "letter": "D",
        "text": "`EmailEvents`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`AuditLogs` contains Microsoft Entra audit records such as group membership changes, role assignments, and application changes, with `OperationName`, `InitiatedBy`, and `TargetResources`.\n\n- **B** is wrong. `SigninLogs` records authentication.\n- **C** is wrong. `DeviceEvents` records endpoint activity.\n- **D** is wrong. `EmailEvents` records mail delivery.\n\n**Exam tip:** directory changes = `AuditLogs`; directory authentication = `SigninLogs`.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Entra audit logs"
  },
  {
    "id": 150,
    "domain": "kql",
    "topic": "OfficeActivity table",
    "stem": "An analyst wants to find mailbox rule creation and SharePoint file downloads across Microsoft 365.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`OfficeActivity`"
      },
      {
        "letter": "B",
        "text": "`SecurityEvent`"
      },
      {
        "letter": "C",
        "text": "`DeviceProcessEvents`"
      },
      {
        "letter": "D",
        "text": "`ThreatIntelligenceIndicator`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`OfficeActivity` contains Microsoft 365 audit events across workloads, with `OfficeWorkload`, `Operation`, `UserId`, and workload-specific fields. It is the starting point for Exchange, SharePoint, OneDrive, and Teams activity.\n\n- **B** is wrong. `SecurityEvent` covers Windows events.\n- **C** is wrong. It covers endpoint processes.\n- **D** is wrong. It stores threat indicators.\n\n**Exam tip:** Microsoft 365 workload audit = `OfficeActivity`, filtered by `OfficeWorkload`.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft 365 audit logs"
  },
  {
    "id": 151,
    "domain": "kql",
    "topic": "CommonSecurityLog table",
    "stem": "A firewall sends CEF events to Sentinel. The analyst needs the source and destination IP addresses.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`CommonSecurityLog`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs`"
      },
      {
        "letter": "C",
        "text": "`DeviceFileEvents`"
      },
      {
        "letter": "D",
        "text": "`AuditLogs`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`CommonSecurityLog` stores CEF events from network and security appliances, with fields such as `DeviceVendor`, `DeviceProduct`, `SourceIP`, `DestinationIP`, and `Activity`.\n\n- **B** is wrong. It stores Entra sign-ins.\n- **C** is wrong. It stores endpoint file events.\n- **D** is wrong. It stores directory audit events.\n\n**Exam tip:** third-party firewall or proxy with CEF = `CommonSecurityLog`.",
    "source": "Connect logs to Microsoft Sentinel — Common Event Format"
  },
  {
    "id": 152,
    "domain": "kql",
    "topic": "EmailEvents table",
    "stem": "An analyst needs to find all recipients of a message with a specific subject line.\n\nWhich table should be queried?",
    "options": [
      {
        "letter": "A",
        "text": "`EmailEvents`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs`"
      },
      {
        "letter": "C",
        "text": "`DeviceProcessEvents`"
      },
      {
        "letter": "D",
        "text": "`SecurityIncident`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`EmailEvents` contains mail delivery records with sender, recipient, subject, delivery action, and threat details. It is the table for scoping an email campaign in Sentinel.\n\n- **B** is wrong. It contains sign-ins.\n- **C** is wrong. It contains endpoint processes.\n- **D** is wrong. It contains incident records.\n\n**Exam tip:** email delivery scoping = `EmailEvents`; deeper email hunting may use Defender XDR advanced hunting.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Defender for Office 365"
  },
  {
    "id": 153,
    "domain": "kql",
    "topic": "Entity mapping from query columns",
    "stem": "A scheduled rule returns `AccountName`, `DeviceName`, and `RemoteIP`. The analyst wants responders to pivot on the account and device.\n\nWhich two entity mappings are appropriate? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Map `AccountName` to Account."
      },
      {
        "letter": "B",
        "text": "Map `DeviceName` to Host."
      },
      {
        "letter": "C",
        "text": "Map `RemoteIP` to File."
      },
      {
        "letter": "D",
        "text": "Map `AccountName` to Process."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "`AccountName` identifies a user account, and `DeviceName` identifies a host. Mapping them to the correct entity types makes them available in the incident and investigation graph.\n\n- **C** is wrong. An IP address should map to an IP entity, not a File.\n- **D** is wrong. An account is not a process.\n\n**Exam tip:** match the column's meaning to the entity type, not its name.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Map data fields to entities"
  },
  {
    "id": 154,
    "domain": "kql",
    "topic": "Custom detection versus Sentinel rule",
    "stem": "A detection query is written in KQL. The team wants the detection to isolate a device automatically whenever it matches.\n\nWhich platform feature is the best fit?",
    "options": [
      {
        "letter": "A",
        "text": "A Defender XDR custom detection with a response action"
      },
      {
        "letter": "B",
        "text": "A Sentinel scheduled analytics rule with no playbook"
      },
      {
        "letter": "C",
        "text": "A Sentinel workbook"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender XDR custom detection rules run advanced hunting queries and can take native response actions such as isolating a device or marking a user compromised. A Sentinel analytics rule would need a playbook for that action.\n\n- **B** is wrong. It creates an incident but does not isolate the device by itself.\n- **C** is wrong. A workbook visualises data.\n- **D** is wrong. A watchlist stores reference data.\n\n**Exam tip:** native XDR response action from a query = custom detection; Sentinel response = playbook.",
    "source": "Mitigate threats using Microsoft Defender XDR — Custom detections"
  },
  {
    "id": 155,
    "domain": "kql",
    "topic": "Threat intelligence join",
    "stem": "An analyst wants to match network connections against known malicious IP indicators.\n\nWhich query pattern is appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Join `DeviceNetworkEvents` to `ThreatIntelligenceIndicator` on `RemoteIP = NetworkIP`."
      },
      {
        "letter": "B",
        "text": "Join `SigninLogs` to `SecurityIncident` on `UserPrincipalName`."
      },
      {
        "letter": "C",
        "text": "Summarize `DeviceProcessEvents` by `DeviceName`."
      },
      {
        "letter": "D",
        "text": "Project `ThreatIntelligenceIndicator` only."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`ThreatIntelligenceIndicator` stores indicators such as `NetworkIP`. Joining network events to that table on the IP value identifies connections to known malicious addresses.\n\n- **B** is wrong. It joins unrelated identity and incident data.\n- **C** is wrong. It aggregates processes without using indicators.\n- **D** is wrong. It returns indicators without matching telemetry.\n\n**Exam tip:** indicator matching is a join between telemetry and `ThreatIntelligenceIndicator`.",
    "source": "Connect logs to Microsoft Sentinel — Threat intelligence"
  },
  {
    "id": 156,
    "domain": "kql",
    "topic": "Watchlist filter in a query",
    "stem": "A SOC stores executive accounts in a watchlist named `VIPUsers`. An analyst wants to exclude those accounts from a noisy rule.\n\nWhich query fragment should be used?",
    "options": [
      {
        "letter": "A",
        "text": "`| where UserPrincipalName !in (_GetWatchlist('VIPUsers') | project SearchKey)`"
      },
      {
        "letter": "B",
        "text": "`| where UserPrincipalName in ('VIPUsers')`"
      },
      {
        "letter": "C",
        "text": "`| project VIPUsers`"
      },
      {
        "letter": "D",
        "text": "`| summarize VIPUsers`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`_GetWatchlist('VIPUsers')` returns the watchlist rows. Projecting the `SearchKey` column and using `!in` excludes those accounts from the result.\n\n- **B** is wrong. It compares each user to the literal string `VIPUsers`.\n- **C** is wrong. It selects a column that does not exist in the source.\n- **D** is wrong. It aggregates rows without filtering.\n\n**Exam tip:** watchlists are joined or filtered by their `SearchKey` values.",
    "source": "Configure your Microsoft Sentinel environment — Use watchlists in KQL"
  },
  {
    "id": 157,
    "domain": "kql",
    "topic": "ASIM normalized queries",
    "stem": "A team ingests authentication events from three vendors. Instead of writing three queries, the analyst wants one query that works across all sources.\n\nWhich approach should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Query the ASIM authentication schema and let the parsers normalize each source."
      },
      {
        "letter": "B",
        "text": "Write a separate query for each vendor and manually merge the results."
      },
      {
        "letter": "C",
        "text": "Query only `SigninLogs` and ignore the other sources."
      },
      {
        "letter": "D",
        "text": "Use a workbook instead of a query."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "ASIM provides normalized schemas and parsers. A query written against the authentication schema works across all sources whose parsers map into that schema.\n\n- **B** is wrong. Manual merging defeats the purpose of normalization.\n- **C** is wrong. It ignores non-Microsoft sources.\n- **D** is wrong. A workbook still needs a query.\n\n**Exam tip:** many sources, one query = ASIM.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use ASIM parsers"
  },
  {
    "id": 158,
    "domain": "kql",
    "topic": "NRT rule trade-offs",
    "stem": "A team needs a detection with the lowest possible latency. The rule logic is a simple filter on a single table.\n\nWhich rule type is appropriate, and what is the main trade-off?",
    "options": [
      {
        "letter": "A",
        "text": "NRT, because it runs continuously but offers less scheduling flexibility and complexity than scheduled rules."
      },
      {
        "letter": "B",
        "text": "Scheduled, because it always runs faster than NRT."
      },
      {
        "letter": "C",
        "text": "Fusion, because it accepts any custom query."
      },
      {
        "letter": "D",
        "text": "Anomaly, because it runs on demand."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "NRT rules are designed for low-latency detection on simple queries. They trade the flexible scheduling and richer features of scheduled rules for speed.\n\n- **B** is wrong. Scheduled rules run at intervals, not continuously.\n- **C** is wrong. Fusion does not accept custom queries.\n- **D** is wrong. Anomaly rules use machine learning and are not on-demand queries.\n\n**Exam tip:** latency-critical and simple = NRT; complex and scheduled = scheduled rule.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — NRT analytics rules"
  },
  {
    "id": 159,
    "domain": "kql",
    "topic": "Query frequency and lookback",
    "stem": "A rule runs every 15 minutes with a 15-minute lookback. Some events arrive 25 minutes late and are never detected.\n\nWhich change fixes the gap?",
    "options": [
      {
        "letter": "A",
        "text": "Increase the lookback to cover the expected ingestion delay."
      },
      {
        "letter": "B",
        "text": "Decrease the lookback to 5 minutes."
      },
      {
        "letter": "C",
        "text": "Increase the workspace retention to 12 years."
      },
      {
        "letter": "D",
        "text": "Change the rule to Fusion."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The lookback must cover the run frequency plus expected ingestion delay. A 15-minute lookback misses events that arrive 25 minutes late, while a longer lookback includes them, at the cost of re-scanning more data.\n\n- **B** is wrong. It shortens the window and misses more.\n- **C** is wrong. Retention controls how long data is kept, not the query window.\n- **D** is wrong. Fusion cannot use a custom query.\n\n**Exam tip:** lookback ≥ frequency + ingestion delay.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Query scheduling"
  },
  {
    "id": 160,
    "domain": "kql",
    "topic": "MITRE tactic for a phishing entry",
    "stem": "Review the MITRE ATT&CK diagram.\n\nAn attacker sends a phishing email with a malicious link and the user executes the payload.\n\nWhich tactic describes the phishing email stage?",
    "options": [
      {
        "letter": "A",
        "text": "Initial Access"
      },
      {
        "letter": "B",
        "text": "Lateral Movement"
      },
      {
        "letter": "C",
        "text": "Exfiltration"
      },
      {
        "letter": "D",
        "text": "Impact"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Initial Access describes how an adversary gains a foothold, and phishing is a classic initial-access technique. Execution is the next stage, when the payload runs.\n\n- **B** is wrong. Lateral movement is movement to other systems after compromise.\n- **C** is wrong. Exfiltration is data leaving the environment.\n- **D** is wrong. Impact is the destructive or disruptive effect.\n\n**Exam tip:** phishing entry = Initial Access; payload running = Execution.",
    "source": "Perform threat hunting in Microsoft Sentinel — Use the MITRE ATT&CK framework",
    "diagram": "mitre-attack"
  },
  {
    "id": 161,
    "domain": "kql",
    "topic": "Early time filtering",
    "stem": "A hunting query takes several minutes to run against 90 days of data. The analyst changes the time range to 24 hours.\n\nWhich optimization principle does this demonstrate?",
    "options": [
      {
        "letter": "A",
        "text": "Filter on the time column as early as possible."
      },
      {
        "letter": "B",
        "text": "Remove all `where` clauses."
      },
      {
        "letter": "C",
        "text": "Add more `join` operations."
      },
      {
        "letter": "D",
        "text": "Use `render` before filtering."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Time is the largest reduction you can apply. Filtering `TimeGenerated` first lets the engine scan less data before later operators run.\n\n- **B** is wrong. Removing filters increases the data processed.\n- **C** is wrong. More joins usually increase cost.\n- **D** is wrong. Rendering happens after the query.\n\n**Exam tip:** bound the time range before anything else.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query optimization"
  },
  {
    "id": 162,
    "domain": "kql",
    "topic": "Avoiding search across all tables",
    "stem": "A query uses `search *` to find a file hash across the workspace and runs for a very long time.\n\nWhat is the better approach?",
    "options": [
      {
        "letter": "A",
        "text": "Query the specific tables that can contain the indicator, such as device file and process tables."
      },
      {
        "letter": "B",
        "text": "Increase the workspace retention to 12 years."
      },
      {
        "letter": "C",
        "text": "Add `render piechart`."
      },
      {
        "letter": "D",
        "text": "Remove the time filter."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "`search *` scans every table and is expensive. Targeting the relevant tables, such as `DeviceFileEvents`, `DeviceProcessEvents`, or `ThreatIntelligenceIndicator`, reduces the data scanned and improves performance.\n\n- **B** is wrong. Retention does not make the query selective.\n- **C** is wrong. Rendering does not reduce query cost.\n- **D** is wrong. Removing the time filter increases cost.\n\n**Exam tip:** know the table before you search; avoid `search *` in production rules.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query optimization"
  },
  {
    "id": 163,
    "domain": "kql",
    "topic": "Projecting early",
    "stem": "A query joins two large tables but only needs four columns from each. The analyst wants to reduce memory and time.\n\nWhich two actions improve the query? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "`project` only the needed columns before the join."
      },
      {
        "letter": "B",
        "text": "Filter each table by time before the join."
      },
      {
        "letter": "C",
        "text": "Add `search *` before the join."
      },
      {
        "letter": "D",
        "text": "Convert every column to string before the join."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Projecting early reduces the columns carried through the join, and time filtering reduces the rows. Both shrink the data the join must process.\n\n- **C** is wrong. `search *` adds work.\n- **D** is wrong. Unnecessary conversions add cost and can break comparisons.\n\n**Exam tip:** reduce rows and columns before an expensive join.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query optimization"
  },
  {
    "id": 164,
    "domain": "kql",
    "topic": "Aggregating before a join",
    "stem": "An analyst joins raw process events to a large asset table. The query returns millions of rows.\n\nWhich change is most likely to improve performance?",
    "options": [
      {
        "letter": "A",
        "text": "Summarize process events by device before joining to the smaller asset table."
      },
      {
        "letter": "B",
        "text": "Join the raw events to another raw event table."
      },
      {
        "letter": "C",
        "text": "Remove the time filter."
      },
      {
        "letter": "D",
        "text": "Add more columns with `extend`."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Aggregating first reduces the number of rows entering the join. Joining a small summarized set to a reference table is much cheaper than joining raw telemetry.\n\n- **B** is wrong. It increases the data involved.\n- **C** is wrong. It expands the time range.\n- **D** is wrong. Extra columns add cost.\n\n**Exam tip:** shrink before you join.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Query optimization"
  },
  {
    "id": 165,
    "domain": "kql",
    "topic": "Rendering and workbooks",
    "stem": "An analyst has a query that returns `TimeGenerated` and a count per hour. The analyst wants a line chart in a workbook that stakeholders can filter by date.\n\nWhich two capabilities should be used? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "`render timechart` for the time-series visualisation."
      },
      {
        "letter": "B",
        "text": "Workbook parameters for the date filter."
      },
      {
        "letter": "C",
        "text": "`project-away TimeGenerated` before charting."
      },
      {
        "letter": "D",
        "text": "`parse` to create the chart."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "`render timechart` visualises a time series, and workbook parameters let viewers change the date range without editing the query. Together they produce an interactive report.\n\n- **C** is wrong. Removing the time column breaks the time chart.\n- **D** is wrong. `parse` extracts text and does not render.\n\n**Exam tip:** time series = `render timechart`; interactive filters = workbook parameters.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Workbooks and visualisation"
  },
  {
    "id": 166,
    "domain": "response",
    "topic": "Incident triage first step",
    "stem": "A new high-severity incident appears in the queue with alerts from email, identity, and endpoint sources.\n\nWhat should the analyst do first?",
    "options": [
      {
        "letter": "A",
        "text": "Validate the incident, confirm the affected entities, and determine current scope."
      },
      {
        "letter": "B",
        "text": "Immediately rebuild every device in the organisation."
      },
      {
        "letter": "C",
        "text": "Delete the alerts to reduce queue noise."
      },
      {
        "letter": "D",
        "text": "Disable the analytics rule that created the incident."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Triage begins by validating that the incident is real, identifying the affected users, devices, and data, and understanding how far the activity has spread. That scope drives the containment decision.\n\n- **B** is wrong. Rebuilding every device is disproportionate and destructive.\n- **C** is wrong. Deleting alerts destroys evidence.\n- **D** is wrong. Disabling the rule removes future detection.\n\n**Exam tip:** validate and scope before you contain; containment without scope can miss affected hosts.",
    "source": "Investigate and respond to security incidents — Triage an incident"
  },
  {
    "id": 167,
    "domain": "response",
    "topic": "Incident scoping",
    "stem": "An analyst confirms that one mailbox received a phishing message. The message was also sent to 300 other recipients, and two users clicked the link.\n\nWhich activity should the analyst perform next?",
    "options": [
      {
        "letter": "A",
        "text": "Scope the campaign by identifying all recipients, clicks, and affected devices."
      },
      {
        "letter": "B",
        "text": "Close the incident because only one mailbox was reported."
      },
      {
        "letter": "C",
        "text": "Reset every password in the tenant immediately."
      },
      {
        "letter": "D",
        "text": "Delete the original phishing message from the reporting mailbox only."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Scoping determines the full extent of the campaign: every recipient, every click, and every device or account that may be compromised. That evidence drives targeted containment.\n\n- **B** is wrong. One report is rarely the full scope.\n- **C** is wrong. A tenant-wide password reset is disproportionate before scoping.\n- **D** is wrong. Removing one message does not address the other recipients.\n\n**Exam tip:** scope by campaign and entity, not by the first report.",
    "source": "Investigate and respond to security incidents — Scope an incident"
  },
  {
    "id": 168,
    "domain": "response",
    "topic": "Containment actions",
    "stem": "A device is actively communicating with a command-and-control server, and the user's account shows suspicious sign-ins.\n\nWhich two containment actions are most appropriate? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Isolate the device from the network."
      },
      {
        "letter": "B",
        "text": "Revoke the user's sessions and reset the password."
      },
      {
        "letter": "C",
        "text": "Delete the incident."
      },
      {
        "letter": "D",
        "text": "Wait for the attacker to stop."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Isolation stops the device's network communication, and revoking sessions plus a password reset invalidates the attacker's access tokens and credentials. Together they contain both the endpoint and identity paths.\n\n- **C** is wrong. Deleting the incident destroys evidence and tracking.\n- **D** is wrong. Waiting allows further damage.\n\n**Exam tip:** contain every compromised path: endpoint, identity, and any tokens or keys.",
    "source": "Investigate and respond to security incidents — Contain an incident"
  },
  {
    "id": 169,
    "domain": "response",
    "topic": "Eradication",
    "stem": "After containment, an analyst finds a malicious scheduled task and a web shell on a server.\n\nWhich phase of incident response addresses their removal?",
    "options": [
      {
        "letter": "A",
        "text": "Eradication"
      },
      {
        "letter": "B",
        "text": "Recovery"
      },
      {
        "letter": "C",
        "text": "Triage"
      },
      {
        "letter": "D",
        "text": "Lessons learned"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Eradication removes the attacker's foothold: malware, persistence mechanisms, web shells, and vulnerable entry points. Recovery then restores normal operations.\n\n- **B** is wrong. Recovery restores services after the threat is removed.\n- **C** is wrong. Triage validates and scopes the incident.\n- **D** is wrong. Lessons learned happens after resolution.\n\n**Exam tip:** eradication removes the cause; recovery restores the service.",
    "source": "Investigate and respond to security incidents — Eradicate the threat"
  },
  {
    "id": 170,
    "domain": "response",
    "topic": "Recovery validation",
    "stem": "A file server has been cleaned and restored from backup. The business wants to return it to production immediately.\n\nWhat should the analyst verify before recovery is complete?",
    "options": [
      {
        "letter": "A",
        "text": "The server is patched, clean of persistence, and monitored for reinfection."
      },
      {
        "letter": "B",
        "text": "The server has a new wallpaper."
      },
      {
        "letter": "C",
        "text": "The incident is deleted from the queue."
      },
      {
        "letter": "D",
        "text": "The backup is older than one year."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Recovery includes validating that the system is clean, the entry point is fixed, and monitoring is in place to catch reinfection. Returning an unpatched or still-compromised host restarts the incident.\n\n- **B** is wrong. Cosmetic changes do not affect security.\n- **C** is wrong. Deleting the incident loses the record.\n- **D** is wrong. Backup age alone is not a recovery criterion.\n\n**Exam tip:** recovery is not done until the root cause is fixed and monitoring is active.",
    "source": "Investigate and respond to security incidents — Recover from an incident"
  },
  {
    "id": 171,
    "domain": "response",
    "topic": "Lessons learned",
    "stem": "A major incident is resolved. Leadership wants to prevent a repeat and improve detection.\n\nWhich activity should follow?",
    "options": [
      {
        "letter": "A",
        "text": "A post-incident review that records detection gaps and updates rules, playbooks, and controls."
      },
      {
        "letter": "B",
        "text": "Deleting all incident evidence."
      },
      {
        "letter": "C",
        "text": "Disabling the alerts that fired during the incident."
      },
      {
        "letter": "D",
        "text": "Rebuilding the entire environment without analysis."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A lessons-learned review examines what happened, what worked, and what failed. Outputs include improved analytics rules, playbooks, access controls, and training.\n\n- **B** is wrong. Evidence is needed for the review and any legal or regulatory action.\n- **C** is wrong. Disabling alerts removes detection.\n- **D** is wrong. A rebuild without analysis does not fix the cause.\n\n**Exam tip:** every major incident should produce at least one detection or control improvement.",
    "source": "Investigate and respond to security incidents — Conduct a post-incident review"
  },
  {
    "id": 172,
    "domain": "response",
    "topic": "Evidence volatility",
    "stem": "An analyst arrives at a compromised server that is still running. The team needs to preserve evidence.\n\nWhich two items should be collected first? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Volatile memory and running processes"
      },
      {
        "letter": "B",
        "text": "Active network connections"
      },
      {
        "letter": "C",
        "text": "Old printer logs"
      },
      {
        "letter": "D",
        "text": "A screenshot of the desktop wallpaper"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Volatile evidence such as memory, running processes, and active network connections disappears when the system is shut down or rebooted. It should be captured before disk images and less volatile artifacts.\n\n- **C** is wrong. Printer logs are low-value and less volatile.\n- **D** is wrong. A wallpaper screenshot is not relevant evidence.\n\n**Exam tip:** follow the order of volatility: memory and connections before disk and archives.",
    "source": "Investigate and respond to security incidents — Collect evidence"
  },
  {
    "id": 173,
    "domain": "response",
    "topic": "Chain of custody",
    "stem": "An analyst collects a disk image from a compromised laptop. The image will be used in a legal proceeding.\n\nWhat should the analyst document?",
    "options": [
      {
        "letter": "A",
        "text": "Who collected the evidence, when, from where, and every transfer or access."
      },
      {
        "letter": "B",
        "text": "Only the file size of the image."
      },
      {
        "letter": "C",
        "text": "The user's opinion about the attacker."
      },
      {
        "letter": "D",
        "text": "The marketing name of the laptop."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Chain of custody records the evidence's origin, collector, timestamp, storage location, and every handoff. It demonstrates that the evidence was not altered.\n\n- **B** is wrong. Size alone does not establish integrity or custody.\n- **C** is wrong. Opinion is not chain-of-custody documentation.\n- **D** is wrong. The model name is not custody information.\n\n**Exam tip:** hash the evidence and log every transfer; custody gaps can invalidate evidence.",
    "source": "Investigate and respond to security incidents — Preserve evidence"
  },
  {
    "id": 174,
    "domain": "response",
    "topic": "Incident timeline",
    "stem": "Alerts and logs come from Entra ID, Defender for Endpoint, and a firewall, each with different timestamp formats and time zones.\n\nWhat should the analyst do to build a reliable timeline?",
    "options": [
      {
        "letter": "A",
        "text": "Normalise timestamps to a common time zone and order events chronologically."
      },
      {
        "letter": "B",
        "text": "Use only the first alert received."
      },
      {
        "letter": "C",
        "text": "Ignore events from sources with different formats."
      },
      {
        "letter": "D",
        "text": "Sort events alphabetically by device name."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A timeline is reliable only when timestamps share a time zone and format. Normalising, ideally to UTC, and ordering events chronologically reveals cause and effect across sources.\n\n- **B** is wrong. The first alert may not be the first event.\n- **C** is wrong. Ignoring sources creates blind spots.\n- **D** is wrong. Alphabetical order is not chronological.\n\n**Exam tip:** normalise to UTC before correlating events.",
    "source": "Investigate and respond to security incidents — Build an incident timeline"
  },
  {
    "id": 175,
    "domain": "response",
    "topic": "Stakeholder communication",
    "stem": "A ransomware incident affects customer-facing systems. Legal, communications, and executive leadership need updates, and a regulator may require notification.\n\nWhat should the incident commander do?",
    "options": [
      {
        "letter": "A",
        "text": "Follow the incident communication plan with defined roles, cadence, and escalation paths."
      },
      {
        "letter": "B",
        "text": "Post technical details in a public social media channel."
      },
      {
        "letter": "C",
        "text": "Communicate only after the incident is fully closed."
      },
      {
        "letter": "D",
        "text": "Let each analyst contact stakeholders independently."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A communication plan defines who speaks, to whom, how often, and when to escalate to legal or regulators. It keeps messages consistent and meets notification obligations.\n\n- **B** is wrong. Public disclosure can increase harm and create legal risk.\n- **C** is wrong. Delayed notification can breach regulatory deadlines.\n- **D** is wrong. Uncoordinated messages create confusion.\n\n**Exam tip:** incident communication is planned and role-based, not improvised.",
    "source": "Investigate and respond to security incidents — Communicate during an incident"
  },
  {
    "id": 176,
    "domain": "response",
    "topic": "Tactics versus techniques",
    "stem": "A report says an attacker used PowerShell to download a payload, and the analyst must map it to MITRE ATT&CK.\n\nWhich distinction is correct?",
    "options": [
      {
        "letter": "A",
        "text": "The tactic is the adversary's goal, and the technique is how the goal was achieved."
      },
      {
        "letter": "B",
        "text": "The tactic is the tool name, and the technique is the vendor."
      },
      {
        "letter": "C",
        "text": "The tactic and technique are identical identifiers."
      },
      {
        "letter": "D",
        "text": "The tactic is the IP address, and the technique is the domain."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Tactics are the why: the adversary's objective, such as execution or credential access. Techniques are the how: the specific behaviour, such as PowerShell or OS credential dumping.\n\n- **B** is wrong. Tools and vendors are not the tactic/technique model.\n- **C** is wrong. They are distinct levels with different identifiers.\n- **D** is wrong. Network indicators are not tactics.\n\n**Exam tip:** tactic = goal; technique = method; procedure = the specific implementation.",
    "source": "Investigate and respond to security incidents — Map activity to MITRE ATT&CK"
  },
  {
    "id": 177,
    "domain": "response",
    "topic": "Initial access technique",
    "stem": "A user opens a malicious attachment that installs a remote-access trojan.\n\nWhich MITRE tactic does the attachment delivery represent?",
    "options": [
      {
        "letter": "A",
        "text": "Initial Access"
      },
      {
        "letter": "B",
        "text": "Persistence"
      },
      {
        "letter": "C",
        "text": "Privilege Escalation"
      },
      {
        "letter": "D",
        "text": "Exfiltration"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Initial Access is the adversary's entry into the environment. A malicious attachment or phishing link is a common initial-access vector.\n\n- **B** is wrong. Persistence keeps access after reboots or credential changes.\n- **C** is wrong. Privilege escalation gains higher permissions.\n- **D** is wrong. Exfiltration removes data.\n\n**Exam tip:** delivery and first foothold = Initial Access.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK tactics"
  },
  {
    "id": 178,
    "domain": "response",
    "topic": "Persistence technique",
    "stem": "An attacker creates a scheduled task that runs a malicious script every time the server starts.\n\nWhich tactic is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Persistence"
      },
      {
        "letter": "B",
        "text": "Discovery"
      },
      {
        "letter": "C",
        "text": "Collection"
      },
      {
        "letter": "D",
        "text": "Impact"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Persistence covers mechanisms that maintain access across restarts, logoffs, or credential changes. Scheduled tasks, run keys, and services are common persistence techniques.\n\n- **B** is wrong. Discovery is reconnaissance inside the environment.\n- **C** is wrong. Collection gathers data for exfiltration.\n- **D** is wrong. Impact is destructive or disruptive activity.\n\n**Exam tip:** surviving a reboot = persistence.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK persistence"
  },
  {
    "id": 179,
    "domain": "response",
    "topic": "Privilege escalation",
    "stem": "A standard user exploits a vulnerable service to gain local administrator rights on a workstation.\n\nWhich tactic does this represent?",
    "options": [
      {
        "letter": "A",
        "text": "Privilege Escalation"
      },
      {
        "letter": "B",
        "text": "Initial Access"
      },
      {
        "letter": "C",
        "text": "Command and Control"
      },
      {
        "letter": "D",
        "text": "Reconnaissance"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Privilege escalation is the attempt to gain higher permissions than the account was granted. Exploiting a local service to become administrator is a classic example.\n\n- **B** is wrong. Initial access is the first foothold.\n- **C** is wrong. Command and control is attacker communication with compromised systems.\n- **D** is wrong. Reconnaissance is information gathering before or during an attack.\n\n**Exam tip:** same host, higher rights = privilege escalation.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK privilege escalation"
  },
  {
    "id": 180,
    "domain": "response",
    "topic": "Credential access",
    "stem": "An attacker runs a tool that reads LSASS memory to obtain password hashes.\n\nWhich tactic is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Credential Access"
      },
      {
        "letter": "B",
        "text": "Persistence"
      },
      {
        "letter": "C",
        "text": "Lateral Movement"
      },
      {
        "letter": "D",
        "text": "Exfiltration"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Credential Access covers techniques that steal credentials, such as dumping LSASS, Kerberoasting, or reading cached secrets. The stolen credentials are then used for further access.\n\n- **B** is wrong. Persistence maintains access.\n- **C** is wrong. Lateral movement uses credentials to reach other systems.\n- **D** is wrong. Exfiltration removes data.\n\n**Exam tip:** stealing secrets = Credential Access; using them elsewhere = Lateral Movement.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK credential access"
  },
  {
    "id": 181,
    "domain": "response",
    "topic": "Discovery",
    "stem": "An attacker runs commands to list domain administrators, mapped drives, and local users after compromising a host.\n\nWhich tactic is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Discovery"
      },
      {
        "letter": "B",
        "text": "Impact"
      },
      {
        "letter": "C",
        "text": "Initial Access"
      },
      {
        "letter": "D",
        "text": "Resource Development"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Discovery is reconnaissance inside the compromised environment: enumerating users, groups, systems, and shares to plan the next step.\n\n- **B** is wrong. Impact is destructive or disruptive action.\n- **C** is wrong. Initial access is the entry point.\n- **D** is wrong. Resource Development is attacker preparation, such as infrastructure or accounts.\n\n**Exam tip:** internal enumeration after compromise = Discovery.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK discovery"
  },
  {
    "id": 182,
    "domain": "response",
    "topic": "Lateral movement technique",
    "stem": "An attacker uses stolen credentials to create a remote service on another server and execute code there.\n\nWhich tactic is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Lateral Movement"
      },
      {
        "letter": "B",
        "text": "Credential Access"
      },
      {
        "letter": "C",
        "text": "Persistence"
      },
      {
        "letter": "D",
        "text": "Collection"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Lateral movement is the attacker's movement from one compromised system to another. Remote service creation with stolen credentials is a common technique.\n\n- **B** is wrong. Credential Access steals the credentials; Lateral Movement uses them.\n- **C** is wrong. Persistence maintains access on a host.\n- **D** is wrong. Collection gathers data.\n\n**Exam tip:** host-to-host movement = Lateral Movement.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK lateral movement"
  },
  {
    "id": 183,
    "domain": "response",
    "topic": "Command and control",
    "stem": "A compromised workstation makes a DNS request every 60 seconds to a rare domain, and each response is followed by a small outbound HTTPS connection.\n\nWhich tactic does this behaviour indicate?",
    "options": [
      {
        "letter": "A",
        "text": "Command and Control"
      },
      {
        "letter": "B",
        "text": "Exfiltration"
      },
      {
        "letter": "C",
        "text": "Privilege Escalation"
      },
      {
        "letter": "D",
        "text": "Initial Access"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Regular beaconing to an external endpoint is a command-and-control pattern. The attacker uses the channel to send instructions and receive results.\n\n- **B** is wrong. Exfiltration is data theft, which may follow but is not the beacon itself.\n- **C** is wrong. Privilege escalation gains rights.\n- **D** is wrong. Initial access is the entry point.\n\n**Exam tip:** periodic beaconing = C2; large outbound transfers = possible exfiltration.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK command and control"
  },
  {
    "id": 184,
    "domain": "response",
    "topic": "Phishing response",
    "stem": "A user reports a suspicious email and says they entered credentials on the linked page.\n\nWhat should the analyst do first?",
    "options": [
      {
        "letter": "A",
        "text": "Reset the user's password, revoke sessions, and check for suspicious sign-ins and mailbox rules."
      },
      {
        "letter": "B",
        "text": "Wait 24 hours to see whether anything happens."
      },
      {
        "letter": "C",
        "text": "Delete the email from the user's mailbox only."
      },
      {
        "letter": "D",
        "text": "Disable the organisation's email gateway."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Entered credentials may already be in use. Resetting the password, revoking sessions, and reviewing sign-ins and mailbox rules contains the identity risk and detects misuse.\n\n- **B** is wrong. Waiting gives the attacker time to act.\n- **C** is wrong. Deleting the message does not invalidate stolen credentials.\n- **D** is wrong. Disabling the gateway disrupts the whole organisation.\n\n**Exam tip:** credential entry turns a phishing report into an identity incident.",
    "source": "Investigate and respond to security incidents — Respond to phishing"
  },
  {
    "id": 185,
    "domain": "response",
    "topic": "Identity investigation sources",
    "stem": "Review the identity attack investigation diagram.\n\nAn analyst needs to determine whether an attacker used stolen domain credentials against servers on the corporate network, in addition to cloud sign-ins.\n\nWhich source in the diagram provides that evidence?",
    "options": [
      {
        "letter": "A",
        "text": "Defender for Identity domain controller sensors"
      },
      {
        "letter": "B",
        "text": "Sign-in logs only"
      },
      {
        "letter": "C",
        "text": "Safe Links click data"
      },
      {
        "letter": "D",
        "text": "Device inventory"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Identity sensors monitor domain controller authentication traffic and detect on-premises credential attacks such as Pass-the-Hash and Kerberoasting. Sign-in logs cover cloud authentication, not domain-level NTLM and Kerberos activity.\n\n- **B** is wrong. Sign-in logs show Entra ID authentication, not domain controller traffic.\n- **C** is wrong. Safe Links covers URL clicks.\n- **D** is wrong. Device inventory lists endpoints.\n\n**Exam tip:** cloud sign-in evidence and on-prem directory evidence come from different sources.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate identity attacks",
    "diagram": "identity-attack"
  },
  {
    "id": 186,
    "domain": "response",
    "topic": "Business email compromise",
    "stem": "A finance user's mailbox sends payment-change requests to suppliers. The user did not send them, and a hidden inbox rule forwards replies to an external address.\n\nWhich attack is most likely?",
    "options": [
      {
        "letter": "A",
        "text": "Business email compromise"
      },
      {
        "letter": "B",
        "text": "Ransomware"
      },
      {
        "letter": "C",
        "text": "Password spray"
      },
      {
        "letter": "D",
        "text": "Denial of service"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Business email compromise takes over a mailbox to commit fraud, often creating hidden forwarding rules and sending payment or credential requests to contacts. The rule is both persistence and concealment.\n\n- **B** is wrong. Ransomware encrypts data for extortion.\n- **C** is wrong. Password spray is a credential-guessing technique.\n- **D** is wrong. Denial of service disrupts availability.\n\n**Exam tip:** mailbox rules plus payment requests = BEC until proven otherwise.",
    "source": "Investigate and respond to security incidents — Investigate business email compromise"
  },
  {
    "id": 187,
    "domain": "response",
    "topic": "Ransomware first response",
    "stem": "Review the diagram.\n\nMultiple servers are encrypting files, and a ransom note appears on desktops.\n\nWhich two actions should the incident team take first? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Contain affected systems and disable compromised accounts."
      },
      {
        "letter": "B",
        "text": "Preserve evidence and identify the initial access vector."
      },
      {
        "letter": "C",
        "text": "Pay the ransom immediately."
      },
      {
        "letter": "D",
        "text": "Restart every server to clear the encryption."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Containment limits spread, and evidence plus initial-access analysis prevents reinfection during recovery. Both must happen before restoring services. The diagram marks containment and evidence preservation as the first breakpoints in the chain, before eradication and recovery.\n\n- **C** is wrong. Payment is not a technical first response and does not guarantee recovery.\n- **D** is wrong. Restarting does not decrypt files and may destroy volatile evidence.\n\n**Exam tip:** contain, preserve, find the entry point, then eradicate and recover.",
    "source": "Investigate and respond to security incidents — Respond to ransomware",
    "diagram": "ransomware-chain"
  },
  {
    "id": 188,
    "domain": "response",
    "topic": "Password spray versus brute force",
    "stem": "An attacker tries the password `Summer2026!` against 5,000 accounts, using one attempt per account.\n\nWhich attack is this?",
    "options": [
      {
        "letter": "A",
        "text": "Password spray"
      },
      {
        "letter": "B",
        "text": "Brute force"
      },
      {
        "letter": "C",
        "text": "Credential stuffing"
      },
      {
        "letter": "D",
        "text": "Pass-the-Hash"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Password spray uses one or a few common passwords across many accounts to avoid lockout thresholds. Brute force tries many passwords against one account.\n\n- **B** is wrong. Brute force concentrates attempts on one account.\n- **C** is wrong. Credential stuffing replays breached username/password pairs.\n- **D** is wrong. Pass-the-Hash uses an NTLM hash.\n\n**Exam tip:** many accounts, one password = spray; one account, many passwords = brute force.",
    "source": "Investigate and respond to security incidents — Detect credential attacks"
  },
  {
    "id": 189,
    "domain": "response",
    "topic": "Pass-the-Hash versus Pass-the-Ticket",
    "stem": "Review the diagram.\n\nAn attacker uses a stolen Kerberos service ticket to access a file server without knowing the user's password.\n\nWhich technique is being used?",
    "options": [
      {
        "letter": "A",
        "text": "Pass-the-Ticket"
      },
      {
        "letter": "B",
        "text": "Pass-the-Hash"
      },
      {
        "letter": "C",
        "text": "Password spray"
      },
      {
        "letter": "D",
        "text": "Kerberoasting"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Pass-the-Ticket reuses a valid Kerberos ticket to authenticate. Pass-the-Hash uses an NTLM hash, and Kerberoasting requests service tickets to crack offline. The diagram keeps the NTLM hash path and the Kerberos ticket path separate, and this scenario follows the ticket path.\n\n- **B** is wrong. Pass-the-Hash uses an NTLM hash.\n- **C** is wrong. Password spray guesses passwords across accounts.\n- **D** is wrong. Kerberoasting obtains tickets for offline cracking, not reuse of a stolen ticket.\n\n**Exam tip:** NTLM hash = Pass-the-Hash; Kerberos ticket = Pass-the-Ticket.",
    "source": "Investigate and respond to security incidents — Investigate credential theft",
    "diagram": "identity-attack"
  },
  {
    "id": 190,
    "domain": "response",
    "topic": "Illicit OAuth consent response",
    "stem": "A user grants a third-party app permission to read all mail. The app then creates inbox rules and accesses files.\n\nWhich two response actions are appropriate? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Revoke the app's permissions and disable the application."
      },
      {
        "letter": "B",
        "text": "Review and remove suspicious mailbox rules, then reset the user's credentials."
      },
      {
        "letter": "C",
        "text": "Ignore the app because the user consented."
      },
      {
        "letter": "D",
        "text": "Disable all OAuth applications in the tenant permanently."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Revoking the app's consent stops its access, and removing mailbox rules plus resetting credentials removes the attacker's persistence. The user's consent does not make the app trustworthy.\n\n- **C** is wrong. Consent can be obtained through deception.\n- **D** is wrong. Disabling all OAuth apps breaks legitimate business applications.\n\n**Exam tip:** illicit consent grant response = revoke consent, remove persistence, reset credentials.",
    "source": "Investigate and respond to security incidents — Investigate OAuth abuse"
  },
  {
    "id": 191,
    "domain": "response",
    "topic": "Insider threat investigation",
    "stem": "A departing employee downloads large amounts of finance data outside normal hours and uploads files to a personal cloud account.\n\nWhich combination best supports the investigation?",
    "options": [
      {
        "letter": "A",
        "text": "UEBA anomalies, DLP alerts, and audit logs, handled with HR and legal."
      },
      {
        "letter": "B",
        "text": "Deleting the user's account immediately without evidence collection."
      },
      {
        "letter": "C",
        "text": "Disabling all network access for the company."
      },
      {
        "letter": "D",
        "text": "Ignoring the activity because the user is still employed."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Insider-risk investigations combine behaviour analytics, data-loss alerts, and audit evidence, and they involve HR and legal to protect privacy and employment requirements.\n\n- **B** is wrong. Deleting the account can destroy evidence and alert the user.\n- **C** is wrong. Company-wide disruption is disproportionate.\n- **D** is wrong. Employment does not make the activity benign.\n\n**Exam tip:** insider cases need evidence and process, not just technical containment.",
    "source": "Investigate and respond to security incidents — Investigate insider threats"
  },
  {
    "id": 192,
    "domain": "response",
    "topic": "Malware versus ransomware",
    "stem": "A device runs a credential-stealing trojan that exfiltrates browser passwords but does not encrypt files.\n\nWhich description is correct?",
    "options": [
      {
        "letter": "A",
        "text": "It is malware, but not ransomware, because it does not encrypt data for extortion."
      },
      {
        "letter": "B",
        "text": "It is ransomware because all malware is ransomware."
      },
      {
        "letter": "C",
        "text": "It is not malware because it did not encrypt files."
      },
      {
        "letter": "D",
        "text": "It is a phishing email."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Malware is the broad category of malicious software. Ransomware is a specific type that encrypts or steals data and demands payment. A credential stealer is malware without the ransomware impact.\n\n- **B** is wrong. Ransomware is a subset of malware.\n- **C** is wrong. Encryption is not required for something to be malware.\n- **D** is wrong. A phishing email is a delivery method.\n\n**Exam tip:** ransomware is defined by extortion impact, not by being malicious.",
    "source": "Investigate and respond to security incidents — Classify malware"
  },
  {
    "id": 193,
    "domain": "response",
    "topic": "Impossible travel",
    "stem": "A user signs in from London at 09:00 and from Singapore at 09:20. The organisation does not expect travel.\n\nWhich explanation should the analyst investigate first?",
    "options": [
      {
        "letter": "A",
        "text": "Credential compromise or token theft, while also ruling out VPN or proxy use."
      },
      {
        "letter": "B",
        "text": "A guaranteed ransomware infection."
      },
      {
        "letter": "C",
        "text": "A phishing email that was never opened."
      },
      {
        "letter": "D",
        "text": "Normal behaviour that requires no review."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Impossible travel can indicate compromised credentials or stolen tokens, but VPNs, proxies, and cloud egress can also produce the pattern. The analyst verifies the cause before concluding compromise.\n\n- **B** is wrong. Travel anomalies do not imply ransomware.\n- **C** is wrong. An unopened email is not the cause of a sign-in.\n- **D** is wrong. The pattern warrants investigation.\n\n**Exam tip:** confirm whether the locations are real user activity or network egress before resetting.",
    "source": "Investigate and respond to security incidents — Investigate anomalous sign-ins"
  },
  {
    "id": 194,
    "domain": "response",
    "topic": "Command-and-control beacon",
    "stem": "A workstation connects to a rare domain every five minutes, and the connections are evenly spaced with small uploads.\n\nWhat should the analyst do first?",
    "options": [
      {
        "letter": "A",
        "text": "Isolate the device, block the domain, and investigate the process that generated the traffic."
      },
      {
        "letter": "B",
        "text": "Reimage the device without collecting evidence."
      },
      {
        "letter": "C",
        "text": "Ignore the traffic because it is small."
      },
      {
        "letter": "D",
        "text": "Disable the organisation's DNS service."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Regular beaconing is consistent with command and control. Isolation and blocking stop the channel, while process and timeline analysis identify the malware and its persistence.\n\n- **B** is wrong. Reimaging destroys evidence and may leave the entry point.\n- **C** is wrong. Small, regular traffic is a classic beacon pattern.\n- **D** is wrong. Disabling DNS disrupts the whole organisation.\n\n**Exam tip:** beaconing is about regularity, not volume.",
    "source": "Investigate and respond to security incidents — Investigate command and control"
  },
  {
    "id": 195,
    "domain": "response",
    "topic": "Endpoint evidence collection",
    "stem": "A compromised endpoint must be preserved for forensic analysis, but the business needs the user back online quickly.\n\nWhich approach balances both needs?",
    "options": [
      {
        "letter": "A",
        "text": "Collect an investigation package and relevant logs, then rebuild the device."
      },
      {
        "letter": "B",
        "text": "Delete the device from Defender and return it to the user."
      },
      {
        "letter": "C",
        "text": "Run a quick scan and assume the device is clean."
      },
      {
        "letter": "D",
        "text": "Shut the device down and leave it offline indefinitely."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "An investigation package captures endpoint artifacts for later analysis, and collecting logs preserves the supporting evidence. The device can then be rebuilt so the user can resume work.\n\n- **B** is wrong. Offboarding removes telemetry and evidence.\n- **C** is wrong. A scan does not prove the device is clean.\n- **D** is wrong. Indefinite downtime is a business impact without a recovery plan.\n\n**Exam tip:** collect first, rebuild second.",
    "source": "Investigate and respond to security incidents — Collect endpoint evidence"
  },
  {
    "id": 196,
    "domain": "response",
    "topic": "Log evidence selection",
    "stem": "An analyst needs to prove that a user's mailbox was accessed from an unusual location after a phishing email.\n\nWhich evidence source is most relevant?",
    "options": [
      {
        "letter": "A",
        "text": "Mailbox audit events and sign-in logs"
      },
      {
        "letter": "B",
        "text": "Device process events only"
      },
      {
        "letter": "C",
        "text": "Firewall throughput counters"
      },
      {
        "letter": "D",
        "text": "Printer spooler logs"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Mailbox audit events show access and rule changes, and sign-in logs show the authentication location and result. Together they establish who accessed the mailbox and from where.\n\n- **B** is wrong. Process events alone do not show mailbox access.\n- **C** is wrong. Throughput counters do not identify user activity.\n- **D** is wrong. Printer logs are unrelated.\n\n**Exam tip:** match the evidence source to the workload you need to prove.",
    "source": "Investigate and respond to security incidents — Collect log evidence"
  },
  {
    "id": 197,
    "domain": "response",
    "topic": "User activity evidence",
    "stem": "An investigator needs to show what a user did in SharePoint and OneDrive before leaving the company.\n\nWhich evidence source is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft 365 audit logs and UEBA activity"
      },
      {
        "letter": "B",
        "text": "Defender for Identity sensor logs"
      },
      {
        "letter": "C",
        "text": "Device network packets only"
      },
      {
        "letter": "D",
        "text": "Safe Attachments detonation reports"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft 365 audit logs record file access, downloads, sharing, and other workload activity, while UEBA adds behavioural context. Together they show the user's data activity.\n\n- **B** is wrong. Defender for Identity covers directory authentication.\n- **C** is wrong. Packet capture alone does not identify user actions.\n- **D** is wrong. Safe Attachments analyses email attachments.\n\n**Exam tip:** user data activity = Microsoft 365 audit plus behaviour analytics.",
    "source": "Investigate and respond to security incidents — Collect user activity evidence"
  },
  {
    "id": 198,
    "domain": "response",
    "topic": "Investigation summary",
    "stem": "An analyst must write the final investigation summary for a major incident.\n\nWhich two elements should the summary include? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "A timeline of key events and the affected entities."
      },
      {
        "letter": "B",
        "text": "The root cause, response actions, and remaining risks."
      },
      {
        "letter": "C",
        "text": "The analyst's personal social media opinions."
      },
      {
        "letter": "D",
        "text": "A list of every alert in the tenant, unrelated to the incident."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "A useful summary states what happened, when, which entities were affected, how the team responded, and what risk remains. It should be factual and scoped to the incident.\n\n- **C** is wrong. Personal opinions are not incident documentation.\n- **D** is wrong. Unrelated alerts add noise.\n\n**Exam tip:** summary = timeline + scope + root cause + actions + residual risk.",
    "source": "Investigate and respond to security incidents — Write an investigation summary"
  },
  {
    "id": 199,
    "domain": "response",
    "topic": "Post-incident improvements",
    "stem": "A review finds that an analytics rule missed the attacker's lateral movement because no rule mapped the relevant logon events.\n\nWhat should the team do?",
    "options": [
      {
        "letter": "A",
        "text": "Create or tune a detection rule for the missing behaviour and test it."
      },
      {
        "letter": "B",
        "text": "Remove the logon data from the workspace."
      },
      {
        "letter": "C",
        "text": "Close the incident without follow-up."
      },
      {
        "letter": "D",
        "text": "Disable the entire analytics rule set."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Lessons learned should produce concrete detection improvements. Adding or tuning a rule for the missed behaviour, then testing it, closes the gap.\n\n- **B** is wrong. Removing data reduces future visibility.\n- **C** is wrong. No follow-up means the gap remains.\n- **D** is wrong. Disabling all rules removes coverage.\n\n**Exam tip:** every detection gap found in a review should become a tracked improvement.",
    "source": "Investigate and respond to security incidents — Improve detections after an incident"
  },
  {
    "id": 200,
    "domain": "response",
    "topic": "Investigation graph scope",
    "stem": "Review the investigation graph diagram.\n\nAn analyst has confirmed that a user account is compromised and wants to find every device and mailbox the account touched.\n\nWhich approach uses the graph correctly?",
    "options": [
      {
        "letter": "A",
        "text": "Expand the Account entity and follow its relationships to devices, mailboxes, and alerts."
      },
      {
        "letter": "B",
        "text": "Delete the Account entity from the graph."
      },
      {
        "letter": "C",
        "text": "Open the device inventory and sort by operating system."
      },
      {
        "letter": "D",
        "text": "Run a vulnerability scan on every device."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The graph is designed for entity-centric pivoting. Expanding the Account entity reveals connected devices, mailboxes, alerts, and events, which scopes the compromise.\n\n- **B** is wrong. Deleting the entity removes the pivot point.\n- **C** is wrong. Device inventory is a posture list.\n- **D** is wrong. Vulnerability scanning does not reveal relationships.\n\n**Exam tip:** start from the confirmed entity and expand relationships to scope the incident.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use the investigation graph",
    "diagram": "investigation-graph"
  },
  {
    "id": 201,
    "domain": "xdr",
    "topic": "Case: ransomware stage identification",
    "stem": "You review the ransomware attack chain diagram for Contoso. The earliest confirmed event is an RDP logon from a workstation to a jump host that had never previously contacted that workstation, followed by remote service creation on three more servers.\n\nWhich numbered stage of the chain does this evidence represent?",
    "options": [
      {
        "letter": "A",
        "text": "Stage 5, lateral movement"
      },
      {
        "letter": "B",
        "text": "Stage 1, initial access"
      },
      {
        "letter": "C",
        "text": "Stage 3, persistence"
      },
      {
        "letter": "D",
        "text": "Stage 7, exfiltration"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Lateral movement is the attacker's progress from one compromised host to additional systems. An RDP logon to a host that has no prior relationship with the source workstation, followed by remote service creation, is textbook host-to-host movement. Placing the evidence at stage 5 tells the responder that the foothold already existed and that containment must cover every host the attacker reached, not just the encrypting server.\n\n- **B** is wrong. Initial access is the original entry into the environment, which happened earlier.\n- **C** is wrong. Persistence is about surviving restarts on a host, not moving between hosts.\n- **D** is wrong. Exfiltration is data leaving the environment, which appears later in the chain.\n\n**Exam tip:** when evidence shows a new host being contacted from an already-compromised machine, the stage is lateral movement.",
    "source": "Investigate and respond to security incidents — MITRE ATT&CK lateral movement",
    "diagram": "ransomware-chain",
    "case": "contoso-ransomware"
  },
  {
    "id": 202,
    "domain": "xdr",
    "topic": "Case: Kerberoasting detection sensor",
    "stem": "Contoso's analysts believe the attacker harvested service account credentials before encrypting data. The identity team wants detection coverage for Kerberos service-ticket abuse on the on-premises domain controllers.\n\nWhich configuration provides that coverage?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the Defender for Identity sensor to every domain controller, including the two that currently lack it."
      },
      {
        "letter": "B",
        "text": "Enable Safe Attachments dynamic delivery for all mailboxes."
      },
      {
        "letter": "C",
        "text": "Add the domain controllers to a Defender for Endpoint device group with full automation."
      },
      {
        "letter": "D",
        "text": "Create a Safe Links policy for the domain controllers."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Identity analyses domain controller authentication traffic and detects Kerberoasting, Pass-the-Hash, forged tickets, and suspicious reconnaissance. Two of Contoso's six domain controllers have no sensor, so their Kerberos traffic is invisible; completing sensor coverage closes that blind spot.\n\n- **B** is wrong. Safe Attachments detonates email attachments and has no visibility into Kerberos.\n- **C** is wrong. Device groups organise endpoint automation but do not read directory authentication traffic.\n- **D** is wrong. Safe Links rewrites and evaluates URLs.\n\n**Exam tip:** incomplete domain controller coverage is the most common reason identity detections are missing.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Deploy Defender for Identity",
    "case": "contoso-ransomware"
  },
  {
    "id": 203,
    "domain": "xdr",
    "topic": "Case: unified incident source",
    "stem": "Alerts arrive from Defender for Endpoint on the file server, Defender for Identity on a domain controller, and Defender for Office 365 on a phishing message delivered two days earlier. The analyst needs these treated as one attack.\n\nAccording to the Defender XDR architecture diagram, which component produces the combined incident?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Defender XDR"
      },
      {
        "letter": "B",
        "text": "Microsoft Sentinel"
      },
      {
        "letter": "C",
        "text": "The Log Analytics workspace"
      },
      {
        "letter": "D",
        "text": "Defender for Endpoint"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The diagram shows each Defender workload contributing detections to Microsoft Defender XDR, which correlates shared entities such as the user, device, and IP into a single incident. Because Contoso ingests those incidents into Sentinel rather than creating duplicates, the correlated case appears once.\n\n- **B** is wrong. Sentinel can store and query the alerts, but the initial cross-workload correlation is performed by Defender XDR.\n- **C** is wrong. The workspace stores log data; it does not correlate detections into an XDR incident.\n- **D** is wrong. Defender for Endpoint contributes endpoint signals only.\n\n**Exam tip:** in a hybrid XDR and Sentinel design, correlate in XDR first and ingest the incident.",
    "source": "Mitigate threats using Microsoft Defender XDR — Explore Microsoft Defender XDR",
    "diagram": "defender-xdr",
    "case": "contoso-ransomware"
  },
  {
    "id": 204,
    "domain": "xdr",
    "topic": "Case: block hash indicator",
    "stem": "The responders have the SHA-256 hash of the encrypting binary. Because production changes are frozen, they want a policy-level control that blocks the file everywhere without touching each server.\n\nWhich Defender for Endpoint capability should they use?",
    "options": [
      {
        "letter": "A",
        "text": "Create a custom file indicator for the hash with the block action."
      },
      {
        "letter": "B",
        "text": "Isolate each server manually one at a time."
      },
      {
        "letter": "C",
        "text": "Run a quick antivirus scan on the file server."
      },
      {
        "letter": "D",
        "text": "Add the hash to a Sentinel watchlist."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Endpoint supports custom indicators for file hashes, IP addresses, URLs, and certificates, with allow, alert, or block actions. A blocked hash is enforced across onboarded devices, which stops the known binary from executing while the change freeze remains intact.\n\n- **B** is wrong. Manual isolation is per-device and does not scale across 260 servers.\n- **C** is wrong. A scan detects files that are already present but does not prevent execution elsewhere.\n- **D** is wrong. A watchlist is reference data for queries and does not enforce blocking.\n\n**Exam tip:** known-bad hash that must be stopped everywhere is a custom indicator, not a query.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Create indicators for files",
    "case": "contoso-ransomware"
  },
  {
    "id": 205,
    "domain": "response",
    "topic": "Case: reinfection after recovery",
    "stem": "Contoso restores one file server from a backup taken before the incident. Ninety minutes later the server is encrypting files again.\n\nWhat did the recovery process fail to do?",
    "options": [
      {
        "letter": "A",
        "text": "Remove the attacker's access and close the entry point before returning the server to the network."
      },
      {
        "letter": "B",
        "text": "Restore from the most recent backup rather than an older one."
      },
      {
        "letter": "C",
        "text": "Patch the server before restoring the data."
      },
      {
        "letter": "D",
        "text": "Reimage the server with a different operating system."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A restored server inherits the same vulnerabilities, credentials, and network position it had before. If the attacker still holds valid credentials or an unpatched entry point, the clean data is re-encrypted almost immediately. Recovery must follow eradication: remove persistence and accounts, fix the entry point, then restore and monitor.\n\n- **B** is wrong. The age of the backup is not why the server was re-encrypted.\n- **C** is wrong. Patching alone does not remove stolen credentials or existing footholds elsewhere.\n- **D** is wrong. Changing the operating system does not address the attacker's access.\n\n**Exam tip:** reinfection after restore almost always means the entry point or credentials were never remediated.",
    "source": "Investigate and respond to security incidents — Recover from an incident",
    "case": "contoso-ransomware"
  },
  {
    "id": 206,
    "domain": "response",
    "topic": "Case: tamper protection",
    "stem": "Investigators learn that the attacker used a domain Group Policy object to disable real-time protection on the servers before deploying the ransomware.\n\nWhich Defender for Endpoint control would have blocked that attempt?",
    "options": [
      {
        "letter": "A",
        "text": "Tamper protection"
      },
      {
        "letter": "B",
        "text": "Attack surface reduction rules"
      },
      {
        "letter": "C",
        "text": "Device discovery"
      },
      {
        "letter": "D",
        "text": "Attack simulation training"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Tamper protection prevents local and policy-based changes that disable antivirus protection, real-time protection, cloud-delivered protection, and behaviour monitoring. With it enabled, the Group Policy change would have failed and the ransomware would have faced active protection.\n\n- **B** is wrong. ASR rules block risky behaviours such as Office child processes; they do not protect the antivirus configuration itself.\n- **C** is wrong. Device discovery finds unmanaged devices.\n- **D** is wrong. Attack simulation training measures user behaviour.\n\n**Exam tip:** security settings that attackers try to switch off are protected by tamper protection.",
    "source": "Mitigate threats using Microsoft Defender for Endpoint — Prevent security settings changes with tamper protection",
    "case": "contoso-ransomware"
  },
  {
    "id": 207,
    "domain": "response",
    "topic": "Case: ransomware family intelligence",
    "stem": "The board asks which ransomware family is responsible, what techniques the group is known for, and whether Contoso has exposure to those techniques.\n\nWhich Defender XDR capability answers all three questions?",
    "options": [
      {
        "letter": "A",
        "text": "Threat analytics"
      },
      {
        "letter": "B",
        "text": "Action center"
      },
      {
        "letter": "C",
        "text": "Device inventory"
      },
      {
        "letter": "D",
        "text": "Attack simulation training"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Threat analytics provides curated intelligence on tracked actors and campaigns, including the techniques they use, the exposure of the organisation to those techniques, and any related incidents. That makes it the right source for an executive briefing on the family and its known tradecraft.\n\n- **B** is wrong. Action center lists pending and completed remediation actions.\n- **C** is wrong. Device inventory shows device posture and coverage.\n- **D** is wrong. Attack simulation training runs phishing exercises.\n\n**Exam tip:** actor and campaign briefings come from Threat analytics, not from the incident queue.",
    "source": "Mitigate threats using Microsoft Defender XDR — Threat analytics",
    "case": "contoso-ransomware"
  },
  {
    "id": 208,
    "domain": "xdr",
    "topic": "Case: OAuth consent after spray",
    "stem": "Minutes after the successful sign-in, the compromised account consents to an application that requests read access to all mail. Fabrikam needs to see the app's permissions, its publisher, and which other users have consented.\n\nWhich capability should the analyst use?",
    "options": [
      {
        "letter": "A",
        "text": "App governance in Microsoft Defender for Cloud Apps"
      },
      {
        "letter": "B",
        "text": "Cloud Discovery reports"
      },
      {
        "letter": "C",
        "text": "Device inventory in Defender for Endpoint"
      },
      {
        "letter": "D",
        "text": "Safe Attachments detonation reports"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App governance surfaces OAuth applications, their requested and granted permissions, publisher information, consent grants, and usage. That lets the analyst determine whether the app is overprivileged, which users granted consent, and whether its access should be revoked.\n\n- **B** is wrong. Cloud Discovery identifies SaaS usage from network logs, not OAuth permissions.\n- **C** is wrong. Device inventory lists endpoints.\n- **D** is wrong. Safe Attachments analyses email attachments.\n\n**Exam tip:** questions about application permissions and consent grants point to app governance.",
    "source": "Mitigate threats using Microsoft Defender for Cloud Apps — App governance",
    "case": "fabrikam-identity"
  },
  {
    "id": 209,
    "domain": "xdr",
    "topic": "Case: lateral movement paths",
    "stem": "The compromised service account has broad rights on several file servers. The identity team wants to understand how an attacker holding that account could reach the tier-0 finance servers, so the team can break the path.\n\nAccording to the identity investigation approach in the diagram, which Defender for Identity capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "Lateral movement paths for the sensitive account"
      },
      {
        "letter": "B",
        "text": "Safe Links click tracking"
      },
      {
        "letter": "C",
        "text": "Device timeline on the file servers"
      },
      {
        "letter": "D",
        "text": "Safe Attachments dynamic delivery"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Defender for Identity builds lateral movement paths that show how a compromised identity could reach sensitive accounts and systems through existing logon relationships. Reviewing the path lets the team remove the specific group memberships or sessions that create the route to tier-0 assets.\n\n- **B** is wrong. Safe Links tracks URL clicks in email and Teams.\n- **C** is wrong. Device timeline shows historical endpoint events on one device.\n- **D** is wrong. Safe Attachments processes email attachments.\n\n**Exam tip:** breaking an attack path starts with knowing the path, which is what lateral movement paths provide.",
    "source": "Mitigate threats using Microsoft Defender for Identity — Investigate lateral movement paths",
    "diagram": "identity-attack",
    "case": "fabrikam-identity"
  },
  {
    "id": 210,
    "domain": "sentinel",
    "topic": "Case: required log sources for BEC",
    "stem": "Fabrikam wants a single rule that detects the password spray and then the inbox rule created by the attacker, so the two events appear in one incident.\n\nWhich two Sentinel data sources must be connected for that rule? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID sign-in logs, giving the SigninLogs table"
      },
      {
        "letter": "B",
        "text": "Microsoft 365 audit logs, giving the OfficeActivity table"
      },
      {
        "letter": "C",
        "text": "Windows Security events from the domain controllers"
      },
      {
        "letter": "D",
        "text": "Common Event Format logs from the VPN appliances"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The spray appears in SigninLogs as repeated failures from a small set of IPs, and mailbox rule creation appears in OfficeActivity as an Exchange workload operation. A rule that joins on the account can correlate the two stages into one incident.\n\n- **C** is wrong. Windows Security events show on-premises logons, not cloud sign-ins or mailbox rules.\n- **D** is wrong. CEF logs describe network sessions and do not contain mailbox operations.\n\n**Exam tip:** match the detection to the workload that records the activity: Entra ID for authentication, Microsoft 365 audit for mailbox actions.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Entra ID data",
    "case": "fabrikam-identity"
  },
  {
    "id": 211,
    "domain": "sentinel",
    "topic": "Case: ASIM for VPN logs",
    "stem": "Fabrikam's two VPN vendors write authentication records with different column names. The SOC wants one query that returns successful and failed VPN authentication across both.\n\nWhich capability should be used?",
    "options": [
      {
        "letter": "A",
        "text": "ASIM authentication parsers that map both sources to one schema"
      },
      {
        "letter": "B",
        "text": "Two separate analytics rules, one per vendor"
      },
      {
        "letter": "C",
        "text": "A watchlist containing the vendor names"
      },
      {
        "letter": "D",
        "text": "A workbook with two tabs"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "ASIM provides normalized schemas and per-source parsers. A query written against the authentication schema works across both VPN vendors without field-name differences, and the same query can then be used in analytics rules and workbooks.\n\n- **B** is wrong. Duplicating rules doubles maintenance and splits the incident view.\n- **C** is wrong. A watchlist stores reference data, not parsing logic.\n- **D** is wrong. A workbook displays results but does not normalize sources.\n\n**Exam tip:** heterogeneous sources with one query means ASIM parsers.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Use ASIM parsers",
    "case": "fabrikam-identity"
  },
  {
    "id": 212,
    "domain": "sentinel",
    "topic": "Case: board reporting workbook",
    "stem": "Leadership wants a weekly view of spray attempts, successful sign-ins, and the percentage of successful attempts, with a date selector so they can review any week.\n\nWhich two components should the analyst build? (Select two.)",
    "options": [
      {
        "letter": "A",
        "text": "A KQL query that aggregates failures and successes per day"
      },
      {
        "letter": "B",
        "text": "A workbook with a time-range parameter and a chart visualization"
      },
      {
        "letter": "C",
        "text": "An automation rule that closes incidents weekly"
      },
      {
        "letter": "D",
        "text": "A watchlist containing the board members"
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The query produces the daily aggregates, and the workbook renders them as a chart with a parameter that lets a viewer change the reporting window. Together they give leadership a repeatable, self-service report.\n\n- **C** is wrong. Automation rules act on incidents and do not produce reports.\n- **D** is wrong. A watchlist is reference data for queries.\n\n**Exam tip:** reporting = query plus workbook; automation rules are for response, not presentation.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Workbooks and visualisation",
    "case": "fabrikam-identity"
  },
  {
    "id": 213,
    "domain": "sentinel",
    "topic": "Case: BEC automation rule actions",
    "stem": "Fabrikam has built a playbook that disables the account and forces re-registration of authentication methods. The SOC wants every high-severity business email compromise incident to trigger it automatically, be tagged, and be assigned to the identity team.\n\nWhich Sentinel feature should the SOC configure?",
    "options": [
      {
        "letter": "A",
        "text": "An automation rule with conditions on severity and title, actions to tag and assign, and a run-playbook action"
      },
      {
        "letter": "B",
        "text": "A scheduled analytics rule with a longer lookback"
      },
      {
        "letter": "C",
        "text": "A Fusion rule with entity mapping"
      },
      {
        "letter": "D",
        "text": "A watchlist containing the identity team"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Automation rules evaluate incident conditions and apply actions: assign an owner, add tags, set status or severity, and run a playbook. That is exactly the no-code triage layer Fabrikam needs before the playbook performs the account actions.\n\n- **B** is wrong. Lookback controls how much history the query scans.\n- **C** is wrong. Fusion correlates multistage signals; it does not run response workflows.\n- **D** is wrong. A watchlist stores reference data.\n\n**Exam tip:** automation rule decides who and what to run; the playbook performs the actions.",
    "source": "Create detections and perform investigations using Microsoft Sentinel — Automate incident handling with automation rules",
    "case": "fabrikam-identity"
  },
  {
    "id": 214,
    "domain": "kql",
    "topic": "Case: inbox rule KQL query",
    "stem": "The analyst needs every mailbox rule created by the compromised account during the last seven days.\n\nWhich query returns those records?",
    "options": [
      {
        "letter": "A",
        "text": "`OfficeActivity | where TimeGenerated > ago(7d) and Operation == \"New-InboxRule\" and UserId == \"compromised@fabrikam.com\"`"
      },
      {
        "letter": "B",
        "text": "`SigninLogs | where TimeGenerated > ago(7d) and Operation == \"New-InboxRule\"`"
      },
      {
        "letter": "C",
        "text": "`SecurityEvent | where TimeGenerated > ago(7d) and EventID == 4624`"
      },
      {
        "letter": "D",
        "text": "`DeviceProcessEvents | where TimeGenerated > ago(7d) and FileName == \"New-InboxRule\"`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Mailbox rule creation is an Exchange workload operation recorded in OfficeActivity with the operation name New-InboxRule and the acting user in UserId. Filtering on the time window, the operation, and the account returns exactly the rule-creation records needed.\n\n- **B** is wrong. SigninLogs records authentication and has no Operation column for mailbox rules.\n- **C** is wrong. SecurityEvent with EventID 4624 records Windows logons.\n- **D** is wrong. DeviceProcessEvents records endpoint processes.\n\n**Exam tip:** mailbox operations are OfficeActivity records filtered by Operation, not sign-in or endpoint events.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft 365 audit logs",
    "case": "fabrikam-identity"
  },
  {
    "id": 215,
    "domain": "response",
    "topic": "Case: insider evidence preservation",
    "stem": "Human Resources wants the investigation to proceed without alerting the employee, because a disciplinary interview is scheduled in six days.\n\nWhat should the security team do first?",
    "options": [
      {
        "letter": "A",
        "text": "Preserve audit and endpoint evidence, restrict access quietly through HR-approved channels, and avoid actions the employee would detect."
      },
      {
        "letter": "B",
        "text": "Disable the account immediately and confiscate the laptop in front of the team."
      },
      {
        "letter": "C",
        "text": "Delete the personal cloud account and close the case."
      },
      {
        "letter": "D",
        "text": "Announce a company-wide data-handling reminder."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Insider investigations depend on evidence that is complete and lawfully gathered. Preserving audit and endpoint records before access changes, and applying any restriction only through HR and legal, protects the case and avoids tipping off the employee while the disciplinary process runs.\n\n- **B** is wrong. Abrupt visible action can destroy the evidence window and prejudice the employment process.\n- **C** is wrong. Deleting evidence and closing the case abandons the investigation.\n- **D** is wrong. A broad reminder does not preserve evidence and may warn the employee.\n\n**Exam tip:** in insider cases, preserve first and act through HR and legal; visible disruption destroys evidence.",
    "source": "Investigate and respond to security incidents — Investigate insider threats",
    "case": "tailwind-insider"
  },
  {
    "id": 216,
    "domain": "response",
    "topic": "Case: exfiltration evidence source",
    "stem": "The team must prove whether rate-card documents reached the personal cloud storage account rather than only being copied locally.\n\nWhich evidence combination is most useful?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft 365 audit records for the uploads plus Defender for Cloud Apps discovery and alert data for the personal cloud service"
      },
      {
        "letter": "B",
        "text": "Printer spooler logs for the pricing floor"
      },
      {
        "letter": "C",
        "text": "Defender for Identity sensor logs from the domain controllers"
      },
      {
        "letter": "D",
        "text": "Windows Update history on the analyst's laptop"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft 365 audit records show file reads and uploads for the sanctioned workloads, while Defender for Cloud Apps correlates unsanctioned cloud usage and can raise alerts for uploads to personal storage. Together they establish both the source documents and the destination service.\n\n- **B** is wrong. Printer logs only show print jobs.\n- **C** is wrong. Defender for Identity covers directory authentication, not file transfers.\n- **D** is wrong. Update history shows patch activity.\n\n**Exam tip:** proving exfiltration needs both the source-side audit trail and the destination-side cloud app evidence.",
    "source": "Investigate and respond to security incidents — Collect user activity evidence",
    "case": "tailwind-insider"
  },
  {
    "id": 217,
    "domain": "response",
    "topic": "Case: mailbox hold after disable",
    "stem": "The employee has left and HR has approved account closure. Legal requires that all mailbox content remain available for a tribunal that may start in eight months.\n\nWhich approach meets both requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Block sign-in, remove active sessions, and place the mailbox on hold for litigation rather than deleting the account and its data."
      },
      {
        "letter": "B",
        "text": "Delete the account and the mailbox to prevent further access."
      },
      {
        "letter": "C",
        "text": "Keep the account enabled with the same password so the mailbox stays available."
      },
      {
        "letter": "D",
        "text": "Forward the mailbox to a colleague and remove the licence."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Blocking sign-in and revoking sessions removes access, while a litigation hold preserves mailbox content independently of the employee's ability to sign in. Deleting the account without a hold risks losing the evidence Legal needs.\n\n- **B** is wrong. Deletion destroys the evidence required for the tribunal.\n- **C** is wrong. Leaving the account enabled with the original password leaves an active credential.\n- **D** is wrong. Forwarding copies new mail but does not guarantee preservation of existing content or legal defensibility.\n\n**Exam tip:** separate access control from evidence retention: block sign-in, then hold the data.",
    "source": "Investigate and respond to security incidents — Preserve evidence",
    "case": "tailwind-insider"
  },
  {
    "id": 218,
    "domain": "sentinel",
    "topic": "Case: Cloud Apps DLP connector",
    "stem": "Tailwind's data loss prevention alerts for uploads to unsanctioned cloud storage currently appear only in the Defender portal, and the SOC wants them in Sentinel next to the audit records.\n\nWhich connector should the team use?",
    "options": [
      {
        "letter": "A",
        "text": "The Microsoft Defender for Cloud Apps connector"
      },
      {
        "letter": "B",
        "text": "The Azure Activity connector"
      },
      {
        "letter": "C",
        "text": "The Common Event Format connector"
      },
      {
        "letter": "D",
        "text": "The Threat intelligence TAXII connector"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The Defender for Cloud Apps connector streams cloud app alerts, including those raised for unsanctioned uploads and policy matches, into the Sentinel workspace. That places them alongside OfficeActivity records so a single rule can correlate the file access with the upload.\n\n- **B** is wrong. Azure Activity records control-plane operations on Azure resources.\n- **C** is wrong. CEF ingests appliance logs from firewalls and proxies.\n- **D** is wrong. TAXII ingests threat indicators.\n\n**Exam tip:** Defender for Cloud Apps alerts reach Sentinel through the Cloud Apps connector, not through Azure Activity.",
    "source": "Connect logs to Microsoft Sentinel — Connect Microsoft Defender for Cloud Apps",
    "case": "tailwind-insider"
  },
  {
    "id": 219,
    "domain": "sentinel",
    "topic": "Case: eighteen-month search job",
    "stem": "The tribunal may cover eighteen months, but OfficeActivity is only in analytics retention for the last 90 days. The investigator needs to find every access to a specific document set across the full period without restoring everything.\n\nWhich feature should be used?",
    "options": [
      {
        "letter": "A",
        "text": "A search job over the long-term retained data"
      },
      {
        "letter": "B",
        "text": "A livestream session"
      },
      {
        "letter": "C",
        "text": "An NRT analytics rule"
      },
      {
        "letter": "D",
        "text": "A watchlist"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "A search job runs asynchronously against long-term data and writes matches to a results table that can be queried afterwards. That covers the full eighteen months at low cost, unlike restoring all of the data to the analytics tier.\n\n- **B** is wrong. Livestream watches new events as they arrive.\n- **C** is wrong. NRT rules detect current activity with low latency.\n- **D** is wrong. A watchlist is reference data.\n\n**Exam tip:** broad historical sweeps use a search job; deep analysis of a small window uses restore.",
    "source": "Perform threat hunting in Microsoft Sentinel — Use search jobs",
    "case": "tailwind-insider"
  },
  {
    "id": 220,
    "domain": "kql",
    "topic": "Case: hunting findings to incident",
    "stem": "A hunter runs a query that returns sixteen nights of anomalous downloads by the same account.\n\nAccording to the hunting workflow diagram, what should the hunter do with these results?",
    "options": [
      {
        "letter": "A",
        "text": "Bookmark the events and create or update an incident so the evidence is tracked and investigable."
      },
      {
        "letter": "B",
        "text": "Delete the query because hunting does not produce evidence."
      },
      {
        "letter": "C",
        "text": "Convert the results into a watchlist and close the case."
      },
      {
        "letter": "D",
        "text": "Run the same query with no time filter to collect more data."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The workflow moves from hypothesis to query to findings. Findings are captured as bookmarks, which preserve the query and the exact events so they can be tagged, investigated in the graph, and attached to an incident as evidence.\n\n- **B** is wrong. Hunting findings are the primary evidence source for many investigations.\n- **C** is wrong. A watchlist stores reference data, not event evidence.\n- **D** is wrong. Removing the time filter increases cost without preserving the specific events.\n\n**Exam tip:** a hunting result that matters becomes a bookmark, then incident evidence.",
    "source": "Perform threat hunting in Microsoft Sentinel — Hunt by using bookmarks",
    "diagram": "hunting-workflow",
    "case": "tailwind-insider"
  },
  {
    "id": 221,
    "domain": "kql",
    "topic": "Case: mass download threshold query",
    "stem": "The analyst wants one row per user per hour for any hour in the last 30 days in which that user downloaded more than 500 files from SharePoint or OneDrive.\n\nWhich query shape produces that result?",
    "options": [
      {
        "letter": "A",
        "text": "`OfficeActivity | where TimeGenerated > ago(30d) and Operation in (\"FileDownloaded\", \"FileAccessed\") | summarize Files = count() by UserId, bin(TimeGenerated, 1h) | where Files > 500`"
      },
      {
        "letter": "B",
        "text": "`OfficeActivity | summarize count() by UserId`"
      },
      {
        "letter": "C",
        "text": "`OfficeActivity | where Operation == \"FileDownloaded\" | project UserId`"
      },
      {
        "letter": "D",
        "text": "`OfficeActivity | top 500 by TimeGenerated`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The query filters to the relevant time window and file-access operations, groups the rows into hourly buckets per user with `bin`, counts the files, and then filters the aggregated groups to those above the threshold. That produces exactly one row per user per qualifying hour.\n\n- **B** is wrong. It produces a single total per user with no hourly breakdown or threshold.\n- **C** is wrong. It returns individual rows with no counts.\n- **D** is wrong. It returns the 500 most recent events regardless of user or volume.\n\n**Exam tip:** threshold-on-a-group questions always place `where` after `summarize`.",
    "source": "Create queries for Microsoft Sentinel using Kusto Query Language (KQL) — Summarize operator",
    "case": "tailwind-insider"
  }
];
