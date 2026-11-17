# SC-300 cheat sheet 2/4 — Implement authentication and access management

*One page. Facts snapshot 2026-11; verify current behavior on Microsoft Learn before the exam.*

## Authentication methods

| Method | Key facts |
|---|---|
| Password | Something you know. Strengthen with banned-password lists, smart lockout, and MFA. |
| Microsoft Authenticator | Push approval or passwordless phone sign-in. Supports number matching and additional context to defeat MFA fatigue. |
| FIDO2 security key | Phishing-resistant, passwordless, hardware-bound credential. Register per user; can be shared only with a shared-device design. |
| Passkey (FIDO2) profile | Per-group policy. **Attestation** is checked **only at registration** (synced passkeys fail); **AAGUID** lists apply at **registration and every sign-in**, so removing one blocks keys. Needs **Authentication Policy Administrator**. |
| Windows Hello for Business | Phishing-resistant, device-bound PIN/biometric. Best with Entra join or hybrid join; supports key trust and certificate trust. |
| Certificate-based auth (CBA) | Phishing-resistant PKI credential, often on smart cards. Requires certificate trust and issuance rules. |
| Kerberos SSO (App Proxy) | Application Proxy uses **Kerberos Constrained Delegation (KCD)** for IWA apps. Connectors must be domain-joined with AD rights to impersonate users and read **TokenGroupsGlobalAndUniversal**. |
| Temporary Access Pass (TAP) | Time-limited passcode for onboarding, device setup, and recovery. Lifetime **10 min to 30 days**; **one valid pass per user**; **shown once**; single- or multi-use. **Satisfies MFA, not phishing-resistant.** Needs **P1/P2**. |
| OATH tokens | TOTP/HOTP hardware or software tokens. Seed files import into Entra; users enter the 6-digit code. |
| SMS / voice | Convenient but weaker; avoid for administrators and high-risk users. Availability depends on the authentication methods policy. |
| Email OTP / security questions | Email OTP is for **B2B guest** redemption, not general member MFA. Security questions are **SSPR only** and not allowed for administrators. |

## MFA, SSPR, and password protection

| Item | What to remember |
|---|---|
| Per-user MFA vs Conditional Access | Per-user MFA is legacy and always-on. **Conditional Access** is the modern, granular control and requires Entra ID P1. |
| Authentication methods policy | One policy controls which methods are enabled and which targets (all users, specific groups). Migration from legacy MFA settings matters. |
| Authentication strengths | Presets such as **MFA**, **passwordless MFA**, and **phishing-resistant MFA**. Use in CA grant controls to require a class of method, not one specific method. |
| SSPR scope | **None**, **Selected** (one group), or **All**. Users need **two methods** to reset. Administrators need two strong methods; security questions are not allowed for admins. |
| SSPR writeback | Required for hybrid users. Without password writeback, the on-prem AD password is not updated. |
| Combined registration | Users register MFA and SSPR methods in one flow. Enable it to avoid duplicate registration prompts. |
| Password protection | Global banned password list plus an optional **custom banned list** of up to **1,000** terms. On-prem AD needs the **Password Protection proxy** and DC agents. |
| Smart lockout | Locks an account after repeated bad passwords. Default threshold **10** attempts, default duration **60 seconds**; configurable. |
| Identity Protection | Requires **P2**. Detects user risk and sign-in risk; policies can require password change or MFA, or block. |
| Risk policies | **User risk** policy remediates compromised credentials; **sign-in risk** policy challenges suspicious sign-ins. Both can be report-only. |
| MFA registration policy | Identity Protection policy that forces users to register MFA. Applies to all users by default; exclude emergency access accounts. |
| Workload identity risk | Requires **P2**. Covers **single-tenant service principals**; third-party SaaS, multitenant apps, and managed identities are **out of scope**. Detections include leaked credentials, unusual OAuth credential additions, and suspicious sign-ins baselined over **2–60 days**. |
| Identity Risk Management Agent | Requires **P2** plus SCUs. **Security Administrator** acts; **Security Reader** and **Global Reader** view only. Runs every **5 min**, daily, or manually; default scope = last **100** risky users in **90** days. |
| Microsoft Defender for Identity | On-prem AD detection. Sensors run **on domain controllers** (no port mirroring) and **AD FS**; managed in the **Defender portal** (`security.microsoft.com`). |

## Conditional Access and session control

| Item | What to remember |
|---|---|
| License | Entra ID **P1** per user for CA policies. P2 adds risk-based conditions from Identity Protection. |
| Assignments | Include/exclude users, groups, workload identities, and cloud apps or actions. Exclude emergency-access accounts from every policy. |
| Conditions | Device platform, location/named locations, client apps, sign-in risk, user risk, authentication flows, device state/filters, and insider risk. |
| Grant controls | Block, require MFA, require compliant or hybrid-joined device, require app protection policy, require authentication strength, require terms of use, or require a custom control. |
| Session controls | Sign-in frequency, persistent browser session, app-enforced restrictions, **continuous access evaluation (CAE)**, and token protection. |
| Report-only mode | Evaluates a policy and reports what would happen without enforcing it. Use it before rollout. |
| Policy evaluation | All applicable policies must pass. A single block wins; exclusions are evaluated before controls. |
| Named locations | Define trusted IP ranges or countries. Do not treat a country block as a substitute for strong authentication. |
| Emergency access accounts | At least two cloud-only accounts with permanent Global Administrator, excluded from CA, MFA, and SSPR; monitor their use. |
| Sign-in frequency | Reauthentication interval for a user or app. Separate from token lifetime; CAE can revoke tokens in near real time. |
| Global Secure Access | **Internet/Private Access** route traffic through Microsoft's security edge. **Remote networks**: **IPsec** from a branch **CPE** router, **clientless**. **Traffic logs**: **session → connection → transaction**; Microsoft 365 logs use **OfficeActivity + NetworkAccessTraffic**, SharePoint Online only. **Compliant network** needs **GSA signaling for Conditional Access**; Microsoft 365 enforces only with the GSA client, not a remote network. |
| CA optimization agent | Security Copilot agent that finds unprotected users, blocks legacy auth and device code flow, and consolidates policies. Needs **P1**, **SCUs**, **Security Administrator**; device controls need **Intune**. |

## High-yield exam traps

- CA policies require P1; risk conditions and Identity Protection require P2.
- "Require MFA" is not the same as "require phishing-resistant MFA". Use authentication strengths.
- SSPR cannot write a password back to on-prem AD without password writeback enabled.
- Administrators cannot use security questions for SSPR and must register two methods.
- Report-only mode does not block anything, even when the policy would deny access.
- Do not lock yourself out: exclude emergency access accounts and validate with report-only first.
- Number matching and additional context reduce MFA push fatigue; they do not make push phishing-resistant.
