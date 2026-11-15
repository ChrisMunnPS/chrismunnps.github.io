// SC-300 Exam Simulator - question bank
// Generated from the practice exam and answer key. Do not edit by hand.
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
        "text": "Two break-glass emergency access accounts should retain permanent Global Administrator assignments."
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
    "explanation": "PIM requires **Premium P2**, stated as a plain note in the course. The zero-standing-access model has exactly one documented exception: **two break-glass emergency access accounts** that keep **permanent Global Administrator** assignments.\n\n- **B** is wrong. **Eligible roles can only be assigned in PIM**; permanent active assignments are the ordinary Entra ID and Azure role assignments created elsewhere.\n- **D** is inverted for the same reason.\n\nEmergency account requirements in full: **two or more**, **cloud-only** using the **`.onmicrosoft.com`** domain, not federated or synchronized, no dependence on an individual's device or phone, credentials that do not expire or get cleaned up for lack of use, **permanent Global Administrator**, at least one account **excluded from all Conditional Access policies**, and at least one using an MFA mechanism **different** from other administrator accounts — also ensuring no per-user MFA policy applies. Validate them **at least every 90 days**, on IT staff changes, and on subscription changes, and monitor their sign-ins with alerts.",
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
  }
];

