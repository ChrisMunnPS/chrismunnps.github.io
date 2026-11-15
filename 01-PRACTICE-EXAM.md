# SC-300 Practice Examination

**113 questions - 113 minutes - closed book**

This bank is drawn from the four Microsoft Learn SC-300 learning paths (18 modules, 194 units),
snapshot 2026-11-06. The wording and distractors follow the style of the live exam: most items are
scenarios that ask you to pick the configuration, role, or behavior that fits, and several ask you
to select two or three correct statements.

The interactive simulator draws a random 50-question exam by default, using the blueprint weights.
This document contains the full 113-question bank so you can study every item.

## Instructions

1. Time yourself: about one minute per question. The live exam runs roughly two minutes per question.
2. Answer every question. There is no penalty for guessing, and the live exam is scored the same way.
3. Record your answers on paper or in the score sheet before opening the answer key.
4. Where a question says "Choose two" or "Choose three", every selected answer must be correct and no
   incorrect answer may be included, or the item scores zero.
5. Domain tags, explanations, and source units are in the answer key, not here.

---
### Question 1

Contoso has a helpdesk team in Europe and another in Asia. Each team must be able to reset passwords and manage users only for the users in its own region. You must not grant either team rights over users in the other region.

What should you create and configure?

- A. An administrative unit for each region, and assign the Helpdesk Administrator role scoped to each unit.
- B. A security group for each region, and assign the Helpdesk Administrator role to each group.
- C. A custom role for each region with an assignable scope of the region's users.
- D. An organizational unit in Active Directory for each region, and delegate control.

### Question 2

You need to let a team manage the credentials and basic properties of one specific app registration, and nothing else. You plan to create a custom role containing `microsoft.directory/applications/credentials/update` and `microsoft.directory/applications/basic/update`.

Where can this custom role be assigned?

- A. At directory scope only.
- B. At directory scope or at the scope of a single app registration.
- C. At administrative unit scope only.
- D. At management group, subscription, resource group, or resource scope.

### Question 3

Contoso has a tenant with the initial domain `contoso.onmicrosoft.com` and a verified custom domain `contoso.com`. The identity team wants `contoso.com` to be the default suffix for new users.

Which statements are true? (Choose two.)

- A. The primary domain must be a verified custom domain that is not federated.
- B. Changing the primary domain rewrites the user name of every existing user to the new suffix.
- C. An organization can have up to 900 managed domain names, or up to 450 if all domains are federated with on-premises AD.
- D. The initial `onmicrosoft.com` domain can be deleted once a custom domain is verified.

### Question 4

Contoso must urgently remove the domain `fabrikam.com` from its tenant. The domain has roughly 400 users, 20 groups, and one multi-tenant application with an app ID URI in that domain. The domain was not purchased through Microsoft 365.

What will happen when an administrator uses ForceDelete?

- A. The operation succeeds synchronously and removes all references.
- B. The operation fails because a multi-tenant application references the domain.
- C. The operation runs asynchronously, renames users, groups, and applications to the initial domain, and fails because the application is multi-tenant.
- D. The operation fails immediately because there are more than 1,000 references.

### Question 5

Contoso assigns Microsoft 365 E3 to the **All Staff** group and Microsoft 365 E5 to the **Engineering** group. Priya is a member of both groups and also has a direct E3 assignment. A user joins Engineering; the administrator sets no usage location on the user's profile.

What is the result?

- A. Priya receives two E3 licenses and one E5 license; users without a usage location cause the group assignment to fail.
- B. Priya receives the union of the product and service licenses, the same license from multiple sources is consumed only once, and group-licensed users without a usage location inherit the directory's location.
- C. Priya receives only the highest-tier license; users without a usage location are skipped until one is set.
- D. Priority is given to the direct assignment, and group assignments are ignored for that user.

### Question 6

You need group membership to update automatically from user attributes. Some of your groups must also contain devices whose operating system or ownership attributes determine membership.

Which statements are true? (Choose two.)

- A. Dynamic User membership and Dynamic Device membership are both available for security groups.
- B. Microsoft 365 groups support dynamic users but not dynamic devices.
- C. Dynamic membership requires Microsoft Entra ID Governance licensing.
- D. Dynamic rules are evaluated only on a fixed 24-hour schedule.

### Question 7

Contoso is choosing a device identity model for a group of field sales representatives who use their own laptops, including macOS and Linux devices. The devices must not require the user to sign in to Windows with a work account, but the devices must receive Conditional Access based on compliance.

Which device state should be used, and what is true of it?

- A. Microsoft Entra registered — the user signs in with local credentials and a work account is attached; the device can be managed by MDM or MAM and receive Conditional Access through Intune compliance or app protection policy.
- B. Microsoft Entra joined — requires an organizational account to sign in and supports macOS 13+ only.
- C. Hybrid Microsoft Entra joined — supports Windows Server 2016, 2019, and 2022 as well as Linux.
- D. Microsoft Entra registered — requires the device to be domain-joined to Active Directory.

### Question 8

Contoso wants to store a "clearance level" value on users and on enterprise applications, and later use it for fine-grained access to Azure Storage blobs.

Which statements are true? (Choose two.)

- A. Custom security attributes support Boolean, integer, and string data types, single or multiple values.
- B. Custom security attributes are emitted as claims in SAML and JWT tokens by default.
- C. Custom security attributes cannot be used to authorize access to Azure resources.
- D. Custom security attributes are available tenant-wide and can be assigned to directory-synchronized users.

### Question 9

A newly created tenant has never had its external collaboration settings changed. A regular member user with no administrative role wants to invite a partner to a Microsoft Teams channel.

What is the default behavior?

- A. Only administrators and users in the Guest Inviter role can invite guests.
- B. All users, including guests, can invite guest users.
- C. Invitations must be approved by an administrator and expire after 30 days if unredeemed.
- D. Guest invitations are disabled until external collaboration is enabled at the tenant level.

### Question 10

You are reviewing what a newly invited guest can do in the directory by default, before any restriction is applied.

Which statement best describes the guest's default capabilities?

- A. The guest can enumerate all users, groups, and applications in the directory.
- B. The guest can manage their own profile and password, and retrieve some information about other users, groups, and apps, but cannot enumerate the directory.
- C. The guest can list all groups and identify the membership of every group, including hidden groups.
- D. The guest has no directory read permissions at all and sees only their own profile.

### Question 11

Contoso establishes SAML/WS-Fed identity provider federation with a partner whose users already exist as guests that redeemed invitations using email one-time passcode. The partner then asks Contoso to delete the federation configuration.

What happens?

- A. Existing guests automatically switch to the federated identity provider at their next sign-in.
- B. Existing guests keep the authentication method they used at redemption; deleting the federation blocks sign-in for guests who use it, and the fix is to reset their redemption status.
- C. Deleting the federation has no effect on existing guests and only affects new invitations.
- D. Only one domain can be associated with a federation configuration, so the deletion affects a single domain.

### Question 12

Contoso collaborates with Fabrikam. Contoso wants to require multifactor authentication from Fabrikam users before they access Contoso resources, and wants Fabrikam's compliant-device claims to be accepted. Separately, the Teams team wants shared channels with Fabrikam.

What must be configured?

- A. Inbound cross-tenant access settings with trust settings for MFA and compliant device; B2B direct connect must be enabled mutually by both tenants and supports Teams shared channels only.
- B. Outbound cross-tenant access settings, because Contoso is the resource tenant.
- C. A Conditional Access policy only; cross-tenant settings cannot affect MFA trust.
- D. B2B collaboration must be disabled for direct connect to work.

### Question 13

Contoso must enforce on-premises account state immediately at sign-in: disabled accounts, locked-out accounts, expired passwords, and sign-in hour restrictions must be honored by Microsoft Entra ID without waiting for a sync cycle. The organization also wants the least possible on-premises infrastructure and automatic failover.

Which authentication method meets the enforcement requirement, and what is true of the option with the least infrastructure?

- A. Pass-through authentication enforces on-premises policy; password hash synchronization is the least-effort option, but failover from PTA to PHS is not automatic.
- B. Password hash synchronization enforces on-premises policy immediately; PTA requires an AD FS farm.
- C. Federation is required for all of these controls; PHS and PTA cannot enforce them.
- D. PTA enforces on-premises policy and fails over automatically to PHS.

### Question 14

A user object fails to export to Microsoft Entra ID with **InvalidSoftMatch**. Investigation shows the on-premises user has a `proxyAddress` that matches an existing cloud object, and that cloud object already has an `immutableId` populated.

What is the cause, and what is the difference from the other common duplicate error?

- A. Hard match by sourceAnchor found nothing and the soft match by proxyAddresses or UPN hit an object that already has a different immutableId. By contrast, AttributeValueMustBeUnique is a plain duplicate proxyAddress or UPN.
- B. The sourceAnchor exceeds 60 characters, which always produces InvalidSoftMatch.
- C. The object type differs between the two objects, which is what InvalidSoftMatch means.
- D. Duplicate Attribute Resiliency is disabled, which is the only cause of InvalidSoftMatch.

### Question 15

An administrator deletes a monitored server from Microsoft Entra Connect Health to stop alert noise.

Which statements are true? (Choose two.)

- A. Connect Health requires a Microsoft Entra ID Premium P1 license, including to complete the configuration in the Azure portal.
- B. Deleting the server uninstalls the Connect Health agent from that server.
- C. Deleting the server stops data collection and monitoring but does not uninstall the agent and does not delete already-collected data.
- D. Email notifications are disabled by default and must be turned on.

### Question 16

You are planning authentication methods for a tenant. The security team asks which methods can serve as a second factor, which are limited to self-service password reset, and which can be disabled.

Which statements are true? (Choose three.)

- A. Password is the only method that cannot be disabled.
- B. Security questions are available for SSPR only and apply to non-administrative accounts only.
- C. Email address can be used as both an MFA method and an SSPR method.
- D. Users can configure a maximum of five OATH hardware tokens or authenticator apps.
- E. OATH HOTP tokens are supported alongside OATH TOTP tokens.

### Question 17

A user enters the wrong password several times from the office. Later the same day, the user triggers lockout again while travelling and connecting from an unfamiliar location.

Which statements describe smart lockout behavior? (Choose two.)

- A. The default is to lock for one minute after ten failed attempts, and customization requires Microsoft Entra ID P1 or higher.
- B. Familiar and unfamiliar locations share a single lockout counter.
- C. Counters are maintained per data center, so the effective number of attempts available to an attacker is roughly the threshold multiplied by the number of data centers.
- D. Smart lockout must be enabled manually for each tenant.

### Question 18

Contoso wants to block commonly used and compromised passwords, including for users synchronized from on-premises Active Directory. The company will use only cloud-only users initially, then extend the same policy to synced users with a custom banned list.

Which statement is true?

- A. Cloud-only users with only the global banned password list require Microsoft Entra ID Free; adding a custom banned list or protecting synced users requires P1 or P2.
- B. The on-premises deployment starts in Enforce mode by default.
- C. The Password Protection proxy and the Application Proxy connector must be installed on the same server to share the agent updater.
- D. The on-premises deployment requires AD DS schema changes and new firewall ports on domain controllers.

### Question 19

A user with no authentication methods registered wants to register a FIDO2 security key as their first method.

What happens, and what else is true of passwordless registration?

- A. Registration succeeds immediately; FIDO2 is always the first method a user registers.
- B. The user must first register at least one other MFA method; after that, they can add a security key from the Security info page using a USB or NFC device with a PIN and gesture.
- C. FIDO2 registration requires a Microsoft Entra ID Premium license for every user.
- D. Registration is only possible from a Windows device joined to Active Directory.

### Question 20

Contoso is evaluating Windows Hello for Business for its administrative workforce. The security team wants assurance that the credential cannot be extracted from the device and that the PIN is not stored anywhere.

Which statements are true? (Choose two.)

- A. The credential is a certificate or asymmetric key pair bound to the device, and with a TPM the private key never leaves the device.
- B. The PIN is stored in the TPM and synchronized to Microsoft Entra ID for recovery.
- C. The PIN is never stored or shared, and biometric templates are stored locally on the device.
- D. Windows Hello for Business can only use software-based key storage.

### Question 21

You want to remove local administrator accounts from Azure virtual machines and use Microsoft Entra ID authentication with Conditional Access and MFA.

Which requirements apply?

- A. Only Windows Server 2016 and later are supported, and a user-assigned managed identity is required.
- B. Supported platforms include Windows Server 2022 or later with Desktop Experience, Windows 11 24H2 or later, and Linux; Linux requires a system-assigned managed identity.
- C. Microsoft Entra ID sign-in for VMs requires domain-joined VMs and an AD FS farm.
- D. The feature requires Microsoft Entra ID Governance licensing.

### Question 22

A new tenant was created last month and has never been configured. An administrator enables security defaults.

Which statements are true? (Choose three.)

- A. Security defaults are available at no extra cost and are enabled by default on new tenants.
- B. Users are given a 14-day grace period to register for MFA.
- C. Sixteen named administrative roles are required to perform MFA at every sign-in.
- D. Security defaults block legacy authentication, including Exchange ActiveSync basic authentication.
- E. Security defaults and Conditional Access can be used together to extend coverage.

### Question 23

Contoso has Microsoft Entra ID P1 licenses. A consultant proposes a policy that blocks access when sign-in risk is medium or higher. Separately, the team asks what happens to a user in the Finance group when a Conditional Access policy targets only the Sales group.

What is the outcome?

- A. The risk-based policy works under P1; users not targeted by any policy receive a token because that is the default behavior.
- B. The risk-based policy requires P2; users not targeted by any policy receive a token because that is the default behavior.
- C. The risk-based policy requires P2; users not targeted by any policy are blocked by default.
- D. The risk-based policy works under P1; users not targeted are blocked if any policy exists in the tenant.

### Question 24

A user reports being blocked by a policy that should not apply. You need to determine which policy evaluated and why it matched, and you want to validate a new policy before enforcing it.

Which combination of tools should you use? (Choose two.)

- A. Set the new policy to Report-only, then review the sign-in log's Conditional Access tab for policy results.
- B. Use the What-If tool to simulate the sign-in with the user, target app, and conditions.
- C. Disable all policies, ask the user to retry, and re-enable them one at a time in production.
- D. Use the enterprise application's provisioning log.

### Question 25

Contoso wants to require that only healthy, managed devices access Microsoft 365. Most devices are Intune-managed but are not joined to on-premises Active Directory. Some users access Exchange Online from native mail clients on personal iOS and Android devices.

Which controls should be used, and which statement is correct?

- A. Require Hybrid Microsoft Entra joined device for all users and all cloud apps.
- B. Require device to be marked as compliant for managed devices, and require an approved client app with an app protection policy for the personal mobile devices.
- C. Require device to be marked as compliant, which also blocks users from enrolling their devices in Intune.
- D. Require multi-factor authentication only, because device state cannot be evaluated for personal devices.

### Question 26

Users complain they are prompted to sign in again too often, while the security team wants sessions revoked quickly when an account is disabled.

Which statements are true? (Choose two.)

- A. The default sign-in frequency is a rolling 90 days, and a device unlock or interactive sign-in satisfies the policy.
- B. Sign-in frequency applies only to browser sessions and never to MFA.
- C. Continuous access evaluation uses short-lived tokens — one hour by default — and a resource provider returns a 401 with a claims challenge after a critical event.
- D. CAE requires that clients be hybrid joined.

### Question 27

You are configuring Identity Protection risk policies for a new deployment and want to follow Microsoft's recommendation.

Which thresholds and remediation should you configure?

- A. User risk = High with allow access and require password change; sign-in risk = Medium and above with require MFA.
- B. User risk = Low and above with block access; sign-in risk = High with block access.
- C. User risk = Medium with require MFA; sign-in risk = Low with require password change.
- D. Both policies = High with block access, because blocking is the safest option.

### Question 28

A security analyst must be able to review risky users, dismiss user risk, and confirm that a sign-in is safe. The analyst must not be able to configure policies or reset passwords. Another administrator must be able to create Conditional Access policies that use sign-in risk as a condition.

Which roles should be assigned?

- A. Security Operator for the analyst; Conditional Access Administrator for the other administrator.
- B. Security Administrator for the analyst; Global Administrator for the other administrator.
- C. Security Reader for the analyst; Privileged Role Administrator for the other administrator.
- D. Global Reader for the analyst; Security Administrator for the other administrator.

### Question 29

An auditor asks how far back risky sign-in data and risk detections are available, and how many records can be exported.

What should you tell them?

- A. Risky users, risky sign-ins, and risk detections all cover 90 days; each exports 2,500 records.
- B. Risky sign-ins cover 30 days and export 2,500 records; risk detections cover 90 days and export 5,000 records.
- C. Risky sign-ins cover 90 days and export 5,000 records; risk detections cover 30 days and export 2,500 records.
- D. All reports cover 30 days and export 250,000 records.

### Question 30

Contoso has 3,000 role assignments in one subscription and needs to add 1,500 more. The platform team also wants a custom role that allows reading billing data.

Which statements are true? (Choose two.)

- A. A subscription supports up to 4,000 role assignments, and a management group supports 500.
- B. A directory supports up to 5,000 custom roles.
- C. Contributor can grant access to other users.
- D. Custom Azure roles are stored in the subscription, not in Microsoft Entra ID.

### Question 31

An application running on an Azure VM must read secrets from Azure Key Vault. The VM may be recreated from an image during deployments, and the team does not want to re-grant Key Vault permissions after each rebuild. The vault currently uses access policies and has 1,100 entries.

Which approach is correct?

- A. Use a system-assigned managed identity and keep the access policy model, because access policies support unlimited entries.
- B. Use a user-assigned managed identity and move the vault to the Azure RBAC permission model, because access policies are capped at 1,024 entries.
- C. Create a service principal with a client secret and store the secret on the VM.
- D. Use a system-assigned managed identity and assign the Key Vault Reader role so the app can read secret values.

### Question 32

Contoso wants identity-aware, cloud-delivered access to both internet destinations and private on-premises applications, replacing VPN for remote workers and applying Conditional Access to internet traffic.

Which statement describes the correct licensing, services, and a key enforcement limitation?

- A. Microsoft Entra ID P1 or P2 plus an Entra Internet Access and/or Private Access license; Internet Access is a secure web gateway, Private Access provides ZTNA to private resources, and Microsoft-traffic Conditional Access is enforced only when the Global Secure Access client is present.
- B. Microsoft 365 E5 only; Internet Access is a firewall, Private Access is a VPN concentrator, and Conditional Access is always enforced regardless of client.
- C. Microsoft Entra ID Governance; Internet Access and Private Access are both part of entitlement management.
- D. Microsoft Entra ID P2 only; no additional license is required for Internet Access or Private Access.

### Question 33

You are deploying Microsoft Entra Private Access for an on-premises file server and a line-of-business app. The security team also wants Conditional Access to block access to Microsoft 365 unless the user's traffic comes through Global Secure Access.

Which statements are true? (Choose two.)

- A. The private network connector must run on Windows Server 2016 or later with .NET 4.7.2 and TLS 1.2, and more than one connector is recommended for high availability.
- B. NetBIOS names are supported in Quick Access application segments.
- C. The compliant-network policy pattern is to include Any location, exclude All Compliant Network locations, and block access.
- D. Remote networks require the Global Secure Access client on every device.

### Question 34

You are the identity administrator for Contoso. Contoso developed a multitenant application named ExpenseTrack and registered it in the Contoso tenant. Fabrikam has consented to ExpenseTrack in its own tenant. Fabrikam's administrator wants to give the application a different display name and logo inside Fabrikam, and wants to control which Fabrikam users are assigned to the application.

Which changes can Fabrikam make without affecting Contoso's application object?

- A. Change the display name and logo, and create app role assignments, on the Fabrikam service principal.
- B. Change the display name and logo, and edit the redirect URI, on the Fabrikam service principal.
- C. Change the Application ID URI and add a new client secret in the Fabrikam tenant.
- D. Change the supported account types from multitenant to single-tenant.

### Question 35

A vendor supplies a nightly batch service that reads all user profiles from Microsoft Graph. The service runs unattended as a Windows service on a server; no user is signed in when it runs.

Which permission type must be configured, and who must grant it?

- A. Delegated permission, consented by any user
- B. Delegated permission, consented by an administrator
- C. Application permission, consented by an administrator
- D. Application permission, consented by any user

### Question 36

You need to send a customer's administrator a link that grants tenant-wide admin consent to a multitenant application in the customer's own tenant. The application's client ID is `11111111-2222-3333-4444-555555555555`.

Which URL should you use?

- A. `https://login.microsoftonline.com/common/adminconsent?client_id=11111111-2222-3333-4444-555555555555`
- B. `https://login.microsoftonline.com/{customer-tenant-id}/adminconsent?client_id=11111111-2222-3333-4444-555555555555`
- C. `https://login.microsoftonline.com/{customer-tenant-id}/oauth2/v2.0/authorize?client_id=11111111-2222-3333-4444-555555555555`
- D. `https://entra.microsoft.com/{customer-tenant-id}/adminconsent`

### Question 37

An administrator opens **App registrations > ExpenseTrack > API permissions** and selects **Grant admin consent**. The application already had tenant-wide consent granted six months earlier for a different set of permissions, and some users had previously consented to additional delegated permissions on their own behalf.

Which statements are true? (Choose two.)

- A. Previously granted tenant-wide permissions are revoked and replaced by the currently configured permissions.
- B. Previously granted tenant-wide permissions are merged with the currently configured permissions.
- C. Permissions that individual users granted on their own behalf are also revoked.
- D. Permissions that individual users granted on their own behalf are not affected.

### Question 38

You are registering a web application. Which statements about redirect URIs (reply URLs) are true? (Choose three.)

- A. The URI must begin with `https`, except for `localhost` during development.
- B. The URI matching is case-sensitive.
- C. The characters `! $ ' ( ) , ;` are not supported.
- D. A URI may contain a fragment identifier (`#`) to receive tokens for single-page apps.
- E. Wildcards are supported in the path portion of the URI.

### Question 39

You are designing authorization for a line-of-business application. The application needs to distinguish three permission levels (Reader, Approver, Administrator). The security team does not want to depend on group claims because tokens are already large and users belong to many groups, and the project has no budget for Microsoft Entra ID P1 licenses for the application's users.

What should you implement?

- A. App roles, because they avoid group overage and do not require Microsoft Entra ID P1.
- B. Group claims filtered to assigned groups, because filtering removes token bloat.
- C. App roles, because app roles require Microsoft Entra ID P1 but group claims do not.
- D. Dynamic groups, because membership is evaluated at token issuance.

### Question 40

You define app roles for an application and set **User assignment required?** to **Yes**. The only roles you define are `Administrator` and `Approver`.

What is the risk, and what should you do?

- A. No risk; users who are assigned but hold no role receive no permissions.
- B. Every assigned user must be assigned one of the defined roles, so users who should have read-only access will be forced into an elevated role. Define a baseline role with no elevated permissions.
- C. The application will fail to issue tokens because a default role is missing from the manifest.
- D. Role assignments will fall back to the directory's default access.

### Question 41

Your organization has set **Users can register applications** to **No**. A developer must be able to register applications and consent to permissions on their own behalf, but must not be able to manage applications owned by other teams, configure application proxy, or manage Conditional Access.

Which role should you assign?

- A. Application Developer
- B. Application Administrator
- C. Cloud Application Administrator
- D. Global Administrator

### Question 42

Contoso must publish an on-premises web application that uses Integrated Windows Authentication. The application must be reachable by remote users without a VPN, and administrators want Microsoft Entra preauthentication and Conditional Access applied before the request reaches the app.

Which two components are required, and which delegation mechanism provides SSO to the app? (Choose two.)

- A. The Application Proxy service in the cloud and an Application Proxy connector on-premises; Kerberos Constrained Delegation provides SSO.
- B. The Application Proxy service in the cloud and a private network connector; password-based SSO provides authentication.
- C. The Application Proxy service and connector can replace the VPN for users who are on the corporate network.
- D. The connector must be able to read the TokenGroupsGlobalAndUniversal attribute and the app must have a Service Principal Name.

### Question 43

You are configuring OpenID Connect scopes for a web API. Which statements are true? (Choose three.)

- A. `offline_access` must be explicitly requested on the v2.0 endpoint to receive a refresh token.
- B. The `address` and `phone` scopes are supported.
- C. `openid` is required for OpenID Connect sign-in.
- D. For a single-page application, a refresh token is always provided.
- E. `email` guarantees an `email` claim will always be present in the token.

### Question 44

You want to group the applications that users already have access to into tabs by job role, so that users see only the apps relevant to their role in the My Apps portal.

What is required?

- A. Microsoft Entra ID Premium P1 or P2 for collections, and users access them at `https://myapps.microsoft.com`.
- B. No license; collections are included in Microsoft Entra ID Free.
- C. A Microsoft 365 E5 license, because collections are delivered through the Office portal.
- D. Microsoft Entra ID Governance, because collections are an entitlement management feature.

### Question 45

Your security team wants to detect OAuth applications that access Microsoft 365 data through Microsoft Graph APIs, apply policies to risky apps, and automatically remediate suspicious apps.

Which statement describes the correct solution and scope?

- A. Microsoft Entra ID Governance, scoped to all enterprise applications regardless of protocol.
- B. App governance, an add-on to Microsoft Defender for Cloud Apps, scoped to OAuth-enabled apps that access Microsoft 365 data through Microsoft Graph APIs.
- C. Conditional Access, scoped to any application that uses delegated permissions.
- D. Microsoft Entra Permissions Management, scoped to workload identities in Azure subscriptions.

### Question 46

Contoso is delegating access governance to the marketing department. A marketing manager must be able to create bundles of resources and govern who receives them, without being a tenant administrator.

Which statement correctly describes the objects and the delegation chain?

- A. An access package is a container of resources; a catalog is a bundle of resources with policies. The chain is Administrator → Catalog creator → Catalog owner → Access package manager.
- B. A catalog is a container of resources and access packages; an access package is a bundle of resources governed by policies. The chain is Administrator → Catalog creator → Catalog owner → Access package manager.
- C. A catalog and an access package are the same object with different display names.
- D. Access packages are stored in enterprise applications and are governed by Conditional Access.

### Question 47

Contoso creates one access package that bundles a security group, an enterprise application, and a SharePoint site. Internal employees and partner users from another Microsoft Entra directory both need access, with different approval requirements and different expiration periods.

How should this be modeled?

- A. Two access packages in two catalogs, one per audience.
- B. One access package with two policies, one for internal employees and one for external directory users.
- C. One access package with a single policy that applies to both audiences.
- D. One access package per resource, because policies apply to resources rather than to audiences.

### Question 48

You are creating a connected organization for a partner company. The partner has three verified domains and wants users from all of them to be able to request access packages.

What must you do?

- A. Add one connected organization containing all three domains.
- B. Create a separate connected organization for each domain, because only one directory or domain can be added per connected organization.
- C. Add the partner as an access package manager so they can add their own domains.
- D. Configure the partner domains as a single SAML/WS-Fed identity provider federation.

### Question 49

Contoso grants partners access exclusively through access packages. A partner user named Alex loses their last access package assignment. Several months later, Alex tries to request a different access package in the Contoso directory.

What happens by default, and what should you verify?

- A. Alex keeps sign-in access but loses resource access; the guest account is never deleted.
- B. Alex is blocked from signing in when the last assignment is removed, and after 30 days the guest account is removed from the directory, so the request fails.
- C. Alex's account is deleted immediately when the last assignment is removed.
- D. Alex can sign in and re-request access, because guest accounts are excluded from lifecycle settings.

### Question 50

Contoso deploys access reviews. The licensing team asks exactly who needs a license.

Which statement is correct?

- A. Everyone in the tenant needs Microsoft Entra ID Governance.
- B. Access reviews require Microsoft Entra ID Governance or Microsoft Entra Suite, and a P2 license is required for each reviewer, each self-reviewer, each group owner performing a review, and each application owner performing a review — but not for the Global Administrator or User Administrator who configure reviews and apply decisions.
- C. Microsoft Entra ID P2 alone provides full access reviews for all scenarios.
- D. Only the administrator who creates the review needs a license.

### Question 51

You are configuring a recurring monthly access review for a group. You want a backup reviewer when a user has no manager, and you want to know which reviewer options are available.

Which statements are true? (Choose two.)

- A. The maximum duration for a monthly review is 27 days, to avoid overlapping reviews.
- B. A fallback reviewer can be specified for Managers of users and Group owner(s), but not for selected users or self-review.
- C. You can select the application owner as a reviewer for an application access review.
- D. For "All Microsoft 365 groups with guest users", you can choose a scope of Everyone.

### Question 52

Two reviewers are assigned to a review. Reviewer A approves a user's access on Monday. Reviewer B denies the same user's access on Wednesday. Separately, a third reviewer selects **Don't know** for another user.

What is the result?

- A. The first response wins, so the user stays approved; **Don't know** revokes access.
- B. The last submitted response is recorded, so the denial wins; **Don't know** keeps access and is recorded in the audit logs.
- C. The responses conflict and the review fails; **Don't know** escalates to the group owner.
- D. Both users are removed because any denial or indecision triggers removal.

### Question 53

Contoso runs an access review over a group that is synchronized from on-premises Active Directory, and a second review scoped to guest users only.

Which statements are true? (Choose two.)

- A. For the synchronized group, review decisions cannot change membership because the source of authority is on-premises; results are available as CSV or through Microsoft Graph.
- B. For denied guests, the default action when the guest-specific option is not configurable is to remove membership from the resource.
- C. For denied guests, the only available action is immediate permanent deletion from the tenant.
- D. Access reviews can modify synchronized group membership if auto-apply is enabled.

### Question 54

Contoso wants zero standing administrative access. The identity team proposes making every administrator eligible for their roles in Privileged Identity Management.

Which statements are true? (Choose two.)

- A. PIM requires Microsoft Entra ID Premium P2.
- B. Eligible assignments can be created outside PIM, in the standard Roles and administrators blade.
- C. Two break-glass emergency access accounts should retain permanent Global Administrator assignments.
- D. Permanent assignments are created only through PIM.

### Question 55

You are configuring PIM role settings. For the Global Administrator role you set activation duration to one hour and require approval. For Helpdesk Administrator you require a ticket number. An administrator who is eligible for Global Administrator is also configured as an approver.

What is true?

- A. The administrator can approve their own activation; approval completes only when all approvers respond.
- B. The administrator cannot approve their own activation; if multiple approvers are configured, approval completes as soon as one of them approves or denies, and you cannot require approval from at least two users.
- C. Self-approval is allowed only if MFA was performed during activation.
- D. Approval can be configured to require at least two approvers.

### Question 56

You need to bring Azure subscriptions under PIM management. Your account is a Global Administrator but is not an owner of the subscriptions.

What must you do first, and what else is true?

- A. Nothing — Global Administrator can onboard any subscription directly; there is a limit of 10 resources per tenant.
- B. Only owners of subscriptions and management groups can bring resources under PIM management; a Global Administrator must first elevate access to manage all Azure subscriptions, and there is no limit to the number of resources you can manage.
- C. Assign the User Access Administrator role at tenant scope, then onboard; the limit is 500 resources.
- D. Enable PIM for Azure resources in the subscription's Identity blade; custom roles are not supported.

### Question 57

Contoso has a "Tier 0 Office Admins" security group. Members need Exchange Administrator, Office Apps Administrator, Teams Administrator, and Search Administrator, but only occasionally, and the team wants a single just-in-time request.

Which statement is correct?

- A. Create four separate eligible assignments, because a group cannot hold multiple role eligibility.
- B. Make the role-assignable group eligible for all four roles and enable it for privileged access; on activation the user's group membership is activated, granting permissions from all four roles with one request.
- C. Assign the group as active for all four roles; PIM will then time-bound each activation automatically.
- D. Privileged access groups activate the group object itself, which then grants all roles to all members at once.

### Question 58

A service desk analyst cannot find a failed sign-in that a user reports from a background service. Another user's interactive sign-in appears in the portal two hours late.

Which statements are true? (Choose two.)

- A. The sign-ins report shows only interactive sign-ins; non-interactive service-to-service authentication is not displayed.
- B. It can take up to two hours for sign-in records to appear in the portal.
- C. Up to 2,500 records can be downloaded as CSV or JSON.
- D. The sign-ins report requires Microsoft Entra ID P1 or P2.

### Question 59

An auditor needs to find every consent granted to applications in the last week, and the security team wants to stream Microsoft Entra logs to Splunk.

Which approach is correct?

- A. Filter audit logs by Category = ApplicationManagement and Date range = 7 days; export to a third-party SIEM by routing diagnostic settings to a single Azure Event Hubs namespace, which is Microsoft's recommended integration approach.
- B. Use the sign-ins report with Client app = Browser; export with the legacy AzLog tool, which Microsoft recommends going forward.
- C. Filter audit logs by Date range = 30 days and use wildcard search on Target.
- D. Send logs directly to Splunk from the Entra portal without Azure Monitor.

### Question 60

Contoso has Microsoft Entra ID Free. The team wants to review application sign-in trends and measure identity security posture against Microsoft's recommendations.

Which statements are true? (Choose two.)

- A. Usage and insights requires Microsoft Entra ID P1 or P2; Identity Secure Score is available in all editions.
- B. Both usage and insights and Identity Secure Score require P1 or P2.
- C. Identity Secure Score is a percentage: some controls are binary, while others are scored as a percentage of total configuration — for example, protecting 5 of 100 users for a control worth 10.71% yields about 0.53%.
- D. Identity Secure Score requires Microsoft Entra ID Governance.

### Question 61

A contractor starts tomorrow and has no company phone. The contractor must sign in once to register a FIDO2 security key, and the credential must stop working after it is used. The solution must not create a permanent password.

What should you configure?

- A. A Temporary Access Pass configured for one-time use and a short lifetime, with Temporary Access Pass enabled in the authentication methods policy.
- B. A temporary password that must be changed at next sign-in.
- C. A self-service password reset registration link sent by email.
- D. An access package assignment that expires after one day.
- E. A Windows Hello for Business PIN reset.

### Question 62

Fabrikam has its own Microsoft Entra tenant. Contoso acquires Fabrikam. Fabrikam users must appear as guests in Contoso, and changes to their display name and department in Fabrikam must flow to Contoso automatically. Users must not redeem invitations manually.

Which two actions should you perform? (Choose two.)

- A. Configure cross-tenant synchronization in the Fabrikam source tenant.
- B. Enable automatic redemption for inbound cross-tenant synchronization in the Contoso target tenant.
- C. Create a B2B collaboration invitation for every Fabrikam user.
- D. Add Fabrikam as a connected organization in an entitlement management catalog.
- E. Add Fabrikam as a federated domain in Contoso.

### Question 63

Contoso has three Active Directory forests with no trusts between them. The synchronization server must not accept inbound connections from the internet, must support password hash synchronization, and must continue if one synchronization agent fails.

What should you deploy?

- A. Microsoft Entra Cloud Sync with lightweight agents in each forest and at least two agents for high availability.
- B. Microsoft Entra Connect Sync on a single server in staging mode.
- C. Pass-through authentication agents in each forest.
- D. An Active Directory Federation Services farm in each forest.
- E. Microsoft Entra Connect Sync with directory synchronization disabled.

### Question 64

Users on domain-joined computers on the corporate network are prompted for credentials when they open Microsoft 365. Password hash synchronization is already configured. You must remove the prompt without deploying federation, and users must still complete MFA when they work from home.

What should you enable?

- A. Microsoft Entra seamless single sign-on.
- B. Pass-through authentication.
- C. Active Directory Federation Services.
- D. Windows Hello for Business certificate trust.
- E. Per-user MFA with trusted IPs disabled.

### Question 65

Contoso wants consumers to sign up for a customer portal by using their own email address or a Google account. The sign-up page must show Contoso branding, and customers must manage their own profile without an invitation from Contoso.

Which solution should you use?

- A. A Microsoft Entra External ID external tenant with a sign-up and sign-in user flow and social identity providers.
- B. B2B collaboration with one invitation per customer.
- C. Cross-tenant synchronization from a customer tenant.
- D. An entitlement management connected organization.
- E. Active Directory Federation Services with SAML claims.

### Question 66

All Windows devices that are company-owned and not compliant must join a group automatically.

Which dynamic membership rule should you configure?

- A. `(device.deviceOSType -eq "Windows") -and (device.deviceOwnership -eq "Company") -and (device.isCompliant -eq False)`
- B. `(device.deviceOSType -eq "Windows") && (device.deviceOwnership -eq "Company")`
- C. `(user.deviceOSType -eq "Windows") -and (user.isCompliant -eq False)`
- D. `(device.deviceOSType -eq "Windows") -or (device.isCompliant -eq True)`
- E. `(device.deviceOSType -contains "Windows") -and (device.isCompliant -eq No)`

### Question 67

Licenses are assigned to users through a group. A new user in the United Kingdom receives the group membership, but the license is not assigned. The user object has no location configured.

What should you do?

- A. Set the user's Usage location, either directly or through a directory synchronization mapping.
- B. Assign the license directly to the user as well.
- C. Convert the licensing group from Assigned to Dynamic.
- D. Remove the user from the group and add the user again.
- E. Enable group-based licensing on the tenant.

### Question 68

Contoso uses custom security attributes to store clearance levels. The identity team must create attribute sets and definitions. The security team must assign attribute values to users. Neither team may receive the Global Administrator role.

Which two roles should you assign? (Choose two.)

- A. Attribute Definition Administrator.
- B. Attribute Assignment Administrator.
- C. User Administrator.
- D. Attribute Definition Reader.
- E. Privileged Role Administrator.

### Question 69

Contoso has break-glass and executive administrator accounts. Helpdesk staff must not be able to reset the passwords or change the properties of these accounts, even when they hold the User Administrator role.

What should you create?

- A. A restricted management administrative unit that contains the protected accounts.
- B. A standard administrative unit that contains the protected accounts and assign Helpdesk Administrator to it.
- C. A dynamic security group that contains the protected accounts.
- D. A Privileged Identity Management eligible assignment for User Administrator.
- E. A Conditional Access policy that blocks password reset.

### Question 70

Contoso must test new synchronization rules on a second Microsoft Entra Connect server before changing production. Production synchronization must continue during the test.

What should you do?

- A. Install Microsoft Entra Connect on the second server, enable staging mode, import and validate the configuration, then promote the server by disabling staging mode and stopping the original server.
- B. Enable staging mode on the production server while the rules are tested.
- C. Replace Microsoft Entra Connect with Cloud Sync on the second server.
- D. Export the synchronization rules from the second server and import them into production without testing.
- E. Install pass-through authentication agents on the second server.

### Question 71

A user has an E3 license assigned directly and an E5 license assigned through a group. A feature that is included in E5 is unavailable, and the license details show the service plan as disabled.

What is the cause?

- A. A service plan disabled in one license overrides the same plan enabled in another license.
- B. The user's Usage location is set to the wrong country.
- C. The user is a member of too many licensing groups.
- D. The E5 group is nested inside another group.
- E. The tenant has no Microsoft Entra ID P1 licenses.

### Question 72

Contoso retires its AD FS farm. The domain `contoso.com` is currently configured as a federated domain, and users must sign in with their cloud passwords after the cutover.

What should you do to `contoso.com`?

- A. Convert the domain from federated to managed.
- B. Verify the domain again and set it as the primary domain.
- C. Enable seamless single sign-on and leave the domain federated.
- D. Delete the domain and recreate it as a custom domain.
- E. Add the domain to a new tenant.

### Question 73

Only users in the Sales and Marketing organizational units must synchronize to Microsoft Entra ID. Users in every other organizational unit must never appear in the cloud directory.

What should you configure?

- A. Organizational unit filtering in Microsoft Entra Connect or Cloud Sync.
- B. A dynamic group that contains only Sales and Marketing users.
- C. An attribute-based synchronization rule that sets accountEnabled to False.
- D. A Conditional Access policy scoped to Sales and Marketing.
- E. A bulk update that deletes the other users from Microsoft Entra ID.

### Question 74

Administrators must use phishing-resistant MFA to access the Azure portal. A password plus a Microsoft Authenticator push notification must not satisfy the requirement.

Which Conditional Access configuration should you use?

- A. A grant control that requires the built-in Phishing-resistant MFA authentication strength.
- B. A grant control that requires multifactor authentication.
- C. A grant control that requires a compliant device.
- D. A session control that sets sign-in frequency to every hour.
- E. A policy that blocks legacy authentication clients.

### Question 75

Security requires FIDO2 passkeys only from two approved hardware vendors. The solution must verify that a passkey is genuine and must block passkeys from every other authenticator model.

What should you configure?

- A. A passkey (FIDO2) profile with attestation enforced and an allow list of the approved authenticator AAGUIDs.
- B. A Conditional Access policy that requires a compliant device.
- C. An authentication strength that requires passwordless MFA.
- D. A named location that contains the office IP addresses.
- E. Windows Hello for Business certificate trust.

### Question 76

Which three statements about Windows Hello for Business trust models are true? (Choose three.)

- A. Key trust registers the public key of the Windows Hello for Business key pair with the device object in Microsoft Entra ID, so no client authentication certificate is required.
- B. Certificate trust requires a public key infrastructure such as Active Directory Certificate Services.
- C. Cloud Kerberos trust can provide passwordless access to on-premises resources without deploying AD CS.
- D. Key trust requires a client authentication certificate on every device.
- E. Certificate trust stores only the public key in Microsoft Entra ID.

### Question 77

An administrator must issue a Temporary Access Pass that remains valid for five days and can be used more than once.

What is the maximum lifetime that can be configured for the pass?

- A. 30 days.
- B. 7 days.
- C. 14 days.
- D. 24 hours.
- E. 90 days.

### Question 78

Users report repeated Microsoft Authenticator prompts that they did not initiate, and several users approved one of the prompts. You must reduce the risk without removing MFA.

What should you enable first?

- A. Number matching and additional context for Microsoft Authenticator notifications.
- B. SMS as the only MFA method.
- C. A Conditional Access policy that blocks all mobile devices.
- D. A shorter smart lockout duration.
- E. Passwordless phone sign-in for every user.

### Question 79

A Conditional Access policy must apply only to company-owned Windows devices that are not compliant. Personal devices must not be affected.

Which condition should you configure?

- A. A device filter rule of `device.deviceOwnership -eq "Company" -and device.isCompliant -eq False`, with the Windows platform selected.
- B. A device filter rule of `device.isCompliant -eq False` only.
- C. A device filter rule of `user.deviceOwnership -eq "Company"`.
- D. A grant control that requires a compliant device.
- E. A named location that contains the corporate network.

### Question 80

Which three statements about how Conditional Access policies are evaluated are true? (Choose three.)

- A. Every policy that applies to a user and sign-in must be satisfied.
- B. A block policy overrides grant controls from other policies.
- C. Report-only mode evaluates a policy and records the result without enforcing it.
- D. Excluding a user from one policy excludes the user from every policy.
- E. When two policies require different grant controls, the user can choose either one.

### Question 81

Users on the corporate network egress through the public IP range `203.0.113.0/24`. They must not receive MFA prompts when they access Microsoft 365 from that network. When they work from home, MFA must still be required.

What should you configure?

- A. A named location that contains `203.0.113.0/24` marked as trusted, excluded from the Conditional Access MFA policy.
- B. Per-user MFA with the corporate IP range added as a trusted IP.
- C. A Conditional Access policy that requires a compliant device for all users.
- D. Security defaults with MFA enforced for all users.
- E. A sign-in frequency session control of 30 days.

### Question 82

Finance users on unmanaged devices must sign in again after four hours. They must not remain signed in after they close the browser.

Which two session controls should you configure? (Choose two.)

- A. Sign-in frequency of four hours.
- B. Persistent browser session set to Never.
- C. Continuous access evaluation in strict enforcement mode.
- D. Sign-in frequency of 30 days.
- E. Application enforced restrictions.

### Question 83

Which three statements about the Microsoft Entra authentication methods policy are true? (Choose three.)

- A. A method can be enabled for specific groups and excluded from other groups.
- B. Microsoft Authenticator settings include number matching and additional context.
- C. Enabling Temporary Access Pass requires the method to be enabled in the policy.
- D. FIDO2 security keys work for all users as soon as the tenant is created.
- E. The policy applies only to users who hold privileged directory roles.

### Question 84

Users must reset their passwords by using Microsoft Authenticator or SMS. Security questions must not be available. Administrators must also be able to reset their own passwords.

What should you configure?

- A. Enable SSPR for all users, require two methods, enable Authenticator and SMS, and disable security questions.
- B. Enable SSPR for users only and require one method.
- C. Enable email one-time passcode as the only SSPR method.
- D. Enable per-user MFA and disable SSPR for administrators.
- E. Require users to call the helpdesk and verify their identity.

### Question 85

A hybrid tenant uses Microsoft Entra Connect. Users must reset their passwords in the cloud, and the new password must be written back to on-premises Active Directory.

Which two components are required? (Choose two.)

- A. Password writeback enabled in Microsoft Entra Connect or Cloud Sync.
- B. Microsoft Entra ID P1 or P2 licenses for the users who reset passwords.
- C. Active Directory Federation Services.
- D. Seamless single sign-on.
- E. A read-only domain controller in every site.

### Question 86

Users who are detected with leaked credentials must change their password before they can access Microsoft 365. Users at medium risk must not be blocked.

Which policy should you configure?

- A. A user risk policy set to High with the Require password change control.
- B. A sign-in risk policy set to High with the Block access control.
- C. The MFA registration policy for all users.
- D. Security defaults with MFA enforced.
- E. A Conditional Access policy that requires a compliant device.

### Question 87

Which three statements about certificate-based authentication (CBA) in Microsoft Entra ID are true? (Choose three.)

- A. CBA can satisfy MFA when the certificate is configured as a multifactor authentication method.
- B. You upload the root or intermediate CA certificates and enable CBA in the authentication methods policy.
- C. Certificates are mapped to users by using the certificate principal name (UPN) or the RFC822 name.
- D. CBA requires the domain to be federated.
- E. CBA works only on Windows devices.

### Question 88

Contoso wants internet-bound traffic from managed Windows devices inspected by Microsoft's Security Service Edge. On-premises applications must remain reachable through Private Access.

What should you configure?

- A. Install the Global Secure Access client and enable the Internet Access traffic forwarding profile.
- B. Deploy Azure Application Proxy connectors for every internet site.
- C. Configure a site-to-site VPN to Microsoft Azure.
- D. Create a Conditional Access policy that blocks unmanaged devices.
- E. Enable Security defaults in Microsoft Entra ID.

### Question 89

A GitHub Actions workflow must deploy resources to Azure without storing a client secret in the repository or in Azure Key Vault.

What should you configure on the app registration?

- A. A federated identity credential that trusts the GitHub OpenID Connect issuer and the repository's subject claim.
- B. A client secret with a 24-month expiration stored as a GitHub secret.
- C. A certificate uploaded to the app registration and exported to the runner.
- D. A system-assigned managed identity on the GitHub-hosted runner.
- E. A service principal password stored in a pipeline variable.

### Question 90

Which three statements about managed identities are true? (Choose three.)

- A. A system-assigned identity is deleted when the Azure resource is deleted.
- B. A user-assigned identity can be attached to multiple Azure resources.
- C. A managed identity can authenticate to resources that support Microsoft Entra authentication without storing credentials.
- D. A user-assigned identity is tied to the lifecycle of a single virtual machine.
- E. A managed identity can be used as a client secret for an app registration.

### Question 91

Users are created in a human resources system and must be provisioned automatically into a SaaS application. When a user leaves, the SaaS account must be disabled within an hour.

Which feature should you configure?

- A. Automatic provisioning with SCIM and attribute mappings for the enterprise application.
- B. SAML single sign-on for the enterprise application.
- C. An access review for the SaaS application.
- D. Microsoft Entra Application Proxy.
- E. Privileged Identity Management for the SaaS application.

### Question 92

A SAML-based enterprise application has just been configured. Users can authenticate, but the application returns an audience mismatch error after the SAML response is posted.

What should you check first?

- A. The Identifier (Entity ID) configured in the enterprise application matches the value the application expects.
- B. The Reply URL (Assertion Consumer Service URL) matches the application's callback path.
- C. The SAML signing certificate has not expired.
- D. The user has been assigned to the application.
- E. The application's implicit grant settings are enabled.

### Question 93

Users must be able to request access to third-party applications. A designated security team must review every request, and users must not be able to grant consent themselves.

What should you configure?

- A. The admin consent workflow with a reviewer group, and user consent disabled.
- B. A Conditional Access policy that blocks third-party applications.
- C. An access package with an approval policy.
- D. Privileged Identity Management for the Application Administrator role.
- E. A dynamic group that contains all users who request access.

### Question 94

An independent software vendor wants a verified publisher badge on its multitenant application and wants to reduce the warnings users see during consent.

What should the vendor do?

- A. Complete publisher verification in Partner Center with a Microsoft Partner Network account and associate the app registration with the verified publisher.
- B. Purchase Microsoft Entra ID P2 for every customer tenant.
- C. Add a DNS TXT record that contains the application ID.
- D. Publish the application in the Azure Marketplace.
- E. Convert the app registration to a managed identity.

### Question 95

Which three statements about user consent and app consent policies are true? (Choose three.)

- A. A user consent policy can allow consent only for apps from verified publishers.
- B. A user consent policy can block consent for applications that request high-risk permissions.
- C. The admin consent workflow lets users request consent from a designated reviewer.
- D. Disabling user consent prevents administrators from granting tenant-wide consent.
- E. User consent policies apply only to guest users.

### Question 96

You must publish an on-premises IIS application that uses Windows Integrated Authentication. No inbound ports can be opened, and users must sign in with Microsoft Entra ID.

What should you configure?

- A. Microsoft Entra Application Proxy with a connector and Kerberos constrained delegation to a service account.
- B. A site-to-site VPN between Azure and the on-premises network.
- C. An Azure Firewall DNAT rule for the IIS server.
- D. SAML single sign-on directly to the IIS application.
- E. Global Secure Access Private Access without a connector.

### Question 97

An app registration uses a client secret that expires in 30 days. You must eliminate secret-based credentials and avoid another outage.

What should you do?

- A. Replace the client secret with a certificate or a federated identity credential, and monitor credential expiration.
- B. Extend the client secret expiration to two years.
- C. Store the client secret in Azure Key Vault and keep using it.
- D. Assign a managed identity to the app registration.
- E. Rotate the client secret every month.

### Question 98

An application must accept users from any Microsoft Entra tenant but must reject personal Microsoft accounts.

Which supported account type should you select?

- A. Accounts in any organizational directory (Any Microsoft Entra directory - Multitenant).
- B. Accounts in any organizational directory and personal Microsoft accounts.
- C. Accounts in this organizational directory only (single tenant).
- D. Personal Microsoft accounts only.
- E. Azure AD B2C social accounts only.

### Question 99

New hires must be added to their department group and have their manager notified on their first day. The process must run automatically when a new employee record appears in Microsoft Entra ID.

What should you configure?

- A. A lifecycle workflow with a joiner trigger and the required built-in tasks.
- B. A dynamic group with a rule based on the department attribute.
- C. An access package with an automatic assignment policy.
- D. A PIM eligible assignment for the department group.
- E. A provisioning job for the department group.

### Question 100

Administrators must activate a privileged role for no more than four hours. Each activation must include a justification and approval by a manager.

What should you configure?

- A. The PIM role settings for the role, with a four-hour maximum activation duration, approval required, and justification required.
- B. A Conditional Access policy that requires MFA for administrators.
- C. An access review for users assigned to the role.
- D. An access package that expires after four hours.
- E. A dynamic group that contains administrators.

### Question 101

Activation of the Global Administrator role must require phishing-resistant MFA. Other Conditional Access policies that target administrators must not affect role activation.

What should you configure?

- A. A PIM role setting that requires a Conditional Access authentication context, plus a Conditional Access policy that targets that authentication context and requires a phishing-resistant authentication strength.
- B. A PIM role setting that requires MFA on activation.
- C. A Conditional Access policy that targets all administrators and requires MFA.
- D. An access review that requires reviewers to approve each activation.
- E. A PIM role setting that requires approval and justification.

### Question 102

The security team must be notified when a privileged role is assigned outside PIM and when a role has an excessive number of permanent administrators.

What should you configure?

- A. PIM alerts with notification recipients configured for the relevant alert rules.
- B. An access review for every privileged role.
- C. A sign-in log export to Azure Monitor.
- D. The Identity Secure Score.
- E. A Conditional Access policy that blocks privileged roles.

### Question 103

Contractors must request access to a group. Their manager must approve the request, access must expire after 90 days, and access must be reviewed every quarter.

What should you configure?

- A. An access package assignment policy with manager approval, a 90-day expiration, and a quarterly access review.
- B. A PIM eligible assignment for the group.
- C. A standalone access review for the group.
- D. A dynamic group based on the contractor attribute.
- E. A Conditional Access policy that requires MFA.

### Question 104

Which three statements about Microsoft Entra access reviews are true? (Choose three.)

- A. A review can be configured to recur on a schedule, such as monthly or quarterly.
- B. Auto-apply results can remove access when a reviewer denies it or does not respond, depending on the configured behavior.
- C. Reviewers can be the users themselves, their managers, or a specified group of reviewers.
- D. Every review decision must be approved by a Global Administrator.
- E. Access reviews can review only guest users.

### Question 105

Contoso must prevent a user from holding both the Vendor payments and Vendor approval access packages at the same time.

What should you configure?

- A. An incompatible access package relationship on one of the access packages.
- B. An access review that removes one of the packages.
- C. A Conditional Access policy that blocks the vendor application.
- D. A PIM eligible assignment for the vendor role.
- E. A dynamic group that contains both vendor teams.

### Question 106

Reviewers complete an access review and deny several users, but the users still have access the next day.

What setting should you enable?

- A. Auto apply results to the resource when the review completes.
- B. A shorter review duration.
- C. Just-in-time access for the resource.
- D. Approval required for access requests.
- E. A longer access package expiration.

### Question 107

Which three statements about Microsoft Entra audit logs and sign-in logs are true? (Choose three.)

- A. Interactive sign-in logs are retained for 30 days in Microsoft Entra ID.
- B. Diagnostic settings can stream logs to Azure Monitor Log Analytics, Azure Storage, or Azure Event Hubs.
- C. Audit logs record changes such as user creation and role assignment.
- D. Sign-in logs are retained for 10 years in Microsoft Entra ID without exporting them.
- E. Audit logs are available only with Microsoft Entra ID P2.

### Question 108

Users must accept a legal notice before they access a cloud application. The acceptance must be recorded for audit.

What should you configure?

- A. A terms of use document in Microsoft Entra ID and a Conditional Access policy that requires it.
- B. An acceptable use policy in Microsoft Intune.
- C. An access review for the application.
- D. An access package with an approval policy.
- E. A user consent policy for third-party applications.

### Question 109

A leaver workflow must call an external REST API to disable an on-premises account. The API is implemented as an Azure Logic App.

What should you configure?

- A. A custom task extension in the lifecycle workflow that calls the Logic App.
- B. An automatic provisioning job for the on-premises application.
- C. A webhook in an access package assignment policy.
- D. A PIM role activation notification.
- E. A Conditional Access policy for the Logic App.

### Question 110

The identity team manages entitlement management. The application team must be able to create and manage its own access packages in a dedicated catalog without receiving Global Administrator.

What should you do?

- A. Create a catalog for the application team and add the team as catalog owners.
- B. Assign the Application Administrator role to the application team.
- C. Make the application team PIM-eligible for Global Administrator.
- D. Create an access review for the catalog.
- E. Add the application team to a dynamic security group.

### Question 111

A cloud security group that grants access to the finance application was deleted 10 days ago. The group had 240 members and is referenced by a Conditional Access policy. You must bring back the same group object, including its object ID and members, so the existing references keep working.

What should you do?

- A. Restore the group from Deleted groups in the Microsoft Entra admin center within the 30-day soft-delete window.
- B. Recreate the group with the same display name and add the 240 members from an exported list.
- C. Restore the group from the Active Directory Recycle Bin on a domain controller and wait for synchronization.
- D. Open a support request to restore the group after it has been permanently deleted.
- E. Enable hard deletion protection on the group and wait for the next synchronization cycle.

### Question 112

A production web application stopped signing users in after an administrator deleted its app registration. The enterprise application no longer appears, and the application's client ID and permissions are gone. The deletion happened yesterday.

What should you do?

- A. Restore the deleted application registration from Deleted applications within the 30-day soft-delete window.
- B. Create a new app registration and update the client ID in the application's configuration.
- C. Restore the enterprise application; the app registration is recreated with the same client ID.
- D. Re-run the infrastructure deployment pipeline to recreate the registration.
- E. Restore the application from the Azure Key Vault soft-delete store.

### Question 113

Contoso must protect a small set of critical cloud groups and app registrations from being permanently deleted out of the recycle bin. Administrators must still be able to delete and restore those objects normally.

Which three statements about Hard Deletion Protection are true? (Choose three.)

- A. It blocks permanent deletion during the first seven days after an object is soft deleted.
- B. It can be enabled for cloud-only groups, applications, and service principals.
- C. Enabling it for an object is permanent and cannot be undone.
- D. It automatically restores an object when the protection window ends.
- E. It prevents the initial soft deletion of the object.

---

*End of examination. Score with the answer key, then record results in the score sheet.*

