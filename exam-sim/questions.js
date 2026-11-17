// SC-300 Exam Simulator - question bank
// Generated from the practice exam and answer key. Do not edit by hand.
window.CASE_STUDIES = [
  {
    "id": "tailwind-traders",
    "title": "Case Study 1 - Tailwind Traders acquires Fabrikam",
    "html": "<p>Tailwind Traders has completed its acquisition of Fabrikam. Both companies keep their own Microsoft Entra tenant and their own on-premises Active Directory forest. No forest trust and no directory synchronization exists between them.</p><h4>Tailwind Traders (resource tenant)</h4><ul><li>Tenant tailwindtraders.com. Microsoft Entra ID P2 and Microsoft 365 E5.</li><li>4,200 employees. One on-premises forest, tailwind.local, synchronized by Microsoft Entra Connect with password hash synchronization and seamless single sign-on.</li><li>Twelve line-of-business applications run on domain-joined Windows servers and use integrated Windows authentication.</li><li>Conditional Access, PIM, and access reviews are already in use.</li></ul><h4>Fabrikam (acquired company)</h4><ul><li>Tenant fabrikam.com. Microsoft Entra ID P1 and Microsoft 365 E3.</li><li>900 employees and cloud-only: no on-premises directory and no Entra Connect.</li><li>Per-user MFA is enabled. There are no Conditional Access policies and no PIM.</li></ul><h4>Business requirements</h4><ul><li>Fabrikam employees must use their existing fabrikam.com credentials for every Tailwind resource. Tailwind must not create or maintain a second credential for them, and Fabrikam IT must keep managing its own users and MFA.</li><li>About 200 project members from both companies must collaborate in Teams shared channels.</li><li>The Fabrikam parts portal (parts.fabrikam.local) must be published to both companies' users through Application Proxy with Kerberos single sign-on and no password vaulting. Connector servers can be installed in the Fabrikam datacenter.</li><li>The Tailwind custom application TradeDesk must receive Approver and Reader role assignments. Group claims must not be used, because the token is already close to its size limit.</li><li>An external audit firm needs access to one SharePoint site and one security group for exactly 90 days, approved by the Tailwind audit manager, with quarterly reviews.</li></ul>"
  },
  {
    "id": "woodgrove-financial",
    "title": "Case Study 2 - Woodgrove Financial",
    "html": "<p>Woodgrove Financial is a regulated bank with 12,000 employees. It has used Microsoft Entra ID for four years and is planning a security and governance refresh.</p><h4>Environment</h4><ul><li>Tenant woodgrove.com. Microsoft Entra ID P2, Microsoft 365 E5, and Microsoft Sentinel.</li><li>Hybrid identity from two on-premises forests, corp.woodgrove.com and hb.woodgrove.com (a former acquisition). Microsoft Entra Connect synchronizes the corp forest with password hash synchronization.</li><li>400 branch offices. Each branch has a customer premises equipment (CPE) router with an IPsec connection to Microsoft. No Global Secure Access client is installed on branch devices or servers.</li><li>The corebank application runs on-premises and must not be exposed directly to the internet.</li><li>Three helpdesks (US, EU, APAC) reset passwords and manage users through administrative units.</li><li>Fourteen privileged roles are assigned as permanent active assignments to 22 administrators.</li><li>4,000 guest accounts from partner organizations. Most partners have no sponsor recorded.</li><li>The reporting API runs on Azure virtual machines and database administrators need RDP access with Entra credentials.</li></ul><h4>Business requirements</h4><ul><li>Regulatory rule: password hashes must never leave the on-premises network, and on-premises Active Directory remains authoritative for passwords.</li><li>Branch users must reach corebank without a client installed, their traffic must be inspected at Microsoft's security edge, and Conditional Access must deny access that does not come from the compliant network.</li><li>Administrators must activate privileged roles just in time for a maximum of four hours, with approval and phishing-resistant MFA.</li><li>Marketing wants a third-party SaaS application that requests Mail.Read and Files.Read.All. Users must not be able to consent to unverified apps themselves, but they must have a way to request approval.</li><li>The nightly deployment pipeline in GitHub Actions must call Microsoft Graph without storing a secret in the repository.</li><li>Guest access must be reviewed quarterly and removed automatically when reviewers deny access or do not respond.</li><li>Sign-in and audit logs must be retained for seven years for the regulator and remain searchable in Microsoft Sentinel.</li></ul>"
  }
];

window.QUESTIONS = [
  {
    "id": 1,
    "domain": "identity",
    "topic": "Administrative units",
    "stem": "Contoso has a helpdesk team in Europe and another in Asia. Each team must be able to reset passwords and manage users only for the users in its own region. You must not grant either team rights over users in the other region.\n\nWhat should you create and configure?",
    "options": [
      {
        "letter": "A",
        "text": "An administrative unit for each region, and assign the Helpdesk Administrator role scoped to each unit."
      },
      {
        "letter": "B",
        "text": "A security group for each region, and assign the Helpdesk Administrator role to each group."
      },
      {
        "letter": "C",
        "text": "A custom role for each region with an assignable scope of the region's users."
      },
      {
        "letter": "D",
        "text": "An organizational unit in Active Directory for each region, and delegate control."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Administrative units are Entra ID containers used to scope a role's permissions to a defined portion of the organization — the cloud equivalent of on-premises organizational units. An administrative unit can contain **only users, groups, and devices**. You assign a role with the administrative unit as the scope, so the holder can act only on objects in that unit.\n\n- **B** is wrong. Assigning a role to a security group grants the role to its members at **tenant** scope, not regional scope. Group-based role assignment is about who holds the role, not what it can touch.\n- **C** is wrong. Custom roles in Entra ID can be assigned only at **directory-level scope or app registration resource scope** — not at an arbitrary subset of users.\n- **D** is wrong. On-premises OUs govern Active Directory, not Microsoft Entra ID. Delegating an OU does not restrict Entra administrative actions.\n\nRoles explicitly documented as usable at administrative-unit scope are the **License, Password, Authentication, Helpdesk, and User Administrator** roles.",
    "source": "LP3 Module 1.5 (configure delegation by using administrative units)."
  },
  {
    "id": 2,
    "domain": "identity",
    "topic": "Custom roles",
    "stem": "You need to let a team manage the credentials and basic properties of one specific app registration, and nothing else. You plan to create a custom role containing `microsoft.directory/applications/credentials/update` and `microsoft.directory/applications/basic/update`.\n\nWhere can this custom role be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "At directory scope only."
      },
      {
        "letter": "B",
        "text": "At directory scope or at the scope of a single app registration."
      },
      {
        "letter": "C",
        "text": "At administrative unit scope only."
      },
      {
        "letter": "D",
        "text": "At management group, subscription, resource group, or resource scope."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Custom roles in Microsoft Entra ID can be assigned at **directory-level scope or at an app registration resource scope**. The app-registration scope is what lets you delegate management of a single application without granting directory-wide rights.\n\n- **A** is incomplete. Directory scope is allowed, but it is not the only option — that is the whole point of app registration scope.\n- **C** is wrong. Administrative units scope built-in roles over users, groups, and devices; they are not a custom-role assignment scope for app registrations.\n- **D** describes **Azure RBAC** scopes (management group, subscription, resource group, resource). Those apply to Azure resources, not to Entra directory roles.\n\nTwo practical caveats worth remembering: custom roles work only in the current app registration experience (not the legacy one), and they grant no portal access at all when **Restrict access to Microsoft Entra ID administration** is set to **Yes**. Assignments also appear only under **All applications**, not **Owned applications**.",
    "source": "LP3 Module 1.3 / 1.6; LP1 Module 1.5."
  },
  {
    "id": 3,
    "domain": "identity",
    "topic": "Domain limits and primary domain",
    "stem": "Contoso has a tenant with the initial domain `contoso.onmicrosoft.com` and a verified custom domain `contoso.com`. The identity team wants `contoso.com` to be the default suffix for new users.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The primary domain must be a verified custom domain that is not federated."
      },
      {
        "letter": "B",
        "text": "Changing the primary domain rewrites the user name of every existing user to the new suffix."
      },
      {
        "letter": "C",
        "text": "An organization can have up to 900 managed domain names, or up to 450 if all domains are federated with on-premises AD."
      },
      {
        "letter": "D",
        "text": "The initial `onmicrosoft.com` domain can be deleted once a custom domain is verified."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "- The primary domain must be a **verified custom domain that is not federated**.\n- The documented limits are **900 managed** domain names, dropping to **450** when all configured domains are federated with on-premises Active Directory.\n\n- **B** is wrong. Changing the primary domain sets the default for **new** users; it **does not change existing users' user names**. Existing UPNs must be updated separately.\n- **D** is wrong. The initial `*.onmicrosoft.com` domain cannot be removed. It is the structural fallback for the tenant — even ForceDelete renames affected objects **into** that initial domain rather than eliminating it.\n\nRelated: changing the primary domain does not require re-verification, but a subdomain such as `europe.contoso.com` is automatically verified once the root domain is verified, and only a **Global Administrator** can manage domains.",
    "source": "LP3 Module 1.7 (configure and manage custom domains)."
  },
  {
    "id": 4,
    "domain": "identity",
    "topic": "ForceDelete",
    "stem": "Contoso must urgently remove the domain `fabrikam.com` from its tenant. The domain has roughly 400 users, 20 groups, and one multi-tenant application with an app ID URI in that domain. The domain was not purchased through Microsoft 365.\n\nWhat will happen when an administrator uses ForceDelete?",
    "options": [
      {
        "letter": "A",
        "text": "The operation succeeds synchronously and removes all references."
      },
      {
        "letter": "B",
        "text": "The operation fails because a multi-tenant application references the domain."
      },
      {
        "letter": "C",
        "text": "The operation runs asynchronously, renames users, groups, and applications to the initial domain, and fails because the application is multi-tenant."
      },
      {
        "letter": "D",
        "text": "The operation fails immediately because there are more than 1,000 references."
      }
    ],
    "answers": [
      "C"
    ],
    "explanation": "ForceDelete is **asynchronous**. It requires **fewer than 1,000 references** to the domain — 421 here, so that threshold is met. It renames affected objects back to the initial default domain: users' **UPN, EmailAddress, and ProxyAddress**; groups' **EmailAddress**; and applications' **identifierUris**. It **fails when an application that must be renamed is multi-tenant**, which is the case here.\n\n- **A** is wrong on both counts: the operation is asynchronous, not synchronous, and it cannot complete with a multi-tenant app referencing the domain.\n- **B** is wrong on timing. It does not fail immediately for that reason alone; the multi-tenancy problem surfaces during the asynchronous rename.\n- **D** is wrong. 400 users plus 20 groups plus one app is well under the 1,000-reference cap.\n\nTwo more ForceDelete limits: it fails if the domain was **purchased through Microsoft 365 domain subscription services**, and it fails for a **partner administering on behalf of another customer**. Any references provisioned by Exchange — including mail-enabled security groups and distribution lists — must first be fixed in the **Exchange Admin Center**.",
    "source": "LP3 Module 1.7."
  },
  {
    "id": 5,
    "domain": "identity",
    "topic": "Group-based licensing",
    "stem": "Contoso assigns Microsoft 365 E3 to the **All Staff** group and Microsoft 365 E5 to the **Engineering** group. Priya is a member of both groups and also has a direct E3 assignment. A user joins Engineering; the administrator sets no usage location on the user's profile.\n\nWhat is the result?",
    "options": [
      {
        "letter": "A",
        "text": "Priya receives two E3 licenses and one E5 license; users without a usage location cause the group assignment to fail."
      },
      {
        "letter": "B",
        "text": "Priya receives the union of the product and service licenses, the same license from multiple sources is consumed only once, and group-licensed users without a usage location inherit the directory's location."
      },
      {
        "letter": "C",
        "text": "Priya receives only the highest-tier license; users without a usage location are skipped until one is set."
      },
      {
        "letter": "D",
        "text": "Priority is given to the direct assignment, and group assignments are ignored for that user."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Group-based licensing evaluates the **union** of product and service licenses a user receives from all groups plus direct assignments. The **same license obtained from multiple sources is consumed only once**, so Priya does not consume two E3 seats. For usage location: users who receive a license through a group and have no usage location on their profile **inherit the directory's location**.\n\n- **A** is wrong. Duplicate consumption does not occur, and missing usage location does not fail the group assignment; the directory location is inherited.\n- **C** is wrong. The model is additive union, not highest-tier-wins. Also, separately disabling individual service plans (for example, turning off Viva Engage for a subset) is how you trim a product, not by dropping licenses.\n- **D** is wrong. Direct and group assignments combine rather than one taking priority.\n\nPractical details: license changes are typically effective **within minutes** of a membership change; configuration is done in the **Microsoft 365 admin center**; failure modes are insufficient available licenses and conflicting service plans assigned simultaneously. Always set usage location at user creation.",
    "source": "LP3 Module 2.8 / 2.9."
  },
  {
    "id": 6,
    "domain": "identity",
    "topic": "Dynamic groups",
    "stem": "You need group membership to update automatically from user attributes. Some of your groups must also contain devices whose operating system or ownership attributes determine membership.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Dynamic User membership and Dynamic Device membership are both available for security groups."
      },
      {
        "letter": "B",
        "text": "Microsoft 365 groups support dynamic users but not dynamic devices."
      },
      {
        "letter": "C",
        "text": "Dynamic membership requires Microsoft Entra ID Governance licensing."
      },
      {
        "letter": "D",
        "text": "Dynamic rules are evaluated only on a fixed 24-hour schedule."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Membership types are **Assigned**, **Dynamic User**, and **Dynamic Device**. **Dynamic Device applies to security groups only**, and **Microsoft 365 groups support dynamic users but not dynamic devices**. That pairing is the contrast the exam tests.\n\n- **C** is wrong. Dynamic membership requires **Microsoft Entra ID P1** — not Governance — with Intune for Education covering device-based rules. Dynamic groups do not need the Governance or P2 tier.\n- **D** is wrong. Evaluation is not a fixed 24-hour job: when a member's attributes change, **all dynamic membership rules in the tenant are re-evaluated**.\n\nExample rule: add all users whose **Department** equals **Marketing**.",
    "source": "LP3 Module 2.5; Module 3.9."
  },
  {
    "id": 7,
    "domain": "identity",
    "topic": "Device join types",
    "stem": "Contoso is choosing a device identity model for a group of field sales representatives who use their own laptops, including macOS and Linux devices. The devices must not require the user to sign in to Windows with a work account, but the devices must receive Conditional Access based on compliance.\n\nWhich device state should be used, and what is true of it?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra registered — the user signs in with local credentials and a work account is attached; the device can be managed by MDM or MAM and receive Conditional Access through Intune compliance or app protection policy."
      },
      {
        "letter": "B",
        "text": "Microsoft Entra joined — requires an organizational account to sign in and supports macOS 13+ only."
      },
      {
        "letter": "C",
        "text": "Hybrid Microsoft Entra joined — supports Windows Server 2016, 2019, and 2022 as well as Linux."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra registered — requires the device to be domain-joined to Active Directory."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "**Microsoft Entra registered** is the BYOD model: registration does **not** require the organizational account to sign in to the device. The user signs in with a local account (for example a Microsoft account) with an Entra account attached, registration typically happens on first access to a work app or manually in Settings. Ownership can be **user or organization**. Supported platforms include Windows 10+, **macOS 10.15+**, **iOS 15+**, Android, and **Linux (Ubuntu 20.04/22.04/24.04 LTS, RHEL 8/9 LTS)**. Devices receive Conditional Access when enrolled in Intune, or through app protection policy.\n\n- **B** is wrong. Entra joined **requires** an organizational account to sign in — the opposite of the requirement — and its macOS support is 13+ (preview) while registered goes back to 10.15+.\n- **C** is wrong. Hybrid join supports Windows Server 2016/2019/2022 but not Linux, and it requires on-premises AD domain join, which the field users' own laptops do not have.\n- **D** is wrong. Registration is not a domain-join model; hybrid join is the AD-connected option.\n\nQuick contrast to hold: **registered** = local sign-in, attached work account, BYOD; **joined** = cloud-only org-owned, organizational account required, SSO to cloud and on-prem; **hybrid joined** = AD plus Entra, Group Policy and existing imaging continue to work.",
    "source": "LP3 Module 2.7 (configure and manage device registration)."
  },
  {
    "id": 8,
    "domain": "identity",
    "topic": "Custom security attributes",
    "stem": "Contoso wants to store a \"clearance level\" value on users and on enterprise applications, and later use it for fine-grained access to Azure Storage blobs.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Custom security attributes support Boolean, integer, and string data types, single or multiple values."
      },
      {
        "letter": "B",
        "text": "Custom security attributes are emitted as claims in SAML and JWT tokens by default."
      },
      {
        "letter": "C",
        "text": "Custom security attributes cannot be used to authorize access to Azure resources."
      },
      {
        "letter": "D",
        "text": "Custom security attributes are available tenant-wide and can be assigned to directory-synchronized users."
      }
    ],
    "answers": [
      "A",
      "D"
    ],
    "explanation": "Custom security attributes are business-specific key-value pairs defined and assigned to Entra objects. Data types are **Boolean, integer, and string**, **single or multiple values**, **free-form or predefined**, with an optional description, and they are **available tenant-wide**. They can be assigned to **users** and **enterprise applications (service principals)**, and to **directory-synced users from on-premises AD**.\n\n- **B** is wrong, and it is an explicit \"Note\" in the course: custom security attributes are **not supported** in **SAML token claims**, **JWT claims**, or **Microsoft Entra Domain Services**.\n- **C** is wrong. Fine-grained access control to Azure resources — for example Azure Storage blobs — is one of the documented use cases.\n\nTypical uses: labeling all employees with an hourly salary value that only administrators can see, and categorizing thousands of applications for a filterable inventory.",
    "source": "LP3 Module 2.11."
  },
  {
    "id": 9,
    "domain": "identity",
    "topic": "Guest invitation defaults",
    "stem": "A newly created tenant has never had its external collaboration settings changed. A regular member user with no administrative role wants to invite a partner to a Microsoft Teams channel.\n\nWhat is the default behavior?",
    "options": [
      {
        "letter": "A",
        "text": "Only administrators and users in the Guest Inviter role can invite guests."
      },
      {
        "letter": "B",
        "text": "All users, including guests, can invite guest users."
      },
      {
        "letter": "C",
        "text": "Invitations must be approved by an administrator and expire after 30 days if unredeemed."
      },
      {
        "letter": "D",
        "text": "Guest invitations are disabled until external collaboration is enabled at the tenant level."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "The default invitation policy is **\"All users, including guests, can invite guest users\"**, even without an administrative role. That is the least restrictive of the four options: turn off invitations; only admins and Guest Inviter role; admins, Guest Inviter role, and members; all users including guests.\n\n- **A** is a real policy option, but it is not the default.\n- **C** is wrong on both halves. There is no approval step in the default policy, and an invitation **does not expire** — the text states plainly that \"an invitation of a user does not expire.\" The guest must redeem it, but it does not time out.\n- **D** is wrong. External collaboration is on by default; you restrict it rather than enable it.\n\nInvitations can target the directory, a group, or an application.",
    "source": "LP3 Module 3.3 / 3.5."
  },
  {
    "id": 10,
    "domain": "identity",
    "topic": "Guest directory permissions",
    "stem": "You are reviewing what a newly invited guest can do in the directory by default, before any restriction is applied.\n\nWhich statement best describes the guest's default capabilities?",
    "options": [
      {
        "letter": "A",
        "text": "The guest can enumerate all users, groups, and applications in the directory."
      },
      {
        "letter": "B",
        "text": "The guest can manage their own profile and password, and retrieve some information about other users, groups, and apps, but cannot enumerate the directory."
      },
      {
        "letter": "C",
        "text": "The guest can list all groups and identify the membership of every group, including hidden groups."
      },
      {
        "letter": "D",
        "text": "The guest has no directory read permissions at all and sees only their own profile."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "By default guests are **blocked from listing users, groups, or other directory resources**, but they **can manage their own profile, change their own password, and retrieve some information** about other users, groups, and apps. They **can see the membership of non-hidden groups**. Administrators can tighten this further, down to the guest's own profile only.\n\n- **A** is wrong. Enumeration is precisely what guests cannot do by default.\n- **C** is wrong. Only **non-hidden** groups are visible; hidden group membership is not.\n- **D** is wrong. That is the most restrictive setting, not the default. Guests retain limited read capability.\n\nRelated: **UserType** has **no relation** to how the user signs in or to their directory role. A guest can be added to administrative roles — which grants full read/write in that role — and Microsoft recommends PIM for guest privileged access. A guest can also be converted to Member, but that is not recommended as an atomic activity and applications should not depend on the value.",
    "source": "LP3 Module 1.10 knowledge check; Module 3.2 / 3.9."
  },
  {
    "id": 11,
    "domain": "identity",
    "topic": "SAML/WS-Fed IdP federation",
    "stem": "Contoso establishes SAML/WS-Fed identity provider federation with a partner whose users already exist as guests that redeemed invitations using email one-time passcode. The partner then asks Contoso to delete the federation configuration.\n\nWhat happens?",
    "options": [
      {
        "letter": "A",
        "text": "Existing guests automatically switch to the federated identity provider at their next sign-in."
      },
      {
        "letter": "B",
        "text": "Existing guests keep the authentication method they used at redemption; deleting the federation blocks sign-in for guests who use it, and the fix is to reset their redemption status."
      },
      {
        "letter": "C",
        "text": "Deleting the federation has no effect on existing guests and only affects new invitations."
      },
      {
        "letter": "D",
        "text": "Only one domain can be associated with a federation configuration, so the deletion affects a single domain."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Federation **does not change authentication for guests who already redeemed**. Those guests continue with their original method. But **deleting the federation blocks sign-in** for any guest who relies on it, and the documented remedy is to **reset the redemption status** so they can redeem again.\n\n- **A** is wrong. Federation is not applied retroactively to already-redeemed guests.\n- **C** is wrong on the second half. New invitations are affected, but so is sign-in for existing guests using that federation — that is the trap.\n- **D** is wrong. **Multiple domains can be associated with a single federation configuration**, and the partner domain may be verified or unverified.\n\nAlso note the rename: what was called **direct federation** is now **SAML/WS-Fed identity provider federation**, and it works with any IdP supporting SAML 2.0 or WS-Federation.",
    "source": "LP3 Module 3.13 (configure identity providers)."
  },
  {
    "id": 12,
    "domain": "identity",
    "topic": "Cross-tenant access and trust settings",
    "stem": "Contoso collaborates with Fabrikam. Contoso wants to require multifactor authentication from Fabrikam users before they access Contoso resources, and wants Fabrikam's compliant-device claims to be accepted. Separately, the Teams team wants shared channels with Fabrikam.\n\nWhat must be configured?",
    "options": [
      {
        "letter": "A",
        "text": "Inbound cross-tenant access settings with trust settings for MFA and compliant device; B2B direct connect must be enabled mutually by both tenants and supports Teams shared channels only."
      },
      {
        "letter": "B",
        "text": "Outbound cross-tenant access settings, because Contoso is the resource tenant."
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy only; cross-tenant settings cannot affect MFA trust."
      },
      {
        "letter": "D",
        "text": "B2B collaboration must be disabled for direct connect to work."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Cross-tenant access settings control **inbound** (external organizations accessing your resources) and **outbound** (your users accessing external organizations), and can be scoped to everyone or to specific users, groups, and applications. **Trust settings** on the inbound side determine whether your Conditional Access **trusts MFA** from the home tenant and whether to require **compliant device** or **hybrid Entra joined device**. Because Contoso is the resource tenant, inbound is the relevant direction.\n\n- **B** is wrong. Outbound governs Contoso users going to Fabrikam; the requirement is about Fabrikam users coming into Contoso.\n- **C** is wrong. Cross-tenant trust settings exist precisely to let you accept the partner's MFA and device claims; Conditional Access alone would otherwise re-prompt.\n- **D** is wrong. Direct connect requires **mutual** enablement; it does not require disabling B2B collaboration.\n\nDefaults to remember: **B2B collaboration is enabled** and **B2B direct connect is blocked**. Direct connect currently supports **Teams shared channels only**. Sovereign clouds are configured under **Microsoft cloud settings**.",
    "source": "LP3 Module 3.14."
  },
  {
    "id": 13,
    "domain": "identity",
    "topic": "PHS vs PTA vs federation",
    "stem": "Contoso must enforce on-premises account state immediately at sign-in: disabled accounts, locked-out accounts, expired passwords, and sign-in hour restrictions must be honored by Microsoft Entra ID without waiting for a sync cycle. The organization also wants the least possible on-premises infrastructure and automatic failover.\n\nWhich authentication method meets the enforcement requirement, and what is true of the option with the least infrastructure?",
    "options": [
      {
        "letter": "A",
        "text": "Pass-through authentication enforces on-premises policy; password hash synchronization is the least-effort option, but failover from PTA to PHS is not automatic."
      },
      {
        "letter": "B",
        "text": "Password hash synchronization enforces on-premises policy immediately; PTA requires an AD FS farm."
      },
      {
        "letter": "C",
        "text": "Federation is required for all of these controls; PHS and PTA cannot enforce them."
      },
      {
        "letter": "D",
        "text": "PTA enforces on-premises policy and fails over automatically to PHS."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "**PTA** validates passwords against on-premises Active Directory through lightweight agents, so disabled, locked-out, expired-password, and sign-in-hours conditions are enforced at sign-in. **PHS** syncs a hash of the hash and is described as the least effort in deployment, maintenance, and infrastructure — but it does **not** immediately enforce on-premises account state changes. Critically, **failover from PTA to PHS is not automatic**; an administrator must switch the sign-in method manually in Microsoft Entra Connect.\n\n- **B** is wrong. PHS does not enforce on-premises state immediately — after bulk changes you must run a new sync cycle. And PTA does not need AD FS.\n- **C** is wrong. Federation is not required for these controls; PTA handles them, and federation is chosen for smartcards, on-premises or third-party MFA, or `DOMAIN\\username` sign-in.\n- **D** is wrong. The automatic-failover claim is the classic trap.\n\nOther facts: PTA is a **tenant-level** feature affecting all managed domains, three agents are recommended (so one can fail while another is maintained), and switching from AD FS to PTA requires waiting **at least 12 hours** before shutting down AD FS. Microsoft recommends enabling PHS alongside whichever method you choose, for resilience and for Identity Protection.",
    "source": "LP3 Module 4.3 / 4.4 / 4.6."
  },
  {
    "id": 14,
    "domain": "identity",
    "topic": "Synchronization error types",
    "stem": "A user object fails to export to Microsoft Entra ID with **InvalidSoftMatch**. Investigation shows the on-premises user has a `proxyAddress` that matches an existing cloud object, and that cloud object already has an `immutableId` populated.\n\nWhat is the cause, and what is the difference from the other common duplicate error?",
    "options": [
      {
        "letter": "A",
        "text": "Hard match by sourceAnchor found nothing and the soft match by proxyAddresses or UPN hit an object that already has a different immutableId. By contrast, AttributeValueMustBeUnique is a plain duplicate proxyAddress or UPN."
      },
      {
        "letter": "B",
        "text": "The sourceAnchor exceeds 60 characters, which always produces InvalidSoftMatch."
      },
      {
        "letter": "C",
        "text": "The object type differs between the two objects, which is what InvalidSoftMatch means."
      },
      {
        "letter": "D",
        "text": "Duplicate Attribute Resiliency is disabled, which is the only cause of InvalidSoftMatch."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Matching works in two passes: **hard match** on incoming **sourceAnchor** against the cloud **immutableId**, then **soft match** on **ProxyAddresses and UserPrincipalName**. **InvalidSoftMatch** occurs when the hard match finds nothing **and** the soft match finds an object that **already has a different immutableId** — soft match only succeeds when the target has no immutableId. **AttributeValueMustBeUnique** is the simpler case: a duplicate proxyAddress or UPN being added or updated.\n\n- **B** is wrong. An over-length attribute produces **LargeObject / ExceededAllowedLength**, not InvalidSoftMatch. sourceAnchor must be **fewer than 60 characters**, with non-alphanumeric characters counting as three.\n- **C** is wrong. Different object types sharing soft-match values is **ObjectTypeMismatch**.\n- **D** is wrong. Duplicate Attribute Resiliency does not fix duplication; it allows new objects to be provisioned and, when enabled, means you will not see InvalidSoftMatch **during provisioning of new objects**. It is not the only cause.\n\nOther common causes of InvalidSoftMatch: the object moved from one forest to another so the sourceAnchor changed, the object was deleted and recreated on-premises, or Connect was reinstalled with a different sourceAnchor. One more distinct error: **Existing Admin Role Conflict** occurs when a cloud object with the same UPN holds an admin role — Connect refuses to soft-match it; the fix order is remove all admin roles, **hard delete** the cloud object, let sync soft-match, then restore the roles.",
    "source": "LP3 Module 4.7 (troubleshoot synchronization errors)."
  },
  {
    "id": 15,
    "domain": "identity",
    "topic": "Connect Health",
    "stem": "An administrator deletes a monitored server from Microsoft Entra Connect Health to stop alert noise.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Connect Health requires a Microsoft Entra ID Premium P1 license, including to complete the configuration in the Azure portal."
      },
      {
        "letter": "B",
        "text": "Deleting the server uninstalls the Connect Health agent from that server."
      },
      {
        "letter": "C",
        "text": "Deleting the server stops data collection and monitoring but does not uninstall the agent and does not delete already-collected data."
      },
      {
        "letter": "D",
        "text": "Email notifications are disabled by default and must be turned on."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "Connect Health **requires Microsoft Entra ID Premium P1**; without it the configuration cannot be completed in the portal. Deleting a server **stops data collection and monitoring**, **does not uninstall the agent**, and **does not delete data already collected** (subject to the Azure retention policy). To monitor the server again you must **uninstall and reinstall** the agent.\n\n- **B** is wrong. The agent remains installed, which is exactly why re-adding the server requires reinstalling rather than simply re-registering.\n- **D** is wrong. **Email notifications are enabled by default**, and can be configured per service, optionally notifying all global administrators plus additional recipients.\n\nRelated: agent prerequisites include outbound connectivity to Azure endpoints by IP, TLS inspection filtered or disabled, PowerShell 4.0 or newer, and FIPS disabled. Azure RBAC for Connect Health uses **Owner**, **Contributor**, and **Reader**; Invite Users is not supported.",
    "source": "LP3 Module 4.8 / 4.9."
  },
  {
    "id": 16,
    "domain": "auth",
    "topic": "Authentication method capabilities",
    "stem": "You are planning authentication methods for a tenant. The security team asks which methods can serve as a second factor, which are limited to self-service password reset, and which can be disabled.\n\nWhich statements are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Password is the only method that cannot be disabled."
      },
      {
        "letter": "B",
        "text": "Security questions are available for SSPR only and apply to non-administrative accounts only."
      },
      {
        "letter": "C",
        "text": "Email address can be used as both an MFA method and an SSPR method."
      },
      {
        "letter": "D",
        "text": "Users can configure a maximum of five OATH hardware tokens or authenticator apps."
      },
      {
        "letter": "E",
        "text": "OATH HOTP tokens are supported alongside OATH TOTP tokens."
      }
    ],
    "answers": [
      "A",
      "B",
      "D"
    ],
    "explanation": "- **Password** is the one method that cannot be disabled.\n- **Security questions** are SSPR-only, apply to **non-administrative accounts only**, use **35 predefined localized questions**, allow custom questions up to **200 characters**, and administrators **cannot read or change** a user's questions or answers.\n- The maximum is **five** OATH hardware tokens **or** authenticator apps configured at once.\n\n- **C** is wrong. **Email address is SSPR-only** and is never an MFA method.\n- **E** is wrong. Entra ID supports **OATH-TOTP SHA-1** with **30-second or 60-second** tokens. **OATH HOTP is not supported.**\n\nOther method limits worth knowing: secret keys are limited to **128 characters**; **voice call is not available in the free/trial tier**; app passwords work only with **per-user MFA** and are intended for legacy non-browser apps.",
    "source": "LP2 Module 1.5 / 2.2 / 2.3."
  },
  {
    "id": 17,
    "domain": "auth",
    "topic": "Smart lockout",
    "stem": "A user enters the wrong password several times from the office. Later the same day, the user triggers lockout again while travelling and connecting from an unfamiliar location.\n\nWhich statements describe smart lockout behavior? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The default is to lock for one minute after ten failed attempts, and customization requires Microsoft Entra ID P1 or higher."
      },
      {
        "letter": "B",
        "text": "Familiar and unfamiliar locations share a single lockout counter."
      },
      {
        "letter": "C",
        "text": "Counters are maintained per data center, so the effective number of attempts available to an attacker is roughly the threshold multiplied by the number of data centers."
      },
      {
        "letter": "D",
        "text": "Smart lockout must be enabled manually for each tenant."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "Defaults are **10 failed attempts**, then a **one-minute lockout**, with additional failures causing longer lockouts at a growth rate Microsoft does not disclose. Smart lockout is **always on for all Entra ID customers**; what requires **P1 or higher** is **customization** of the threshold and duration. Counters are **per data center**, so attempts available scale with data center count.\n\n- **B** is wrong. **Familiar and unfamiliar locations have separate lockout counters** — which is exactly why the travelling user can be locked out again.\n- **D** is wrong. It is always on and cannot be turned off.\n\nRefinements: only the **last three bad password hashes** are tracked, so repeating the same bad password does not advance the counter. In hybrid environments set the AD DS lockout threshold **two to three times higher** than the Entra threshold, with a longer Entra lockout duration expressed in seconds. AD FS equivalents are **Extranet Lockout** and **Extranet Smart Lockout**. The exercise lab configures **Lockout duration in seconds = 120** with **Mode = Enforced**.",
    "source": "LP2 Module 2.7 / 2.8."
  },
  {
    "id": 18,
    "domain": "auth",
    "topic": "Password protection deployment",
    "stem": "Contoso wants to block commonly used and compromised passwords, including for users synchronized from on-premises Active Directory. The company will use only cloud-only users initially, then extend the same policy to synced users with a custom banned list.\n\nWhich statement is true?",
    "options": [
      {
        "letter": "A",
        "text": "Cloud-only users with only the global banned password list require Microsoft Entra ID Free; adding a custom banned list or protecting synced users requires P1 or P2."
      },
      {
        "letter": "B",
        "text": "The on-premises deployment starts in Enforce mode by default."
      },
      {
        "letter": "C",
        "text": "The Password Protection proxy and the Application Proxy connector must be installed on the same server to share the agent updater."
      },
      {
        "letter": "D",
        "text": "The on-premises deployment requires AD DS schema changes and new firewall ports on domain controllers."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The licensing table is: cloud-only users with the **global** list = **Entra ID Free**; cloud-only users with a **custom** list = **P1 or P2**; users **synced from on-premises AD DS** = **P1 or P2** for both lists.\n\n- **B** is wrong. **Audit mode is the default initial setting**; passwords that would be blocked are written to the event log, and you switch to **Enforce** after validating. Microsoft recommends at least one domain controller promotion and one demotion during the audit period.\n- **C** is wrong and is an explicit warning: **never install the Password Protection Proxy and the Application Proxy on the same machine**, because their agent updater versions are incompatible.\n- **D** is wrong. The design deliberately requires **no new ports on domain controllers**, **no AD DS schema changes** (it uses the existing container and a `serviceConnectionPoint`), **no new domain/forest functional level**, and no accounts created in AD DS. Cleartext passwords never leave the DC.\n\nOther points: the policy is enforced **only where the DC agent is installed**; DC agent installation and every DC agent upgrade **require a reboot**, while the proxy upgrade is in place with **no reboot**; do not install the DC agent on read-only domain controllers; passwords set before deployment are never validated; accounts set to \"password never expires\" are exempt.",
    "source": "LP2 Module 2.6."
  },
  {
    "id": 19,
    "domain": "auth",
    "topic": "FIDO2 and passwordless prerequisites",
    "stem": "A user with no authentication methods registered wants to register a FIDO2 security key as their first method.\n\nWhat happens, and what else is true of passwordless registration?",
    "options": [
      {
        "letter": "A",
        "text": "Registration succeeds immediately; FIDO2 is always the first method a user registers."
      },
      {
        "letter": "B",
        "text": "The user must first register at least one other MFA method; after that, they can add a security key from the Security info page using a USB or NFC device with a PIN and gesture."
      },
      {
        "letter": "C",
        "text": "FIDO2 registration requires a Microsoft Entra ID Premium license for every user."
      },
      {
        "letter": "D",
        "text": "Registration is only possible from a Windows device joined to Active Directory."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A user must already have **at least one MFA method registered**; otherwise they must add one first. Registration happens at `https://myprofile.microsoft.com` under **Security info > Add method > Security key**, choosing **USB device** or **NFC device**, then setting a PIN and performing a gesture.\n\n- **A** is wrong. FIDO2 cannot bootstrap a user who has nothing registered.\n- **C** is wrong. For cloud-only FIDO2, a **Microsoft Entra ID Premium subscription is optional** — it is needed only for **automatic MDM enrollment** when the device joins Entra ID. MFA is a prerequisite, but Premium licensing is not.\n- **D** is wrong. Web passwordless sign-in requires a supported browser on **Windows 10 version 1903+ or Windows 11**, and modern management (Intune or a third-party MDM) is optional.\n\nAdministration path: **Protection > Authentication methods > Authentication method policy > FIDO2 Security Key**, then set Enable to **Yes** and target **All users** or **Select users**.",
    "source": "LP2 Module 2.2 / 1.5."
  },
  {
    "id": 20,
    "domain": "auth",
    "topic": "Windows Hello for Business",
    "stem": "Contoso is evaluating Windows Hello for Business for its administrative workforce. The security team wants assurance that the credential cannot be extracted from the device and that the PIN is not stored anywhere.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The credential is a certificate or asymmetric key pair bound to the device, and with a TPM the private key never leaves the device."
      },
      {
        "letter": "B",
        "text": "The PIN is stored in the TPM and synchronized to Microsoft Entra ID for recovery."
      },
      {
        "letter": "C",
        "text": "The PIN is never stored or shared, and biometric templates are stored locally on the device."
      },
      {
        "letter": "D",
        "text": "Windows Hello for Business can only use software-based key storage."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "The credential is a **certificate or asymmetric key pair** bound to the device, with the token bound to the device. Keys live in hardware (**TPM 1.2 or 2.0 for enterprises; TPM 2.0 for consumers**) or in software, according to policy. With a TPM the **private key never leaves the device**. The second factor is the **PIN (something you know)** or a **biometric (something you are)**; the gesture does not roam, biometric templates are stored locally, and the **PIN is never stored or shared**.\n\n- **B** is wrong and contradicts the design. The PIN is not stored in the TPM and is not synchronized.\n- **D** is wrong. Hardware-backed keys in a TPM are the recommended configuration; software storage is a policy option, not the only one.\n\nFor phased rollouts, **KeyCredential Admins** need AD write and read on the key attribute for Entra Connect synchronization, but if the domain has **Windows Server 2016 or later domain controllers** you can skip that group because the **KeyAdmins** group is created with the first WS2016 DC. **Microsoft Pluton** is a security processor built into the CPU with AMD, Intel, and Qualcomm that emulates a TPM and protects credentials even under malware or full physical possession.",
    "source": "LP2 Module 2.4."
  },
  {
    "id": 21,
    "domain": "auth",
    "topic": "Entra ID sign-in for Azure VMs",
    "stem": "You want to remove local administrator accounts from Azure virtual machines and use Microsoft Entra ID authentication with Conditional Access and MFA.\n\nWhich requirements apply?",
    "options": [
      {
        "letter": "A",
        "text": "Only Windows Server 2016 and later are supported, and a user-assigned managed identity is required."
      },
      {
        "letter": "B",
        "text": "Supported platforms include Windows Server 2022 or later with Desktop Experience, Windows 11 24H2 or later, and Linux; Linux requires a system-assigned managed identity."
      },
      {
        "letter": "C",
        "text": "Microsoft Entra ID sign-in for VMs requires domain-joined VMs and an AD FS farm."
      },
      {
        "letter": "D",
        "text": "The feature requires Microsoft Entra ID Governance licensing."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Entra ID sign-in for VMs is supported on **Windows Server 2022 and 2025 or later (Desktop Experience)**, **Windows 11 24H2 or later**, and **Linux** (the documented example is Ubuntu 18.04 LTS). Linux requires a **system-assigned managed identity**. You enable **\"Login with Microsoft Entra ID\"** and then grant access through **Azure role assignments**.\n\n- **A** is wrong on both the OS floor and the identity type, and it names the wrong identity kind for Linux.\n- **C** is wrong. The point of the feature is to avoid domain dependency and local accounts.\n- **D** is wrong. No Governance licensing is stated.\n\nBenefits: no local administrator accounts to manage, the Entra password policy applies, and Conditional Access with MFA and risk signals can gate the connection.",
    "source": "LP2 Module 2.10."
  },
  {
    "id": 22,
    "domain": "auth",
    "topic": "Security defaults",
    "stem": "A new tenant was created last month and has never been configured. An administrator enables security defaults.\n\nWhich statements are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Security defaults are available at no extra cost and are enabled by default on new tenants."
      },
      {
        "letter": "B",
        "text": "Users are given a 14-day grace period to register for MFA."
      },
      {
        "letter": "C",
        "text": "Sixteen named administrative roles are required to perform MFA at every sign-in."
      },
      {
        "letter": "D",
        "text": "Security defaults block legacy authentication, including Exchange ActiveSync basic authentication."
      },
      {
        "letter": "E",
        "text": "Security defaults and Conditional Access can be used together to extend coverage."
      }
    ],
    "answers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "Security defaults are free and **enabled at creation on new tenants** (tenants created on or after **October 22, 2019** may already have them). They require all users to register for MFA, require administrators to do MFA, block legacy authentication, require MFA when necessary, and protect privileged activities such as Azure portal access. **Sixteen** named admin roles are re-prompted at every sign-in, including Global, Application, Authentication, Authentication Policy, Billing, Cloud Application, Conditional Access, Exchange, Helpdesk, Identity Governance, Password, Privileged Authentication, Privileged Role, Security, SharePoint, and User Administrator.\n\n- **B** is wrong. Registration is required **immediately — there is no grace period** — and the prompt uses **number matching** to defeat MFA fatigue.\n- **E** is wrong. Security defaults and Conditional Access are alternatives: organizations that implement Conditional Access policies replacing security defaults must **disable** security defaults. Disabling requires a reason.\n\nLegacy authentication means clients not using modern auth (for example Office 2010) or mail protocols IMAP, SMTP, and POP3; security defaults block Exchange ActiveSync basic authentication. Organizations that should not use it: those already using Conditional Access, those with P1/P2 licenses, and those with complex requirements.",
    "source": "LP2 Module 3.2 / 3.3."
  },
  {
    "id": 23,
    "domain": "auth",
    "topic": "Conditional Access licensing and default behavior",
    "stem": "Contoso has Microsoft Entra ID P1 licenses. A consultant proposes a policy that blocks access when sign-in risk is medium or higher. Separately, the team asks what happens to a user in the Finance group when a Conditional Access policy targets only the Sales group.\n\nWhat is the outcome?",
    "options": [
      {
        "letter": "A",
        "text": "The risk-based policy works under P1; users not targeted by any policy receive a token because that is the default behavior."
      },
      {
        "letter": "B",
        "text": "The risk-based policy requires P2; users not targeted by any policy receive a token because that is the default behavior."
      },
      {
        "letter": "C",
        "text": "The risk-based policy requires P2; users not targeted by any policy are blocked by default."
      },
      {
        "letter": "D",
        "text": "The risk-based policy works under P1; users not targeted are blocked if any policy exists in the tenant."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "P1 covers Conditional Access with **standard rules**. **Risk-based conditions** — sign-in risk and user risk — require **P2** because they come from Identity Protection. And the default behavior when no assignment applies and no policy is in effect is to **issue a token**. A policy scoped to Sales does not exclude or affect Finance.\n\n- **A** is wrong on licensing.\n- **C** is wrong on the default. There is no implicit deny; if you want to block everyone else you must create a separate block policy.\n- **D** is wrong on both counts.\n\nAlso: **Entra ID Free and free Office 365 have no Conditional Access at all**; Microsoft 365 E3 and above include P1-equivalent Conditional Access. **Block overrides all other grant controls** for a user. Every new policy should start in **report-only** mode.",
    "source": "LP2 Module 3.4 / 3.5."
  },
  {
    "id": 24,
    "domain": "auth",
    "topic": "Testing and troubleshooting Conditional Access",
    "stem": "A user reports being blocked by a policy that should not apply. You need to determine which policy evaluated and why it matched, and you want to validate a new policy before enforcing it.\n\nWhich combination of tools should you use? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Set the new policy to Report-only, then review the sign-in log's Conditional Access tab for policy results."
      },
      {
        "letter": "B",
        "text": "Use the What-If tool to simulate the sign-in with the user, target app, and conditions."
      },
      {
        "letter": "C",
        "text": "Disable all policies, ask the user to retry, and re-enable them one at a time in production."
      },
      {
        "letter": "D",
        "text": "Use the enterprise application's provisioning log."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "**Report-only** evaluates the policy and records the result without enforcing it, and is the recommended state for every new policy. The **What-If** tool simulates a sign-in for a user, target app, and conditions and shows which policies and session controls apply. For a live failure, the sign-in record's **Conditional Access** tab lists each policy applied and its result, and the **Troubleshooting and support** tab explains the reason. The **Policy details (preview)** view compares collected values against policy requirements.\n\n- **C** is wrong and dangerous. Toggling policies in production risks locking out users, and it gives you no evidence of which condition matched.\n- **D** is wrong. Provisioning logs track user and group provisioning to applications, not Conditional Access evaluation.\n\nUseful filter values on sign-in logs: **Not applied** (no policy applied), **Success** (one or more policies applied, though not necessarily all conditions), **Failure** (the user and app condition of at least one policy was satisfied and grant controls were unsatisfied or set to block). A support request needs the **request ID and date/time**.",
    "source": "LP2 Module 3.7."
  },
  {
    "id": 25,
    "domain": "auth",
    "topic": "Device-based grant controls",
    "stem": "Contoso wants to require that only healthy, managed devices access Microsoft 365. Most devices are Intune-managed but are not joined to on-premises Active Directory. Some users access Exchange Online from native mail clients on personal iOS and Android devices.\n\nWhich controls should be used, and which statement is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Require Hybrid Microsoft Entra joined device for all users and all cloud apps."
      },
      {
        "letter": "B",
        "text": "Require device to be marked as compliant for managed devices, and require an approved client app with an app protection policy for the personal mobile devices."
      },
      {
        "letter": "C",
        "text": "Require device to be marked as compliant, which also blocks users from enrolling their devices in Intune."
      },
      {
        "letter": "D",
        "text": "Require multi-factor authentication only, because device state cannot be evaluated for personal devices."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Compliance comes from **Intune** policy — PIN, encryption, minimum and maximum OS version, not jailbroken or rooted — and is evaluated in Entra ID, so it fits devices that are managed but not hybrid joined. For personal mobile devices, **Require approved client app** combined with **Require app protection policy** provides data protection without enrollment (MAM-WE).\n\n- **A** is wrong. Requiring hybrid join when devices are not hybrid joined can lock out the **entire organization**. That control is one of the listed configurations to avoid when scoped to all users and all apps.\n- **C** is wrong on the second half. \"Require device to be marked as compliant\" **does not block Intune enrollment**.\n- **D** is wrong. Device state is evaluated for registered devices; approved-client-app policies require the device to be **registered** in Entra ID first.\n\nPractical detail: **Require approved client app** needs two policies — one for modern authentication clients and a separate one for Exchange ActiveSync clients — plus P1/P2 and Intune licensing. Operation on-premises is limited to Outlook for iOS and Android with hybrid modern authentication.",
    "source": "LP2 Module 3.5 / 3.8."
  },
  {
    "id": 26,
    "domain": "auth",
    "topic": "Session controls and CAE",
    "stem": "Users complain they are prompted to sign in again too often, while the security team wants sessions revoked quickly when an account is disabled.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The default sign-in frequency is a rolling 90 days, and a device unlock or interactive sign-in satisfies the policy."
      },
      {
        "letter": "B",
        "text": "Sign-in frequency applies only to browser sessions and never to MFA."
      },
      {
        "letter": "C",
        "text": "Continuous access evaluation uses short-lived tokens — one hour by default — and a resource provider returns a 401 with a claims challenge after a critical event."
      },
      {
        "letter": "D",
        "text": "CAE requires that clients be hybrid joined."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "**Sign-in frequency** defaults to a **rolling 90 days** and now also governs **MFA re-prompts**. A device unlock or interactive sign-in satisfies the policy — for example a 90-minute lock resets a one-hour clock. **CAE** relies on access tokens valid **one hour** by default; when a critical event occurs the resource provider returns a **401 with a claims challenge**, and the client bypasses its cache and reauthenticates.\n\n- **B** is wrong. Sign-in frequency now applies to MFA as well as browser sessions.\n- **D** is wrong. CAE does not require a hybrid-joined device.\n\nCAE benefits: near-real-time revocation on user termination or password change, location-policy enforcement, and preventing token export outside a trusted network. Other session controls include **persistent browser session** (by default users see \"Stay signed in?\" on personal devices and choose) and **Conditional Access App Control**, which routes sessions through Defender for Cloud Apps to block download, cut, copy, or print on unmanaged devices.",
    "source": "LP2 Module 3.9."
  },
  {
    "id": 27,
    "domain": "auth",
    "topic": "Identity Protection risk policies",
    "stem": "You are configuring Identity Protection risk policies for a new deployment and want to follow Microsoft's recommendation.\n\nWhich thresholds and remediation should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "User risk = High with allow access and require password change; sign-in risk = Medium and above with require MFA."
      },
      {
        "letter": "B",
        "text": "User risk = Low and above with block access; sign-in risk = High with block access."
      },
      {
        "letter": "C",
        "text": "User risk = Medium with require MFA; sign-in risk = Low with require password change."
      },
      {
        "letter": "D",
        "text": "Both policies = High with block access, because blocking is the safest option."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Microsoft's recommendation is **user risk threshold High** with **allow access and require password change**, and **sign-in risk threshold Medium and above** with **require MFA**. The distinction behind the thresholds: **user risk** is the probability that the account itself is compromised, while **sign-in risk** is the probability that the specific sign-in was not performed by the account owner.\n\n- **B**, **C**, and **D** all mis-set the thresholds or apply block where the recommendation is remediation. Blocking is available, but it is not the recommended default and creates a denial-of-service risk for legitimate users.\n\nSelf-remediation requires the user to have previously registered **both MFA and SSPR**, which is why combined security information registration is recommended. Notably, **\"Dismiss user risk\"** closes the risk events but does not change the password, so the identity is not returned to a known-safe state.",
    "source": "LP2 Module 4.3 / 4.4."
  },
  {
    "id": 28,
    "domain": "auth",
    "topic": "Identity Protection roles",
    "stem": "A security analyst must be able to review risky users, dismiss user risk, and confirm that a sign-in is safe. The analyst must not be able to configure policies or reset passwords. Another administrator must be able to create Conditional Access policies that use sign-in risk as a condition.\n\nWhich roles should be assigned?",
    "options": [
      {
        "letter": "A",
        "text": "Security Operator for the analyst; Conditional Access Administrator for the other administrator."
      },
      {
        "letter": "B",
        "text": "Security Administrator for the analyst; Global Administrator for the other administrator."
      },
      {
        "letter": "C",
        "text": "Security Reader for the analyst; Privileged Role Administrator for the other administrator."
      },
      {
        "letter": "D",
        "text": "Global Reader for the analyst; Security Administrator for the other administrator."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "**Security Operator** can view all reports and the overview, **dismiss user risk, confirm safe sign-in, and confirm compromise**, but cannot configure or change policies, reset passwords, or configure alerts — and notably **cannot access the Risky sign-ins report**. **Conditional Access Administrators** can create policies that use sign-in risk as a condition.\n\n- **B** is wrong. **Security Administrator** has broad access and can configure policies, which exceeds the requirement. Also, Security Administrator **cannot reset a user's password**, which is a deliberate limitation worth remembering.\n- **C** is wrong. **Security Reader** is view-only and cannot give feedback on detections, so the analyst could not dismiss risk. Privileged Role Administrator manages role assignments, not Conditional Access.\n- **D** is wrong on both roles.\n\nLayering to remember: **Security Reader** = view only; **Security Operator** = view plus triage actions but no configuration and no risky sign-ins report; **Security Administrator** = full configuration but no password reset.",
    "source": "LP2 Module 4.2 / 4.6."
  },
  {
    "id": 29,
    "domain": "auth",
    "topic": "Identity Protection reports",
    "stem": "An auditor asks how far back risky sign-in data and risk detections are available, and how many records can be exported.\n\nWhat should you tell them?",
    "options": [
      {
        "letter": "A",
        "text": "Risky users, risky sign-ins, and risk detections all cover 90 days; each exports 2,500 records."
      },
      {
        "letter": "B",
        "text": "Risky sign-ins cover 30 days and export 2,500 records; risk detections cover 90 days and export 5,000 records."
      },
      {
        "letter": "C",
        "text": "Risky sign-ins cover 90 days and export 5,000 records; risk detections cover 30 days and export 2,500 records."
      },
      {
        "letter": "D",
        "text": "All reports cover 30 days and export 250,000 records."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "The windows and caps are deliberately different: **risky sign-ins = 30 days, 2,500 rows**; **risk detections = 90 days, 5,000 rows**. Exports are **CSV or JSON**.\n\n- **A** flattens both sets of numbers.\n- **C** swaps the two reports — the most common trap in this area.\n- **D** imports the 250,000-record figure from the sign-in and audit log downloads, which is a different feature.\n\nFor context, Identity Protection as a whole requires **Microsoft Entra ID Premium P2**. Free and P1 see only **limited** risky-user data (medium and high risk, no details drawer or risk history) and limited risky sign-ins with no risk detail or level.",
    "source": "LP2 Module 4.6."
  },
  {
    "id": 30,
    "domain": "auth",
    "topic": "Azure RBAC fundamentals",
    "stem": "Contoso has 3,000 role assignments in one subscription and needs to add 1,500 more. The platform team also wants a custom role that allows reading billing data.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "A subscription supports up to 4,000 role assignments, and a management group supports 500."
      },
      {
        "letter": "B",
        "text": "A directory supports up to 5,000 custom roles."
      },
      {
        "letter": "C",
        "text": "Contributor can grant access to other users."
      },
      {
        "letter": "D",
        "text": "Custom Azure roles are stored in the subscription, not in Microsoft Entra ID."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "Limits are **4,000 role assignments per subscription** (including assignments made at resource group and resource scope), **500 per management group**, and **5,000 custom roles per directory**.\n\n- **C** is wrong. **Contributor** can create and manage all resource types but **cannot grant access**. **Owner** has full access including granting access, and **User Access Administrator** can assign access without managing resources.\n- **D** is wrong. Custom Azure roles are **stored in Microsoft Entra ID** and are shareable across subscriptions.\n\nScopes are **management group, subscription, resource group, and resource**, and permissions **inherit downward**. Custom role JSON uses `properties.roleName`, `description`, `assignableScopes[]`, and `permissions[]` with `actions`, `notActions`, `dataActions`, and `notDataActions`; the `*` wildcard is allowed at any level.",
    "source": "LP2 Module 5.2 / 5.3 / 5.6."
  },
  {
    "id": 31,
    "domain": "auth",
    "topic": "Managed identities and Key Vault",
    "stem": "An application running on an Azure VM must read secrets from Azure Key Vault. The VM may be recreated from an image during deployments, and the team does not want to re-grant Key Vault permissions after each rebuild. The vault currently uses access policies and has 1,100 entries.\n\nWhich approach is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Use a system-assigned managed identity and keep the access policy model, because access policies support unlimited entries."
      },
      {
        "letter": "B",
        "text": "Use a user-assigned managed identity and move the vault to the Azure RBAC permission model, because access policies are capped at 1,024 entries."
      },
      {
        "letter": "C",
        "text": "Create a service principal with a client secret and store the secret on the VM."
      },
      {
        "letter": "D",
        "text": "Use a system-assigned managed identity and assign the Key Vault Reader role so the app can read secret values."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A **user-assigned** managed identity is a standalone Azure resource with a lifecycle independent of any single compute resource, so it survives VM rebuilds and can be attached to new instances without re-granting permissions. The vault's access policy model is capped at **1,024 access policy entries per vault**, so 1,100 entries cannot fit; the **Azure RBAC** model scales and centralizes permission management.\n\n- **A** is wrong. Access policies do have a 1,024-entry limit, and a system-assigned identity dies with the resource, forcing re-granting.\n- **C** is wrong. It reintroduces the credential management problem managed identities exist to eliminate.\n- **D** is wrong twice: system-assigned does not survive rebuild, and **Key Vault Reader can read metadata only — not secret contents or key material**.\n\nUseful role details: **Key Vault Administrator** performs all **data plane** operations but cannot manage vault resources or role assignments; **Secrets User** reads secret contents; **Crypto User** performs cryptographic operations. Recommendation: one vault per application per environment.",
    "source": "LP2 Module 5.4 / 5.5 / 5.7."
  },
  {
    "id": 32,
    "domain": "auth",
    "topic": "Global Secure Access fundamentals",
    "stem": "Contoso wants identity-aware, cloud-delivered access to both internet destinations and private on-premises applications, replacing VPN for remote workers and applying Conditional Access to internet traffic.\n\nWhich statement describes the correct licensing, services, and a key enforcement limitation?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID P1 or P2 plus an Entra Internet Access and/or Private Access license; Internet Access is a secure web gateway, Private Access provides ZTNA to private resources, and Microsoft-traffic Conditional Access is enforced only when the Global Secure Access client is present."
      },
      {
        "letter": "B",
        "text": "Microsoft 365 E5 only; Internet Access is a firewall, Private Access is a VPN concentrator, and Conditional Access is always enforced regardless of client."
      },
      {
        "letter": "C",
        "text": "Microsoft Entra ID Governance; Internet Access and Private Access are both part of entitlement management."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra ID P2 only; no additional license is required for Internet Access or Private Access."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Global Secure Access combines **Microsoft Entra Internet Access** (an identity-centric, device-aware **secure web gateway**) and **Microsoft Entra Private Access** (ZTNA to private resources, building on Application Proxy but extending to any private resource, port, and protocol, with no VPN). Licensing requires **Entra ID P1 or P2 plus** an Internet Access and/or Private Access license, and the **Global Secure Access Administrator** role. Crucially, Microsoft-traffic Conditional Access policies are enforced **only when the GSA client is present**; traffic arriving through a remote network without the client bypasses the CA policy.\n\n- **B** is wrong on licensing and on both product descriptions, and it inverts the client-enforcement fact.\n- **C** is wrong. These are network access services, not governance features.\n- **D** is wrong. The additional GSA license is required.\n\nInternet Access capabilities include a compliant-network check that stops **stolen token replay**, **universal tenant restrictions**, web content category and domain filtering, and enriched logs.",
    "source": "LP2 Module 6.2 / 6.3 / 6.7."
  },
  {
    "id": 33,
    "domain": "auth",
    "topic": "Private Access and compliant network",
    "stem": "You are deploying Microsoft Entra Private Access for an on-premises file server and a line-of-business app. The security team also wants Conditional Access to block access to Microsoft 365 unless the user's traffic comes through Global Secure Access.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The private network connector must run on Windows Server 2016 or later with .NET 4.7.2 and TLS 1.2, and more than one connector is recommended for high availability."
      },
      {
        "letter": "B",
        "text": "NetBIOS names are supported in Quick Access application segments."
      },
      {
        "letter": "C",
        "text": "The compliant-network policy pattern is to include Any location, exclude All Compliant Network locations, and block access."
      },
      {
        "letter": "D",
        "text": "Remote networks require the Global Secure Access client on every device."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "Private Access connectors are lightweight agents on **Windows Server 2016+**, requiring **.NET 4.7.2+** and **TLS 1.2**, making **outbound** connections only, with outbound ports **80** (CRL download) and **443** (service communication). More than one server is recommended for high availability. For the network requirement, you enable CA signaling for Entra ID and then write a policy that **includes Any location**, **excludes All Compliant Network locations** (a named location of type Network Access), and **blocks** access.\n\n- **B** is wrong. **NetBIOS is not supported** in Quick Access segments — use an FQDN such as `contoso.local/app1`, not `contoso/app1`. Supported destination types are IP address, FQDN including wildcard, IP range (CIDR), and IP-to-IP range.\n- **D** is wrong. **Remote networks** use an IPSec tunnel from a CPE router and need **no client** on devices.\n\nTwo more traps: in the compliant-network policy you cannot select the generic **Office 365** cloud app — choose **Office 365 Exchange Online** or **Office 365 SharePoint Online**. And tenant restrictions tagging requires **both** the Global Secure Access Administrator and Security Administrator roles; data-plane protection covers Microsoft Graph and SharePoint Online, while third-party apps such as Slack are out of scope.",
    "source": "LP2 Module 6.3 / 6.4 / 6.6 / 6.7."
  },
  {
    "id": 34,
    "domain": "apps",
    "topic": "Service principal vs application object",
    "stem": "You are the identity administrator for Contoso. Contoso developed a multitenant application named ExpenseTrack and registered it in the Contoso tenant. Fabrikam has consented to ExpenseTrack in its own tenant. Fabrikam's administrator wants to give the application a different display name and logo inside Fabrikam, and wants to control which Fabrikam users are assigned to the application.\n\nWhich changes can Fabrikam make without affecting Contoso's application object?",
    "options": [
      {
        "letter": "A",
        "text": "Change the display name and logo, and create app role assignments, on the Fabrikam service principal."
      },
      {
        "letter": "B",
        "text": "Change the display name and logo, and edit the redirect URI, on the Fabrikam service principal."
      },
      {
        "letter": "C",
        "text": "Change the Application ID URI and add a new client secret in the Fabrikam tenant."
      },
      {
        "letter": "D",
        "text": "Change the supported account types from multitenant to single-tenant."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "The service principal is the per-directory instance of an application. It holds directory-local settings: user and group app role assignments, user and admin consent grants, local policies including Conditional Access, claims transformation rules, attribute mappings for provisioning, and directory-specific app roles, name, and logo. Fabrikam editing its own service principal's name and logo and creating its own role assignments affects only Fabrikam.\n\n- **B** is wrong on the second half. Redirect URIs live on the application object, which exists only in the home tenant, so Fabrikam cannot change them locally.\n- **C** is wrong. The Application ID URI and client secrets are application-object properties. A secret created in the home tenant's app object is what every tenant's service principal references.\n- **D** is wrong. The audience/supported account types are an application-object property. A customer tenant cannot change them.\n\nRelated trap: changes to the application object propagate to the **home-tenant** service principal only. Service principals in other tenants remain independent.",
    "source": "LP1 Module 4.3 (application objects and service principals); Module 3.2."
  },
  {
    "id": 35,
    "domain": "apps",
    "topic": "Delegated vs application permissions",
    "stem": "A vendor supplies a nightly batch service that reads all user profiles from Microsoft Graph. The service runs unattended as a Windows service on a server; no user is signed in when it runs.\n\nWhich permission type must be configured, and who must grant it?",
    "options": [
      {
        "letter": "A",
        "text": "Delegated permission, consented by any user"
      },
      {
        "letter": "B",
        "text": "Delegated permission, consented by an administrator"
      },
      {
        "letter": "C",
        "text": "Application permission, consented by an administrator"
      },
      {
        "letter": "D",
        "text": "Application permission, consented by any user"
      }
    ],
    "answers": [
      "C"
    ],
    "explanation": "Application permissions are used when the app runs without a signed-in user, such as background services and daemons. Because there is no user context to constrain the app, only an administrator can consent to application permissions.\n\n- **A** and **B** are wrong. Delegated permissions require a signed-in user and the app acts as that user. With no signed-in user there is no context for a delegated permission to act in.\n- **D** is wrong. Users can consent only to certain low-impact delegated permissions, never to application permissions.\n\nKey contrast: delegated = least-privileged **intersection** of the granted permission and the signed-in user's own privileges, so the app can never exceed the user. Application = the full privilege level implied by the permission, for the app itself.",
    "source": "LP1 Module 3.5 / 4.6 (permissions)."
  },
  {
    "id": 36,
    "domain": "apps",
    "topic": "Admin consent endpoint",
    "stem": "You need to send a customer's administrator a link that grants tenant-wide admin consent to a multitenant application in the customer's own tenant. The application's client ID is `11111111-2222-3333-4444-555555555555`.\n\nWhich URL should you use?",
    "options": [
      {
        "letter": "A",
        "text": "`https://login.microsoftonline.com/common/adminconsent?client_id=11111111-2222-3333-4444-555555555555`"
      },
      {
        "letter": "B",
        "text": "`https://login.microsoftonline.com/{customer-tenant-id}/adminconsent?client_id=11111111-2222-3333-4444-555555555555`"
      },
      {
        "letter": "C",
        "text": "`https://login.microsoftonline.com/{customer-tenant-id}/oauth2/v2.0/authorize?client_id=11111111-2222-3333-4444-555555555555`"
      },
      {
        "letter": "D",
        "text": "`https://entra.microsoft.com/{customer-tenant-id}/adminconsent`"
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "The admin consent endpoint takes a specific tenant — either the tenant ID or any verified domain name — plus the client ID. The redirect URI, if used, must exactly match a registered redirect URI; `state` is recommended and `scope` is required.\n\n- **A** is the classic trap. The tenant is required and you must **not** use `common`, because personal accounts cannot provide admin consent except in a tenant context. Prefer the tenant ID.\n- **C** is the user consent/authorization endpoint, not the admin consent endpoint. It does not grant tenant-wide consent.\n- **D** is not a consent endpoint at all.",
    "source": "LP1 Module 3.6 (grant tenant-wide admin consent)."
  },
  {
    "id": 37,
    "domain": "apps",
    "topic": "Tenant-wide consent side effects",
    "stem": "An administrator opens **App registrations > ExpenseTrack > API permissions** and selects **Grant admin consent**. The application already had tenant-wide consent granted six months earlier for a different set of permissions, and some users had previously consented to additional delegated permissions on their own behalf.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Previously granted tenant-wide permissions are revoked and replaced by the currently configured permissions."
      },
      {
        "letter": "B",
        "text": "Previously granted tenant-wide permissions are merged with the currently configured permissions."
      },
      {
        "letter": "C",
        "text": "Permissions that individual users granted on their own behalf are also revoked."
      },
      {
        "letter": "D",
        "text": "Permissions that individual users granted on their own behalf are not affected."
      }
    ],
    "answers": [
      "A",
      "D"
    ],
    "explanation": "Granting tenant-wide consent from the **App registrations** blade replaces the tenant-wide grant: it revokes permissions previously granted tenant-wide and applies the currently configured set. Consent that individual users granted for themselves is separate and is not affected.\n\n- **B** is wrong. It is a replace, not a merge, which is why a permission removed from the configuration stops being granted tenant-wide.\n- **C** is wrong. User-scoped grants survive.\n\nAlso worth remembering: tenant-wide consent grants the application **and its publisher** access to organizational data, so review requested permissions first. If the app is already provisioned, the same operation is available from **Enterprise applications > Permissions > Grant admin consent**.",
    "source": "LP1 Module 3.6."
  },
  {
    "id": 38,
    "domain": "apps",
    "topic": "Redirect URI rules",
    "stem": "You are registering a web application. Which statements about redirect URIs (reply URLs) are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "The URI must begin with `https`, except for `localhost` during development."
      },
      {
        "letter": "B",
        "text": "The URI matching is case-sensitive."
      },
      {
        "letter": "C",
        "text": "The characters `! $ ' ( ) , ;` are not supported."
      },
      {
        "letter": "D",
        "text": "A URI may contain a fragment identifier (`#`) to receive tokens for single-page apps."
      },
      {
        "letter": "E",
        "text": "Wildcards are supported in the path portion of the URI."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "Redirect URI rules from the course: must begin with `https` except `localhost` in development; matching is case-sensitive and must match the running app's path case; the characters `! $ ' ( ) , ;` are unsupported.\n\n- **D** is wrong. Fragments are not part of a valid redirect URI.\n- **E** is wrong. Wildcards are not supported in redirect URIs.\n\nRelated behavior worth noting: if the registered URI has no path segment, a trailing `/` is appended in the response; if a path segment is present, no trailing slash is appended. Mismatches here are a common cause of `AADSTS50011`-style redirect errors.",
    "source": "LP1 Module 4.4 (configure app authentication)."
  },
  {
    "id": 39,
    "domain": "apps",
    "topic": "App roles vs group claims",
    "stem": "You are designing authorization for a line-of-business application. The application needs to distinguish three permission levels (Reader, Approver, Administrator). The security team does not want to depend on group claims because tokens are already large and users belong to many groups, and the project has no budget for Microsoft Entra ID P1 licenses for the application's users.\n\nWhat should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "App roles, because they avoid group overage and do not require Microsoft Entra ID P1."
      },
      {
        "letter": "B",
        "text": "Group claims filtered to assigned groups, because filtering removes token bloat."
      },
      {
        "letter": "C",
        "text": "App roles, because app roles require Microsoft Entra ID P1 but group claims do not."
      },
      {
        "letter": "D",
        "text": "Dynamic groups, because membership is evaluated at token issuance."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App roles are an alternative to group claims. Microsoft Entra ID emits a `roles` claim containing the role **values** granted to a user, both when assigned individually and when assigned through group membership. Two stated benefits: app roles avoid group overage, and app roles do **not** require Microsoft Entra ID P1 licensing.\n\n- **B** is wrong. Filtering to assigned groups reduces the number of group claims but still relies on groups and does not deliver the licensing benefit.\n- **C** inverts the licensing fact. App roles are precisely the option that does not need P1.\n- **D** is wrong. Dynamic groups do not solve token size and still produce group claims.",
    "source": "LP1 Module 3.7 / 4.7 (app roles)."
  },
  {
    "id": 40,
    "domain": "apps",
    "topic": "Baseline app role design",
    "stem": "You define app roles for an application and set **User assignment required?** to **Yes**. The only roles you define are `Administrator` and `Approver`.\n\nWhat is the risk, and what should you do?",
    "options": [
      {
        "letter": "A",
        "text": "No risk; users who are assigned but hold no role receive no permissions."
      },
      {
        "letter": "B",
        "text": "Every assigned user must be assigned one of the defined roles, so users who should have read-only access will be forced into an elevated role. Define a baseline role with no elevated permissions."
      },
      {
        "letter": "C",
        "text": "The application will fail to issue tokens because a default role is missing from the manifest."
      },
      {
        "letter": "D",
        "text": "Role assignments will fall back to the directory's default access."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "When assignment is required, a user or group assigned to the application must be assigned one of the defined app roles. If the only roles defined are elevated, every assignee receives elevated permissions, which violates least privilege. The documented best practice is to always define a baseline role with no elevated permissions, such as `user` or `reader`.\n\n- **A** is wrong. Assignment without a role is not how the requirement behaves; an assigned principal must receive one of the defined roles.\n- **C** is wrong. Token issuance does not require a default role in the manifest.\n- **D** is wrong. There is no fallback to directory default access.",
    "source": "LP1 Module 4.7 (create app roles)."
  },
  {
    "id": 41,
    "domain": "apps",
    "topic": "Application administrator roles",
    "stem": "Your organization has set **Users can register applications** to **No**. A developer must be able to register applications and consent to permissions on their own behalf, but must not be able to manage applications owned by other teams, configure application proxy, or manage Conditional Access.\n\nWhich role should you assign?",
    "options": [
      {
        "letter": "A",
        "text": "Application Developer"
      },
      {
        "letter": "B",
        "text": "Application Administrator"
      },
      {
        "letter": "C",
        "text": "Cloud Application Administrator"
      },
      {
        "letter": "D",
        "text": "Global Administrator"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "**Application Developer** grants the ability to create app registrations even when **Users can register applications** is No, and to consent on the developer's own behalf even when the user-consent setting is No. It is narrowly scoped to that purpose.\n\n- **B** is wrong. Application Administrator manages all aspects of **all** enterprise applications, app registrations, **and application proxy settings** in the directory — broader than required and explicitly including proxy.\n- **C** is wrong. Cloud Application Administrator is Application Administrator **minus** application proxy, so it solves the proxy objection, but it is still a directory-wide administrative role over **every** application rather than the developer-scoped role. Neither admin role can manage Conditional Access.\n- **D** is wrong. Far broader than required and grants Conditional Access management.\n\nUseful contrasts: neither Application Administrator nor Cloud Application Administrator can manage **Conditional Access**, neither can consent to **Microsoft Graph** permissions, and neither is automatically added as an owner when an app is created. Only **users** can own enterprise applications; service principals can own app registrations; **groups can never own either**.",
    "source": "LP1 Module 1.5 / 3.2."
  },
  {
    "id": 42,
    "domain": "apps",
    "topic": "Application Proxy",
    "stem": "Contoso must publish an on-premises web application that uses Integrated Windows Authentication. The application must be reachable by remote users without a VPN, and administrators want Microsoft Entra preauthentication and Conditional Access applied before the request reaches the app.\n\nWhich two components are required, and which delegation mechanism provides SSO to the app? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The Application Proxy service in the cloud and an Application Proxy connector on-premises; Kerberos Constrained Delegation provides SSO."
      },
      {
        "letter": "B",
        "text": "The Application Proxy service in the cloud and a private network connector; password-based SSO provides authentication."
      },
      {
        "letter": "C",
        "text": "The Application Proxy service and connector can replace the VPN for users who are on the corporate network."
      },
      {
        "letter": "D",
        "text": "The connector must be able to read the TokenGroupsGlobalAndUniversal attribute and the app must have a Service Principal Name."
      }
    ],
    "answers": [
      "A",
      "D"
    ],
    "explanation": "Application Proxy consists of the cloud **Application Proxy service** and an on-premises **connector**. For Integrated Windows Authentication the connector uses **Kerberos Constrained Delegation (KCD)**. Readiness requirements include: apps set to integrated Windows authentication, all apps having **SPNs**, the connector server and app server being domain-joined, and the connector being able to read **TokenGroupsGlobalAndUniversal**.\n\n- **B** is wrong. A private network connector belongs to Microsoft Entra Private Access (Global Secure Access), not Application Proxy, and password SSO does not authenticate an IWA app.\n- **C** is wrong and is an explicit callout in the course: Application Proxy **replaces the need for a VPN or reverse proxy** for remote access but is **not intended for internal users on the corporate network**, where it causes unexpected or undesirable performance issues.\n\nFlow to remember: user hits the external URL, is redirected to Entra ID for preauthentication, receives a token, sends it to the Application Proxy service which extracts **UPN and SPN**, forwards to the connector, the connector performs KCD and obtains a Kerberos ticket, calls the app, and the response returns through the connector and service.",
    "source": "LP1 Module 2.4; LP2 Module 2.9 (Kerberos/KCD)."
  },
  {
    "id": 43,
    "domain": "apps",
    "topic": "OIDC scopes",
    "stem": "You are configuring OpenID Connect scopes for a web API. Which statements are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "`offline_access` must be explicitly requested on the v2.0 endpoint to receive a refresh token."
      },
      {
        "letter": "B",
        "text": "The `address` and `phone` scopes are supported."
      },
      {
        "letter": "C",
        "text": "`openid` is required for OpenID Connect sign-in."
      },
      {
        "letter": "D",
        "text": "For a single-page application, a refresh token is always provided."
      },
      {
        "letter": "E",
        "text": "`email` guarantees an `email` claim will always be present in the token."
      }
    ],
    "answers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "- `openid` is required to use OIDC; it yields the `sub` claim and access to the UserInfo endpoint, plus ID tokens from the token endpoint.\n- `offline_access` returns refresh tokens, and on the v2.0 endpoint it must be explicitly requested or the token response contains only an access token.\n- For a single-page application the refresh token is always provided.\n\n- **B** is wrong. `address` and `phone` are **not** supported OIDC scopes.\n- **E** is wrong. `email` returns an `email` claim **only if an email is associated** with the user, and the app must handle its absence.\n\nAlso remember: scopes are sent as a **space-separated** list in the `scope` parameter, each permission appended to the resource's Application ID URI. `user.read` and `offline_access` are automatically included in the initial consent. Access tokens usually expire in **one hour**.",
    "source": "LP1 Module 2.5 / 3.4."
  },
  {
    "id": 44,
    "domain": "apps",
    "topic": "App collections licensing",
    "stem": "You want to group the applications that users already have access to into tabs by job role, so that users see only the apps relevant to their role in the My Apps portal.\n\nWhat is required?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID Premium P1 or P2 for collections, and users access them at `https://myapps.microsoft.com`."
      },
      {
        "letter": "B",
        "text": "No license; collections are included in Microsoft Entra ID Free."
      },
      {
        "letter": "C",
        "text": "A Microsoft 365 E5 license, because collections are delivered through the Office portal."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra ID Governance, because collections are an entitlement management feature."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "App collections require **Microsoft Entra ID Premium P1 or P2**. A collection is a **filter over apps the user already has access to**, so it never grants new access; it groups apps onto a separate tab by job role, task, or project. The user portal is `https://myapps.microsoft.com`, which requires an organizational account and access granted by an administrator, and is separate from the Azure portal.\n\n- **B** is wrong. Collections are a P1/P2 feature.\n- **C** is wrong. Collections are not an Office portal feature.\n- **D** is wrong. Collections are not part of entitlement management, and the stated requirement is P1 or P2.\n\nRelated: every app a user can access appears in the default **Apps** collection, and users can create their own personal collections from the My Apps portal. Admin-managed collections are created under **Enterprise applications > App Launchers**.",
    "source": "LP1 Module 2.8."
  },
  {
    "id": 45,
    "domain": "apps",
    "topic": "App governance",
    "stem": "Your security team wants to detect OAuth applications that access Microsoft 365 data through Microsoft Graph APIs, apply policies to risky apps, and automatically remediate suspicious apps.\n\nWhich statement describes the correct solution and scope?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID Governance, scoped to all enterprise applications regardless of protocol."
      },
      {
        "letter": "B",
        "text": "App governance, an add-on to Microsoft Defender for Cloud Apps, scoped to OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs."
      },
      {
        "letter": "C",
        "text": "Conditional Access, scoped to any application that uses delegated permissions."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra Permissions Management, scoped to workload identities in Azure subscriptions."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "App governance is an add-on feature to **Microsoft Defender for Cloud Apps** for **OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs**. It provides four pillars: **Insights** (single dashboard of third-party Microsoft 365 platform apps plus alerts), **Governance** (proactive and reactive policies), **Detection** (anomalies, non-compliant, malicious, risky apps), and **Remediation** (automatic remediation plus manual controls).\n\n- **A** is wrong on both scope and product. Governance covers access packages and reviews; app governance specifically targets OAuth/Graph apps.\n- **C** is wrong. Conditional Access controls access decisions; it does not detect or remediate risky OAuth apps.\n- **D** is wrong. Permissions Management is a cloud infrastructure entitlement management product, not OAuth app governance.\n\nEnablement requires Office 365 connected in Defender for Cloud Apps and the Office 365 Microsoft Entra ID apps enabled, then **Settings > Threat Protection > App Governance > Enable App Governance integration**.",
    "source": "LP1 Module 3.9."
  },
  {
    "id": 46,
    "domain": "governance",
    "topic": "Catalogs and access packages",
    "stem": "Contoso is delegating access governance to the marketing department. A marketing manager must be able to create bundles of resources and govern who receives them, without being a tenant administrator.\n\nWhich statement correctly describes the objects and the delegation chain?",
    "options": [
      {
        "letter": "A",
        "text": "An access package is a container of resources; a catalog is a bundle of resources with policies. The chain is Administrator → Catalog creator → Catalog owner → Access package manager."
      },
      {
        "letter": "B",
        "text": "A catalog is a container of resources and access packages; an access package is a bundle of resources governed by policies. The chain is Administrator → Catalog creator → Catalog owner → Access package manager."
      },
      {
        "letter": "C",
        "text": "A catalog and an access package are the same object with different display names."
      },
      {
        "letter": "D",
        "text": "Access packages are stored in enterprise applications and are governed by Conditional Access."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A **catalog** is a **container of related resources and access packages**, used so that non-administrators can build their own packages. An **access package** is a **bundle of resources that a team or project needs, governed with policies**, and it is **always contained in a catalog**. The delegation chain is **Administrator → Catalog creator → Catalog owner → Access package manager**, with catalog owners delegating package management by assigning the access package manager role.\n\n- **A** inverts the two definitions.\n- **C** is wrong. They are distinct objects in a one-to-many relationship.\n- **D** is wrong on both counts.\n\nPractical rules: whoever creates a catalog **becomes its first catalog owner**; a **catalog creator** who is not an administrator automatically becomes owner of the catalog they create; resources must exist in a catalog before they can be included in a package; and **a catalog can be deleted only if it has no access packages**. Access packages can govern group membership, enterprise application assignment, and SharePoint Online site membership directly, and licenses, Azure resources, and Entra roles indirectly through groups.",
    "source": "LP4 Module 1.2 / 1.3 / 1.4."
  },
  {
    "id": 47,
    "domain": "governance",
    "topic": "Access package policies",
    "stem": "Contoso creates one access package that bundles a security group, an enterprise application, and a SharePoint site. Internal employees and partner users from another Microsoft Entra directory both need access, with different approval requirements and different expiration periods.\n\nHow should this be modeled?",
    "options": [
      {
        "letter": "A",
        "text": "Two access packages in two catalogs, one per audience."
      },
      {
        "letter": "B",
        "text": "One access package with two policies, one for internal employees and one for external directory users."
      },
      {
        "letter": "C",
        "text": "One access package with a single policy that applies to both audiences."
      },
      {
        "letter": "D",
        "text": "One access package per resource, because policies apply to resources rather than to audiences."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A **policy** defines the access lifecycle — how users get access, who approves, and how long it lasts — and it is linked to an access package. A single access package can carry **multiple policies** for different audiences; the course's own example is one package with **two policies**, one for employees and one for external users.\n\n- **A** is wrong. The bundle is identical for both audiences, so duplicating the package and catalog adds maintenance without benefit.\n- **C** is wrong. A single policy would force identical approval and expiration rules on both audiences.\n- **D** is wrong. Policies govern how principals get access to the package, not individual resources.\n\nRelated: an external audience is modeled as a **connected organization**, and each connected organization can contain **only one directory or domain**. To specify the users of a connected organization you can use another Microsoft Entra directory, another non-Entra directory configured for direct federation, or a non-Entra directory whose users all share one domain name.",
    "source": "LP4 Module 1.2 / 1.7."
  },
  {
    "id": 48,
    "domain": "governance",
    "topic": "Connected organizations",
    "stem": "You are creating a connected organization for a partner company. The partner has three verified domains and wants users from all of them to be able to request access packages.\n\nWhat must you do?",
    "options": [
      {
        "letter": "A",
        "text": "Add one connected organization containing all three domains."
      },
      {
        "letter": "B",
        "text": "Create a separate connected organization for each domain, because only one directory or domain can be added per connected organization."
      },
      {
        "letter": "C",
        "text": "Add the partner as an access package manager so they can add their own domains."
      },
      {
        "letter": "D",
        "text": "Configure the partner domains as a single SAML/WS-Fed identity provider federation."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Only **one directory or domain** can be added per connected organization, so three domains require three connected organizations. When searching, you must enter the **entire domain name** and confirm the organization name and authentication type.\n\n- **A** is wrong. That is explicitly not supported.\n- **C** is wrong. Access package managers build packages and policies; they do not expand connected-organization scope.\n- **D** is wrong. Federation is an authentication mechanism for guests, not a way to group multiple domains into one connected organization.\n\nPrerequisites and behavior: the required role is **Identity Governance Administrator or User Administrator**; the path is **ID Governance > Entitlement management > Connected organizations > + Add connected organization**, with **Basics**, **Directory + domain**, **Sponsors**, and **Review + create** tabs. The state is automatically set to **Configured** on creation. **Sponsors** are optional, are internal or external users already in the directory, and act as the point of contact for the relationship.",
    "source": "LP4 Module 1.7."
  },
  {
    "id": 49,
    "domain": "governance",
    "topic": "External user lifecycle",
    "stem": "Contoso grants partners access exclusively through access packages. A partner user named Alex loses their last access package assignment. Several months later, Alex tries to request a different access package in the Contoso directory.\n\nWhat happens by default, and what should you verify?",
    "options": [
      {
        "letter": "A",
        "text": "Alex keeps sign-in access but loses resource access; the guest account is never deleted."
      },
      {
        "letter": "B",
        "text": "Alex is blocked from signing in when the last assignment is removed, and after 30 days the guest account is removed from the directory, so the request fails."
      },
      {
        "letter": "C",
        "text": "Alex's account is deleted immediately when the last assignment is removed."
      },
      {
        "letter": "D",
        "text": "Alex can sign in and re-request access, because guest accounts are excluded from lifecycle settings."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "The default lifecycle is: when an external user no longer has any access package assignments they are **blocked from signing in**, and after **30 days** the guest account is **removed from the directory**. A blocked user **cannot re-request the access package or request other access** in the directory, so Alex's request fails.\n\n- **A** is wrong. Blocking and removal are the defaults.\n- **C** is wrong. Removal happens after the 30-day window, and the interval is configurable, including a value of **0** days to remove immediately.\n- **D** is wrong. These settings exist precisely for invited external users.\n\nConfigure at **ID Governance > Entitlement management > Settings > Manage the lifecycle of external users**. Two cautions: **entitlement management only removes accounts that were invited through entitlement management**, so a guest who existed in the directory before receiving assignments remains; and do not enable blocking if the user will later need to request access to other packages.",
    "source": "LP4 Module 1.6; Module 1.8."
  },
  {
    "id": 50,
    "domain": "governance",
    "topic": "Access review licensing",
    "stem": "Contoso deploys access reviews. The licensing team asks exactly who needs a license.\n\nWhich statement is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Everyone in the tenant needs Microsoft Entra ID Governance."
      },
      {
        "letter": "B",
        "text": "Access reviews require Microsoft Entra ID Governance or Microsoft Entra Suite, and a P2 license is required for each reviewer, each self-reviewer, each group owner performing a review, and each application owner performing a review — but not for the Global Administrator or User Administrator who configure reviews and apply decisions."
      },
      {
        "letter": "C",
        "text": "Microsoft Entra ID P2 alone provides full access reviews for all scenarios."
      },
      {
        "letter": "D",
        "text": "Only the administrator who creates the review needs a license."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "Access reviews are a feature of **Microsoft Entra ID Governance** and require a **Governance or Entra Suite** subscription, with **P2 providing only limited capabilities**. The P2 requirement applies per person for: being assigned as a **reviewer**, performing a **self-review**, being a **group owner** performing a review, and being an **application owner** performing a review. The **Global Administrator or User Administrator** who sets up reviews, configures settings, or applies review decisions does **not** need P2.\n\n- **A** is wrong. Licensing is per actor, not tenant-wide.\n- **C** is wrong. P2 supplies limited capability only; Governance or Suite is the baseline.\n- **D** is wrong. It omits the reviewers and owners, who are the licensed population.\n\nRole requirements at creation differ by resource type. Creating a **group or application** review: Global Administrator, User Administrator, Identity Governance Administrator, Privileged Role Administrator (only for Entra role-assignable groups), or group owner. Creating a **Microsoft Entra role** review: Global Administrator or Privileged Role Administrator. Creating an **Azure resource role** review: Global Administrator, User Access Administrator, or resource Owner.",
    "source": "LP4 Module 2.2 / 2.3."
  },
  {
    "id": 51,
    "domain": "governance",
    "topic": "Access review configuration",
    "stem": "You are configuring a recurring monthly access review for a group. You want a backup reviewer when a user has no manager, and you want to know which reviewer options are available.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The maximum duration for a monthly review is 27 days, to avoid overlapping reviews."
      },
      {
        "letter": "B",
        "text": "A fallback reviewer can be specified for Managers of users and Group owner(s), but not for selected users or self-review."
      },
      {
        "letter": "C",
        "text": "You can select the application owner as a reviewer for an application access review."
      },
      {
        "letter": "D",
        "text": "For \"All Microsoft 365 groups with guest users\", you can choose a scope of Everyone."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "**A monthly review cannot exceed 27 days**, specifically to avoid overlapping reviews. A **fallback reviewer** is available only for **Managers of users** and **Group owner(s)**; it is used when the user has no manager in the directory or the group has no owner.\n\n- **C** is wrong. Applications do not necessarily have an owner, which is why **the application owner cannot be selected as a reviewer**. Group owner is available only for team or group reviews.\n- **D** is wrong. If you choose **All Microsoft 365 groups with guest users**, the only available scope is **Guest users only**.\n\nOther settings: reviewers can be group owners, selected users or groups, users reviewing their own access, or managers of users; recurrence is weekly, monthly, quarterly, semi-annually, or annually; a series can end never, on a specific date, or after a set number of occurrences; and the **inactive users** scope allows up to **730 days** of inactivity. Reviewers are chosen at creation and **cannot be changed once the review has started** — for a recurring series, editing **Series** changes future instances while **Current** changes only the active one.",
    "source": "LP4 Module 2.3 / 2.7."
  },
  {
    "id": 52,
    "domain": "governance",
    "topic": "Reviewer decisions",
    "stem": "Two reviewers are assigned to a review. Reviewer A approves a user's access on Monday. Reviewer B denies the same user's access on Wednesday. Separately, a third reviewer selects **Don't know** for another user.\n\nWhat is the result?",
    "options": [
      {
        "letter": "A",
        "text": "The first response wins, so the user stays approved; **Don't know** revokes access."
      },
      {
        "letter": "B",
        "text": "The last submitted response is recorded, so the denial wins; **Don't know** keeps access and is recorded in the audit logs."
      },
      {
        "letter": "C",
        "text": "The responses conflict and the review fails; **Don't know** escalates to the group owner."
      },
      {
        "letter": "D",
        "text": "Both users are removed because any denial or indecision triggers removal."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "With multiple reviewers, **the last submitted response is recorded**, so B's later denial overrides A's earlier approval. **Don't know** is a real option that **keeps the user's access** while recording the choice in the audit logs.\n\n- **A** is wrong on both points.\n- **C** is wrong. There is no conflict failure or escalation from Don't know.\n- **D** is wrong. Denied users are removed, but Don't know does not deny.\n\nTiming matters: denied users are **not removed immediately**. They are removed when the review period ends, or when an administrator stops the review — and only if **Auto apply results to resource** is enabled. The four options if reviewers don't respond are **No change**, **Remove access**, **Approve access**, and **Take recommendations**, and that setting **does not override manual decisions**: a final Deny still removes access. Recommendations come from two methods: **no sign-in within 30 days** and **peer outlier** deviation from the reporting structure, and they consider both interactive and non-interactive sign-ins.",
    "source": "LP4 Module 2.5 / 2.6."
  },
  {
    "id": 53,
    "domain": "governance",
    "topic": "Access reviews for synced groups and guests",
    "stem": "Contoso runs an access review over a group that is synchronized from on-premises Active Directory, and a second review scoped to guest users only.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "For the synchronized group, review decisions cannot change membership because the source of authority is on-premises; results are available as CSV or through Microsoft Graph."
      },
      {
        "letter": "B",
        "text": "For denied guests, the default action when the guest-specific option is not configurable is to remove membership from the resource."
      },
      {
        "letter": "C",
        "text": "For denied guests, the only available action is immediate permanent deletion from the tenant."
      },
      {
        "letter": "D",
        "text": "Access reviews can modify synchronized group membership if auto-apply is enabled."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "For groups synchronized from on-premises, **access reviews cannot change group membership** because the source of authority is on-premises; the results are delivered as **CSV or through Microsoft Graph** and acted on in the on-premises directory. For denied guests, the two actions are **remove the user's membership from the resource** (sign-in to the tenant continues to work) or **block the user from signing in for 30 days, then remove the user from the tenant** (reversible within 30 days). When the guest-specific action is not configurable — because the review is scoped to more than guests, or uses \"All Microsoft 365 groups with guest users\" — the **default is remove membership from the resource**.\n\n- **C** is wrong. The options are not immediate permanent deletion, and the block action is reversible for 30 days.\n- **D** is wrong. Auto-apply does not override the on-premises source of authority.\n\nRelated: guests assigned as reviewers who have not accepted their invitation **do not receive access-review emails**; reviewers are notified at the start of each review; reminders are sent **half-way through the duration**; and review activity is written to the Entra audit logs with activities such as Create access review, Approve decision, Deny decision, and Apply decision.",
    "source": "LP4 Module 2.2 / 2.3."
  },
  {
    "id": 54,
    "domain": "governance",
    "topic": "PIM fundamentals",
    "stem": "Contoso wants zero standing administrative access. The identity team proposes making every administrator eligible for their roles in Privileged Identity Management.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "PIM requires Microsoft Entra ID Premium P2."
      },
      {
        "letter": "B",
        "text": "Eligible assignments can be created outside PIM, in the standard Roles and administrators blade."
      },
      {
        "letter": "C",
        "text": "Two emergency access accounts should retain permanent Global Administrator assignments."
      },
      {
        "letter": "D",
        "text": "Permanent assignments are created only through PIM."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "PIM requires **Premium P2**, stated as a plain note in the course. The zero-standing-access model has exactly one documented exception: **two emergency access accounts** that keep **permanent Global Administrator** assignments.\n\n- **B** is wrong. **Eligible roles can only be assigned in PIM**; permanent active assignments are the ordinary Entra ID and Azure role assignments created elsewhere.\n- **D** is inverted for the same reason.\n\nEmergency account requirements in full: **two or more**, **cloud-only** using the **`.onmicrosoft.com`** domain, not federated or synchronized, no dependence on an individual's device or phone, credentials that do not expire or get cleaned up for lack of use, **permanent Global Administrator**, at least one account **excluded from all Conditional Access policies**, and at least one using an MFA mechanism **different** from other administrator accounts — also ensuring no per-user MFA policy applies. Validate them **at least every 90 days**, on IT staff changes, and on subscription changes, and monitor their sign-ins with alerts.",
    "source": "LP4 Module 3.2 / 3.9."
  },
  {
    "id": 55,
    "domain": "governance",
    "topic": "PIM role settings",
    "stem": "You are configuring PIM role settings. For the Global Administrator role you set activation duration to one hour and require approval. For Helpdesk Administrator you require a ticket number. An administrator who is eligible for Global Administrator is also configured as an approver.\n\nWhat is true?",
    "options": [
      {
        "letter": "A",
        "text": "The administrator can approve their own activation; approval completes only when all approvers respond."
      },
      {
        "letter": "B",
        "text": "The administrator cannot approve their own activation; if multiple approvers are configured, approval completes as soon as one of them approves or denies, and you cannot require approval from at least two users."
      },
      {
        "letter": "C",
        "text": "Self-approval is allowed only if MFA was performed during activation."
      },
      {
        "letter": "D",
        "text": "Approval can be configured to require at least two approvers."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A user who is eligible for a role and is also an approver of that role **cannot approve their own activation**. When multiple approvers are configured, **approval completes as soon as one approves or denies**, and you **cannot require approval from at least two users**. The default approver set is **all users who are privileged role administrators, whether permanent or eligible**.\n\n- **A** is wrong on both halves.\n- **C** is wrong. MFA is a separate activation requirement, not a condition that unlocks self-approval.\n- **D** is wrong. That capability does not exist.\n\nThe course's worked settings: **Global Administrator** — MFA yes, notification yes, ticket yes, approval yes with other Global Administrators as approvers, activation **1 hour**, permanent admin only for emergency accounts. **Exchange Administrator** — MFA yes, ticket no, activation **2 hour**. **Helpdesk Administrator** — MFA no, notification no, ticket yes, approval no, activation **8 hour**. Notification recipients on activation are the Global Administrator, Privileged Role Administrator, and Security Administrator.",
    "source": "LP4 Module 3.2 / 3.4."
  },
  {
    "id": 56,
    "domain": "governance",
    "topic": "PIM for Azure resources",
    "stem": "You need to bring Azure subscriptions under PIM management. Your account is a Global Administrator but is not an owner of the subscriptions.\n\nWhat must you do first, and what else is true?",
    "options": [
      {
        "letter": "A",
        "text": "Nothing — Global Administrator can onboard any subscription directly; there is a limit of 10 resources per tenant."
      },
      {
        "letter": "B",
        "text": "Only owners of subscriptions and management groups can bring resources under PIM management; a Global Administrator must first elevate access to manage all Azure subscriptions, and there is no limit to the number of resources you can manage."
      },
      {
        "letter": "C",
        "text": "Assign the User Access Administrator role at tenant scope, then onboard; the limit is 500 resources."
      },
      {
        "letter": "D",
        "text": "Enable PIM for Azure resources in the subscription's Identity blade; custom roles are not supported."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "**Only owners of subscriptions and management groups can bring those resources under PIM management.** A Global Administrator must first use **elevate access to manage all Azure subscriptions** to discover resources, and Microsoft advises getting each subscription owner's approval first. There is **no limit** to the number of resources you can manage with PIM.\n\n- **A** is wrong on both the permission and the limit.\n- **C** is wrong. The requirement is subscription or management group ownership, and there is no 500-resource cap. (500 is the role-assignment limit per management group.)\n- **D** is wrong. PIM supports **built-in and custom roles**, including Owner, User Access Administrator, Contributor, Security Admin, and Security Manager.\n\nAfter onboarding, PIM is available at **management group, subscription, resource group, and resource** levels, and managing a parent also manages child resources — though a newly added child must be **searched for in PIM** to be brought under management.",
    "source": "LP4 Module 3.3 / 3.6."
  },
  {
    "id": 57,
    "domain": "governance",
    "topic": "Privileged access groups",
    "stem": "Contoso has a \"Tier 0 Office Admins\" security group. Members need Exchange Administrator, Office Apps Administrator, Teams Administrator, and Search Administrator, but only occasionally, and the team wants a single just-in-time request.\n\nWhich statement is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Create four separate eligible assignments, because a group cannot hold multiple role eligibility."
      },
      {
        "letter": "B",
        "text": "Make the role-assignable group eligible for all four roles and enable it for privileged access; on activation the user's group membership is activated, granting permissions from all four roles with one request."
      },
      {
        "letter": "C",
        "text": "Assign the group as active for all four roles; PIM will then time-bound each activation automatically."
      },
      {
        "letter": "D",
        "text": "Privileged access groups activate the group object itself, which then grants all roles to all members at once."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "A role-assignable group that is brought under PIM management is called a **privileged access group**. You assign the group as **eligible** for the roles, then enable it for **Privileged Access** in the group's Activity section. The key mechanic: **the group is not activated — only the user's group membership is**, so one just-in-time request yields the permissions of all four roles.\n\n- **A** is wrong. A group can hold multiple role eligibilities; that is the point of the feature.\n- **C** is wrong. Active assignment removes the just-in-time requirement entirely.\n- **D** is wrong and is the precise trap: the group object is never activated, and activation is per user.\n\nFor role-assignable groups, membership can be managed only by the **Privileged Role Administrator, Global Administrator, and group owners**. PIM can require group owners to activate their Owner role before managing membership, and you can apply **different policies per group** — for example a lighter policy for trusted employees and an approval workflow for B2B partner guests.",
    "source": "LP4 Module 3.7."
  },
  {
    "id": 58,
    "domain": "governance",
    "topic": "Sign-in logs",
    "stem": "A service desk analyst cannot find a failed sign-in that a user reports from a background service. Another user's interactive sign-in appears in the portal two hours late.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The sign-ins report shows only interactive sign-ins; non-interactive service-to-service authentication is not displayed."
      },
      {
        "letter": "B",
        "text": "It can take up to two hours for sign-in records to appear in the portal."
      },
      {
        "letter": "C",
        "text": "Up to 2,500 records can be downloaded as CSV or JSON."
      },
      {
        "letter": "D",
        "text": "The sign-ins report requires Microsoft Entra ID P1 or P2."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "The sign-ins report displays only **interactive** sign-ins — those where a user manually signs in — so a background service's authentication will not appear. Records can take **up to two hours** to surface in the portal.\n\n- **C** is wrong. The download cap is the **most recent 250,000 records** as CSV or JSON, subject to retention policy. The 2,500 figure belongs to the risky-users and risky-sign-ins exports.\n- **D** is wrong. The sign-in activity report is available in **all editions** of Microsoft Entra ID, and any non-administrator can view their own sign-ins.\n\nAccess requires Security Administrator, Security Reader, Global Reader, or Reports Reader. Useful filters include Request ID, Correlation ID, Status (Success, Failure, Interrupted), Client app, and Conditional Access (**Not applied**, **Success**, **Failure**). You cannot use a multi-value field such as authentication details, Conditional Access data, or network location as a column.",
    "source": "LP4 Module 4.2."
  },
  {
    "id": 59,
    "domain": "governance",
    "topic": "Audit logs and SIEM export",
    "stem": "An auditor needs to find every consent granted to applications in the last week, and the security team wants to stream Microsoft Entra logs to Splunk.\n\nWhich approach is correct?",
    "options": [
      {
        "letter": "A",
        "text": "Filter audit logs by Category = ApplicationManagement and Date range = 7 days; export to a third-party SIEM by routing diagnostic settings to a single Azure Event Hubs namespace, which is Microsoft's recommended integration approach."
      },
      {
        "letter": "B",
        "text": "Use the sign-ins report with Client app = Browser; export with the legacy AzLog tool, which Microsoft recommends going forward."
      },
      {
        "letter": "C",
        "text": "Filter audit logs by Date range = 30 days and use wildcard search on Target."
      },
      {
        "letter": "D",
        "text": "Send logs directly to Splunk from the Entra portal without Azure Monitor."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "Audit logs are filtered by **Service**, **Category**, **Activity**, **Status**, **Target**, **Initiated by**, and **Date range**. Consent events appear under **Category = ApplicationManagement** with activity **Consent to application**. For SIEM, **Azure Monitor** is the pipeline and **Event Hubs is the Microsoft-recommended approach going forward**; route to a **single Azure Event Hubs** namespace and use multiple diagnostic settings per resource. Splunk consumes it through the **Azure Monitor Add-On for Splunk**.\n\n- **B** is wrong twice. Consent events are in the audit log, not the sign-in log, and **AzLog is the legacy** tool being replaced.\n- **C** is wrong. The audit log date-range filter offers **7 days, 24 hours, and Custom** — there is no 30-day preset — and Target is a **prefix** match, so wildcards do not work.\n- **D** is wrong. Azure Monitor is the required pipeline.\n\nTwo more details: **Target** and **Initiated by** are **case-sensitive** prefix matches, and the download cap is **250,000 records** as CSV or JSON. Other supported SIEMs are IBM QRadar (Microsoft Azure DSM plus Event Hubs protocol) and ArcSight (Event Hubs smart connector). Microsoft notes that **Entra logs are the only log type directly integrated with AzLog that are not yet available in Azure Monitor**.",
    "source": "LP4 Module 4.3 / 4.5."
  },
  {
    "id": 60,
    "domain": "governance",
    "topic": "Report licensing and Identity Secure Score",
    "stem": "Contoso has Microsoft Entra ID Free. The team wants to review application sign-in trends and measure identity security posture against Microsoft's recommendations.\n\nWhich statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Usage and insights requires Microsoft Entra ID P1 or P2; Identity Secure Score is available in all editions."
      },
      {
        "letter": "B",
        "text": "Both usage and insights and Identity Secure Score require P1 or P2."
      },
      {
        "letter": "C",
        "text": "Identity Secure Score is a percentage: some controls are binary, while others are scored as a percentage of total configuration — for example, protecting 5 of 100 users for a control worth 10.71% yields about 0.53%."
      },
      {
        "letter": "D",
        "text": "Identity Secure Score requires Microsoft Entra ID Governance."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "**Usage and insights** — the application-centric report showing the most used apps, apps with the most failed sign-ins, and top sign-in errors — requires **P1 or P2** and a Security Administrator, Security Reader, or Reports Reader role. **Identity Secure Score** is available in **all editions** and is a percentage indicating alignment with Microsoft's best-practice recommendations.\n\n- **B** is wrong. Only usage and insights is gated.\n- **D** is wrong. No Governance license is required.\n\nOn scoring: some controls are **binary** (100% when configured as recommended), others are a **percentage of total configuration**. The course's worked example: the MFA control is worth a maximum **10.71%**, and protecting **5 of 100** users yields **5/100 × 10.71% ≈ 0.53%**. The dashboard includes the score, a comparison against tenants in the **same industry and similar size**, a **trend graph**, and a list of improvement actions. Path: **Microsoft Entra ID > Security > Identity Secure Score**.",
    "source": "LP4 Module 4.6 / 4.7."
  },
  {
    "id": 61,
    "domain": "identity",
    "topic": "Temporary Access Pass onboarding",
    "stem": "A contractor starts tomorrow and has no company phone. The contractor must sign in once to register a FIDO2 security key, and the credential must stop working after it is used. The solution must not create a permanent password.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A Temporary Access Pass configured for one-time use and a short lifetime, with Temporary Access Pass enabled in the authentication methods policy."
      },
      {
        "letter": "B",
        "text": "A temporary password that must be changed at next sign-in."
      },
      {
        "letter": "C",
        "text": "A self-service password reset registration link sent by email."
      },
      {
        "letter": "D",
        "text": "An access package assignment that expires after one day."
      },
      {
        "letter": "E",
        "text": "A Windows Hello for Business PIN reset."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A **Temporary Access Pass (TAP)** is a time-limited passcode that can be configured as **one-time** or **multi-use**. It lets a user sign in to register passwordless methods, including a FIDO2 security key, without a permanent password.\n- TAP must be enabled in the **authentication methods policy**, and its lifetime must fall within the tenant's maximum TAP lifetime.\n\n- **B** creates a password, which the requirement forbids.\n- **C** assumes the user can already sign in and complete SSPR.\n- **D** grants resource access; it does not provide an authentication method.\n- **E** assumes Windows Hello for Business is already enrolled.",
    "source": "LP1 Module 2.4 / 2.5 (passwordless and temporary access pass)."
  },
  {
    "id": 62,
    "domain": "identity",
    "topic": "Cross-tenant synchronization",
    "stem": "Fabrikam has its own Microsoft Entra tenant. Contoso acquires Fabrikam. Fabrikam users must appear as guests in Contoso, and changes to their display name and department in Fabrikam must flow to Contoso automatically. Users must not redeem invitations manually.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure cross-tenant synchronization in the Fabrikam source tenant."
      },
      {
        "letter": "B",
        "text": "Enable automatic redemption for inbound cross-tenant synchronization in the Contoso target tenant."
      },
      {
        "letter": "C",
        "text": "Create a B2B collaboration invitation for every Fabrikam user."
      },
      {
        "letter": "D",
        "text": "Add Fabrikam as a connected organization in an entitlement management catalog."
      },
      {
        "letter": "E",
        "text": "Add Fabrikam as a federated domain in Contoso."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Cross-tenant synchronization** creates and maintains guest accounts in a target tenant from a source tenant. It keeps selected user attributes synchronized, so changes in Fabrikam flow to Contoso.\n- The target tenant must allow **inbound cross-tenant synchronization** and enable **automatic redemption** so users do not redeem a B2B invitation.\n\n- **C** creates one-time invitations and does not keep attributes synchronized.\n- **D** supports access packages, not continuous user provisioning.\n- **E** is domain federation, which is unrelated to guest account lifecycle.",
    "source": "LP1 Module 3.6 / 3.7 (cross-tenant access and synchronization)."
  },
  {
    "id": 63,
    "domain": "identity",
    "topic": "Cloud Sync vs Connect Sync",
    "stem": "Contoso has three Active Directory forests with no trusts between them. The synchronization server must not accept inbound connections from the internet, must support password hash synchronization, and must continue if one synchronization agent fails.\n\nWhat should you deploy?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra Cloud Sync with lightweight agents in each forest and at least two agents for high availability."
      },
      {
        "letter": "B",
        "text": "Microsoft Entra Connect Sync on a single server in staging mode."
      },
      {
        "letter": "C",
        "text": "Pass-through authentication agents in each forest."
      },
      {
        "letter": "D",
        "text": "An Active Directory Federation Services farm in each forest."
      },
      {
        "letter": "E",
        "text": "Microsoft Entra Connect Sync with directory synchronization disabled."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Cloud Sync** uses lightweight agents that make only **outbound** connections to Microsoft Entra ID, so no inbound firewall rule is required.\n- It supports **password hash synchronization**, multiple forests without trusts, and **high availability** when multiple agents are installed.\n\n- **B** is a single server and staging mode does not export changes.\n- **C** provides authentication, not directory synchronization.\n- **D** provides federation and still needs a synchronization source.\n- **E** stops directory synchronization entirely.",
    "source": "LP1 Module 4.2 (Cloud Sync)."
  },
  {
    "id": 64,
    "domain": "identity",
    "topic": "Seamless single sign-on",
    "stem": "Users on domain-joined computers on the corporate network are prompted for credentials when they open Microsoft 365. Password hash synchronization is already configured. You must remove the prompt without deploying federation, and users must still complete MFA when they work from home.\n\nWhat should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra seamless single sign-on."
      },
      {
        "letter": "B",
        "text": "Pass-through authentication."
      },
      {
        "letter": "C",
        "text": "Active Directory Federation Services."
      },
      {
        "letter": "D",
        "text": "Windows Hello for Business certificate trust."
      },
      {
        "letter": "E",
        "text": "Per-user MFA with trusted IPs disabled."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Seamless SSO** uses the Kerberos ticket of the signed-in domain user to sign the user in to Microsoft Entra ID without an extra prompt. It relies on the **AZUREADSSOACC** computer account created in Active Directory.\n- Because the user is still authenticating to Microsoft Entra ID, **Conditional Access MFA** continues to apply when the user is off the corporate network.\n\n- **B** replaces password hash synchronization and still prompts in this scenario.\n- **C** is federation, which the requirement excludes.\n- **D** changes the Windows sign-in method, not the browser prompt.\n- **E** does not provide single sign-on.",
    "source": "LP1 Module 4.3 (seamless single sign-on)."
  },
  {
    "id": 65,
    "domain": "identity",
    "topic": "External ID self-service sign-up",
    "stem": "Contoso wants consumers to sign up for a customer portal by using their own email address or a Google account. The sign-up page must show Contoso branding, and customers must manage their own profile without an invitation from Contoso.\n\nWhich solution should you use?",
    "options": [
      {
        "letter": "A",
        "text": "A Microsoft Entra External ID external tenant with a sign-up and sign-in user flow and social identity providers."
      },
      {
        "letter": "B",
        "text": "B2B collaboration with one invitation per customer."
      },
      {
        "letter": "C",
        "text": "Cross-tenant synchronization from a customer tenant."
      },
      {
        "letter": "D",
        "text": "An entitlement management connected organization."
      },
      {
        "letter": "E",
        "text": "Active Directory Federation Services with SAML claims."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Microsoft Entra External ID** external tenants provide consumer identity for apps, including **self-service sign-up**, **company branding**, social identity providers such as Google, and local email accounts.\n- A **user flow** defines the sign-up and sign-in experience and which identity providers are offered.\n\n- **B** requires an invitation and is designed for business guests.\n- **C** synchronizes users from another Microsoft Entra tenant, not consumers.\n- **D** governs access packages for existing users.\n- **E** requires a federation trust and does not provide self-service consumer sign-up.",
    "source": "LP1 Module 3.6 (external identities)."
  },
  {
    "id": 66,
    "domain": "identity",
    "topic": "Dynamic group rule syntax",
    "stem": "All Windows devices that are company-owned and not compliant must join a group automatically.\n\nWhich dynamic membership rule should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "`(device.deviceOSType -eq \"Windows\") -and (device.deviceOwnership -eq \"Company\") -and (device.isCompliant -eq False)`"
      },
      {
        "letter": "B",
        "text": "`(device.deviceOSType -eq \"Windows\") && (device.deviceOwnership -eq \"Company\")`"
      },
      {
        "letter": "C",
        "text": "`(user.deviceOSType -eq \"Windows\") -and (user.isCompliant -eq False)`"
      },
      {
        "letter": "D",
        "text": "`(device.deviceOSType -eq \"Windows\") -or (device.isCompliant -eq True)`"
      },
      {
        "letter": "E",
        "text": "`(device.deviceOSType -contains \"Windows\") -and (device.isCompliant -eq No)`"
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Dynamic device rules use the **`device.`** property prefix, the **`-eq`** comparison operator, and **`-and`** to require every condition.\n- The correct properties are **`deviceOSType`**, **`deviceOwnership`**, and **`isCompliant`**. Boolean values are **`True`** and **`False`**.\n\n- **B** uses unsupported C-style **`&&`** and omits the compliance condition.\n- **C** uses user properties for a device group.\n- **D** uses **`-or`**, which includes compliant devices.\n- **E** uses **`-contains`** and **`No`**, neither of which is valid here.",
    "source": "LP1 Module 3.4 (dynamic groups)."
  },
  {
    "id": 67,
    "domain": "identity",
    "topic": "Group-based licensing errors",
    "stem": "Licenses are assigned to users through a group. A new user in the United Kingdom receives the group membership, but the license is not assigned. The user object has no location configured.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Set the user's Usage location, either directly or through a directory synchronization mapping."
      },
      {
        "letter": "B",
        "text": "Assign the license directly to the user as well."
      },
      {
        "letter": "C",
        "text": "Convert the licensing group from Assigned to Dynamic."
      },
      {
        "letter": "D",
        "text": "Remove the user from the group and add the user again."
      },
      {
        "letter": "E",
        "text": "Enable group-based licensing on the tenant."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Group-based licensing requires a valid **Usage location** before a license with location-dependent service plans can be assigned. If the location is missing, the assignment fails with a licensing error.\n- Set the location on the user, or map it from the on-premises directory so new users receive it automatically.\n\n- **B** fails for the same reason.\n- **C** changes membership, not licensing prerequisites.\n- **D** does not add the missing location.\n- **E** is already working for other users.",
    "source": "LP1 Module 3.3 (group-based licensing)."
  },
  {
    "id": 68,
    "domain": "identity",
    "topic": "Custom security attribute roles",
    "stem": "Contoso uses custom security attributes to store clearance levels. The identity team must create attribute sets and definitions. The security team must assign attribute values to users. Neither team may receive the Global Administrator role.\n\nWhich two roles should you assign? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Attribute Definition Administrator."
      },
      {
        "letter": "B",
        "text": "Attribute Assignment Administrator."
      },
      {
        "letter": "C",
        "text": "User Administrator."
      },
      {
        "letter": "D",
        "text": "Attribute Definition Reader."
      },
      {
        "letter": "E",
        "text": "Privileged Role Administrator."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Attribute Definition Administrator** can create and manage attribute sets and custom security attribute definitions.\n- **Attribute Assignment Administrator** can assign values of custom security attributes to users, service principals, and managed identities.\n\n- **C** manages users but not custom security attribute definitions or assignments by default.\n- **D** is read-only.\n- **E** manages role assignments, not attribute schema or values.",
    "source": "LP1 Module 3.8 (custom security attributes)."
  },
  {
    "id": 69,
    "domain": "identity",
    "topic": "Restricted management administrative units",
    "stem": "Contoso has emergency access and executive administrator accounts. Helpdesk staff must not be able to reset the passwords or change the properties of these accounts, even when they hold the User Administrator role.\n\nWhat should you create?",
    "options": [
      {
        "letter": "A",
        "text": "A restricted management administrative unit that contains the protected accounts."
      },
      {
        "letter": "B",
        "text": "A standard administrative unit that contains the protected accounts and assign Helpdesk Administrator to it."
      },
      {
        "letter": "C",
        "text": "A dynamic security group that contains the protected accounts."
      },
      {
        "letter": "D",
        "text": "A Privileged Identity Management eligible assignment for User Administrator."
      },
      {
        "letter": "E",
        "text": "A Conditional Access policy that blocks password reset."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A **restricted management administrative unit (RMAU)** protects its members from directory-level administrators. Only users with a role scoped directly to the RMAU can manage those objects.\n- Adding the protected accounts to an RMAU prevents a tenant-scoped User Administrator or Helpdesk Administrator from managing them.\n\n- **B** grants the helpdesk more control.\n- **C** groups do not restrict administrative scope.\n- **D** changes how the admin activates a role, not what the role can manage.\n- **E** cannot restrict directory password reset operations.",
    "source": "LP1 Module 1.4 / 1.5 (administrative units)."
  },
  {
    "id": 70,
    "domain": "identity",
    "topic": "Entra Connect staging mode",
    "stem": "Contoso must test new synchronization rules on a second Microsoft Entra Connect server before changing production. Production synchronization must continue during the test.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Install Microsoft Entra Connect on the second server, enable staging mode, import and validate the configuration, then promote the server by disabling staging mode and stopping the original server."
      },
      {
        "letter": "B",
        "text": "Enable staging mode on the production server while the rules are tested."
      },
      {
        "letter": "C",
        "text": "Replace Microsoft Entra Connect with Cloud Sync on the second server."
      },
      {
        "letter": "D",
        "text": "Export the synchronization rules from the second server and import them into production without testing."
      },
      {
        "letter": "E",
        "text": "Install pass-through authentication agents on the second server."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A server in **staging mode** imports and synchronizes data but does not export changes to Microsoft Entra ID. It is the supported way to validate a new configuration alongside production.\n- After validation, disable staging mode on the new server and stop the original server so only one server exports.\n\n- **B** would put production into staging mode and stop updates.\n- **C** changes the synchronization engine and does not test the Connect rules.\n- **D** skips validation entirely.\n- **E** adds an authentication agent, not a staging synchronization server.",
    "source": "LP1 Module 4.1 (Microsoft Entra Connect)."
  },
  {
    "id": 71,
    "domain": "identity",
    "topic": "License service plan conflicts",
    "stem": "A user has an E3 license assigned directly and an E5 license assigned through a group. A feature that is included in E5 is unavailable, and the license details show the service plan as disabled.\n\nWhat is the cause?",
    "options": [
      {
        "letter": "A",
        "text": "A service plan disabled in one license overrides the same plan enabled in another license."
      },
      {
        "letter": "B",
        "text": "The user's Usage location is set to the wrong country."
      },
      {
        "letter": "C",
        "text": "The user is a member of too many licensing groups."
      },
      {
        "letter": "D",
        "text": "The E5 group is nested inside another group."
      },
      {
        "letter": "E",
        "text": "The tenant has no Microsoft Entra ID P1 licenses."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- When multiple licenses are assigned, a **service plan that is disabled in any one of them stays disabled**. Disabling the plan in the E3 license overrides the enabled plan in E5.\n- Resolve the conflict by enabling the plan in the E3 assignment, or by removing the conflicting license.\n\n- **B** blocks license assignment entirely rather than selectively disabling a plan.\n- **C** and **D** do not cause this specific service-plan conflict.\n- **E** affects feature entitlement, not the disabled state of a plan.",
    "source": "LP1 Module 3.3 (license service plans)."
  },
  {
    "id": 72,
    "domain": "identity",
    "topic": "Federated to managed domain conversion",
    "stem": "Contoso retires its AD FS farm. The domain `contoso.com` is currently configured as a federated domain, and users must sign in with their cloud passwords after the cutover.\n\nWhat should you do to `contoso.com`?",
    "options": [
      {
        "letter": "A",
        "text": "Convert the domain from federated to managed."
      },
      {
        "letter": "B",
        "text": "Verify the domain again and set it as the primary domain."
      },
      {
        "letter": "C",
        "text": "Enable seamless single sign-on and leave the domain federated."
      },
      {
        "letter": "D",
        "text": "Delete the domain and recreate it as a custom domain."
      },
      {
        "letter": "E",
        "text": "Add the domain to a new tenant."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Changing the domain's **AuthenticationType** from **Federated** to **Managed** makes Microsoft Entra ID the authentication authority. Users then sign in with their cloud password, validated by password hash synchronization or pass-through authentication.\n- Plan the change so that password hash synchronization or pass-through authentication is healthy before the cutover.\n\n- **B** does not change the authentication authority.\n- **C** still relies on federation.\n- **D** would disrupt every user and is unnecessary.\n- **E** moves users to a different tenant.",
    "source": "LP1 Module 4.4 / 4.5 (domain management)."
  },
  {
    "id": 73,
    "domain": "identity",
    "topic": "Organizational unit filtering",
    "stem": "Only users in the Sales and Marketing organizational units must synchronize to Microsoft Entra ID. Users in every other organizational unit must never appear in the cloud directory.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Organizational unit filtering in Microsoft Entra Connect or Cloud Sync."
      },
      {
        "letter": "B",
        "text": "A dynamic group that contains only Sales and Marketing users."
      },
      {
        "letter": "C",
        "text": "An attribute-based synchronization rule that sets accountEnabled to False."
      },
      {
        "letter": "D",
        "text": "A Conditional Access policy scoped to Sales and Marketing."
      },
      {
        "letter": "E",
        "text": "A bulk update that deletes the other users from Microsoft Entra ID."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Organizational unit filtering** limits directory synchronization to selected OUs. Objects in excluded OUs are not imported or exported to Microsoft Entra ID.\n- Cloud Sync also supports scoping synchronization to specific OUs or groups.\n\n- **B** groups do not control which objects synchronize.\n- **C** leaves the accounts present but disabled.\n- **D** controls access, not directory synchronization.\n- **E** is destructive and would be repeated on the next synchronization cycle.",
    "source": "LP1 Module 4.1 / 4.2 (synchronization scoping)."
  },
  {
    "id": 74,
    "domain": "auth",
    "topic": "Authentication strengths",
    "stem": "Administrators must use phishing-resistant MFA to access the Azure portal. A password plus a Microsoft Authenticator push notification must not satisfy the requirement.\n\nWhich Conditional Access configuration should you use?",
    "options": [
      {
        "letter": "A",
        "text": "A grant control that requires the built-in Phishing-resistant MFA authentication strength."
      },
      {
        "letter": "B",
        "text": "A grant control that requires multifactor authentication."
      },
      {
        "letter": "C",
        "text": "A grant control that requires a compliant device."
      },
      {
        "letter": "D",
        "text": "A session control that sets sign-in frequency to every hour."
      },
      {
        "letter": "E",
        "text": "A policy that blocks legacy authentication clients."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Authentication strengths** let a Conditional Access policy require specific method combinations. The built-in **Phishing-resistant MFA** strength accepts methods such as FIDO2 security keys, Windows Hello for Business, and certificate-based authentication.\n- Password plus Authenticator push satisfies the weaker **Multifactor authentication** strength but not the phishing-resistant strength.\n\n- **B** allows push notifications.\n- **C** checks device state, not the authentication method.\n- **D** changes how often a user signs in.\n- **E** blocks older client protocols.",
    "source": "LP2 Module 3.4 (authentication strengths)."
  },
  {
    "id": 75,
    "domain": "auth",
    "topic": "Passkey profiles and attestation",
    "stem": "Security requires FIDO2 passkeys only from two approved hardware vendors. The solution must verify that a passkey is genuine and must block passkeys from every other authenticator model.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A passkey (FIDO2) profile with attestation enforced and an allow list of the approved authenticator AAGUIDs."
      },
      {
        "letter": "B",
        "text": "A Conditional Access policy that requires a compliant device."
      },
      {
        "letter": "C",
        "text": "An authentication strength that requires passwordless MFA."
      },
      {
        "letter": "D",
        "text": "A named location that contains the office IP addresses."
      },
      {
        "letter": "E",
        "text": "Windows Hello for Business certificate trust."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Passkey profiles** provide group-scoped FIDO2 settings, including **enforce attestation**, allowed passkey types, and **AAGUID** restrictions.\n- An **AAGUID** identifies an authenticator model. Allowing only the approved AAGUIDs blocks every other model, and attestation verifies that the authenticator is genuine.\n\n- **B** does not inspect the authenticator model.\n- **C** requires a class of methods but does not restrict vendors.\n- **D** restricts network location.\n- **E** configures Windows Hello for Business, not FIDO2 security keys.",
    "source": "LP2 Module 2.2 / 2.3 (passkeys and FIDO2)."
  },
  {
    "id": 76,
    "domain": "auth",
    "topic": "Windows Hello for Business trust models",
    "stem": "Which three statements about Windows Hello for Business trust models are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Key trust registers the public key of the Windows Hello for Business key pair with the device object in Microsoft Entra ID, so no client authentication certificate is required."
      },
      {
        "letter": "B",
        "text": "Certificate trust requires a public key infrastructure such as Active Directory Certificate Services."
      },
      {
        "letter": "C",
        "text": "Cloud Kerberos trust can provide passwordless access to on-premises resources without deploying AD CS."
      },
      {
        "letter": "D",
        "text": "Key trust requires a client authentication certificate on every device."
      },
      {
        "letter": "E",
        "text": "Certificate trust stores only the public key in Microsoft Entra ID."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **Key trust** registers the public key of the Windows Hello for Business key pair with the device object in Microsoft Entra ID. It does not require client certificates or AD CS.\n- **Certificate trust** issues a certificate to the device or user from a PKI, so AD CS or another CA is required.\n- **Cloud Kerberos trust** uses Microsoft Entra Kerberos to obtain a partial TGT, giving passwordless access to on-premises resources without AD CS.\n\n- **D** describes certificate trust, not key trust.\n- **E** describes key trust, not certificate trust.",
    "source": "LP2 Module 2.4 (Windows Hello for Business)."
  },
  {
    "id": 77,
    "domain": "auth",
    "topic": "Temporary Access Pass lifetime",
    "stem": "An administrator must issue a Temporary Access Pass that remains valid for five days and can be used more than once.\n\nWhat is the maximum lifetime that can be configured for the pass?",
    "options": [
      {
        "letter": "A",
        "text": "30 days."
      },
      {
        "letter": "B",
        "text": "7 days."
      },
      {
        "letter": "C",
        "text": "14 days."
      },
      {
        "letter": "D",
        "text": "24 hours."
      },
      {
        "letter": "E",
        "text": "90 days."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A Temporary Access Pass can be configured as **one-time** or **multi-use**, and its lifetime can be set up to a maximum of **30 days**. The tenant policy sets the maximum that administrators can choose.\n- Five days is within that maximum, so the requirement can be met.\n\n- **B**, **C**, **D**, and **E** are either shorter than five days or exceed the supported maximum.",
    "source": "LP2 Module 2.5 (Temporary Access Pass)."
  },
  {
    "id": 78,
    "domain": "auth",
    "topic": "Number matching and MFA fatigue",
    "stem": "Users report repeated Microsoft Authenticator prompts that they did not initiate, and several users approved one of the prompts. You must reduce the risk without removing MFA.\n\nWhat should you enable first?",
    "options": [
      {
        "letter": "A",
        "text": "Number matching and additional context for Microsoft Authenticator notifications."
      },
      {
        "letter": "B",
        "text": "SMS as the only MFA method."
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy that blocks all mobile devices."
      },
      {
        "letter": "D",
        "text": "A shorter smart lockout duration."
      },
      {
        "letter": "E",
        "text": "Passwordless phone sign-in for every user."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Number matching** requires the user to enter the two-digit number shown on the sign-in screen into the Authenticator app, so a blind push approval no longer succeeds.\n- **Additional context** shows the application and location, helping users recognize an unexpected prompt.\n\n- **B** weakens MFA and does not solve prompt bombing.\n- **C** blocks legitimate devices.\n- **D** has no effect on push approvals.\n- **E** changes the sign-in method but does not require the user to match a number.",
    "source": "LP2 Module 2.2 / 2.3 (Microsoft Authenticator)."
  },
  {
    "id": 79,
    "domain": "auth",
    "topic": "Conditional Access device filters",
    "stem": "A Conditional Access policy must apply only to company-owned Windows devices that are not compliant. Personal devices must not be affected.\n\nWhich condition should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A device filter rule of `device.deviceOwnership -eq \"Company\" -and device.isCompliant -eq False`, with the Windows platform selected."
      },
      {
        "letter": "B",
        "text": "A device filter rule of `device.isCompliant -eq False` only."
      },
      {
        "letter": "C",
        "text": "A device filter rule of `user.deviceOwnership -eq \"Company\"`."
      },
      {
        "letter": "D",
        "text": "A grant control that requires a compliant device."
      },
      {
        "letter": "E",
        "text": "A named location that contains the corporate network."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Filter for devices** is a Conditional Access condition that evaluates device properties with a rule expression. Using `deviceOwnership` and `isCompliant` together limits the policy to company-owned, noncompliant devices.\n- Selecting the **Windows** platform further narrows the policy to Windows devices.\n\n- **B** also matches personal devices that are not compliant.\n- **C** uses a user property in a device filter.\n- **D** blocks noncompliant devices but does not target company-owned devices only.\n- **E** evaluates network location, not device ownership or compliance.",
    "source": "LP2 Module 3.2 / 3.3 (Conditional Access conditions)."
  },
  {
    "id": 80,
    "domain": "auth",
    "topic": "Conditional Access policy evaluation",
    "stem": "Which three statements about how Conditional Access policies are evaluated are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Every policy that applies to a user and sign-in must be satisfied."
      },
      {
        "letter": "B",
        "text": "A block policy overrides grant controls from other policies."
      },
      {
        "letter": "C",
        "text": "Report-only mode evaluates a policy and records the result without enforcing it."
      },
      {
        "letter": "D",
        "text": "Excluding a user from one policy excludes the user from every policy."
      },
      {
        "letter": "E",
        "text": "When two policies require different grant controls, the user can choose either one."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- Conditional Access evaluates all applicable policies. The user must satisfy the grant controls of **every** policy that applies.\n- A **block** policy denies the sign-in regardless of grant controls in other policies.\n- **Report-only** mode shows what the policy would do in the sign-in log without blocking or challenging the user.\n\n- **D** is false: an exclusion applies only to the policy that contains it.\n- **E** is false: the user must satisfy both requirements, not choose one.",
    "source": "LP2 Module 3.1 / 3.2 (Conditional Access evaluation)."
  },
  {
    "id": 81,
    "domain": "auth",
    "topic": "Trusted named locations",
    "stem": "Users on the corporate network egress through the public IP range `203.0.113.0/24`. They must not receive MFA prompts when they access Microsoft 365 from that network. When they work from home, MFA must still be required.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A named location that contains `203.0.113.0/24` marked as trusted, excluded from the Conditional Access MFA policy."
      },
      {
        "letter": "B",
        "text": "Per-user MFA with the corporate IP range added as a trusted IP."
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy that requires a compliant device for all users."
      },
      {
        "letter": "D",
        "text": "Security defaults with MFA enforced for all users."
      },
      {
        "letter": "E",
        "text": "A sign-in frequency session control of 30 days."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Named locations** define network boundaries by IP range or country. Marking the corporate range as **trusted** lets a Conditional Access policy exclude that location from an MFA requirement.\n- Home and other external networks remain in scope, so MFA is still required there.\n\n- **B** is a legacy per-user MFA setting; it does not integrate with Conditional Access policy scoping and is not the recommended approach.\n- **C** does not exempt the corporate network.\n- **D** enforces MFA everywhere.\n- **E** changes session lifetime, not the MFA requirement.",
    "source": "LP2 Module 3.2 / 3.5 (named locations)."
  },
  {
    "id": 82,
    "domain": "auth",
    "topic": "Session controls",
    "stem": "Finance users on unmanaged devices must sign in again after four hours. They must not remain signed in after they close the browser.\n\nWhich two session controls should you configure? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Sign-in frequency of four hours."
      },
      {
        "letter": "B",
        "text": "Persistent browser session set to Never."
      },
      {
        "letter": "C",
        "text": "Continuous access evaluation in strict enforcement mode."
      },
      {
        "letter": "D",
        "text": "Sign-in frequency of 30 days."
      },
      {
        "letter": "E",
        "text": "Application enforced restrictions."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Sign-in frequency** controls how often a user must sign in again. Four hours enforces the reauthentication requirement.\n- **Persistent browser session** set to **Never** prevents the browser from keeping the session after it closes.\n\n- **C** revokes tokens when critical events occur; it is not a four-hour timer.\n- **D** allows a much longer session.\n- **E** limits data access in unmanaged browsers but does not set the reauthentication interval.",
    "source": "LP2 Module 3.6 (session controls)."
  },
  {
    "id": 83,
    "domain": "auth",
    "topic": "Authentication methods policy",
    "stem": "Which three statements about the Microsoft Entra authentication methods policy are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "A method can be enabled for specific groups and excluded from other groups."
      },
      {
        "letter": "B",
        "text": "Microsoft Authenticator settings include number matching and additional context."
      },
      {
        "letter": "C",
        "text": "Enabling Temporary Access Pass requires the method to be enabled in the policy."
      },
      {
        "letter": "D",
        "text": "FIDO2 security keys work for all users as soon as the tenant is created."
      },
      {
        "letter": "E",
        "text": "The policy applies only to users who hold privileged directory roles."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- The authentication methods policy supports **group targeting**, so different users can be allowed different methods.\n- It controls **Authenticator** behavior, including **number matching** and **additional context**.\n- **Temporary Access Pass** must be enabled in the policy before administrators can issue passes.\n\n- **D** is false: FIDO2 must be enabled and configured, and users must register a key.\n- **E** is false: the policy applies to all targeted users, not only privileged roles.",
    "source": "LP2 Module 2.1 / 2.2 (authentication methods policy)."
  },
  {
    "id": 84,
    "domain": "auth",
    "topic": "Self-service password reset methods",
    "stem": "Users must reset their passwords by using Microsoft Authenticator or SMS. Security questions must not be available. Administrators must also be able to reset their own passwords.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Enable SSPR for all users, require two methods, enable Authenticator and SMS, and disable security questions."
      },
      {
        "letter": "B",
        "text": "Enable SSPR for users only and require one method."
      },
      {
        "letter": "C",
        "text": "Enable email one-time passcode as the only SSPR method."
      },
      {
        "letter": "D",
        "text": "Enable per-user MFA and disable SSPR for administrators."
      },
      {
        "letter": "E",
        "text": "Require users to call the helpdesk and verify their identity."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **SSPR** can be enabled for all users or selected groups. Enabling **Authenticator** and **SMS** gives users the required methods.\n- **Administrators always require two methods** when they use SSPR, so requiring two methods for everyone matches the administrator behavior.\n- Disabling **security questions** removes that method.\n\n- **B** does not meet the two-method requirement for administrators.\n- **C** uses a method the requirement excludes.\n- **D** does not provide SSPR.\n- **E** is not self-service.",
    "source": "LP2 Module 2.6 (self-service password reset)."
  },
  {
    "id": 85,
    "domain": "auth",
    "topic": "Password writeback",
    "stem": "A hybrid tenant uses Microsoft Entra Connect. Users must reset their passwords in the cloud, and the new password must be written back to on-premises Active Directory.\n\nWhich two components are required? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Password writeback enabled in Microsoft Entra Connect or Cloud Sync."
      },
      {
        "letter": "B",
        "text": "Microsoft Entra ID P1 or P2 licenses for the users who reset passwords."
      },
      {
        "letter": "C",
        "text": "Active Directory Federation Services."
      },
      {
        "letter": "D",
        "text": "Seamless single sign-on."
      },
      {
        "letter": "E",
        "text": "A read-only domain controller in every site."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Password writeback** is the connector feature that sends a cloud password change back to Active Directory. It can be enabled in Microsoft Entra Connect or Cloud Sync.\n- SSPR with writeback requires **Microsoft Entra ID P1 or P2** for the users who use the feature.\n\n- **C** is an authentication topology, not a writeback component.\n- **D** reduces sign-in prompts but does not write passwords back.\n- **E** is unrelated to password writeback.",
    "source": "LP2 Module 2.6 / 4.2 (password writeback)."
  },
  {
    "id": 86,
    "domain": "auth",
    "topic": "Identity Protection user risk",
    "stem": "Users who are detected with leaked credentials must change their password before they can access Microsoft 365. Users at medium risk must not be blocked.\n\nWhich policy should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A user risk policy set to High with the Require password change control."
      },
      {
        "letter": "B",
        "text": "A sign-in risk policy set to High with the Block access control."
      },
      {
        "letter": "C",
        "text": "The MFA registration policy for all users."
      },
      {
        "letter": "D",
        "text": "Security defaults with MFA enforced."
      },
      {
        "letter": "E",
        "text": "A Conditional Access policy that requires a compliant device."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **User risk** represents the probability that an identity is compromised. A user risk policy can require a **password change** when risk reaches the configured level.\n- Setting the threshold to **High** leaves medium-risk users unaffected, which matches the requirement.\n- After the password change, Identity Protection can dismiss the risk.\n\n- **B** evaluates the risk of a specific sign-in and blocks rather than remediates.\n- **C** encourages MFA registration but does not respond to leaked credentials.\n- **D** enforces MFA but does not require a password change.\n- **E** checks device compliance.",
    "source": "LP2 Module 3.7 (Identity Protection)."
  },
  {
    "id": 87,
    "domain": "auth",
    "topic": "Certificate-based authentication",
    "stem": "Which three statements about certificate-based authentication (CBA) in Microsoft Entra ID are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "CBA can satisfy MFA when the certificate is configured as a multifactor authentication method."
      },
      {
        "letter": "B",
        "text": "You upload the root or intermediate CA certificates and enable CBA in the authentication methods policy."
      },
      {
        "letter": "C",
        "text": "Certificates are mapped to users by using the certificate principal name (UPN) or the RFC822 name."
      },
      {
        "letter": "D",
        "text": "CBA requires the domain to be federated."
      },
      {
        "letter": "E",
        "text": "CBA works only on Windows devices."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **CBA** authenticates a user with an X.509 certificate. When configured for MFA, the certificate satisfies a multifactor requirement without an additional prompt.\n- Administrators upload the trusted **root or intermediate CA** certificates and enable CBA in the authentication methods policy.\n- User binding uses the **principal name (UPN)** or the **RFC822** name in the certificate.\n\n- **D** is false: CBA works with managed domains.\n- **E** is false: CBA is supported on multiple platforms and browsers.",
    "source": "LP2 Module 2.7 (certificate-based authentication)."
  },
  {
    "id": 88,
    "domain": "auth",
    "topic": "Global Secure Access Internet Access",
    "stem": "Contoso wants internet-bound traffic from managed Windows devices inspected by Microsoft's Security Service Edge. On-premises applications must remain reachable through Private Access.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Install the Global Secure Access client and enable the Internet Access traffic forwarding profile."
      },
      {
        "letter": "B",
        "text": "Deploy Azure Application Proxy connectors for every internet site."
      },
      {
        "letter": "C",
        "text": "Configure a site-to-site VPN to Microsoft Azure."
      },
      {
        "letter": "D",
        "text": "Create a Conditional Access policy that blocks unmanaged devices."
      },
      {
        "letter": "E",
        "text": "Enable Security defaults in Microsoft Entra ID."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Global Secure Access** uses a client and **traffic forwarding profiles**. The **Internet Access** profile sends internet traffic through Microsoft's Security Service Edge for filtering and inspection.\n- **Private Access** is a separate profile for private applications, so both can be enabled together.\n\n- **B** publishes internal apps and does not inspect internet traffic.\n- **C** connects networks but does not provide Microsoft's security edge.\n- **D** controls access decisions, not traffic forwarding.\n- **E** is a baseline identity security setting.",
    "source": "LP2 Module 5.1 / 5.2 (Global Secure Access)."
  },
  {
    "id": 89,
    "domain": "apps",
    "topic": "Workload identity federation",
    "stem": "A GitHub Actions workflow must deploy resources to Azure without storing a client secret in the repository or in Azure Key Vault.\n\nWhat should you configure on the app registration?",
    "options": [
      {
        "letter": "A",
        "text": "A federated identity credential that trusts the GitHub OpenID Connect issuer and the repository's subject claim."
      },
      {
        "letter": "B",
        "text": "A client secret with a 24-month expiration stored as a GitHub secret."
      },
      {
        "letter": "C",
        "text": "A certificate uploaded to the app registration and exported to the runner."
      },
      {
        "letter": "D",
        "text": "A system-assigned managed identity on the GitHub-hosted runner."
      },
      {
        "letter": "E",
        "text": "A service principal password stored in a pipeline variable."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Workload identity federation** lets an external identity provider, such as GitHub Actions, obtain a short-lived token from Microsoft Entra ID. The app registration trusts the external **issuer** and a specific **subject** claim.\n- No client secret or certificate is stored, so there is nothing to leak or rotate.\n\n- **B** and **E** store a secret.\n- **C** still requires certificate material on the runner.\n- **D** is not possible on a GitHub-hosted runner, and managed identities are for Azure-hosted resources.",
    "source": "LP1 Module 4.6 / 4.7 (workload identity federation)."
  },
  {
    "id": 90,
    "domain": "apps",
    "topic": "Managed identity lifecycle",
    "stem": "Which three statements about managed identities are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "A system-assigned identity is deleted when the Azure resource is deleted."
      },
      {
        "letter": "B",
        "text": "A user-assigned identity can be attached to multiple Azure resources."
      },
      {
        "letter": "C",
        "text": "A managed identity can authenticate to resources that support Microsoft Entra authentication without storing credentials."
      },
      {
        "letter": "D",
        "text": "A user-assigned identity is tied to the lifecycle of a single virtual machine."
      },
      {
        "letter": "E",
        "text": "A managed identity can be used as a client secret for an app registration."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- A **system-assigned** identity shares the lifecycle of its Azure resource; deleting the resource deletes the identity.\n- A **user-assigned** identity is a standalone Azure resource that can be attached to several resources.\n- Managed identities obtain tokens from Microsoft Entra ID, so no secret is stored in code or configuration.\n\n- **D** describes a system-assigned identity.\n- **E** is false: managed identities are service principals, not credentials for an app registration.",
    "source": "LP1 Module 4.6 / 4.7 (managed identities)."
  },
  {
    "id": 91,
    "domain": "apps",
    "topic": "SCIM provisioning",
    "stem": "Users are created in a human resources system and must be provisioned automatically into a SaaS application. When a user leaves, the SaaS account must be disabled within an hour.\n\nWhich feature should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Automatic provisioning with SCIM and attribute mappings for the enterprise application."
      },
      {
        "letter": "B",
        "text": "SAML single sign-on for the enterprise application."
      },
      {
        "letter": "C",
        "text": "An access review for the SaaS application."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra Application Proxy."
      },
      {
        "letter": "E",
        "text": "Privileged Identity Management for the SaaS application."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **SCIM provisioning** creates, updates, and disables accounts in the target application. **Attribute mappings** determine which directory values populate the application's user fields.\n- The provisioning job can deactivate a leaver's account automatically when the user is disabled or removed from scope.\n\n- **B** authenticates users but does not create or disable accounts.\n- **C** reviews access periodically; it does not provision accounts.\n- **D** publishes on-premises apps.\n- **E** manages privileged role activation.",
    "source": "LP1 Module 3.7 (application provisioning)."
  },
  {
    "id": 92,
    "domain": "apps",
    "topic": "SAML identifier mismatch",
    "stem": "A SAML-based enterprise application has just been configured. Users can authenticate, but the application returns an audience mismatch error after the SAML response is posted.\n\nWhat should you check first?",
    "options": [
      {
        "letter": "A",
        "text": "The Identifier (Entity ID) configured in the enterprise application matches the value the application expects."
      },
      {
        "letter": "B",
        "text": "The Reply URL (Assertion Consumer Service URL) matches the application's callback path."
      },
      {
        "letter": "C",
        "text": "The SAML signing certificate has not expired."
      },
      {
        "letter": "D",
        "text": "The user has been assigned to the application."
      },
      {
        "letter": "E",
        "text": "The application's implicit grant settings are enabled."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- The **Identifier (Entity ID)** is the audience value that the application validates in the SAML assertion. If it differs from the expected value, the application rejects the assertion with an audience mismatch.\n- Correct the identifier in the enterprise application's single sign-on configuration.\n\n- **B** affects where the response is posted, not the audience.\n- **C** produces a signature or certificate error.\n- **D** produces an assignment or sign-in error before the assertion is posted.\n- **E** applies to OpenID Connect implicit flows, not SAML audience validation.",
    "source": "LP1 Module 3.5 (SAML single sign-on)."
  },
  {
    "id": 93,
    "domain": "apps",
    "topic": "Admin consent workflow",
    "stem": "Users must be able to request access to third-party applications. A designated security team must review every request, and users must not be able to grant consent themselves.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "The admin consent workflow with a reviewer group, and user consent disabled."
      },
      {
        "letter": "B",
        "text": "A Conditional Access policy that blocks third-party applications."
      },
      {
        "letter": "C",
        "text": "An access package with an approval policy."
      },
      {
        "letter": "D",
        "text": "Privileged Identity Management for the Application Administrator role."
      },
      {
        "letter": "E",
        "text": "A dynamic group that contains all users who request access."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- The **admin consent workflow** lets users request consent and routes the request to configured **reviewers**. Reviewers approve or deny from the Microsoft Entra admin center.\n- Disabling **user consent** ensures users cannot grant consent themselves.\n\n- **B** blocks the apps instead of allowing a reviewed request.\n- **C** governs access packages, not application consent.\n- **D** manages role activation.\n- **E** does not collect or route consent requests.",
    "source": "LP1 Module 3.6 (admin consent workflow)."
  },
  {
    "id": 94,
    "domain": "apps",
    "topic": "Publisher verification",
    "stem": "An independent software vendor wants a verified publisher badge on its multitenant application and wants to reduce the warnings users see during consent.\n\nWhat should the vendor do?",
    "options": [
      {
        "letter": "A",
        "text": "Complete publisher verification in Partner Center with a Microsoft Partner Network account and associate the app registration with the verified publisher."
      },
      {
        "letter": "B",
        "text": "Purchase Microsoft Entra ID P2 for every customer tenant."
      },
      {
        "letter": "C",
        "text": "Add a DNS TXT record that contains the application ID."
      },
      {
        "letter": "D",
        "text": "Publish the application in the Azure Marketplace."
      },
      {
        "letter": "E",
        "text": "Convert the app registration to a managed identity."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Publisher verification** confirms that the publisher of an app is a legitimate Microsoft Partner Network member. The verified publisher can associate its Partner Center account with the app registration.\n- Verified apps show a **verified publisher** badge and produce fewer consent warnings.\n\n- **B** does not verify the publisher.\n- **C** is a domain-verification step for a custom domain, not publisher verification.\n- **D** is a marketplace listing, not publisher verification.\n- **E** is unrelated to a multitenant application.",
    "source": "LP1 Module 3.6 / 3.9 (publisher verification and app governance)."
  },
  {
    "id": 95,
    "domain": "apps",
    "topic": "User consent policies",
    "stem": "Which three statements about user consent and app consent policies are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "A user consent policy can allow consent only for apps from verified publishers."
      },
      {
        "letter": "B",
        "text": "A user consent policy can block consent for applications that request high-risk permissions."
      },
      {
        "letter": "C",
        "text": "The admin consent workflow lets users request consent from a designated reviewer."
      },
      {
        "letter": "D",
        "text": "Disabling user consent prevents administrators from granting tenant-wide consent."
      },
      {
        "letter": "E",
        "text": "User consent policies apply only to guest users."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **App consent policies** define conditions under which users may consent, including publisher verification and the risk level of the requested permissions.\n- The **admin consent workflow** provides a reviewed path when user consent is not allowed.\n\n- **D** is false: administrators can still grant consent.\n- **E** is false: consent policies apply to member and guest users, not guests only.",
    "source": "LP1 Module 3.6 (app consent policies)."
  },
  {
    "id": 96,
    "domain": "apps",
    "topic": "Application Proxy Kerberos delegation",
    "stem": "You must publish an on-premises IIS application that uses Windows Integrated Authentication. No inbound ports can be opened, and users must sign in with Microsoft Entra ID.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra Application Proxy with a connector and Kerberos constrained delegation to a service account."
      },
      {
        "letter": "B",
        "text": "A site-to-site VPN between Azure and the on-premises network."
      },
      {
        "letter": "C",
        "text": "An Azure Firewall DNAT rule for the IIS server."
      },
      {
        "letter": "D",
        "text": "SAML single sign-on directly to the IIS application."
      },
      {
        "letter": "E",
        "text": "Global Secure Access Private Access without a connector."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Application Proxy** publishes the internal application through an outbound-only connector, so no inbound port is required.\n- For **Windows Integrated Authentication**, the connector uses **Kerberos constrained delegation (KCD)** to request a Kerberos ticket for the user and present it to the IIS application.\n\n- **B** and **C** expose the network or the server and do not provide Entra authentication.\n- **D** requires application changes and does not address integrated Windows authentication.\n- **E** requires a connector for private applications.",
    "source": "LP1 Module 3.8 (Application Proxy)."
  },
  {
    "id": 97,
    "domain": "apps",
    "topic": "App credential rotation",
    "stem": "An app registration uses a client secret that expires in 30 days. You must eliminate secret-based credentials and avoid another outage.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Replace the client secret with a certificate or a federated identity credential, and monitor credential expiration."
      },
      {
        "letter": "B",
        "text": "Extend the client secret expiration to two years."
      },
      {
        "letter": "C",
        "text": "Store the client secret in Azure Key Vault and keep using it."
      },
      {
        "letter": "D",
        "text": "Assign a managed identity to the app registration."
      },
      {
        "letter": "E",
        "text": "Rotate the client secret every month."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A **certificate** or a **federated identity credential** removes the shared secret from the application. Federated credentials are preferred when the app runs on a platform that supports OpenID Connect.\n- Credential expiration should be monitored so a future change does not cause another outage.\n\n- **B**, **C**, and **E** still rely on a client secret.\n- **D** is not how an app registration obtains a managed identity; managed identities are separate Azure resources.",
    "source": "LP1 Module 3.5 / 4.6 (app credentials)."
  },
  {
    "id": 98,
    "domain": "apps",
    "topic": "Multitenant account types",
    "stem": "An application must accept users from any Microsoft Entra tenant but must reject personal Microsoft accounts.\n\nWhich supported account type should you select?",
    "options": [
      {
        "letter": "A",
        "text": "Accounts in any organizational directory (Any Microsoft Entra directory - Multitenant)."
      },
      {
        "letter": "B",
        "text": "Accounts in any organizational directory and personal Microsoft accounts."
      },
      {
        "letter": "C",
        "text": "Accounts in this organizational directory only (single tenant)."
      },
      {
        "letter": "D",
        "text": "Personal Microsoft accounts only."
      },
      {
        "letter": "E",
        "text": "Azure AD B2C social accounts only."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Accounts in any organizational directory** allows users from any Microsoft Entra tenant to sign in, while excluding personal Microsoft accounts.\n- This is the standard multitenant configuration for business applications.\n\n- **B** includes personal accounts.\n- **C** limits sign-in to Contoso.\n- **D** excludes organizational accounts.\n- **E** is a consumer identity scenario, not a multitenant app registration.",
    "source": "LP1 Module 3.5 / 4.6 (app registration account types)."
  },
  {
    "id": 99,
    "domain": "governance",
    "topic": "Lifecycle workflows",
    "stem": "New hires must be added to their department group and have their manager notified on their first day. The process must run automatically when a new employee record appears in Microsoft Entra ID.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A lifecycle workflow with a joiner trigger and the required built-in tasks."
      },
      {
        "letter": "B",
        "text": "A dynamic group with a rule based on the department attribute."
      },
      {
        "letter": "C",
        "text": "An access package with an automatic assignment policy."
      },
      {
        "letter": "D",
        "text": "A PIM eligible assignment for the department group."
      },
      {
        "letter": "E",
        "text": "A provisioning job for the department group."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Lifecycle workflows** automate joiner, mover, and leaver tasks. A **joiner** trigger can run when a new employee is created or when the employee hire date arrives.\n- Built-in tasks can add group membership and send notifications to the manager.\n\n- **B** updates membership but does not notify the manager or schedule first-day tasks.\n- **C** grants access through an access package.\n- **D** manages role activation.\n- **E** provisions accounts to applications.",
    "source": "LP4 Module 1.6 / 1.7 (lifecycle workflows)."
  },
  {
    "id": 100,
    "domain": "governance",
    "topic": "PIM activation requirements",
    "stem": "Administrators must activate a privileged role for no more than four hours. Each activation must include a justification and approval by a manager.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "The PIM role settings for the role, with a four-hour maximum activation duration, approval required, and justification required."
      },
      {
        "letter": "B",
        "text": "A Conditional Access policy that requires MFA for administrators."
      },
      {
        "letter": "C",
        "text": "An access review for users assigned to the role."
      },
      {
        "letter": "D",
        "text": "An access package that expires after four hours."
      },
      {
        "letter": "E",
        "text": "A dynamic group that contains administrators."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **PIM role settings** control activation requirements for a role, including **maximum activation duration**, **approval**, and **justification**.\n- Setting the duration to four hours and enabling approval and justification meets every requirement.\n\n- **B** adds an authentication requirement but not time limits or approval.\n- **C** reviews existing assignments periodically.\n- **D** governs resource access packages, not directory role activation.\n- **E** does not control activation.",
    "source": "LP4 Module 3.2 / 3.3 (PIM role settings)."
  },
  {
    "id": 101,
    "domain": "governance",
    "topic": "PIM authentication context",
    "stem": "Activation of the Global Administrator role must require phishing-resistant MFA. Other Conditional Access policies that target administrators must not affect role activation.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A PIM role setting that requires a Conditional Access authentication context, plus a Conditional Access policy that targets that authentication context and requires a phishing-resistant authentication strength."
      },
      {
        "letter": "B",
        "text": "A PIM role setting that requires MFA on activation."
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy that targets all administrators and requires MFA."
      },
      {
        "letter": "D",
        "text": "An access review that requires reviewers to approve each activation."
      },
      {
        "letter": "E",
        "text": "A PIM role setting that requires approval and justification."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- PIM can require a **Conditional Access authentication context** during activation. The authentication context is a dedicated scope that only the matching Conditional Access policy targets.\n- A policy that applies to that authentication context can require a **phishing-resistant authentication strength**, leaving other administrator policies separate.\n\n- **B** requires MFA but cannot distinguish phishing-resistant methods.\n- **C** affects other administrator sessions.\n- **D** adds approval, not a specific authentication method.\n- **E** adds approval and justification but not authentication strength.",
    "source": "LP4 Module 3.2 / 3.4 (PIM and authentication context)."
  },
  {
    "id": 102,
    "domain": "governance",
    "topic": "PIM alerts",
    "stem": "The security team must be notified when a privileged role is assigned outside PIM and when a role has an excessive number of permanent administrators.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "PIM alerts with notification recipients configured for the relevant alert rules."
      },
      {
        "letter": "B",
        "text": "An access review for every privileged role."
      },
      {
        "letter": "C",
        "text": "A sign-in log export to Azure Monitor."
      },
      {
        "letter": "D",
        "text": "The Identity Secure Score."
      },
      {
        "letter": "E",
        "text": "A Conditional Access policy that blocks privileged roles."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **PIM alerts** detect conditions such as **roles assigned outside PIM**, too many permanent administrators, and stale assignments.\n- Each alert can send email notifications to configured recipients and appears in the PIM alerts page.\n\n- **B** reviews access but does not produce these event alerts.\n- **C** stores logs but does not evaluate PIM-specific conditions.\n- **D** reports a security posture score.\n- **E** controls access but does not alert on assignments.",
    "source": "LP4 Module 3.4 (PIM alerts)."
  },
  {
    "id": 103,
    "domain": "governance",
    "topic": "Access package assignment policy",
    "stem": "Contractors must request access to a group. Their manager must approve the request, access must expire after 90 days, and access must be reviewed every quarter.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "An access package assignment policy with manager approval, a 90-day expiration, and a quarterly access review."
      },
      {
        "letter": "B",
        "text": "A PIM eligible assignment for the group."
      },
      {
        "letter": "C",
        "text": "A standalone access review for the group."
      },
      {
        "letter": "D",
        "text": "A dynamic group based on the contractor attribute."
      },
      {
        "letter": "E",
        "text": "A Conditional Access policy that requires MFA."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- An **access package assignment policy** defines who can request access, the **approval** requirements, the **expiration**, and the **access review** schedule.\n- A manager approval, 90-day expiration, and quarterly review are all policy settings.\n\n- **B** manages role activation, not group access requests.\n- **C** reviews access but does not handle requests or expiration.\n- **D** grants membership automatically without approval.\n- **E** adds an authentication requirement.",
    "source": "LP4 Module 2.1 / 2.2 (entitlement management)."
  },
  {
    "id": 104,
    "domain": "governance",
    "topic": "Access review scheduling",
    "stem": "Which three statements about Microsoft Entra access reviews are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "A review can be configured to recur on a schedule, such as monthly or quarterly."
      },
      {
        "letter": "B",
        "text": "Auto-apply results can remove access when a reviewer denies it or does not respond, depending on the configured behavior."
      },
      {
        "letter": "C",
        "text": "Reviewers can be the users themselves, their managers, or a specified group of reviewers."
      },
      {
        "letter": "D",
        "text": "Every review decision must be approved by a Global Administrator."
      },
      {
        "letter": "E",
        "text": "Access reviews can review only guest users."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- Access reviews support **recurring schedules** and can run monthly, quarterly, annually, or at a custom interval.\n- **Auto-apply results** updates the resource after the review. The \"if reviewers don't respond\" setting can remove access, approve access, or take the system recommendation.\n- Reviewers can be **the users**, **their managers**, or **specific users or groups**.\n\n- **D** is false: reviewers make decisions within their scope.\n- **E** is false: reviews can target members, guests, and other scopes.",
    "source": "LP4 Module 2.3 / 2.4 (access reviews)."
  },
  {
    "id": 105,
    "domain": "governance",
    "topic": "Separation of duties",
    "stem": "Contoso must prevent a user from holding both the Vendor payments and Vendor approval access packages at the same time.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "An incompatible access package relationship on one of the access packages."
      },
      {
        "letter": "B",
        "text": "An access review that removes one of the packages."
      },
      {
        "letter": "C",
        "text": "A Conditional Access policy that blocks the vendor application."
      },
      {
        "letter": "D",
        "text": "A PIM eligible assignment for the vendor role."
      },
      {
        "letter": "E",
        "text": "A dynamic group that contains both vendor teams."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Entitlement management supports **incompatible access packages**. When a user already has one package, a request for the incompatible package is blocked or requires remediation.\n- This enforces **separation of duties** without manual monitoring.\n\n- **B** detects the conflict only after the fact.\n- **C** blocks the application rather than the conflicting assignments.\n- **D** is unrelated to access package compatibility.\n- **E** does not prevent the conflict.",
    "source": "LP4 Module 2.2 (entitlement management and separation of duties)."
  },
  {
    "id": 106,
    "domain": "governance",
    "topic": "Access review auto-apply",
    "stem": "Reviewers complete an access review and deny several users, but the users still have access the next day.\n\nWhat setting should you enable?",
    "options": [
      {
        "letter": "A",
        "text": "Auto apply results to the resource when the review completes."
      },
      {
        "letter": "B",
        "text": "A shorter review duration."
      },
      {
        "letter": "C",
        "text": "Just-in-time access for the resource."
      },
      {
        "letter": "D",
        "text": "Approval required for access requests."
      },
      {
        "letter": "E",
        "text": "A longer access package expiration."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Access reviews do not change access by themselves unless **auto-apply** is enabled. With auto-apply, the decisions are written to the reviewed resource when the review completes.\n- Without it, an administrator must apply the results manually.\n\n- **B** changes how long reviewers have, not whether decisions are applied.\n- **C** and **D** govern new access requests.\n- **E** changes expiration, not review application.",
    "source": "LP4 Module 2.4 (access review results)."
  },
  {
    "id": 107,
    "domain": "governance",
    "topic": "Audit and sign-in log retention",
    "stem": "Which three statements about Microsoft Entra audit logs and sign-in logs are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Interactive sign-in logs are retained for 30 days in Microsoft Entra ID."
      },
      {
        "letter": "B",
        "text": "Diagnostic settings can stream logs to Azure Monitor Log Analytics, Azure Storage, or Azure Event Hubs."
      },
      {
        "letter": "C",
        "text": "Audit logs record changes such as user creation and role assignment."
      },
      {
        "letter": "D",
        "text": "Sign-in logs are retained for 10 years in Microsoft Entra ID without exporting them."
      },
      {
        "letter": "E",
        "text": "Audit logs are available only with Microsoft Entra ID P2."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- Microsoft Entra ID retains **interactive sign-in logs for 30 days** in the portal.\n- **Diagnostic settings** can export logs to Log Analytics, Storage, or Event Hubs for longer retention and analysis.\n- **Audit logs** record directory changes, including user creation and role assignments.\n\n- **D** is false: long retention requires export.\n- **E** is false: audit logs are available with the included Entra ID features, not only P2.",
    "source": "LP4 Module 4.3 / 4.5 (monitoring and log export)."
  },
  {
    "id": 108,
    "domain": "governance",
    "topic": "Terms of use",
    "stem": "Users must accept a legal notice before they access a cloud application. The acceptance must be recorded for audit.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A terms of use document in Microsoft Entra ID and a Conditional Access policy that requires it."
      },
      {
        "letter": "B",
        "text": "An acceptable use policy in Microsoft Intune."
      },
      {
        "letter": "C",
        "text": "An access review for the application."
      },
      {
        "letter": "D",
        "text": "An access package with an approval policy."
      },
      {
        "letter": "E",
        "text": "A user consent policy for third-party applications."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Terms of use** presents a PDF during sign-in and records the user's acceptance in the audit log.\n- A **Conditional Access** policy adds the terms of use as a grant control for the selected cloud apps.\n\n- **B** applies to device compliance, not Entra sign-in.\n- **C** reviews access, not legal acceptance.\n- **D** controls access package requests.\n- **E** governs application consent.",
    "source": "LP4 Module 3.5 (terms of use)."
  },
  {
    "id": 109,
    "domain": "governance",
    "topic": "Lifecycle workflow custom task",
    "stem": "A leaver workflow must call an external REST API to disable an on-premises account. The API is implemented as an Azure Logic App.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "A custom task extension in the lifecycle workflow that calls the Logic App."
      },
      {
        "letter": "B",
        "text": "An automatic provisioning job for the on-premises application."
      },
      {
        "letter": "C",
        "text": "A webhook in an access package assignment policy."
      },
      {
        "letter": "D",
        "text": "A PIM role activation notification."
      },
      {
        "letter": "E",
        "text": "A Conditional Access policy for the Logic App."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Lifecycle workflow custom task extensions** call an Azure Logic App during a workflow. This lets a workflow run logic that is not available as a built-in task.\n- The extension can disable the on-premises account through the Logic App's connector.\n\n- **B** provisions accounts through a connector; it does not run inside the leaver workflow.\n- **C** is not a lifecycle workflow feature.\n- **D** sends role notifications.\n- **E** controls access to the Logic App.",
    "source": "LP4 Module 1.7 (lifecycle workflow extensions)."
  },
  {
    "id": 110,
    "domain": "governance",
    "topic": "Catalog delegation",
    "stem": "The identity team manages entitlement management. The application team must be able to create and manage its own access packages in a dedicated catalog without receiving Global Administrator.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Create a catalog for the application team and add the team as catalog owners."
      },
      {
        "letter": "B",
        "text": "Assign the Application Administrator role to the application team."
      },
      {
        "letter": "C",
        "text": "Make the application team PIM-eligible for Global Administrator."
      },
      {
        "letter": "D",
        "text": "Create an access review for the catalog."
      },
      {
        "letter": "E",
        "text": "Add the application team to a dynamic security group."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A **catalog** is a container for access packages and their resources. **Catalog owners** can create and manage access packages in that catalog without tenant-wide administrative rights.\n- Delegating catalog ownership keeps entitlement management scoped to the application team.\n\n- **B** manages app registrations and enterprise apps, not access packages.\n- **C** grants far more privilege than required.\n- **D** reviews access but does not delegate catalog management.\n- **E** changes group membership only.",
    "source": "LP4 Module 2.1 (catalogs and delegated administration)."
  },
  {
    "id": 111,
    "domain": "identity",
    "topic": "Soft-deleted group recovery",
    "stem": "A cloud security group that grants access to the finance application was deleted 10 days ago. The group had 240 members and is referenced by a Conditional Access policy. You must bring back the same group object, including its object ID and members, so the existing references keep working.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Restore the group from Deleted groups in the Microsoft Entra admin center within the 30-day soft-delete window."
      },
      {
        "letter": "B",
        "text": "Recreate the group with the same display name and add the 240 members from an exported list."
      },
      {
        "letter": "C",
        "text": "Restore the group from the Active Directory Recycle Bin on a domain controller and wait for synchronization."
      },
      {
        "letter": "D",
        "text": "Open a support request to restore the group after it has been permanently deleted."
      },
      {
        "letter": "E",
        "text": "Enable hard deletion protection on the group and wait for the next synchronization cycle."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Microsoft 365 groups and cloud security groups are **soft deleted for 30 days**. During that window, **Deleted groups** in the Microsoft Entra admin center or the `Restore-MgDirectoryDeletedItem` cmdlet restores the object with its **object ID, membership, owners, and assignments** intact.\n- Global Administrator, Groups Administrator, and the group's owner (when group settings allow it) can restore the group.\n\n- **B** creates a new object with a new ID, so the Conditional Access policy and the app assignment still point at nothing.\n- **C** covers only on-premises objects; a cloud-only group has no entry in the AD Recycle Bin.\n- **D** cannot work: after 30 days the group is hard deleted and cannot be restored.\n- **E** blocks permanent deletion for seven days after a soft delete; it does not recover anything.",
    "source": "LP1 Module 1.2 / 3.1 (group lifecycle and recovery)."
  },
  {
    "id": 112,
    "domain": "apps",
    "topic": "Deleted app registration recovery",
    "stem": "A production web application stopped signing users in after an administrator deleted its app registration. The enterprise application no longer appears, and the application's client ID and permissions are gone. The deletion happened yesterday.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Restore the deleted application registration from Deleted applications within the 30-day soft-delete window."
      },
      {
        "letter": "B",
        "text": "Create a new app registration and update the client ID in the application's configuration."
      },
      {
        "letter": "C",
        "text": "Restore the enterprise application; the app registration is recreated with the same client ID."
      },
      {
        "letter": "D",
        "text": "Re-run the infrastructure deployment pipeline to recreate the registration."
      },
      {
        "letter": "E",
        "text": "Restore the application from the Azure Key Vault soft-delete store."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Application registrations and service principals are **soft deleted for 30 days**. Restoring the application object from **Deleted applications** (or with `Restore-MgDirectoryDeletedItem`) brings back the same **application (client) ID**, credentials, API permissions, and service principal.\n- Restore first, then confirm that the enterprise application and its user assignments are present.\n\n- **B** and **D** create a new application ID, which invalidates consent, assignments, tokens, and every client that uses the old ID.\n- **C** is backwards: the service principal depends on the application object, and restoring only the service principal does not recreate the registration.\n- **E** is unrelated; Key Vault soft delete protects vault objects, not directory applications.",
    "source": "LP1 Module 3.5 / 3.9 (application objects and recovery)."
  },
  {
    "id": 113,
    "domain": "identity",
    "topic": "Hard deletion protection",
    "stem": "Contoso must protect a small set of critical cloud groups and app registrations from being permanently deleted out of the recycle bin. Administrators must still be able to delete and restore those objects normally.\n\nWhich three statements about Hard Deletion Protection are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "It blocks permanent deletion during the first seven days after an object is soft deleted."
      },
      {
        "letter": "B",
        "text": "It can be enabled for cloud-only groups, applications, and service principals."
      },
      {
        "letter": "C",
        "text": "Enabling it for an object is permanent and cannot be undone."
      },
      {
        "letter": "D",
        "text": "It automatically restores an object when the protection window ends."
      },
      {
        "letter": "E",
        "text": "It prevents the initial soft deletion of the object."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **Hard Deletion Protection** in Microsoft Entra Backup and Recovery blocks **hard deletion for seven days** after an object is soft deleted. Restoring the object keeps the protection, and deleting it again starts a new seven-day window.\n- Supported object types include **cloud-only groups, applications, service principals, and users that are not synchronized from on-premises**.\n- Protection is **permanent once enabled** and cannot be switched off. If it is enabled by mistake, the object must be soft deleted and left for seven days before it can be permanently removed.\n- Enabling protection requires the **Microsoft Entra Backup Administrator** role and is recorded in the audit log. Separately, a **protected action** can require a Conditional Access authentication context for `microsoft.directory/deletedItems/delete`.\n\n- **D** is false: protection only blocks permanent deletion, and recovery remains a manual restore.\n- **E** is false: soft deletion still succeeds immediately; only the hard-delete step is blocked.",
    "source": "LP1 Module 1.4 / 4.1 (directory protection and recovery)."
  },
  {
    "id": 114,
    "domain": "identity",
    "topic": "Company branding",
    "stem": "Contoso wants a customized sign-in page for its Microsoft 365 users, including a background image, a banner logo, and help desk text. Only the default language will be used.\n\nWhich two statements about company branding are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The Company branding menu option requires Microsoft Entra ID P1, P2, or an Office 365 license."
      },
      {
        "letter": "B",
        "text": "The background image can be up to 1920x1080 pixels and no larger than 300,000 bytes."
      },
      {
        "letter": "C",
        "text": "The sign-in page language can be changed after branding is configured."
      },
      {
        "letter": "D",
        "text": "Sign-in page text is limited to 256 characters."
      },
      {
        "letter": "E",
        "text": "The username hint may contain a link to a password reset page."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Company branding** appears under **Identity > Company branding** in the Microsoft Entra admin center. The menu option is present only with **Microsoft Entra ID P1, P2, or Office 365 (for Office 365 apps)**.\n- The **sign-in page background image** must be .png or .jpg, no larger than **1920x1080 pixels**, and no more than **300,000 bytes**.\n- The **banner logo** appears after the user enters a username and on the **My Apps** portal.\n\n- **C** is false: the language is **set automatically as the default and can't be changed**.\n- **D** is false: sign-in page text can be up to **1,024 characters**.\n- **E** is false: the **username hint** must be Unicode with no links or code and is capped at **64 characters**.",
    "source": "LP1 Module 1.2 (configure company branding)."
  },
  {
    "id": 115,
    "domain": "identity",
    "topic": "Tenant-wide user settings",
    "stem": "Contoso must stop non-administrator members from creating app registrations, but one developer must keep that ability. The company also wants to block non-administrators from using the Microsoft Entra admin center while leaving PowerShell and Visual Studio access unchanged.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "In User settings, set Users can register applications to No, assign the developer the Application Developer role, and set Restrict access to the Microsoft Entra administration portal to Yes."
      },
      {
        "letter": "B",
        "text": "In User settings, set Users can register applications to No and enable security defaults."
      },
      {
        "letter": "C",
        "text": "Create a Conditional Access policy that blocks the Azure portal for all non-administrators."
      },
      {
        "letter": "D",
        "text": "Change the External collaboration settings so guests can't invite other guests."
      },
      {
        "letter": "E",
        "text": "Assign every member the Directory Readers role."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Tenant-wide defaults for member users live in **Identity > Users > User settings**. Setting **Users can register applications** to **No** removes the default ability, and the **Application Developer** role grants it back to named individuals.\n- **Restrict access to the Microsoft Entra administration portal** set to **Yes** blocks non-administrators from the portal. It **does not** restrict PowerShell or other clients such as Visual Studio. To let a specific non-administrator use the portal, assign any administrative role, such as **Directory Readers**.\n\n- **B** is wrong: security defaults govern MFA and legacy authentication, not app registration.\n- **C** is wrong: Conditional Access targets resources, not the administration portal, and would not honor the per-user exception.\n- **D** is a guest setting and does not affect member app registration.\n- **E** is wrong: Directory Readers grants read access and does not remove the ability to register apps.",
    "source": "LP1 Module 1.8 (configure tenant-wide settings)."
  },
  {
    "id": 116,
    "domain": "auth",
    "topic": "Conditional Access optimization agent",
    "stem": "Contoso wants to use the Microsoft Entra Conditional Access optimization agent to find users who are not covered by an MFA policy, block legacy authentication and device code flow, and consolidate overlapping policies.\n\nWhich three requirements apply? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID P1 licensing."
      },
      {
        "letter": "B",
        "text": "Available Security Compute Units (SCU)."
      },
      {
        "letter": "C",
        "text": "The Security Administrator role, or higher, to activate the agent the first time."
      },
      {
        "letter": "D",
        "text": "Microsoft Entra ID P2 for every user."
      },
      {
        "letter": "E",
        "text": "A Microsoft Sentinel workspace."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- The agent needs at least **Microsoft Entra ID P1**, available **Security Compute Units**, and the **Security Administrator** role or higher for the first activation. **Conditional Access Administrators** can be assigned if they also have Security Copilot access.\n- **Device-based controls** (device compliance, app protection policies, and domain-joined devices) additionally require **Microsoft Intune** licenses.\n- The agent scans for users and apps that policy does not cover and offers **one-click remediation** with **Apply suggestion**. It also proposes **policy consolidation** when several policies share the same grant controls, and it can block **legacy authentication** and **device code flow**.\n\n- **D** is false: P1 is the stated minimum.\n- **E** is false: Sentinel is a SIEM and is not required.",
    "source": "LP2 Module 3.11 (Conditional Access optimization agent)."
  },
  {
    "id": 117,
    "domain": "auth",
    "topic": "Workload identity risk",
    "stem": "Contoso wants Microsoft Entra Identity Protection to detect risky service principals and then block those identities with Conditional Access.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Microsoft Entra ID P2 licensing is required for workload identity risk."
      },
      {
        "letter": "B",
        "text": "Conditional Access for workload identities applies to single-tenant service principals registered in the tenant."
      },
      {
        "letter": "C",
        "text": "Managed identities and multitenant third-party SaaS apps are included in workload identity Conditional Access policies."
      },
      {
        "letter": "D",
        "text": "Workload identity detections require a Microsoft Defender for Identity sensor on each domain controller."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Workload identity risk** requires **Microsoft Entra ID P2**. The **Risky workload identities** blade and the **Workload identity detections** tab are available to **Security Administrator**, **Security Operator**, and **Security Reader**.\n- **Conditional Access for workload identities** can block a service principal that Identity Protection marks at risk. It applies to **single-tenant service principals registered in your tenant**. **Third-party SaaS, multitenant apps, and managed identities are out of scope.**\n- Detections include **Microsoft Entra threat intelligence**, **suspicious sign-ins** baselined over **2 to 60 days**, **unusual addition of credentials to an OAuth app** (surfaced by Defender for Cloud Apps), **admin confirmed account compromised**, and **leaked credentials**.\n\n- **C** is false: those identity types are explicitly out of scope.\n- **D** is false: Defender for Identity protects on-premises Active Directory and is not a prerequisite.",
    "source": "LP2 Module 4.7 (security for workload identities)."
  },
  {
    "id": 118,
    "domain": "auth",
    "topic": "Microsoft Defender for Identity",
    "stem": "A security analyst must deploy Microsoft Defender for Identity to monitor domain controller traffic without configuring port mirroring.\n\nWhere should the sensor be installed?",
    "options": [
      {
        "letter": "A",
        "text": "Directly on the domain controllers."
      },
      {
        "letter": "B",
        "text": "On a dedicated member server that receives mirrored traffic from the domain controllers."
      },
      {
        "letter": "C",
        "text": "On every domain-joined workstation."
      },
      {
        "letter": "D",
        "text": "On the Microsoft Entra Connect server only."
      },
      {
        "letter": "E",
        "text": "On an Azure Arc-enabled server in a separate subnet."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Defender for Identity sensors** can be installed **directly on domain controllers**, where they monitor domain controller traffic **without a dedicated server or port mirroring**, and on **AD FS servers**, where they monitor network traffic and authentication events.\n- Defender for Identity is managed through the **Microsoft Defender portal** (`security.microsoft.com`), not the Microsoft Entra admin center. Its cloud service runs in the **US, Europe, and Asia** and is connected to Microsoft threat intelligence.\n- It uses on-premises Active Directory signals to detect advanced threats, compromised identities, and malicious insider activity.\n\n- **B** describes a standalone sensor design that this deployment does not require.\n- **C**, **D**, and **E** are not supported sensor locations for this scenario.",
    "source": "LP2 Module 4.8 (Microsoft Defender for Identity)."
  },
  {
    "id": 119,
    "domain": "auth",
    "topic": "Identity Risk Management Agent",
    "stem": "Contoso is deploying the Identity Risk Management Agent. A security analyst must be able to view the agent's suggestions but must not be able to act on them.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Security Reader and Global Reader can view the agent and its suggestions but cannot take action."
      },
      {
        "letter": "B",
        "text": "The agent requires Microsoft Entra ID P2 and available Security Compute Units."
      },
      {
        "letter": "C",
        "text": "The agent requires only Microsoft Entra ID P1."
      },
      {
        "letter": "D",
        "text": "Continuous monitoring checks for new risky users every 24 hours."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- The **Identity Risk Management Agent** requires **Microsoft Entra ID P2** and available **Security Compute Units**. **Security Administrator** is required to activate the agent the first time, view it, and act on suggestions. **Security Reader** and **Global Reader** can view the agent and its suggestions but **cannot take action**.\n- Triggers are **continuous monitoring** (every **5 minutes**), **daily**, or **manual**.\n- The default scope is the **most recent 100 risky users in the last 90 days**. Scope can be narrowed by user and group, by a maximum of **1 to 100** risky users, by risk level, and by a defined time frame.\n- The agent investigates risky sign-ins and detections, generates a risk summary and a recommended remediation action, answers questions in chat, and stores custom instructions in agent memory.\n\n- **C** is false: P2 is the minimum.\n- **D** is false: continuous monitoring runs every **5 minutes**, not daily.",
    "source": "LP2 Module 4.9 (Identity Risk Management Agent)."
  },
  {
    "id": 120,
    "domain": "auth",
    "topic": "Global Secure Access remote networks",
    "stem": "Contoso is connecting a branch office to Global Secure Access without installing a client on individual devices, and it must monitor the traffic that flows through the service.\n\nWhich three statements are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "An IPsec tunnel is created between the branch router (customer premises equipment) and the nearest Global Secure Access endpoint."
      },
      {
        "letter": "B",
        "text": "The final configuration step is completed in the on-premises router console, not in the Microsoft Entra admin center."
      },
      {
        "letter": "C",
        "text": "Traffic logs record sessions, connections, and transactions."
      },
      {
        "letter": "D",
        "text": "A Global Secure Access client must be installed on each device in the branch."
      },
      {
        "letter": "E",
        "text": "Enriched Microsoft 365 logs currently support enrichment for every Microsoft 365 workload."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **Remote networks** connect a branch location through an **IPsec tunnel** between the **customer premises equipment (CPE)** router and the nearest Global Secure Access endpoint. Internet-bound traffic is routed through the branch router for evaluation in the cloud, and **no client is installed on individual devices**.\n- Configuration has five steps: **Basics**, **Connectivity**, **Traffic forwarding**, **Review**, and **setup on the on-premises router**. The last step is performed in the router's management console.\n- **Traffic logs** describe **sessions** (starting with the first URL), **connections** (the 5-tuple: source and destination IP and port plus FQDN), and **transactions** (a request and response pair).\n- **Enriched Microsoft 365 logs** combine **OfficeActivity** and **NetworkAccessTraffic** data with a unique token ID. At this time only **SharePoint Online** logs are available for enrichment.\n\n- **D** is false: remote networks are clientless.\n- **E** is false: enrichment currently covers SharePoint Online only.",
    "source": "LP2 Module 6.6 / 6.8 (Global Secure Access remote networks and logs)."
  },
  {
    "id": 121,
    "domain": "apps",
    "topic": "OAuth app policies",
    "stem": "Contoso wants an automated alert when an OAuth app requests high permissions and has been authorized by more than 50 users. The security team also wants to ban a specific risky app so that it stops working.\n\nWhere should the policy be created, and what does banning the app do? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "In Microsoft Defender for Cloud Apps, create an OAuth app policy."
      },
      {
        "letter": "B",
        "text": "Banning the app disables the corresponding enterprise application."
      },
      {
        "letter": "C",
        "text": "In the Microsoft Entra admin center, create an access review for the application."
      },
      {
        "letter": "D",
        "text": "Banning the app only removes it from the Cloud app catalog."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **OAuth app policies** live in **Microsoft Defender for Cloud Apps** under **Cloud apps > OAuth apps**. Select **New policy** from the search button, or use **Control > Policies > Create policy > OAuth app policy**.\n- A permission policy can raise an alert when an app requests a **high permission level** and was authorized by more than a set number of users. Policies can be scoped to the **group membership of the users who authorized the app**, and the **Community use** filter shows whether the permission is common, uncommon, or rare.\n- Marking a permission as **banned** disables the **corresponding enterprise application**, so the app stops working.\n\n- **C** covers access, not OAuth permission risk.\n- **D** is false: banning disables the enterprise application, not just the catalog entry.",
    "source": "LP3 Module 1.8 (policies for OAuth apps)."
  },
  {
    "id": 122,
    "domain": "apps",
    "topic": "Risk-based step-up consent",
    "stem": "Contoso enables user consent only for verified publishers and low-impact permissions. A user tries to consent to a suspicious app and receives error AADSTS90094.\n\nWhich statement describes what happened?",
    "options": [
      {
        "letter": "A",
        "text": "Risk-based step-up consent detected a risky request and required administrator approval, and the event was logged with category ApplicationManagement and activity Consent to application."
      },
      {
        "letter": "B",
        "text": "User consent is disabled for the whole tenant, so no user can consent to any app."
      },
      {
        "letter": "C",
        "text": "Publisher verification has expired for all applications in the tenant."
      },
      {
        "letter": "D",
        "text": "Conditional Access blocked the sign-in because the device is not compliant."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Risk-based step-up consent** is **enabled by default**. When Microsoft detects a risky end-user consent request, the request is stepped up to **admin consent**. The prompt tells the user that admin approval is needed, and if the **admin consent request workflow** is enabled the user can send the request to an administrator from the prompt.\n- Without the workflow, the user sees **AADSTS90094**. An audit event is recorded with **Category ApplicationManagement**, **Activity Consent to application**, and **Status Reason Risky application detected**.\n- Step-up consent changes behavior only when **end-user consent is enabled**.\n\n- **B** is false: this user was still able to start a consent request.\n- **C** and **D** describe unrelated controls.",
    "source": "LP3 Module 2.3 (consent settings and risk-based step-up consent)."
  },
  {
    "id": 123,
    "domain": "apps",
    "topic": "Application collections",
    "stem": "Contoso users see every app they can access on a single My Apps page. The identity team wants role-based tabs that group related apps, and department owners must be able to maintain their own collection.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Collections require Microsoft Entra ID P1 or P2 licensing."
      },
      {
        "letter": "B",
        "text": "A collection only shows apps that the user has already been assigned."
      },
      {
        "letter": "C",
        "text": "A collection grants access to apps that the user was not assigned."
      },
      {
        "letter": "D",
        "text": "Collections can be created only by Global Administrators in the Azure portal."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Application collections** require **Microsoft Entra ID P1 or P2**. A collection applies a filter to the apps a user can already access, so the user sees **only the apps in the collection that have been assigned** to them.\n- Administrators create collections in the Microsoft Entra admin center under **Identity > Applications > Enterprise applications > App Launchers > New collection**, then add applications and owners. Owners manage the collection through the Azure portal.\n- Users can also create **personal collections** in the **My Apps** portal (`https://myapps.microsoft.com`). Every app a user can access appears in the default **Apps** collection, and the user can remove apps from it.\n\n- **C** is false: a collection is a view, not an assignment.\n- **D** is false: owners can manage a collection, and users can create personal collections.",
    "source": "LP3 Module 2.8 (application collections)."
  },
  {
    "id": 124,
    "domain": "apps",
    "topic": "App governance",
    "stem": "Contoso needs visibility, policy alerts, and automatic remediation for OAuth apps that access Microsoft 365 data through Microsoft Graph.\n\nWhich Microsoft Defender for Cloud Apps capability provides this?",
    "options": [
      {
        "letter": "A",
        "text": "The app governance add-on."
      },
      {
        "letter": "B",
        "text": "Cloud Discovery."
      },
      {
        "letter": "C",
        "text": "Conditional Access App Control."
      },
      {
        "letter": "D",
        "text": "Application Proxy."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **App governance** is an **add-on to Microsoft Defender for Cloud Apps** for **OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs**. It provides **insights**, **governance** policies, **detection** of anomalous app behavior, and **remediation**, including automatic remediation.\n- To enable it, connect **Office 365** in Defender for Cloud Apps, enable the **Office 365 Microsoft Entra ID apps**, then select **Settings > Threat Protection > App Governance > Enable App Governance integration**. Built-in policies include **Microsoft 365 OAuth app Reputation**, **Microsoft 365 OAuth Phishing Detection**, and **Microsoft 365 OAuth App Governance**.\n\n- **B** discovers shadow IT from traffic logs.\n- **C** applies real-time session controls to SaaS apps.\n- **D** publishes on-premises web apps.",
    "source": "LP3 Module 3.9 (app governance)."
  },
  {
    "id": 125,
    "domain": "governance",
    "topic": "Access Review Agent",
    "stem": "Contoso wants reviewers to receive approve or deny recommendations, with justifications, inside Microsoft Teams.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "The agent requires Microsoft Entra ID Governance or Microsoft Entra Suite licensing plus Security Copilot with at least one Security Compute Unit."
      },
      {
        "letter": "B",
        "text": "Reviewers need the Security Copilot Contributor role and an active access review."
      },
      {
        "letter": "C",
        "text": "Once started, the agent can be paused from the Microsoft Entra admin center."
      },
      {
        "letter": "D",
        "text": "The agent's recommendation is random and should not be used to justify a decision."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- The **Access Review Agent** requires **Microsoft Entra ID Governance** or **Microsoft Entra Suite** licensing and onboarding to **Security Copilot with at least one SCU**. Setup requires the **Identity Governance Administrator**, **Lifecycle Workflows Administrator**, and **Security Copilot Contributor** roles.\n- Reviewers use the agent in **Microsoft Teams** and need **Security Copilot Contributor** plus an active access review assigned to them.\n- The recommendation is a **deterministic score** built from signals: **user inactivity**, **user-to-group affiliation**, **account enabled**, **employment status** (`employeeLeaveDateTime`), **lifecycle workflow history** in the past 30 days, **decisions from previous reviews**, and **access request history**.\n\n- **C** is false: once started, agents **can't be stopped or paused**.\n- **D** is false: the recommendation is deterministic, and the reviewer can see the reasoning behind it.",
    "source": "LP4 Module 2.8 (Access Review Agent)."
  },
  {
    "id": 126,
    "domain": "governance",
    "topic": "PIM audit history",
    "stem": "An auditor needs a complete view of all activity for a privileged access group in Privileged Identity Management.\n\nWhich view should the auditor open?",
    "options": [
      {
        "letter": "A",
        "text": "Resource audit under Activity for the group."
      },
      {
        "letter": "B",
        "text": "My audit under Activity for the group."
      },
      {
        "letter": "C",
        "text": "Access reviews for the group."
      },
      {
        "letter": "D",
        "text": "The sign-in log filtered to the group."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- In **Privileged Identity Management > Groups**, select the privileged access group and then **Activity > Resource audit** to see **all activity** associated with that group, filtered by a predefined date range or a custom range.\n- **My audit** shows only the **current user's personal role activity** for the group.\n- Role assignments authorized through **Azure delegated resource management** by an outsourcing provider are **not shown** in this audit history.\n\n- **B** is scoped to one user.\n- **C** reviews membership, not activation and assignment activity.\n- **D** shows sign-ins, not PIM operations.",
    "source": "LP4 Module 3.8 (PIM audit history and reports)."
  },
  {
    "id": 127,
    "domain": "governance",
    "topic": "Sign-in and audit logs",
    "stem": "Which three statements about Microsoft Entra sign-in and audit logs are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "The sign-ins report shows only interactive sign-ins; non-interactive service-to-service sign-ins are not displayed."
      },
      {
        "letter": "B",
        "text": "Sign-in records can take up to two hours to appear in the portal."
      },
      {
        "letter": "C",
        "text": "Audit log data can be downloaded as CSV or JSON, up to 250,000 records."
      },
      {
        "letter": "D",
        "text": "Any user can read every sign-in record in the tenant."
      },
      {
        "letter": "E",
        "text": "Audit logs retain data indefinitely by default."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- The **sign-ins report** displays **interactive sign-ins** only. Non-interactive sign-ins such as service-to-service authentication are not shown, and records can take **up to two hours** to appear.\n- The sign-in report is available in **all editions** of Microsoft Entra ID and through Microsoft Graph. **Security Administrator**, **Security Reader**, **Global Reader**, and **Report Reader** can read tenant data, and any user can read **their own** sign-ins.\n- **Audit logs** can be filtered by service, category, activity, status, target, initiator, and date range (**7 days**, **24 hours**, or custom). Filtered data can be downloaded as **CSV or JSON** up to **250,000 records**, bounded by report retention.\n\n- **D** is false: non-admins see only their own sign-ins.\n- **E** is false: downloads are constrained by the report retention policy.",
    "source": "LP4 Module 4.2 / 4.3 (sign-in and audit logs)."
  },
  {
    "id": 128,
    "domain": "governance",
    "topic": "Microsoft Sentinel",
    "stem": "Contoso wants to stream Microsoft Entra sign-in and audit logs to Microsoft Sentinel.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Ingesting sign-in logs requires Microsoft Entra ID P1 or P2; the other log types work with any Entra ID license."
      },
      {
        "letter": "B",
        "text": "The user needs the Microsoft Sentinel Contributor role on the workspace and the Security Administrator role on the tenant."
      },
      {
        "letter": "C",
        "text": "Microsoft Sentinel is a SIEM only and cannot automate responses."
      },
      {
        "letter": "D",
        "text": "The built-in Microsoft Entra ID connector streams audit logs but not sign-in logs."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Microsoft Sentinel** is a cloud-native **SIEM and SOAR** solution, so it both aggregates activity and automates response.\n- **Sign-in logs** require **Microsoft Entra ID P1 or P2**; any Entra ID license (Free, Office 365, P1, P2) can ingest the other log types. Additional per-gigabyte Azure Monitor and Sentinel charges can apply.\n- Access requires the **Microsoft Sentinel Contributor** role on the workspace, the **Security Administrator** role on the tenant, and read/write permission on the Entra **diagnostic settings**.\n- The built-in **Microsoft Entra ID** connector streams both **sign-in logs** and **audit logs**.\n\n- **C** is false: Sentinel includes SOAR.\n- **D** is false: the connector handles both log types.",
    "source": "LP4 Module 4.4 (connect Microsoft Entra ID to Microsoft Sentinel)."
  },
  {
    "id": 129,
    "domain": "governance",
    "topic": "Identity Secure Score",
    "stem": "Which statement about Identity Secure Score is true?",
    "options": [
      {
        "letter": "A",
        "text": "It is available in all editions of Microsoft Entra ID, and controls are scored either as binary or as a percentage of the total configuration."
      },
      {
        "letter": "B",
        "text": "It requires Microsoft Entra ID P2 and scores every control as binary."
      },
      {
        "letter": "C",
        "text": "It reports only how the tenant compares with other organizations in the same industry."
      },
      {
        "letter": "D",
        "text": "It measures only Conditional Access coverage and ignores other identity controls."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Identity Secure Score** is a **percentage** that shows how closely the tenant matches Microsoft's identity security recommendations. It is available in **all editions** of Microsoft Entra ID under **Security > Identity Secure Score**.\n- Controls are scored in two ways: **binary** (full credit when the recommendation is met) or as a **percentage of the total configuration**, such as protecting 5 of 100 users with MFA earning a proportional partial score.\n- The dashboard shows the score, an **industry comparison**, a **trend** over time, and a list of **improvement actions**. Some actions, such as reading reports, also raise the score.\n\n- **B** is false: no premium license is required and scoring is not always binary.\n- **C** and **D** describe only part of the dashboard.",
    "source": "LP4 Module 4.7 (Identity Secure Score)."
  },
  {
    "id": 130,
    "domain": "identity",
    "case": "tailwind-traders",
    "topic": "Cross-tenant synchronization design",
    "stem": "Fabrikam employees must be represented in the Tailwind directory so they can be assigned to TradeDesk and targeted by Tailwind Conditional Access policies, while they keep signing in with their fabrikam.com credentials. Fabrikam IT must keep managing those accounts, and no second password may be created.\n\nWhich solution should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Move the fabrikam.com verified domain into the Tailwind tenant and recreate every user as a member account."
      },
      {
        "letter": "B",
        "text": "Configure cross-tenant synchronization in Fabrikam to provision the users into Tailwind as B2B guests, and use B2B direct connect for the Teams shared channels."
      },
      {
        "letter": "C",
        "text": "Create cloud-only member accounts in Tailwind for each Fabrikam user and issue every user a Temporary Access Pass."
      },
      {
        "letter": "D",
        "text": "Rely on B2B direct connect only, because it creates the guest objects that Tailwind needs for application assignment."
      },
      {
        "letter": "E",
        "text": "Deploy Microsoft Entra Connect in Fabrikam to synchronize its users into the tailwind.local forest."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "- **Cross-tenant synchronization** is configured in the **source tenant (Fabrikam)** and provisions users into the **target tenant (Tailwind)** as **B2B collaboration users**. The guest object has its own object ID in Tailwind, so it can be assigned to applications and targeted by Tailwind Conditional Access, while authentication still happens in the home tenant.\n- **B2B direct connect** covers **Teams shared channels** but does **not** create an object in the resource tenant's directory, so it cannot be used for application assignment.\n\n- **A** cannot work: a verified domain can belong to only one tenant at a time, and recreating users creates a second credential.\n- **C** satisfies assignment but violates the requirement that no second credential exists.\n- **D** is the classic trap: direct connect alone leaves nothing to assign to TradeDesk.\n- **E** reverses the synchronization direction; Entra Connect synchronizes Active Directory into Entra ID, not the other way around.",
    "source": "LP1 Module 5.2 / 5.3 (cross-tenant synchronization and B2B collaboration)."
  },
  {
    "id": 131,
    "domain": "identity",
    "case": "tailwind-traders",
    "topic": "Cross-tenant access and trust settings",
    "stem": "Fabrikam guests must reach only TradeDesk and Teams, and the groups allowed in must be limited to the project group. Fabrikam users already complete MFA and use compliant devices in their own tenant, and Tailwind must not prompt them a second time for those claims.\n\nWhich two configurations should you make in the Tailwind tenant? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure outbound access settings in Tailwind that block Fabrikam users from Teams."
      },
      {
        "letter": "B",
        "text": "Configure inbound trust settings to accept MFA and compliant device claims from Fabrikam."
      },
      {
        "letter": "C",
        "text": "Delete Fabrikam's Conditional Access policies so that Tailwind policies apply to Fabrikam users."
      },
      {
        "letter": "D",
        "text": "Configure inbound access settings that allow only the Fabrikam project group and only TradeDesk and Teams."
      },
      {
        "letter": "E",
        "text": "Create a tenant restriction policy in Tailwind that blocks fabrikam.com."
      }
    ],
    "answers": [
      "B",
      "D"
    ],
    "explanation": "- **Cross-tenant access settings** have three parts. **Inbound access** controls which external users and groups can access which of your applications. **Outbound access** controls what your users can reach in other organizations. **Trust settings** decide whether you accept **MFA**, **compliant device**, and **hybrid Microsoft Entra joined** claims from the other tenant.\n- Accepting the **MFA** claim in **inbound trust** means a guest who satisfied MFA at home is not challenged again by Tailwind Conditional Access. Tailwind still controls which apps and groups are allowed through **inbound access**.\n\n- **A** is the wrong direction: Tailwind users reaching Fabrikam is outbound, not what limits Fabrikam guests.\n- **C** is wrong: Fabrikam owns its policies, and deleting them does not change Tailwind's trust of Fabrikam claims.\n- **E** blocks the partner entirely, which contradicts the collaboration requirement.",
    "source": "LP1 Module 5.2 (cross-tenant access settings and trust)."
  },
  {
    "id": 132,
    "domain": "auth",
    "case": "tailwind-traders",
    "topic": "Passkey profile restrictions",
    "stem": "Thirty finance users must register only FIDO2 keys whose model is on an approved vendor list. Attestation must be verified during registration, device-bound keys are required, and keys from other vendors that are already registered must stop working.\n\nWhich configuration should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Enable security defaults and require MFA for the finance group."
      },
      {
        "letter": "B",
        "text": "Create a passkey (FIDO2) profile that enforces attestation and allows only the approved AAGUIDs, then target the finance group in the Passkey (FIDO2) authentication method policy."
      },
      {
        "letter": "C",
        "text": "Create a Conditional Access policy that requires the MFA grant control for the finance group."
      },
      {
        "letter": "D",
        "text": "Enable Microsoft Authenticator passwordless phone sign-in for the finance group."
      },
      {
        "letter": "E",
        "text": "Add the finance users to a dynamic group that uses the device is compliant rule."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "- **Passkey (FIDO2) profiles** are created under **Authentication methods > Passkey (FIDO2) > Configure**. A profile defines a **name**, whether **attestation is enforced**, and an **AAGUID allow or block list**.\n- **Attestation is evaluated only at registration.** When it is enforced, a key that cannot attest cannot be registered, which in practice forces **device-bound** keys because synced passkeys cannot attest.\n- **AAGUID restrictions are evaluated at registration and at every sign-in.** Removing an AAGUID from an allow list blocks sign-in for passkeys that were already registered with that AAGUID, which satisfies the existing keys must stop working requirement.\n- Configuring passkey profiles requires the **Authentication Policy Administrator** role.\n\n- **A** and **C** can require MFA but cannot restrict the key vendor or verify attestation.\n- **D** enables a different method instead of restricting passkeys.\n- **E** controls device compliance, not key model.",
    "source": "LP2 Module 2.2 / 2.3 (passkey profiles and authentication methods policy)."
  },
  {
    "id": 133,
    "domain": "auth",
    "case": "tailwind-traders",
    "topic": "Temporary Access Pass onboarding",
    "stem": "Forty new hires start on Monday. Each one signs in once on a loaner Windows device and registers a passkey, then never uses the pass again. The security team requires a pass that expires within seven days and cannot be reused, and the Temporary Access Pass policy is already configured with a maximum lifetime of 30 days.\n\nWhat should you issue?",
    "options": [
      {
        "letter": "A",
        "text": "A multi-use Temporary Access Pass with a 30-day lifetime, because one-time passes cannot be used to register a passkey."
      },
      {
        "letter": "B",
        "text": "A Temporary Access Pass that is excluded from MFA, so the users only enter a password."
      },
      {
        "letter": "C",
        "text": "A one-time Temporary Access Pass with a seven-day lifetime, used once to sign in and register a passkey."
      },
      {
        "letter": "D",
        "text": "No pass at all, because new users can register a passkey from the sign-in page before their first authentication."
      },
      {
        "letter": "E",
        "text": "A one-time Temporary Access Pass with a 45-day lifetime."
      }
    ],
    "answers": [
      "C"
    ],
    "explanation": "- A Temporary Access Pass lifetime can be set from **10 minutes to 30 days (43,200 minutes)**. The authentication methods policy defines a **default** and a **maximum** lifetime, so a seven-day pass is allowed when the policy maximum is 30 days.\n- A **one-time** pass can be used exactly once. A **multi-use** pass can be used until it expires. Only **one TAP per user** can be valid at a time, and creating a new one deletes the previous pass.\n- The pass code is **shown once** at creation. It **satisfies MFA** during sign-in but is **not phishing-resistant**, and it can be used to register passwordless methods such as a passkey or Windows Hello for Business.\n- Temporary Access Pass requires **Microsoft Entra ID P1 or P2**.\n\n- **A** is wrong: a one-time pass is exactly what a single enrollment needs.\n- **B** weakens security and is not how TAP works.\n- **D** is wrong: a user with no registered method cannot complete registration without a pass or another method.\n- **E** exceeds the 30-day maximum.",
    "source": "LP2 Module 2.4 (Temporary Access Pass)."
  },
  {
    "id": 134,
    "domain": "apps",
    "case": "tailwind-traders",
    "topic": "Application Proxy Kerberos delegation",
    "stem": "Tailwind publishes parts.fabrikam.local through Application Proxy. The application uses Windows integrated authentication, and users from both companies must sign in with Kerberos single sign-on and no password vaulting. Connector servers will run on Fabrikam domain-joined servers in the Fabrikam datacenter.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "SAML-based single sign-on with fabrikam.local configured as the identity provider."
      },
      {
        "letter": "B",
        "text": "Password-based single sign-on with a vaulted service account."
      },
      {
        "letter": "C",
        "text": "Passthrough authentication so that users authenticate directly against Microsoft Entra ID."
      },
      {
        "letter": "D",
        "text": "Integrated Windows authentication with Kerberos Constrained Delegation, granting the connector computer accounts delegation to the application SPN and read access to TokenGroupsGlobalAndUniversal."
      },
      {
        "letter": "E",
        "text": "Header-based single sign-on with the default connector."
      }
    ],
    "answers": [
      "D"
    ],
    "explanation": "- Application Proxy supports **Kerberos Constrained Delegation (KCD)** for apps that use **integrated Windows authentication**. The connector obtains a Kerberos ticket on behalf of the signed-in user and presents it to the app.\n- KCD requires an **SPN for the application**, **delegation** granted to the connector computer accounts (or a dedicated service account) for that SPN, **domain-joined connectors** with line of sight to a domain controller, and permission to read **TokenGroupsGlobalAndUniversal** so that group SIDs are included.\n- Users still authenticate to **Microsoft Entra ID** with any enabled method, including passkeys or a Temporary Access Pass; the connector performs the on-premises impersonation.\n\n- **A** and **B** do not deliver Kerberos single sign-on, and **B** requires storing credentials.\n- **C** does not perform Windows authentication against the app.\n- **E** requires a third-party header provider and does not use Kerberos.",
    "source": "LP3 Module 2.6 (Application Proxy single sign-on and KCD)."
  },
  {
    "id": 135,
    "domain": "apps",
    "case": "tailwind-traders",
    "topic": "App roles versus group claims",
    "stem": "TradeDesk is a Tailwind custom application that expects the values Approver and Reader in the roles claim. Group claims cannot be used because the token is already close to its size limit. Forty finance users need Approver and 300 staff need Reader.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Define the Approver and Reader app roles in the TradeDesk app registration manifest."
      },
      {
        "letter": "B",
        "text": "Emit group claims and let TradeDesk map group object IDs to role names."
      },
      {
        "letter": "C",
        "text": "Assign the finance group to the Approver app role and the all-staff group to the Reader app role in the enterprise application."
      },
      {
        "letter": "D",
        "text": "Grant TradeDesk the RoleManagement.ReadWrite.Directory application permission."
      },
      {
        "letter": "E",
        "text": "Use SCIM provisioning to push role membership from the on-premises directory."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "- **App roles** are declared in the application **manifest** (or in the app registration UI) with a display name, a **value** such as Approver, the allowed member types (**Users/Groups** or **Applications**), and a description.\n- Administrators assign users or groups to those roles under **Enterprise applications > Users and groups**. The token then contains a compact **roles** claim with the role values, which avoids the token bloat caused by group claims.\n- Assigning groups to app roles requires **Microsoft Entra ID P1 or P2**.\n\n- **B** is what the requirement rules out: group claims grow with membership and can overflow the token.\n- **D** gives the app directory permissions it does not need.\n- **E** sends data the other direction and does not populate the roles claim.",
    "source": "LP3 Module 2.9 (app roles and role assignments)."
  },
  {
    "id": 136,
    "domain": "governance",
    "case": "tailwind-traders",
    "topic": "Access package design for auditors",
    "stem": "Twenty-five auditors need access to one SharePoint site and one security group for exactly 90 days. The Tailwind audit manager must approve each request, access must expire automatically, and the assignments must be reviewed every quarter.\n\nWhich three components should you create? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "A catalog that contains the SharePoint site and the security group as resources."
      },
      {
        "letter": "B",
        "text": "An access package policy that never expires and relies on the quarterly review to remove access."
      },
      {
        "letter": "C",
        "text": "A quarterly access review of the access package assignments with auto-apply enabled."
      },
      {
        "letter": "D",
        "text": "A SharePoint Administrator role assignment for the auditors."
      },
      {
        "letter": "E",
        "text": "An access package in that catalog with a policy that requires approval and expires after 90 days."
      }
    ],
    "answers": [
      "A",
      "C",
      "E"
    ],
    "explanation": "- A **catalog** is the container that holds resources and the access packages built from them. Adding the SharePoint site and the security group to the catalog makes them assignable.\n- An **access package** bundles those resources, and its **policy** defines who may request access, whether **approval** is required, the **expiration** (date, days, or hours), and whether extension is allowed. A 90-day expiration satisfies the time limit without manual cleanup.\n- **Access reviews** can target access package assignments. With **auto-apply** enabled, decisions take effect without an administrator applying them manually.\n\n- **B** fails the 90-day rule, because nothing removes access if the review is late.\n- **D** grants far more permission than the auditors need.",
    "source": "LP4 Module 1.2 / 1.3 (catalogs, access packages, and policies)."
  },
  {
    "id": 137,
    "domain": "identity",
    "case": "woodgrove-financial",
    "topic": "Hybrid authentication method selection",
    "stem": "Woodgrove must stop using password hash synchronization because the regulator forbids password hashes leaving the on-premises network. Passwords must still be validated against on-premises Active Directory, users must keep seamless single sign-on on domain-joined PCs, and no new federation servers or public certificates may be introduced.\n\nWhich authentication method should you deploy?",
    "options": [
      {
        "letter": "A",
        "text": "Password hash synchronization with seamless single sign-on."
      },
      {
        "letter": "B",
        "text": "Pass-through authentication with seamless single sign-on, piloted through staged rollout groups."
      },
      {
        "letter": "C",
        "text": "Cloud-only identities, with users resetting passwords manually on-premises after each change."
      },
      {
        "letter": "D",
        "text": "Active Directory Federation Services in each forest, with Entra Connect federation."
      },
      {
        "letter": "E",
        "text": "Password writeback as the only authentication method."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "- **Pass-through authentication (PTA)** validates the password directly against **on-premises Active Directory** through lightweight **PTA agents** that make only **outbound** connections. **No password hash is stored in Microsoft Entra ID**, which satisfies the regulatory rule.\n- PTA supports **seamless single sign-on** for domain-joined devices and can be rolled out with **staged rollout of cloud authentication**, which puts pilot users in a security group before the whole tenant moves.\n- A healthy PTA deployment needs **at least three agents** for redundancy. If every agent is offline, sign-in fails, because there is no cloud hash to fall back on.\n\n- **A** is disallowed by the regulator because hashes are stored in the cloud.\n- **C** breaks the single sign-on and usability requirements.\n- **D** keeps hashes on-premises but adds federation servers and token-signing certificates, which the requirements forbid.\n- **E** is a feature, not an authentication method; password writeback only pushes cloud resets back to AD.",
    "source": "LP1 Module 2.4 / 2.6 (pass-through authentication and staged rollout)."
  },
  {
    "id": 138,
    "domain": "auth",
    "case": "woodgrove-financial",
    "topic": "Private Access remote network design",
    "stem": "Branch users must reach the on-premises corebank application through Microsoft's security edge without installing a client on branch devices. Conditional Access must deny access that does not arrive through the compliant network.\n\nWhich solution should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Create a remote network with an IPsec tunnel from the branch CPE router, publish corebank through Private Access, and require the compliant network in Conditional Access."
      },
      {
        "letter": "B",
        "text": "Install the Global Secure Access client on every branch CPE router."
      },
      {
        "letter": "C",
        "text": "Deploy Application Proxy connectors in every branch office."
      },
      {
        "letter": "D",
        "text": "Use an Azure site-to-site VPN gateway and require hybrid Microsoft Entra join."
      },
      {
        "letter": "E",
        "text": "Add the branch public IP ranges to a named location and require MFA."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- A **remote network** connects a branch through an **IPsec tunnel** between the **customer premises equipment (CPE)** router and the nearest Global Secure Access endpoint. **No client is installed on individual devices**, and internet-bound traffic is evaluated in the cloud.\n- With the **Private Access** traffic forwarding profile enabled, private applications such as corebank are published through the service. **Conditional Access** can then use the **compliant network** condition, which verifies that traffic came through Global Secure Access instead of a spoofed IP address.\n- Before the compliant network check can be used, **Global Secure Access signaling for Conditional Access** must be enabled once in the tenant.\n\n- **B** misunderstands the client: it runs on user devices, not routers.\n- **C** publishes web apps and does not inspect branch traffic.\n- **D** adds a VPN path that is not the compliant network.\n- **E** relies on IP addresses, which can be spoofed and must be maintained manually.",
    "source": "LP2 Module 6.5 / 6.6 (Private Access and remote networks)."
  },
  {
    "id": 139,
    "domain": "auth",
    "case": "woodgrove-financial",
    "topic": "PIM role settings",
    "stem": "Twenty-two administrators currently hold fourteen privileged roles as permanent active assignments. Woodgrove requires just-in-time activation for a maximum of four hours, approval before activation, and phishing-resistant MFA during activation.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Make the fourteen roles eligible instead of active, with a maximum activation duration of four hours."
      },
      {
        "letter": "B",
        "text": "Keep the permanent active assignments and rely on quarterly access reviews to reduce them."
      },
      {
        "letter": "C",
        "text": "Require approval and the phishing-resistant MFA authentication strength in the role settings."
      },
      {
        "letter": "D",
        "text": "Disable PIM alerts so that the security team is not overwhelmed."
      },
      {
        "letter": "E",
        "text": "Enable security defaults and remove all Conditional Access policies."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "- **PIM role settings** control **maximum activation duration**, **approval** (with named approvers), **MFA or authentication strength on activation**, **justification**, **ticket information**, and **notifications**.\n- Making a role **eligible** means the administrator must activate it. A permanent **active** assignment bypasses activation, so the four-hour limit, approval, and MFA requirement would all be skipped.\n- Activation requires **Microsoft Entra ID P2**, and **PIM alerts** exist to surface risky patterns such as too many Global Administrators, so disabling them is the opposite of the requirement.\n\n- **B** keeps standing access, which is exactly what the design must remove.\n- **D** removes a detection instead of a risk.\n- **E** weakens authentication and is unrelated to just-in-time access.",
    "source": "LP4 Module 2.1 / 2.3 (PIM role settings and activation)."
  },
  {
    "id": 140,
    "domain": "apps",
    "case": "woodgrove-financial",
    "topic": "Admin consent workflow design",
    "stem": "Woodgrove forbids end users from consenting to unverified or risky applications. Marketing still needs a way to request MailerPro, which requires the Mail.Read and Files.Read.All delegated permissions, and the security team wants a review queue with an audit trail.\n\nWhich configuration should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Allow user consent for apps from verified publishers for selected permissions and let marketing consent themselves."
      },
      {
        "letter": "B",
        "text": "Assign the marketing team the Application Administrator role so that they can consent to the app."
      },
      {
        "letter": "C",
        "text": "Enable the admin consent workflow, set user consent to Do not allow user consent, and designate a reviewers group."
      },
      {
        "letter": "D",
        "text": "Add MailerPro to an app governance policy and wait for an alert."
      },
      {
        "letter": "E",
        "text": "Grant tenant-wide admin consent from the Enterprise applications blade without review."
      }
    ],
    "answers": [
      "C"
    ],
    "explanation": "- The **admin consent workflow** is enabled under **Enterprise apps > Consent and permissions > Admin consent settings**. It lets users request consent for apps they cannot consent to themselves.\n- With **user consent set to Do not allow user consent**, no end user can grant access, while the workflow still gives them a path. Requests appear in the **Admin consent requests** pane and are emailed to the configured reviewers.\n- Reviewers must already hold a role that can grant consent; being named a reviewer does not elevate privileges. Only a **Global Administrator** can approve requests for **Microsoft Graph application permissions**.\n- **Risk-based step-up consent** is on by default and escalates suspicious consent requests to admin review.\n\n- **A** still lets users consent, and grants a broad permission set.\n- **B** over-privileges marketing.\n- **D** detects problems after the fact instead of gating consent.\n- **E** removes the review the requirement demands.",
    "source": "LP3 Module 2.10 / 3.2 (admin consent workflow and consent policies)."
  },
  {
    "id": 141,
    "domain": "apps",
    "case": "woodgrove-financial",
    "topic": "Workload identity federation",
    "stem": "The nightly deployment pipeline runs in GitHub Actions and must call Microsoft Graph. Woodgrove forbids storing any secret or certificate in the repository or in GitHub secrets, and the solution must not break when a credential expires.\n\nWhich solution should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "Add a federated identity credential to the app registration for the GitHub OIDC issuer, subject, and audience, and exchange the workflow OIDC token for an Entra token."
      },
      {
        "letter": "B",
        "text": "Store a client secret in GitHub secrets and rotate it every 90 days."
      },
      {
        "letter": "C",
        "text": "Upload a self-signed certificate to the app registration and use the client credentials flow."
      },
      {
        "letter": "D",
        "text": "Assign a system-assigned managed identity to the GitHub-hosted runner."
      },
      {
        "letter": "E",
        "text": "Use the resource owner password credentials flow with a dedicated service account."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Workload identity federation** creates a trust between an external identity provider and an app registration through a **federated identity credential**. The credential declares the **issuer**, the **subject**, and the **audience**.\n- The pipeline requests a short-lived **OIDC token** from GitHub, presents it to Microsoft Entra ID, and receives an access token. **No secret is stored anywhere**, and nothing expires on the Entra side.\n- The **subject** can be scoped to a repository, branch, pull request, or environment, so a compromised branch cannot impersonate the production identity.\n\n- **B** and **C** still store a credential that must be rotated.\n- **D** is impossible: managed identities are not available on GitHub-hosted runners.\n- **E** requires a password and does not support MFA.",
    "source": "LP3 Module 3.4 (app credentials and federated identity)."
  },
  {
    "id": 142,
    "domain": "governance",
    "case": "woodgrove-financial",
    "topic": "Guest access review configuration",
    "stem": "Woodgrove has 4,000 guest accounts from partner organizations and most partners have no sponsor recorded. Access must be reviewed quarterly by the partner sponsor, and access must be removed automatically when a sponsor denies it or does not respond.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Scope the review to guest users only and use the sponsor as the reviewer, with a fallback reviewer configured."
      },
      {
        "letter": "B",
        "text": "Set If reviewers do not respond to No change."
      },
      {
        "letter": "C",
        "text": "Enable Auto apply results to resource and set If reviewers do not respond to Remove access."
      },
      {
        "letter": "D",
        "text": "Use a lifecycle workflow to delete every guest account after 30 days."
      },
      {
        "letter": "E",
        "text": "Assign every guest a permanent access package so that the review has a resource to target."
      }
    ],
    "answers": [
      "A",
      "C"
    ],
    "explanation": "- Access reviews can be scoped to **Guest users only**, which limits the review to B2B guests associated with the resource. Reviewers can be **group owners**, **selected users or groups**, **users reviewing their own access**, or **managers of users**, and a **fallback reviewer** covers users who have no manager.\n- **Auto apply results to resource** applies decisions automatically. **If reviewers do not respond** can be set to **No change**, **Remove access**, **Approve access**, or **Take recommendations**. Setting it to **Remove access** satisfies the requirement.\n- Because the review is scoped to guests only, Woodgrove can also configure the **action to apply on denied guest users**, including **block sign-in for 30 days and then remove the user from the tenant**.\n\n- **B** leaves access in place when reviewers ignore the review.\n- **D** removes every guest regardless of business need.\n- **E** is unnecessary and grants standing access.",
    "source": "LP4 Module 3.2 / 3.3 (access reviews for guests)."
  },
  {
    "id": 143,
    "domain": "governance",
    "case": "woodgrove-financial",
    "topic": "Long-term log retention",
    "stem": "The regulator requires seven years of retention for Microsoft Entra sign-in and audit logs, and the security team must keep the data queryable in Microsoft Sentinel.\n\nWhich three actions should you perform? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Configure diagnostic settings that send AuditLogs, SignInLogs, and NonInteractiveUserSignInLogs to a Log Analytics workspace."
      },
      {
        "letter": "B",
        "text": "Set total retention on the workspace to seven years."
      },
      {
        "letter": "C",
        "text": "Rely on the default 30-day retention in Microsoft Entra ID."
      },
      {
        "letter": "D",
        "text": "Send the logs only to an event hub with a seven-day capture window."
      },
      {
        "letter": "E",
        "text": "Connect the workspace to Microsoft Sentinel so that the data stays searchable."
      }
    ],
    "answers": [
      "A",
      "B",
      "E"
    ],
    "explanation": "- Microsoft Entra ID keeps **sign-in logs and audit logs for 30 days** with P1 or P2 (7 days on the free tier), so long-term retention always requires an export.\n- **Diagnostic settings** stream **AuditLogs**, **SignInLogs**, **NonInteractiveUserSignInLogs**, and other categories to **Log Analytics**, an **Azure storage account**, an **event hub**, or a partner SIEM.\n- A **Log Analytics workspace** supports **interactive retention up to 730 days** and **total retention up to 12 years**, so seven years is achievable.\n- **Microsoft Sentinel** analyzes data in the same workspace, which keeps the archive queryable with KQL.\n\n- **C** cannot meet seven years.\n- **D** bounds retention by the capture window and does not provide query.",
    "source": "LP4 Module 4.4 / 4.5 (log retention and SIEM export)."
  },
  {
    "id": 144,
    "domain": "auth",
    "topic": "Passkey attestation and AAGUID enforcement",
    "stem": "Woodgrove is standardizing on FIDO2 security keys and wants to prevent users from registering keys from unapproved manufacturers.\n\nWhich three statements about passkey profiles are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Attestation is evaluated at registration, so a key that cannot attest is rejected when attestation is enforced."
      },
      {
        "letter": "B",
        "text": "AAGUID restrictions are evaluated at registration and again at every sign-in."
      },
      {
        "letter": "C",
        "text": "Removing an AAGUID from an allow list blocks sign-in for passkeys that were already registered with that AAGUID."
      },
      {
        "letter": "D",
        "text": "Synced passkeys can satisfy attestation on any platform that supports passkeys."
      },
      {
        "letter": "E",
        "text": "Attestation can be enforced per user through the per-user MFA settings."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- **Attestation** proves the make and model of the authenticator. It is checked **only during registration**; enforcing it rejects keys that cannot provide an attestation statement.\n- **AAGUID** is the identifier of the authenticator model. Allow and block lists are enforced **at registration and at sign-in**, so removing an AAGUID immediately blocks existing keys of that model.\n- Because **synced passkeys cannot provide attestation**, turning on attestation enforcement effectively limits registration to **device-bound** keys.\n\n- **D** is false: synced passkeys have no hardware attestation.\n- **E** is false: profiles and passkey settings live in the **authentication methods policy**, not in per-user MFA settings.",
    "source": "LP2 Module 2.2 (passkey profiles)."
  },
  {
    "id": 145,
    "domain": "auth",
    "topic": "Temporary Access Pass limits",
    "stem": "A helpdesk manager asks which Temporary Access Pass limits are enforced by Microsoft Entra ID.\n\nWhich three statements are true? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "The maximum lifetime is 30 days, and the authentication methods policy defines both a default and a maximum lifetime."
      },
      {
        "letter": "B",
        "text": "Several passes can be active at the same time, so the helpdesk can issue a backup pass."
      },
      {
        "letter": "C",
        "text": "A pass satisfies MFA during sign-in but is not phishing-resistant."
      },
      {
        "letter": "D",
        "text": "A pass can be used to register passwordless methods such as a passkey or Windows Hello for Business."
      },
      {
        "letter": "E",
        "text": "A pass can be read again from the admin center after it is created."
      }
    ],
    "answers": [
      "A",
      "C",
      "D"
    ],
    "explanation": "- Lifetime ranges from **10 minutes to 30 days**. The policy sets the **default** used when a pass is created and the **maximum** that an administrator may choose.\n- A user can have only **one valid TAP** at a time; creating a new one deletes the previous pass. The code is **displayed once** and cannot be retrieved later.\n- A TAP **satisfies MFA**, which is why it works for onboarding, but it is a plaintext code and therefore **not phishing-resistant**.\n- A TAP can be used to sign in and enroll passwordless methods, including passkeys and Windows Hello for Business. It requires **P1 or P2**.\n\n- **B** is false: only one pass can be valid per user.\n- **E** is false: the value is shown once at creation.",
    "source": "LP2 Module 2.4 (Temporary Access Pass)."
  },
  {
    "id": 146,
    "domain": "auth",
    "topic": "Entra ID sign-in for Azure virtual machines",
    "stem": "Woodgrove wants database administrators to connect to the reporting API virtual machines over RDP by using their Entra credentials, with no local accounts and no domain join.\n\nWhich three actions or conditions are required? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "Enable a system-assigned managed identity on the VM and install the AADLoginForWindows extension."
      },
      {
        "letter": "B",
        "text": "Assign the administrators the Virtual Machine Administrator Login role on the VM or its resource group."
      },
      {
        "letter": "C",
        "text": "The VM must run a supported operating system, such as Windows Server 2022 or 2025 with Desktop Experience, Windows 11 24H2 or later, or a supported Linux distribution."
      },
      {
        "letter": "D",
        "text": "Assign the administrators the Owner role on the subscription so that they can sign in."
      },
      {
        "letter": "E",
        "text": "Use guest accounts from a partner tenant, because only guests can sign in to Azure VMs with Entra credentials."
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- A VM needs a **system-assigned managed identity** and the **AADLoginForWindows** extension (or **AADSSHLoginForLinux** for Linux) before Entra sign-in works.\n- Access is controlled by **Azure RBAC**: **Virtual Machine Administrator Login** grants administrative sign-in, and **Virtual Machine User Login** grants standard sign-in. The role can be assigned on the VM or on a parent scope such as the resource group.\n- Supported platforms include **Windows Server 2022 and 2025 with Desktop Experience**, **Windows 11 24H2 or later**, and supported **Linux** distributions. Enabling Entra login makes the VM **Microsoft Entra joined**, so it cannot also be joined to on-premises AD at the same time.\n- **Guest accounts are not supported** for Azure VM sign-in.\n\n- **D** is false: Owner and Contributor manage the resource but do not grant sign-in.\n- **E** is the opposite of the supported behavior.",
    "source": "LP2 Module 2.10 (Entra user authentication for virtual machines)."
  },
  {
    "id": 147,
    "domain": "auth",
    "topic": "Compliant network enforcement for Microsoft traffic",
    "stem": "Woodgrove wants Conditional Access to require the compliant network for Exchange Online and SharePoint Online traffic from managed laptops. Some users work from home without VPN, and the security team wants to protect against token theft.\n\nWhich two actions are required? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Install the Global Secure Access client on managed devices so the compliant network condition can be enforced for Microsoft 365 traffic."
      },
      {
        "letter": "B",
        "text": "Enable Global Secure Access signaling for Conditional Access in the tenant before using the compliant network check."
      },
      {
        "letter": "C",
        "text": "Rely on remote network connectivity alone, because Conditional Access is enforced for Microsoft traffic through remote networks even without the client."
      },
      {
        "letter": "D",
        "text": "Replace the compliant network with a named location that contains all office IP ranges."
      },
      {
        "letter": "E",
        "text": "Disable Continuous Access Evaluation, because it conflicts with the compliant network check."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Global Secure Access signaling for Conditional Access** must be enabled once in the tenant. It is the prerequisite for the **compliant network** condition, source IP restoration, and related features.\n- For **Microsoft traffic**, Conditional Access is enforced **only when the Global Secure Access client is installed** on the device. Microsoft 365 traffic is still reachable through a **remote network without the client**, but the policy is **not enforced** on that path. A clientless branch therefore cannot satisfy a compliant network requirement for Microsoft 365 apps.\n- **Continuous Access Evaluation** works with the compliant network check to enforce **data plane** protection, which is what blocks token replay.\n\n- **C** states the opposite of the documented behavior for Microsoft traffic.\n- **D** uses IP addresses, which do not prove that traffic traversed the security edge.\n- **E** would remove the token replay protection the design depends on.",
    "source": "LP2 Module 6.5 / 6.8 (compliant network and Conditional Access)."
  },
  {
    "id": 148,
    "domain": "auth",
    "topic": "Phishing-resistant authentication methods",
    "stem": "Woodgrove must require phishing-resistant MFA for administrators.\n\nWhich three methods satisfy the phishing-resistant MFA authentication strength? (Choose three.)",
    "options": [
      {
        "letter": "A",
        "text": "FIDO2 security key"
      },
      {
        "letter": "B",
        "text": "Windows Hello for Business"
      },
      {
        "letter": "C",
        "text": "Certificate-based authentication configured as multi-factor"
      },
      {
        "letter": "D",
        "text": "Microsoft Authenticator passwordless phone sign-in with number matching"
      },
      {
        "letter": "E",
        "text": "Temporary Access Pass"
      }
    ],
    "answers": [
      "A",
      "B",
      "C"
    ],
    "explanation": "- The **phishing-resistant MFA** authentication strength accepts **FIDO2 security keys**, **Windows Hello for Business**, **certificate-based authentication configured as multi-factor**, and passkeys that are bound to a device. These methods are bound to the sign-in origin, so a proxy or look-alike site cannot replay them.\n- The method must also be **enabled in the authentication methods policy** and available to the user; the strength alone does not register anything.\n\n- **D** is passwordless MFA but is not classified as phishing-resistant, because the approval is not cryptographically bound to the site.\n- **E** satisfies MFA but is a transferable code, so it is not phishing-resistant.",
    "source": "LP2 Module 1.2 / 2.3 (authentication strengths)."
  },
  {
    "id": 149,
    "domain": "auth",
    "topic": "User risk remediation",
    "stem": "Identity Protection flags a user as high risk because of leaked credentials. The user must change the password at the next sign-in before any further access is granted, without helpdesk involvement.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Enable security defaults for the tenant."
      },
      {
        "letter": "B",
        "text": "Create a Conditional Access policy that requires MFA for all users."
      },
      {
        "letter": "C",
        "text": "Configure self-service password reset and email the user a reset link."
      },
      {
        "letter": "D",
        "text": "Create a Conditional Access policy with the user risk condition set to High and the Require password change grant control."
      },
      {
        "letter": "E",
        "text": "Reset the password in the admin center and require the user to register MFA again."
      }
    ],
    "answers": [
      "D"
    ],
    "explanation": "- Conditional Access supports a **user risk** condition. With **user risk = High** and the **Require password change** grant control, the user must complete a password change before access is granted, and the risk state is remediated.\n- The control requires **Microsoft Entra ID P2**. The same outcome can be delivered by the Identity Protection **user risk policy**, which is built on the same engine.\n\n- **A** and **B** do not force a password change.\n- **C** offers a path but does not block access; the user could simply not reset.\n- **E** removes the self-service path and does not clear the risk until the user signs in with the new password.",
    "source": "LP2 Module 3.3 (Identity Protection risk policies)."
  },
  {
    "id": 150,
    "domain": "identity",
    "topic": "Hard Deletion Protection behavior",
    "stem": "Woodgrove enabled Hard Deletion Protection for 20 critical cloud-only objects six weeks ago. Yesterday an administrator accidentally soft deleted two of those objects, and a junior administrator now tries to permanently delete them to clean up the deleted items list.\n\nWhat happens?",
    "options": [
      {
        "letter": "A",
        "text": "Permanent deletion is blocked for seven days after each soft deletion, and the objects can still be restored during that window."
      },
      {
        "letter": "B",
        "text": "Permanent deletion succeeds, because the seven-day window begins only when protection is first enabled."
      },
      {
        "letter": "C",
        "text": "Permanent deletion is blocked until a Global Administrator approves a PIM activation."
      },
      {
        "letter": "D",
        "text": "Permanent deletion is blocked for 30 days, matching the standard soft-delete window."
      },
      {
        "letter": "E",
        "text": "Protection can be turned off for those objects so that permanent deletion can proceed immediately."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- **Hard Deletion Protection** prevents an object from being **permanently deleted during the first seven days after it is soft deleted**. Soft deletion itself still succeeds, and a restore is still possible during the window.\n- Restoring an object keeps the protection. If it is deleted again, a **new seven-day window starts**.\n- Protection is **permanent once enabled** and cannot be switched off. It covers **cloud-only users, cloud-only groups, applications, and service principals**, and enabling it requires the **Microsoft Entra Backup Administrator** role.\n\n- **B** is wrong: the timer restarts with every soft deletion, not with the moment protection was enabled.\n- **C** invents an approval step; PIM is not part of Hard Deletion Protection.\n- **D** confuses the 30-day soft-delete window with the seven-day hard-delete block.\n- **E** is impossible: protection cannot be disabled.",
    "source": "LP1 Module 4.1 (directory protection and recovery)."
  },
  {
    "id": 151,
    "domain": "identity",
    "topic": "Guest MFA double prompt",
    "stem": "Guests from fabrikam.com and northwind.com already complete MFA in their own tenants. A Tailwind Conditional Access policy requires MFA for the SharePoint app, and those guests are challenged again on every new session. Tailwind must not lower its own security posture and must keep requiring MFA.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "Exclude guest users from the Conditional Access policy."
      },
      {
        "letter": "B",
        "text": "In cross-tenant access settings, configure inbound trust to accept MFA claims from the partners' tenants."
      },
      {
        "letter": "C",
        "text": "Add the partners' public IP addresses as trusted named locations."
      },
      {
        "letter": "D",
        "text": "Issue every guest a Temporary Access Pass for the Tailwind tenant."
      },
      {
        "letter": "E",
        "text": "Enable security defaults in the Tailwind tenant."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "- **Inbound trust settings** in cross-tenant access let Tailwind accept the **MFA claim** that the partner tenant already issued. The guest is not prompted twice, and Tailwind Conditional Access still requires MFA.\n- Trust can be configured as a **default** for all external organizations or **per organization**, and it applies only when the home tenant actually emits the claim. The guest object must still exist in Tailwind, and all other controls, such as device compliance or app restrictions, still apply.\n\n- **A** removes the requirement instead of trusting the partner claim.\n- **C** is a network-based bypass and does not reflect who performed MFA.\n- **D** creates a second credential and adds helpdesk work.\n- **E** is a tenant-wide default that cannot express per-partner trust.",
    "source": "LP1 Module 5.2 (cross-tenant access trust settings)."
  },
  {
    "id": 152,
    "domain": "identity",
    "topic": "Tenant restrictions v2",
    "stem": "Woodgrove must stop employees on managed devices from signing in to non-approved external tenants, and it must block reuse of an already issued token against Microsoft Graph and SharePoint Online. The security team refuses to maintain proxy allow lists or static IP lists.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a tenant restrictions policy in cross-tenant access settings and enforce it with Global Secure Access universal tenant restrictions tagging."
      },
      {
        "letter": "B",
        "text": "Block all external collaboration in the external collaboration settings."
      },
      {
        "letter": "C",
        "text": "Add each non-approved tenant to a blocked list in Conditional Access named locations."
      },
      {
        "letter": "D",
        "text": "Enable tenant restriction tagging in Global Secure Access using an account that holds both the Global Secure Access Administrator and Security Administrator roles."
      },
      {
        "letter": "E",
        "text": "Disable B2B direct connect for all users."
      }
    ],
    "answers": [
      "A",
      "D"
    ],
    "explanation": "- **Tenant restrictions v2** is configured in **cross-tenant access settings** and moves policy from on-premises proxies to the cloud. It can allow or block specific external tenants for internal identities and block external identities entirely.\n- Enforcement uses **Global Secure Access** tagging. Enabling the tagging toggle requires **both** the **Global Secure Access Administrator** and **Security Administrator** roles.\n- **Data plane protection** covers **Microsoft Graph**: a token that was issued for an allowed tenant is blocked when it is replayed against Graph, and anonymous SharePoint Online access is also blocked.\n\n- **B** affects collaboration, not sign-in to other tenants, and would break legitimate partner work.\n- **C** named locations are IP based and cannot identify the destination tenant.\n- **E** removes shared channel collaboration without restricting tenant sign-in.",
    "source": "LP2 Module 6.8 (tenant restrictions v2 and Global Secure Access enforcement)."
  },
  {
    "id": 153,
    "domain": "apps",
    "topic": "Admin consent workflow behavior",
    "stem": "A helpdesk lead asks how the admin consent workflow behaves after it is enabled.\n\nWhich two statements are true? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Requests appear in the Admin consent requests pane for reviewers, and requesters can track the status of their request."
      },
      {
        "letter": "B",
        "text": "A request expires after the configured number of days, 30 by default, when reviewers do not respond."
      },
      {
        "letter": "C",
        "text": "Any user who holds the Application Developer role can approve requests for Microsoft Graph application permissions."
      },
      {
        "letter": "D",
        "text": "Enabling the workflow also exempts the approved application from Conditional Access."
      },
      {
        "letter": "E",
        "text": "Enabling the workflow automatically grants tenant-wide consent to apps from verified publishers."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- Reviewers work from **Enterprise apps > Activity > Admin consent requests**. The **My pending** tab shows requests assigned to the signed-in reviewer, and requesters are notified when a request is approved, denied, or expires.\n- **Consent request expires after (days)** is configurable (1 to 60 days) and defaults to **30 days**. Reviewers receive expiration reminders, and requesters see the status.\n- Naming someone a reviewer does **not** grant consent permission, and only a **Global Administrator** can approve requests for **Microsoft Graph application permissions**. Enabling the workflow can take up to an hour to take effect.\n\n- **C** confuses the reviewer designation with the permission to consent.\n- **D** is false: Conditional Access still evaluates the app.\n- **E** is false: each request is reviewed individually.",
    "source": "LP3 Module 2.10 (admin consent workflow)."
  },
  {
    "id": 154,
    "domain": "apps",
    "topic": "Application Proxy connector high availability",
    "stem": "The parts application is published through Application Proxy. Its connector group contains two connectors installed on the same physical host. Woodgrove must survive the loss of that host and the loss of the datacenter, and support 1,200 concurrent users.\n\nWhat should you do?",
    "options": [
      {
        "letter": "A",
        "text": "Create a second connector group and assign the application to both groups."
      },
      {
        "letter": "B",
        "text": "Install at least two additional connectors on separate servers in a different datacenter and add them to the same connector group."
      },
      {
        "letter": "C",
        "text": "Create a second app registration and split the users between the two applications."
      },
      {
        "letter": "D",
        "text": "Move the application to Global Secure Access Private Access and remove the connectors."
      },
      {
        "letter": "E",
        "text": "Enable passthrough authentication to remove the need for connectors."
      }
    ],
    "answers": [
      "B"
    ],
    "explanation": "- An application is assigned to **exactly one connector group**. **High availability** comes from having **multiple connectors in that group**, ideally on separate hosts and in separate networks or datacenters.\n- Connectors in a group **load balance** traffic and take over when a peer is unavailable. Each connector must be able to reach the published application and needs only **outbound 443** connectivity to the Application Proxy service.\n- Connectors should not share a server with the **Password Protection proxy**, because the two install different versions of the Agent Updater service.\n\n- **A** is not possible: an app cannot belong to two connector groups.\n- **C** duplicates the configuration and splits the audit trail.\n- **D** changes the publishing model and does not answer the availability question.\n- **E** still relies on connectors.",
    "source": "LP3 Module 2.6 (Application Proxy connectors and groups)."
  },
  {
    "id": 155,
    "domain": "apps",
    "topic": "SCIM scoping filters and quarantine",
    "stem": "Contoso provisions users to a SaaS application with SCIM. Only users whose department is Sales must be provisioned. After the application admin credentials were rotated, provisioning stopped and the job shows Quarantined.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Create a scoping filter with a clause on the department attribute."
      },
      {
        "letter": "B",
        "text": "Correct the credentials and restart the provisioning job to clear the quarantine."
      },
      {
        "letter": "C",
        "text": "Delete and recreate the enterprise application."
      },
      {
        "letter": "D",
        "text": "Disable provisioning and rely on SAML just-in-time creation."
      },
      {
        "letter": "E",
        "text": "Create a dynamic group instead, because SCIM does not support scoping filters."
      }
    ],
    "answers": [
      "A",
      "B"
    ],
    "explanation": "- **Scoping filters** define which users are in scope for provisioning, using a **target attribute**, an **operator**, and a **value**. Users outside the filter are not created or updated in the target application.\n- When provisioning repeatedly fails, for example because of **invalid credentials**, the job enters **quarantine** and stops. After the credentials are corrected, the job must be **restarted** so that it resumes.\n- **Provision on demand** can be used to test a single user, and **attribute mappings** control which values are sent. Users must still be in the provisioning scope (assigned users or all users, depending on the scope setting).\n\n- **C** destroys the configuration and audit history.\n- **D** leaves the target application without the attributes it needs.\n- **E** is false: scoping filters are a supported provisioning feature.",
    "source": "LP3 Module 3.5 / 3.6 (SCIM provisioning and troubleshooting)."
  },
  {
    "id": 156,
    "domain": "governance",
    "topic": "Lifecycle workflow for movers",
    "stem": "One hundred and fifty employees change department every month. When the department attribute changes, the old department groups and access packages must be removed within 24 hours and the new ones added. On-premises Active Directory group membership must also change, and the process must run without tickets.\n\nWhich solution should you implement?",
    "options": [
      {
        "letter": "A",
        "text": "A scheduled PowerShell runbook that rewrites group membership every night."
      },
      {
        "letter": "B",
        "text": "A monthly access review of all department groups."
      },
      {
        "letter": "C",
        "text": "A lifecycle workflow triggered by the attribute change, with tasks that remove the old group and access package and add the new ones."
      },
      {
        "letter": "D",
        "text": "A dynamic group rule based on department, with access packages assigned to that group."
      },
      {
        "letter": "E",
        "text": "PIM eligible assignments for the department groups."
      }
    ],
    "answers": [
      "C"
    ],
    "explanation": "- **Lifecycle workflows** in Microsoft Entra ID Governance automate joiner, mover, and leaver tasks. A mover workflow can be triggered by an **attribute change**, a **group membership change**, or **on demand**, and it can also run on a schedule.\n- Built-in tasks include **add user to group**, **remove user from group**, **add or remove access package assignment**, **disable account**, **delete account**, **send email**, and **run a custom task extension** (a Logic App) for anything else, including on-premises changes.\n- Workflows require **Microsoft Entra ID Governance** (P2). Execution is scheduled, so changes apply within the workflow run interval rather than instantly.\n\n- **A** is custom code that must be maintained and audited.\n- **B** reviews access after the fact.\n- **D** updates cloud group membership but not on-premises groups or access package assignments.\n- **E** changes how access is activated, not how it is granted or removed.",
    "source": "LP4 Module 4.1 (lifecycle workflows)."
  },
  {
    "id": 157,
    "domain": "governance",
    "topic": "Access reviews for privileged roles",
    "stem": "Woodgrove must review who is eligible for fourteen privileged roles every quarter. Security leads make the decisions, assignments they do not approve must be removed without manual steps, and members of role-assignable groups must be included.\n\nWhich two actions should you perform? (Choose two.)",
    "options": [
      {
        "letter": "A",
        "text": "Create an access review scoped to the privileged roles, and review the PIM for Groups assignments for the role-assignable groups."
      },
      {
        "letter": "B",
        "text": "Review only active assignments, because eligible assignments cannot be reviewed."
      },
      {
        "letter": "C",
        "text": "Set If reviewers do not respond to No change and rely on PIM to expire assignments."
      },
      {
        "letter": "D",
        "text": "Enable auto-apply results so that decisions take effect without manual intervention."
      },
      {
        "letter": "E",
        "text": "Use a lifecycle workflow to email the role list to the security leads every quarter."
      }
    ],
    "answers": [
      "A",
      "D"
    ],
    "explanation": "- Access reviews support **Microsoft Entra roles**, including **eligible** and **active** assignments, and **PIM for Groups** assignments for role-assignable groups.\n- **Auto apply results to resource** applies the decisions. Without it, an administrator must apply the results manually, which fails the no manual steps requirement.\n- Typical reviewer choices for role reviews are **selected users or groups** and **users review their own access**; recommendations and justification requirements can be enabled.\n\n- **B** is false: eligibility is exactly what a role review should examine.\n- **C** leaves unapproved access in place.\n- **E** sends information but changes nothing.",
    "source": "LP4 Module 3.2 / 3.4 (access reviews for roles and groups)."
  },
  {
    "id": 158,
    "domain": "governance",
    "topic": "External user lifecycle from access packages",
    "stem": "Partners are invited to Woodgrove through access packages. When a partner loses their last access package assignment, they must be blocked from signing in to the directory immediately, and their guest account must be removed 30 days later. Guests who already existed in the directory before they received an assignment must not be deleted.\n\nWhat should you configure?",
    "options": [
      {
        "letter": "A",
        "text": "In Identity Governance settings, set Block external user from signing in to this directory to Yes and set the number of days before removing the external user to 30."
      },
      {
        "letter": "B",
        "text": "Create an access review with the action Block user from signing in for 30 days, then remove user from the tenant."
      },
      {
        "letter": "C",
        "text": "Run a PowerShell script every month that deletes guest accounts."
      },
      {
        "letter": "D",
        "text": "Create a lifecycle workflow that deletes all guest accounts after 30 days."
      },
      {
        "letter": "E",
        "text": "Set the access package policy to expire after 30 days."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- Under **ID Governance > Entitlement management > Settings**, the **Manage the lifecycle of external users** section controls what happens when a user loses their **last access package assignment**.\n- **Block external user from signing in to this directory** set to **Yes** blocks sign-in immediately. A blocked user cannot re-request the access package or any other access in the directory, so this setting must be used with care.\n- **Remove external user** set to **Yes** deletes the guest account after the configured number of days; **0** removes it immediately.\n- Entitlement management only removes accounts that were **invited through entitlement management**. A guest that already existed before the assignment remains in the directory.\n\n- **B** applies to guests denied in a review, not to users who simply run out of assignments.\n- **C** and **D** are indiscriminate and delete guests that must be kept.\n- **E** ends the assignment but does not block sign-in or delete the account.",
    "source": "LP4 Module 1.6 (external user lifecycle settings)."
  },
  {
    "id": 159,
    "domain": "governance",
    "topic": "Conditional Access troubleshooting evidence",
    "stem": "A user reports that access to an application was blocked. You must identify which Conditional Access policies applied, which condition matched, and what a policy in report-only mode would have done.\n\nWhere should you look?",
    "options": [
      {
        "letter": "A",
        "text": "The Conditional Access tab of the sign-in log entry for that sign-in."
      },
      {
        "letter": "B",
        "text": "The audit log filtered to the Policy category."
      },
      {
        "letter": "C",
        "text": "The Identity Secure Score improvement actions."
      },
      {
        "letter": "D",
        "text": "The risky sign-ins report."
      },
      {
        "letter": "E",
        "text": "The results of the latest access review."
      }
    ],
    "answers": [
      "A"
    ],
    "explanation": "- The **sign-in log** records each authentication attempt. Its **Conditional Access** tab lists the policies that **applied**, the policies that **did not apply** with the reason, and the **report-only** results, including which conditions and controls were evaluated.\n- The same entry shows the **authentication requirement**, the **grant controls** satisfied, and the **session controls** in effect, which is usually enough to explain a block without opening a support case.\n- For aggregate trends, the **Insights and reporting** workbook summarizes policy impact and report-only outcomes.\n\n- **B** records configuration changes, not policy evaluation.\n- **C** reports security posture, not a single sign-in.\n- **D** covers risk detections, not Conditional Access evaluation.\n- **E** covers access decisions, not sign-in policy.",
    "source": "LP4 Module 4.3 (sign-in log analysis and Conditional Access troubleshooting)."
  }
];

