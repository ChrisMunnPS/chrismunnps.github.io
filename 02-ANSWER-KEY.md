# SC-300 Practice Examination - Answer Key

Mark your answers first, then read the explanations.

## Quick answer grid

| Q | Ans | Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|-----|---|-----|---|-----|---|-----|---|-----|
| 1 | A | 27 | A | 53 | A and B | 79 | A | 105 | A |
| 2 | B | 28 | A | 54 | A and C | 80 | A, B, and C | 106 | A |
| 3 | A and C | 29 | B | 55 | B | 81 | A | 107 | A, B, and C |
| 4 | C | 30 | A and B | 56 | B | 82 | A and B | 108 | A |
| 5 | B | 31 | B | 57 | B | 83 | A, B, and C | 109 | A |
| 6 | A and B | 32 | A | 58 | A and B | 84 | A | 110 | A |
| 7 | A | 33 | A and C | 59 | A | 85 | A and B | 111 | A |
| 8 | A and D | 34 | A | 60 | A and C | 86 | A | 112 | A |
| 9 | B | 35 | C | 61 | A | 87 | A, B, and C | 113 | A, B, and C |
| 10 | B | 36 | B | 62 | A and B | 88 | A | 114 | A and B |
| 11 | B | 37 | A and D | 63 | A | 89 | A | 115 | A |
| 12 | A | 38 | A, B, and C | 64 | A | 90 | A, B, and C | 116 | A, B, and C |
| 13 | A | 39 | A | 65 | A | 91 | A | 117 | A and B |
| 14 | A | 40 | B | 66 | A | 92 | A | 118 | A |
| 15 | A and C | 41 | A | 67 | A | 93 | A | 119 | A and B |
| 16 | A, B, and D | 42 | A and D | 68 | A and B | 94 | A | 120 | A, B, and C |
| 17 | A and C | 43 | A, C, and D | 69 | A | 95 | A, B, and C | 121 | A and B |
| 18 | A | 44 | A | 70 | A | 96 | A | 122 | A |
| 19 | B | 45 | B | 71 | A | 97 | A | 123 | A and B |
| 20 | A and C | 46 | B | 72 | A | 98 | A | 124 | A |
| 21 | B | 47 | B | 73 | A | 99 | A | 125 | A and B |
| 22 | A, C, and D | 48 | B | 74 | A | 100 | A | 126 | A |
| 23 | B | 49 | B | 75 | A | 101 | A | 127 | A, B, and C |
| 24 | A and B | 50 | B | 76 | A, B, and C | 102 | A | 128 | A and B |
| 25 | B | 51 | A and B | 77 | A | 103 | A | 129 | A |
| 26 | A and C | 52 | B | 78 | A | 104 | A, B, and C |  |  |

Multi-answer items list every required letter.

Questions 130 to 159 (case studies and the extended set) use the grid below.

| Q | Ans | Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|-----|---|-----|---|-----|---|-----|---|-----|
| 130 | B | 136 | A, C, and E | 142 | A and C | 148 | A, B, and C | 154 | B |
| 131 | B and D | 137 | B | 143 | A, B, and E | 149 | D | 155 | A and B |
| 132 | B | 138 | A | 144 | A, B, and C | 150 | A | 156 | C |
| 133 | C | 139 | A and C | 145 | A, C, and D | 151 | B | 157 | A and D |
| 134 | D | 140 | C | 146 | A, B, and C | 152 | A and D | 158 | A |
| 135 | A and C | 141 | A | 147 | A and B | 153 | A and B | 159 | A |

---

## Domain 1 - Implement and manage user identities

### Question 1 - Administrative units

Correct: **A**

Administrative units are Entra ID containers used to scope a role's permissions to a defined portion of the organization — the cloud equivalent of on-premises organizational units. An administrative unit can contain **only users, groups, and devices**. You assign a role with the administrative unit as the scope, so the holder can act only on objects in that unit.

- **B** is wrong. Assigning a role to a security group grants the role to its members at **tenant** scope, not regional scope. Group-based role assignment is about who holds the role, not what it can touch.
- **C** is wrong. Custom roles in Entra ID can be assigned only at **directory-level scope or app registration resource scope** — not at an arbitrary subset of users.
- **D** is wrong. On-premises OUs govern Active Directory, not Microsoft Entra ID. Delegating an OU does not restrict Entra administrative actions.

Roles explicitly documented as usable at administrative-unit scope are the **License, Password, Authentication, Helpdesk, and User Administrator** roles.
Source: LP3 Module 1.5 (configure delegation by using administrative units).

### Question 2 - Custom roles

Correct: **B**

Custom roles in Microsoft Entra ID can be assigned at **directory-level scope or at an app registration resource scope**. The app-registration scope is what lets you delegate management of a single application without granting directory-wide rights.

- **A** is incomplete. Directory scope is allowed, but it is not the only option — that is the whole point of app registration scope.
- **C** is wrong. Administrative units scope built-in roles over users, groups, and devices; they are not a custom-role assignment scope for app registrations.
- **D** describes **Azure RBAC** scopes (management group, subscription, resource group, resource). Those apply to Azure resources, not to Entra directory roles.

Two practical caveats worth remembering: custom roles work only in the current app registration experience (not the legacy one), and they grant no portal access at all when **Restrict access to Microsoft Entra ID administration** is set to **Yes**. Assignments also appear only under **All applications**, not **Owned applications**.
Source: LP3 Module 1.3 / 1.6; LP1 Module 1.5.

### Question 3 - Domain limits and primary domain

Correct: **A** and **C**

- The primary domain must be a **verified custom domain that is not federated**.
- The documented limits are **900 managed** domain names, dropping to **450** when all configured domains are federated with on-premises Active Directory.

- **B** is wrong. Changing the primary domain sets the default for **new** users; it **does not change existing users' user names**. Existing UPNs must be updated separately.
- **D** is wrong. The initial `*.onmicrosoft.com` domain cannot be removed. It is the structural fallback for the tenant — even ForceDelete renames affected objects **into** that initial domain rather than eliminating it.

Related: changing the primary domain does not require re-verification, but a subdomain such as `europe.contoso.com` is automatically verified once the root domain is verified, and only a **Global Administrator** can manage domains.
Source: LP3 Module 1.7 (configure and manage custom domains).

### Question 4 - ForceDelete

Correct: **C**

ForceDelete is **asynchronous**. It requires **fewer than 1,000 references** to the domain — 421 here, so that threshold is met. It renames affected objects back to the initial default domain: users' **UPN, EmailAddress, and ProxyAddress**; groups' **EmailAddress**; and applications' **identifierUris**. It **fails when an application that must be renamed is multi-tenant**, which is the case here.

- **A** is wrong on both counts: the operation is asynchronous, not synchronous, and it cannot complete with a multi-tenant app referencing the domain.
- **B** is wrong on timing. It does not fail immediately for that reason alone; the multi-tenancy problem surfaces during the asynchronous rename.
- **D** is wrong. 400 users plus 20 groups plus one app is well under the 1,000-reference cap.

Two more ForceDelete limits: it fails if the domain was **purchased through Microsoft 365 domain subscription services**, and it fails for a **partner administering on behalf of another customer**. Any references provisioned by Exchange — including mail-enabled security groups and distribution lists — must first be fixed in the **Exchange Admin Center**.
Source: LP3 Module 1.7.

### Question 5 - Group-based licensing

Correct: **B**

Group-based licensing evaluates the **union** of product and service licenses a user receives from all groups plus direct assignments. The **same license obtained from multiple sources is consumed only once**, so Priya does not consume two E3 seats. For usage location: users who receive a license through a group and have no usage location on their profile **inherit the directory's location**.

- **A** is wrong. Duplicate consumption does not occur, and missing usage location does not fail the group assignment; the directory location is inherited.
- **C** is wrong. The model is additive union, not highest-tier-wins. Also, separately disabling individual service plans (for example, turning off Viva Engage for a subset) is how you trim a product, not by dropping licenses.
- **D** is wrong. Direct and group assignments combine rather than one taking priority.

Practical details: license changes are typically effective **within minutes** of a membership change; configuration is done in the **Microsoft 365 admin center**; failure modes are insufficient available licenses and conflicting service plans assigned simultaneously. Always set usage location at user creation.
Source: LP3 Module 2.8 / 2.9.

### Question 6 - Dynamic groups

Correct: **A** and **B**

Membership types are **Assigned**, **Dynamic User**, and **Dynamic Device**. **Dynamic Device applies to security groups only**, and **Microsoft 365 groups support dynamic users but not dynamic devices**. That pairing is the contrast the exam tests.

- **C** is wrong. Dynamic membership requires **Microsoft Entra ID P1** — not Governance — with Intune for Education covering device-based rules. Dynamic groups do not need the Governance or P2 tier.
- **D** is wrong. Evaluation is not a fixed 24-hour job: when a member's attributes change, **all dynamic membership rules in the tenant are re-evaluated**.

Example rule: add all users whose **Department** equals **Marketing**.
Source: LP3 Module 2.5; Module 3.9.

### Question 7 - Device join types

Correct: **A**

**Microsoft Entra registered** is the BYOD model: registration does **not** require the organizational account to sign in to the device. The user signs in with a local account (for example a Microsoft account) with an Entra account attached, registration typically happens on first access to a work app or manually in Settings. Ownership can be **user or organization**. Supported platforms include Windows 10+, **macOS 10.15+**, **iOS 15+**, Android, and **Linux (Ubuntu 20.04/22.04/24.04 LTS, RHEL 8/9 LTS)**. Devices receive Conditional Access when enrolled in Intune, or through app protection policy.

- **B** is wrong. Entra joined **requires** an organizational account to sign in — the opposite of the requirement — and its macOS support is 13+ (preview) while registered goes back to 10.15+.
- **C** is wrong. Hybrid join supports Windows Server 2016/2019/2022 but not Linux, and it requires on-premises AD domain join, which the field users' own laptops do not have.
- **D** is wrong. Registration is not a domain-join model; hybrid join is the AD-connected option.

Quick contrast to hold: **registered** = local sign-in, attached work account, BYOD; **joined** = cloud-only org-owned, organizational account required, SSO to cloud and on-prem; **hybrid joined** = AD plus Entra, Group Policy and existing imaging continue to work.
Source: LP3 Module 2.7 (configure and manage device registration).

### Question 8 - Custom security attributes

Correct: **A** and **D**

Custom security attributes are business-specific key-value pairs defined and assigned to Entra objects. Data types are **Boolean, integer, and string**, **single or multiple values**, **free-form or predefined**, with an optional description, and they are **available tenant-wide**. They can be assigned to **users** and **enterprise applications (service principals)**, and to **directory-synced users from on-premises AD**.

- **B** is wrong, and it is an explicit "Note" in the course: custom security attributes are **not supported** in **SAML token claims**, **JWT claims**, or **Microsoft Entra Domain Services**.
- **C** is wrong. Fine-grained access control to Azure resources — for example Azure Storage blobs — is one of the documented use cases.

Typical uses: labeling all employees with an hourly salary value that only administrators can see, and categorizing thousands of applications for a filterable inventory.
Source: LP3 Module 2.11.

### Question 9 - Guest invitation defaults

Correct: **B**

The default invitation policy is **"All users, including guests, can invite guest users"**, even without an administrative role. That is the least restrictive of the four options: turn off invitations; only admins and Guest Inviter role; admins, Guest Inviter role, and members; all users including guests.

- **A** is a real policy option, but it is not the default.
- **C** is wrong on both halves. There is no approval step in the default policy, and an invitation **does not expire** — the text states plainly that "an invitation of a user does not expire." The guest must redeem it, but it does not time out.
- **D** is wrong. External collaboration is on by default; you restrict it rather than enable it.

Invitations can target the directory, a group, or an application.
Source: LP3 Module 3.3 / 3.5.

### Question 10 - Guest directory permissions

Correct: **B**

By default guests are **blocked from listing users, groups, or other directory resources**, but they **can manage their own profile, change their own password, and retrieve some information** about other users, groups, and apps. They **can see the membership of non-hidden groups**. Administrators can tighten this further, down to the guest's own profile only.

- **A** is wrong. Enumeration is precisely what guests cannot do by default.
- **C** is wrong. Only **non-hidden** groups are visible; hidden group membership is not.
- **D** is wrong. That is the most restrictive setting, not the default. Guests retain limited read capability.

Related: **UserType** has **no relation** to how the user signs in or to their directory role. A guest can be added to administrative roles — which grants full read/write in that role — and Microsoft recommends PIM for guest privileged access. A guest can also be converted to Member, but that is not recommended as an atomic activity and applications should not depend on the value.
Source: LP3 Module 1.10 knowledge check; Module 3.2 / 3.9.

### Question 11 - SAML/WS-Fed IdP federation

Correct: **B**

Federation **does not change authentication for guests who already redeemed**. Those guests continue with their original method. But **deleting the federation blocks sign-in** for any guest who relies on it, and the documented remedy is to **reset the redemption status** so they can redeem again.

- **A** is wrong. Federation is not applied retroactively to already-redeemed guests.
- **C** is wrong on the second half. New invitations are affected, but so is sign-in for existing guests using that federation — that is the trap.
- **D** is wrong. **Multiple domains can be associated with a single federation configuration**, and the partner domain may be verified or unverified.

Also note the rename: what was called **direct federation** is now **SAML/WS-Fed identity provider federation**, and it works with any IdP supporting SAML 2.0 or WS-Federation.
Source: LP3 Module 3.13 (configure identity providers).

### Question 12 - Cross-tenant access and trust settings

Correct: **A**

Cross-tenant access settings control **inbound** (external organizations accessing your resources) and **outbound** (your users accessing external organizations), and can be scoped to everyone or to specific users, groups, and applications. **Trust settings** on the inbound side determine whether your Conditional Access **trusts MFA** from the home tenant and whether to require **compliant device** or **hybrid Entra joined device**. Because Contoso is the resource tenant, inbound is the relevant direction.

- **B** is wrong. Outbound governs Contoso users going to Fabrikam; the requirement is about Fabrikam users coming into Contoso.
- **C** is wrong. Cross-tenant trust settings exist precisely to let you accept the partner's MFA and device claims; Conditional Access alone would otherwise re-prompt.
- **D** is wrong. Direct connect requires **mutual** enablement; it does not require disabling B2B collaboration.

Defaults to remember: **B2B collaboration is enabled** and **B2B direct connect is blocked**. Direct connect currently supports **Teams shared channels only**. Sovereign clouds are configured under **Microsoft cloud settings**.
Source: LP3 Module 3.14.

### Question 13 - PHS vs PTA vs federation

Correct: **A**

**PTA** validates passwords against on-premises Active Directory through lightweight agents, so disabled, locked-out, expired-password, and sign-in-hours conditions are enforced at sign-in. **PHS** syncs a hash of the hash and is described as the least effort in deployment, maintenance, and infrastructure — but it does **not** immediately enforce on-premises account state changes. Critically, **failover from PTA to PHS is not automatic**; an administrator must switch the sign-in method manually in Microsoft Entra Connect.

- **B** is wrong. PHS does not enforce on-premises state immediately — after bulk changes you must run a new sync cycle. And PTA does not need AD FS.
- **C** is wrong. Federation is not required for these controls; PTA handles them, and federation is chosen for smartcards, on-premises or third-party MFA, or `DOMAIN\username` sign-in.
- **D** is wrong. The automatic-failover claim is the classic trap.

Other facts: PTA is a **tenant-level** feature affecting all managed domains, three agents are recommended (so one can fail while another is maintained), and switching from AD FS to PTA requires waiting **at least 12 hours** before shutting down AD FS. Microsoft recommends enabling PHS alongside whichever method you choose, for resilience and for Identity Protection.
Source: LP3 Module 4.3 / 4.4 / 4.6.

### Question 14 - Synchronization error types

Correct: **A**

Matching works in two passes: **hard match** on incoming **sourceAnchor** against the cloud **immutableId**, then **soft match** on **ProxyAddresses and UserPrincipalName**. **InvalidSoftMatch** occurs when the hard match finds nothing **and** the soft match finds an object that **already has a different immutableId** — soft match only succeeds when the target has no immutableId. **AttributeValueMustBeUnique** is the simpler case: a duplicate proxyAddress or UPN being added or updated.

- **B** is wrong. An over-length attribute produces **LargeObject / ExceededAllowedLength**, not InvalidSoftMatch. sourceAnchor must be **fewer than 60 characters**, with non-alphanumeric characters counting as three.
- **C** is wrong. Different object types sharing soft-match values is **ObjectTypeMismatch**.
- **D** is wrong. Duplicate Attribute Resiliency does not fix duplication; it allows new objects to be provisioned and, when enabled, means you will not see InvalidSoftMatch **during provisioning of new objects**. It is not the only cause.

Other common causes of InvalidSoftMatch: the object moved from one forest to another so the sourceAnchor changed, the object was deleted and recreated on-premises, or Connect was reinstalled with a different sourceAnchor. One more distinct error: **Existing Admin Role Conflict** occurs when a cloud object with the same UPN holds an admin role — Connect refuses to soft-match it; the fix order is remove all admin roles, **hard delete** the cloud object, let sync soft-match, then restore the roles.
Source: LP3 Module 4.7 (troubleshoot synchronization errors).

### Question 15 - Connect Health

Correct: **A** and **C**

Connect Health **requires Microsoft Entra ID Premium P1**; without it the configuration cannot be completed in the portal. Deleting a server **stops data collection and monitoring**, **does not uninstall the agent**, and **does not delete data already collected** (subject to the Azure retention policy). To monitor the server again you must **uninstall and reinstall** the agent.

- **B** is wrong. The agent remains installed, which is exactly why re-adding the server requires reinstalling rather than simply re-registering.
- **D** is wrong. **Email notifications are enabled by default**, and can be configured per service, optionally notifying all global administrators plus additional recipients.

Related: agent prerequisites include outbound connectivity to Azure endpoints by IP, TLS inspection filtered or disabled, PowerShell 4.0 or newer, and FIPS disabled. Azure RBAC for Connect Health uses **Owner**, **Contributor**, and **Reader**; Invite Users is not supported.
Source: LP3 Module 4.8 / 4.9.

## Domain 2 - Implement authentication and access management

### Question 16 - Authentication method capabilities

Correct: **A**, **B**, and **D**

- **Password** is the one method that cannot be disabled.
- **Security questions** are SSPR-only, apply to **non-administrative accounts only**, use **35 predefined localized questions**, allow custom questions up to **200 characters**, and administrators **cannot read or change** a user's questions or answers.
- The maximum is **five** OATH hardware tokens **or** authenticator apps configured at once.

- **C** is wrong. **Email address is SSPR-only** and is never an MFA method.
- **E** is wrong. Entra ID supports **OATH-TOTP SHA-1** with **30-second or 60-second** tokens. **OATH HOTP is not supported.**

Other method limits worth knowing: secret keys are limited to **128 characters**; **voice call is not available in the free/trial tier**; app passwords work only with **per-user MFA** and are intended for legacy non-browser apps.
Source: LP2 Module 1.5 / 2.2 / 2.3.

### Question 17 - Smart lockout

Correct: **A** and **C**

Defaults are **10 failed attempts**, then a **one-minute lockout**, with additional failures causing longer lockouts at a growth rate Microsoft does not disclose. Smart lockout is **always on for all Entra ID customers**; what requires **P1 or higher** is **customization** of the threshold and duration. Counters are **per data center**, so attempts available scale with data center count.

- **B** is wrong. **Familiar and unfamiliar locations have separate lockout counters** — which is exactly why the travelling user can be locked out again.
- **D** is wrong. It is always on and cannot be turned off.

Refinements: only the **last three bad password hashes** are tracked, so repeating the same bad password does not advance the counter. In hybrid environments set the AD DS lockout threshold **two to three times higher** than the Entra threshold, with a longer Entra lockout duration expressed in seconds. AD FS equivalents are **Extranet Lockout** and **Extranet Smart Lockout**. The exercise lab configures **Lockout duration in seconds = 120** with **Mode = Enforced**.
Source: LP2 Module 2.7 / 2.8.

### Question 18 - Password protection deployment

Correct: **A**

The licensing table is: cloud-only users with the **global** list = **Entra ID Free**; cloud-only users with a **custom** list = **P1 or P2**; users **synced from on-premises AD DS** = **P1 or P2** for both lists.

- **B** is wrong. **Audit mode is the default initial setting**; passwords that would be blocked are written to the event log, and you switch to **Enforce** after validating. Microsoft recommends at least one domain controller promotion and one demotion during the audit period.
- **C** is wrong and is an explicit warning: **never install the Password Protection Proxy and the Application Proxy on the same machine**, because their agent updater versions are incompatible.
- **D** is wrong. The design deliberately requires **no new ports on domain controllers**, **no AD DS schema changes** (it uses the existing container and a `serviceConnectionPoint`), **no new domain/forest functional level**, and no accounts created in AD DS. Cleartext passwords never leave the DC.

Other points: the policy is enforced **only where the DC agent is installed**; DC agent installation and every DC agent upgrade **require a reboot**, while the proxy upgrade is in place with **no reboot**; do not install the DC agent on read-only domain controllers; passwords set before deployment are never validated; accounts set to "password never expires" are exempt.
Source: LP2 Module 2.6.

### Question 19 - FIDO2 and passwordless prerequisites

Correct: **B**

A user must already have **at least one MFA method registered**; otherwise they must add one first. Registration happens at `https://myprofile.microsoft.com` under **Security info > Add method > Security key**, choosing **USB device** or **NFC device**, then setting a PIN and performing a gesture.

- **A** is wrong. FIDO2 cannot bootstrap a user who has nothing registered.
- **C** is wrong. For cloud-only FIDO2, a **Microsoft Entra ID Premium subscription is optional** — it is needed only for **automatic MDM enrollment** when the device joins Entra ID. MFA is a prerequisite, but Premium licensing is not.
- **D** is wrong. Web passwordless sign-in requires a supported browser on **Windows 10 version 1903+ or Windows 11**, and modern management (Intune or a third-party MDM) is optional.

Administration path: **Protection > Authentication methods > Authentication method policy > FIDO2 Security Key**, then set Enable to **Yes** and target **All users** or **Select users**.
Source: LP2 Module 2.2 / 1.5.

### Question 20 - Windows Hello for Business

Correct: **A** and **C**

The credential is a **certificate or asymmetric key pair** bound to the device, with the token bound to the device. Keys live in hardware (**TPM 1.2 or 2.0 for enterprises; TPM 2.0 for consumers**) or in software, according to policy. With a TPM the **private key never leaves the device**. The second factor is the **PIN (something you know)** or a **biometric (something you are)**; the gesture does not roam, biometric templates are stored locally, and the **PIN is never stored or shared**.

- **B** is wrong and contradicts the design. The PIN is not stored in the TPM and is not synchronized.
- **D** is wrong. Hardware-backed keys in a TPM are the recommended configuration; software storage is a policy option, not the only one.

For phased rollouts, **KeyCredential Admins** need AD write and read on the key attribute for Entra Connect synchronization, but if the domain has **Windows Server 2016 or later domain controllers** you can skip that group because the **KeyAdmins** group is created with the first WS2016 DC. **Microsoft Pluton** is a security processor built into the CPU with AMD, Intel, and Qualcomm that emulates a TPM and protects credentials even under malware or full physical possession.
Source: LP2 Module 2.4.

### Question 21 - Entra ID sign-in for Azure VMs

Correct: **B**

Entra ID sign-in for VMs is supported on **Windows Server 2022 and 2025 or later (Desktop Experience)**, **Windows 11 24H2 or later**, and **Linux** (the documented example is Ubuntu 18.04 LTS). Linux requires a **system-assigned managed identity**. You enable **"Login with Microsoft Entra ID"** and then grant access through **Azure role assignments**.

- **A** is wrong on both the OS floor and the identity type, and it names the wrong identity kind for Linux.
- **C** is wrong. The point of the feature is to avoid domain dependency and local accounts.
- **D** is wrong. No Governance licensing is stated.

Benefits: no local administrator accounts to manage, the Entra password policy applies, and Conditional Access with MFA and risk signals can gate the connection.
Source: LP2 Module 2.10.

### Question 22 - Security defaults

Correct: **A**, **C**, and **D**

Security defaults are free and **enabled at creation on new tenants** (tenants created on or after **October 22, 2019** may already have them). They require all users to register for MFA, require administrators to do MFA, block legacy authentication, require MFA when necessary, and protect privileged activities such as Azure portal access. **Sixteen** named admin roles are re-prompted at every sign-in, including Global, Application, Authentication, Authentication Policy, Billing, Cloud Application, Conditional Access, Exchange, Helpdesk, Identity Governance, Password, Privileged Authentication, Privileged Role, Security, SharePoint, and User Administrator.

- **B** is wrong. Registration is required **immediately — there is no grace period** — and the prompt uses **number matching** to defeat MFA fatigue.
- **E** is wrong. Security defaults and Conditional Access are alternatives: organizations that implement Conditional Access policies replacing security defaults must **disable** security defaults. Disabling requires a reason.

Legacy authentication means clients not using modern auth (for example Office 2010) or mail protocols IMAP, SMTP, and POP3; security defaults block Exchange ActiveSync basic authentication. Organizations that should not use it: those already using Conditional Access, those with P1/P2 licenses, and those with complex requirements.
Source: LP2 Module 3.2 / 3.3.

### Question 23 - Conditional Access licensing and default behavior

Correct: **B**

P1 covers Conditional Access with **standard rules**. **Risk-based conditions** — sign-in risk and user risk — require **P2** because they come from Identity Protection. And the default behavior when no assignment applies and no policy is in effect is to **issue a token**. A policy scoped to Sales does not exclude or affect Finance.

- **A** is wrong on licensing.
- **C** is wrong on the default. There is no implicit deny; if you want to block everyone else you must create a separate block policy.
- **D** is wrong on both counts.

Also: **Entra ID Free and free Office 365 have no Conditional Access at all**; Microsoft 365 E3 and above include P1-equivalent Conditional Access. **Block overrides all other grant controls** for a user. Every new policy should start in **report-only** mode.
Source: LP2 Module 3.4 / 3.5.

### Question 24 - Testing and troubleshooting Conditional Access

Correct: **A** and **B**

**Report-only** evaluates the policy and records the result without enforcing it, and is the recommended state for every new policy. The **What-If** tool simulates a sign-in for a user, target app, and conditions and shows which policies and session controls apply. For a live failure, the sign-in record's **Conditional Access** tab lists each policy applied and its result, and the **Troubleshooting and support** tab explains the reason. The **Policy details (preview)** view compares collected values against policy requirements.

- **C** is wrong and dangerous. Toggling policies in production risks locking out users, and it gives you no evidence of which condition matched.
- **D** is wrong. Provisioning logs track user and group provisioning to applications, not Conditional Access evaluation.

Useful filter values on sign-in logs: **Not applied** (no policy applied), **Success** (one or more policies applied, though not necessarily all conditions), **Failure** (the user and app condition of at least one policy was satisfied and grant controls were unsatisfied or set to block). A support request needs the **request ID and date/time**.
Source: LP2 Module 3.7.

### Question 25 - Device-based grant controls

Correct: **B**

Compliance comes from **Intune** policy — PIN, encryption, minimum and maximum OS version, not jailbroken or rooted — and is evaluated in Entra ID, so it fits devices that are managed but not hybrid joined. For personal mobile devices, **Require approved client app** combined with **Require app protection policy** provides data protection without enrollment (MAM-WE).

- **A** is wrong. Requiring hybrid join when devices are not hybrid joined can lock out the **entire organization**. That control is one of the listed configurations to avoid when scoped to all users and all apps.
- **C** is wrong on the second half. "Require device to be marked as compliant" **does not block Intune enrollment**.
- **D** is wrong. Device state is evaluated for registered devices; approved-client-app policies require the device to be **registered** in Entra ID first.

Practical detail: **Require approved client app** needs two policies — one for modern authentication clients and a separate one for Exchange ActiveSync clients — plus P1/P2 and Intune licensing. Operation on-premises is limited to Outlook for iOS and Android with hybrid modern authentication.
Source: LP2 Module 3.5 / 3.8.

### Question 26 - Session controls and CAE

Correct: **A** and **C**

**Sign-in frequency** defaults to a **rolling 90 days** and now also governs **MFA re-prompts**. A device unlock or interactive sign-in satisfies the policy — for example a 90-minute lock resets a one-hour clock. **CAE** relies on access tokens valid **one hour** by default; when a critical event occurs the resource provider returns a **401 with a claims challenge**, and the client bypasses its cache and reauthenticates.

- **B** is wrong. Sign-in frequency now applies to MFA as well as browser sessions.
- **D** is wrong. CAE does not require a hybrid-joined device.

CAE benefits: near-real-time revocation on user termination or password change, location-policy enforcement, and preventing token export outside a trusted network. Other session controls include **persistent browser session** (by default users see "Stay signed in?" on personal devices and choose) and **Conditional Access App Control**, which routes sessions through Defender for Cloud Apps to block download, cut, copy, or print on unmanaged devices.
Source: LP2 Module 3.9.

### Question 27 - Identity Protection risk policies

Correct: **A**

Microsoft's recommendation is **user risk threshold High** with **allow access and require password change**, and **sign-in risk threshold Medium and above** with **require MFA**. The distinction behind the thresholds: **user risk** is the probability that the account itself is compromised, while **sign-in risk** is the probability that the specific sign-in was not performed by the account owner.

- **B**, **C**, and **D** all mis-set the thresholds or apply block where the recommendation is remediation. Blocking is available, but it is not the recommended default and creates a denial-of-service risk for legitimate users.

Self-remediation requires the user to have previously registered **both MFA and SSPR**, which is why combined security information registration is recommended. Notably, **"Dismiss user risk"** closes the risk events but does not change the password, so the identity is not returned to a known-safe state.
Source: LP2 Module 4.3 / 4.4.

### Question 28 - Identity Protection roles

Correct: **A**

**Security Operator** can view all reports and the overview, **dismiss user risk, confirm safe sign-in, and confirm compromise**, but cannot configure or change policies, reset passwords, or configure alerts — and notably **cannot access the Risky sign-ins report**. **Conditional Access Administrators** can create policies that use sign-in risk as a condition.

- **B** is wrong. **Security Administrator** has broad access and can configure policies, which exceeds the requirement. Also, Security Administrator **cannot reset a user's password**, which is a deliberate limitation worth remembering.
- **C** is wrong. **Security Reader** is view-only and cannot give feedback on detections, so the analyst could not dismiss risk. Privileged Role Administrator manages role assignments, not Conditional Access.
- **D** is wrong on both roles.

Layering to remember: **Security Reader** = view only; **Security Operator** = view plus triage actions but no configuration and no risky sign-ins report; **Security Administrator** = full configuration but no password reset.
Source: LP2 Module 4.2 / 4.6.

### Question 29 - Identity Protection reports

Correct: **B**

The windows and caps are deliberately different: **risky sign-ins = 30 days, 2,500 rows**; **risk detections = 90 days, 5,000 rows**. Exports are **CSV or JSON**.

- **A** flattens both sets of numbers.
- **C** swaps the two reports — the most common trap in this area.
- **D** imports the 250,000-record figure from the sign-in and audit log downloads, which is a different feature.

For context, Identity Protection as a whole requires **Microsoft Entra ID Premium P2**. Free and P1 see only **limited** risky-user data (medium and high risk, no details drawer or risk history) and limited risky sign-ins with no risk detail or level.
Source: LP2 Module 4.6.

### Question 30 - Azure RBAC fundamentals

Correct: **A** and **B**

Limits are **4,000 role assignments per subscription** (including assignments made at resource group and resource scope), **500 per management group**, and **5,000 custom roles per directory**.

- **C** is wrong. **Contributor** can create and manage all resource types but **cannot grant access**. **Owner** has full access including granting access, and **User Access Administrator** can assign access without managing resources.
- **D** is wrong. Custom Azure roles are **stored in Microsoft Entra ID** and are shareable across subscriptions.

Scopes are **management group, subscription, resource group, and resource**, and permissions **inherit downward**. Custom role JSON uses `properties.roleName`, `description`, `assignableScopes[]`, and `permissions[]` with `actions`, `notActions`, `dataActions`, and `notDataActions`; the `*` wildcard is allowed at any level.
Source: LP2 Module 5.2 / 5.3 / 5.6.

### Question 31 - Managed identities and Key Vault

Correct: **B**

A **user-assigned** managed identity is a standalone Azure resource with a lifecycle independent of any single compute resource, so it survives VM rebuilds and can be attached to new instances without re-granting permissions. The vault's access policy model is capped at **1,024 access policy entries per vault**, so 1,100 entries cannot fit; the **Azure RBAC** model scales and centralizes permission management.

- **A** is wrong. Access policies do have a 1,024-entry limit, and a system-assigned identity dies with the resource, forcing re-granting.
- **C** is wrong. It reintroduces the credential management problem managed identities exist to eliminate.
- **D** is wrong twice: system-assigned does not survive rebuild, and **Key Vault Reader can read metadata only — not secret contents or key material**.

Useful role details: **Key Vault Administrator** performs all **data plane** operations but cannot manage vault resources or role assignments; **Secrets User** reads secret contents; **Crypto User** performs cryptographic operations. Recommendation: one vault per application per environment.
Source: LP2 Module 5.4 / 5.5 / 5.7.

### Question 32 - Global Secure Access fundamentals

Correct: **A**

Global Secure Access combines **Microsoft Entra Internet Access** (an identity-centric, device-aware **secure web gateway**) and **Microsoft Entra Private Access** (ZTNA to private resources, building on Application Proxy but extending to any private resource, port, and protocol, with no VPN). Licensing requires **Entra ID P1 or P2 plus** an Internet Access and/or Private Access license, and the **Global Secure Access Administrator** role. Crucially, Microsoft-traffic Conditional Access policies are enforced **only when the GSA client is present**; traffic arriving through a remote network without the client bypasses the CA policy.

- **B** is wrong on licensing and on both product descriptions, and it inverts the client-enforcement fact.
- **C** is wrong. These are network access services, not governance features.
- **D** is wrong. The additional GSA license is required.

Internet Access capabilities include a compliant-network check that stops **stolen token replay**, **universal tenant restrictions**, web content category and domain filtering, and enriched logs.
Source: LP2 Module 6.2 / 6.3 / 6.7.

### Question 33 - Private Access and compliant network

Correct: **A** and **C**

Private Access connectors are lightweight agents on **Windows Server 2016+**, requiring **.NET 4.7.2+** and **TLS 1.2**, making **outbound** connections only, with outbound ports **80** (CRL download) and **443** (service communication). More than one server is recommended for high availability. For the network requirement, you enable CA signaling for Entra ID and then write a policy that **includes Any location**, **excludes All Compliant Network locations** (a named location of type Network Access), and **blocks** access.

- **B** is wrong. **NetBIOS is not supported** in Quick Access segments — use an FQDN such as `contoso.local/app1`, not `contoso/app1`. Supported destination types are IP address, FQDN including wildcard, IP range (CIDR), and IP-to-IP range.
- **D** is wrong. **Remote networks** use an IPSec tunnel from a CPE router and need **no client** on devices.

Two more traps: in the compliant-network policy you cannot select the generic **Office 365** cloud app — choose **Office 365 Exchange Online** or **Office 365 SharePoint Online**. And tenant restrictions tagging requires **both** the Global Secure Access Administrator and Security Administrator roles; data-plane protection covers Microsoft Graph and SharePoint Online, while third-party apps such as Slack are out of scope.
Source: LP2 Module 6.3 / 6.4 / 6.6 / 6.7.

## Domain 3 - Plan and implement workload identities

### Question 34 - Service principal vs application object

Correct: **A**

The service principal is the per-directory instance of an application. It holds directory-local settings: user and group app role assignments, user and admin consent grants, local policies including Conditional Access, claims transformation rules, attribute mappings for provisioning, and directory-specific app roles, name, and logo. Fabrikam editing its own service principal's name and logo and creating its own role assignments affects only Fabrikam.

- **B** is wrong on the second half. Redirect URIs live on the application object, which exists only in the home tenant, so Fabrikam cannot change them locally.
- **C** is wrong. The Application ID URI and client secrets are application-object properties. A secret created in the home tenant's app object is what every tenant's service principal references.
- **D** is wrong. The audience/supported account types are an application-object property. A customer tenant cannot change them.

Related trap: changes to the application object propagate to the **home-tenant** service principal only. Service principals in other tenants remain independent.
Source: LP1 Module 4.3 (application objects and service principals); Module 3.2.

### Question 35 - Delegated vs application permissions

Correct: **C**

Application permissions are used when the app runs without a signed-in user, such as background services and daemons. Because there is no user context to constrain the app, only an administrator can consent to application permissions.

- **A** and **B** are wrong. Delegated permissions require a signed-in user and the app acts as that user. With no signed-in user there is no context for a delegated permission to act in.
- **D** is wrong. Users can consent only to certain low-impact delegated permissions, never to application permissions.

Key contrast: delegated = least-privileged **intersection** of the granted permission and the signed-in user's own privileges, so the app can never exceed the user. Application = the full privilege level implied by the permission, for the app itself.
Source: LP1 Module 3.5 / 4.6 (permissions).

### Question 36 - Admin consent endpoint

Correct: **B**

The admin consent endpoint takes a specific tenant — either the tenant ID or any verified domain name — plus the client ID. The redirect URI, if used, must exactly match a registered redirect URI; `state` is recommended and `scope` is required.

- **A** is the classic trap. The tenant is required and you must **not** use `common`, because personal accounts cannot provide admin consent except in a tenant context. Prefer the tenant ID.
- **C** is the user consent/authorization endpoint, not the admin consent endpoint. It does not grant tenant-wide consent.
- **D** is not a consent endpoint at all.

Source: LP1 Module 3.6 (grant tenant-wide admin consent).

### Question 37 - Tenant-wide consent side effects

Correct: **A** and **D**

Granting tenant-wide consent from the **App registrations** blade replaces the tenant-wide grant: it revokes permissions previously granted tenant-wide and applies the currently configured set. Consent that individual users granted for themselves is separate and is not affected.

- **B** is wrong. It is a replace, not a merge, which is why a permission removed from the configuration stops being granted tenant-wide.
- **C** is wrong. User-scoped grants survive.

Also worth remembering: tenant-wide consent grants the application **and its publisher** access to organizational data, so review requested permissions first. If the app is already provisioned, the same operation is available from **Enterprise applications > Permissions > Grant admin consent**.
Source: LP1 Module 3.6.

### Question 38 - Redirect URI rules

Correct: **A**, **B**, and **C**

Redirect URI rules from the course: must begin with `https` except `localhost` in development; matching is case-sensitive and must match the running app's path case; the characters `! $ ' ( ) , ;` are unsupported.

- **D** is wrong. Fragments are not part of a valid redirect URI.
- **E** is wrong. Wildcards are not supported in redirect URIs.

Related behavior worth noting: if the registered URI has no path segment, a trailing `/` is appended in the response; if a path segment is present, no trailing slash is appended. Mismatches here are a common cause of `AADSTS50011`-style redirect errors.
Source: LP1 Module 4.4 (configure app authentication).

### Question 39 - App roles vs group claims

Correct: **A**

App roles are an alternative to group claims. Microsoft Entra ID emits a `roles` claim containing the role **values** granted to a user, both when assigned individually and when assigned through group membership. Two stated benefits: app roles avoid group overage, and app roles do **not** require Microsoft Entra ID P1 licensing.

- **B** is wrong. Filtering to assigned groups reduces the number of group claims but still relies on groups and does not deliver the licensing benefit.
- **C** inverts the licensing fact. App roles are precisely the option that does not need P1.
- **D** is wrong. Dynamic groups do not solve token size and still produce group claims.

Source: LP1 Module 3.7 / 4.7 (app roles).

### Question 40 - Baseline app role design

Correct: **B**

When assignment is required, a user or group assigned to the application must be assigned one of the defined app roles. If the only roles defined are elevated, every assignee receives elevated permissions, which violates least privilege. The documented best practice is to always define a baseline role with no elevated permissions, such as `user` or `reader`.

- **A** is wrong. Assignment without a role is not how the requirement behaves; an assigned principal must receive one of the defined roles.
- **C** is wrong. Token issuance does not require a default role in the manifest.
- **D** is wrong. There is no fallback to directory default access.

Source: LP1 Module 4.7 (create app roles).

### Question 41 - Application administrator roles

Correct: **A**

**Application Developer** grants the ability to create app registrations even when **Users can register applications** is No, and to consent on the developer's own behalf even when the user-consent setting is No. It is narrowly scoped to that purpose.

- **B** is wrong. Application Administrator manages all aspects of **all** enterprise applications, app registrations, **and application proxy settings** in the directory — broader than required and explicitly including proxy.
- **C** is wrong. Cloud Application Administrator is Application Administrator **minus** application proxy, so it solves the proxy objection, but it is still a directory-wide administrative role over **every** application rather than the developer-scoped role. Neither admin role can manage Conditional Access.
- **D** is wrong. Far broader than required and grants Conditional Access management.

Useful contrasts: neither Application Administrator nor Cloud Application Administrator can manage **Conditional Access**, neither can consent to **Microsoft Graph** permissions, and neither is automatically added as an owner when an app is created. Only **users** can own enterprise applications; service principals can own app registrations; **groups can never own either**.
Source: LP1 Module 1.5 / 3.2.

### Question 42 - Application Proxy

Correct: **A** and **D**

Application Proxy consists of the cloud **Application Proxy service** and an on-premises **connector**. For Integrated Windows Authentication the connector uses **Kerberos Constrained Delegation (KCD)**. Readiness requirements include: apps set to integrated Windows authentication, all apps having **SPNs**, the connector server and app server being domain-joined, and the connector being able to read **TokenGroupsGlobalAndUniversal**.

- **B** is wrong. A private network connector belongs to Microsoft Entra Private Access (Global Secure Access), not Application Proxy, and password SSO does not authenticate an IWA app.
- **C** is wrong and is an explicit callout in the course: Application Proxy **replaces the need for a VPN or reverse proxy** for remote access but is **not intended for internal users on the corporate network**, where it causes unexpected or undesirable performance issues.

Flow to remember: user hits the external URL, is redirected to Entra ID for preauthentication, receives a token, sends it to the Application Proxy service which extracts **UPN and SPN**, forwards to the connector, the connector performs KCD and obtains a Kerberos ticket, calls the app, and the response returns through the connector and service.
Source: LP1 Module 2.4; LP2 Module 2.9 (Kerberos/KCD).

### Question 43 - OIDC scopes

Correct: **A**, **C**, and **D**

- `openid` is required to use OIDC; it yields the `sub` claim and access to the UserInfo endpoint, plus ID tokens from the token endpoint.
- `offline_access` returns refresh tokens, and on the v2.0 endpoint it must be explicitly requested or the token response contains only an access token.
- For a single-page application the refresh token is always provided.

- **B** is wrong. `address` and `phone` are **not** supported OIDC scopes.
- **E** is wrong. `email` returns an `email` claim **only if an email is associated** with the user, and the app must handle its absence.

Also remember: scopes are sent as a **space-separated** list in the `scope` parameter, each permission appended to the resource's Application ID URI. `user.read` and `offline_access` are automatically included in the initial consent. Access tokens usually expire in **one hour**.
Source: LP1 Module 2.5 / 3.4.

### Question 44 - App collections licensing

Correct: **A**

App collections require **Microsoft Entra ID Premium P1 or P2**. A collection is a **filter over apps the user already has access to**, so it never grants new access; it groups apps onto a separate tab by job role, task, or project. The user portal is `https://myapps.microsoft.com`, which requires an organizational account and access granted by an administrator, and is separate from the Azure portal.

- **B** is wrong. Collections are a P1/P2 feature.
- **C** is wrong. Collections are not an Office portal feature.
- **D** is wrong. Collections are not part of entitlement management, and the stated requirement is P1 or P2.

Related: every app a user can access appears in the default **Apps** collection, and users can create their own personal collections from the My Apps portal. Admin-managed collections are created under **Enterprise applications > App Launchers**.
Source: LP1 Module 2.8.

### Question 45 - App governance

Correct: **B**

App governance is an add-on feature to **Microsoft Defender for Cloud Apps** for **OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs**. It provides four pillars: **Insights** (single dashboard of third-party Microsoft 365 platform apps plus alerts), **Governance** (proactive and reactive policies), **Detection** (anomalies, non-compliant, malicious, risky apps), and **Remediation** (automatic remediation plus manual controls).

- **A** is wrong on both scope and product. Governance covers access packages and reviews; app governance specifically targets OAuth/Graph apps.
- **C** is wrong. Conditional Access controls access decisions; it does not detect or remediate risky OAuth apps.
- **D** is wrong. Permissions Management is a cloud infrastructure entitlement management product, not OAuth app governance.

Enablement requires Office 365 connected in Defender for Cloud Apps and the Office 365 Microsoft Entra ID apps enabled, then **Settings > Threat Protection > App Governance > Enable App Governance integration**.
Source: LP1 Module 3.9.

## Domain 4 - Plan and automate identity governance

### Question 46 - Catalogs and access packages

Correct: **B**

A **catalog** is a **container of related resources and access packages**, used so that non-administrators can build their own packages. An **access package** is a **bundle of resources that a team or project needs, governed with policies**, and it is **always contained in a catalog**. The delegation chain is **Administrator → Catalog creator → Catalog owner → Access package manager**, with catalog owners delegating package management by assigning the access package manager role.

- **A** inverts the two definitions.
- **C** is wrong. They are distinct objects in a one-to-many relationship.
- **D** is wrong on both counts.

Practical rules: whoever creates a catalog **becomes its first catalog owner**; a **catalog creator** who is not an administrator automatically becomes owner of the catalog they create; resources must exist in a catalog before they can be included in a package; and **a catalog can be deleted only if it has no access packages**. Access packages can govern group membership, enterprise application assignment, and SharePoint Online site membership directly, and licenses, Azure resources, and Entra roles indirectly through groups.
Source: LP4 Module 1.2 / 1.3 / 1.4.

### Question 47 - Access package policies

Correct: **B**

A **policy** defines the access lifecycle — how users get access, who approves, and how long it lasts — and it is linked to an access package. A single access package can carry **multiple policies** for different audiences; the course's own example is one package with **two policies**, one for employees and one for external users.

- **A** is wrong. The bundle is identical for both audiences, so duplicating the package and catalog adds maintenance without benefit.
- **C** is wrong. A single policy would force identical approval and expiration rules on both audiences.
- **D** is wrong. Policies govern how principals get access to the package, not individual resources.

Related: an external audience is modeled as a **connected organization**, and each connected organization can contain **only one directory or domain**. To specify the users of a connected organization you can use another Microsoft Entra directory, another non-Entra directory configured for direct federation, or a non-Entra directory whose users all share one domain name.
Source: LP4 Module 1.2 / 1.7.

### Question 48 - Connected organizations

Correct: **B**

Only **one directory or domain** can be added per connected organization, so three domains require three connected organizations. When searching, you must enter the **entire domain name** and confirm the organization name and authentication type.

- **A** is wrong. That is explicitly not supported.
- **C** is wrong. Access package managers build packages and policies; they do not expand connected-organization scope.
- **D** is wrong. Federation is an authentication mechanism for guests, not a way to group multiple domains into one connected organization.

Prerequisites and behavior: the required role is **Identity Governance Administrator or User Administrator**; the path is **ID Governance > Entitlement management > Connected organizations > + Add connected organization**, with **Basics**, **Directory + domain**, **Sponsors**, and **Review + create** tabs. The state is automatically set to **Configured** on creation. **Sponsors** are optional, are internal or external users already in the directory, and act as the point of contact for the relationship.
Source: LP4 Module 1.7.

### Question 49 - External user lifecycle

Correct: **B**

The default lifecycle is: when an external user no longer has any access package assignments they are **blocked from signing in**, and after **30 days** the guest account is **removed from the directory**. A blocked user **cannot re-request the access package or request other access** in the directory, so Alex's request fails.

- **A** is wrong. Blocking and removal are the defaults.
- **C** is wrong. Removal happens after the 30-day window, and the interval is configurable, including a value of **0** days to remove immediately.
- **D** is wrong. These settings exist precisely for invited external users.

Configure at **ID Governance > Entitlement management > Settings > Manage the lifecycle of external users**. Two cautions: **entitlement management only removes accounts that were invited through entitlement management**, so a guest who existed in the directory before receiving assignments remains; and do not enable blocking if the user will later need to request access to other packages.
Source: LP4 Module 1.6; Module 1.8.

### Question 50 - Access review licensing

Correct: **B**

Access reviews are a feature of **Microsoft Entra ID Governance** and require a **Governance or Entra Suite** subscription, with **P2 providing only limited capabilities**. The P2 requirement applies per person for: being assigned as a **reviewer**, performing a **self-review**, being a **group owner** performing a review, and being an **application owner** performing a review. The **Global Administrator or User Administrator** who sets up reviews, configures settings, or applies review decisions does **not** need P2.

- **A** is wrong. Licensing is per actor, not tenant-wide.
- **C** is wrong. P2 supplies limited capability only; Governance or Suite is the baseline.
- **D** is wrong. It omits the reviewers and owners, who are the licensed population.

Role requirements at creation differ by resource type. Creating a **group or application** review: Global Administrator, User Administrator, Identity Governance Administrator, Privileged Role Administrator (only for Entra role-assignable groups), or group owner. Creating a **Microsoft Entra role** review: Global Administrator or Privileged Role Administrator. Creating an **Azure resource role** review: Global Administrator, User Access Administrator, or resource Owner.
Source: LP4 Module 2.2 / 2.3.

### Question 51 - Access review configuration

Correct: **A** and **B**

**A monthly review cannot exceed 27 days**, specifically to avoid overlapping reviews. A **fallback reviewer** is available only for **Managers of users** and **Group owner(s)**; it is used when the user has no manager in the directory or the group has no owner.

- **C** is wrong. Applications do not necessarily have an owner, which is why **the application owner cannot be selected as a reviewer**. Group owner is available only for team or group reviews.
- **D** is wrong. If you choose **All Microsoft 365 groups with guest users**, the only available scope is **Guest users only**.

Other settings: reviewers can be group owners, selected users or groups, users reviewing their own access, or managers of users; recurrence is weekly, monthly, quarterly, semi-annually, or annually; a series can end never, on a specific date, or after a set number of occurrences; and the **inactive users** scope allows up to **730 days** of inactivity. Reviewers are chosen at creation and **cannot be changed once the review has started** — for a recurring series, editing **Series** changes future instances while **Current** changes only the active one.
Source: LP4 Module 2.3 / 2.7.

### Question 52 - Reviewer decisions

Correct: **B**

With multiple reviewers, **the last submitted response is recorded**, so B's later denial overrides A's earlier approval. **Don't know** is a real option that **keeps the user's access** while recording the choice in the audit logs.

- **A** is wrong on both points.
- **C** is wrong. There is no conflict failure or escalation from Don't know.
- **D** is wrong. Denied users are removed, but Don't know does not deny.

Timing matters: denied users are **not removed immediately**. They are removed when the review period ends, or when an administrator stops the review — and only if **Auto apply results to resource** is enabled. The four options if reviewers don't respond are **No change**, **Remove access**, **Approve access**, and **Take recommendations**, and that setting **does not override manual decisions**: a final Deny still removes access. Recommendations come from two methods: **no sign-in within 30 days** and **peer outlier** deviation from the reporting structure, and they consider both interactive and non-interactive sign-ins.
Source: LP4 Module 2.5 / 2.6.

### Question 53 - Access reviews for synced groups and guests

Correct: **A** and **B**

For groups synchronized from on-premises, **access reviews cannot change group membership** because the source of authority is on-premises; the results are delivered as **CSV or through Microsoft Graph** and acted on in the on-premises directory. For denied guests, the two actions are **remove the user's membership from the resource** (sign-in to the tenant continues to work) or **block the user from signing in for 30 days, then remove the user from the tenant** (reversible within 30 days). When the guest-specific action is not configurable — because the review is scoped to more than guests, or uses "All Microsoft 365 groups with guest users" — the **default is remove membership from the resource**.

- **C** is wrong. The options are not immediate permanent deletion, and the block action is reversible for 30 days.
- **D** is wrong. Auto-apply does not override the on-premises source of authority.

Related: guests assigned as reviewers who have not accepted their invitation **do not receive access-review emails**; reviewers are notified at the start of each review; reminders are sent **half-way through the duration**; and review activity is written to the Entra audit logs with activities such as Create access review, Approve decision, Deny decision, and Apply decision.
Source: LP4 Module 2.2 / 2.3.

### Question 54 - PIM fundamentals

Correct: **A** and **C**

PIM requires **Premium P2**, stated as a plain note in the course. The zero-standing-access model has exactly one documented exception: **two emergency access accounts** that keep **permanent Global Administrator** assignments.

- **B** is wrong. **Eligible roles can only be assigned in PIM**; permanent active assignments are the ordinary Entra ID and Azure role assignments created elsewhere.
- **D** is inverted for the same reason.

Emergency account requirements in full: **two or more**, **cloud-only** using the **`.onmicrosoft.com`** domain, not federated or synchronized, no dependence on an individual's device or phone, credentials that do not expire or get cleaned up for lack of use, **permanent Global Administrator**, at least one account **excluded from all Conditional Access policies**, and at least one using an MFA mechanism **different** from other administrator accounts — also ensuring no per-user MFA policy applies. Validate them **at least every 90 days**, on IT staff changes, and on subscription changes, and monitor their sign-ins with alerts.
Source: LP4 Module 3.2 / 3.9.

### Question 55 - PIM role settings

Correct: **B**

A user who is eligible for a role and is also an approver of that role **cannot approve their own activation**. When multiple approvers are configured, **approval completes as soon as one approves or denies**, and you **cannot require approval from at least two users**. The default approver set is **all users who are privileged role administrators, whether permanent or eligible**.

- **A** is wrong on both halves.
- **C** is wrong. MFA is a separate activation requirement, not a condition that unlocks self-approval.
- **D** is wrong. That capability does not exist.

The course's worked settings: **Global Administrator** — MFA yes, notification yes, ticket yes, approval yes with other Global Administrators as approvers, activation **1 hour**, permanent admin only for emergency accounts. **Exchange Administrator** — MFA yes, ticket no, activation **2 hour**. **Helpdesk Administrator** — MFA no, notification no, ticket yes, approval no, activation **8 hour**. Notification recipients on activation are the Global Administrator, Privileged Role Administrator, and Security Administrator.
Source: LP4 Module 3.2 / 3.4.

### Question 56 - PIM for Azure resources

Correct: **B**

**Only owners of subscriptions and management groups can bring those resources under PIM management.** A Global Administrator must first use **elevate access to manage all Azure subscriptions** to discover resources, and Microsoft advises getting each subscription owner's approval first. There is **no limit** to the number of resources you can manage with PIM.

- **A** is wrong on both the permission and the limit.
- **C** is wrong. The requirement is subscription or management group ownership, and there is no 500-resource cap. (500 is the role-assignment limit per management group.)
- **D** is wrong. PIM supports **built-in and custom roles**, including Owner, User Access Administrator, Contributor, Security Admin, and Security Manager.

After onboarding, PIM is available at **management group, subscription, resource group, and resource** levels, and managing a parent also manages child resources — though a newly added child must be **searched for in PIM** to be brought under management.
Source: LP4 Module 3.3 / 3.6.

### Question 57 - Privileged access groups

Correct: **B**

A role-assignable group that is brought under PIM management is called a **privileged access group**. You assign the group as **eligible** for the roles, then enable it for **Privileged Access** in the group's Activity section. The key mechanic: **the group is not activated — only the user's group membership is**, so one just-in-time request yields the permissions of all four roles.

- **A** is wrong. A group can hold multiple role eligibilities; that is the point of the feature.
- **C** is wrong. Active assignment removes the just-in-time requirement entirely.
- **D** is wrong and is the precise trap: the group object is never activated, and activation is per user.

For role-assignable groups, membership can be managed only by the **Privileged Role Administrator, Global Administrator, and group owners**. PIM can require group owners to activate their Owner role before managing membership, and you can apply **different policies per group** — for example a lighter policy for trusted employees and an approval workflow for B2B partner guests.
Source: LP4 Module 3.7.

### Question 58 - Sign-in logs

Correct: **A** and **B**

The sign-ins report displays only **interactive** sign-ins — those where a user manually signs in — so a background service's authentication will not appear. Records can take **up to two hours** to surface in the portal.

- **C** is wrong. The download cap is the **most recent 250,000 records** as CSV or JSON, subject to retention policy. The 2,500 figure belongs to the risky-users and risky-sign-ins exports.
- **D** is wrong. The sign-in activity report is available in **all editions** of Microsoft Entra ID, and any non-administrator can view their own sign-ins.

Access requires Security Administrator, Security Reader, Global Reader, or Reports Reader. Useful filters include Request ID, Correlation ID, Status (Success, Failure, Interrupted), Client app, and Conditional Access (**Not applied**, **Success**, **Failure**). You cannot use a multi-value field such as authentication details, Conditional Access data, or network location as a column.
Source: LP4 Module 4.2.

### Question 59 - Audit logs and SIEM export

Correct: **A**

Audit logs are filtered by **Service**, **Category**, **Activity**, **Status**, **Target**, **Initiated by**, and **Date range**. Consent events appear under **Category = ApplicationManagement** with activity **Consent to application**. For SIEM, **Azure Monitor** is the pipeline and **Event Hubs is the Microsoft-recommended approach going forward**; route to a **single Azure Event Hubs** namespace and use multiple diagnostic settings per resource. Splunk consumes it through the **Azure Monitor Add-On for Splunk**.

- **B** is wrong twice. Consent events are in the audit log, not the sign-in log, and **AzLog is the legacy** tool being replaced.
- **C** is wrong. The audit log date-range filter offers **7 days, 24 hours, and Custom** — there is no 30-day preset — and Target is a **prefix** match, so wildcards do not work.
- **D** is wrong. Azure Monitor is the required pipeline.

Two more details: **Target** and **Initiated by** are **case-sensitive** prefix matches, and the download cap is **250,000 records** as CSV or JSON. Other supported SIEMs are IBM QRadar (Microsoft Azure DSM plus Event Hubs protocol) and ArcSight (Event Hubs smart connector). Microsoft notes that **Entra logs are the only log type directly integrated with AzLog that are not yet available in Azure Monitor**.
Source: LP4 Module 4.3 / 4.5.

### Question 60 - Report licensing and Identity Secure Score

Correct: **A** and **C**

**Usage and insights** — the application-centric report showing the most used apps, apps with the most failed sign-ins, and top sign-in errors — requires **P1 or P2** and a Security Administrator, Security Reader, or Reports Reader role. **Identity Secure Score** is available in **all editions** and is a percentage indicating alignment with Microsoft's best-practice recommendations.

- **B** is wrong. Only usage and insights is gated.
- **D** is wrong. No Governance license is required.

On scoring: some controls are **binary** (100% when configured as recommended), others are a **percentage of total configuration**. The course's worked example: the MFA control is worth a maximum **10.71%**, and protecting **5 of 100** users yields **5/100 × 10.71% ≈ 0.53%**. The dashboard includes the score, a comparison against tenants in the **same industry and similar size**, a **trend graph**, and a list of improvement actions. Path: **Microsoft Entra ID > Security > Identity Secure Score**.
Source: LP4 Module 4.6 / 4.7.

## Domain 1 - Implement and manage user identities

### Question 61 - Temporary Access Pass onboarding

Correct: **A**

- A **Temporary Access Pass (TAP)** is a time-limited passcode that can be configured as **one-time** or **multi-use**. It lets a user sign in to register passwordless methods, including a FIDO2 security key, without a permanent password.
- TAP must be enabled in the **authentication methods policy**, and its lifetime must fall within the tenant's maximum TAP lifetime.

- **B** creates a password, which the requirement forbids.
- **C** assumes the user can already sign in and complete SSPR.
- **D** grants resource access; it does not provide an authentication method.
- **E** assumes Windows Hello for Business is already enrolled.

Source: LP1 Module 2.4 / 2.5 (passwordless and temporary access pass).

### Question 62 - Cross-tenant synchronization

Correct: **A** and **B**

- **Cross-tenant synchronization** creates and maintains guest accounts in a target tenant from a source tenant. It keeps selected user attributes synchronized, so changes in Fabrikam flow to Contoso.
- The target tenant must allow **inbound cross-tenant synchronization** and enable **automatic redemption** so users do not redeem a B2B invitation.

- **C** creates one-time invitations and does not keep attributes synchronized.
- **D** supports access packages, not continuous user provisioning.
- **E** is domain federation, which is unrelated to guest account lifecycle.

Source: LP1 Module 3.6 / 3.7 (cross-tenant access and synchronization).

### Question 63 - Cloud Sync vs Connect Sync

Correct: **A**

- **Cloud Sync** uses lightweight agents that make only **outbound** connections to Microsoft Entra ID, so no inbound firewall rule is required.
- It supports **password hash synchronization**, multiple forests without trusts, and **high availability** when multiple agents are installed.

- **B** is a single server and staging mode does not export changes.
- **C** provides authentication, not directory synchronization.
- **D** provides federation and still needs a synchronization source.
- **E** stops directory synchronization entirely.

Source: LP1 Module 4.2 (Cloud Sync).

### Question 64 - Seamless single sign-on

Correct: **A**

- **Seamless SSO** uses the Kerberos ticket of the signed-in domain user to sign the user in to Microsoft Entra ID without an extra prompt. It relies on the **AZUREADSSOACC** computer account created in Active Directory.
- Because the user is still authenticating to Microsoft Entra ID, **Conditional Access MFA** continues to apply when the user is off the corporate network.

- **B** replaces password hash synchronization and still prompts in this scenario.
- **C** is federation, which the requirement excludes.
- **D** changes the Windows sign-in method, not the browser prompt.
- **E** does not provide single sign-on.

Source: LP1 Module 4.3 (seamless single sign-on).

### Question 65 - External ID self-service sign-up

Correct: **A**

- **Microsoft Entra External ID** external tenants provide consumer identity for apps, including **self-service sign-up**, **company branding**, social identity providers such as Google, and local email accounts.
- A **user flow** defines the sign-up and sign-in experience and which identity providers are offered.

- **B** requires an invitation and is designed for business guests.
- **C** synchronizes users from another Microsoft Entra tenant, not consumers.
- **D** governs access packages for existing users.
- **E** requires a federation trust and does not provide self-service consumer sign-up.

Source: LP1 Module 3.6 (external identities).

### Question 66 - Dynamic group rule syntax

Correct: **A**

- Dynamic device rules use the **`device.`** property prefix, the **`-eq`** comparison operator, and **`-and`** to require every condition.
- The correct properties are **`deviceOSType`**, **`deviceOwnership`**, and **`isCompliant`**. Boolean values are **`True`** and **`False`**.

- **B** uses unsupported C-style **`&&`** and omits the compliance condition.
- **C** uses user properties for a device group.
- **D** uses **`-or`**, which includes compliant devices.
- **E** uses **`-contains`** and **`No`**, neither of which is valid here.

Source: LP1 Module 3.4 (dynamic groups).

### Question 67 - Group-based licensing errors

Correct: **A**

- Group-based licensing requires a valid **Usage location** before a license with location-dependent service plans can be assigned. If the location is missing, the assignment fails with a licensing error.
- Set the location on the user, or map it from the on-premises directory so new users receive it automatically.

- **B** fails for the same reason.
- **C** changes membership, not licensing prerequisites.
- **D** does not add the missing location.
- **E** is already working for other users.

Source: LP1 Module 3.3 (group-based licensing).

### Question 68 - Custom security attribute roles

Correct: **A** and **B**

- **Attribute Definition Administrator** can create and manage attribute sets and custom security attribute definitions.
- **Attribute Assignment Administrator** can assign values of custom security attributes to users, service principals, and managed identities.

- **C** manages users but not custom security attribute definitions or assignments by default.
- **D** is read-only.
- **E** manages role assignments, not attribute schema or values.

Source: LP1 Module 3.8 (custom security attributes).

### Question 69 - Restricted management administrative units

Correct: **A**

- A **restricted management administrative unit (RMAU)** protects its members from directory-level administrators. Only users with a role scoped directly to the RMAU can manage those objects.
- Adding the protected accounts to an RMAU prevents a tenant-scoped User Administrator or Helpdesk Administrator from managing them.

- **B** grants the helpdesk more control.
- **C** groups do not restrict administrative scope.
- **D** changes how the admin activates a role, not what the role can manage.
- **E** cannot restrict directory password reset operations.

Source: LP1 Module 1.4 / 1.5 (administrative units).

### Question 70 - Entra Connect staging mode

Correct: **A**

- A server in **staging mode** imports and synchronizes data but does not export changes to Microsoft Entra ID. It is the supported way to validate a new configuration alongside production.
- After validation, disable staging mode on the new server and stop the original server so only one server exports.

- **B** would put production into staging mode and stop updates.
- **C** changes the synchronization engine and does not test the Connect rules.
- **D** skips validation entirely.
- **E** adds an authentication agent, not a staging synchronization server.

Source: LP1 Module 4.1 (Microsoft Entra Connect).

### Question 71 - License service plan conflicts

Correct: **A**

- When multiple licenses are assigned, a **service plan that is disabled in any one of them stays disabled**. Disabling the plan in the E3 license overrides the enabled plan in E5.
- Resolve the conflict by enabling the plan in the E3 assignment, or by removing the conflicting license.

- **B** blocks license assignment entirely rather than selectively disabling a plan.
- **C** and **D** do not cause this specific service-plan conflict.
- **E** affects feature entitlement, not the disabled state of a plan.

Source: LP1 Module 3.3 (license service plans).

### Question 72 - Federated to managed domain conversion

Correct: **A**

- Changing the domain's **AuthenticationType** from **Federated** to **Managed** makes Microsoft Entra ID the authentication authority. Users then sign in with their cloud password, validated by password hash synchronization or pass-through authentication.
- Plan the change so that password hash synchronization or pass-through authentication is healthy before the cutover.

- **B** does not change the authentication authority.
- **C** still relies on federation.
- **D** would disrupt every user and is unnecessary.
- **E** moves users to a different tenant.

Source: LP1 Module 4.4 / 4.5 (domain management).

### Question 73 - Organizational unit filtering

Correct: **A**

- **Organizational unit filtering** limits directory synchronization to selected OUs. Objects in excluded OUs are not imported or exported to Microsoft Entra ID.
- Cloud Sync also supports scoping synchronization to specific OUs or groups.

- **B** groups do not control which objects synchronize.
- **C** leaves the accounts present but disabled.
- **D** controls access, not directory synchronization.
- **E** is destructive and would be repeated on the next synchronization cycle.

Source: LP1 Module 4.1 / 4.2 (synchronization scoping).

## Domain 2 - Implement authentication and access management

### Question 74 - Authentication strengths

Correct: **A**

- **Authentication strengths** let a Conditional Access policy require specific method combinations. The built-in **Phishing-resistant MFA** strength accepts methods such as FIDO2 security keys, Windows Hello for Business, and certificate-based authentication.
- Password plus Authenticator push satisfies the weaker **Multifactor authentication** strength but not the phishing-resistant strength.

- **B** allows push notifications.
- **C** checks device state, not the authentication method.
- **D** changes how often a user signs in.
- **E** blocks older client protocols.

Source: LP2 Module 3.4 (authentication strengths).

### Question 75 - Passkey profiles and attestation

Correct: **A**

- **Passkey profiles** provide group-scoped FIDO2 settings, including **enforce attestation**, allowed passkey types, and **AAGUID** restrictions.
- An **AAGUID** identifies an authenticator model. Allowing only the approved AAGUIDs blocks every other model, and attestation verifies that the authenticator is genuine.

- **B** does not inspect the authenticator model.
- **C** requires a class of methods but does not restrict vendors.
- **D** restricts network location.
- **E** configures Windows Hello for Business, not FIDO2 security keys.

Source: LP2 Module 2.2 / 2.3 (passkeys and FIDO2).

### Question 76 - Windows Hello for Business trust models

Correct: **A**, **B**, and **C**

- **Key trust** registers the public key of the Windows Hello for Business key pair with the device object in Microsoft Entra ID. It does not require client certificates or AD CS.
- **Certificate trust** issues a certificate to the device or user from a PKI, so AD CS or another CA is required.
- **Cloud Kerberos trust** uses Microsoft Entra Kerberos to obtain a partial TGT, giving passwordless access to on-premises resources without AD CS.

- **D** describes certificate trust, not key trust.
- **E** describes key trust, not certificate trust.

Source: LP2 Module 2.4 (Windows Hello for Business).

### Question 77 - Temporary Access Pass lifetime

Correct: **A**

- A Temporary Access Pass can be configured as **one-time** or **multi-use**, and its lifetime can be set up to a maximum of **30 days**. The tenant policy sets the maximum that administrators can choose.
- Five days is within that maximum, so the requirement can be met.

- **B**, **C**, **D**, and **E** are either shorter than five days or exceed the supported maximum.

Source: LP2 Module 2.5 (Temporary Access Pass).

### Question 78 - Number matching and MFA fatigue

Correct: **A**

- **Number matching** requires the user to enter the two-digit number shown on the sign-in screen into the Authenticator app, so a blind push approval no longer succeeds.
- **Additional context** shows the application and location, helping users recognize an unexpected prompt.

- **B** weakens MFA and does not solve prompt bombing.
- **C** blocks legitimate devices.
- **D** has no effect on push approvals.
- **E** changes the sign-in method but does not require the user to match a number.

Source: LP2 Module 2.2 / 2.3 (Microsoft Authenticator).

### Question 79 - Conditional Access device filters

Correct: **A**

- **Filter for devices** is a Conditional Access condition that evaluates device properties with a rule expression. Using `deviceOwnership` and `isCompliant` together limits the policy to company-owned, noncompliant devices.
- Selecting the **Windows** platform further narrows the policy to Windows devices.

- **B** also matches personal devices that are not compliant.
- **C** uses a user property in a device filter.
- **D** blocks noncompliant devices but does not target company-owned devices only.
- **E** evaluates network location, not device ownership or compliance.

Source: LP2 Module 3.2 / 3.3 (Conditional Access conditions).

### Question 80 - Conditional Access policy evaluation

Correct: **A**, **B**, and **C**

- Conditional Access evaluates all applicable policies. The user must satisfy the grant controls of **every** policy that applies.
- A **block** policy denies the sign-in regardless of grant controls in other policies.
- **Report-only** mode shows what the policy would do in the sign-in log without blocking or challenging the user.

- **D** is false: an exclusion applies only to the policy that contains it.
- **E** is false: the user must satisfy both requirements, not choose one.

Source: LP2 Module 3.1 / 3.2 (Conditional Access evaluation).

### Question 81 - Trusted named locations

Correct: **A**

- **Named locations** define network boundaries by IP range or country. Marking the corporate range as **trusted** lets a Conditional Access policy exclude that location from an MFA requirement.
- Home and other external networks remain in scope, so MFA is still required there.

- **B** is a legacy per-user MFA setting; it does not integrate with Conditional Access policy scoping and is not the recommended approach.
- **C** does not exempt the corporate network.
- **D** enforces MFA everywhere.
- **E** changes session lifetime, not the MFA requirement.

Source: LP2 Module 3.2 / 3.5 (named locations).

### Question 82 - Session controls

Correct: **A** and **B**

- **Sign-in frequency** controls how often a user must sign in again. Four hours enforces the reauthentication requirement.
- **Persistent browser session** set to **Never** prevents the browser from keeping the session after it closes.

- **C** revokes tokens when critical events occur; it is not a four-hour timer.
- **D** allows a much longer session.
- **E** limits data access in unmanaged browsers but does not set the reauthentication interval.

Source: LP2 Module 3.6 (session controls).

### Question 83 - Authentication methods policy

Correct: **A**, **B**, and **C**

- The authentication methods policy supports **group targeting**, so different users can be allowed different methods.
- It controls **Authenticator** behavior, including **number matching** and **additional context**.
- **Temporary Access Pass** must be enabled in the policy before administrators can issue passes.

- **D** is false: FIDO2 must be enabled and configured, and users must register a key.
- **E** is false: the policy applies to all targeted users, not only privileged roles.

Source: LP2 Module 2.1 / 2.2 (authentication methods policy).

### Question 84 - Self-service password reset methods

Correct: **A**

- **SSPR** can be enabled for all users or selected groups. Enabling **Authenticator** and **SMS** gives users the required methods.
- **Administrators always require two methods** when they use SSPR, so requiring two methods for everyone matches the administrator behavior.
- Disabling **security questions** removes that method.

- **B** does not meet the two-method requirement for administrators.
- **C** uses a method the requirement excludes.
- **D** does not provide SSPR.
- **E** is not self-service.

Source: LP2 Module 2.6 (self-service password reset).

### Question 85 - Password writeback

Correct: **A** and **B**

- **Password writeback** is the connector feature that sends a cloud password change back to Active Directory. It can be enabled in Microsoft Entra Connect or Cloud Sync.
- SSPR with writeback requires **Microsoft Entra ID P1 or P2** for the users who use the feature.

- **C** is an authentication topology, not a writeback component.
- **D** reduces sign-in prompts but does not write passwords back.
- **E** is unrelated to password writeback.

Source: LP2 Module 2.6 / 4.2 (password writeback).

### Question 86 - Identity Protection user risk

Correct: **A**

- **User risk** represents the probability that an identity is compromised. A user risk policy can require a **password change** when risk reaches the configured level.
- Setting the threshold to **High** leaves medium-risk users unaffected, which matches the requirement.
- After the password change, Identity Protection can dismiss the risk.

- **B** evaluates the risk of a specific sign-in and blocks rather than remediates.
- **C** encourages MFA registration but does not respond to leaked credentials.
- **D** enforces MFA but does not require a password change.
- **E** checks device compliance.

Source: LP2 Module 3.7 (Identity Protection).

### Question 87 - Certificate-based authentication

Correct: **A**, **B**, and **C**

- **CBA** authenticates a user with an X.509 certificate. When configured for MFA, the certificate satisfies a multifactor requirement without an additional prompt.
- Administrators upload the trusted **root or intermediate CA** certificates and enable CBA in the authentication methods policy.
- User binding uses the **principal name (UPN)** or the **RFC822** name in the certificate.

- **D** is false: CBA works with managed domains.
- **E** is false: CBA is supported on multiple platforms and browsers.

Source: LP2 Module 2.7 (certificate-based authentication).

### Question 88 - Global Secure Access Internet Access

Correct: **A**

- **Global Secure Access** uses a client and **traffic forwarding profiles**. The **Internet Access** profile sends internet traffic through Microsoft's Security Service Edge for filtering and inspection.
- **Private Access** is a separate profile for private applications, so both can be enabled together.

- **B** publishes internal apps and does not inspect internet traffic.
- **C** connects networks but does not provide Microsoft's security edge.
- **D** controls access decisions, not traffic forwarding.
- **E** is a baseline identity security setting.

Source: LP2 Module 5.1 / 5.2 (Global Secure Access).

## Domain 3 - Plan and implement workload identities

### Question 89 - Workload identity federation

Correct: **A**

- **Workload identity federation** lets an external identity provider, such as GitHub Actions, obtain a short-lived token from Microsoft Entra ID. The app registration trusts the external **issuer** and a specific **subject** claim.
- No client secret or certificate is stored, so there is nothing to leak or rotate.

- **B** and **E** store a secret.
- **C** still requires certificate material on the runner.
- **D** is not possible on a GitHub-hosted runner, and managed identities are for Azure-hosted resources.

Source: LP1 Module 4.6 / 4.7 (workload identity federation).

### Question 90 - Managed identity lifecycle

Correct: **A**, **B**, and **C**

- A **system-assigned** identity shares the lifecycle of its Azure resource; deleting the resource deletes the identity.
- A **user-assigned** identity is a standalone Azure resource that can be attached to several resources.
- Managed identities obtain tokens from Microsoft Entra ID, so no secret is stored in code or configuration.

- **D** describes a system-assigned identity.
- **E** is false: managed identities are service principals, not credentials for an app registration.

Source: LP1 Module 4.6 / 4.7 (managed identities).

### Question 91 - SCIM provisioning

Correct: **A**

- **SCIM provisioning** creates, updates, and disables accounts in the target application. **Attribute mappings** determine which directory values populate the application's user fields.
- The provisioning job can deactivate a leaver's account automatically when the user is disabled or removed from scope.

- **B** authenticates users but does not create or disable accounts.
- **C** reviews access periodically; it does not provision accounts.
- **D** publishes on-premises apps.
- **E** manages privileged role activation.

Source: LP1 Module 3.7 (application provisioning).

### Question 92 - SAML identifier mismatch

Correct: **A**

- The **Identifier (Entity ID)** is the audience value that the application validates in the SAML assertion. If it differs from the expected value, the application rejects the assertion with an audience mismatch.
- Correct the identifier in the enterprise application's single sign-on configuration.

- **B** affects where the response is posted, not the audience.
- **C** produces a signature or certificate error.
- **D** produces an assignment or sign-in error before the assertion is posted.
- **E** applies to OpenID Connect implicit flows, not SAML audience validation.

Source: LP1 Module 3.5 (SAML single sign-on).

### Question 93 - Admin consent workflow

Correct: **A**

- The **admin consent workflow** lets users request consent and routes the request to configured **reviewers**. Reviewers approve or deny from the Microsoft Entra admin center.
- Disabling **user consent** ensures users cannot grant consent themselves.

- **B** blocks the apps instead of allowing a reviewed request.
- **C** governs access packages, not application consent.
- **D** manages role activation.
- **E** does not collect or route consent requests.

Source: LP1 Module 3.6 (admin consent workflow).

### Question 94 - Publisher verification

Correct: **A**

- **Publisher verification** confirms that the publisher of an app is a legitimate Microsoft Partner Network member. The verified publisher can associate its Partner Center account with the app registration.
- Verified apps show a **verified publisher** badge and produce fewer consent warnings.

- **B** does not verify the publisher.
- **C** is a domain-verification step for a custom domain, not publisher verification.
- **D** is a marketplace listing, not publisher verification.
- **E** is unrelated to a multitenant application.

Source: LP1 Module 3.6 / 3.9 (publisher verification and app governance).

### Question 95 - User consent policies

Correct: **A**, **B**, and **C**

- **App consent policies** define conditions under which users may consent, including publisher verification and the risk level of the requested permissions.
- The **admin consent workflow** provides a reviewed path when user consent is not allowed.

- **D** is false: administrators can still grant consent.
- **E** is false: consent policies apply to member and guest users, not guests only.

Source: LP1 Module 3.6 (app consent policies).

### Question 96 - Application Proxy Kerberos delegation

Correct: **A**

- **Application Proxy** publishes the internal application through an outbound-only connector, so no inbound port is required.
- For **Windows Integrated Authentication**, the connector uses **Kerberos constrained delegation (KCD)** to request a Kerberos ticket for the user and present it to the IIS application.

- **B** and **C** expose the network or the server and do not provide Entra authentication.
- **D** requires application changes and does not address integrated Windows authentication.
- **E** requires a connector for private applications.

Source: LP1 Module 3.8 (Application Proxy).

### Question 97 - App credential rotation

Correct: **A**

- A **certificate** or a **federated identity credential** removes the shared secret from the application. Federated credentials are preferred when the app runs on a platform that supports OpenID Connect.
- Credential expiration should be monitored so a future change does not cause another outage.

- **B**, **C**, and **E** still rely on a client secret.
- **D** is not how an app registration obtains a managed identity; managed identities are separate Azure resources.

Source: LP1 Module 3.5 / 4.6 (app credentials).

### Question 98 - Multitenant account types

Correct: **A**

- **Accounts in any organizational directory** allows users from any Microsoft Entra tenant to sign in, while excluding personal Microsoft accounts.
- This is the standard multitenant configuration for business applications.

- **B** includes personal accounts.
- **C** limits sign-in to Contoso.
- **D** excludes organizational accounts.
- **E** is a consumer identity scenario, not a multitenant app registration.

Source: LP1 Module 3.5 / 4.6 (app registration account types).

## Domain 4 - Plan and automate identity governance

### Question 99 - Lifecycle workflows

Correct: **A**

- **Lifecycle workflows** automate joiner, mover, and leaver tasks. A **joiner** trigger can run when a new employee is created or when the employee hire date arrives.
- Built-in tasks can add group membership and send notifications to the manager.

- **B** updates membership but does not notify the manager or schedule first-day tasks.
- **C** grants access through an access package.
- **D** manages role activation.
- **E** provisions accounts to applications.

Source: LP4 Module 1.6 / 1.7 (lifecycle workflows).

### Question 100 - PIM activation requirements

Correct: **A**

- **PIM role settings** control activation requirements for a role, including **maximum activation duration**, **approval**, and **justification**.
- Setting the duration to four hours and enabling approval and justification meets every requirement.

- **B** adds an authentication requirement but not time limits or approval.
- **C** reviews existing assignments periodically.
- **D** governs resource access packages, not directory role activation.
- **E** does not control activation.

Source: LP4 Module 3.2 / 3.3 (PIM role settings).

### Question 101 - PIM authentication context

Correct: **A**

- PIM can require a **Conditional Access authentication context** during activation. The authentication context is a dedicated scope that only the matching Conditional Access policy targets.
- A policy that applies to that authentication context can require a **phishing-resistant authentication strength**, leaving other administrator policies separate.

- **B** requires MFA but cannot distinguish phishing-resistant methods.
- **C** affects other administrator sessions.
- **D** adds approval, not a specific authentication method.
- **E** adds approval and justification but not authentication strength.

Source: LP4 Module 3.2 / 3.4 (PIM and authentication context).

### Question 102 - PIM alerts

Correct: **A**

- **PIM alerts** detect conditions such as **roles assigned outside PIM**, too many permanent administrators, and stale assignments.
- Each alert can send email notifications to configured recipients and appears in the PIM alerts page.

- **B** reviews access but does not produce these event alerts.
- **C** stores logs but does not evaluate PIM-specific conditions.
- **D** reports a security posture score.
- **E** controls access but does not alert on assignments.

Source: LP4 Module 3.4 (PIM alerts).

### Question 103 - Access package assignment policy

Correct: **A**

- An **access package assignment policy** defines who can request access, the **approval** requirements, the **expiration**, and the **access review** schedule.
- A manager approval, 90-day expiration, and quarterly review are all policy settings.

- **B** manages role activation, not group access requests.
- **C** reviews access but does not handle requests or expiration.
- **D** grants membership automatically without approval.
- **E** adds an authentication requirement.

Source: LP4 Module 2.1 / 2.2 (entitlement management).

### Question 104 - Access review scheduling

Correct: **A**, **B**, and **C**

- Access reviews support **recurring schedules** and can run monthly, quarterly, annually, or at a custom interval.
- **Auto-apply results** updates the resource after the review. The "if reviewers don't respond" setting can remove access, approve access, or take the system recommendation.
- Reviewers can be **the users**, **their managers**, or **specific users or groups**.

- **D** is false: reviewers make decisions within their scope.
- **E** is false: reviews can target members, guests, and other scopes.

Source: LP4 Module 2.3 / 2.4 (access reviews).

### Question 105 - Separation of duties

Correct: **A**

- Entitlement management supports **incompatible access packages**. When a user already has one package, a request for the incompatible package is blocked or requires remediation.
- This enforces **separation of duties** without manual monitoring.

- **B** detects the conflict only after the fact.
- **C** blocks the application rather than the conflicting assignments.
- **D** is unrelated to access package compatibility.
- **E** does not prevent the conflict.

Source: LP4 Module 2.2 (entitlement management and separation of duties).

### Question 106 - Access review auto-apply

Correct: **A**

- Access reviews do not change access by themselves unless **auto-apply** is enabled. With auto-apply, the decisions are written to the reviewed resource when the review completes.
- Without it, an administrator must apply the results manually.

- **B** changes how long reviewers have, not whether decisions are applied.
- **C** and **D** govern new access requests.
- **E** changes expiration, not review application.

Source: LP4 Module 2.4 (access review results).

### Question 107 - Audit and sign-in log retention

Correct: **A**, **B**, and **C**

- Microsoft Entra ID retains **interactive sign-in logs for 30 days** in the portal.
- **Diagnostic settings** can export logs to Log Analytics, Storage, or Event Hubs for longer retention and analysis.
- **Audit logs** record directory changes, including user creation and role assignments.

- **D** is false: long retention requires export.
- **E** is false: audit logs are available with the included Entra ID features, not only P2.

Source: LP4 Module 4.3 / 4.5 (monitoring and log export).

### Question 108 - Terms of use

Correct: **A**

- **Terms of use** presents a PDF during sign-in and records the user's acceptance in the audit log.
- A **Conditional Access** policy adds the terms of use as a grant control for the selected cloud apps.

- **B** applies to device compliance, not Entra sign-in.
- **C** reviews access, not legal acceptance.
- **D** controls access package requests.
- **E** governs application consent.

Source: LP4 Module 3.5 (terms of use).

### Question 109 - Lifecycle workflow custom task

Correct: **A**

- **Lifecycle workflow custom task extensions** call an Azure Logic App during a workflow. This lets a workflow run logic that is not available as a built-in task.
- The extension can disable the on-premises account through the Logic App's connector.

- **B** provisions accounts through a connector; it does not run inside the leaver workflow.
- **C** is not a lifecycle workflow feature.
- **D** sends role notifications.
- **E** controls access to the Logic App.

Source: LP4 Module 1.7 (lifecycle workflow extensions).

### Question 110 - Catalog delegation

Correct: **A**

- A **catalog** is a container for access packages and their resources. **Catalog owners** can create and manage access packages in that catalog without tenant-wide administrative rights.
- Delegating catalog ownership keeps entitlement management scoped to the application team.

- **B** manages app registrations and enterprise apps, not access packages.
- **C** grants far more privilege than required.
- **D** reviews access but does not delegate catalog management.
- **E** changes group membership only.

Source: LP4 Module 2.1 (catalogs and delegated administration).

## Domain 1 - Implement and manage user identities

### Question 111 - Soft-deleted group recovery

Correct: **A**

- Microsoft 365 groups and cloud security groups are **soft deleted for 30 days**. During that window, **Deleted groups** in the Microsoft Entra admin center or the `Restore-MgDirectoryDeletedItem` cmdlet restores the object with its **object ID, membership, owners, and assignments** intact.
- Global Administrator, Groups Administrator, and the group's owner (when group settings allow it) can restore the group.

- **B** creates a new object with a new ID, so the Conditional Access policy and the app assignment still point at nothing.
- **C** covers only on-premises objects; a cloud-only group has no entry in the AD Recycle Bin.
- **D** cannot work: after 30 days the group is hard deleted and cannot be restored.
- **E** blocks permanent deletion for seven days after a soft delete; it does not recover anything.

Source: LP1 Module 1.2 / 3.1 (group lifecycle and recovery).

## Domain 3 - Plan and implement workload identities

### Question 112 - Deleted app registration recovery

Correct: **A**

- Application registrations and service principals are **soft deleted for 30 days**. Restoring the application object from **Deleted applications** (or with `Restore-MgDirectoryDeletedItem`) brings back the same **application (client) ID**, credentials, API permissions, and service principal.
- Restore first, then confirm that the enterprise application and its user assignments are present.

- **B** and **D** create a new application ID, which invalidates consent, assignments, tokens, and every client that uses the old ID.
- **C** is backwards: the service principal depends on the application object, and restoring only the service principal does not recreate the registration.
- **E** is unrelated; Key Vault soft delete protects vault objects, not directory applications.

Source: LP1 Module 3.5 / 3.9 (application objects and recovery).

## Domain 1 - Implement and manage user identities

### Question 113 - Hard deletion protection

Correct: **A**, **B**, and **C**

- **Hard Deletion Protection** in Microsoft Entra Backup and Recovery blocks **hard deletion for seven days** after an object is soft deleted. Restoring the object keeps the protection, and deleting it again starts a new seven-day window.
- Supported object types include **cloud-only groups, applications, service principals, and users that are not synchronized from on-premises**.
- Protection is **permanent once enabled** and cannot be switched off. If it is enabled by mistake, the object must be soft deleted and left for seven days before it can be permanently removed.
- Enabling protection requires the **Microsoft Entra Backup Administrator** role and is recorded in the audit log. Separately, a **protected action** can require a Conditional Access authentication context for `microsoft.directory/deletedItems/delete`.

- **D** is false: protection only blocks permanent deletion, and recovery remains a manual restore.
- **E** is false: soft deletion still succeeds immediately; only the hard-delete step is blocked.

Source: LP1 Module 1.4 / 4.1 (directory protection and recovery).

## Domain 1 - Implement and manage user identities

### Question 114 - Company branding

Correct: **A**, **B**

- **Company branding** appears under **Identity > Company branding** in the Microsoft Entra admin center. The menu option is present only with **Microsoft Entra ID P1, P2, or Office 365 (for Office 365 apps)**.
- The **sign-in page background image** must be .png or .jpg, no larger than **1920x1080 pixels**, and no more than **300,000 bytes**.
- The **banner logo** appears after the user enters a username and on the **My Apps** portal.

- **C** is false: the language is **set automatically as the default and can't be changed**.
- **D** is false: sign-in page text can be up to **1,024 characters**.
- **E** is false: the **username hint** must be Unicode with no links or code and is capped at **64 characters**.

Source: LP1 Module 1.2 (configure company branding).

### Question 115 - Tenant-wide user settings

Correct: **A**

- Tenant-wide defaults for member users live in **Identity > Users > User settings**. Setting **Users can register applications** to **No** removes the default ability, and the **Application Developer** role grants it back to named individuals.
- **Restrict access to the Microsoft Entra administration portal** set to **Yes** blocks non-administrators from the portal. It **does not** restrict PowerShell or other clients such as Visual Studio. To let a specific non-administrator use the portal, assign any administrative role, such as **Directory Readers**.

- **B** is wrong: security defaults govern MFA and legacy authentication, not app registration.
- **C** is wrong: Conditional Access targets resources, not the administration portal, and would not honor the per-user exception.
- **D** is a guest setting and does not affect member app registration.
- **E** is wrong: Directory Readers grants read access and does not remove the ability to register apps.

Source: LP1 Module 1.8 (configure tenant-wide settings).

## Domain 2 - Implement authentication and access management

### Question 116 - Conditional Access optimization agent

Correct: **A**, **B**, **C**

- The agent needs at least **Microsoft Entra ID P1**, available **Security Compute Units**, and the **Security Administrator** role or higher for the first activation. **Conditional Access Administrators** can be assigned if they also have Security Copilot access.
- **Device-based controls** (device compliance, app protection policies, and domain-joined devices) additionally require **Microsoft Intune** licenses.
- The agent scans for users and apps that policy does not cover and offers **one-click remediation** with **Apply suggestion**. It also proposes **policy consolidation** when several policies share the same grant controls, and it can block **legacy authentication** and **device code flow**.

- **D** is false: P1 is the stated minimum.
- **E** is false: Sentinel is a SIEM and is not required.

Source: LP2 Module 3.11 (Conditional Access optimization agent).

### Question 117 - Workload identity risk

Correct: **A**, **B**

- **Workload identity risk** requires **Microsoft Entra ID P2**. The **Risky workload identities** blade and the **Workload identity detections** tab are available to **Security Administrator**, **Security Operator**, and **Security Reader**.
- **Conditional Access for workload identities** can block a service principal that Identity Protection marks at risk. It applies to **single-tenant service principals registered in your tenant**. **Third-party SaaS, multitenant apps, and managed identities are out of scope.**
- Detections include **Microsoft Entra threat intelligence**, **suspicious sign-ins** baselined over **2 to 60 days**, **unusual addition of credentials to an OAuth app** (surfaced by Defender for Cloud Apps), **admin confirmed account compromised**, and **leaked credentials**.

- **C** is false: those identity types are explicitly out of scope.
- **D** is false: Defender for Identity protects on-premises Active Directory and is not a prerequisite.

Source: LP2 Module 4.7 (security for workload identities).

### Question 118 - Microsoft Defender for Identity

Correct: **A**

- **Defender for Identity sensors** can be installed **directly on domain controllers**, where they monitor domain controller traffic **without a dedicated server or port mirroring**, and on **AD FS servers**, where they monitor network traffic and authentication events.
- Defender for Identity is managed through the **Microsoft Defender portal** (`security.microsoft.com`), not the Microsoft Entra admin center. Its cloud service runs in the **US, Europe, and Asia** and is connected to Microsoft threat intelligence.
- It uses on-premises Active Directory signals to detect advanced threats, compromised identities, and malicious insider activity.

- **B** describes a standalone sensor design that this deployment does not require.
- **C**, **D**, and **E** are not supported sensor locations for this scenario.

Source: LP2 Module 4.8 (Microsoft Defender for Identity).

### Question 119 - Identity Risk Management Agent

Correct: **A**, **B**

- The **Identity Risk Management Agent** requires **Microsoft Entra ID P2** and available **Security Compute Units**. **Security Administrator** is required to activate the agent the first time, view it, and act on suggestions. **Security Reader** and **Global Reader** can view the agent and its suggestions but **cannot take action**.
- Triggers are **continuous monitoring** (every **5 minutes**), **daily**, or **manual**.
- The default scope is the **most recent 100 risky users in the last 90 days**. Scope can be narrowed by user and group, by a maximum of **1 to 100** risky users, by risk level, and by a defined time frame.
- The agent investigates risky sign-ins and detections, generates a risk summary and a recommended remediation action, answers questions in chat, and stores custom instructions in agent memory.

- **C** is false: P2 is the minimum.
- **D** is false: continuous monitoring runs every **5 minutes**, not daily.

Source: LP2 Module 4.9 (Identity Risk Management Agent).

### Question 120 - Global Secure Access remote networks

Correct: **A**, **B**, **C**

- **Remote networks** connect a branch location through an **IPsec tunnel** between the **customer premises equipment (CPE)** router and the nearest Global Secure Access endpoint. Internet-bound traffic is routed through the branch router for evaluation in the cloud, and **no client is installed on individual devices**.
- Configuration has five steps: **Basics**, **Connectivity**, **Traffic forwarding**, **Review**, and **setup on the on-premises router**. The last step is performed in the router's management console.
- **Traffic logs** describe **sessions** (starting with the first URL), **connections** (the 5-tuple: source and destination IP and port plus FQDN), and **transactions** (a request and response pair).
- **Enriched Microsoft 365 logs** combine **OfficeActivity** and **NetworkAccessTraffic** data with a unique token ID. At this time only **SharePoint Online** logs are available for enrichment.

- **D** is false: remote networks are clientless.
- **E** is false: enrichment currently covers SharePoint Online only.

Source: LP2 Module 6.6 / 6.8 (Global Secure Access remote networks and logs).

## Domain 3 - Plan and implement workload identities

### Question 121 - OAuth app policies

Correct: **A**, **B**

- **OAuth app policies** live in **Microsoft Defender for Cloud Apps** under **Cloud apps > OAuth apps**. Select **New policy** from the search button, or use **Control > Policies > Create policy > OAuth app policy**.
- A permission policy can raise an alert when an app requests a **high permission level** and was authorized by more than a set number of users. Policies can be scoped to the **group membership of the users who authorized the app**, and the **Community use** filter shows whether the permission is common, uncommon, or rare.
- Marking a permission as **banned** disables the **corresponding enterprise application**, so the app stops working.

- **C** covers access, not OAuth permission risk.
- **D** is false: banning disables the enterprise application, not just the catalog entry.

Source: LP3 Module 1.8 (policies for OAuth apps).

### Question 122 - Risk-based step-up consent

Correct: **A**

- **Risk-based step-up consent** is **enabled by default**. When Microsoft detects a risky end-user consent request, the request is stepped up to **admin consent**. The prompt tells the user that admin approval is needed, and if the **admin consent request workflow** is enabled the user can send the request to an administrator from the prompt.
- Without the workflow, the user sees **AADSTS90094**. An audit event is recorded with **Category ApplicationManagement**, **Activity Consent to application**, and **Status Reason Risky application detected**.
- Step-up consent changes behavior only when **end-user consent is enabled**.

- **B** is false: this user was still able to start a consent request.
- **C** and **D** describe unrelated controls.

Source: LP3 Module 2.3 (consent settings and risk-based step-up consent).

### Question 123 - Application collections

Correct: **A**, **B**

- **Application collections** require **Microsoft Entra ID P1 or P2**. A collection applies a filter to the apps a user can already access, so the user sees **only the apps in the collection that have been assigned** to them.
- Administrators create collections in the Microsoft Entra admin center under **Identity > Applications > Enterprise applications > App Launchers > New collection**, then add applications and owners. Owners manage the collection through the Azure portal.
- Users can also create **personal collections** in the **My Apps** portal (`https://myapps.microsoft.com`). Every app a user can access appears in the default **Apps** collection, and the user can remove apps from it.

- **C** is false: a collection is a view, not an assignment.
- **D** is false: owners can manage a collection, and users can create personal collections.

Source: LP3 Module 2.8 (application collections).

### Question 124 - App governance

Correct: **A**

- **App governance** is an **add-on to Microsoft Defender for Cloud Apps** for **OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs**. It provides **insights**, **governance** policies, **detection** of anomalous app behavior, and **remediation**, including automatic remediation.
- To enable it, connect **Office 365** in Defender for Cloud Apps, enable the **Office 365 Microsoft Entra ID apps**, then select **Settings > Threat Protection > App Governance > Enable App Governance integration**. Built-in policies include **Microsoft 365 OAuth app Reputation**, **Microsoft 365 OAuth Phishing Detection**, and **Microsoft 365 OAuth App Governance**.

- **B** discovers shadow IT from traffic logs.
- **C** applies real-time session controls to SaaS apps.
- **D** publishes on-premises web apps.

Source: LP3 Module 3.9 (app governance).

## Domain 4 - Plan and automate identity governance

### Question 125 - Access Review Agent

Correct: **A**, **B**

- The **Access Review Agent** requires **Microsoft Entra ID Governance** or **Microsoft Entra Suite** licensing and onboarding to **Security Copilot with at least one SCU**. Setup requires the **Identity Governance Administrator**, **Lifecycle Workflows Administrator**, and **Security Copilot Contributor** roles.
- Reviewers use the agent in **Microsoft Teams** and need **Security Copilot Contributor** plus an active access review assigned to them.
- The recommendation is a **deterministic score** built from signals: **user inactivity**, **user-to-group affiliation**, **account enabled**, **employment status** (`employeeLeaveDateTime`), **lifecycle workflow history** in the past 30 days, **decisions from previous reviews**, and **access request history**.

- **C** is false: once started, agents **can't be stopped or paused**.
- **D** is false: the recommendation is deterministic, and the reviewer can see the reasoning behind it.

Source: LP4 Module 2.8 (Access Review Agent).

### Question 126 - PIM audit history

Correct: **A**

- In **Privileged Identity Management > Groups**, select the privileged access group and then **Activity > Resource audit** to see **all activity** associated with that group, filtered by a predefined date range or a custom range.
- **My audit** shows only the **current user's personal role activity** for the group.
- Role assignments authorized through **Azure delegated resource management** by an outsourcing provider are **not shown** in this audit history.

- **B** is scoped to one user.
- **C** reviews membership, not activation and assignment activity.
- **D** shows sign-ins, not PIM operations.

Source: LP4 Module 3.8 (PIM audit history and reports).

### Question 127 - Sign-in and audit logs

Correct: **A**, **B**, **C**

- The **sign-ins report** displays **interactive sign-ins** only. Non-interactive sign-ins such as service-to-service authentication are not shown, and records can take **up to two hours** to appear.
- The sign-in report is available in **all editions** of Microsoft Entra ID and through Microsoft Graph. **Security Administrator**, **Security Reader**, **Global Reader**, and **Report Reader** can read tenant data, and any user can read **their own** sign-ins.
- **Audit logs** can be filtered by service, category, activity, status, target, initiator, and date range (**7 days**, **24 hours**, or custom). Filtered data can be downloaded as **CSV or JSON** up to **250,000 records**, bounded by report retention.

- **D** is false: non-admins see only their own sign-ins.
- **E** is false: downloads are constrained by the report retention policy.

Source: LP4 Module 4.2 / 4.3 (sign-in and audit logs).

### Question 128 - Microsoft Sentinel

Correct: **A**, **B**

- **Microsoft Sentinel** is a cloud-native **SIEM and SOAR** solution, so it both aggregates activity and automates response.
- **Sign-in logs** require **Microsoft Entra ID P1 or P2**; any Entra ID license (Free, Office 365, P1, P2) can ingest the other log types. Additional per-gigabyte Azure Monitor and Sentinel charges can apply.
- Access requires the **Microsoft Sentinel Contributor** role on the workspace, the **Security Administrator** role on the tenant, and read/write permission on the Entra **diagnostic settings**.
- The built-in **Microsoft Entra ID** connector streams both **sign-in logs** and **audit logs**.

- **C** is false: Sentinel includes SOAR.
- **D** is false: the connector handles both log types.

Source: LP4 Module 4.4 (connect Microsoft Entra ID to Microsoft Sentinel).

### Question 129 - Identity Secure Score

Correct: **A**

- **Identity Secure Score** is a **percentage** that shows how closely the tenant matches Microsoft's identity security recommendations. It is available in **all editions** of Microsoft Entra ID under **Security > Identity Secure Score**.
- Controls are scored in two ways: **binary** (full credit when the recommendation is met) or as a **percentage of the total configuration**, such as protecting 5 of 100 users with MFA earning a proportional partial score.
- The dashboard shows the score, an **industry comparison**, a **trend** over time, and a list of **improvement actions**. Some actions, such as reading reports, also raise the score.

- **B** is false: no premium license is required and scoring is not always binary.
- **C** and **D** describe only part of the dashboard.

Source: LP4 Module 4.7 (Identity Secure Score).

---

## Case Study 1 - Tailwind Traders acquires Fabrikam (Questions 130-136)

### Question 130 - Cross-tenant synchronization design

Correct: **B**

- **Cross-tenant synchronization** is configured in the **source tenant (Fabrikam)** and provisions users into the **target tenant (Tailwind)** as **B2B collaboration users**. The guest object has its own object ID in Tailwind, so it can be assigned to applications and targeted by Tailwind Conditional Access, while authentication still happens in the home tenant.
- **B2B direct connect** covers **Teams shared channels** but does **not** create an object in the resource tenant's directory, so it cannot be used for application assignment.

- **A** cannot work: a verified domain can belong to only one tenant at a time, and recreating users creates a second credential.
- **C** satisfies assignment but violates the requirement that no second credential exists.
- **D** is the classic trap: direct connect alone leaves nothing to assign to TradeDesk.
- **E** reverses the synchronization direction; Entra Connect synchronizes Active Directory into Entra ID, not the other way around.

Source: LP1 Module 5.2 / 5.3 (cross-tenant synchronization and B2B collaboration).

### Question 131 - Cross-tenant access and trust settings

Correct: **B** and **D**

- **Cross-tenant access settings** have three parts. **Inbound access** controls which external users and groups can access which of your applications. **Outbound access** controls what your users can reach in other organizations. **Trust settings** decide whether you accept **MFA**, **compliant device**, and **hybrid Microsoft Entra joined** claims from the other tenant.
- Accepting the **MFA** claim in **inbound trust** means a guest who satisfied MFA at home is not challenged again by Tailwind Conditional Access. Tailwind still controls which apps and groups are allowed through **inbound access**.

- **A** is the wrong direction: Tailwind users reaching Fabrikam is outbound, not what limits Fabrikam guests.
- **C** is wrong: Fabrikam owns its policies, and deleting them does not change Tailwind's trust of Fabrikam claims.
- **E** blocks the partner entirely, which contradicts the collaboration requirement.

Source: LP1 Module 5.2 (cross-tenant access settings and trust).

### Question 132 - Passkey profile restrictions

Correct: **B**

- **Passkey (FIDO2) profiles** are created under **Authentication methods > Passkey (FIDO2) > Configure**. A profile defines a **name**, whether **attestation is enforced**, and an **AAGUID allow or block list**.
- **Attestation is evaluated only at registration.** When it is enforced, a key that cannot attest cannot be registered, which in practice forces **device-bound** keys because synced passkeys cannot attest.
- **AAGUID restrictions are evaluated at registration and at every sign-in.** Removing an AAGUID from an allow list blocks sign-in for passkeys that were already registered with that AAGUID, which satisfies the "existing keys must stop working" requirement.
- Configuring passkey profiles requires the **Authentication Policy Administrator** role.

- **A** and **C** can require MFA but cannot restrict the key vendor or verify attestation.
- **D** enables a different method instead of restricting passkeys.
- **E** controls device compliance, not key model.

Source: LP2 Module 2.2 / 2.3 (passkey profiles and authentication methods policy).

### Question 133 - Temporary Access Pass onboarding

Correct: **C**

- A Temporary Access Pass lifetime can be set from **10 minutes to 30 days (43,200 minutes)**. The authentication methods policy defines a **default** and a **maximum** lifetime, so a seven-day pass is allowed when the policy maximum is 30 days.
- A **one-time** pass can be used exactly once. A **multi-use** pass can be used until it expires. Only **one TAP per user** can be valid at a time, and creating a new one deletes the previous pass.
- The pass code is **shown once** at creation. It **satisfies MFA** during sign-in but is **not phishing-resistant**, and it can be used to register passwordless methods such as a passkey or Windows Hello for Business.
- Temporary Access Pass requires **Microsoft Entra ID P1 or P2**.

- **A** is wrong: a one-time pass is exactly what a single enrollment needs.
- **B** weakens security and is not how TAP works.
- **D** is wrong: a user with no registered method cannot complete registration without a pass or another method.
- **E** exceeds the 30-day maximum.

Source: LP2 Module 2.4 (Temporary Access Pass).

### Question 134 - Application Proxy Kerberos delegation

Correct: **D**

- Application Proxy supports **Kerberos Constrained Delegation (KCD)** for apps that use **integrated Windows authentication**. The connector obtains a Kerberos ticket on behalf of the signed-in user and presents it to the app.
- KCD requires an **SPN for the application**, **delegation** granted to the connector computer accounts (or a dedicated service account) for that SPN, **domain-joined connectors** with line of sight to a domain controller, and permission to read **TokenGroupsGlobalAndUniversal** so that group SIDs are included.
- Users still authenticate to **Microsoft Entra ID** with any enabled method, including passkeys or a Temporary Access Pass; the connector performs the on-premises impersonation.

- **A** and **B** do not deliver Kerberos single sign-on, and **B** requires storing credentials.
- **C** does not perform Windows authentication against the app.
- **E** requires a third-party header provider and does not use Kerberos.

Source: LP3 Module 2.6 (Application Proxy single sign-on and KCD).

### Question 135 - App roles versus group claims

Correct: **A** and **C**

- **App roles** are declared in the application **manifest** (or in the app registration UI) with a display name, a **value** such as `Approver`, the allowed member types (**Users/Groups** or **Applications**), and a description.
- Administrators assign users or groups to those roles under **Enterprise applications > Users and groups**. The token then contains a compact **roles** claim with the role values, which avoids the token bloat caused by group claims.
- Assigning groups to app roles requires **Microsoft Entra ID P1 or P2**.

- **B** is what the requirement rules out: group claims grow with membership and can overflow the token.
- **D** gives the app directory permissions it does not need.
- **E** sends data the other direction and does not populate the roles claim.

Source: LP3 Module 2.9 (app roles and role assignments).

### Question 136 - Access package design for auditors

Correct: **A**, **C**, and **E**

- A **catalog** is the container that holds resources and the access packages built from them. Adding the SharePoint site and the security group to the catalog makes them assignable.
- An **access package** bundles those resources, and its **policy** defines who may request access, whether **approval** is required, the **expiration** (date, days, or hours), and whether extension is allowed. A 90-day expiration satisfies the time limit without manual cleanup.
- **Access reviews** can target access package assignments. With **auto-apply** enabled, decisions take effect without an administrator applying them manually.

- **B** fails the 90-day rule, because nothing removes access if the review is late.
- **D** grants far more permission than the auditors need.

Source: LP4 Module 1.2 / 1.3 (catalogs, access packages, and policies).

---

## Case Study 2 - Woodgrove Financial (Questions 137-143)

### Question 137 - Hybrid authentication method selection

Correct: **B**

- **Pass-through authentication (PTA)** validates the password directly against **on-premises Active Directory** through lightweight **PTA agents** that make only **outbound** connections. **No password hash is stored in Microsoft Entra ID**, which satisfies the regulatory rule.
- PTA supports **seamless single sign-on** for domain-joined devices and can be rolled out with **staged rollout of cloud authentication**, which puts pilot users in a security group before the whole tenant moves.
- A healthy PTA deployment needs **at least three agents** for redundancy. If every agent is offline, sign-in fails, because there is no cloud hash to fall back on.

- **A** is disallowed by the regulator because hashes are stored in the cloud.
- **C** breaks the single sign-on and usability requirements.
- **D** keeps hashes on-premises but adds federation servers and token-signing certificates, which the requirements forbid.
- **E** is a feature, not an authentication method; password writeback only pushes cloud resets back to AD.

Source: LP1 Module 2.4 / 2.6 (pass-through authentication and staged rollout).

### Question 138 - Private Access remote network design

Correct: **A**

- A **remote network** connects a branch through an **IPsec tunnel** between the **customer premises equipment (CPE)** router and the nearest Global Secure Access endpoint. **No client is installed on individual devices**, and internet-bound traffic is evaluated in the cloud.
- With the **Private Access** traffic forwarding profile enabled, private applications such as corebank are published through the service. **Conditional Access** can then use the **compliant network** condition, which verifies that traffic came through Global Secure Access instead of a spoofed IP address.
- Before the compliant network check can be used, **Global Secure Access signaling for Conditional Access** must be enabled once in the tenant.

- **B** misunderstands the client: it runs on user devices, not routers.
- **C** publishes web apps and does not inspect branch traffic.
- **D** adds a VPN path that is not the compliant network.
- **E** relies on IP addresses, which can be spoofed and must be maintained manually.

Source: LP2 Module 6.5 / 6.6 (Private Access and remote networks).

### Question 139 - PIM role settings

Correct: **A** and **C**

- **PIM role settings** control **maximum activation duration**, **approval** (with named approvers), **MFA or authentication strength on activation**, **justification**, **ticket information**, and **notifications**.
- Making a role **eligible** means the administrator must activate it. A permanent **active** assignment bypasses activation, so the four-hour limit, approval, and MFA requirement would all be skipped.
- Activation requires **Microsoft Entra ID P2**, and **PIM alerts** exist to surface risky patterns such as too many Global Administrators, so disabling them is the opposite of the requirement.

- **B** keeps standing access, which is exactly what the design must remove.
- **D** removes a detection instead of a risk.
- **E** weakens authentication and is unrelated to just-in-time access.

Source: LP4 Module 2.1 / 2.3 (PIM role settings and activation).

### Question 140 - Admin consent workflow design

Correct: **C**

- The **admin consent workflow** is enabled under **Enterprise apps > Consent and permissions > Admin consent settings**. It lets users request consent for apps they cannot consent to themselves.
- With **user consent set to Do not allow user consent**, no end user can grant access, while the workflow still gives them a path. Requests appear in the **Admin consent requests** pane and are emailed to the configured reviewers.
- Reviewers must already hold a role that can grant consent; being named a reviewer does not elevate privileges. Only a **Global Administrator** can approve requests for **Microsoft Graph application permissions**.
- **Risk-based step-up consent** is on by default and escalates suspicious consent requests to admin review.

- **A** still lets users consent, and grants a broad permission set.
- **B** over-privileges marketing.
- **D** detects problems after the fact instead of gating consent.
- **E** removes the review the requirement demands.

Source: LP3 Module 2.10 / 3.2 (admin consent workflow and consent policies).

### Question 141 - Workload identity federation

Correct: **A**

- **Workload identity federation** creates a trust between an external identity provider and an app registration through a **federated identity credential**. The credential declares the **issuer**, the **subject**, and the **audience**.
- The pipeline requests a short-lived **OIDC token** from GitHub, presents it to Microsoft Entra ID, and receives an access token. **No secret is stored anywhere**, and nothing expires on the Entra side.
- The **subject** can be scoped to a repository, branch, pull request, or environment, so a compromised branch cannot impersonate the production identity.

- **B** and **C** still store a credential that must be rotated.
- **D** is impossible: managed identities are not available on GitHub-hosted runners.
- **E** requires a password and does not support MFA.

Source: LP3 Module 3.4 (app credentials and federated identity).

### Question 142 - Guest access review configuration

Correct: **A** and **C**

- Access reviews can be scoped to **Guest users only**, which limits the review to B2B guests associated with the resource. Reviewers can be **group owners**, **selected users or groups**, **users reviewing their own access**, or **managers of users**, and a **fallback reviewer** covers users who have no manager.
- **Auto apply results to resource** applies decisions automatically. **If reviewers don't respond** can be set to **No change**, **Remove access**, **Approve access**, or **Take recommendations**. Setting it to **Remove access** satisfies the requirement.
- Because the review is scoped to guests only, Woodgrove can also configure the **action to apply on denied guest users**, including **block sign-in for 30 days and then remove the user from the tenant**.

- **B** leaves access in place when reviewers ignore the review.
- **D** removes every guest regardless of business need.
- **E** is unnecessary and grants standing access.

Source: LP4 Module 3.2 / 3.3 (access reviews for guests).

### Question 143 - Long-term log retention

Correct: **A**, **B**, and **E**

- Microsoft Entra ID keeps **sign-in logs and audit logs for 30 days** with P1 or P2 (7 days on the free tier), so long-term retention always requires an export.
- **Diagnostic settings** stream **AuditLogs**, **SignInLogs**, **NonInteractiveUserSignInLogs**, and other categories to **Log Analytics**, an **Azure storage account**, an **event hub**, or a partner SIEM.
- A **Log Analytics workspace** supports **interactive retention up to 730 days** and **total retention up to 12 years**, so seven years is achievable.
- **Microsoft Sentinel** analyzes data in the same workspace, which keeps the archive queryable with KQL.

- **C** cannot meet seven years.
- **D** bounds retention by the capture window and does not provide query.

Source: LP4 Module 4.4 / 4.5 (log retention and SIEM export).

---

## Extended set (Questions 144-159)

### Question 144 - Passkey attestation and AAGUID enforcement

Correct: **A**, **B**, and **C**

- **Attestation** proves the make and model of the authenticator. It is checked **only during registration**; enforcing it rejects keys that cannot provide an attestation statement.
- **AAGUID** is the identifier of the authenticator model. Allow and block lists are enforced **at registration and at sign-in**, so removing an AAGUID immediately blocks existing keys of that model.
- Because **synced passkeys cannot provide attestation**, turning on attestation enforcement effectively limits registration to **device-bound** keys.

- **D** is false: synced passkeys have no hardware attestation.
- **E** is false: profiles and passkey settings live in the **authentication methods policy**, not in per-user MFA settings.

Source: LP2 Module 2.2 (passkey profiles).

### Question 145 - Temporary Access Pass limits

Correct: **A**, **C**, and **D**

- Lifetime ranges from **10 minutes to 30 days**. The policy sets the **default** used when a pass is created and the **maximum** that an administrator may choose.
- A user can have only **one valid TAP** at a time; creating a new one deletes the previous pass. The code is **displayed once** and cannot be retrieved later.
- A TAP **satisfies MFA**, which is why it works for onboarding, but it is a plaintext code and therefore **not phishing-resistant**.
- A TAP can be used to sign in and enroll passwordless methods, including passkeys and Windows Hello for Business. It requires **P1 or P2**.

- **B** is false: only one pass can be valid per user.
- **E** is false: the value is shown once at creation.

Source: LP2 Module 2.4 (Temporary Access Pass).

### Question 146 - Entra ID sign-in for Azure virtual machines

Correct: **A**, **B**, and **C**

- A VM needs a **system-assigned managed identity** and the **AADLoginForWindows** extension (or **AADSSHLoginForLinux** for Linux) before Entra sign-in works.
- Access is controlled by **Azure RBAC**: **Virtual Machine Administrator Login** grants administrative sign-in, and **Virtual Machine User Login** grants standard sign-in. The role can be assigned on the VM or on a parent scope such as the resource group.
- Supported platforms include **Windows Server 2022 and 2025 with Desktop Experience**, **Windows 11 24H2 or later**, and supported **Linux** distributions. Enabling Entra login makes the VM **Microsoft Entra joined**, so it cannot also be joined to on-premises AD at the same time.
- **Guest accounts are not supported** for Azure VM sign-in.

- **D** is false: Owner and Contributor manage the resource but do not grant sign-in.
- **E** is the opposite of the supported behavior.

Source: LP2 Module 2.10 (Entra user authentication for virtual machines).

### Question 147 - Compliant network enforcement for Microsoft traffic

Correct: **A** and **B**

- **Global Secure Access signaling for Conditional Access** must be enabled once in the tenant. It is the prerequisite for the **compliant network** condition, source IP restoration, and related features.
- For **Microsoft traffic**, Conditional Access is enforced **only when the Global Secure Access client is installed** on the device. Microsoft 365 traffic is still reachable through a **remote network without the client**, but the policy is **not enforced** on that path. A clientless branch therefore cannot satisfy a compliant network requirement for Microsoft 365 apps.
- **Continuous Access Evaluation** works with the compliant network check to enforce **data plane** protection, which is what blocks token replay.

- **C** states the opposite of the documented behavior for Microsoft traffic.
- **D** uses IP addresses, which do not prove that traffic traversed the security edge.
- **E** would remove the token replay protection the design depends on.

Source: LP2 Module 6.5 / 6.8 (compliant network and Conditional Access).

### Question 148 - Phishing-resistant authentication methods

Correct: **A**, **B**, and **C**

- The **phishing-resistant MFA** authentication strength accepts **FIDO2 security keys**, **Windows Hello for Business**, **certificate-based authentication configured as multi-factor**, and passkeys that are bound to a device. These methods are bound to the sign-in origin, so a proxy or look-alike site cannot replay them.
- The method must also be **enabled in the authentication methods policy** and available to the user; the strength alone does not register anything.

- **D** is passwordless MFA but is not classified as phishing-resistant, because the approval is not cryptographically bound to the site.
- **E** satisfies MFA but is a transferable code, so it is not phishing-resistant.

Source: LP2 Module 1.2 / 2.3 (authentication strengths).

### Question 149 - User risk remediation

Correct: **D**

- Conditional Access supports a **user risk** condition. With **user risk = High** and the **Require password change** grant control, the user must complete a password change before access is granted, and the risk state is remediated.
- The control requires **Microsoft Entra ID P2**. The same outcome can be delivered by the Identity Protection **user risk policy**, which is built on the same engine.

- **A** and **B** do not force a password change.
- **C** offers a path but does not block access; the user could simply not reset.
- **E** removes the self-service path and does not clear the risk until the user signs in with the new password.

Source: LP2 Module 3.3 (Identity Protection risk policies).

### Question 150 - Hard Deletion Protection behavior

Correct: **A**

- **Hard Deletion Protection** prevents an object from being **permanently deleted during the first seven days after it is soft deleted**. Soft deletion itself still succeeds, and a restore is still possible during the window.
- Restoring an object keeps the protection. If it is deleted again, a **new seven-day window starts**.
- Protection is **permanent once enabled** and cannot be switched off. It covers **cloud-only users, cloud-only groups, applications, and service principals**, and enabling it requires the **Microsoft Entra Backup Administrator** role.

- **B** is wrong: the timer restarts with every soft deletion, not with the moment protection was enabled.
- **C** invents an approval step; PIM is not part of Hard Deletion Protection.
- **D** confuses the 30-day soft-delete window with the seven-day hard-delete block.
- **E** is impossible: protection cannot be disabled.

Source: LP1 Module 4.1 (directory protection and recovery).

### Question 151 - Guest MFA double prompt

Correct: **B**

- **Inbound trust settings** in cross-tenant access let Tailwind accept the **MFA claim** that the partner tenant already issued. The guest is not prompted twice, and Tailwind Conditional Access still requires MFA.
- Trust can be configured as a **default** for all external organizations or **per organization**, and it applies only when the home tenant actually emits the claim. The guest object must still exist in Tailwind, and all other controls, such as device compliance or app restrictions, still apply.

- **A** removes the requirement instead of trusting the partner claim.
- **C** is a network-based bypass and does not reflect who performed MFA.
- **D** creates a second credential and adds helpdesk work.
- **E** is a tenant-wide default that cannot express per-partner trust.

Source: LP1 Module 5.2 (cross-tenant access trust settings).

### Question 152 - Tenant restrictions v2

Correct: **A** and **D**

- **Tenant restrictions v2** is configured in **cross-tenant access settings** and moves policy from on-premises proxies to the cloud. It can allow or block specific external tenants for internal identities and block external identities entirely.
- Enforcement uses **Global Secure Access** tagging. Enabling the tagging toggle requires **both** the **Global Secure Access Administrator** and **Security Administrator** roles.
- **Data plane protection** covers **Microsoft Graph**: a token that was issued for an allowed tenant is blocked when it is replayed against Graph, and anonymous SharePoint Online access is also blocked.

- **B** affects collaboration, not sign-in to other tenants, and would break legitimate partner work.
- **C** named locations are IP based and cannot identify the destination tenant.
- **E** removes shared channel collaboration without restricting tenant sign-in.

Source: LP2 Module 6.8 (tenant restrictions v2 and Global Secure Access enforcement).

### Question 153 - Admin consent workflow behavior

Correct: **A** and **B**

- Reviewers work from **Enterprise apps > Activity > Admin consent requests**. The **My pending** tab shows requests assigned to the signed-in reviewer, and requesters are notified when a request is approved, denied, or expires.
- **Consent request expires after (days)** is configurable (1 to 60 days) and defaults to **30 days**. Reviewers receive expiration reminders, and requesters see the status.
- Naming someone a reviewer does **not** grant consent permission, and only a **Global Administrator** can approve requests for **Microsoft Graph application permissions**. Enabling the workflow can take up to an hour to take effect.

- **C** confuses the reviewer designation with the permission to consent.
- **D** is false: Conditional Access still evaluates the app.
- **E** is false: each request is reviewed individually.

Source: LP3 Module 2.10 (admin consent workflow).

### Question 154 - Application Proxy connector high availability

Correct: **B**

- An application is assigned to **exactly one connector group**. **High availability** comes from having **multiple connectors in that group**, ideally on separate hosts and in separate networks or datacenters.
- Connectors in a group **load balance** traffic and take over when a peer is unavailable. Each connector must be able to reach the published application and needs only **outbound 443** connectivity to the Application Proxy service.
- Connectors should not share a server with the **Password Protection proxy**, because the two install different versions of the Agent Updater service.

- **A** is not possible: an app cannot belong to two connector groups.
- **C** duplicates the configuration and splits the audit trail.
- **D** changes the publishing model and does not answer the availability question.
- **E** still relies on connectors.

Source: LP3 Module 2.6 (Application Proxy connectors and groups).

### Question 155 - SCIM scoping filters and quarantine

Correct: **A** and **B**

- **Scoping filters** define which users are in scope for provisioning, using a **target attribute**, an **operator**, and a **value**. Users outside the filter are not created or updated in the target application.
- When provisioning repeatedly fails, for example because of **invalid credentials**, the job enters **quarantine** and stops. After the credentials are corrected, the job must be **restarted** so that it resumes.
- **Provision on demand** can be used to test a single user, and **attribute mappings** control which values are sent. Users must still be in the provisioning scope (assigned users or all users, depending on the scope setting).

- **C** destroys the configuration and audit history.
- **D** leaves the target application without the attributes it needs.
- **E** is false: scoping filters are a supported provisioning feature.

Source: LP3 Module 3.5 / 3.6 (SCIM provisioning and troubleshooting).

### Question 156 - Lifecycle workflow for movers

Correct: **C**

- **Lifecycle workflows** in Microsoft Entra ID Governance automate joiner, mover, and leaver tasks. A mover workflow can be triggered by an **attribute change**, a **group membership change**, or **on demand**, and it can also run on a schedule.
- Built-in tasks include **add user to group**, **remove user from group**, **add or remove access package assignment**, **disable account**, **delete account**, **send email**, and **run a custom task extension** (a Logic App) for anything else, including on-premises changes.
- Workflows require **Microsoft Entra ID Governance** (P2). Execution is scheduled, so changes apply within the workflow run interval rather than instantly.

- **A** is custom code that must be maintained and audited.
- **B** reviews access after the fact.
- **D** updates cloud group membership but not on-premises groups or access package assignments.
- **E** changes how access is activated, not how it is granted or removed.

Source: LP4 Module 4.1 (lifecycle workflows).

### Question 157 - Access reviews for privileged roles

Correct: **A** and **D**

- Access reviews support **Microsoft Entra roles**, including **eligible** and **active** assignments, and **PIM for Groups** assignments for role-assignable groups.
- **Auto apply results to resource** applies the decisions. Without it, an administrator must apply the results manually, which fails the "no manual steps" requirement.
- Typical reviewer choices for role reviews are **selected users or groups** and **users review their own access**; recommendations and justification requirements can be enabled.

- **B** is false: eligibility is exactly what a role review should examine.
- **C** leaves unapproved access in place.
- **E** sends information but changes nothing.

Source: LP4 Module 3.2 / 3.4 (access reviews for roles and groups).

### Question 158 - External user lifecycle from access packages

Correct: **A**

- Under **ID Governance > Entitlement management > Settings**, the **Manage the lifecycle of external users** section controls what happens when a user loses their **last access package assignment**.
- **Block external user from signing in to this directory** set to **Yes** blocks sign-in immediately. A blocked user cannot re-request the access package or any other access in the directory, so this setting must be used with care.
- **Remove external user** set to **Yes** deletes the guest account after the configured number of days; **0** removes it immediately.
- Entitlement management only removes accounts that were **invited through entitlement management**. A guest that already existed before the assignment remains in the directory.

- **B** applies to guests denied in a review, not to users who simply run out of assignments.
- **C** and **D** are indiscriminate and delete guests that must be kept.
- **E** ends the assignment but does not block sign-in or delete the account.

Source: LP4 Module 1.6 (external user lifecycle settings).

### Question 159 - Conditional Access troubleshooting evidence

Correct: **A**

- The **sign-in log** records each authentication attempt. Its **Conditional Access** tab lists the policies that **applied**, the policies that **did not apply** with the reason, and the **report-only** results, including which conditions and controls were evaluated.
- The same entry shows the **authentication requirement**, the **grant controls** satisfied, and the **session controls** in effect, which is usually enough to explain a block without opening a support case.
- For aggregate trends, the **Insights and reporting** workbook summarizes policy impact and report-only outcomes.

- **B** records configuration changes, not policy evaluation.
- **C** reports security posture, not a single sign-in.
- **D** covers risk detections, not Conditional Access evaluation.
- **E** covers access decisions, not sign-in policy.

Source: LP4 Module 4.3 (sign-in log analysis and Conditional Access troubleshooting).


