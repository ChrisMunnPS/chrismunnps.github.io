# SC-300 cheat sheet 4/4 — Identity governance

*One page. Facts snapshot 2026-11; verify current behavior on Microsoft Learn before the exam.*

## Entitlement management

| Item | What to remember |
|---|---|
| Catalog | Container of resources (groups, applications, SharePoint sites) and access packages. Delegate catalog owners and readers. |
| Access package | A bundle of resources that fulfills a role or project. Users request the package rather than individual resources. |
| Assignment policy | Defines who can request (users/groups/connected organizations), approval, expiration, access review, and whether assignment is direct or auto-assigned. |
| Multiple policies | One package can have several policies with different audiences, approval, and lifetime. Users request the package and match a policy. |
| Approval | Optional single- or multi-stage approval. Delegated approvers can be managers, group owners, or specific users. |
| Expiration | Assignments can expire after a number of days, on a date, or never. Expired access must be re-requested. |
| External users | Connected organizations define partner tenants or domains. External users receive guest objects; lifecycle removes access when the package expires. |
| Separation of duties | Incompatible access packages can block a user from holding conflicting access. Evaluate at request time. |
| License | Entra ID **P2** (or Entra ID Governance) for entitlement management. |

## Access reviews

| Item | What to remember |
|---|---|
| Scope | Group membership, app assignment, Entra role assignment, Azure resource role, or access package assignment. |
| Reviewers | Resource owner, group owner, selected users, managers, or self-review. Define a fallback if reviewers do not respond. |
| Recurrence | One-time, weekly, monthly, quarterly, semi-annual, or annual. Set duration and whether reviewers must justify. |
| Decisions | Approve, deny, or don't know. **Auto-apply** applies results when the review ends; without it, decisions do not change access. |
| Recommendations | "Inactive users" recommendations flag users with no sign-in in the last 30 days. Use as input, not as the only decision. |
| Guest reviews | Review guest access separately; denied guests can be removed from the group, app, or tenant. |
| Role reviews | Review privileged role assignments (PIM eligible and active) on a recurring basis to enforce least privilege. |
| License | Entra ID **P2** / Entra ID Governance. |

## Privileged Identity Management (PIM)

| Item | What to remember |
|---|---|
| Eligible vs active | Eligible means the user can activate the role on demand. Active means the role is assigned permanently or for a fixed period. |
| Activation requirements | Maximum duration, MFA, justification, ticket information, and approval. Configure per role in role settings. |
| Default duration | Entra role activation default is **8 hours**; role settings can shorten or lengthen it. Azure resource roles have their own settings. |
| Approval | Designate approvers. The request waits until approved; the user cannot use the role before activation completes. |
| Notifications | PIM alerts for too many Global Administrators, roles assigned outside PIM, stale assignments, and activation anomalies. |
| PIM for groups | Makes group membership eligible or active with activation and approval. Requires the group to be onboarded to PIM. |
| PIM for Azure resources | Just-in-time access to Azure RBAC roles at management group, subscription, resource group, or resource scope. |
| Access reviews for PIM | Recurring review of eligible/active assignments; remove assignments that are no longer justified. |
| Break-glass | Keep two permanent Global Administrator accounts excluded from PIM and CA. Monitor sign-ins and alert on use. |
| License | Entra ID **P2** / Entra ID Governance (PIM for groups and Azure resources included). |

## Lifecycle workflows and monitoring

| Item | What to remember |
|---|---|
| Lifecycle workflows | Automate joiner, mover, and leaver tasks. Triggers include on-demand, scheduled, attribute changes, and group membership changes. |
| Tasks | Enable/disable account, add/remove group, send email, generate TAP, run a custom extension (Logic Apps). |
| Scope | A workflow runs against a scope (all users or a group) and a trigger condition. Test with a small scope first. |
| Custom extensions | Call an Azure Logic App from a workflow for tasks the built-in tasks do not cover. |
| Audit logs | Directory changes, role assignments, app consent, and policy edits. Retained **30 days** in Entra; export to Log Analytics or Sentinel for longer. |
| Sign-in logs | Interactive and non-interactive sign-ins, CA results, risk, and device details. P1/P2 extends retention beyond the free tier. |
| Provisioning logs | Records SCIM create/update/disable actions and failures. Use them to debug attribute mappings. |
| Diagnostic settings | Stream audit, sign-in, provisioning, and risk logs to Log Analytics, storage, or Event Hub. |
| Alerts and workbooks | Entra ID Governance/Monitoring workbooks summarize access, reviews, and PIM. Alert on break-glass use, risky sign-ins, and role changes. |
| Terms of use | Require acceptance with a Conditional Access grant control. Acceptance is recorded per user and version. |

## High-yield exam traps

- Entitlement management and access reviews need **P2**; do not propose them with P1 only.
- An access review does not change access unless **auto-apply** is enabled.
- PIM eligible assignment is not active access; the user must activate and satisfy approval/MFA.
- Access package expiration and access review are different controls; use both for time-bound, validated access.
- Deleting a group does not remove the business need for access; use access packages and reviews to prevent entitlement sprawl.
- Audit retention is limited; export logs if the investigation window is longer than 30 days.
- Review guest access and privileged roles on a different cadence from standard group membership.
