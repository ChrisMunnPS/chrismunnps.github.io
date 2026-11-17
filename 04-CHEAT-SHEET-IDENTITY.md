# SC-300 cheat sheet 1/4 — Implement and manage user identities

*One page. Facts snapshot 2026-11; verify current behavior on Microsoft Learn before the exam.*

## Tenant, domains, and directory data

| Item | What to remember |
|---|---|
| Initial domain | Every tenant starts with `<name>.onmicrosoft.com`. It cannot be removed or renamed. |
| Custom domain | Add the DNS name, prove ownership with a **TXT** (or **MX**) record, then set it as primary. A domain can be verified in only one tenant at a time. |
| Tenant identity | The **tenant ID** (GUID) is stable; the primary domain can change. Apps and scripts should use the tenant ID. |
| Directory roles vs Azure RBAC | Entra roles govern directory objects; Azure RBAC governs Azure resources. Global Administrator can **elevate access** to gain User Access Administrator at the root management scope. |
| Administrative units | Scope a role (for example User Administrator) to a subset of users, groups, or devices. Good for regional helpdesk delegation. |
| Role-assignable groups | A security group can hold Entra roles, but the group must be created with **isAssignableToRole = true**; membership then grants the role. |
| Protected actions | High-impact actions can require a Conditional Access **authentication context**. The role assignment alone is not enough. |

## Tenant-wide settings and branding

| Item | What to remember |
|---|---|
| Company branding | Needs **Entra ID P1/P2 or Office 365**. Language is set automatically and **can't be changed**; background image max **1920x1080** and **300,000 bytes**; username hint ≤**64** chars; sign-in text ≤**1,024** chars. |
| Tenant properties | Directory name, country/region, notification language, tenant ID, technical contact, global privacy contact, and privacy statement URL. |
| User and guest settings | **User settings** control app registration, profile edits, password changes, and portal access. **Application Developer** restores app registration; **Directory Readers** restores portal access. **External collaboration** controls guest access, guest invites, and guest self-service. |

## Users, groups, and licensing

| Item | What to remember |
|---|---|
| User types | **Member** (in the tenant) vs **Guest** (B2B). `userType` is informational; authorization comes from assignments. |
| Bulk operations | Bulk create/invite/delete use a CSV template. Errors are reported per row; a failed row does not stop the rest. |
| Dynamic groups | Rule-based membership, for example `user.department -eq "Sales" -and user.accountEnabled -eq true`. Membership is read-only; you cannot manually add or remove members. |
| Assigned vs dynamic | Assigned groups take manual members. Dynamic user groups evaluate user attributes; dynamic device groups evaluate device attributes. |
| Security vs Microsoft 365 | Security groups grant access only. Microsoft 365 groups add a shared mailbox, calendar, Teams, and SharePoint site. |
| Nested groups | Group-based licensing does **not** flow through nested groups, and dynamic groups cannot contain groups as members. Flatten membership for licensing. |
| Group-based licensing | Assign one or more licenses to a group. Every direct member gets the license; removing a member removes it. Requires a usage location on each user. |
| Licensing errors | Common failures: **not enough licenses**, **usage location not set**, **conflicting service plans**, and **mutually exclusive plans**. Re-process after fixing the cause. |
| Soft delete | Deleted users, Microsoft 365 groups, cloud security groups, app registrations, and service principals stay restorable for **30 days** with the same object ID. |
| Hard deletion protection | Preview. Blocks **permanent deletion for 7 days after each soft delete**; restoring keeps protection, and deleting the object again restarts the window. Covers cloud-only users, groups, applications, and service principals. **Permanent once enabled**; soft deletion still succeeds. Needs the **Entra Backup Administrator** role. |
| After 30 days | The object is hard deleted. It cannot be restored; recreate and reconfigure it. |

## External identities and hybrid identity

| Item | What to remember |
|---|---|
| B2B collaboration | Invite an external user; Entra creates a **guest object** in your tenant. The guest redeems the invitation and authenticates in their home tenant. Control with cross-tenant access settings and external collaboration settings. |
| B2B direct connect | No guest object. Used for Teams shared channels; access is controlled by cross-tenant access policy. |
| B2B authentication trust | You can trust MFA and compliant-device claims from another Entra tenant so guests are not forced to register again. |
| Tenant restrictions v2 | Configured in **cross-tenant access settings**, replacing proxy allow lists. Allow/block named external tenants for internal identities and block external identities entirely. Enforced by **Global Secure Access** universal tenant restrictions tagging, needing **GSA Administrator + Security Administrator**. **Data plane protection** blocks token replay against **Microsoft Graph** and anonymous SharePoint access. |
| Azure AD B2C | Separate tenant and directory for customer identities. Supports local accounts, social IdPs, custom policies, and branded sign-in. Do not confuse with B2B. |
| Entra Connect Sync | Rich sync engine for hybrid identity. Supports **password hash sync (PHS)**, **pass-through authentication (PTA)**, and **federation with AD FS**, plus attribute transforms, filtering, and writeback. |
| Cloud Sync | Lightweight agent-based sync, primarily **PHS** with a smaller feature set. Good for multi-forest and simple topologies; it does not replace every Connect Sync feature. |
| Seamless SSO | Kerberos-based desktop SSO for domain-joined PCs. Users sign in to Entra without retyping the corporate password. Requires the Seamless SSO computer account and client configuration. |
| Password writeback | Enables cloud **SSPR** and password changes to write back to on-premises AD. Configure it in the sync client; without it, cloud reset does not change the on-prem password. |
| Staging mode | A Connect Sync server in staging mode imports and syncs but does not export. Use it to validate a replacement server before cutover. |
| Connect Health | Agents report sync, AD FS, and health data to Entra. Use alerts to catch export errors, stale sync, and agent failures. |
| Filtering | Scope sync by OU, domain, or attribute. Filtering is not security: excluded objects can still exist in the cloud if they were synced before. |

## High-yield exam traps

- Deleting and recreating a group or app creates a **new object ID**; existing assignments and Conditional Access references break.
- A deleted group can be restored only during the **30-day** window; after that, rebuild it.
- Hard deletion protection blocks the **hard delete**, not the initial soft delete, and cannot be turned off.
- Global Administrator does not automatically grant Azure subscription access until access is elevated.
- Group-based licensing ignores nested group members.
- Cloud Sync is not a drop-in replacement for every Connect Sync feature; check PTA/federation and writeback requirements first.
