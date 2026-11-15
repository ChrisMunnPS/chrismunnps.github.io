# SC-300 Practice Examination

**60 questions - 90 minutes - closed book**

This bank is drawn from the four Microsoft Learn SC-300 learning paths (18 modules, 194 units),
snapshot 2026-11-06. The wording and distractors follow the style of the live exam: most items are
scenarios that ask you to pick the configuration, role, or behavior that fits, and several ask you
to select two or three correct statements.

## Instructions

1. Time yourself: 90 minutes. The live exam runs roughly two minutes per question.
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

---

*End of examination. Score with the answer key, then record results in the score sheet.*

