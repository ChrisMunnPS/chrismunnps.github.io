# SC-300 cheat sheet 3/4 — Plan and implement workload identities

*One page. Facts snapshot 2026-11; verify current behavior on Microsoft Learn before the exam.*

## Objects and consent

| Item | What to remember |
|---|---|
| App registration | The application definition in your tenant: client ID, redirect URIs, credentials, API permissions, app roles, manifest, owners. |
| Enterprise application | The **service principal** (instance) of an app in a tenant. Controls assignments, SSO, provisioning, and user-visible properties. |
| Single vs multi-tenant | Single-tenant apps accept only accounts from the home tenant. Multi-tenant apps use the `common` (or tenant-specific) endpoint and require consent in each tenant. |
| Delegated permission | App acts as the signed-in user. Requires user or admin consent; effective access is the intersection of user rights and granted scopes. |
| Application permission | App acts as itself, no signed-in user. Always requires **admin consent**; often needs a client secret or certificate. |
| Admin consent workflow | Users request consent; designated reviewers approve in the Entra admin center. Configure under Enterprise applications > Consent and permissions. |
| User consent settings | Options: **disable user consent**, verified publishers + chosen **low-impact** permissions, **all apps**, or a **custom app consent policy**. **Risk-based step-up consent** is on by default and sends risky requests to admin approval; without the admin consent workflow the user sees **AADSTS90094** and the audit shows **ApplicationManagement / Consent to application / Risky application detected**. |
| Token customization | Token lifetime policies set access/ID token, refresh token, and sliding-window lifetimes for all apps, a multitenant app, or one service principal. **Optional claims** add or change claims per app and matter most moving from v1.0 to v2.0 tokens. |
| Redirect URI | Must exactly match the app's configured reply URL. Prefer the authorization code flow with **PKCE** for public clients. |
| Credentials | Client secrets are strings with expiry; certificates are stronger. Store secrets in Key Vault and rotate before expiry. |
| App roles vs groups | App roles are defined in the app manifest and assigned to users/groups. Group claims can also carry membership, but large groups require a token-size strategy. |

## Single sign-on and app proxy

| Item | What to remember |
|---|---|
| SAML SSO | Configure **Identifier (Entity ID)**, **Reply URL (ACS URL)**, and **Sign-on URL** in Entra and the app. Exchange the signing certificate and map claims (NameID, email, groups). |
| SAML certificates | Entra signs SAML assertions/responses with a certificate. Plan rollover: download the new certificate, update the app, then activate. |
| NameID | Choose a stable, unique claim such as UPN or object ID. Changing the NameID format can break existing app accounts. |
| OIDC / OAuth 2.0 | Use discovery metadata, client ID/secret, scopes, and redirect URIs. ID tokens identify the user; access tokens authorize APIs. |
| Password-based SSO | Entra stores credentials and replays them through the My Apps browser extension. Use for legacy apps with no modern protocol. |
| Linked SSO | Entra simply links to an existing app URL. No sign-in brokering. |
| Application Proxy | Publishes on-premises apps without a VPN. A **connector** runs on a server inside the network and makes outbound connections only. |
| App Proxy pre-authentication | Choose **Entra ID** pre-auth (CA, MFA, conditional access) or **passthrough**. Entra ID pre-auth is the secure default. |
| Kerberos delegation | For Windows integrated auth, configure **Kerberos constrained delegation (KCD)** on the connector's service account and the app's service principal name. |
| Custom domains | App Proxy can use a verified custom domain and certificate instead of the default `msappproxy.net` URL. |
| Header-based SSO | App Proxy can inject identity headers for legacy apps that cannot use SAML/OIDC. |

## Provisioning, identities, and app governance

| Item | What to remember |
|---|---|
| SCIM provisioning | Automates user/group create, update, and disable in SaaS apps. Map attributes with expressions; use provisioning logs to debug. |
| Attribute mappings | Match by a unique attribute (often `userPrincipalName` or `mail`). Test with a single user before turning on the full sync. |
| Deprovisioning | On unassignment or user deletion, provisioning can disable or delete the app account. Configure the behavior deliberately. |
| Assignment required | Enterprise app setting that blocks sign-in unless the user or group is assigned. Pair it with group-based assignment. |
| Managed identity | Azure-managed service principal with no secret to manage. **System-assigned** dies with the resource; **user-assigned** can be shared across resources. |
| Workload identity federation | Replace secrets with a trust relationship between an external workload (GitHub, Kubernetes, Azure DevOps) and an app registration or managed identity. |
| Service principal vs managed identity | Both are identities; a managed identity is a special service principal tied to an Azure resource and cannot be configured with a client secret. |
| App governance | Defender for Cloud Apps **add-on** for **OAuth apps using Microsoft Graph** to reach Microsoft 365 data. Provides insights, governance policies, detection, and **automatic remediation**. Enable under **Settings > Threat Protection > App Governance**. |
| OAuth app policies | In **Defender for Cloud Apps > Cloud apps > OAuth apps**, create a permission policy to alert on high-permission apps authorized by many users, ban a permission (which **disables the enterprise app**), or scope by the group membership of users who consented. The **Community use** filter flags rare permissions. |
| Cloud Discovery and CASB | Defender for Cloud Apps is Microsoft's **CASB**. **Cloud Discovery** reads firewall/proxy traffic logs to find shadow IT; the **Cloud app catalog** rates **16,000+** apps on **80+** risk factors. Sanction or unsanction apps from the catalog. |
| Application collections | Requires **P1/P2**. Group related apps into tabs for users in **My Apps**; a collection only shows apps the user is already assigned. Admins create them under **Enterprise applications > App Launchers > New collection**; users can create personal collections. |
| Restore deleted apps | App registrations and service principals are restorable for **30 days** from Deleted applications. The same client ID, permissions, and assignments return. |
| Hard deletion protection | Can protect cloud applications and service principals from permanent deletion for **seven days after each soft delete**; restoring keeps protection and a new delete restarts the window. Preview feature, **permanent once enabled**, needs the **Entra Backup Administrator** role. |

## High-yield exam traps

- An enterprise app is not a second registration; it is the service principal of the app in the tenant.
- Delegated permission acts as the user; application permission acts as the app and needs admin consent.
- A new app registration means a **new client ID**; recreating an app breaks existing consent, tokens, and assignments.
- SAML failures usually come from an ACS/entity ID mismatch, expired certificate, or NameID format change.
- App Proxy connectors need outbound access only; do not open inbound firewall ports.
- User consent disabled does not revoke existing grants; review existing permissions separately.
- Restoring only the service principal does not restore a deleted app registration, and vice versa.
