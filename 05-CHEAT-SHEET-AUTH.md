# SC-300 cheat sheet 2/4 — Authentication and access

*One page. Facts snapshot 2026-11; verify current behavior on Microsoft Learn before the exam.*

## Authentication methods

| Method | Key facts |
|---|---|
| Password | Something you know. Strengthen with banned-password lists, smart lockout, and MFA. |
| Microsoft Authenticator | Push approval or passwordless phone sign-in. Supports number matching and additional context to defeat MFA fatigue. |
| FIDO2 security key | Phishing-resistant, passwordless, hardware-bound credential. Register per user; can be shared only with a shared-device design. |
| Windows Hello for Business | Phishing-resistant, device-bound PIN/biometric. Best with Entra join or hybrid join; supports key trust and certificate trust. |
| Certificate-based auth (CBA) | Phishing-resistant PKI credential, often on smart cards. Requires certificate trust and issuance rules. |
| Temporary Access Pass (TAP) | Time-limited, single-use or multi-use passcode. Use for onboarding, device setup, and recovery when the user has no strong method. Can satisfy MFA. |
| OATH tokens | TOTP/HOTP hardware or software tokens. Seed files import into Entra; users enter the 6-digit code. |
| SMS / voice | Convenient but weaker; avoid for administrators and high-risk users. Availability depends on the authentication methods policy. |
| Email OTP | Primarily for B2B guests at redemption. Not a general-purpose MFA method for members. |
| Security questions | SSPR only. Not available to administrator accounts and not a strong MFA method. |

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
| MFA registration policy | Identity Protection policy that forces users to register MFA. Applies to all users by default; exclude break-glass accounts. |

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
| Break-glass accounts | At least two cloud-only accounts with permanent Global Administrator, excluded from CA, MFA, and SSPR; monitor their use. |
| Sign-in frequency | Reauthentication interval for a user or app. Separate from token lifetime; CAE can revoke tokens in near real time. |
| Global Secure Access | Entra Internet Access and Private Access route traffic through Microsoft's security edge. Connectors publish private apps; traffic forwarding profiles decide what is tunneled; CA applies to private resources. |

## High-yield exam traps

- CA policies require P1; risk conditions and Identity Protection require P2.
- "Require MFA" is not the same as "require phishing-resistant MFA". Use authentication strengths.
- SSPR cannot write a password back to on-prem AD without password writeback enabled.
- Administrators cannot use security questions for SSPR and must register two methods.
- Report-only mode does not block anything, even when the policy would deny access.
- Do not lock yourself out: exclude break-glass accounts and validate with report-only first.
- Number matching and additional context reduce MFA push fatigue; they do not make push phishing-resistant.
