// AZ-104 Exam Simulator - question bank
// Generated from sources/*.md by tools/build-questions.ps1. Do not edit by hand.
window.CASE_STUDIES = [
    {
        "id":  "contoso-retail",
        "title":  "Case Study 1 - Contoso Retail Cloud Migration",
        "html":  "\u003cp\u003eContoso Retail Group operates 320 stores and a US e-commerce site. It is migrating its Columbus, Ohio datacenter to Azure over nine months. The CIO has approved East US 2 as the production region and Central US as the disaster-recovery region.\u003c/p\u003e\u003ch4\u003eCurrent estate\u003c/h4\u003e\u003cul\u003e\u003cli\u003e150 Windows Server 2022 virtual machines running IIS, .NET line-of-business applications, print services, and management tools. Forty of these run SQL Server 2022 in four Always On availability groups.\u003c/li\u003e\u003cli\u003e40 Ubuntu 22.04 LTS virtual machines running integration services and overnight ETL jobs.\u003c/li\u003e\u003cli\u003e22 TB of SMB file shares on a legacy NAS, including 4 TB of scanned invoices that must be retained for seven years.\u003c/li\u003e\u003cli\u003eOne Active Directory forest, contoso.local, synchronized to Microsoft Entra ID with Microsoft Entra Connect. Microsoft Entra ID P1 is licensed for all 4,800 staff.\u003c/li\u003e\u003cli\u003eA 1 Gbps internet circuit and two Cisco firewalls with separate public IP addresses. The MPLS contract expires in 14 months, so a site-to-site VPN must carry traffic until ExpressRoute is provisioned.\u003c/li\u003e\u003c/ul\u003e\u003ch4\u003eSubscriptions and governance\u003c/h4\u003e\u003cul\u003e\u003cli\u003eThree subscriptions: Contoso-Production, Contoso-Shared (hub network, DNS, and Log Analytics), and Contoso-NonProd.\u003c/li\u003e\u003cli\u003eManagement groups: Contoso-Root, with Platform, Landing Zones, and Sandbox beneath it.\u003c/li\u003e\u003cli\u003eFinance requires production resources in East US 2 or Central US only, tagged with CostCenter and DataClass, and restricted to an approved VM SKU list.\u003c/li\u003e\u003cli\u003ePCI DSS applies to the payments workload. SOX requires seven years of retained financial records and audit data.\u003c/li\u003e\u003c/ul\u003e\u003ch4\u003eRequirements\u003c/h4\u003e\u003cul\u003e\u003cli\u003e99.99% availability for the storefront and order APIs during the November peak, when traffic reaches three times the annual average.\u003c/li\u003e\u003cli\u003eFile shares must survive the loss of one availability zone and stay mounted by branch servers over SMB.\u003c/li\u003e\u003cli\u003eSQL backups must be restorable if East US 2 becomes unavailable.\u003c/li\u003e\u003cli\u003eA central cloud team of six administrators must delegate access to 14 application teams without granting subscription-wide Owner.\u003c/li\u003e\u003cli\u003eProduction stays online, but non-production must shut down outside business hours to control cost.\u003c/li\u003e\u003c/ul\u003e"
    },
    {
        "id":  "fabrikam-global",
        "title":  "Case Study 2 - Fabrikam Global Expansion",
        "html":  "\u003cp\u003eFabrikam is a direct-to-consumer retailer with headquarters in London. Its storefront was rebuilt as a Windows Server 2022 ASP.NET Core application running on Virtual Machine Scale Sets, with a separate API tier and an Azure SQL Database Business Critical catalogue. The company is expanding into North America and must keep selling while any single Azure region is unavailable.\u003c/p\u003e\u003ch4\u003eRegional footprint\u003c/h4\u003e\u003cul\u003e\u003cli\u003eThree production regions: UK South (primary), West Europe (Amsterdam), and East US (Virginia).\u003c/li\u003e\u003cli\u003eEach region runs its own web scale set, API scale set, internal load balancer, and Application Gateway. The catalogue uses Azure SQL Database with a failover group between UK South and West Europe; the order system uses two SQL Server 2022 virtual machines per region in an Always On availability group.\u003c/li\u003e\u003cli\u003eTraffic split today is 60% Europe, 25% North America, and 15% Asia Pacific, with 40,000 concurrent sessions and a threefold peak during the November promotion.\u003c/li\u003e\u003cli\u003eThe DNS zone fabrikam.com is hosted in Azure DNS. A wildcard TLS certificate for *.fabrikam.com is stored in Azure Key Vault.\u003c/li\u003e\u003cli\u003eStatic assets total 18 TB and are read far more often than they change. Order documents total 2 TB and must never be lost.\u003c/li\u003e\u003c/ul\u003e\u003ch4\u003eService targets\u003c/h4\u003e\u003cul\u003e\u003cli\u003eRecovery time objective of 15 minutes and recovery point objective of 5 minutes for the storefront.\u003c/li\u003e\u003cli\u003eRegional failover order is UK South, then West Europe, then East US, unless latency routing gives a materially faster response.\u003c/li\u003e\u003cli\u003eWeb and API tiers must survive the loss of one availability zone in any region.\u003c/li\u003e\u003cli\u003ePayment pages require PCI DSS controls, including HTTP inspection of SQL injection and cross-site scripting attempts at every ingress point.\u003c/li\u003e\u003cli\u003eTelemetry from European resources must remain in the European Union for GDPR; North American telemetry must remain in the United States.\u003c/li\u003e\u003c/ul\u003e\u003ch4\u003eOperations and budget\u003c/h4\u003e\u003cul\u003e\u003cli\u003eOne operations team in London monitors all three regions around the clock.\u003c/li\u003e\u003cli\u003eThe platform budget is EUR 42,000 per month. Baseline capacity is covered by three-year reservations, and burst capacity is paid as you go.\u003c/li\u003e\u003cli\u003eThe web tier is stateless and is deployed from a custom image by the pipeline; the API tier is also stateless. Only SQL and the order document store hold durable state.\u003c/li\u003e\u003c/ul\u003e"
    }
];

window.QUESTIONS = [
    {
        "id":  1,
        "domain":  "identity",
        "topic":  "Tenant and subscription association",
        "stem":  "Fabrikam has three Azure subscriptions for development, test, and production. The identity team wants every subscription to use the same users, groups, and role assignments, and it will not create additional directories. Administrators must manage all three subscriptions with the same accounts.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Associate all three subscriptions with the existing Microsoft Entra tenant."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a separate Microsoft Entra tenant for each subscription and enable B2B collaboration."
                        },
                        {
                            "letter":  "C",
                            "text":  "Deploy domain controllers in each subscription and synchronize them to the tenant."
                        },
                        {
                            "letter":  "D",
                            "text":  "Convert each subscription into a management group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A Microsoft Entra tenant is the security boundary that holds users, groups, and applications, and a subscription is associated with exactly one tenant at a time. One tenant can be associated with multiple subscriptions, which is how a single set of identities and role assignments can manage resources across development, test, and production. No second directory is required.\n\n- **B** is wrong. Separate tenants create separate identity boundaries, so the same accounts would not exist in each subscription without guest invitations.\n- **C** is wrong. Domain controllers are not required for subscription access and do not change which tenant a subscription trusts.\n- **D** is wrong. Management groups organize subscriptions for inherited policy and access, but they do not change the tenant each subscription is associated with.\n\nExam tip: the tenant holds identities; the subscription is the unit of billing, scale, and access boundary.",
        "source":  "Understand Microsoft Entra ID — Examine Microsoft Entra ID"
    },
    {
        "id":  2,
        "domain":  "identity",
        "topic":  "P1 versus P2 capabilities",
        "stem":  "Adventure Works standardized on Microsoft Entra ID P1. Security now requires automatic blocking of high-risk sign-ins through risk policies, and just-in-time activation of the User Administrator role with approval. You will license only the 40 administrators who perform these tasks.\n\nWhich two actions should you take?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign Microsoft Entra ID P2 licenses to the 40 administrators to enable identity protection risk policies."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign Microsoft Entra ID P2 licenses to the 40 administrators to enable Privileged Identity Management."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable self-service password reset for the 40 administrators, which requires P2."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create dynamic security groups for the 40 administrators, which requires P2."
                        },
                        {
                            "letter":  "E",
                            "text":  "Configure named locations in Conditional Access, which requires P2."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Microsoft Entra ID P2 includes everything in P1 plus two capabilities that matter here: identity protection, which provides user risk and sign-in risk policies, and Privileged Identity Management, which provides eligible, time-bound, approval-based role activation. Both requirements therefore need P2 licensing for the administrators who use them. Sign-in risk policies and role activation approvals are P2-only features, so every administrator who relies on them needs a P2 license.\n\n- **C** is wrong. Self-service password reset, including writeback, is a P1 feature and is also available with Microsoft 365 business plans.\n- **D** is wrong. Dynamic user membership requires P1, not P2.\n- **E** is wrong. Named locations and Conditional Access policies require P1.\n\nExam tip: remember P2 as P1 plus identity protection and Privileged Identity Management.",
        "source":  "Understand Microsoft Entra ID — Compare Microsoft Entra ID P1 and P2 plans"
    },
    {
        "id":  3,
        "domain":  "identity",
        "topic":  "Entra Domain Services for legacy apps",
        "stem":  "Northwind runs a legacy inventory application on Azure virtual machines. The application uses Kerberos and LDAP, requires domain join, and depends on Group Policy. The company has no on-premises Active Directory and refuses to deploy or patch domain controllers.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable Microsoft Entra Domain Services and join the virtual machines to the managed domain."
                        },
                        {
                            "letter":  "B",
                            "text":  "Deploy two domain controllers on Azure virtual machines and create a new forest."
                        },
                        {
                            "letter":  "C",
                            "text":  "Join the virtual machines to Microsoft Entra ID and enable Windows Hello for Business."
                        },
                        {
                            "letter":  "D",
                            "text":  "Install Microsoft Entra Connect and synchronize to a new on-premises domain."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Microsoft Entra Domain Services provides managed domain services such as domain join, Group Policy, and Kerberos and LDAP authentication, without requiring you to deploy, patch, or monitor domain controllers. It is available with Microsoft Entra ID P1 or P2 and is compatible with applications migrated from on-premises AD DS.\n\n- **B** is wrong. Deploying domain controllers gives you the required protocols but reintroduces the patching and management the company explicitly refuses.\n- **C** is wrong. Microsoft Entra join provides cloud sign-in and single sign-on but does not supply Kerberos, LDAP, or Group Policy for legacy applications.\n- **D** is wrong. There is no on-premises domain to synchronize, and Entra Connect does not deliver domain services.\n\nExam tip: managed LDAP, Kerberos, and Group Policy without domain controllers means Microsoft Entra Domain Services.",
        "source":  "Understand Microsoft Entra ID — Examine Microsoft Entra Domain Services"
    },
    {
        "id":  4,
        "domain":  "identity",
        "topic":  "Bulk user creation",
        "stem":  "Litware hires 280 seasonal workers each November. Human Resources provides a CSV file containing names, user principal names, departments, and usage locations. Every worker needs an account with a temporary password and a Microsoft 365 E3 license. Onboarding must happen in one operation with minimal manual work.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Use bulk create in the Microsoft Entra admin center to upload the CSV, then assign the license to a group that contains the new users."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create each user in the portal and assign the license on the user\u0027s Licenses page."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a dynamic group and let group membership create the user accounts."
                        },
                        {
                            "letter":  "D",
                            "text":  "Run New-MgUser for each row without using the CSV file."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The Microsoft Entra admin center includes bulk operations that accept a CSV template for creating users, which avoids 280 individual portal operations and the typing errors that come with them. Combining that import with group-based licensing means the new accounts inherit the Microsoft 365 E3 license through membership, and future joiners and leavers are handled by membership changes. The CSV template also lets you set each user\u0027s usage location, which prevents license assignment failures later.\n\n- **B** is wrong. Creating hundreds of accounts one at a time is slow, error-prone, and the opposite of least administrative effort.\n- **C** is wrong. Dynamic groups evaluate attributes of existing objects; they do not create user accounts.\n- **D** is wrong. A per-row script still requires custom code and does not use the prepared CSV, so it adds effort rather than removing it.\n\nExam tip: CSV-driven onboarding starts with bulk operations, then group-based licensing.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage users"
    },
    {
        "id":  5,
        "domain":  "identity",
        "topic":  "Deleted user restore",
        "stem":  "An administrator accidentally deleted the account of Priya, a finance analyst, 12 days ago. Priya returns next week and must regain her original account, group memberships, and mailbox permissions. The account must be recovered before the retention window closes.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Open Users, then Deleted users, select the account, and choose Restore user."
                        },
                        {
                            "letter":  "B",
                            "text":  "Recreate the account with the same user principal name and add the group memberships manually."
                        },
                        {
                            "letter":  "C",
                            "text":  "Restore the account from the Azure Backup vault for the subscription."
                        },
                        {
                            "letter":  "D",
                            "text":  "Run Remove-MgUser and then New-MgUser with the same properties."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Deleted user accounts remain in a suspended state for 30 days, and during that window they can be restored with all their properties intact. Restoring from Deleted users reconnects the original object identifier, so group memberships, mailbox links, and permissions that reference the object continue to work. After the 30 days, permanent deletion starts automatically and the account cannot be restored.\n\n- **B** is wrong. A recreated account has a new object identifier, so assignments tied to the old identifier are lost and must be rebuilt.\n- **C** is wrong. Azure Backup protects workloads and data, not directory objects.\n- **D** is wrong. Removing and recreating the account produces the same loss of object identity and adds unnecessary steps.\n\nExam tip: deleted users are restorable for 30 days, then permanently removed.",
        "source":  "Create, configure, and manage identities — Exercise - restore or remove deleted users"
    },
    {
        "id":  6,
        "domain":  "identity",
        "topic":  "Custom domain and UPN",
        "stem":  "Contoso wants employees to sign in with the address jane@contoso.com rather than the default tenant suffix. The contoso.com name is registered with a public registrar, and no other Microsoft 365 tenant is using it. Existing cloud-only accounts must keep their mailboxes and group memberships.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Add and verify contoso.com as a custom domain in the tenant, then change the user principal name suffix on the accounts."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create an Azure DNS zone for contoso.com and point the registrar at Azure DNS."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a second tenant with contoso.com and migrate the accounts into it."
                        },
                        {
                            "letter":  "D",
                            "text":  "Rename the default onmicrosoft.com domain to contoso.com."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Every tenant receives a default domain built on the onmicrosoft.com suffix, and you can add custom domains that the organization owns. Verification uses a DNS record at the registrar, after which the domain becomes available as a user principal name suffix. Changing the suffix keeps the existing user objects, so mailboxes, group memberships, and role assignments are preserved.\n\n- **B** is wrong. Hosting the zone in Azure DNS does not prove ownership to Microsoft Entra ID or make the domain available for sign-in.\n- **C** is wrong. A new tenant means new identity objects and a migration that breaks existing assignments.\n- **D** is wrong. The default onmicrosoft.com domain cannot be renamed or removed while it is in use.\n\nExam tip: verify the custom domain with DNS first, then change UPN suffixes.",
        "source":  "Understand Microsoft Entra ID — Examine Microsoft Entra ID"
    },
    {
        "id":  7,
        "domain":  "identity",
        "topic":  "Custom security attributes",
        "stem":  "Contoso Human Resources wants to store an hourly salary band on each employee object. Only members of a designated administrator group may read the value, and the value must be usable in attribute-based access conditions for a storage account. The value must not appear in SAML or JWT tokens.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A custom security attribute set containing the attribute, assigned to users, with read access limited to the administrator group."
                        },
                        {
                            "letter":  "B",
                            "text":  "An extensionAttribute on the user object populated by Microsoft Entra Connect."
                        },
                        {
                            "letter":  "C",
                            "text":  "A directory schema extension on the application registration with a claim mapping."
                        },
                        {
                            "letter":  "D",
                            "text":  "A tag on each user object scoped to the resource group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Custom security attributes are business-specific key-value pairs that you define for the tenant and assign to directory objects such as users and service principals. They support string, integer, and Boolean types, can be single or multivalued, and can be governed through attribute sets so that only specific principals can read or administer them. They are also designed for fine-grained, attribute-based access control, and they are not emitted in SAML or JWT claims.\n\n- **B** is wrong. Extension attributes are broadly readable by directory roles and provide no fine-grained read restriction.\n- **C** is wrong. Schema extensions support application scenarios and are surfaced in tokens, which the requirement forbids.\n- **D** is wrong. Tags are metadata on Azure resources, not on directory objects.\n\nExam tip: custom security attributes support attribute-based access control with granular read permissions.",
        "source":  "Create, configure, and manage identities — Create custom security attributes"
    },
    {
        "id":  8,
        "domain":  "identity",
        "topic":  "Group type selection",
        "stem":  "The marketing team needs a shared mailbox, calendar, and SharePoint site, and it must be able to include external partners. The engineering team needs a group that will only be used to grant Contributor access to a resource group, and its members include users, devices, and a service principal.\n\nWhich group types should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Microsoft 365 group for marketing and a security group for engineering."
                        },
                        {
                            "letter":  "B",
                            "text":  "A security group for marketing and a Microsoft 365 group for engineering."
                        },
                        {
                            "letter":  "C",
                            "text":  "A distribution group for marketing and a mail-enabled security group for engineering."
                        },
                        {
                            "letter":  "D",
                            "text":  "A Microsoft 365 group for both teams."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Microsoft Entra ID supports two group types. Microsoft 365 groups provide collaboration resources such as a shared mailbox, calendar, SharePoint site, and Teams, and they support external access. Security groups are used to manage access to resources and can contain users, devices, and service principals, which is exactly what the engineering assignment needs.\n\n- **B** is wrong. A security group does not provision a mailbox, calendar, or SharePoint site, and a Microsoft 365 group is the wrong vehicle for resource access assignments.\n- **C** is wrong. Distribution groups are for email distribution, and mail-enabled security groups are managed in Exchange, not the right fit for either requirement.\n- **D** is wrong. Microsoft 365 groups cannot contain devices or service principals, so the engineering requirement fails.\n\nExam tip: Microsoft 365 groups are for collaboration; security groups are for access.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage groups"
    },
    {
        "id":  9,
        "domain":  "identity",
        "topic":  "Dynamic user membership",
        "stem":  "Proseware wants its Sales EMEA security group to contain every user whose department is Sales and whose country is United Kingdom. Membership must update automatically when Human Resources changes those attributes, and departing employees must drop out without manual review. The tenant has Microsoft Entra ID P1 licenses.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a security group with Dynamic User membership and a rule that evaluates department and country."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create an assigned security group and run a scheduled PowerShell script to reconcile membership."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a Microsoft 365 group with Dynamic Device membership and a rule for the two attributes."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create an administrative unit and add the users to it manually each month."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Dynamic user membership evaluates a rule against user attributes and automatically adds or removes members. When an attribute changes, all dynamic rules in the tenant are reevaluated, so a user who transfers out of Sales or changes country leaves the group without administrative action. Dynamic membership requires Microsoft Entra ID P1, which the tenant already has. A rule can combine several user properties, and membership is recalculated automatically after an attribute change propagates.\n\n- **B** is wrong. A scheduled script only approximates automation, requires maintenance, and leaves the group stale between runs.\n- **C** is wrong. Dynamic Device rules evaluate device attributes, and Microsoft 365 groups do not support dynamic device membership.\n- **D** is wrong. Administrative units scope administrative roles; they do not manage group membership.\n\nExam tip: dynamic user rules reevaluate whenever a user attribute changes.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage groups"
    },
    {
        "id":  10,
        "domain":  "identity",
        "topic":  "Dynamic membership by group type",
        "stem":  "You are designing groups for Fabrikam, which has Microsoft Entra ID P1. One security group must automatically track users by department, a second security group must automatically track devices by attribute, and a Microsoft 365 group must support a project team. Members must not be maintained manually.\n\nWhich two actions should you take?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Configure Dynamic User membership on the first security group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Configure Dynamic Device membership on the second security group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Configure Dynamic Device membership on the Microsoft 365 group."
                        },
                        {
                            "letter":  "D",
                            "text":  "Configure Assigned membership on the first security group and review it quarterly."
                        },
                        {
                            "letter":  "E",
                            "text":  "Convert the Microsoft 365 group into a security group so it can host devices."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Membership type is independent of group type, with one important restriction: dynamic device membership is available only for security groups. Dynamic user membership works for both security groups and Microsoft 365 groups. Both dynamic variants require Microsoft Entra ID P1, and rules are reevaluated whenever the relevant user or device attributes change. Group type cannot be changed after creation, so a group created as the wrong type has to be recreated.\n\n- **C** is wrong. Microsoft 365 groups support dynamic users but not dynamic devices.\n- **D** is wrong. Assigned membership is manual by definition and cannot satisfy automatic tracking.\n- **E** is wrong. A group\u0027s type cannot be changed after creation, and Microsoft 365 groups never support dynamic devices.\n\nExam tip: dynamic devices are security-group only; dynamic users work in both group types.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage groups"
    },
    {
        "id":  11,
        "domain":  "identity",
        "topic":  "Role-assignable groups",
        "stem":  "Woodgrove has 25 helpdesk staff who all need the User Administrator role in Microsoft Entra ID. You must grant the role by assigning it to one group rather than to each person. The group must use assigned membership and must not permit nesting.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a security group with Microsoft Entra roles can be assigned to the group set to Yes, add the staff, and assign the role to the group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a Microsoft 365 group with dynamic user membership and assign the role to the group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a mail-enabled security group in Exchange Online and assign the role to the group."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create an administrative unit containing the 25 users and assign the role to the unit."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Only groups created as role-assignable can hold Microsoft Entra directory roles. Such groups must use assigned membership, cannot be nested, and can be created only by a Global Administrator or Privileged Role Administrator. Assigning User Administrator to the group once grants the role to all current and future members, which is far less effort than 25 individual assignments. Group-based role assignment also keeps access accurate when staff change roles, because permissions follow membership.\n\n- **B** is wrong. Role-assignable groups cannot use dynamic membership, and Microsoft 365 groups cannot be made role-assignable.\n- **C** is wrong. Mail-enabled security groups from Exchange are not role-assignable directory groups.\n- **D** is wrong. An administrative unit is a scope for an assignment, not a principal that can hold a role for its members.\n\nExam tip: role-assignable groups require assigned membership and cannot be nested.",
        "source":  "AZ-104 objective: Manage identities and governance — Configure role-assignable groups"
    },
    {
        "id":  12,
        "domain":  "identity",
        "topic":  "Group-based license assignment",
        "stem":  "Contoso must license 800 users with Microsoft 365 E3. Licenses must be applied and removed automatically as users join and leave departments, and the solution must not depend on custom scripts or scheduled jobs. The tenant has Microsoft Entra ID P1.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign the product license to a department security group in the Microsoft 365 admin center."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign licenses to each user individually in the Microsoft Entra admin center."
                        },
                        {
                            "letter":  "C",
                            "text":  "Run Set-MgUserLicense nightly for every user in the tenant."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a custom role that grants permission to assign licenses."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Group-based licensing assigns one or more product licenses to a group, and Microsoft Entra ID then applies them to all members and removes them when members leave. Membership changes are typically reflected within minutes, which eliminates per-user scripting. Group-based licensing requires Microsoft Entra ID P1 or Office 365 E3 or higher, and assignment is performed in the Microsoft 365 admin center.\n\n- **B** is wrong. Per-user assignment is manual, does not follow department changes, and does not scale to 800 users.\n- **C** is wrong. A nightly script is exactly the custom automation the requirement rules out, and it lags membership changes.\n- **D** is wrong. A custom role governs who may perform licensing, not how licenses are assigned.\n\nExam tip: group-based licensing is configured in the Microsoft 365 admin center, not the Entra admin center.",
        "source":  "Create, configure, and manage identities — Manage licenses"
    },
    {
        "id":  13,
        "domain":  "identity",
        "topic":  "Insufficient license count error",
        "stem":  "A group has 520 members and is assigned a product for which the tenant owns 500 licenses. Several members also hold the same product through direct assignments. The group\u0027s Licenses page reports users in an error state, and the audit log shows CountViolation for those users.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Purchase additional licenses or remove unused assignments, then select Reprocess on the group\u0027s Licenses page."
                        },
                        {
                            "letter":  "B",
                            "text":  "Disable a service plan in the group\u0027s license assignment."
                        },
                        {
                            "letter":  "C",
                            "text":  "Remove the affected users from the group and assign licenses directly to them."
                        },
                        {
                            "letter":  "D",
                            "text":  "Change the usage location for every user in the group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "CountViolation means the tenant does not have enough available licenses for the product specified in the group. Because group-based licensing runs in the background, the failure is recorded on each user instead of being reported immediately. Freeing licenses or buying more, then reprocessing the group, lets Microsoft Entra ID retry the assignments without losing the original intent to license those users. Reprocessing is also needed after related problems such as duplicate proxy addresses are fixed, because the retry does not happen on its own.\n\n- **B** is wrong. Disabling a service plan addresses conflicting or unwanted services, not a shortage of licenses.\n- **C** is wrong. Direct assignment still consumes a license the tenant does not have, and it increases administrative effort.\n- **D** is wrong. Usage location errors produce ProhibitedInUsageLocationViolation, a different failure.\n\nExam tip: CountViolation equals not enough licenses; fix the count and reprocess.",
        "source":  "Create, configure, and manage identities — Exercise - change group license assignments"
    },
    {
        "id":  14,
        "domain":  "identity",
        "topic":  "Conflicting service plans",
        "stem":  "Users hold Office 365 E1 assigned directly with all service plans enabled. They are then added to a group that is assigned Office 365 E3. Group license processing fails and reports conflicting service plans, specifically SharePoint Online Plan 2 versus Plan 1 and Exchange Online Plan 2 versus Plan 1.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Disable the conflicting plans in either the direct E1 assignment or the group\u0027s E3 assignment."
                        },
                        {
                            "letter":  "B",
                            "text":  "Purchase additional E3 licenses so every user has both products."
                        },
                        {
                            "letter":  "C",
                            "text":  "Remove the users from the licensed group and leave them on E1."
                        },
                        {
                            "letter":  "D",
                            "text":  "Set the license assignment\u0027s enforcement mode to DoNotEnforce."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Some service plans cannot coexist for the same user, so the group assignment fails with MutuallyExclusiveViolation. Microsoft Entra ID never resolves the conflict automatically; the administrator must decide which plans are required. The fix is to disable the overlapping plans in one of the two assignments, or to remove the redundant E1 license from the user after confirming E3 covers the workload. Whichever route you choose, verify that every required service remains enabled after the change.\n\n- **B** is wrong. More licenses do not remove the service-plan overlap, and the error is not a count problem.\n- **C** is wrong. Leaving users on E1 abandons the intended E3 license and does not meet the business requirement.\n- **D** is wrong. Enforcement mode is an Azure Policy assignment property and has no effect on license processing.\n\nExam tip: MutuallyExclusiveViolation means overlapping service plans; disable one set.",
        "source":  "Create, configure, and manage identities — Manage licenses"
    },
    {
        "id":  15,
        "domain":  "identity",
        "topic":  "Add-on license prerequisites",
        "stem":  "You assign the Microsoft Workplace Analytics add-on to a licensing group. The portal rejects the operation and states that the service requires Exchange Online Plan 2 to be enabled as well. The group does not currently carry any product containing that plan.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign a product that includes Exchange Online Plan 2 to the same group as the add-on."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign the add-on directly to each user instead of to the group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable only the add-on\u0027s service plan in the existing group assignment."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a second group that contains only the add-on product."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Add-on products require a prerequisite service plan to be enabled for the user or group before the add-on can be assigned. With group-based licensing, Microsoft Entra ID requires the prerequisite and the add-on to be present in the same group so that every member receives a working product. Adding a product that contains Exchange Online Plan 2 satisfies that rule, and users who already have the prerequisite elsewhere still consume only one license for it. The same rule applies to every add-on, so plan the prerequisite product into the group from the start.\n\n- **B** is wrong. Direct assignment does not create the missing prerequisite and multiplies administrative effort.\n- **C** is wrong. The add-on contains a single service plan, so enabling it does not supply Exchange Online.\n- **D** is wrong. A group containing only the add-on fails the same prerequisite check.\n\nExam tip: prerequisites and add-ons must be assigned to the same group.",
        "source":  "Create, configure, and manage identities — Manage licenses"
    },
    {
        "id":  16,
        "domain":  "identity",
        "topic":  "Bulk guest invitation",
        "stem":  "Tailspin onboarded 150 partner consultants. Human Resources supplies a CSV file with each consultant\u0027s email address and display name. Each consultant must sign in with their own organization\u0027s credentials and appear in the directory as an external user. The accounts must be created today in one operation.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Use bulk invite in the Microsoft Entra admin center and upload the CSV file."
                        },
                        {
                            "letter":  "B",
                            "text":  "Invite each consultant individually from the Users page."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create cloud user accounts that use each partner email address as the user principal name."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable self-service sign-up for the partner domain."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Bulk invite accepts a CSV file of email addresses and optional display names, and it sends invitations that create guest accounts in the directory. Guests redeem the invitation with their own credentials, which keeps authentication with the partner organization and avoids storing or managing their passwords. Bulk operations complete the 150 invitations in one action. The guest object is created when the invitation is sent, and the partner activates it by redeeming the emailed link.\n\n- **B** is wrong. Individual invitations repeat the same manual steps 150 times.\n- **C** is wrong. Creating member accounts with partner addresses gives the guests Contoso credentials, which is not external collaboration.\n- **D** is wrong. Self-service sign-up is intended for customer-facing applications, not for governing partner access to Teams and SharePoint.\n\nExam tip: the bulk invite template needs only email address and optional display name.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage users"
    },
    {
        "id":  17,
        "domain":  "identity",
        "topic":  "Guest directory visibility",
        "stem":  "External partners can access shared Teams channels and a SharePoint site, but they must not be able to enumerate the directory, list all users and groups, or read full profile details of employees. Partner access must continue to work for the shared resources.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "External collaboration settings that limit guest user access to directory object properties and membership."
                        },
                        {
                            "letter":  "B",
                            "text":  "Remove the Guest Inviter role from all administrators."
                        },
                        {
                            "letter":  "C",
                            "text":  "Convert the partner accounts from guest to member."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable self-service password reset for guest accounts."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Guest user permissions in external collaboration settings control how much of the directory a guest can read, including whether guests can enumerate users, groups, and their properties. Restricting those permissions preserves access to resources that were explicitly shared, such as Teams channels and SharePoint sites, while preventing broad directory discovery. Least privilege for external users means limiting directory visibility as well as resource access. These settings apply tenant-wide, so confirm that the restriction does not break legitimate collaboration such as shared channels.\n\n- **B** is wrong. The Guest Inviter role controls who may send invitations, not what an existing guest can see.\n- **C** is wrong. Converting guests to members grants broader access and defeats the purpose of external collaboration.\n- **D** is wrong. Password reset settings do not change what a guest can read in the directory.\n\nExam tip: guest visibility is governed by external collaboration settings, not by resource permissions.",
        "source":  "Create, configure, and manage identities — Create, configure, and manage users"
    },
    {
        "id":  18,
        "domain":  "identity",
        "topic":  "SSPR pilot rollout",
        "stem":  "Twenty marketing employees will pilot self-service password reset for two weeks. Only those 20 users may reset their passwords during the pilot; everyone else in the tenant must remain unable to use the feature. The pilot users belong to an existing security group.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Set Self-service password reset enabled to Selected and specify the pilot security group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Set Self-service password reset enabled to All and exclude other users with Conditional Access."
                        },
                        {
                            "letter":  "C",
                            "text":  "Leave the feature set to None and have the helpdesk reset passwords during the pilot."
                        },
                        {
                            "letter":  "D",
                            "text":  "Set the feature to All and add non-pilot users to a blocked group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The Self-service password reset enabled property has three values: None, Selected, and All. Selected limits the feature to members of one security group, which is the documented way to run a controlled pilot before broad rollout. When the pilot succeeds, the setting is changed to All so that everyone can use the feature. Users outside the selected group see no self-service reset option and continue to contact the helpdesk.\n\n- **B** is wrong. All enables every user immediately, and Conditional Access cannot remove a feature that is switched on tenant-wide.\n- **C** is wrong. None disables the feature, so the pilot cannot run at all.\n- **D** is wrong. All still enables self-service reset for every user, including those placed in a blocked group.\n\nExam tip: None, Selected, All; Selected is for pilots and staged rollout.",
        "source":  "Allow users to reset their password with Microsoft Entra self-service password reset — Implement Microsoft Entra self-service password reset"
    },
    {
        "id":  19,
        "domain":  "identity",
        "topic":  "SSPR authentication methods",
        "stem":  "Many warehouse employees do not carry smartphones, and the service desk wants to reduce password calls without introducing methods that are easy to spoof. The chosen methods must work for those employees and must be usable together for a two-method reset policy.\n\nWhich two methods should you enable?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Email"
                        },
                        {
                            "letter":  "B",
                            "text":  "Office phone"
                        },
                        {
                            "letter":  "C",
                            "text":  "Security questions"
                        },
                        {
                            "letter":  "D",
                            "text":  "Mobile phone"
                        },
                        {
                            "letter":  "E",
                            "text":  "Mobile app notification"
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Self-service password reset supports six methods, and Microsoft recommends enabling at least two so users can choose what they can access. For users without smartphones, email and office phone are the practical options: email sends a code to an external address, and office phone places an automated call that the user confirms. Both can be combined to satisfy a two-method policy.\n\n- **C** is wrong. Security questions are the least recommended method because the answers may be known to colleagues, so they are a poor choice for spoof-resistant resets.\n- **D** is wrong. Mobile phone is not recommended because SMS messages can be fraudulently intercepted or spoofed.\n- **E** is wrong. Mobile app notification requires a smartphone, which these employees do not carry.\n\nExam tip: enable two or more methods, and prefer app-based methods where devices allow.",
        "source":  "Allow users to reset their password with Microsoft Entra self-service password reset — What is self-service password reset in Microsoft Entra ID?"
    },
    {
        "id":  20,
        "domain":  "identity",
        "topic":  "SSPR administrator policy",
        "stem":  "A helpdesk administrator is configuring self-service password reset. She selected security questions as a method, but the option is unavailable for her own account. She also finds that she cannot complete a reset after verifying a single method, even though other users in the tenant reset with one.\n\nWhat is the cause?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Administrative accounts always require two authentication methods and cannot use security questions."
                        },
                        {
                            "letter":  "B",
                            "text":  "The administrator needs the Authentication Policy Administrator role before she can reset her own password."
                        },
                        {
                            "letter":  "C",
                            "text":  "Security questions must be enabled in the tenant\u0027s authentication methods policy."
                        },
                        {
                            "letter":  "D",
                            "text":  "The administrator\u0027s account is missing a Microsoft Entra ID P2 license."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Microsoft Entra ID applies a strong, two-method authentication policy to every account holding an administrator role, regardless of how self-service password reset is configured for other users. The security-question method is also excluded for administrator accounts because the answers are often discoverable. The behavior the administrator sees is deliberate policy, not a configuration defect.\n\n- **B** is wrong. Authentication Policy Administrator is required to configure SSPR, but holding it does not change the reset policy applied to administrators.\n- **C** is wrong. Enabling security questions for the tenant does not make the method available to administrator accounts.\n- **D** is wrong. Licensing enables the feature; it does not alter the stronger administrator policy.\n\nExam tip: administrator resets always need two methods and never use security questions.",
        "source":  "Allow users to reset their password with Microsoft Entra self-service password reset — What is self-service password reset in Microsoft Entra ID?"
    },
    {
        "id":  21,
        "domain":  "identity",
        "topic":  "Least-privilege scope selection",
        "stem":  "Twelve auditors must view every resource in a subscription but must not change anything. The subscription contains 40 resource groups, and new resource groups are added every week. The auditors already belong to a security group.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign the Reader role to the security group at the subscription scope."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign the Reader role to the security group on each of the 40 resource groups."
                        },
                        {
                            "letter":  "C",
                            "text":  "Assign the Contributor role to the security group at the subscription scope."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a custom read-only role and assign it to each auditor on each resource group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure role assignments inherit down the scope hierarchy, so one assignment at the subscription scope covers every resource group and resource in the subscription, including ones created later. Reader allows viewing configuration without permitting changes, and assigning the role to a group means future auditors only need to be added to the group. This is both least privilege and least administrative effort.\n\n- **B** is wrong. Forty assignments must be maintained, and resources in newly created groups would not be covered.\n- **C** is wrong. Contributor permits creating, modifying, and deleting resources, which exceeds the requirement.\n- **D** is wrong. A custom role is unnecessary, and per-auditor, per-group assignments multiply the work.\n\nExam tip: assign the narrowest role at the highest scope that covers all required resources.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  22,
        "domain":  "identity",
        "topic":  "Contributor role boundaries",
        "stem":  "A developer must create and manage every type of resource in the project resource group, including virtual machines, storage accounts, and virtual networks. The developer must not be able to grant access to anyone else, and access must not extend beyond that resource group.\n\nWhich role assignment should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Contributor for the developer at the resource group scope."
                        },
                        {
                            "letter":  "B",
                            "text":  "Owner for the developer at the resource group scope."
                        },
                        {
                            "letter":  "C",
                            "text":  "User Access Administrator for the developer at the resource group scope."
                        },
                        {
                            "letter":  "D",
                            "text":  "Contributor for the developer at the subscription scope."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Contributor can create and manage all types of Azure resources but cannot grant access to others, which is exactly the boundary the requirement describes. Assigning it at the resource group scope limits the developer to that group and its resources while still allowing full management of the workloads inside it.\n\n- **B** is wrong. Owner includes everything Contributor can do plus the right to delegate access through role assignments.\n- **C** is wrong. User Access Administrator manages access and does not provide resource management permissions.\n- **D** is wrong. Subscription scope would extend the same permissions to every resource group in the subscription.\n\nExam tip: Owner equals Contributor plus the ability to assign roles.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  23,
        "domain":  "identity",
        "topic":  "Deny assignment behavior",
        "stem":  "A platform engineer holds the Owner role at the subscription scope. When she tries to delete a storage account, the request fails with an authorization error. A deny assignment created by a managed application is scoped to that storage account. The engineer insists that Owner must override everything.\n\nWhat should you conclude?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The deny assignment blocks the operation even though Owner grants it; the deny assignment or the application\u0027s protection settings must be changed."
                        },
                        {
                            "letter":  "B",
                            "text":  "Owner always overrides deny assignments, so the role assignment must be recreated."
                        },
                        {
                            "letter":  "C",
                            "text":  "The engineer needs the User Access Administrator role at the subscription."
                        },
                        {
                            "letter":  "D",
                            "text":  "The delete action must be added to the Owner role\u0027s NotActions list."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure RBAC is an allow model, but deny assignments are evaluated on top of role assignments and take precedence. A deny assignment can block an operation that Owner explicitly grants, which is why protected resources deployed by managed applications or deployment stacks cannot be modified or deleted until the deny setting is changed or removed by an authorized owner of that resource.\n\n- **B** is wrong. Owner does not override deny assignments; recreating the assignment changes nothing.\n- **C** is wrong. User Access Administrator manages role assignments and cannot bypass a deny assignment.\n- **D** is wrong. Built-in role definitions cannot be edited, and NotActions is not a deny rule anyway.\n\nExam tip: effective permissions equal role assignments minus applicable deny assignments.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  24,
        "domain":  "identity",
        "topic":  "Role assignment elements",
        "stem":  "You are preparing to grant a project group access to a resource group that contains virtual machines and storage accounts. A colleague asks which values must be supplied before the assignment can be created.\n\nWhich three elements must you specify?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A security principal"
                        },
                        {
                            "letter":  "B",
                            "text":  "A role definition"
                        },
                        {
                            "letter":  "C",
                            "text":  "A scope"
                        },
                        {
                            "letter":  "D",
                            "text":  "A policy definition"
                        },
                        {
                            "letter":  "E",
                            "text":  "A management group"
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "Every Azure role assignment binds three things: who receives access, what they can do, and where the permission applies. The security principal is the user, group, service principal, or managed identity; the role definition is the collection of permissions, such as Contributor; and the scope is the management group, subscription, resource group, or resource where the permissions apply.\n\n- **D** is wrong. A policy definition belongs to Azure Policy, which enforces resource configuration rules rather than granting access.\n- **E** is wrong. A management group is one possible value of the scope element, not an additional element that must be supplied.\n\nExam tip: think who, what, where for every role assignment.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  25,
        "domain":  "identity",
        "topic":  "Interpreting inherited access",
        "stem":  "A user can read a storage account, but the storage account\u0027s Access control (IAM) page shows no direct assignment for that user. Check access reports Reader with the state Inherited. You must remove the user\u0027s ability to read this storage account without affecting other resources.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Remove the Reader assignment at the resource group, subscription, or management group scope where it was created."
                        },
                        {
                            "letter":  "B",
                            "text":  "Remove the Reader directory role from the user in Microsoft Entra ID."
                        },
                        {
                            "letter":  "C",
                            "text":  "Add a firewall rule that blocks the user\u0027s IP address."
                        },
                        {
                            "letter":  "D",
                            "text":  "Delete the storage account\u0027s private endpoint."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Check access shows both direct assignments at the selected scope and assignments inherited from parent scopes. An inherited assignment must be managed where it was created, because removing it from the child scope is not possible. If the parent assignment also covers other resources, scope a narrower assignment or use a different group to preserve the user\u0027s other access.\n\n- **B** is wrong. Microsoft Entra directory roles administer the directory and do not grant Azure resource permissions.\n- **C** is wrong. Network rules restrict connectivity, not authorization, and would affect other users behind the same address.\n- **D** is wrong. A private endpoint is a networking construct and has no bearing on role assignments.\n\nExam tip: inherited access is changed at its source scope, never at the child.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — Exercise - List access using Azure RBAC and the Azure portal"
    },
    {
        "id":  26,
        "domain":  "identity",
        "topic":  "Custom role definition",
        "stem":  "Contoso\u0027s operations team must start, restart, and deallocate virtual machines in one subscription, and it must have no other permissions. Existing built-in roles grant more than the team needs. The role must not be assignable outside that subscription.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a custom role that lists only the required compute actions and sets AssignableScopes to the subscription."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign the Virtual Machine Contributor role at the subscription scope."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a custom role with Actions set to an asterisk and list exclusions in NotActions."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign the Contributor role at the subscription scope."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A custom role definition is a JSON collection of Actions, NotActions, DataActions, and NotDataActions, plus AssignableScopes that control where the role can be assigned. Listing only the start, restart, and deallocate operations keeps the role minimal, and restricting AssignableScopes to the subscription prevents the role from being used elsewhere in the tenant.\n\n- **B** is wrong. Virtual Machine Contributor includes broader capabilities such as managing extensions and running commands on the virtual machines.\n- **C** is wrong. A wildcard with exclusions grants every current and future operation that is not explicitly excluded, which is not least privilege.\n- **D** is wrong. Contributor can manage every resource type in the subscription.\n\nExam tip: custom roles need explicit actions and an AssignableScopes restriction.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  27,
        "domain":  "identity",
        "topic":  "NotActions behavior",
        "stem":  "A custom role for the network team specifies Actions as an asterisk and NotActions as the virtual network delete operation. A team member deletes a virtual network successfully. The role assignment is the only custom role assignment on the account, but the account also belongs to a group with the Network Contributor role at the same scope.\n\nWhat is the cause?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The group assignment grants the delete permission; NotActions is not a deny rule."
                        },
                        {
                            "letter":  "B",
                            "text":  "NotActions is case-sensitive, so the entry was ignored."
                        },
                        {
                            "letter":  "C",
                            "text":  "The role needs the delete action listed in DataActions instead."
                        },
                        {
                            "letter":  "D",
                            "text":  "Deleting a virtual network is a data-plane operation outside RBAC."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Role definitions describe the management operations a role grants as Actions minus NotActions, and the result is only what that role grants. NotActions is not a deny rule: another applicable role assignment can still grant an operation that this role excludes. Because the user also receives Network Contributor through group membership, the effective permissions include the delete operation.\n\n- **B** is wrong. NotActions entries are matched as written action strings; case sensitivity is not why the operation succeeded.\n- **C** is wrong. DataActions describe data-plane permissions such as reading blob content, not virtual network management.\n- **D** is wrong. Deleting a virtual network is a control-plane operation evaluated by Azure Resource Manager.\n\nExam tip: NotActions subtracts from one role; only deny assignments block across roles.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?"
    },
    {
        "id":  28,
        "domain":  "identity",
        "topic":  "RBAC activity log audit",
        "stem":  "An auditor requests a report of successful role-assignment creations in a specific subscription during the previous calendar month. The report must show who created each assignment and at which scope, and it must be produced from records that already exist for that period.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Open the subscription\u0027s Activity log, set the timespan, filter on Create role assignment and Status Succeeded, then download the results."
                        },
                        {
                            "letter":  "B",
                            "text":  "Open Access control (IAM) and select Download role assignments."
                        },
                        {
                            "letter":  "C",
                            "text":  "Open the Microsoft Entra audit log and filter on Add member to role."
                        },
                        {
                            "letter":  "D",
                            "text":  "Open Check access for each administrator in the subscription."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The Activity log records control-plane operations, including role-assignment writes and deletes, together with the caller, status, and target scope. It retains events for 90 days, which covers the previous month. Filtering on the role assignment write operation and on Succeeded isolates completed changes rather than attempted or failed ones.\n\n- **B** is wrong. Download role assignments produces a current inventory, not a history of who made changes.\n- **C** is wrong. Microsoft Entra audit logs record directory role changes, not Azure resource role assignments.\n- **D** is wrong. Check access shows effective permissions for a principal, not an audit trail of changes.\n\nExam tip: Activity log answers who changed what; role assignment download answers what exists now.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — Exercise - View activity logs for Azure RBAC changes"
    },
    {
        "id":  29,
        "domain":  "identity",
        "topic":  "Deny effect and existing resources",
        "stem":  "A new policy must prevent resources from being created outside West Europe. The subscription already contains storage accounts and virtual machines in East US that must not be deleted, but they must be reported as noncompliant until they are migrated.\n\nWhich policy configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign an allowed locations policy with the Deny effect; existing resources are flagged noncompliant but are not deleted."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign an allowed locations policy with the Audit effect; new deployments outside West Europe are blocked."
                        },
                        {
                            "letter":  "C",
                            "text":  "Assign a Modify effect that moves existing resources to West Europe."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign a denyAction effect that blocks deletion of the existing resources."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "When a policy with the Deny effect is assigned, new and updated resources outside the allowed locations fail the request, while existing resources are evaluated by the compliance scan and marked noncompliant. Azure Policy never deletes a noncompliant resource, so the East US resources remain available until they are migrated or exempted.\n\n- **B** is wrong. Audit only records noncompliance, so new resources outside West Europe would still be created.\n- **C** is wrong. Modify can add or change properties and tags during a request, but it cannot relocate an existing resource to another region.\n- **D** is wrong. denyAction blocks a request such as DELETE; it does not restrict where resources are created.\n\nExam tip: Deny stops new noncompliant deployments; existing resources are reported, not removed.",
        "source":  "Azure Policy initiatives — Evaluation of resources through Azure Policy"
    },
    {
        "id":  30,
        "domain":  "identity",
        "topic":  "Policy remediation task",
        "stem":  "A Modify policy that requires the CostCenter tag is assigned at the subscription scope. Four hundred existing resources are missing the tag, while newly created resources are corrected automatically. You must bring the existing resources into compliance without editing them individually.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a remediation task for the assignment and let it use the assignment\u0027s managed identity."
                        },
                        {
                            "letter":  "B",
                            "text":  "Add the tag manually to each of the 400 resources."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete and redeploy the affected resources with the correct tag."
                        },
                        {
                            "letter":  "D",
                            "text":  "Change the policy effect to Audit and wait for the next compliance cycle."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Remediation tasks bring existing resources into compliance for Modify and deployIfNotExists assignments. Resources created or updated after the assignment are remediated automatically, but pre-existing resources need a task that evaluates them and applies the change. The assignment uses a system-assigned or user-assigned managed identity to perform the remediation, so no per-resource editing is needed.\n\n- **B** is wrong. Editing 400 resources by hand is slow, error-prone, and exactly what remediation avoids.\n- **C** is wrong. Redeploying resources causes disruption and data loss for no reason.\n- **D** is wrong. Audit reports noncompliance and never adds the missing tag.\n\nExam tip: remediation tasks fix existing resources; new resources are remediated automatically.",
        "source":  "Azure Policy initiatives — Azure Policy resources"
    },
    {
        "id":  31,
        "domain":  "identity",
        "topic":  "Policy rollout design",
        "stem":  "You must enforce region and tag standards across 60 subscriptions that are organized under several management groups. The first rollout must not block deployments while you measure impact, and approved exceptions must be documented after the assignment exists.\n\nWhich three actions should you take?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Group the definitions into a custom initiative and assign the initiative at a management group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Set enforcementMode to DoNotEnforce for the initial assignment."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create exemptions with the Mitigated or Waiver category for approved exceptions."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign each policy definition separately to every subscription."
                        },
                        {
                            "letter":  "E",
                            "text":  "Set the effect to Manual so noncompliant resources are deleted automatically."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "An initiative, also called a policy set, groups definitions so they are assigned and tracked as one item, and a management group assignment inherits to every subscription beneath it. Assigning with enforcementMode set to DoNotEnforce evaluates compliance without letting deny or modify effects act, which supports a safe what-if rollout. Exemptions are created after assignment and record approved exceptions as Mitigated or Waiver.\n\n- **D** is wrong. Per-subscription assignments multiply maintenance and break inheritance-based governance.\n- **E** is wrong. The Manual effect supports self-attestation of compliance and never deletes resources.\n\nExam tip: DoNotEnforce evaluates without enforcing; exemptions document exceptions after assignment.",
        "source":  "Azure Policy initiatives — Azure Policy resources"
    },
    {
        "id":  32,
        "domain":  "identity",
        "topic":  "Resource lock selection",
        "stem":  "A production resource group contains virtual machines and app services that operators must continue to resize and reconfigure. Nobody, including subscription Owners, may delete the resources in the group. The protection must apply immediately and must not depend on role assignments.\n\nWhat should you apply?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A CanNotDelete lock on the resource group."
                        },
                        {
                            "letter":  "B",
                            "text":  "A ReadOnly lock on the resource group."
                        },
                        {
                            "letter":  "C",
                            "text":  "A deny assignment on the resource group."
                        },
                        {
                            "letter":  "D",
                            "text":  "A custom role without delete permissions assigned at the subscription."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Resource locks are independent of Azure RBAC, so they apply to every principal, including Owners. CanNotDelete permits read and modify operations but blocks delete operations on the locked scope and its child resources, which matches the requirement to keep resizing and reconfiguring resources. Locks are inherited from the resource group to the resources inside it.\n\n- **B** is wrong. ReadOnly blocks modifications as well as deletions, so operators could not resize or reconfigure anything.\n- **C** is wrong. Deny assignments originate from managed applications and deployment stacks; you cannot create one arbitrarily as a lock.\n- **D** is wrong. A role assignment only affects principals who hold it and can be supplemented by other assignments.\n\nExam tip: locks apply to everyone; CanNotDelete allows changes but blocks deletion.",
        "source":  "AZ-104 objective: Manage Azure resources — Configure resource locks"
    },
    {
        "id":  33,
        "domain":  "identity",
        "topic":  "Tag-based cost allocation",
        "stem":  "Four product teams share one subscription. Finance must charge each team for its own virtual machines and storage and must report costs by team and by environment. No additional subscriptions or tenants will be created, and the same resource can belong to only one team.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Apply Team and Environment tags to resources and analyze costs grouped by those tag values."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create one resource group per invoice line and rely on resource group names."
                        },
                        {
                            "letter":  "C",
                            "text":  "Move each team into its own Microsoft Entra tenant."
                        },
                        {
                            "letter":  "D",
                            "text":  "Apply a ReadOnly lock to each team\u0027s resources."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Tags are key-value pairs that support cost allocation and reporting, and Microsoft Cost Management can group and filter charges by tag. Because tags are not inherited from a resource group, each resource must carry the values, and Azure Policy can enforce the required tag names and values for new and existing resources. A resource can have up to 50 tags, which is ample for team and environment dimensions.\n\n- **B** is wrong. Resource group names help organize resources, but they do not provide the cross-cutting, queryable dimensions Finance needs by team and environment.\n- **C** is wrong. Tenants isolate identities, not billing lines, and would fragment administration.\n- **D** is wrong. A lock prevents deletion or modification and has no effect on cost reporting.\n\nExam tip: tags are not inherited from the resource group, so enforce them with policy.",
        "source":  "AZ-104 objective: Manage Azure resources — Apply and manage tags"
    },
    {
        "id":  34,
        "domain":  "identity",
        "topic":  "Resource group constraints",
        "stem":  "A resource group named rg-legacy holds production resources. A new naming standard requires the name rg-prod-app, and the platform team also wants to nest the existing group inside a parent group to reflect the application hierarchy. Resources must keep their current identities.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create rg-prod-app and move the supported resources into it, because resource groups cannot be renamed or nested."
                        },
                        {
                            "letter":  "B",
                            "text":  "Rename rg-legacy to rg-prod-app in the portal."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create rg-prod-app and move rg-legacy inside it."
                        },
                        {
                            "letter":  "D",
                            "text":  "Recreate the subscription so the resource group can be renamed during deployment."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Resource groups cannot be renamed after creation and cannot be nested. A resource belongs to exactly one resource group at a time, although many resource types can be moved between groups. The supported approach is to create the correctly named group and move resources into it, validating that each resource type supports the move.\n\n- **B** is wrong. The portal offers no rename operation for resource groups; only tags and other properties can be edited.\n- **C** is wrong. Resource groups cannot contain other resource groups, so nesting is not possible.\n- **D** is wrong. Recreating the subscription destroys the billing and access boundary and does not rename the group.\n\nExam tip: choose resource group names carefully, because they are permanent.",
        "source":  "Describe the core architectural components of Azure — Describe Azure management infrastructure"
    },
    {
        "id":  35,
        "domain":  "identity",
        "topic":  "Subscription boundaries",
        "stem":  "A company needs separate invoices for development and production, different spending limits for each environment, and different administrators for each environment. All employees must continue to sign in with the same accounts and use the same groups.\n\nWhat should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Two subscriptions associated with the same Microsoft Entra tenant."
                        },
                        {
                            "letter":  "B",
                            "text":  "Two Microsoft Entra tenants, one for each environment."
                        },
                        {
                            "letter":  "C",
                            "text":  "Two management groups with no subscriptions beneath them."
                        },
                        {
                            "letter":  "D",
                            "text":  "Two resource groups inside one subscription."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A subscription is both a billing boundary and an access control boundary: each subscription generates its own invoice, and access policies and spending limits are applied at that level. Associating both subscriptions with the same tenant keeps one identity boundary, so users, groups, and service principals remain shared across environments.\n\n- **B** is wrong. Separate tenants duplicate identities and break the requirement for shared accounts and groups.\n- **C** is wrong. Management groups organize subscriptions for inherited governance but do not produce invoices or hold resources.\n- **D** is wrong. Resource groups in one subscription share a single invoice and subscription-level access settings.\n\nExam tip: subscriptions separate billing and access; tenants separate identities.",
        "source":  "Describe the core architectural components of Azure — Describe Azure management infrastructure"
    },
    {
        "id":  36,
        "domain":  "identity",
        "topic":  "Management group inheritance",
        "stem":  "A new subscription for the Asia division must immediately inherit the same Azure Policy assignments and role assignments as 12 existing subscriptions. Future subscriptions added to the division must inherit the same settings automatically, and no assignments should be duplicated.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Move the new subscription into the existing management group that holds the assignments."
                        },
                        {
                            "letter":  "B",
                            "text":  "Recreate every policy and role assignment in the new subscription."
                        },
                        {
                            "letter":  "C",
                            "text":  "Assign Owner at the tenant root group to the division\u0027s administrators."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a resource group named after the division and move the resources there."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Management groups sit above subscriptions, and assignments made at a management group scope are inherited by every subscription beneath it. Moving the new subscription under the existing management group therefore applies the policies and role assignments immediately, and any subscription added later inherits them too. Each subscription and management group can have only one parent, and the hierarchy can extend up to six levels below the tenant root group.\n\n- **B** is wrong. Duplicating assignments creates drift and ongoing maintenance.\n- **C** is wrong. Owner at the root group is far broader than required and does not provide policy inheritance.\n- **D** is wrong. Resource groups have no relationship to subscription-level governance inheritance.\n\nExam tip: one assignment at a management group covers every subscription beneath it.",
        "source":  "Describe the core architectural components of Azure — Describe Azure management infrastructure"
    },
    {
        "id":  37,
        "domain":  "identity",
        "topic":  "Budget alerts",
        "stem":  "The platform team must receive an email when subscription spending reaches 80 percent of the forecast for the month and another email at 100 percent. Resources must never be stopped automatically, and the solution must not require custom code.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a budget at the subscription scope with alert thresholds at 80 and 100 percent of forecast."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a separate cost alert for every resource group in the subscription."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable Azure Advisor and wait for cost recommendations."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create an action group that deletes resources when the threshold is reached."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A budget tracks actual and forecast cost at a chosen scope and sends alerts when configured thresholds are crossed. Setting the budget on the subscription with alerts at 80 and 100 percent of forecast delivers both notifications to the team, and budgets only notify; they do not stop or delete resources. No automation code is required.\n\n- **B** is wrong. Per-resource-group alerts multiply configuration, and each alert covers only part of total subscription spend.\n- **C** is wrong. Advisor provides recommendations for reducing cost, not threshold notifications.\n- **D** is wrong. Deleting resources violates the requirement and budgets cannot trigger deletions.\n\nExam tip: budgets notify on actual or forecast spend and never enforce a hard stop.",
        "source":  "AZ-104 objective: Manage Azure costs — Configure budgets and cost alerts"
    },
    {
        "id":  38,
        "domain":  "identity",
        "topic":  "Cost optimization tooling",
        "stem":  "Management wants to reduce wasteful spending on oversized virtual machines and to be warned before a subscription exceeds its monthly spending plan. The solution must identify specific resources to right-size and must notify owners without stopping workloads.\n\nWhich two capabilities should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Advisor cost recommendations"
                        },
                        {
                            "letter":  "B",
                            "text":  "Microsoft Cost Management budgets with alerts"
                        },
                        {
                            "letter":  "C",
                            "text":  "Resource locks on production resource groups"
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Policy assignments with the Deny effect"
                        },
                        {
                            "letter":  "E",
                            "text":  "A management group hierarchy"
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Azure Advisor analyzes usage and provides cost recommendations such as right-sizing or shutting down underused resources, which identifies the specific virtual machines to change. Budgets in Microsoft Cost Management track actual and forecast spend and send alerts when thresholds are approached, which covers the notification requirement without affecting workloads.\n\n- **C** is wrong. Resource locks prevent deletion or modification of resources and have no cost-analysis function.\n- **D** is wrong. Policy Deny enforces configuration standards and does not identify waste or report spend.\n- **E** is wrong. Management groups organize subscriptions for governance; they do not produce cost recommendations or alerts.\n\nExam tip: Advisor recommends what to change; budgets warn when spending is on track to exceed plan.",
        "source":  "AZ-104 objective: Manage Azure costs — Monitor costs with Azure Advisor"
    },
    {
        "id":  39,
        "domain":  "identity",
        "topic":  "CLI bulk role assignment",
        "stem":  "Two hundred contractors are listed in a CSV file with their user principal names. All of them must receive the Reader role on the rg-contracts resource group today. The assignment must be repeatable next quarter for a new list, and no permanent standing access at subscription scope is allowed.\n\nWhich option meets the requirement with the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Run a script that loops over the CSV and calls az role assignment create for each user with the Reader role and the resource group scope."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign Owner at the subscription scope to each contractor through the portal."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create 200 custom roles that contain only read actions."
                        },
                        {
                            "letter":  "D",
                            "text":  "Add each contractor as a classic subscription co-administrator."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The Azure CLI command az role assignment create takes an assignee, a role, and a scope, so a loop over the CSV produces consistent, repeatable assignments at the correct resource group scope. Because the role and scope are explicit, the contractors receive only read access to that group, and the script can be rerun when a new list arrives.\n\n- **B** is wrong. Owner at subscription scope grants full control and role delegation far beyond the requirement.\n- **C** is wrong. Two hundred custom role definitions are unnecessary and much harder to maintain than one built-in role.\n- **D** is wrong. Classic co-administrators receive full subscription management rights and are not a least-privilege option.\n\nExam tip: az role assignment create needs --assignee, --role, and --scope.",
        "source":  "AZ-104 objective: Manage identities and governance — Manage role assignments with Azure CLI"
    },
    {
        "id":  40,
        "domain":  "identity",
        "topic":  "Block sign-in with PowerShell",
        "stem":  "An employee leaves the company today. Legal requires the mailbox and OneDrive contents to remain available under hold, and the license must stay assigned for now. The account must be blocked from signing in immediately, and the object must not be deleted.\n\nWhat should you run?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Update-MgUser -UserId user@contoso.com -AccountEnabled $false"
                        },
                        {
                            "letter":  "B",
                            "text":  "Remove-MgUser -UserId user@contoso.com"
                        },
                        {
                            "letter":  "C",
                            "text":  "Revoke-MgUserSignInSession -UserId user@contoso.com"
                        },
                        {
                            "letter":  "D",
                            "text":  "Set-MgUserLicense -UserId user@contoso.com -RemoveLicense"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Setting AccountEnabled to false blocks new sign-ins while leaving the user object, mailbox, OneDrive, and license intact. Revoking sign-in sessions is a complementary step that invalidates existing refresh tokens, but on its own it does not stop the user from signing in again with valid credentials. Disabling the account first and then revoking sessions is the standard offboarding sequence.\n\n- **B** is wrong. Deleting the user removes the object and starts the 30-day recovery window, and licenses are removed from the deleted account.\n- **C** is wrong. Session revocation invalidates current tokens only; the account remains enabled and can sign in again.\n- **D** is wrong. Removing the license does not block authentication and would break the hold requirement.\n\nExam tip: disable the account, revoke sessions, then remove licenses after the hold ends.",
        "source":  "AZ-104 objective: Manage identities and governance — Manage user properties with PowerShell"
    },
    {
        "id":  41,
        "domain":  "storage",
        "topic":  "Storage firewall selected networks",
        "stem":  "Contoso stores customer documents in a general-purpose v2 account named stcontosodocs in West Europe. You set **Public network access** to **Enabled from selected virtual networks and IP addresses** and added the app subnet of vnet-app to the list. The application on a VM in that subnet runs as a managed identity that holds **Storage Blob Data Contributor** on the account, yet every upload fails with an authorization error. The Microsoft.Storage service endpoint has not been enabled on the subnet.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable the Microsoft.Storage service endpoint on the app subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "Add the VM\u0027s public IP address to the storage account firewall."
                        },
                        {
                            "letter":  "C",
                            "text":  "Change the firewall default action from Deny to Allow."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign Storage Blob Data Owner to the VM\u0027s managed identity."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A subnet reaches storage through a service endpoint only when both halves exist: Microsoft.Storage must be enabled on the subnet, and the subnet must appear in the account\u0027s firewall rules. You configured only the second half. The storage front end therefore still receives the request from a public source address and applies its default **Deny** action. RBAC decides what an accepted request may do; it cannot rescue one rejected at the network layer.\n\n- **B** is wrong. Allowing one public IP breaks when the VM is redeployed, and traffic still uses the public endpoint.\n- **C** is wrong. Setting the default action to Allow removes the restriction and exposes the account to every network.\n- **D** is wrong. Storage Blob Data Owner adds data-plane permission the identity does not need and gives no network path.\n\nExam tip: a listed subnet plus a missing service endpoint is the classic cause of a firewall 403.",
        "source":  "Configure storage accounts — Secure storage endpoints"
    },
    {
        "id":  42,
        "domain":  "storage",
        "topic":  "Private endpoint with private DNS",
        "stem":  "Contoso runs a document service on VMs in subnet app-subnet (10.20.1.0/24) of vnet-prod, which is linked to no other networks. The storage account stcontosodocs must be reachable **only** through the address 10.20.1.5, and public network access will be turned off. The diagram shows vnet-prod with app-subnet, a private endpoint in that subnet, a private DNS zone named privatelink.blob.core.windows.net linked to vnet-prod, and the storage account behind the endpoint. Applications must resolve stcontosodocs.blob.core.windows.net to that private address without hosts-file entries.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A private endpoint for the blob sub-resource in app-subnet, plus a privatelink.blob.core.windows.net private DNS zone linked to vnet-prod."
                        },
                        {
                            "letter":  "B",
                            "text":  "A Microsoft.Storage service endpoint on app-subnet, plus a firewall rule for that subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "A site-to-site VPN connection between vnet-prod and the storage account\u0027s region."
                        },
                        {
                            "letter":  "D",
                            "text":  "An NSG rule that allows outbound TCP 443 from app-subnet to the Storage service tag."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A private endpoint places a network interface with a private IP from your subnet in front of a specific sub-resource, so blob traffic stays on the Microsoft backbone and never touches the public endpoint. Service endpoints are different: they keep the account on its public IP and only restrict which subnets may reach it. The account\u0027s public name must keep working for clients, so the privatelink DNS zone must be linked to the VNet; otherwise clients resolve the public address and fail once public access is disabled.\n\n- **B** is wrong. A service endpoint creates no private IP address, so it cannot satisfy the 10.20.1.5 requirement.\n- **C** is wrong. A VPN gateway links networks; it does not give the account an address inside the VNet.\n- **D** is wrong. An NSG rule filters traffic but changes neither name resolution nor the endpoint.\n\nExam tip: private endpoint plus a linked private DNS zone is the pair the exam expects.",
        "source":  "Configure storage accounts — Secure storage endpoints",
        "diagram":  "private-endpoint"
    },
    {
        "id":  43,
        "domain":  "storage",
        "topic":  "Subnet-scoped service endpoint",
        "stem":  "Contoso has vnet-hub with three subnets shown in the diagram: web-subnet, app-subnet, and db-subnet, each protected by its own NSG. Storage account stcontosoweb hosts static assets. Only VMs in web-subnet may reach the account; VMs in app-subnet and db-subnet must be blocked even though they are in the same VNet. The storage firewall currently allows all networks.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable the Microsoft.Storage service endpoint on web-subnet only, then set the account firewall to Selected networks and add only web-subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create an NSG rule that allows outbound traffic to the Storage service tag from all three subnets."
                        },
                        {
                            "letter":  "C",
                            "text":  "Add all three subnets to the storage firewall and rely on the NSGs to block the other two."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a private endpoint in each of the three subnets."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Service endpoint access is granted per subnet. Enabling Microsoft.Storage on web-subnet gives that subnet a direct path to the service, and listing only web-subnet in the firewall with a default action of **Deny** blocks the other two, which still arrive from public addresses. The NSG is not the control point: the storage firewall decides which source networks are trusted, and an unlisted subnet is refused regardless of its NSG rules.\n\n- **B** is wrong. A service tag rule permits traffic but does not authorize the subnet at the account, so all three still fail.\n- **C** is wrong. Adding all three subnets authorizes all three; NSGs cannot revoke a grant the service already accepted.\n- **D** is wrong. Three private endpoints give every subnet private access, the opposite of the requirement.\n\nExam tip: scope the service endpoint and the firewall rule to the same single subnet.",
        "source":  "Configure storage accounts — Secure storage endpoints",
        "diagram":  "nsg-subnets"
    },
    {
        "id":  44,
        "domain":  "storage",
        "topic":  "User delegation SAS",
        "stem":  "A partner team runs an application that uploads audit files into container **intake** in stcontosoaudit for four hours each night. Security policy forbids giving the partner any storage account key, and the token must stop working as soon as the partner\u0027s Microsoft Entra workload identity loses its **Storage Blob Data Contributor** assignment — with no key rotation. The partner application already authenticates to Microsoft Entra ID as a service principal.\n\nWhich credential should you issue?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A user delegation SAS created with the service principal\u0027s Microsoft Entra credentials."
                        },
                        {
                            "letter":  "B",
                            "text":  "An account SAS signed with the primary storage account key."
                        },
                        {
                            "letter":  "C",
                            "text":  "A service SAS for the container signed with the secondary storage account key."
                        },
                        {
                            "letter":  "D",
                            "text":  "A connection string that contains the account name and key."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A user delegation SAS is the only SAS type signed with **Microsoft Entra credentials** instead of an account key. You obtain a user delegation key for the service principal, then build a container-scoped SAS with the needed permissions and expiry. Because the signature is tied to that identity, revoking its RBAC assignment invalidates the credential without touching account keys. It is supported for Blob Storage and Data Lake Storage.\n\n- **B** is wrong. An account SAS is signed with an account key, which policy forbids handing to partner tooling.\n- **C** is wrong. A service SAS is also key-signed, so it survives RBAC changes and needs key rotation to revoke.\n- **D** is wrong. A connection string carries the key itself and grants full control of the account.\n\nExam tip: no keys plus identity-based revocation means user delegation SAS, for Blob or Data Lake only.",
        "source":  "Configure Azure Storage security — Create shared access signatures"
    },
    {
        "id":  45,
        "domain":  "storage",
        "topic":  "Stored access policy revocation",
        "stem":  "Contoso issues a service SAS to a vendor so the vendor can read container **reports** for 90 days. Halfway through the period the contract ends, and the vendor must lose access immediately. You must not regenerate storage account keys, because 60 internal applications use them, and you must not delete the container, which holds production data.\n\nWhat is the least administrative effort to meet these requirements?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Have the SAS reference a stored access policy on the container, then delete or shorten that policy."
                        },
                        {
                            "letter":  "B",
                            "text":  "Regenerate both storage account access keys."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete and recreate the container."
                        },
                        {
                            "letter":  "D",
                            "text":  "Issue a replacement SAS with a shorter expiry and email it to the vendor."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A stored access policy is a server-side object on the container that a service SAS references. Permissions and expiry live in the policy instead of the signed token, so editing or deleting it changes or ends every SAS that references it on the next request. That gives revocation on demand without rotating keys, redeploying applications, or moving data, which is why Microsoft recommends referencing a policy for any SAS that must be revocable.\n\n- **B** is wrong. Regenerating keys breaks all 60 internal applications and is far more disruptive than required.\n- **C** is wrong. Deleting the container destroys production data and does not affect the vendor\u0027s copy of the token.\n- **D** is wrong. A new token does not revoke the old one, so the vendor keeps access until the original expiry.\n\nExam tip: stored access policies revoke service SAS only, never account or user delegation SAS.",
        "source":  "Configure Azure Storage security — Create shared access signatures"
    },
    {
        "id":  46,
        "domain":  "storage",
        "topic":  "SAS type capabilities",
        "stem":  "Contoso\u0027s developers are choosing between the SAS types for several integrations. One integration must avoid account keys entirely, one must perform a service-level operation, and one must be scoped to a single container.\n\nWhich three statements about shared access signatures are correct? (Choose three.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A user delegation SAS is secured with Microsoft Entra credentials and is supported for Blob Storage and Data Lake Storage."
                        },
                        {
                            "letter":  "B",
                            "text":  "An account SAS can perform service-level operations, such as reading service properties, that a service SAS cannot."
                        },
                        {
                            "letter":  "C",
                            "text":  "A service SAS can be scoped to a container or to an individual blob and is signed with an account key."
                        },
                        {
                            "letter":  "D",
                            "text":  "A stored access policy can revoke a user delegation SAS without rotating account keys."
                        },
                        {
                            "letter":  "E",
                            "text":  "Converting an account SAS from read to write permission requires regenerating the account key."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "The SAS types differ in who signs them and how far they reach. A **user delegation** SAS is signed with a Microsoft Entra token and is limited to Blob Storage and Data Lake Storage. An **account** SAS is signed with an account key and covers everything a service SAS covers plus account-level abilities, such as reading service properties and creating file systems. A **service** SAS is also key-signed but is scoped to one service, and it can target a container or a single blob.\n\n- **D** is wrong. Stored access policies are referenced by service SAS only; a user delegation SAS is revoked by removing the identity\u0027s permission.\n- **E** is wrong. Permissions are fixed in the signature at generation time, so you issue a new token; regenerating the key invalidates every SAS.\n\nExam tip: identity-signed means user delegation, service properties means account SAS, one container means service SAS.",
        "source":  "Configure Azure Storage security — Create shared access signatures"
    },
    {
        "id":  47,
        "domain":  "storage",
        "topic":  "Access key rotation",
        "stem":  "Contoso runs 40 applications against stcontosoprod. All of them read the primary access key from a Key Vault secret. A security audit requires the keys to be rotated this week with no unplanned outage, and each application must keep working throughout.\n\nWhat is the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Regenerate the secondary key, update the Key Vault secret and applications to use it, then regenerate the primary key."
                        },
                        {
                            "letter":  "B",
                            "text":  "Regenerate both keys at the same time and redeploy all 40 applications."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete the storage account and recreate it with new keys."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a second storage account and migrate all data."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Every storage account has two access keys so rotation can be staged. You regenerate the key nothing is using, repoint clients at it, confirm they work, then regenerate the old key. Because all 40 applications read the key from a single Key Vault secret, updating one secret moves every client, and no data moves. Key Vault rotation policies can automate the schedule later, for example every 90 days.\n\n- **B** is wrong. Regenerating both keys at once invalidates every client immediately, guaranteeing an outage.\n- **C** is wrong. Deleting the account destroys data and configuration, a far larger change than rotation.\n- **D** is wrong. Building a parallel account and migrating is a project, and it never rotates the existing keys.\n\nExam tip: rotate secondary first, cut over, then rotate primary; VM disk access is unaffected.",
        "source":  "Configure Azure Storage security — Determine Azure Storage encryption"
    },
    {
        "id":  48,
        "domain":  "storage",
        "topic":  "Disable shared key authorization",
        "stem":  "A compliance review finds that several internal tools still authenticate to stcontosofin with the storage account key. The auditors require that **no** client can use account keys or key-signed SAS after the change, while Microsoft Entra ID access and user delegation SAS must keep working. You must not delete data or redeploy the tools onto new accounts.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Set **Allow storage account key access** to Disabled on the storage account."
                        },
                        {
                            "letter":  "B",
                            "text":  "Regenerate both access keys and store them in Key Vault."
                        },
                        {
                            "letter":  "C",
                            "text":  "Remove all Storage Account Key Operator Service Role assignments."
                        },
                        {
                            "letter":  "D",
                            "text":  "Restrict the account to selected virtual networks and IP addresses."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Disabling shared key authorization tells the storage service to reject any request authorized with the primary or secondary key, including SAS tokens signed with those keys. Clients must then present a Microsoft Entra token, which means RBAC data-plane roles or a user delegation SAS. The keys remain visible for administration but can no longer authenticate data requests. Microsoft recommends this setting as the default posture for accounts holding sensitive data.\n\n- **B** is wrong. Rotating keys changes their value, but shared key authorization stays enabled and the tools keep working.\n- **C** is wrong. That role governs who can read and regenerate keys; it does not disable key authentication.\n- **D** is wrong. Network restrictions limit where requests come from, not how they authenticate.\n\nExam tip: disabling shared key also invalidates existing key-signed SAS, so reissue them as user delegation SAS.",
        "source":  "Configure Azure Storage security — Review Azure Storage security strategies"
    },
    {
        "id":  49,
        "domain":  "storage",
        "topic":  "Identity-based SMB for Azure Files",
        "stem":  "Contoso is replacing an on-premises file server with an Azure file share. Employees must open the share with their existing Active Directory credentials and receive different permissions per department. The on-premises domain controllers are reachable over a site-to-site VPN, and passwords are not synchronized to Microsoft Entra ID. Users must not receive storage account keys or SAS tokens.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Identity-based authentication over SMB using on-premises AD DS, then assign Storage File Data SMB Share Contributor to the department groups."
                        },
                        {
                            "letter":  "B",
                            "text":  "A separate SAS token per employee, distributed by email."
                        },
                        {
                            "letter":  "C",
                            "text":  "The storage account key on each user\u0027s mapped drive."
                        },
                        {
                            "letter":  "D",
                            "text":  "An NFS file share with UNIX-style permissions."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Files supports identity-based authentication over SMB from three directory sources: on-premises AD DS, Microsoft Entra Domain Services, and Microsoft Entra Kerberos. Because passwords are not synchronized, AD DS is the viable source. You domain-join the clients, register the account with AD DS, and grant share access through Azure RBAC roles such as Storage File Data SMB Share Contributor. Users then sign in with existing credentials and no key is distributed.\n\n- **B** is wrong. A SAS token is a bearer credential for REST code access, not a per-user identity, and it bypasses file permissions.\n- **C** is wrong. The account key grants full control and bypasses every access control restriction.\n- **D** is wrong. NFS shares do not use Active Directory identities or NTFS permissions.\n\nExam tip: identity-based SMB is the only Azure Files option that honors AD identities.",
        "source":  "Configure Azure Files — Manage Azure file shares"
    },
    {
        "id":  50,
        "domain":  "storage",
        "topic":  "Premium file share account",
        "stem":  "A rendering team needs Azure file shares that support both SMB and NFS clients, deliver consistent single-digit-millisecond latency, and are billed for provisioned capacity rather than per transaction. The shares will hold active project data that is read and written continuously.\n\nWhich storage account type should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Premium file shares (FileStorage)"
                        },
                        {
                            "letter":  "B",
                            "text":  "Premium block blobs"
                        },
                        {
                            "letter":  "C",
                            "text":  "Premium page blobs"
                        },
                        {
                            "letter":  "D",
                            "text":  "Standard general-purpose v2 with the transaction optimized tier"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Premium file shares live in a **FileStorage** account, which is SSD-backed and bills provisioned capacity. That matches a predictable, low-latency, high-IOPS workload and is the only premium account type that hosts Azure Files, supporting both SMB and NFS shares with LRS or ZRS redundancy. A standard general-purpose v2 account hosts file shares on HDD with pay-as-you-go billing.\n\n- **B** is wrong. Premium block blobs host only blob data and cannot contain file shares.\n- **C** is wrong. Premium page blobs host page blobs only, typically VM disks, with LRS only.\n- **D** is wrong. Transaction optimized is an HDD standard tier with pay-as-you-go billing, so it cannot deliver SSD latency.\n\nExam tip: premium file shares equal FileStorage plus provisioned billing; standard shares live in GPv2.",
        "source":  "Configure storage accounts — Determine storage account types"
    },
    {
        "id":  51,
        "domain":  "storage",
        "topic":  "Premium block blob account",
        "stem":  "A telemetry service writes millions of small objects per hour to Blob Storage and reads them back within seconds. The team requires consistently low latency and the highest transaction rate available, and the data does not need a secondary region. The account will hold block blobs and append blobs only.\n\nWhich account type should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Premium block blobs"
                        },
                        {
                            "letter":  "B",
                            "text":  "Premium page blobs"
                        },
                        {
                            "letter":  "C",
                            "text":  "Premium file shares"
                        },
                        {
                            "letter":  "D",
                            "text":  "Standard general-purpose v2 with RA-GRS"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Premium block blob accounts target applications with high transaction rates and consistently low latency, particularly when objects are small. They host block and append blobs and offer LRS and ZRS redundancy, which fits a workload with no cross-region requirement. Standard GPv2 accounts are HDD-backed and cheaper per gigabyte, but they cannot match that transaction rate or latency profile.\n\n- **B** is wrong. Premium page blobs host only page blobs, such as VM disks, not block or append blobs.\n- **C** is wrong. Premium file shares host Azure Files shares only.\n- **D** is wrong. A standard account is HDD-backed, and RA-GRS adds a secondary region the workload rejects.\n\nExam tip: high transaction rate plus small objects means premium block blobs, never a standard tier.",
        "source":  "Configure storage accounts — Determine storage account types"
    },
    {
        "id":  52,
        "domain":  "storage",
        "topic":  "GPv1 upgrade path",
        "stem":  "Contoso still runs 12 legacy general-purpose v1 storage accounts created in 2016. The team needs lifecycle management policies and newer blob features on those accounts, and management wants the change completed with the least administrative effort and no data movement.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Upgrade each account in place to general-purpose v2 by using the portal, Azure CLI, or PowerShell."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a GPv2 account for each legacy account and copy all data with AzCopy."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete the accounts and ask application owners to rebuild them."
                        },
                        {
                            "letter":  "D",
                            "text":  "Convert the accounts to premium block blob accounts."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Microsoft supports an in-place upgrade from general-purpose v1, and from legacy BlobStorage accounts, to general-purpose v2. The upgrade keeps the account name, endpoints, and data while unlocking lifecycle management, access tiers, object replication, and other current capabilities. Because it is a control-plane operation, it takes minutes and involves no copying, which is why Microsoft recommends it for legacy accounts.\n\n- **B** is wrong. Copying every account doubles storage cost, changes endpoints, and requires application cutover work.\n- **C** is wrong. Deleting accounts destroys data and forces a full rebuild.\n- **D** is wrong. Standard accounts cannot be converted to premium at all, so that path needs a new account and a copy.\n\nExam tip: GPv1 and BlobStorage upgrade in place; Standard and Premium never convert in either direction.",
        "source":  "Configure storage accounts — Determine storage account types"
    },
    {
        "id":  53,
        "domain":  "storage",
        "topic":  "LRS for governance-restricted data",
        "stem":  "A regional regulator requires that a retailer\u0027s transaction archive never leave the datacenter in which it is written. The archive is regenerated nightly from source systems, so losing a datacenter copy is tolerable, and cost is the dominant concern.\n\nWhich replication option should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Locally redundant storage (LRS)"
                        },
                        {
                            "letter":  "B",
                            "text":  "Zone-redundant storage (ZRS)"
                        },
                        {
                            "letter":  "C",
                            "text":  "Geo-redundant storage (GRS)"
                        },
                        {
                            "letter":  "D",
                            "text":  "Read-access geo-redundant storage (RA-GRS)"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "LRS keeps three copies within a single storage stamp in one datacenter, so nothing leaves the zone or the region. It is the lowest-cost option and the only one that satisfies a rule that data must stay in one location. LRS suits data that can be rebuilt, that changes constantly, or that governance restricts to one location. The trade-off is that a datacenter disaster can lose every replica.\n\n- **B** is wrong. ZRS replicates synchronously across three availability zones, placing copies outside the named datacenter.\n- **C** is wrong. GRS copies data to a paired region hundreds of miles away, violating the residency rule.\n- **D** is wrong. RA-GRS also replicates to a secondary region and adds read access there, at higher cost.\n\nExam tip: governance-driven residency plus rebuildable data is the classic LRS justification.",
        "source":  "Configure storage accounts — Determine replication strategies"
    },
    {
        "id":  54,
        "domain":  "storage",
        "topic":  "ZRS zone resilience",
        "stem":  "A trading platform writes pricing snapshots to a storage account in Switzerland North. The design must survive the loss of an entire availability zone in that region with both read and write operations continuing, must keep data in Switzerland, and must use the lowest-cost replication that meets those requirements.\n\nWhich replication option should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Zone-redundant storage (ZRS)"
                        },
                        {
                            "letter":  "B",
                            "text":  "Locally redundant storage (LRS)"
                        },
                        {
                            "letter":  "C",
                            "text":  "Geo-redundant storage (GRS)"
                        },
                        {
                            "letter":  "D",
                            "text":  "Read-access geo-redundant storage (RA-GRS)"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "ZRS replicates data synchronously across three storage clusters, each in a separate availability zone within one region. Each cluster is autonomous with its own utilities and networking, so the account stays readable and writable when one zone is lost, and the data never leaves the region. It also provides low latency, because all replicas are local. LRS would fail in a zone outage, and the geo options would move a copy out of the country.\n\n- **B** is wrong. LRS keeps three copies in one datacenter, so a zone failure can take all replicas offline.\n- **C** is wrong. GRS protects against a regional outage but stores a copy outside Switzerland and is not zone-resilient.\n- **D** is wrong. RA-GRS adds secondary-region reads but has the same residency and zone-resilience problems.\n\nExam tip: surviving a zone failure with writes continuing means ZRS or GZRS, never LRS or GRS alone.",
        "source":  "Configure storage accounts — Determine replication strategies"
    },
    {
        "id":  55,
        "domain":  "storage",
        "topic":  "RA-GRS secondary reads",
        "stem":  "The diagram compares four accounts: an LRS account with three copies in one datacenter, a ZRS account with three copies across three zones, a GRS account that replicates asynchronously to a paired region, and an RA-GRS account with the same secondary copy plus a readable secondary endpoint. Contoso\u0027s analysts must query blob data from the secondary region during a regional outage **before** Microsoft initiates any failover, and the account must keep a single writable primary region.\n\nWhich replication option meets the requirement?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Read-access geo-redundant storage (RA-GRS)"
                        },
                        {
                            "letter":  "B",
                            "text":  "Geo-redundant storage (GRS)"
                        },
                        {
                            "letter":  "C",
                            "text":  "Zone-redundant storage (ZRS)"
                        },
                        {
                            "letter":  "D",
                            "text":  "Locally redundant storage (LRS)"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "RA-GRS is built on GRS: data is committed locally with LRS, then replicated asynchronously to a secondary region that also uses LRS. The read-access suffix exposes a secondary endpoint that clients can query at any time, whether or not Microsoft has failed the account over. That satisfies reading during a regional outage before failover while keeping writes in one primary region. The secondary copy is eventually consistent, so reads may lag slightly.\n\n- **B** is wrong. With plain GRS the secondary data stays unavailable for reads until Microsoft initiates a failover.\n- **C** is wrong. ZRS keeps every replica inside one region, so a regional outage removes all access.\n- **D** is wrong. LRS offers no secondary region at all and is the least durable option.\n\nExam tip: only RA-GRS and RA-GZRS allow reads during a regional outage.",
        "source":  "Configure storage accounts — Determine replication strategies",
        "diagram":  "storage-redundancy"
    },
    {
        "id":  56,
        "domain":  "storage",
        "topic":  "In-place redundancy change",
        "stem":  "A storage account named stcontosowest uses GRS in West Europe. Auditors now require analysts to read a replica in the paired region during an outage, without waiting for a Microsoft-initiated failover. The account holds 40 TB, and the team wants the change finished today with the least administrative effort and no data copying.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Change the replication option of the existing account from GRS to RA-GRS in the portal."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a new RA-GRS account and copy all 40 TB with AzCopy."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable an object replication policy to a second account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Delete the account and recreate it as RA-GRS."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "GRS and RA-GRS share the same underlying replication; the read-access option is a setting on the account, not a different data layout. Changing the replication type from GRS to RA-GRS is an in-place, supported operation that updates the configuration and exposes the secondary read endpoint, with no data movement and no new account. The same in-place pattern applies to GRS to GZRS and RA-GRS to RA-GZRS. Converting from ZRS to a geo-redundant option is not supported in place.\n\n- **B** is wrong. Copying 40 TB changes endpoints, costs egress and duplicate storage, and takes far longer.\n- **C** is wrong. Object replication needs versioning, a policy, and a second account, and it copies blobs rather than changing redundancy.\n- **D** is wrong. Recreating the account destroys the data and all configuration.\n\nExam tip: redundancy changes between geo variants are in place; ZRS to GRS is the one needing migration.",
        "source":  "Configure storage accounts — Determine replication strategies"
    },
    {
        "id":  57,
        "domain":  "storage",
        "topic":  "Object replication prerequisites",
        "stem":  "Contoso plans to replicate container **media** from a West Europe account to a Southeast Asia account so that regional readers and compute jobs work on a local copy. A colleague proposes the policy design.\n\nWhich three statements about blob object replication are correct? (Choose three.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Blob versioning must be enabled on both the source and the destination account."
                        },
                        {
                            "letter":  "B",
                            "text":  "Object replication copies blob snapshots along with the blob content."
                        },
                        {
                            "letter":  "C",
                            "text":  "Source and destination containers can use different tiers among Hot, Cool, and Cold."
                        },
                        {
                            "letter":  "D",
                            "text":  "Object replication requires the destination container to use the Archive tier."
                        },
                        {
                            "letter":  "E",
                            "text":  "Object replication copies content, metadata, and versions asynchronously according to policy rules."
                        }
                    ],
        "answers":  [
                        "A",
                        "C",
                        "E"
                    ],
        "explanation":  "Object replication is asynchronous and policy-driven: you create a policy on the destination that names the source account and one or more rules pairing a source container with a destination container. Replicated items include the blob content, metadata and properties, and versions. Because versions are the unit of replication, **blob versioning must be enabled on both accounts**. Source and destination can sit in different tiers among Hot, Cool, and Cold, which lets you store the copy more cheaply.\n\n- **B** is wrong. Snapshots are not supported by object replication; snapshots on the source are not copied.\n- **D** is wrong. Archive is not supported for either side, since objects must stay readable in an online tier.\n\nExam tip: versioning on both sides, no snapshots, no Archive — those facts answer most items.",
        "source":  "Configure Azure Blob Storage — Determine blob object replication"
    },
    {
        "id":  58,
        "domain":  "storage",
        "topic":  "Object replication for read latency",
        "stem":  "A media company encodes video clips in West Europe and serves them to subscribers in Southeast Asia. Encoding jobs also run in both regions and must process the same source clips, and each region must be able to write derived files without affecting the other. Reads in Southeast Asia currently cross regions and latency is unacceptable.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An object replication policy from the West Europe account to a Southeast Asia account, with blob versioning enabled on both."
                        },
                        {
                            "letter":  "B",
                            "text":  "Change the West Europe account to RA-GRS and point readers at the secondary endpoint."
                        },
                        {
                            "letter":  "C",
                            "text":  "A lifecycle rule that moves clips to the Cool tier after seven days."
                        },
                        {
                            "letter":  "D",
                            "text":  "A private endpoint for the storage account in a Southeast Asia virtual network."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Object replication asynchronously copies blobs, metadata, and versions from a source container to a destination container in another account, which puts a local copy next to the consumers and removes the cross-region read hop. Because each account stays independently writable, encoding jobs in both regions can write derived files locally, and versioning on both accounts preserves the history the policy replicates. Replication follows per-container rules, so you can limit it to the clips that matter.\n\n- **B** is wrong. An RA-GRS secondary is read-only until failover, so the Southeast Asia jobs could not write derived files.\n- **C** is wrong. A lifecycle rule changes the storage tier; it does not place data in another region.\n- **D** is wrong. A private endpoint changes the network path, not the geographic location of the data.\n\nExam tip: object replication gives a writable local copy; RA-GRS gives read-only access during an outage.",
        "source":  "Configure Azure Blob Storage — Determine blob object replication"
    },
    {
        "id":  59,
        "domain":  "storage",
        "topic":  "Encryption model selection",
        "stem":  "Contoso\u0027s security team is reviewing how Azure Storage protects data at rest across several accounts, including one that must meet a requirement for double encryption with independent keys.\n\nWhich three statements about Azure Storage encryption are correct? (Choose three.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "All data written to Azure Storage is encrypted with 256-bit AES, and encryption at rest cannot be disabled."
                        },
                        {
                            "letter":  "B",
                            "text":  "Infrastructure encryption encrypts data twice, at the service level and the infrastructure level, using two different algorithms and two different keys."
                        },
                        {
                            "letter":  "C",
                            "text":  "Platform-managed keys require the customer to create a key vault in the same region as the account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Customer-managed keys can be stored in Azure Key Vault or in Azure Key Vault Managed HSM."
                        },
                        {
                            "letter":  "E",
                            "text":  "Encryption at rest is available only on premium storage accounts."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "D"
                    ],
        "explanation":  "Storage Service Encryption is always on: data is encrypted with 256-bit AES before it is written and decrypted transparently on read, at no extra charge and with no performance penalty. Keys can be platform-managed, in which case Azure generates and manages them, or customer-managed in a key vault or Managed HSM so you can create, disable, audit, and rotate them. Infrastructure encryption adds a second layer with a different algorithm and key, and must be enabled when the account or encryption scope is created.\n\n- **C** is wrong. Platform-managed keys are generated and stored by Azure; no customer key vault exists.\n- **E** is wrong. Encryption at rest applies to every storage account type, standard and premium alike.\n\nExam tip: infrastructure encryption must be chosen at creation and cannot be enabled later.",
        "source":  "Configure Azure Storage security — Determine Azure Storage encryption"
    },
    {
        "id":  60,
        "domain":  "storage",
        "topic":  "CMK key vault region",
        "stem":  "Contoso must encrypt stcontosofin with customer-managed keys. The storage account is in West Europe. The security team already has a key vault named kv-contoso-cmk in North Europe, in a different subscription, and wants to reuse a key from it without creating new resources.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a key vault in West Europe, then grant the storage account\u0027s managed identity get, wrap, and unwrap permissions on the key."
                        },
                        {
                            "letter":  "B",
                            "text":  "Use kv-contoso-cmk in North Europe; the storage account and key vault may be in different regions."
                        },
                        {
                            "letter":  "C",
                            "text":  "Export the key from kv-contoso-cmk and import it into the storage account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Use the storage account\u0027s primary access key as the encryption key."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The storage account and the key vault holding its customer-managed key must be in the **same region**, although they may be in different subscriptions and even different tenants. A vault in North Europe cannot wrap the data encryption key for a West Europe account, so a West Europe vault is required. You then grant the account\u0027s managed identity get, wrapKey, and unwrapKey on the key, and enable soft delete and purge protection so key deletion cannot destroy the data silently.\n\n- **B** is wrong. Cross-region key vaults are not supported for storage customer-managed keys.\n- **C** is wrong. Keys are referenced in place through the Key Vault API and never imported into the account.\n- **D** is wrong. Access keys authorize data requests and play no part in encryption key management.\n\nExam tip: same region with a different subscription is allowed — the region match is the hard rule.",
        "source":  "Configure Azure Storage security — Create customer-managed keys"
    },
    {
        "id":  61,
        "domain":  "storage",
        "topic":  "CMK rotation automation",
        "stem":  "Contoso encrypts stcontososecure with a customer-managed key in Key Vault. Policy requires a new key version every 90 days, with no manual steps, and data encrypted with earlier versions must remain readable. Administrators must not have to update the storage account each cycle.\n\nWhat is the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Configure an automatic rotation policy on the key in Key Vault and keep the storage account referencing the key without pinning a version."
                        },
                        {
                            "letter":  "B",
                            "text":  "Manually create a new key version every 90 days and update the account\u0027s key version setting."
                        },
                        {
                            "letter":  "C",
                            "text":  "Regenerate the storage account access keys every 90 days."
                        },
                        {
                            "letter":  "D",
                            "text":  "Recreate the storage account each quarter with a new key."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Key Vault supports rotation policies that generate a new key version on a schedule, with optional notifications before rotation. When the storage account references the key by identifier without a fixed version, it automatically uses the newest version, so no portal change is required each cycle, and older versions stay available to decrypt data written under them. The key must not be disabled or deleted, and the vault needs purge protection so retiring a version cannot make existing blobs unreadable.\n\n- **B** is wrong. Manual rotation is exactly the recurring work the requirement excludes, and a missed cycle risks an outage.\n- **C** is wrong. Access keys authorize requests; they do not encrypt data at rest or participate in versioning.\n- **D** is wrong. Recreating the account destroys data and is far more disruptive than rotating a key.\n\nExam tip: a versionless key reference plus a Key Vault rotation policy is the zero-touch pattern.",
        "source":  "Configure Azure Storage security — Create customer-managed keys"
    },
    {
        "id":  62,
        "domain":  "storage",
        "topic":  "AzCopy capabilities",
        "stem":  "Contoso is scripting a nightly transfer of 300 GB from an on-premises Windows file server into Blob Storage, and the operators also need to copy containers between two storage accounts in different subscriptions.\n\nWhich three statements about AzCopy are correct? (Choose three.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "AzCopy can copy data between containers and between storage accounts."
                        },
                        {
                            "letter":  "B",
                            "text":  "AzCopy is a graphical tool and cannot be scheduled from a script."
                        },
                        {
                            "letter":  "C",
                            "text":  "AzCopy can authenticate with a SAS token or with Microsoft Entra ID by using azcopy login."
                        },
                        {
                            "letter":  "D",
                            "text":  "AzCopy assigns Azure RBAC roles in the destination account."
                        },
                        {
                            "letter":  "E",
                            "text":  "AzCopy runs on Windows, Linux, and macOS and can be automated from the command line."
                        }
                    ],
        "answers":  [
                        "A",
                        "C",
                        "E"
                    ],
        "explanation":  "AzCopy is a command-line utility for Windows, Linux, and macOS that copies blobs and files to and from Blob Storage, across containers, and across storage accounts. Because it is scriptable, it can be scheduled from Task Scheduler, cron, Azure Automation, or a pipeline. Authentication options include a SAS token appended to the source or destination URL and Microsoft Entra ID through `azcopy login`, which is preferred for interactive and managed identity scenarios. It does not manage control-plane objects such as role assignments.\n\n- **B** is wrong. AzCopy has no graphical interface and is designed for scripted, repeatable transfers.\n- **D** is wrong. AzCopy moves data; role assignments are a control-plane task done in the portal, CLI, or PowerShell.\n\nExam tip: AzCopy moves data and Storage Explorer manages it — keep the transfer tool and the RBAC tool apart.",
        "source":  "Configure Azure Blob Storage — Manage blobs"
    },
    {
        "id":  63,
        "domain":  "storage",
        "topic":  "Storage Explorer external attachment",
        "stem":  "A partner organization grants Contoso read access to one blob container in its own subscription. The partner will not provide an account key and will not add Contoso users as guests in its tenant. You must browse and download blobs from that container by using Azure Storage Explorer.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Attach the container as a service by using its URL and the SAS token the partner supplied."
                        },
                        {
                            "letter":  "B",
                            "text":  "Attach the storage account by using the account name and key1."
                        },
                        {
                            "letter":  "C",
                            "text":  "Add the account by signing in with your own Microsoft Entra account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Install AzCopy and run a copy command against the container."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Storage Explorer can attach external storage in several ways, and the two SAS options fit this case: attach a storage account with a SAS, or attach a specific service such as a blob container with a SAS. Attaching the service scopes the connection to the single container the partner authorized, while the SAS carries the permissions and expiry. A SAS attachment relies on the data-plane token alone, which is why it works without guest access to the partner tenant, even though normal connections need management-plane permissions too.\n\n- **B** is wrong. An account name and key grant full control of the partner\u0027s entire account, which the partner refused to share.\n- **C** is wrong. Your Entra account has no role assignment in the partner tenant, so sign-in yields no access.\n- **D** is wrong. AzCopy copies data but is not the tool for browsing and managing that container.\n\nExam tip: SAS attachment is the only Storage Explorer path that avoids both a key and a guest account.",
        "source":  "Configure Azure Files — Use Azure Storage Explorer"
    },
    {
        "id":  64,
        "domain":  "storage",
        "topic":  "NFS share for Linux clients",
        "stem":  "A Linux rendering farm must mount an Azure file share natively. The workload does not support SMB, requires low latency, and must not depend on Active Directory in any form. The team wants the smallest configuration effort that satisfies these constraints.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A premium file share in a FileStorage account, created with the NFS protocol, then mounted by using the share\u0027s NFS mount command."
                        },
                        {
                            "letter":  "B",
                            "text":  "A standard GPv2 file share using SMB with identity-based authentication."
                        },
                        {
                            "letter":  "C",
                            "text":  "A standard file share with a stored access policy granting read access."
                        },
                        {
                            "letter":  "D",
                            "text":  "An SMB share exposed through a private endpoint."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure file shares support SMB and NFS, but identity-based authentication applies to SMB only; NFS shares rely on network-level and UNIX-style permissions instead of Active Directory. NFS shares require the premium file share tier in a FileStorage account, which also supplies the SSD-backed low latency the farm needs. Creating the share with the NFS protocol and mounting it with the generated command is one provisioning step, with no domain join and no per-client credentials.\n\n- **B** is wrong. SMB is unsupported by the workload, and identity-based authentication needs Active Directory, which is excluded.\n- **C** is wrong. A stored access policy governs SAS tokens for REST access; it does not make a share mountable over NFS.\n- **D** is wrong. A private endpoint changes the network path but leaves the share on SMB, which the workload cannot use.\n\nExam tip: NFS means premium FileStorage, no AD, and never the same share as SMB — though both can live in one account.",
        "source":  "Configure Azure Files — Manage Azure file shares"
    },
    {
        "id":  65,
        "domain":  "storage",
        "topic":  "File share snapshot restore",
        "stem":  "A user accidentally deletes the **Finance/2026** folder from an Azure file share. The share has daily snapshots, and the rest of the share is healthy. You must restore only that folder, keep all other current data untouched, and finish quickly.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Open the share snapshot, which is a read-only point-in-time copy, and copy the folder back into the live share."
                        },
                        {
                            "letter":  "B",
                            "text":  "Restore the entire share from the latest snapshot, replacing current content."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete and recreate the share, then copy everything back from a backup."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable blob soft delete and restore the folder from the soft-deleted container."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A share snapshot is an incremental, read-only, point-in-time copy taken at the share level, and it is exposed through a snapshot timestamp appended to the share URI, which makes it browsable from Previous Versions in File Explorer or from a mounted snapshot. Because it is a full logical view of the share at that moment, you can copy one folder out and leave everything else in place. File, folder, and full-share restores are supported, and a full restore needs only the latest snapshot.\n\n- **B** is wrong. A full-share restore overwrites newer data that nobody asked to roll back.\n- **C** is wrong. Recreating the share destroys snapshots and requires a slow full data copy.\n- **D** is wrong. Blob soft delete protects blob containers, not Azure file shares.\n\nExam tip: snapshots are share-level and read-only, but restore granularity is file, folder, or share.",
        "source":  "Configure Azure Files — Create file share snapshots"
    },
    {
        "id":  66,
        "domain":  "storage",
        "topic":  "File share soft delete retention",
        "stem":  "Contoso must be able to recover Azure file shares that are deleted by mistake, including the case where an administrator deletes the entire share. Deleted shares must remain recoverable for 30 days, and the setting must apply to every share in the account without per-share configuration.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable soft delete for file shares at the storage account and set the retention period to 30 days."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable blob soft delete for containers with a 30-day retention period."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable blob versioning on the account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Add a lifecycle management rule that deletes shares after 30 days."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Soft delete for Azure Files is enabled at the **storage account** level, so it applies to every share without per-share work. A deleted share moves to a soft-deleted state instead of being erased, and you choose a retention period between 1 and 365 days; 30 days satisfies the requirement. The setting works on new and existing shares and is a primary control against ransomware-driven deletion, because data is recoverable without paying a ransom or restoring from backup.\n\n- **B** is wrong. Blob container soft delete protects blob containers; file shares are a separate service with their own setting.\n- **C** is wrong. Versioning applies to blobs and does nothing for a deleted file share.\n- **D** is wrong. Lifecycle management expires blobs and cannot protect or recover a share.\n\nExam tip: soft delete retention for file shares is 1 to 365 days and is configured once, at the account.",
        "source":  "Configure Azure Files — Implement soft delete for Azure Files"
    },
    {
        "id":  67,
        "domain":  "storage",
        "topic":  "File share cost tier",
        "stem":  "A construction firm keeps project documentation on Azure file shares. Files are accessed heavily while a project runs, then read a few times a year after handover, but must stay online and mountable over SMB. Management wants the lowest storage cost for the completed projects with the least administrative effort.\n\nWhat should you use for the completed projects?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The Cool tier on a standard general-purpose v2 account."
                        },
                        {
                            "letter":  "B",
                            "text":  "The Premium tier on a FileStorage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "The Transaction optimized tier on a standard general-purpose v2 account."
                        },
                        {
                            "letter":  "D",
                            "text":  "The Hot tier on a standard general-purpose v2 account."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Standard Azure file shares offer three HDD-backed tiers on a general-purpose v2 account: transaction optimized, hot, and cool. Cool is intended for cost-efficient online archive and backup scenarios, so it keeps data available and mountable while charging less for capacity than hot or transaction optimized. Changing a standard share\u0027s tier is a configuration change on the share, so the effort is minimal compared with reprovisioning premium capacity.\n\n- **B** is wrong. Premium uses SSD with provisioned billing, the most expensive choice for rarely read archives.\n- **C** is wrong. Transaction optimized is priced for frequent access and costs more per gigabyte than cool.\n- **D** is wrong. Hot is the collaborative tier and is costlier than cool for idle data.\n\nExam tip: for standard file shares, cool is the online-archive tier; premium is never the cost-saving answer.",
        "source":  "Configure Azure Files — Manage Azure file shares"
    },
    {
        "id":  68,
        "domain":  "storage",
        "topic":  "Archive rehydration priority",
        "stem":  "A legal team must review five blobs held in the Archive tier. Each blob is 2 GB, and the team needs all of them readable within one hour. Cost is secondary to meeting the deadline. The blobs must remain available in an online tier for the review.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Rehydrate the blobs to an online tier by using Copy Blob with high priority."
                        },
                        {
                            "letter":  "B",
                            "text":  "Set the blob tier to Hot and wait for standard-priority rehydration."
                        },
                        {
                            "letter":  "C",
                            "text":  "Restore the blobs from a share snapshot."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable blob soft delete and recover the blobs."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Archive is an offline tier, so a blob must be rehydrated before it can be read. Two methods exist: Copy Blob, which is recommended because it creates a new blob in an online tier, and Set Blob Tier, which changes the tier in place. Both support standard priority, which can take up to 15 hours, and high priority, which completes within one hour for objects under 10 GB at higher cost. Five 2 GB blobs fit that high-priority envelope.\n\n- **B** is wrong. Standard priority is measured in hours, up to 15, which misses the deadline.\n- **C** is wrong. Share snapshots belong to Azure Files and have no bearing on archived blobs.\n- **D** is wrong. Soft delete recovers deleted blobs; it does not bring an archived blob online.\n\nExam tip: high-priority rehydration is the only sub-hour path out of Archive, for objects under 10 GB.",
        "source":  "Configure Azure Blob Storage — Assign blob access tiers"
    },
    {
        "id":  69,
        "domain":  "storage",
        "topic":  "Cool tier early deletion",
        "stem":  "An administrator moves 500 GB of blobs from Hot to Cool on 1 March. On 11 March the business decides the data is no longer needed and deletes those blobs. The account uses LRS.\n\nWhat charge should you expect for the deleted blobs?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An early deletion charge covering the remaining 20 days of the 30-day minimum retention period."
                        },
                        {
                            "letter":  "B",
                            "text":  "No charge, because the blobs were deleted before the minimum period ended."
                        },
                        {
                            "letter":  "C",
                            "text":  "A charge equal to reading all the data in the account."
                        },
                        {
                            "letter":  "D",
                            "text":  "A rehydration charge for moving the blobs back to Hot."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Each cool tier has a minimum storage duration: 30 days for Cool, 90 for Cold, and 180 for Archive. If a blob is deleted, overwritten, or moved to a warmer tier before that period ends, you are billed for the remaining days as an early deletion charge. Here the blobs spent 10 days in Cool, so 20 days remain of the 30-day minimum and that shortfall is charged. The data is gone, but the billing obligation for the committed duration is not.\n\n- **B** is wrong. Deleting early is exactly what triggers the charge rather than avoiding it.\n- **C** is wrong. A read-the-whole-account charge applies when changing the account tier from Cool to Hot.\n- **D** is wrong. Rehydration fees apply to Archive and to warming data, not to deletion from Cool.\n\nExam tip: memorize 30 / 90 / 180 days as the Cool, Cold, and Archive minimums, and note deletion does not escape them.",
        "source":  "Configure Azure Blob Storage — Assign blob access tiers"
    },
    {
        "id":  70,
        "domain":  "storage",
        "topic":  "Lifecycle policy rule scope",
        "stem":  "A media company wants to automate cost control for container **footage**. Rules must move blobs to cooler tiers as they age, remove old versions and snapshots, and apply only to selected content rather than the whole account.\n\nWhich three statements about lifecycle management policies are correct? (Choose three.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A rule can transition blobs from Hot to Cool, Cold, or Archive based on days since modification."
                        },
                        {
                            "letter":  "B",
                            "text":  "A rule can delete current versions, previous versions, and snapshots at the end of their lifecycle."
                        },
                        {
                            "letter":  "C",
                            "text":  "Rules can target specific containers or a subset of blobs filtered by name prefix or blob index tags."
                        },
                        {
                            "letter":  "D",
                            "text":  "Lifecycle policies support premium page blob accounts."
                        },
                        {
                            "letter":  "E",
                            "text":  "A lifecycle rule can move a blob directly from Archive to Hot without rehydrating it."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "Lifecycle management uses If/Then rules. The If clause evaluates age conditions such as days since modification or creation, and the Then clause performs a transition or an expiry. Supported transitions move data down the tiers, and deletion can target current versions, previous versions, and snapshots. Rules can cover the whole account, named containers, or a subset of blobs by name prefix or blob index tag, so a policy does not touch the wrong data. Policies apply to GPv2 and premium block blob accounts.\n\n- **D** is wrong. Premium page blob accounts are out of scope; page blobs are used for VM disks.\n- **E** is wrong. Archive is offline, so a blob must be rehydrated before it can be read or moved to an online tier.\n\nExam tip: lifecycle transitions only flow to cooler tiers; warming data up is a rehydration or copy operation.",
        "source":  "Configure Azure Blob Storage — Add blob lifecycle management rules"
    },
    {
        "id":  71,
        "domain":  "storage",
        "topic":  "Immutable blob retention",
        "stem":  "A financial services firm must keep trade records in container **ledger** for seven years. During that period no one — including subscription owners — may modify or delete the blobs. The control must be enforceable and auditable, and the records must remain readable.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A time-based retention policy on the container set to seven years, then lock the policy."
                        },
                        {
                            "letter":  "B",
                            "text":  "Blob soft delete with a 365-day retention period."
                        },
                        {
                            "letter":  "C",
                            "text":  "Blob versioning with a lifecycle rule that deletes old versions yearly."
                        },
                        {
                            "letter":  "D",
                            "text":  "A legal hold that is cleared at the end of each year."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Immutable storage for blobs provides WORM protection. A time-based retention policy specifies how long blobs in a container cannot be modified or deleted, and once the policy is **locked** it cannot be removed or shortened, which makes it enforceable even against subscription owners. During the retention interval blobs can be created and read; only modification and deletion are blocked. Seven years is a supported interval, and the locked state is what makes the control auditable.\n\n- **B** is wrong. Soft delete only retains deleted data for a window; it prevents neither deletion nor modification.\n- **C** is wrong. Versioning preserves history, but anyone with write access can still delete or overwrite the current blob.\n- **D** is wrong. A legal hold blocks changes until cleared, so clearing it yearly defeats a seven-year requirement.\n\nExam tip: a locked time-based retention policy is the only control that stops even an owner from deleting blobs.",
        "source":  "Configure Azure Blob Storage — Implement Azure Blob Storage (blob protection and immutability)"
    },
    {
        "id":  72,
        "domain":  "storage",
        "topic":  "Versioning and blob soft delete",
        "stem":  "A developer overwrites a production blob with a bad build, and a separate misconfigured script deletes 200 blobs from the same container. You must be able to restore the previous content of the overwritten blob and recover the deleted blobs for 14 days, without a backup product.\n\nWhat should you enable?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Blob versioning together with blob soft delete set to 14 days."
                        },
                        {
                            "letter":  "B",
                            "text":  "Blob versioning only."
                        },
                        {
                            "letter":  "C",
                            "text":  "Container soft delete only."
                        },
                        {
                            "letter":  "D",
                            "text":  "Object replication to a second account."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Blob versioning keeps every previous state of a blob as an immutable version, so an overwrite is recoverable by promoting the prior version. Versioning alone does not cover deletion: deleting the current blob removes it from the namespace even though versions remain. Blob soft delete retains deleted blobs, versions, and snapshots for a configured period, so pairing it with versioning handles both the overwrite and the deletions, and 14 days matches the requirement.\n\n- **B** is wrong. Versioning preserves prior content but does not by itself make deleted blobs recoverable.\n- **C** is wrong. Container soft delete restores a whole deleted container, not individual blobs deleted inside a surviving one.\n- **D** is wrong. Object replication copies data asynchronously and with a delay; it is not a restore mechanism.\n\nExam tip: versioning answers overwritten, soft delete answers deleted — a resilient container needs both.",
        "source":  "Configure Azure Blob Storage — Exercise: Provide storage for the public website"
    },
    {
        "id":  73,
        "domain":  "storage",
        "topic":  "Append blob for logging",
        "stem":  "An Azure Function writes diagnostic log entries to a single blob throughout the day, appending a few kilobytes at a time and never modifying earlier entries. Analysts read the whole file each morning. You want the blob type that requires the least administrative effort and performs best for this pattern.\n\nWhich blob type should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Block blob"
                        },
                        {
                            "letter":  "B",
                            "text":  "Page blob"
                        },
                        {
                            "letter":  "C",
                            "text":  "Append blob"
                        },
                        {
                            "letter":  "D",
                            "text":  "A table entity in Table Storage"
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "Append blobs are built from blocks but are optimized for append operations, which is exactly the write pattern of a growing log file. Each entry is appended without rewriting existing content, and the blob is read sequentially the next morning. Block blobs are the default for text and binary files but require you to manage and commit block lists for incremental writes, while page blobs target random read and write of 512-byte pages, such as VM disks.\n\n- **A** is wrong. A block blob works, but appending means staging and committing blocks yourself, which is more effort.\n- **B** is wrong. Page blobs serve sparse, random-access data and are limited to 8 TB, with no append semantics.\n- **D** is wrong. Table Storage is a schemaless key/attribute store, not a log file read end to end.\n\nExam tip: append for logs, block for documents and media, page for VHDs — and the type cannot change later.",
        "source":  "Configure Azure Blob Storage — Manage blobs"
    },
    {
        "id":  74,
        "domain":  "storage",
        "topic":  "Anonymous container access level",
        "stem":  "Contoso\u0027s public website must display product images straight from Blob Storage over HTTPS. Visitors must be able to read any image by URL but must not be able to list the container\u0027s contents. The account currently blocks all anonymous access.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable **Allow Blob anonymous access** on the account and set the container\u0027s public access level to **Blob**."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable anonymous access on the account and set the container\u0027s public access level to **Container**."
                        },
                        {
                            "letter":  "C",
                            "text":  "Issue one SAS token per image and embed each token in the page."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign Storage Blob Data Reader to the anonymous users group."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A container\u0027s public access level takes effect only when the storage account\u0027s **Allow Blob anonymous access** setting is enabled; otherwise every container stays private regardless of its own setting. Once enabled, the **Blob** level grants anonymous read for blobs only, which lets visitors fetch an image by URL without exposing a listing. The **Container** level would also allow anonymous listing of every blob name, which the requirement excludes.\n\n- **B** is wrong. Container-level access adds list permission, which leaks the full inventory of blob names.\n- **C** is wrong. Per-image SAS tokens are unmanageable at web scale and expire, breaking pages later.\n- **D** is wrong. There is no anonymous users group to assign RBAC roles to; RBAC requires an identity.\n\nExam tip: Blob level means read without list; Container level means read plus list.",
        "source":  "Configure Azure Blob Storage — Create blob containers"
    },
    {
        "id":  75,
        "domain":  "storage",
        "topic":  "Secure transfer and TLS version",
        "stem":  "A security assessment reports that stcontosoprod accepts requests over plain HTTP and still permits TLS 1.0 and 1.1. You must enforce HTTPS and a minimum of TLS 1.2 for every client, including clients that use SAS tokens, with the least administrative effort and no changes to application code.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Set **Secure transfer required** to Enabled and **Minimum TLS version** to 1.2 on the storage account."
                        },
                        {
                            "letter":  "B",
                            "text":  "Generate a SAS for each client with the protocol parameter set to HTTPS only."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a private endpoint for the blob service in each virtual network."
                        },
                        {
                            "letter":  "D",
                            "text":  "Disable shared key access on the storage account."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Both controls are account-level properties applied by the storage service before a request is processed. **Secure transfer required** rejects any request made over HTTP, and **Minimum TLS version** rejects connections negotiated below the configured version, so no client code changes and no per-client tokens are needed. Rejecting weak transport is the account owner\u0027s responsibility, and existing accounts should explicitly disallow TLS 1.0 and 1.1 because those versions are deprecated.\n\n- **B** is wrong. A SAS protocol parameter constrains that one token; other clients could still use HTTP.\n- **C** is wrong. A private endpoint changes the network path, not the transport protocol or TLS version.\n- **D** is wrong. Disabling shared key changes how requests authenticate, not whether they use HTTPS.\n\nExam tip: HTTPS and TLS minimums are account settings, so they cover every client and every SAS at once.",
        "source":  "Configure Azure Storage security — Review Azure Storage security strategies"
    },
    {
        "id":  76,
        "domain":  "compute",
        "topic":  "Template idempotency",
        "stem":  "A template deploys a storage account and a virtual network into a resource group. A colleague adds a new subnet to the `virtualNetwork` resource and redeploys the same template to the same resource group. The storage account definition is unchanged and no other edits were made.\n\nWhat is the result of the redeployment?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The deployment fails because the resources already exist."
                        },
                        {
                            "letter":  "B",
                            "text":  "The storage account is left unchanged, and the new subnet is added."
                        },
                        {
                            "letter":  "C",
                            "text":  "The storage account is deleted and recreated with the same settings."
                        },
                        {
                            "letter":  "D",
                            "text":  "All resources in the resource group are deleted and redeployed."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "ARM templates are idempotent, so redeploying the same template converges the environment on the declared state. Resource Manager creates a resource only when it does not exist and updates it only when a property in the template differs from the deployed state. Because the storage account definition is unchanged, no operation is performed on that resource, while the added subnet is created.\n\n- **A** is wrong. Existing resources defined by the same template are updated in place; they are not treated as conflicts.\n- **C** is wrong. Resource Manager patches the difference instead of deleting and recreating the resource.\n- **D** is wrong. Incremental mode, the default, leaves resources that are absent from the template alone and never deletes the resource group.\n\nExam tip: when a redeployment reports success but \"nothing changed\", open the deployment\u0027s operation list; unchanged resources show no operation.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Explore Azure Resource Manager template structure"
    },
    {
        "id":  77,
        "domain":  "compute",
        "topic":  "secureString parameters",
        "stem":  "A template that deploys a Windows virtual machine currently defines `adminPassword` as type `string` with `\"defaultValue\": \"P@ssw0rd123!\"`. Security review requires that the password is never visible after deployment and that the template never supplies a default.\n\nWhat should you change?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Change the parameter type to `secureString` and remove `defaultValue`."
                        },
                        {
                            "letter":  "B",
                            "text":  "Change the parameter type to `secureObject` and keep the default value."
                        },
                        {
                            "letter":  "C",
                            "text":  "Keep the type as `string` and add the password to `allowedValues`."
                        },
                        {
                            "letter":  "D",
                            "text":  "Move the password from the parameters section to the variables section."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "`secureString` is the parameter type intended for passwords and secrets, and `secureObject` is the equivalent for JSON objects containing sensitive data. Values supplied to secure types are not returned in deployment history, the portal, or command output, and the documentation explicitly warns against hardcoding or defaulting usernames and passwords in templates. Removing the default forces the pipeline to supply the value at deployment time.\n\n- **B** is wrong. `secureObject` is for structured secrets, and a default value would still ship a known password with the template.\n- **C** is wrong. `allowedValues` documents acceptable strings and is fully visible; it adds no protection.\n- **D** is wrong. Variables are part of the template, so the password would be readable in source control and deployment history.\n\nExam tip: pair every credential parameter with `secureString` and no default, and pass the value from Key Vault or a pipeline secret.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Add flexibility to your Azure Resource Manager template by using parameters and outputs"
    },
    {
        "id":  78,
        "domain":  "compute",
        "topic":  "Required template sections",
        "stem":  "You are reviewing a JSON template before it is committed. The template also contains `parameters`, `variables`, `functions`, `apiProfile`, and `outputs` sections, but you must confirm that the mandatory sections are present.\n\nWhich three sections must every template contain? Select three.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "`schema`"
                        },
                        {
                            "letter":  "B",
                            "text":  "`variables`"
                        },
                        {
                            "letter":  "C",
                            "text":  "`contentVersion`"
                        },
                        {
                            "letter":  "D",
                            "text":  "`outputs`"
                        },
                        {
                            "letter":  "E",
                            "text":  "`resources`"
                        }
                    ],
        "answers":  [
                        "A",
                        "C",
                        "E"
                    ],
        "explanation":  "Three sections are required. `$schema` points at the JSON schema that describes the template structure and varies with deployment scope, `contentVersion` records the version of the template so you can tell which revision was deployed, and `resources` declares the items to create or update. Every other section in the template is optional and exists to make the template reusable or easier to read. Validation fails immediately when any of the three is missing, before any resource is evaluated.\n\n- **B** is wrong. `variables` is optional and only simplifies repeated expressions; a template without it is valid.\n- **D** is wrong. `outputs` is optional and is used only when a later step needs a returned value such as an endpoint or resource ID.\n\nExam tip: `parameters` looks mandatory in samples but is optional; only `$schema`, `contentVersion`, and `resources` break validation when missing.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Explore Azure Resource Manager template structure"
    },
    {
        "id":  79,
        "domain":  "compute",
        "topic":  "Parameter allowed values",
        "stem":  "A template defines a `storageSKU` parameter with type `string`, `\"defaultValue\": \"Standard_LRS\"`, and `allowedValues` of `Standard_LRS`, `Standard_GRS`, `Standard_ZRS`, and `Premium_LRS`. A pipeline passes `storageSKU=Basic`, and no resource with that name exists yet.\n\nWhat happens when the deployment runs?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The deployment succeeds and silently uses the default value."
                        },
                        {
                            "letter":  "B",
                            "text":  "The deployment fails validation and no resources are created."
                        },
                        {
                            "letter":  "C",
                            "text":  "The deployment succeeds and creates a `Standard_LRS` account."
                        },
                        {
                            "letter":  "D",
                            "text":  "The storage account is created, and then the deployment fails."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "`allowedValues` constrains the input during template validation, which happens before Resource Manager starts creating resources. Passing `Basic` therefore fails the deployment with a validation error, and nothing is provisioned. The same pre-flight validation checks schema correctness and other constraints such as `minLength`, `maxLength`, `minValue`, and `maxValue`, so invalid input never reaches the resource provider.\n\n- **A** is wrong. A default is applied only when the parameter is omitted, not when an invalid value is supplied.\n- **C** is wrong. Azure does not substitute a permitted value; the deployment is rejected.\n- **D** is wrong. Validation runs before any resource operation, so no partial deployment occurs.\n\nExam tip: treat `allowedValues` as a guardrail for downstream environments; a failed validation is cheaper than a half-built resource group.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Exercise - Add parameters and outputs to your Azure Resource Manager template"
    },
    {
        "id":  80,
        "domain":  "compute",
        "topic":  "Deployment outputs",
        "stem":  "A pipeline deploys a storage account whose name is supplied by a parameter named `storageName`. A later pipeline stage needs the account\u0027s blob endpoint but must not run a separate lookup against the resource.\n\nWhat should you add to the template?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An `outputs` entry whose value is `[reference(parameters(\u0027storageName\u0027)).primaryEndpoints]`."
                        },
                        {
                            "letter":  "B",
                            "text":  "An entry in the `variables` section that stores the endpoint."
                        },
                        {
                            "letter":  "C",
                            "text":  "A `dependsOn` entry on the storage account resource."
                        },
                        {
                            "letter":  "D",
                            "text":  "A `copy` loop in the `outputs` section."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The `outputs` section returns values after a successful deployment, and those values are visible in the portal\u0027s deployment history and in CLI or PowerShell output. The `reference` function retrieves the runtime state of a deployed resource, so `reference(...).primaryEndpoints` returns the blob, queue, table, and file endpoints without a second API call from the pipeline.\n\n- **B** is wrong. Variables are evaluated while the template is processed and cannot hold the runtime properties of a resource that does not exist yet.\n- **C** is wrong. `dependsOn` only controls deployment ordering and returns nothing to the caller.\n- **D** is wrong. `copy` in outputs returns multiple values from an array; a single endpoint needs no loop.\n\nExam tip: feed outputs into later stages, for example a storage endpoint into an app setting, instead of hardcoding endpoints per environment.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Add flexibility to your Azure Resource Manager template by using parameters and outputs"
    },
    {
        "id":  81,
        "domain":  "compute",
        "topic":  "Explicit dependencies",
        "stem":  "A template creates a network interface and then a virtual machine. The VM\u0027s `networkProfile` references the NIC by resource ID, but the NIC name is supplied as a parameter, so Resource Manager cannot infer the relationship. Deployments intermittently fail because the VM starts before the NIC exists.\n\nWhat should you add?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A `dependsOn` property on the VM resource that references the NIC."
                        },
                        {
                            "letter":  "B",
                            "text":  "A second template that deploys the NIC separately."
                        },
                        {
                            "letter":  "C",
                            "text":  "An `apiProfile` section that pins the compute API version."
                        },
                        {
                            "letter":  "D",
                            "text":  "A `copy` count on the VM resource."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Resource Manager builds a dependency graph and creates independent resources in parallel. It infers a dependency when one resource\u0027s property contains the `reference` function or a `resourceId` built from a literal resource name, but a name passed in as a parameter hides that relationship. An explicit `dependsOn` entry restores the ordering so the NIC is complete before the VM is created.\n\n- **B** is wrong. Splitting the deployment hides the ordering problem rather than declaring it and adds operational overhead.\n- **C** is wrong. `apiProfile` only supplies default API versions for resources; it has no effect on ordering.\n- **D** is wrong. `copy` creates multiple instances and would create competing VMs, not fix sequencing.\n\nExam tip: Bicep expresses the same dependency by referencing the symbolic name, which is why explicit `dependsOn` is rarely needed there.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Explore Azure Resource Manager template structure"
    },
    {
        "id":  82,
        "domain":  "compute",
        "topic":  "Linked templates",
        "stem":  "A main template deploys shared networking and links three child templates that are stored in a storage account container. Anonymous access to the container is disabled, and the deployment fails because Resource Manager cannot read the child templates.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Generate a SAS token with read permissions for the container and pass it to the template as a `secureString` parameter."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable anonymous public access on the container."
                        },
                        {
                            "letter":  "C",
                            "text":  "Copy the child templates into the `variables` section of the main template."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign Storage Blob Data Reader to the administrator who runs the deployment."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Linked templates must be reachable over HTTPS by the deployment service when the main template runs. The documented pattern is to store the child templates in a storage account and append a SAS token that grants read access, passing that token into the template as a `secureString` so it is not logged. The main template then concatenates the template link and the token.\n\n- **B** is wrong. Public access to the container exposes the templates to anyone who guesses the URL.\n- **C** is wrong. Embedding child templates inflates the main template, loses the modular benefit, and is not the linking mechanism.\n- **D** is wrong. The deployment service fetches the linked template, so the operator\u0027s data-plane role does not grant that access.\n\nExam tip: linked templates combined with a SAS token kept in Key Vault is the classic pattern; template specs are the modern alternative.",
        "source":  "Deploy Azure infrastructure by using JSON ARM templates — Explore Azure Resource Manager template structure"
    },
    {
        "id":  83,
        "domain":  "compute",
        "topic":  "Bicep decompile",
        "stem":  "A team has a working 900-line JSON template that was exported from the portal. They want a Bicep starting point quickly, but they intend to keep the JSON file in source control until the Bicep version has been reviewed.\n\nWhich approach requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Run `bicep decompile` against the JSON file, then correct the reported issues."
                        },
                        {
                            "letter":  "B",
                            "text":  "Rewrite the template by hand in Bicep and compare the compiled JSON output."
                        },
                        {
                            "letter":  "C",
                            "text":  "Publish the JSON template as a template spec and reference the spec from Bicep."
                        },
                        {
                            "letter":  "D",
                            "text":  "Run `bicep build` to generate a Bicep file from the JSON file."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "`bicep decompile` converts an ARM JSON template into Bicep source. It is a best-effort conversion: the tool emits warnings where it cannot produce clean Bicep, for example with `copy` loops, nested templates, or complex expressions, so you fix those spots and review the result. This gives a working starting point in minutes, which is exactly what the team asked for.\n\n- **B** is wrong. A full manual rewrite is the highest-effort option and is what decompile is designed to avoid.\n- **C** is wrong. A template spec packages and versions a JSON template for deployment; it does not produce Bicep source.\n- **D** is wrong. `bicep build` goes the other direction, compiling Bicep into JSON.\n\nExam tip: remember the pair: build is Bicep to JSON, decompile is JSON to Bicep.",
        "source":  "AZ-104 objective: Automate deployment of resources by using ARM templates or Bicep files — Convert an ARM template to a Bicep template"
    },
    {
        "id":  84,
        "domain":  "compute",
        "topic":  "What-if analysis",
        "stem":  "A change advisory board must see the impact of a Bicep deployment before approving it, and no changes may be made during the review. You plan to run the what-if operation against the production resource group.\n\nWhich two statements describe what-if? Select two.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "It reports each resource change as create, modify, delete, no-change, or ignore."
                        },
                        {
                            "letter":  "B",
                            "text":  "It applies the changes once the reviewer approves them in the same operation."
                        },
                        {
                            "letter":  "C",
                            "text":  "It does not make changes to existing resources."
                        },
                        {
                            "letter":  "D",
                            "text":  "It confirms that quota is available for every resource in the target region."
                        },
                        {
                            "letter":  "E",
                            "text":  "It deploys into a sandbox subscription so the production group is untouched."
                        }
                    ],
        "answers":  [
                        "A",
                        "C"
                    ],
        "explanation":  "What-if evaluates the template and compares it with the deployed state, then lists the predicted operations per resource, including creates, modifies, deletes, no-change, and ignored resources. It is a read-only preview, so production resources are untouched, which makes it suitable for a review gate. Because it is a prediction, it does not guarantee the deployment will succeed.\n\n- **B** is wrong. What-if never applies changes; you run a separate deployment after approval.\n- **D** is wrong. Quota, policy, SKU availability, and permissions are still evaluated at deployment time and can block a change that what-if listed.\n- **E** is wrong. What-if targets the resource group or subscription you specify, not a sandbox copy.\n\nExam tip: run what-if in the pipeline and publish the diff as an artifact for reviewers, then deploy the same commit.",
        "source":  "AZ-104 objective: Automate deployment of resources by using ARM templates or Bicep files — Preview changes by using the what-if operation"
    },
    {
        "id":  85,
        "domain":  "compute",
        "topic":  "Bicep deployment",
        "stem":  "A repository contains `main.bicep` and `main.parameters.json`. A GitHub Actions runner with the Azure CLI must deploy the template to the resource group `rg-app` in the connected subscription.\n\nWhich command requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "`az deployment group create --resource-group rg-app --template-file main.bicep --parameters main.parameters.json`"
                        },
                        {
                            "letter":  "B",
                            "text":  "`bicep build main.bicep`, commit the JSON, then deploy the generated JSON file."
                        },
                        {
                            "letter":  "C",
                            "text":  "`az bicep decompile main.bicep`, then deploy the generated JSON file."
                        },
                        {
                            "letter":  "D",
                            "text":  "Copy the Bicep content into a template spec version, then deploy the spec."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The Azure CLI transpiles Bicep to JSON in-process, so `az deployment group create` accepts a `.bicep` file directly and no separate build step is needed. The parameters file is supplied in the same command. This keeps one source of truth in the repository and removes an artifact step from the pipeline.\n\n- **B** is wrong. Compiling and committing JSON adds a build step and a second artifact to keep in sync; it is useful for validation, not for deployment.\n- **C** is wrong. `decompile` converts JSON into Bicep, so it cannot be applied to a Bicep file.\n- **D** is wrong. Publishing a template spec is legitimate for sharing versioned templates but is far more work than a direct deployment.\n\nExam tip: use `az bicep build` or `bicep lint` as a pipeline validation gate, then deploy the `.bicep` file itself.",
        "source":  "AZ-104 objective: Automate deployment of resources by using ARM templates or Bicep files — Deploy a Bicep file by using the Azure CLI"
    },
    {
        "id":  86,
        "domain":  "compute",
        "topic":  "Template export",
        "stem":  "You exported the template for the resource group that hosts a production virtual machine, and you now need to deploy a similar stack into a new resource group in a different region. The export completed successfully.\n\nWhat must you do before deploying the exported template?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Deploy it as-is; the export is parameterized automatically."
                        },
                        {
                            "letter":  "B",
                            "text":  "Add parameters for names, region, and SKUs, and remove values that are specific to the source environment."
                        },
                        {
                            "letter":  "C",
                            "text":  "Download the deployment history instead, because export produces only a parameter file."
                        },
                        {
                            "letter":  "D",
                            "text":  "Delete the source resource group first, because the exported template references source resource IDs."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "An exported template is a snapshot of what exists, so names, locations, SKUs, and tags are usually hardcoded and reflect the source environment. To reuse it elsewhere you introduce parameters for the values that vary, remove resources you do not want to recreate, and check `dependsOn` and API versions. Export is also not available for every resource type, so review what was actually captured.\n\n- **A** is wrong. Deploying as-is collides with existing globally unique names and pins the deployment to the original region and SKUs.\n- **C** is wrong. Export produces a template, and optionally a parameters file; deployment history is a separate record.\n- **D** is wrong. Nothing requires deleting the source, and doing so would cause an outage.\n\nExam tip: treat an exported template as a drafting aid, not production code, because it captures the current state rather than intent.",
        "source":  "Introduction to Azure virtual machines — Describe the options available to create and manage an Azure Virtual Machine"
    },
    {
        "id":  87,
        "domain":  "compute",
        "topic":  "Bicep modules",
        "stem":  "Four application teams each maintain their own Bicep file. Every deployment needs the same hub virtual network with three subnets, which the network team already deployed and owns. You must avoid duplicating the network definition and must not redeploy or modify the network.\n\nWhat should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A `network.bicep` module that declares the VNet with the `existing` keyword, called from each application file."
                        },
                        {
                            "letter":  "B",
                            "text":  "A copy of the VNet resource block inside each application Bicep file."
                        },
                        {
                            "letter":  "C",
                            "text":  "A variable in each application file that stores the VNet resource ID."
                        },
                        {
                            "letter":  "D",
                            "text":  "A decompiled copy of the network team\u0027s JSON template in each application file."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A Bicep module is a reusable file consumed with a `module` declaration, so the network definition lives in one place and is versioned once. Declaring the VNet with the `existing` keyword tells Bicep to read the resource rather than deploy it, and outputs can pass the subnet names or IDs back to the calling file. This satisfies reuse without changing a resource the network team owns.\n\n- **B** is wrong. Duplicating the resource block invites drift and would attempt to redeploy or reconfigure a network the team does not own.\n- **C** is wrong. A string variable holding an ID gives no typed reference and no shared definition, so every file still hardcodes values.\n- **D** is wrong. Copying exported JSON duplicates the definition and is not a module.\n\nExam tip: use `existing` plus module outputs to consume shared platform resources without taking ownership of them.",
        "source":  "AZ-104 objective: Automate deployment of resources by using ARM templates or Bicep files — Reuse templates by using Bicep modules"
    },
    {
        "id":  88,
        "domain":  "compute",
        "topic":  "Memory optimized sizes",
        "stem":  "A virtual machine will host an in-memory OLTP database and a large relational cache. The workload needs a high memory-to-CPU ratio, and cost is secondary to performance.\n\nWhich VM size family should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Compute optimized"
                        },
                        {
                            "letter":  "B",
                            "text":  "Memory optimized"
                        },
                        {
                            "letter":  "C",
                            "text":  "Storage optimized"
                        },
                        {
                            "letter":  "D",
                            "text":  "GPU"
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure groups VM sizes by workload profile. Memory optimized sizes are built with a high memory-to-CPU ratio and are recommended for relational database servers, medium-to-large caches, and in-memory analytics. That matches an in-memory OLTP database, where the working set must stay resident in RAM and CPU is not the bottleneck.\n\n- **A** is wrong. Compute optimized sizes have a high CPU-to-memory ratio and suit batch jobs, network appliances, and medium-traffic web servers.\n- **C** is wrong. Storage optimized sizes provide high disk throughput and IOPS for database storage, but not the memory footprint this workload needs.\n- **D** is wrong. GPU sizes target graphics rendering, video editing, and model training or inferencing.\n\nExam tip: filter the size list by workload type first, then pick the smallest size in the family that fits memory and vCPU requirements.",
        "source":  "Introduction to Azure virtual machines — Compile a checklist for creating an Azure Virtual Machine"
    },
    {
        "id":  89,
        "domain":  "compute",
        "topic":  "VM resize",
        "stem":  "A production virtual machine runs as Standard_D4s_v3. It must be resized to Standard_E16s_v3, but that size is not offered on the hardware cluster where the VM currently runs, and the resize fails while the VM is running.\n\nWhich action requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Stop (deallocate) the VM, change the size, and start the VM."
                        },
                        {
                            "letter":  "B",
                            "text":  "Delete the VM and recreate it from the exported template with the new size."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a new availability set and move the VM into it."
                        },
                        {
                            "letter":  "D",
                            "text":  "Retry the resize with Azure CLI, which ignores cluster availability."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A running VM can only be resized to a size the current hardware cluster supports, and the resize reboots the guest. Stopping with deallocation removes the VM from that cluster, after which any size available in the region can be selected. This is the fastest path and preserves the VM\u0027s identity, disks, and network configuration.\n\n- **B** is wrong. Recreating the VM is far more work and risks losing configuration when the exported template is incomplete.\n- **C** is wrong. A VM can only join an availability set at creation, so this does not solve the cluster constraint.\n- **D** is wrong. The CLI and PowerShell surface the same platform error; they do not bypass placement.\n\nExam tip: expect a reboot and possibly a new IP address on resize, so schedule production resizes in a maintenance window.",
        "source":  "Introduction to Azure virtual machines — Compile a checklist for creating an Azure Virtual Machine"
    },
    {
        "id":  90,
        "domain":  "compute",
        "topic":  "Ultra disk",
        "stem":  "A scale-up SAP HANA deployment needs a data disk that can deliver up to 160,000 IOPS and 4,000 MB/s with the lowest latency available for Azure managed disks.\n\nWhich disk type should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Ultra disk"
                        },
                        {
                            "letter":  "B",
                            "text":  "Premium SSD"
                        },
                        {
                            "letter":  "C",
                            "text":  "Standard SSD"
                        },
                        {
                            "letter":  "D",
                            "text":  "Standard HDD"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Ultra disks are the highest-performance managed disk tier, reaching 160,000 IOPS and 4,000 MB/s with a maximum size of 65,536 GiB. Microsoft positions them for IO-intensive workloads such as SAP HANA, top-tier databases, and transaction-heavy systems, which is exactly the stated requirement.\n\n- **B** is wrong. Premium SSD peaks at 20,000 IOPS and 900 MB/s, well below the requirement.\n- **C** is wrong. Standard SSD peaks at 6,000 IOPS and 750 MB/s and targets web servers and light workloads.\n- **D** is wrong. Standard HDD peaks at 2,000 IOPS and 500 MB/s and is intended for backup and infrequent access.\n\nExam tip: Ultra disks and Premium SSD v2 cannot be used as an OS disk, and Ultra has extra prerequisites such as region and zone support.",
        "source":  "Introduction to Azure virtual machines — Compile a checklist for creating an Azure Virtual Machine"
    },
    {
        "id":  91,
        "domain":  "compute",
        "topic":  "OS disk types",
        "stem":  "A production VM needs the managed disk type with the highest performance that can still be used as an operating system disk. The OS volume will stay below 1 TiB.\n\nWhich disk type should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Ultra disk"
                        },
                        {
                            "letter":  "B",
                            "text":  "Premium SSD v2"
                        },
                        {
                            "letter":  "C",
                            "text":  "Premium SSD"
                        },
                        {
                            "letter":  "D",
                            "text":  "Standard HDD"
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "The disk comparison table lists Ultra disk and Premium SSD v2 as not usable as an OS disk, which leaves Premium SSD as the highest-performing option that can hold the operating system. Premium SSD supports up to 32,767 GiB, 20,000 IOPS, and 900 MB/s and targets production, performance-sensitive workloads.\n\n- **A** is wrong. Ultra disk offers 160,000 IOPS but is data-disk only.\n- **B** is wrong. Premium SSD v2 offers 80,000 IOPS but is also data-disk only.\n- **D** is wrong. Standard HDD is valid as an OS disk but is the slowest tier, suited to backup and noncritical workloads.\n\nExam tip: put the OS on Premium SSD and attach Ultra or Premium SSD v2 only as data disks when the workload needs extreme throughput.",
        "source":  "Introduction to Azure virtual machines — Compile a checklist for creating an Azure Virtual Machine"
    },
    {
        "id":  92,
        "domain":  "compute",
        "topic":  "NIC-level NSG",
        "stem":  "Three virtual machines share the subnet `snet-app`, whose network security group allows inbound HTTPS from the internet. A single VM named `vm-report` must stop accepting internet traffic, while the other two VMs must keep serving users.\n\nWhich action requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create an NSG with a deny inbound rule and associate it with `vm-report`\u0027s network interface."
                        },
                        {
                            "letter":  "B",
                            "text":  "Add a deny rule for port 443 to the NSG associated with `snet-app`."
                        },
                        {
                            "letter":  "C",
                            "text":  "Deploy Azure Firewall in the virtual network with a deny rule for `vm-report`."
                        },
                        {
                            "letter":  "D",
                            "text":  "Add a user-defined route that sends internet traffic to a network virtual appliance."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Network security groups can be associated with a subnet and with individual network interfaces. Inbound traffic is evaluated against the subnet NSG first and then the NIC NSG, so a deny rule on the NIC blocks internet access for that one VM without affecting its neighbours. NSGs have no additional cost, which makes this the smallest change that meets the requirement.\n\n- **B** is wrong. A subnet-level deny would block HTTPS for all three VMs.\n- **C** is wrong. Azure Firewall is a costly, broad control for filtering one VM\u0027s inbound traffic.\n- **D** is wrong. User-defined routes change the traffic path, not whether the VM accepts the connection.\n\nExam tip: use subnet NSGs for tier-wide rules and NIC NSGs for exceptions on individual VMs.",
        "source":  "Introduction to Azure virtual machines — Compile a checklist for creating an Azure Virtual Machine"
    },
    {
        "id":  93,
        "domain":  "compute",
        "topic":  "Availability set rules",
        "stem":  "You plan an availability set for four web-tier virtual machines that will run behind a load balancer.\n\nWhich three statements about the availability set are true? Select three.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The VMs should perform the same function and run the same software."
                        },
                        {
                            "letter":  "B",
                            "text":  "A VM can be added to the set only when the VM is created."
                        },
                        {
                            "letter":  "C",
                            "text":  "Azure spreads the VMs across multiple fault domains."
                        },
                        {
                            "letter":  "D",
                            "text":  "The number of update domains can be changed after the set is created."
                        },
                        {
                            "letter":  "E",
                            "text":  "The set protects the application from operating system and application-level failures."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "An availability set groups related VMs so that a single point of failure does not take down the whole tier. Members should be interchangeable, meaning the same function and software, and Azure places them across separate physical servers, racks, storage units, and network switches. Membership is fixed at creation time, so changing the set for an existing VM means deleting and recreating it. Each VM lands in one update domain and one fault domain, which is how Azure avoids rebooting or losing the entire tier at once.\n\n- **D** is wrong. The update domain count, between 1 and 20 and defaulting to 5, is immutable after creation.\n- **E** is wrong. Availability sets do not protect against OS or application faults; backups and application-level redundancy cover those.\n\nExam tip: separate each application tier into its own availability set and put a load balancer in front of it.",
        "source":  "Configure virtual machine availability — Create availability sets"
    },
    {
        "id":  94,
        "domain":  "compute",
        "topic":  "Update domain count",
        "stem":  "Compliance requires that planned platform maintenance reboot at most one tenth of a tier\u0027s virtual machines at a time. You therefore need 10 update domains, but the existing availability set was created with the default value.\n\nWhat must you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Edit the update domain count on the availability set in the portal."
                        },
                        {
                            "letter":  "B",
                            "text":  "Delete the availability set, recreate it with 10 update domains, and redeploy the VMs into it."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create five additional update domains by using Azure PowerShell."
                        },
                        {
                            "letter":  "D",
                            "text":  "Move the VMs into an availability zone, which provides 10 update domains."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "An availability set supports between 1 and 20 update domains and defaults to 5 when you do not specify a value. The count is immutable after creation, and a VM can only join an availability set while it is being created. Meeting the requirement therefore means deleting the set, recreating it with 10 update domains, and redeploying the VMs.\n\n- **A** is wrong. The portal has no field to change the count on an existing set.\n- **C** is wrong. Update domains are properties of the availability set, not separate objects you can add.\n- **D** is wrong. Zones give three fault domains and three update domains per the module, not ten.\n\nExam tip: choose the update domain count at design time; retrofitting it costs a full redeploy.",
        "source":  "Configure virtual machine availability — Review update domains and fault domains"
    },
    {
        "id":  95,
        "domain":  "compute",
        "topic":  "Availability zones",
        "stem":  "A payroll API runs on virtual machines in West Europe. It must survive the loss of an entire datacenter in the region, each VM must run in a distinct physically separate zone, and the design must achieve a 99.99% SLA for the VMs.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Three VMs in a single availability set."
                        },
                        {
                            "letter":  "B",
                            "text":  "Three VMs, one in each of three availability zones in the region."
                        },
                        {
                            "letter":  "C",
                            "text":  "Two VMs in the same zone behind a Standard load balancer."
                        },
                        {
                            "letter":  "D",
                            "text":  "Three VMs in three resource groups in the same region."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Availability zones are physically separate locations within a region, each with independent power, cooling, and networking, and enabled regions provide at least three. Spreading VMs across the three zones protects the API from the loss of a datacenter and is the design that earns the higher multi-zone VM SLA. VMs are a zonal service, so each instance is pinned to the zone you choose.\n\n- **A** is wrong. An availability set separates racks inside a datacenter but does not survive a datacenter failure.\n- **C** is wrong. Both VMs sit in one datacenter, so a zone failure takes down the service.\n- **D** is wrong. A resource group is a management boundary with no physical separation.\n\nExam tip: pair zones with a zone-redundant Standard load balancer or public IP so the front end also survives a zone loss.",
        "source":  "Configure virtual machine availability — Review availability zones"
    },
    {
        "id":  96,
        "domain":  "compute",
        "topic":  "Internal load balancer",
        "stem":  "The `lb-public-internal` diagram shows internet clients reaching a public Standard load balancer that distributes traffic to two web-tier VMs in zones 1 and 2. Those web VMs call three app-tier VMs. The app VMs must not be reachable from the internet, and requests from the web tier must be spread across all app VMs with health probes.\n\nWhat should you deploy for the app tier?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A public Standard load balancer with a public frontend IP."
                        },
                        {
                            "letter":  "B",
                            "text":  "An internal Standard load balancer with a private frontend IP in the app subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "An Application Gateway with a public frontend and WAF."
                        },
                        {
                            "letter":  "D",
                            "text":  "A public IP address on each app VM and DNS round robin."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "An internal load balancer has a private frontend IP in the app subnet, a backend pool of the three app VMs, and a health probe that removes unhealthy instances. Traffic from the web tier is distributed at layer 4 while the app tier keeps no public exposure, which is precisely the two-tier pattern in the diagram.\n\n- **A** is wrong. A public frontend would expose the app tier to the internet.\n- **C** is wrong. Application Gateway is a layer-7 ingress for external clients; here the callers are internal VMs, so it adds cost without meeting the isolation requirement.\n- **D** is wrong. Public IPs expose the VMs, and DNS round robin ignores health.\n\nExam tip: the frontend IP configuration, not the SKU, decides whether a load balancer is public or internal.",
        "source":  "Introduction to Azure virtual machines — Manage the availability of your Azure VMs",
        "diagram":  "lb-public-internal"
    },
    {
        "id":  97,
        "domain":  "compute",
        "topic":  "Cross-RG move",
        "stem":  "A virtual machine named `vm-app1` must move from `rg-prod` to `rg-platform` in the same subscription. Its NIC, OS disk, data disk, network security group, and public IP address all reside in `rg-prod`.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Move only the VM; Azure moves dependent resources automatically."
                        },
                        {
                            "letter":  "B",
                            "text":  "Validate the move, then move the VM together with its NIC, disks, NSG, and public IP address."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete the VM and create a new one; disks cannot be attached across resource groups."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a second subscription and move the resource group into it."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "A resource can belong to only one resource group, and a VM cannot exist without its supporting resources in the same group, so the move operation must include the VM and its dependencies. Validate the move first: it reports whether the resources support moving and whether the target group has conflicts, and it requires permissions on both the source and destination.\n\n- **A** is wrong. The move fails or leaves the VM unusable because dependencies do not follow automatically.\n- **C** is wrong. The move operation exists precisely to avoid a rebuild, and managed disks can be moved with the VM.\n- **D** is wrong. Changing subscriptions does not change the resource group and adds unrelated work.\n\nExam tip: check for blockers such as Azure Backup vaults or role assignments scoped to the resource before scheduling a move.",
        "source":  "AZ-104 objective: Create and configure virtual machines — Move a VM between resource groups, subscriptions, or regions"
    },
    {
        "id":  98,
        "domain":  "compute",
        "topic":  "Cross-region relocation",
        "stem":  "A virtual machine in East US must run in West Europe instead. It uses managed disks, has no regional-only dependencies, and the East US copy must be removed once the new deployment is verified.\n\nWhich approach requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Change the VM\u0027s region property in the Azure portal."
                        },
                        {
                            "letter":  "B",
                            "text":  "Use Azure Resource Mover to move the VM\u0027s resources to West Europe, then delete the source resources."
                        },
                        {
                            "letter":  "C",
                            "text":  "Move the VM\u0027s resource group to a West Europe subscription."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create an availability set in West Europe and add the VM to it."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure has no in-place region change for a VM: the VM and its disks are regional resources. The supported pattern is to recreate the workload in the target region, either by deploying an exported template with copied disks or by orchestrating replication and failover with Azure Resource Mover, which is built on Azure Site Recovery. Resource Mover automates the dependency ordering and cutover, which is the least manual work.\n\n- **A** is wrong. The region field is fixed at creation and cannot be edited.\n- **C** is wrong. Moving a resource group between subscriptions never changes the region of its resources.\n- **D** is wrong. Availability sets are regional, and a VM can only join one at creation.\n\nExam tip: when the requirement says \"move a VM to another region\", think redeploy, not move.",
        "source":  "AZ-104 objective: Create and configure virtual machines — Move a VM between resource groups, subscriptions, or regions"
    },
    {
        "id":  99,
        "domain":  "compute",
        "topic":  "Disk encryption vault scope",
        "stem":  "You enable Azure Disk Encryption on a VM in West Europe. The template points the extension at a Key Vault in East US that belongs to a different subscription, and the extension fails with an access and location error.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Move the VM to East US so that it matches the key vault."
                        },
                        {
                            "letter":  "B",
                            "text":  "Use a key vault in the VM\u0027s subscription and region, grant the disk encryption access, and re-enable encryption."
                        },
                        {
                            "letter":  "C",
                            "text":  "Disable soft delete and purge protection on the key vault."
                        },
                        {
                            "letter":  "D",
                            "text":  "Convert the OS disk from a managed disk to a storage blob."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure Disk Encryption stores the BitLocker or dm-crypt secrets in Key Vault, and the vault must be in the same subscription and the same region as the VM. The encryption process also needs permission to write secrets, granted through a key vault access policy or Azure RBAC for the disk encryption service. Recreating the vault correctly and re-running the extension resolves the failure.\n\n- **A** is wrong. Relocating the workload is far more disruptive than fixing the vault.\n- **C** is wrong. Soft delete and purge protection are recommended safeguards and are not the cause of the failure.\n- **D** is wrong. Disk format is unrelated to the vault\u0027s subscription and region.\n\nExam tip: soft delete and purge protection on the key vault are prerequisites for enabling encryption, not obstacles.",
        "source":  "AZ-104 objective: Create and configure virtual machines — Manage VM disks"
    },
    {
        "id":  100,
        "domain":  "compute",
        "topic":  "Key encryption key",
        "stem":  "Security requires that the disk encryption secrets stored in Key Vault be wrapped with an additional key that only the security team can rotate, so that possession of the vault secret alone is not enough.\n\nWhich Azure Disk Encryption configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A key encryption key (KEK) in Key Vault that wraps the disk encryption secret."
                        },
                        {
                            "letter":  "B",
                            "text":  "Storage service encryption with a customer-managed key on a storage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "Double encryption at rest on the host."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Disk Encryption with a passphrase stored in the deployment template."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Key encryption keys add a second layer to Azure Disk Encryption. The volume secret is encrypted with the KEK before it is written to Key Vault, so an attacker who reads the secret still cannot use it without the KEK. The KEK lives in Key Vault, can be rotated independently, and can be managed by a different team than the VM operators, which separates the duty of running the VM from the duty of controlling the wrapping key.\n\n- **B** is wrong. Storage service encryption protects storage account data, not the OS and data disks of a VM.\n- **C** is wrong. Host-based double encryption is a platform setting and does not wrap the Key Vault secret.\n- **D** is wrong. A passphrase in a template is a plaintext secret and provides no wrapping.\n\nExam tip: use a KEK when separation of duties between the VM team and the security team is required.",
        "source":  "AZ-104 objective: Create and configure virtual machines — Manage VM disks"
    },
    {
        "id":  101,
        "domain":  "compute",
        "topic":  "VM extensions",
        "stem":  "You must configure newly deployed Windows virtual machines after provisioning without anyone signing in interactively. The work includes installing IIS and enrolling the machines in log collection.\n\nWhich two tasks can be performed by using VM extensions? Select two.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Run a PowerShell script that installs IIS."
                        },
                        {
                            "letter":  "B",
                            "text":  "Deploy the Azure Monitor Agent to collect event logs."
                        },
                        {
                            "letter":  "C",
                            "text":  "Assign an Azure RBAC role to the VM\u0027s managed identity."
                        },
                        {
                            "letter":  "D",
                            "text":  "Change the VM size during provisioning."
                        },
                        {
                            "letter":  "E",
                            "text":  "Create a subnet in the virtual network."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "VM extensions are small applications that configure and automate tasks on a VM after initial deployment. The Custom Script Extension downloads and runs a script, which covers installing IIS, and the Azure Monitor Agent extension installs and configures log collection. Extensions are deployed through ARM templates, the CLI, or the portal, so no interactive session is needed.\n\n- **C** is wrong. Role assignments are control-plane operations performed with Azure RBAC, not in-guest extensions.\n- **D** is wrong. VM size is a hardware property set on the VM resource, not by an extension.\n- **E** is wrong. Subnets are virtual network resources created outside the guest OS.\n\nExam tip: the same extension model delivers Azure Disk Encryption, Desired State Configuration, and Backup, so review installed extensions when troubleshooting a VM.",
        "source":  "Introduction to Azure virtual machines — Describe the options available to create and manage an Azure Virtual Machine"
    },
    {
        "id":  102,
        "domain":  "compute",
        "topic":  "Flexible orchestration",
        "stem":  "A migration project needs one scale set that runs 20 instances using three different VM sizes and two different operating system images while still autoscaling from a single definition. The scale set has not been created yet.\n\nWhich orchestration mode should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Uniform"
                        },
                        {
                            "letter":  "B",
                            "text":  "Flexible"
                        },
                        {
                            "letter":  "C",
                            "text":  "Manual"
                        },
                        {
                            "letter":  "D",
                            "text":  "Availability set"
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Flexible orchestration is the default and recommended mode for new scale sets, and it allows VMs in the same scale set to use different images, sizes, and configurations. That is what makes a mixed fleet possible during a migration while autoscale and a single management surface are retained. The orchestration mode is selected when the scale set is created.\n\n- **A** is wrong. Uniform mode creates every instance from the same base image and configuration, so mixed sizes and images are not possible.\n- **C** is wrong. Manual is a scaling mode, not an orchestration mode.\n- **D** is wrong. An availability set is a grouping for availability, not a scale set or a scaling mechanism.\n\nExam tip: choose Flexible unless you specifically need identical instances, because the mode cannot be changed later.",
        "source":  "Configure virtual machine availability — Create Virtual Machine Scale Sets"
    },
    {
        "id":  103,
        "domain":  "compute",
        "topic":  "Uniform mode limits",
        "stem":  "An existing Uniform scale set runs eight identical instances from a Windows Server image. A team now wants two additional instances in the same scale set that run a Linux image.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Add the instances with the Linux image; Uniform mode allows one image per instance."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a separate scale set in Flexible orchestration mode for the Linux workload."
                        },
                        {
                            "letter":  "C",
                            "text":  "Change the existing scale set\u0027s orchestration mode to Flexible."
                        },
                        {
                            "letter":  "D",
                            "text":  "Change the upgrade policy of the existing scale set to manual and add the instances."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Uniform mode derives every instance from the same base operating system image and configuration, so instances with a different image cannot be added to it. Orchestration mode is fixed at creation and cannot be converted, so the mixed fleet needs a new scale set. Creating the second set in Flexible mode leaves room for further variation and keeps both sets independently scalable.\n\n- **A** is wrong. Per-instance images are a Flexible capability, not a Uniform one.\n- **C** is wrong. The orchestration mode is chosen at creation time and cannot be changed afterwards.\n- **D** is wrong. Upgrade policy controls how updates are applied, not which images instances may run.\n\nExam tip: if the requirement mentions different VM sizes or images in one scale set, the answer is Flexible.",
        "source":  "Configure virtual machine availability — Implement Azure Virtual Machine Scale Sets"
    },
    {
        "id":  104,
        "domain":  "compute",
        "topic":  "Zone-spanning scale set",
        "stem":  "The `vmss-zones` diagram shows a Standard load balancer with a public frontend distributing traffic to a scale set of 12 instances spread across zones 1, 2, and 3 in West Europe. The workload must keep at least eight instances running if one zone is lost, and instances must be balanced across as many fault domains as the zone provides.\n\nWhich configuration should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Twelve instances in a single zone with fixed spreading."
                        },
                        {
                            "letter":  "B",
                            "text":  "The scale set across three zones with max spreading and a zone-redundant Standard load balancer."
                        },
                        {
                            "letter":  "C",
                            "text":  "The scale set across three zones with fixed spreading and a basic load balancer."
                        },
                        {
                            "letter":  "D",
                            "text":  "An availability set with 12 instances and a public IP address per instance."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Twelve instances spread evenly across three zones leave eight running when one zone fails, which meets the requirement. Max spreading distributes instances across as many fault domains as each zone offers, while fixed spreading demands exactly five fault domains and fails in a zone that provides fewer. A zone-redundant Standard load balancer keeps the frontend available during the same zone loss.\n\n- **A** is wrong. A single zone is a single point of failure and all 12 instances would be lost.\n- **C** is wrong. Fixed spreading can fail to deploy when fewer than five fault domains exist, and a basic load balancer is not zone-redundant.\n- **D** is wrong. An availability set is scoped to one datacenter, so a zone loss takes down the set.\n\nExam tip: Microsoft recommends max spreading for new scale sets precisely because fixed spreading fails on constrained zones.",
        "source":  "Configure virtual machine availability — Create Virtual Machine Scale Sets",
        "diagram":  "vmss-zones"
    },
    {
        "id":  105,
        "domain":  "compute",
        "topic":  "Metric autoscale rule",
        "stem":  "A scale set must always run between 3 and 15 instances and start with 3. When average CPU across the instances exceeds 70% for 10 minutes, the set must add 2 instances.\n\nWhich autoscale configuration should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A metric-based scale-out rule on Percentage CPU with a 10-minute time window, threshold 70, action to increase the count by 2, and instance limits of 3 and 15."
                        },
                        {
                            "letter":  "B",
                            "text":  "A schedule-based rule that adds 2 instances every day at 09:00, with instance limits of 3 and 15."
                        },
                        {
                            "letter":  "C",
                            "text":  "A metric-based scale-in rule with threshold 70 that decreases the count by 2."
                        },
                        {
                            "letter":  "D",
                            "text":  "A metric-based rule with threshold 30 that increases the count by 2 and no maximum limit."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Autoscaling compares a metric against a threshold over a query duration, then applies a scale action within the configured instance limits. A metric rule on Percentage CPU, averaged over a 10-minute window at a 70% threshold, with a scale-out action of 2, matches the requirement, and the limits of 3 and 15 enforce the floor and the ceiling.\n\n- **B** is wrong. A schedule rule scales on time, not on measured CPU load.\n- **C** is wrong. A scale-in action with a 70% threshold would remove capacity exactly when load is high.\n- **D** is wrong. A 30% threshold would scale out prematurely and the missing maximum removes the cost ceiling.\n\nExam tip: always pair a scale-out rule with a scale-in rule and set the default instance count to a safe starting value.",
        "source":  "Configure virtual machine availability — Configure autoscale"
    },
    {
        "id":  106,
        "domain":  "compute",
        "topic":  "Autoscale guardrails",
        "stem":  "You are reviewing an autoscale profile for a production scale set before it is enabled.\n\nWhich three practices should you follow? Select three.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Define both scale-out and scale-in rules."
                        },
                        {
                            "letter":  "B",
                            "text":  "Set the maximum instance limit to control hourly cost."
                        },
                        {
                            "letter":  "C",
                            "text":  "Set the default instance count to the maximum to avoid cold starts."
                        },
                        {
                            "letter":  "D",
                            "text":  "Choose the metric statistic, such as average, minimum, maximum, or total, deliberately."
                        },
                        {
                            "letter":  "E",
                            "text":  "Remove notification settings to reduce alert noise."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "D"
                    ],
        "explanation":  "Autoscale works best with a matched pair of rules: without scale-out, performance degrades under load, and without scale-in, cost keeps climbing after demand falls. The maximum instance limit is the guardrail that caps cost, and the metric statistic changes the trigger behaviour, so average, minimum, maximum, and total must be selected for the workload rather than left to chance. The minimum count keeps the service running when there is no load.\n\n- **C** is wrong. A default equal to the maximum defeats the purpose of autoscaling and inflates baseline cost.\n- **E** is wrong. Notifications should be configured so operators know when scaling events occur and why.\n\nExam tip: the default instance count is also what the engine uses when metrics are unavailable, so keep it conservative but adequate.",
        "source":  "Configure virtual machine availability — Implement autoscale"
    },
    {
        "id":  107,
        "domain":  "compute",
        "topic":  "Manual scale mode",
        "stem":  "A regulated nightly batch must run on exactly six instances. The instance count may only be changed by operators during an approved change window, and no scaling action may ever be triggered by load.\n\nWhich configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Manual scaling with an instance count of 6."
                        },
                        {
                            "letter":  "B",
                            "text":  "Autoscale with a minimum of 6, a maximum of 6, and a default of 6."
                        },
                        {
                            "letter":  "C",
                            "text":  "Autoscale with a schedule rule that sets the count to 6 each night."
                        },
                        {
                            "letter":  "D",
                            "text":  "Flexible orchestration with a scheduled scale-in policy."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Manual, or fixed, scaling holds the instance count you specify, between 0 and 1000, and changes only when an administrator edits it. That matches a requirement where load must never influence capacity and every change is a deliberate, auditable operation. The scale-in policy still determines which instances are removed when the count is reduced.\n\n- **B** is wrong. A minimum equal to the maximum does hold six instances, but it still runs the autoscale engine and its rules, which the requirement excludes.\n- **C** is wrong. A schedule rule is an automated scaling action driven by time.\n- **D** is wrong. Orchestration mode is unrelated to how instance count is controlled.\n\nExam tip: use manual mode for predictable, change-controlled workloads and autoscale for elastic demand.",
        "source":  "Configure virtual machine availability — Configure autoscale"
    },
    {
        "id":  108,
        "domain":  "compute",
        "topic":  "Rolling upgrade policy",
        "stem":  "A Flexible scale set runs 40 production instances. Operating system updates must be applied in batches of 20% with a pause between batches so health can be verified, and never to all instances at once.\n\nWhich upgrade policy should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Manual"
                        },
                        {
                            "letter":  "B",
                            "text":  "Automatic"
                        },
                        {
                            "letter":  "C",
                            "text":  "Rolling"
                        },
                        {
                            "letter":  "D",
                            "text":  "Image default"
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "The rolling upgrade policy applies updates in batches, controlled by the maximum batch instance count or percentage, and pauses between batches so you can verify health before the next batch starts. That gives a controlled rollout across 40 instances instead of a simultaneous change, and a failed health check can stop the rollout part way through.\n\n- **A** is wrong. Manual policy upgrades nothing automatically; an administrator must upgrade each instance, which is error-prone at this scale.\n- **B** is wrong. Automatic policy applies the update to all instances at once, in no guaranteed order, which can cause downtime.\n- **D** is wrong. Image default is not an upgrade policy; it refers to inheriting the platform image configuration.\n\nExam tip: pair rolling upgrades with an application health probe so a failing batch stops the rollout instead of continuing.",
        "source":  "AZ-104 objective: Provision and manage virtual machine scale sets — Configure the upgrade policy"
    },
    {
        "id":  109,
        "domain":  "compute",
        "topic":  "Spreading algorithm",
        "stem":  "A new scale set must be created in a zone that provides only three fault domains. Deployment fails when the spreading algorithm is left at fixed spreading, and the instances should still be spread as widely as the platform allows.\n\nWhich change requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Set the spreading algorithm to max spreading."
                        },
                        {
                            "letter":  "B",
                            "text":  "Keep fixed spreading and reduce the instance count to three."
                        },
                        {
                            "letter":  "C",
                            "text":  "Move the scale set into an availability set."
                        },
                        {
                            "letter":  "D",
                            "text":  "Request a fault domain quota increase for the zone."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Fixed spreading always places instances across exactly five fault domains, so a scale set deployment fails where fewer than five are available. Max spreading uses as many fault domains as the zone provides and completes successfully, which is why Microsoft recommends it for new deployments. Changing the algorithm is a single setting.\n\n- **B** is wrong. Reducing the count to three does not create the missing fault domains and cripples capacity.\n- **C** is wrong. Scale sets and availability sets are different resources; instances cannot simply be moved between them.\n- **D** is wrong. Fault domain count is a platform property of the zone, not a quota you can raise.\n\nExam tip: choose max spreading unless a specific fault domain count is mandated, and remember fixed spreading can fail outright.",
        "source":  "Configure virtual machine availability — Create Virtual Machine Scale Sets"
    },
    {
        "id":  110,
        "domain":  "compute",
        "topic":  "ACI for batch jobs",
        "stem":  "A nightly job converts 400 images in about ten minutes and then exits. The team has no Kubernetes skills, wants no cluster to patch, and wants to pay only while the job runs.\n\nWhich service requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A container group in Azure Container Instances with a restart policy of Never."
                        },
                        {
                            "letter":  "B",
                            "text":  "An Azure Kubernetes Service cluster running a cron job."
                        },
                        {
                            "letter":  "C",
                            "text":  "A scale set with a scheduled autoscale rule."
                        },
                        {
                            "letter":  "D",
                            "text":  "An App Service web app on a Premium plan."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Container Instances is the fastest and simplest way to run a container without managing virtual machines or adopting a higher-level orchestrator. A container group with a restart policy of Never runs the job once and stops, and billing applies only while the containers are in use. Startup takes seconds, which suits a short batch.\n\n- **B** is wrong. AKS adds a cluster to patch, node pools to size, and Kubernetes manifests for a ten-minute job.\n- **C** is wrong. A scale set requires a custom image, an orchestration layer, and scheduling outside the platform.\n- **D** is wrong. App Service is built for continuously served web apps and APIs, not short-lived container jobs.\n\nExam tip: choose ACI for isolated, short-lived, burst workloads and Container Apps when you need scale-to-zero microservices.",
        "source":  "Configure Azure Container Instances — Review Azure Container Instances"
    },
    {
        "id":  111,
        "domain":  "compute",
        "topic":  "Container group ports",
        "stem":  "A container group must run a web container listening on port 80 and a database container listening on port 1433. Both must be reachable through one public IP address with one DNS name label.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Two container groups, each with its own public IP address."
                        },
                        {
                            "letter":  "B",
                            "text":  "One container group that exposes ports 80 and 1433 on its public IP address."
                        },
                        {
                            "letter":  "C",
                            "text":  "One container group with port mapping from 8080 to 80 and from 1433 to 1433."
                        },
                        {
                            "letter":  "D",
                            "text":  "One container group behind Application Gateway with path-based routing."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Containers in a group share a network namespace, so they share one IP address, one DNS name label, and one port space. Exposing ports 80 and 1433 on the group\u0027s public IP works because the two containers listen on different ports. Port mapping between host and container ports is not supported in a group precisely because the namespace is shared.\n\n- **A** is wrong. Two groups produce two public IP addresses and two DNS labels, which fails the single-endpoint requirement.\n- **C** is wrong. Port mapping is not supported in container groups.\n- **D** is wrong. Application Gateway adds a layer-7 component and does not provide the shared group endpoint requested.\n\nExam tip: deleting a container group releases its public IP address and FQDN, so do not hardcode them in clients.",
        "source":  "Configure Azure Container Instances — Implement container groups"
    },
    {
        "id":  112,
        "domain":  "compute",
        "topic":  "ACI capabilities",
        "stem":  "You are evaluating Azure Container Instances for a new workload.\n\nWhich three statements about Container Instances are correct? Select three.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "You can request 0.1 to 4 vCPU and 0.1 to 16 GB of memory per container at deployment, and the allocation is fixed for the lifetime of the group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Linux container groups can be deployed into a virtual network subnet and then have no public IP address."
                        },
                        {
                            "letter":  "C",
                            "text":  "Azure Files shares can be mounted directly as volumes."
                        },
                        {
                            "letter":  "D",
                            "text":  "Port mapping between host and container ports is supported inside a group."
                        },
                        {
                            "letter":  "E",
                            "text":  "Container groups require an Azure Kubernetes Service cluster."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "Container Instances lets you size each container explicitly from 0.1 to 4 vCPU and 0.1 to 16 GB of memory, and that allocation is fixed for the life of the group. Linux container groups can be placed in a virtual network, where they receive no public IP and communicate privately, and Azure Files shares can be mounted directly for persistent storage.\n\n- **D** is wrong. Containers in a group share a port namespace, so port mapping is not supported.\n- **E** is wrong. Container Instances is a standalone service; no Kubernetes cluster is involved.\n\nExam tip: Windows container groups cannot be deployed into a virtual network, so check the OS requirement before designing private networking.",
        "source":  "Configure Azure Container Instances — Review Azure Container Instances"
    },
    {
        "id":  113,
        "domain":  "compute",
        "topic":  "ACI virtual network",
        "stem":  "A Linux container must query a database that has only a private IP address in an existing virtual network. The container must not be reachable from the internet, and no additional network appliances should be introduced.\n\nWhich approach requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Deploy the container group into a delegated subnet in the virtual network so that it receives a private IP address."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign a public IP address to the container group and restrict it with a network security group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a private endpoint for the container group."
                        },
                        {
                            "letter":  "D",
                            "text":  "Configure a Hybrid Connection to the database."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Linux container groups can be deployed into a subnet of an Azure virtual network, including a delegated subnet, after which they have no public IP address and can reach private resources directly within the VNet or over peering. That satisfies both the private database access and the no-internet-exposure requirements with one deployment change.\n\n- **B** is wrong. A public IP address exposes the container, and NSG filtering is a weaker control than no public address at all.\n- **C** is wrong. Private endpoints expose Azure services inbound; they do not give a container group outbound private connectivity.\n- **D** is wrong. Hybrid Connections need relay infrastructure and an agent, which is more work than VNet deployment.\n\nExam tip: VNet-deployed container groups are supported for Linux containers only.",
        "source":  "Configure Azure Container Instances — Review Azure Container Instances"
    },
    {
        "id":  114,
        "domain":  "compute",
        "topic":  "Container Apps fit",
        "stem":  "A team runs 12 containerized microservices. They need event-driven scaling that can drop to zero when a queue is empty, traffic splitting between revisions, and no direct management of Kubernetes APIs or nodes.\n\nWhich Azure service should they use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Container Instances"
                        },
                        {
                            "letter":  "B",
                            "text":  "Azure Container Apps"
                        },
                        {
                            "letter":  "C",
                            "text":  "Azure Kubernetes Service"
                        },
                        {
                            "letter":  "D",
                            "text":  "App Service Web App for Containers"
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure Container Apps is a serverless platform for containerized applications and microservices, built on Kubernetes plus Dapr, KEDA, and Envoy. It scales on HTTP traffic, events, CPU, or memory, including scale to zero, and supports revisions with traffic splitting, all without exposing the Kubernetes control plane. That matches every stated requirement.\n\n- **A** is wrong. Container Instances runs isolated containers without built-in microservice scaling or revision traffic splitting.\n- **C** is wrong. AKS gives full Kubernetes control, which the team explicitly does not want.\n- **D** is wrong. Web App for Containers hosts a web app on an App Service plan, not an event-driven microservice fleet.\n\nExam tip: the differentiator is \"serverless microservices with scale to zero and no cluster administration\".",
        "source":  "Configure Azure Container Instances — Review Azure Container Apps"
    },
    {
        "id":  115,
        "domain":  "compute",
        "topic":  "Registry geo-replication",
        "stem":  "A company builds container images in West US. Developers in West Europe and Southeast Asia must pull images from replicas in their own regions, and the registry must also be reachable through a private endpoint.\n\nWhich registry configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Basic tier with webhooks enabled."
                        },
                        {
                            "letter":  "B",
                            "text":  "Standard tier deployed in a single region."
                        },
                        {
                            "letter":  "C",
                            "text":  "Premium tier with geo-replication and a private endpoint."
                        },
                        {
                            "letter":  "D",
                            "text":  "Docker Hub with a content delivery network in front of it."
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "Azure Container Registry Premium is the tier that supports geo-replication, private link, customer-managed keys, and content trust. Geo-replication keeps regional replicas so pulls are served locally, and a private endpoint keeps traffic on the virtual network. Basic and Standard are single-region registries without geo-replication.\n\n- **A** is wrong. Basic targets low-volume development scenarios and offers neither geo-replication nor private link.\n- **B** is wrong. Standard supports more storage and webhooks but not geo-replication.\n- **D** is wrong. Docker Hub is a third-party registry without Azure private networking or your image governance.\n\nExam tip: the ACR features that matter for exams, geo-replication and private link, are Premium-only.",
        "source":  "AZ-104 objective: Provision and manage containers — Create and manage an Azure Container Registry"
    },
    {
        "id":  116,
        "domain":  "compute",
        "topic":  "Plan tier selection",
        "stem":  "An app requires five staging slots, autoscale, custom domains with TLS, and ten daily backups. Finance wants the lowest-cost App Service plan that satisfies all four requirements.\n\nWhich plan should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Free F1"
                        },
                        {
                            "letter":  "B",
                            "text":  "Basic B1"
                        },
                        {
                            "letter":  "C",
                            "text":  "Standard S1"
                        },
                        {
                            "letter":  "D",
                            "text":  "Premium P1V3"
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "The plan comparison lists Standard S1 with five staging slots, rule-based autoscale, ten daily backups, and up to ten instances, so it satisfies every requirement. Standard is also the tier where deployment slots and production-grade autoscale first appear, which makes it the lowest-cost qualifying plan.\n\n- **A** is wrong. Free has no slots, no autoscale, no backups, and no SLA; it is for development and testing.\n- **B** is wrong. Basic offers neither deployment slots nor autoscale and has no daily backups.\n- **D** is wrong. Premium meets the requirements but exceeds them at a higher price, so it is not the lowest cost.\n\nExam tip: memorize the slot counts that exam questions rely on: Standard 5, Premium 20, Isolated 20.",
        "source":  "Configure Azure App Service plans — Determine Azure App Service plan pricing"
    },
    {
        "id":  117,
        "domain":  "compute",
        "topic":  "Always On",
        "stem":  "A continuous WebJob on a Windows web app stops processing after about 20 minutes without traffic and resumes only when a new request arrives. The app runs on a Standard plan.\n\nWhat should you enable?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Always On"
                        },
                        {
                            "letter":  "B",
                            "text":  "Session affinity"
                        },
                        {
                            "letter":  "C",
                            "text":  "HTTPS Only"
                        },
                        {
                            "letter":  "D",
                            "text":  "Auto swap"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Always On keeps the app loaded even when there is no traffic, which is required for continuous WebJobs and for WebJobs triggered by a CRON expression. Without it, the platform unloads the idle app and the job stops until the next request wakes it.\n\n- **B** is wrong. Session affinity routes a client to the same instance for the life of a session; it does not prevent idling.\n- **C** is wrong. HTTPS Only redirects HTTP requests to HTTPS and has no effect on app idling.\n- **D** is wrong. Auto swap automatically swaps a slot into production after deployment and does not keep the app warm.\n\nExam tip: idle timeouts are a classic symptom; check Always On before investigating the WebJob code.",
        "source":  "Configure Azure App Service — Create an app with App Service"
    },
    {
        "id":  118,
        "domain":  "compute",
        "topic":  "Scale out",
        "stem":  "A stateless web app runs on three Standard S1 instances and reaches 85% average CPU during peak hours. Sessions are not sticky and the code needs no changes. The team wants more capacity before the next peak.\n\nWhich action requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Increase the instance count on the existing plan to scale out."
                        },
                        {
                            "letter":  "B",
                            "text":  "Scale up to PremiumV3 and redeploy the application."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable session affinity and add a second plan."
                        },
                        {
                            "letter":  "D",
                            "text":  "Move the app to the Free tier and add a content delivery network."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Scaling out adds virtual machine instances to the App Service plan, which raises aggregate CPU and memory without code changes or redeployment. Because the app is stateless and does not rely on session affinity, requests distribute cleanly across the new instances, and the change applies within seconds.\n\n- **B** is wrong. Scaling up changes the tier and hardware, costs more than needed, and does not add instances.\n- **C** is wrong. Sticky sessions reduce balance across instances and a second plan is unnecessary complexity.\n- **D** is wrong. The Free tier cannot scale out and provides no SLA.\n\nExam tip: scale up for features or per-instance power, scale out for concurrent load.",
        "source":  "Configure Azure App Service plans — Scale up and scale out Azure App Service"
    },
    {
        "id":  119,
        "domain":  "compute",
        "topic":  "Automatic scaling",
        "stem":  "HTTP traffic to an app on a PremiumV3 plan is highly unpredictable. The team does not want to build or tune CPU rules but does want pre-warmed instances available for sudden spikes.\n\nWhich scaling feature should they use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Rule-based autoscale with CPU and memory rules."
                        },
                        {
                            "letter":  "B",
                            "text":  "Automatic scaling (Elastic) with always-ready instances."
                        },
                        {
                            "letter":  "C",
                            "text":  "Manual scale out to the maximum instance count."
                        },
                        {
                            "letter":  "D",
                            "text":  "Scale up to the IsolatedV2 tier."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Automatic scaling, also called Elastic scaling, responds directly to incoming HTTP requests, is managed by the platform, and keeps always-ready instances warmed for spikes. It needs no rule authoring and is available on PremiumV2 and PremiumV3 plans, which matches both the tier and the operational preference.\n\n- **A** is wrong. Rule-based autoscale requires thresholds, statistics, and schedules that the team does not want to maintain.\n- **C** is wrong. Running at maximum capacity all the time removes the cost benefit and is not adaptive.\n- **D** is wrong. IsolatedV2 provides network isolation; it does not provide rule-free HTTP scaling.\n\nExam tip: choose rule-based autoscale when you need custom metrics or schedules, and automatic scaling when traffic is unpredictable.",
        "source":  "Configure Azure App Service plans — Configure Azure App Service autoscale"
    },
    {
        "id":  120,
        "domain":  "compute",
        "topic":  "Slot swap behavior",
        "stem":  "You deploy a new release to a staging slot and then swap it into production. Reviewers want to know which settings move with the content.\n\nWhich three settings are swapped? Select three.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "App settings that are not marked as slot-specific"
                        },
                        {
                            "letter":  "B",
                            "text":  "Custom domain names"
                        },
                        {
                            "letter":  "C",
                            "text":  "Connection strings that are not marked as slot-specific"
                        },
                        {
                            "letter":  "D",
                            "text":  "TLS/SSL bindings and nonpublic certificates"
                        },
                        {
                            "letter":  "E",
                            "text":  "Language stack and version"
                        }
                    ],
        "answers":  [
                        "A",
                        "C",
                        "E"
                    ],
        "explanation":  "Swapping exchanges content and the configuration that belongs to the content. App settings and connection strings travel with the app unless they are explicitly marked slot-specific, and the language stack and version, bitness, WebJobs content, and mounted storage also swap. Slot-specific settings such as custom domains, certificates, and scale settings stay where they are.\n\n- **B** is wrong. Custom domain names remain in the slot and do not follow the content.\n- **D** is wrong. Nonpublic certificates and TLS/SSL bindings are slot-specific by design.\n\nExam tip: mark environment-specific values such as a production database connection string as slot-specific to avoid swapping them.",
        "source":  "Configure Azure App Service — Add deployment slots"
    },
    {
        "id":  121,
        "domain":  "compute",
        "topic":  "Custom domain records",
        "stem":  "Users must reach an app at both `contoso.com` and `www.contoso.com`. The registrar does not permit CNAME records at the root of the domain. The app\u0027s default hostname is `contoso-app.azurewebsites.net`.\n\nWhich DNS configuration should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An A record for `contoso.com` pointing to the app\u0027s inbound IP address, and a CNAME for `www` pointing to `contoso-app.azurewebsites.net`."
                        },
                        {
                            "letter":  "B",
                            "text":  "A CNAME for `contoso.com` pointing to `contoso-app.azurewebsites.net`, and an A record for `www`."
                        },
                        {
                            "letter":  "C",
                            "text":  "A TXT record for `contoso.com` and an MX record for `www`."
                        },
                        {
                            "letter":  "D",
                            "text":  "An A record for each name, with no domain verification step."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "App Service custom domains use A records, which map a name to an IP address, or CNAME records, which map a name to another name. A CNAME cannot be used at the root with registrars that forbid it, so the root takes an A record and the `www` host takes a CNAME. A CNAME survives an IP change, while an A record must be updated if the inbound IP changes.\n\n- **B** is wrong. It reverses the records and hits the registrar\u0027s root CNAME restriction.\n- **C** is wrong. TXT and MX records validate ownership or route mail; they do not point a browser at the app.\n- **D** is wrong. Domain ownership must be verified, and two A records would need maintenance on every IP change.\n\nExam tip: add the verification TXT record first, then the A or CNAME record, and bind the domain in the app.",
        "source":  "Configure Azure App Service — Create custom domain names"
    },
    {
        "id":  122,
        "domain":  "compute",
        "topic":  "Managed certificates",
        "stem":  "An app on a Standard plan needs TLS for a verified custom domain. The certificate must renew automatically and the team does not want to buy, upload, or manually rotate certificates.\n\nWhich action requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a free App Service Managed Certificate and add a TLS/SSL binding."
                        },
                        {
                            "letter":  "B",
                            "text":  "Buy an App Service Certificate and upload the PFX file."
                        },
                        {
                            "letter":  "C",
                            "text":  "Generate a self-signed certificate and import it into the plan."
                        },
                        {
                            "letter":  "D",
                            "text":  "Terminate TLS in the client application."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "App Service offers free managed certificates, created from the Custom domains blade with Add binding and App Service Managed Certificate. The certificate is issued for the verified domain, and it renews automatically thirty days before expiry, so no procurement or manual rotation is needed. A Standard plan supports the custom domain and the binding.\n\n- **B** is wrong. An App Service Certificate requires purchase, upload, and renewal management.\n- **C** is wrong. A self-signed certificate is not trusted by browsers and still needs manual renewal.\n- **D** is wrong. Client-side termination does not secure the connection to the app for other users.\n\nExam tip: managed certificates are the default answer for \"TLS with automatic renewal\" unless the requirement demands a specific CA or key control.",
        "source":  "Configure Azure App Service — Create custom domain names"
    },
    {
        "id":  123,
        "domain":  "compute",
        "topic":  "App backup destination",
        "stem":  "Scheduled backups of an App Service app began failing immediately after the operations team enabled a firewall on the destination storage account and restricted it to selected networks. The storage account and container are in the same subscription as the app.\n\nWhich action requires the least administrative effort while keeping backups working?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Use a storage account that is not restricted by a firewall as the backup destination."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable large file share support on the storage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "Increase the backup retention period."
                        },
                        {
                            "letter":  "D",
                            "text":  "Move the app to a Basic plan."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "App Service backup requires a storage account and container in the same subscription as the app, and a storage account protected by a firewall cannot be used as the backup destination. The supported fix is to point backups at an account that is not firewalled. Backup content itself is a ZIP file plus an XML manifest, capped at 10 GB of app and database content.\n\n- **B** is wrong. Large file share support affects share size limits, not the firewall restriction.\n- **C** is wrong. Retention controls how long backups are kept, not whether the write succeeds.\n- **D** is wrong. Basic supports backup for the production slot only and does not bypass the destination restriction.\n\nExam tip: remember the backup prerequisites: same subscription, accessible storage account, and Basic or higher tier.",
        "source":  "Configure Azure App Service — Back up and restore your App Service app"
    },
    {
        "id":  124,
        "domain":  "compute",
        "topic":  "Gateway-only ingress",
        "stem":  "The `appgw-waf` diagram shows an Application Gateway with WAF in front of an App Service app published as `app.contoso.com` and a separate VM backend pool. The App Service must accept requests only from the gateway, must not be reachable directly over the internet, and the gateway must present the correct host name to the backend.\n\nWhich two actions should you take? Select two.",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Add access restrictions to the app that allow only the Application Gateway subnet and deny all other traffic."
                        },
                        {
                            "letter":  "B",
                            "text":  "Configure the backend setting to send the `app.contoso.com` host header and probe a path that returns HTTP 200."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable VNet integration on the app so inbound traffic is forced through the gateway."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable FTP publishing so the gateway can deploy content."
                        },
                        {
                            "letter":  "E",
                            "text":  "Assign a public IP address to the app and filter it with a network security group."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Inbound control for App Service uses access restrictions or a private endpoint. A rule that permits only the gateway\u0027s subnet, typically with a service endpoint, and denies everything else stops clients from bypassing the WAF. The gateway must then be configured with the custom domain as the backend host header and a health probe that the app answers, otherwise probes and requests fail.\n\n- **C** is wrong. VNet integration carries outbound traffic from the app; it does not restrict inbound requests.\n- **D** is wrong. FTP is a deployment channel and unrelated to ingress control.\n- **E** is wrong. A public IP plus NSG is not how App Service ingress is filtered.\n\nExam tip: pair gateway-only ingress with a private endpoint when the app must also be unreachable from the public internet entirely.",
        "source":  "AZ-104 skills measured: Deploy and manage Azure compute resources — Configure networking for Azure App Service",
        "diagram":  "appgw-waf"
    },
    {
        "id":  125,
        "domain":  "compute",
        "topic":  "VNet integration",
        "stem":  "The `hub-spoke` diagram shows a hub virtual network with Azure Firewall and a VPN gateway, peered to two spoke virtual networks that hold application subnets. An App Service app in the spoke region must reach an on-premises SQL server through the hub, and all of its outbound traffic must pass through the firewall.\n\nWhat should you configure on the app?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Regional VNet integration to a delegated subnet in the spoke, with route all enabled so traffic follows the hub routes."
                        },
                        {
                            "letter":  "B",
                            "text":  "An access restriction rule that allows the on-premises address range."
                        },
                        {
                            "letter":  "C",
                            "text":  "A private endpoint for the app\u0027s inbound traffic."
                        },
                        {
                            "letter":  "D",
                            "text":  "A Hybrid Connection to the on-premises server."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "VNet integration gives an App Service app outbound access into a subnet, which must be dedicated and delegated to `Microsoft.Web/serverFarms`. With route all enabled, all outbound traffic follows the routes of the integration subnet, so the peered hub and its firewall and VPN gateway carry traffic to on-premises. Access restrictions and private endpoints govern inbound traffic and would not provide the outbound path.\n\n- **B** is wrong. Access restrictions filter who may call the app, not where the app may call.\n- **C** is wrong. A private endpoint provides private inbound access to the app.\n- **D** is wrong. Hybrid Connections use a relay and agent rather than the hub network path the design requires.\n\nExam tip: VNet integration is outbound, private endpoint is inbound; exam stems usually hinge on that distinction.",
        "source":  "AZ-104 skills measured: Deploy and manage Azure compute resources — Configure networking for Azure App Service",
        "diagram":  "hub-spoke"
    },
    {
        "id":  126,
        "domain":  "network",
        "topic":  "Reserved subnet addresses",
        "stem":  "Tailwind Traders is deploying 30 virtual appliances into a new subnet named appliances. The subnet uses the address prefix 10.20.4.0/27. After 27 appliances receive addresses, the deployment of the 28th network interface fails.\n\nHow many usable private IP addresses does the subnet provide?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "27"
                        },
                        {
                            "letter":  "B",
                            "text":  "30"
                        },
                        {
                            "letter":  "C",
                            "text":  "32"
                        },
                        {
                            "letter":  "D",
                            "text":  "29"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure reserves five addresses in every subnet: the network address, the default gateway, two DNS addresses, and the broadcast address. A /27 contains 32 addresses, so 32 minus 5 leaves 27 assignable addresses. That is why the 28th interface cannot obtain an address even though the prefix appears large enough for 30 appliances.\n\n- **B** is wrong. 30 assumes only the network and broadcast addresses are reserved, which describes a traditional on-premises subnet rather than an Azure subnet.\n- **C** is wrong. 32 is the total address count in a /27, and Azure makes five of those addresses unusable.\n- **D** is wrong. 29 subtracts only three addresses; Azure reserves five, including both DNS addresses.\n\nExam tip: size every Azure subnet as required hosts plus five, then round up to the next CIDR block.",
        "source":  "Configure virtual networks — Create subnets"
    },
    {
        "id":  127,
        "domain":  "network",
        "topic":  "Subnet delegation",
        "stem":  "Fabrikam must deploy an Azure SQL managed instance into a subnet named data in its production virtual network. The service requires explicit authorization to create its own resources in that subnet, and no other workload may share the subnet.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Delegate the data subnet to Microsoft.Sql/managedInstances."
                        },
                        {
                            "letter":  "B",
                            "text":  "Associate a network security group that allows TCP 1433 to the data subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable the Microsoft.Sql service endpoint on the data subnet."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a virtual network peering between the production virtual network and a new database virtual network."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Subnet delegation grants a specific Azure service permission to inject service-managed resources into a subnet. Delegating to Microsoft.Sql/managedInstances tells Azure that the subnet belongs to SQL Managed Instance, which can then create the required network components. A subnet can be delegated to only one service, and unrelated resources should not be placed in it.\n\n- **B** is wrong. An NSG filters traffic but does not authorize the service to create or manage resources in the subnet.\n- **C** is wrong. A service endpoint extends virtual network identity to a service\u0027s public endpoint; it does not satisfy a deployment requirement for a dedicated, delegated subnet.\n- **D** is wrong. Peering provides connectivity between virtual networks but does not delegate control of a subnet to a service.\n\nExam tip: delegation is about permission for the service, while a service endpoint is about private routing to the service.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (subnet delegation)"
    },
    {
        "id":  128,
        "domain":  "network",
        "topic":  "Public IP SKU selection",
        "stem":  "Contoso is creating the frontend for a new Standard SKU load balancer in West Europe. The public IP must survive a zone failure, must never change during the load balancer\u0027s lifetime, and must be closed to unsolicited inbound traffic by default.\n\nWhich public IP configuration should you choose?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Standard SKU, static allocation, zone-redundant."
                        },
                        {
                            "letter":  "B",
                            "text":  "Basic SKU, dynamic allocation, nonzonal."
                        },
                        {
                            "letter":  "C",
                            "text":  "Standard SKU, dynamic allocation, zonal."
                        },
                        {
                            "letter":  "D",
                            "text":  "Basic SKU, static allocation, zonal."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Standard SKU public IPs are always statically allocated, so the address is retained until the resource is deleted. They also use a secure-by-default model: traffic is blocked unless a network security group explicitly permits it. Zone-redundant Standard IPs are spread across availability zones, which keeps the frontend available if one zone fails. The transcript\u0027s feature table lists static allocation, secure by default, and nonzonal, zonal, or zone-redundant placement for Standard SKU.\n\n- **B** is wrong. Basic SKU public IPs are retired, support dynamic allocation, and do not support availability zones.\n- **C** is wrong. Standard SKU does not offer dynamic allocation; the address is always static.\n- **D** is wrong. Basic SKU is retired and cannot be associated with a Standard load balancer, whose public IP SKU must match.\n\nExam tip: match public IP SKU and tier to the load balancer, and remember Standard means static plus secure by default.",
        "source":  "Configure virtual networks — Create public IP addressing"
    },
    {
        "id":  129,
        "domain":  "network",
        "topic":  "Public IP association targets",
        "stem":  "You are deploying Azure Bastion so that administrators can reach virtual machines that have no public IP addresses. You need to supply the public address that clients will connect to, using the least administrative effort.\n\nWhere should the public IP address be associated?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "In the Bastion host\u0027s public IP configuration."
                        },
                        {
                            "letter":  "B",
                            "text":  "On the network interface of every protected virtual machine."
                        },
                        {
                            "letter":  "C",
                            "text":  "In the virtual network gateway\u0027s IP configuration."
                        },
                        {
                            "letter":  "D",
                            "text":  "On the backend pool of an internal load balancer."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Bastion is a managed jump host that clients reach over TLS on port 443. Its public address is attached through the Bastion host\u0027s own public IP configuration, not through the protected virtual machines. Those virtual machines keep private IP addresses only, and no RDP or SSH ports need to be exposed to the internet. The transcript\u0027s association table lists the Bastion host as using a public IP configuration.\n\n- **B** is wrong. Giving each virtual machine a public IP defeats the purpose of Bastion and adds cost and exposure.\n- **C** is wrong. A virtual network gateway uses its gateway IP configuration for VPN or ExpressRoute, not for Bastion client access.\n- **D** is wrong. An internal load balancer has a private frontend and cannot provide the public entry point Bastion requires.\n\nExam tip: associate public IPs at the resource named in the portal\u0027s frontend, gateway, or public IP configuration, not at the workload.",
        "source":  "Configure virtual networks — Associate public IP addresses"
    },
    {
        "id":  130,
        "domain":  "network",
        "topic":  "Static private IP assignment",
        "stem":  "A domain controller named DC01 runs in the identity subnet 10.10.2.0/24. Its DNS record and a firewall rule both reference 10.10.2.10. You must guarantee that the address never changes, even if the virtual machine is stopped and restarted.\n\nHow should you configure the private IP address?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign 10.10.2.10 as a static private IP on the network interface."
                        },
                        {
                            "letter":  "B",
                            "text":  "Leave the default dynamic assignment and rely on the lease."
                        },
                        {
                            "letter":  "C",
                            "text":  "Assign a Standard SKU public IP address and use it internally."
                        },
                        {
                            "letter":  "D",
                            "text":  "Reserve 10.10.2.10 by creating a route with next hop None."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Static private IP assignment lets you select any unassigned, unreserved address in the subnet\u0027s range. The address remains attached to the network interface until the interface or its configuration is deleted, so stopping or restarting the virtual machine does not change it. Static addresses are appropriate for DNS servers, domain controllers, firewall rules, and certificates that reference an IP address.\n\n- **B** is wrong. Dynamic assignment is the default and can return a different address after a stop and start, breaking DNS and firewall references.\n- **C** is wrong. A public IP does not provide a stable private address, and Standard public IPs are for internet-facing resources.\n- **D** is wrong. A route with next hop None drops traffic to the prefix; it does not reserve an address for a network interface.\n\nExam tip: use static private IPs wherever a name, rule, or certificate pins the address.",
        "source":  "Configure virtual networks — Allocate or assign private IP addresses"
    },
    {
        "id":  131,
        "domain":  "network",
        "topic":  "Global virtual network peering",
        "stem":  "Litware has a virtual network in East US and another in West Europe. Resources in the two networks must communicate privately over the Microsoft backbone with low latency. Neither network has, or should have, a VPN gateway, and no traffic may traverse the public internet.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Regional virtual network peering."
                        },
                        {
                            "letter":  "B",
                            "text":  "Global virtual network peering."
                        },
                        {
                            "letter":  "C",
                            "text":  "A site-to-site VPN connection."
                        },
                        {
                            "letter":  "D",
                            "text":  "An ExpressRoute circuit."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Global virtual network peering connects virtual networks in different Azure regions. Traffic stays on the Microsoft backbone, so no public internet, gateway, or encryption is involved, and the connection provides low latency and high bandwidth. Regional peering is limited to virtual networks in the same region, so it cannot connect East US to West Europe.\n\n- **A** is wrong. Regional peering requires both virtual networks to be in the same region.\n- **C** is wrong. A site-to-site VPN would require a gateway in each network and encrypts traffic over the internet.\n- **D** is wrong. ExpressRoute connects an on-premises network to Azure; it is not used to peer two Azure virtual networks.\n\nExam tip: regional versus global peering is decided by region, not by subscription or tenant boundaries.",
        "source":  "Configure Azure Virtual Network peering — Determine Azure Virtual Network peering uses"
    },
    {
        "id":  132,
        "domain":  "network",
        "topic":  "Peering connection status",
        "stem":  "You create a peering from VNet-A to VNet-B in the Azure portal. The peering on VNet-A shows a status of Initiated, and users report that the networks still cannot communicate.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create the matching peering from VNet-B to VNet-A."
                        },
                        {
                            "letter":  "B",
                            "text":  "Wait for the status to change to Connected automatically."
                        },
                        {
                            "letter":  "C",
                            "text":  "Delete and recreate the peering on VNet-A with a new name."
                        },
                        {
                            "letter":  "D",
                            "text":  "Add a virtual network gateway to VNet-B."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A peering is a two-sided relationship. Creating the link from VNet-A produces an Initiated state; the peering is not established until the reciprocal peering exists on VNet-B and both sides show Connected. Creating the second peering completes the connection without disrupting resources in either network.\n\n- **B** is wrong. The status does not become Connected on its own; the remote network must have a matching peering.\n- **C** is wrong. Recreating the same one-sided peering produces Initiated again.\n- **D** is wrong. A gateway is not required for peering and does not complete a missing reciprocal link.\n\nExam tip: check both virtual networks for Connected before you troubleshoot routing or name resolution.",
        "source":  "Configure Azure Virtual Network peering — Create virtual network peering"
    },
    {
        "id":  133,
        "domain":  "network",
        "topic":  "Peering transitivity",
        "stem":  "The hub-spoke diagram shows a hub virtual network that contains Azure Firewall, with Spoke1 and Spoke2 each peered only to the hub. The spokes are not peered to each other. Traffic from Spoke1 to Spoke2 must be inspected by the hub firewall before it reaches the destination.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a direct peering between Spoke1 and Spoke2."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable gateway transit on both spoke peerings."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a route table that sends spoke traffic to the firewall\u0027s private IP, associate it with both spoke subnets, and allow forwarded traffic on the peerings."
                        },
                        {
                            "letter":  "D",
                            "text":  "Select Use remote virtual network gateway on both spokes."
                        }
                    ],
        "answers":  [
                        "C"
                    ],
        "explanation":  "Virtual network peering is nontransitive: Spoke1 can reach the hub, and the hub can reach Spoke2, but Spoke1 cannot reach Spoke2 through the hub by default. Service chaining solves this by adding a user-defined route in each spoke that points the remote spoke prefix at the firewall\u0027s private IP, associating the route table with the spoke subnets, and permitting forwarded traffic on the peerings.\n\n- **A** is wrong. A direct peering would provide connectivity but would bypass the hub firewall inspection that the requirement mandates.\n- **B** is wrong. Gateway transit shares a VPN or ExpressRoute gateway; it does not route spoke-to-spoke traffic through a firewall.\n- **D** is wrong. Use remote gateway only lets a spoke use the hub\u0027s gateway for external connectivity, not for spoke-to-spoke inspection.\n\nExam tip: when traffic must be inspected between spokes, combine peerings, UDRs, and forwarded-traffic settings.",
        "source":  "Configure Azure Virtual Network peering — Extend peering with user-defined routes and service chaining",
        "diagram":  "hub-spoke"
    },
    {
        "id":  134,
        "domain":  "network",
        "topic":  "Gateway transit",
        "stem":  "The diagram shows a hub virtual network connected to an on-premises network by a site-to-site VPN. A spoke virtual network is peered to the hub. The spoke must reach on-premises through the hub gateway, and no additional gateway should be deployed.\n\nWhich two peering settings should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Allow gateway transit on the hub peering and Use remote virtual network gateway on the spoke peering."
                        },
                        {
                            "letter":  "B",
                            "text":  "Allow gateway transit on the spoke peering and Use remote virtual network gateway on the hub peering."
                        },
                        {
                            "letter":  "C",
                            "text":  "Deploy a second VPN gateway in the spoke and enable active-active mode."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a VNet-to-VNet connection between the spoke and the on-premises network."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Gateway transit lets a peered virtual network share the hub\u0027s VPN or ExpressRoute gateway. On the hub side of the peering, select Allow gateway transit. On the spoke side, select Use remote virtual network gateway so the spoke learns routes through the hub. A virtual network can have only one VPN gateway, and gateway transit works for both regional and global peering.\n\n- **B** is wrong. The settings are reversed: the gateway owner allows transit, and the spoke consumes it.\n- **C** is wrong. Deploying another gateway contradicts the requirement and is unnecessary; each virtual network supports only one.\n- **D** is wrong. A VNet-to-VNet connection still requires a gateway in the spoke and does not use the existing hub gateway.\n\nExam tip: the side with the gateway allows transit; the side without it uses the remote gateway.",
        "source":  "Configure Azure Virtual Network peering — Determine gateway transit and connectivity",
        "diagram":  "vpn-site2site"
    },
    {
        "id":  135,
        "domain":  "network",
        "topic":  "Peering address space",
        "stem":  "Two virtual networks named East and West both use the address space 10.50.0.0/16. A peering between them fails validation.\n\nWhat must you do before the peering can succeed?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Delete any existing peering, change one virtual network\u0027s address space so the ranges do not overlap, and recreate the peering."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a user-defined route between the two address spaces."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable gateway transit on both virtual networks."
                        },
                        {
                            "letter":  "D",
                            "text":  "Convert the regional peering to global peering."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Peered virtual networks must have non-overlapping IP address spaces; creation fails when the ranges overlap. You also cannot change a virtual network\u0027s address space while a peering exists, so the sequence is to remove the peering, update the address space, and then recreate the peering.\n\n- **B** is wrong. A user-defined route cannot make duplicate address space routable; the overlap itself is invalid.\n- **C** is wrong. Gateway transit is unrelated to address-space validation.\n- **D** is wrong. Global peering has the same non-overlap requirement as regional peering.\n\nExam tip: plan address spaces centrally before peering; overlapping ranges force a redesign, not a routing workaround.",
        "source":  "Configure Azure Virtual Network peering — Determine Azure Virtual Network peering uses"
    },
    {
        "id":  136,
        "domain":  "network",
        "topic":  "Service chaining route",
        "stem":  "The diagram shows an application subnet whose internet-bound traffic must pass through an Azure Firewall at 10.0.3.4 before leaving the virtual network. You want the least administrative effort that still enforces the requirement.\n\nWhat should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A route table with 0.0.0.0/0 pointing to virtual appliance 10.0.3.4, associated with the application subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "A network security group on the application subnet that denies outbound internet traffic."
                        },
                        {
                            "letter":  "C",
                            "text":  "A service endpoint for Microsoft.Storage on the application subnet."
                        },
                        {
                            "letter":  "D",
                            "text":  "A NAT gateway attached to the application subnet."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A user-defined route with the prefix 0.0.0.0/0 and next hop type Virtual appliance redirects all internet-bound traffic to the firewall\u0027s private IP. Associating the route table with the application subnet applies the route to every network interface in that subnet. The route table selects the path, and the firewall must permit and forward the traffic.\n\n- **B** is wrong. An NSG deny rule blocks traffic but does not redirect it for inspection.\n- **C** is wrong. A service endpoint changes the path to a PaaS service; it does not steer internet traffic through a firewall.\n- **D** is wrong. A NAT gateway provides outbound address translation but performs no inspection.\n\nExam tip: a UDR chooses the path, while IP forwarding on the appliance lets the packet continue.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — Identify routing capabilities of an Azure virtual network",
        "diagram":  "udr-firewall"
    },
    {
        "id":  137,
        "domain":  "network",
        "topic":  "User-defined route next hops",
        "stem":  "You are creating user-defined routes to control traffic in a hub-and-spoke deployment.\n\nWhich two next hop types can a user-defined route specify? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Virtual appliance"
                        },
                        {
                            "letter":  "B",
                            "text":  "Virtual network gateway"
                        },
                        {
                            "letter":  "C",
                            "text":  "Virtual network service endpoint"
                        },
                        {
                            "letter":  "D",
                            "text":  "Virtual network peering"
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "User-defined routes support the next hop types Virtual appliance, Virtual network gateway, Virtual network, Internet, and None. Virtual appliance points at a firewall or NVA private IP, while Virtual network gateway sends matching traffic to a VPN or ExpressRoute gateway. A UDR can also use a service tag as its address prefix, but it cannot use a service endpoint as its next hop.\n\n- **C** is wrong. VirtualNetworkServiceEndpoint is a system route type created by service endpoints; it is not selectable when you create a UDR.\n- **D** is wrong. Peering is a connectivity relationship, not a next hop type; peered traffic uses system routes or a UDR that points elsewhere.\n\nExam tip: remember the five selectable hops, and remember that service endpoint is the one you cannot choose.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — Identify routing capabilities of an Azure virtual network"
    },
    {
        "id":  138,
        "domain":  "network",
        "topic":  "Longest prefix match",
        "stem":  "A subnet has three effective routes for outbound traffic: 10.0.0.0/16 to a network virtual appliance, 10.0.1.0/24 to Virtual network, and 0.0.0.0/0 to Internet. A virtual machine sends a packet to 10.0.1.5.\n\nWhich route does Azure select?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "10.0.1.0/24"
                        },
                        {
                            "letter":  "B",
                            "text":  "10.0.0.0/16"
                        },
                        {
                            "letter":  "C",
                            "text":  "0.0.0.0/0"
                        },
                        {
                            "letter":  "D",
                            "text":  "None; the packet is dropped because the routes overlap."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "When multiple routes match a destination, Azure uses the longest prefix match, which is the most specific route. The /24 covers 10.0.1.5 and is more specific than the /16 or the default route, so the packet follows the Virtual network path. Prefix length takes precedence over next hop type in this comparison. Route selection is deterministic and does not consider the health of the next hop.\n\n- **B** is wrong. The /16 also matches, but it is less specific than the /24.\n- **C** is wrong. The default route matches every address but loses to both more specific prefixes.\n- **D** is wrong. Overlapping routes are normal; Azure resolves them by prefix length and then by route type.\n\nExam tip: read a route table from the most specific prefix outward, not from the top of the list.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — Identify routing capabilities of an Azure virtual network"
    },
    {
        "id":  139,
        "domain":  "network",
        "topic":  "Route precedence",
        "stem":  "A subnet has three routes for the prefix 10.0.0.0/8: a user-defined route to a firewall, a route learned through BGP from on-premises, and the default system route. All three remain active.\n\nWhich route is used?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The user-defined route."
                        },
                        {
                            "letter":  "B",
                            "text":  "The BGP route."
                        },
                        {
                            "letter":  "C",
                            "text":  "The system route."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure load balances across all three routes."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "When routes have the same address prefix, Azure breaks the tie by route type in this order: user-defined route, BGP route, then system route. The UDR therefore wins even though all three routes describe the same prefix. This ordering applies only when the prefixes are identical; a longer prefix from any source still wins first.\n\n- **B** is wrong. BGP takes precedence over system routes but loses to a user-defined route for the same prefix.\n- **C** is wrong. System routes are the lowest precedence of the three.\n- **D** is wrong. Azure selects one best route; it does not ECMP load balance across routes with the same prefix.\n\nExam tip: longest prefix first, then UDR over BGP over system.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — Identify routing capabilities of an Azure virtual network"
    },
    {
        "id":  140,
        "domain":  "network",
        "topic":  "Next hop None",
        "stem":  "A security team wants traffic from the database subnet to the 192.168.0.0/16 range to be silently discarded. You create a user-defined route for 192.168.0.0/16 with the next hop type None and associate the route table with the database subnet.\n\nWhat happens to matching traffic?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "It is dropped and is not routed outside the subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "It is sent to the internet through the default route."
                        },
                        {
                            "letter":  "C",
                            "text":  "It is sent to the virtual network gateway."
                        },
                        {
                            "letter":  "D",
                            "text":  "It is automatically peered to a virtual network with that address space."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The None next hop type means the traffic is dropped. Azure does not route it to another subnet, the internet, or a gateway. This is useful for blocking specific prefixes, including private ranges that should never be reachable from a subnet. The route wins over the default internet route because its prefix is longer.\n\n- **B** is wrong. The more specific /16 route wins over 0.0.0.0/0, so the default internet route is not used.\n- **C** is wrong. A gateway next hop must be selected explicitly; None never forwards to a gateway.\n- **D** is wrong. Routing does not create peering or connectivity; None simply discards the packet.\n\nExam tip: None is an explicit blackhole route, not a fallback to the default route.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — Identify routing capabilities of an Azure virtual network"
    },
    {
        "id":  141,
        "domain":  "network",
        "topic":  "NVA IP forwarding",
        "stem":  "A Linux network virtual appliance at 10.0.2.4 receives traffic from the public subnet, but the packets never reach the private subnet behind it. The user-defined route and the appliance\u0027s internal routing table are correct.\n\nWhat should you enable?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "IP forwarding on the appliance\u0027s network interface and in the guest operating system."
                        },
                        {
                            "letter":  "B",
                            "text":  "A public IP address on the appliance\u0027s network interface."
                        },
                        {
                            "letter":  "C",
                            "text":  "An NSG rule that allows all inbound traffic to the appliance."
                        },
                        {
                            "letter":  "D",
                            "text":  "BGP route propagation on the appliance\u0027s subnet."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "An NVA that receives traffic destined for another address must forward it. Azure drops packets at the network interface unless IP forwarding is enabled on that interface, and the guest operating system must also forward packets. Without both settings, the appliance receives the packet but silently drops it instead of forwarding it. In the transcript\u0027s exercise, both `az network nic update --ip-forwarding true` and the Linux `net.ipv4.ip_forward` setting are required.\n\n- **B** is wrong. A public IP changes how the appliance is reached, not whether it forwards transit traffic.\n- **C** is wrong. An allow rule may admit traffic but does not enable forwarding.\n- **D** is wrong. BGP propagation affects route learning, not packet forwarding through the appliance.\n\nExam tip: IP forwarding is a two-part setting, one in Azure on the NIC and one in the appliance OS.",
        "source":  "Manage and control traffic flow in your Azure deployment with routes — What is an NVA?"
    },
    {
        "id":  142,
        "domain":  "network",
        "topic":  "Default NSG rules",
        "stem":  "A new network security group is created with no custom rules. An administrator asks which default behaviors remain in effect.\n\nWhich two statements are true? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "AllowVNetInBound, priority 65000, permits inbound traffic from the virtual network."
                        },
                        {
                            "letter":  "B",
                            "text":  "DenyAllInBound can be deleted once a custom allow rule exists."
                        },
                        {
                            "letter":  "C",
                            "text":  "AllowAzureLoadBalancerInBound, priority 65001, permits traffic from Azure load balancers."
                        },
                        {
                            "letter":  "D",
                            "text":  "Default rules are processed in the order in which they were created."
                        }
                    ],
        "answers":  [
                        "A",
                        "C"
                    ],
        "explanation":  "Every NSG includes three default inbound rules: AllowVNetInBound at 65000, AllowAzureLoadBalancerInBound at 65001, and DenyAllInBound at 65500. The first permits traffic from the virtual network and peered networks, while the second permits load balancer health probes and platform traffic. Rules are processed by priority, with the lowest number evaluated first. A custom rule with a lower priority number takes precedence over a default rule, which is how you override a default without deleting it.\n\n- **B** is wrong. Default rules cannot be removed; you override one by creating a custom rule with a lower priority number.\n- **D** is wrong. Creation order is irrelevant; the priority value determines evaluation order.\n\nExam tip: 65000 and 65001 allow virtual network and load balancer traffic; 65500 denies everything else inbound.",
        "source":  "Configure network security groups — Determine network security group rules"
    },
    {
        "id":  143,
        "domain":  "network",
        "topic":  "NSG evaluation order",
        "stem":  "The diagram shows an application subnet with an NSG that allows TCP 443 from the internet. The virtual machine\u0027s network interface also has an NSG, and that NSG denies TCP 443 from the internet. No other rules apply.\n\nWhat is the result for an inbound HTTPS request?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Allowed, because the subnet NSG allows the traffic."
                        },
                        {
                            "letter":  "B",
                            "text":  "Denied, because the network interface NSG denies the traffic."
                        },
                        {
                            "letter":  "C",
                            "text":  "Allowed, because the subnet NSG has a lower priority number."
                        },
                        {
                            "letter":  "D",
                            "text":  "Allowed, because application security groups override NSG denies."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Inbound traffic is evaluated first against the NSG associated with the subnet and then against the NSG associated with the network interface. Each NSG is evaluated independently, and traffic must be allowed at every level. A deny in either NSG blocks the flow, so the interface-level deny wins even though the subnet allows HTTPS.\n\n- **A** is wrong. A subnet allow does not override a network interface deny.\n- **C** is wrong. Priority numbers order rules within one NSG; they do not let a subnet rule override a separate interface NSG.\n- **D** is wrong. An ASG is a source or destination grouping inside a rule; it does not bypass the deny.\n\nExam tip: inbound is subnet then NIC, outbound is NIC then subnet, and both levels must allow.",
        "source":  "Configure network security groups — Determine network security group effective rules",
        "diagram":  "nsg-subnets"
    },
    {
        "id":  144,
        "domain":  "network",
        "topic":  "Effective security rules",
        "stem":  "The diagram shows a virtual machine protected by a subnet NSG and a network interface NSG. Connectivity is intermittent, and you need to see every rule from both NSGs plus the combined result, without capturing packets or changing configuration.\n\nWhich tool requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Network Watcher effective security rules."
                        },
                        {
                            "letter":  "B",
                            "text":  "Network Watcher packet capture."
                        },
                        {
                            "letter":  "C",
                            "text":  "Network Watcher connection monitor."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Monitor VM insights."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Effective security rules presents the rules applied to a network interface, the rules applied to its subnet, and the aggregate of both. It is a read-only view in Network Watcher, so it answers which allows and denies are actually in force without deploying an agent, capturing traffic, or editing NSGs. The consolidated view also includes Azure Virtual Network Manager security admin rules, not only NSG rules.\n\n- **B** is wrong. Packet capture records traffic and requires a capture session and storage, which is heavier and does not directly list the rules.\n- **C** is wrong. Connection monitor measures connectivity over time and can detect changes, but it does not present the combined rule set.\n- **D** is wrong. VM insights reports guest performance and dependencies, not NSG rule evaluation.\n\nExam tip: use effective security rules to audit the rules, and IP flow verify to test one specific flow.",
        "source":  "Configure network security groups — Determine network security group effective rules",
        "diagram":  "nsg-subnets"
    },
    {
        "id":  145,
        "domain":  "network",
        "topic":  "Application security groups",
        "stem":  "A retailer has 20 web servers and 10 application servers. The NSG contains a rule for every web server IP address, and adding a server requires editing multiple rules. You must group servers by role and reference the groups in NSG rules.\n\nWhat should you implement?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create an application security group per tier, associate each NIC with the correct group, and use the groups as rule sources and destinations."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create an NSG per virtual machine and copy the existing rules into each NSG."
                        },
                        {
                            "letter":  "C",
                            "text":  "Replace the rules with service tags for VirtualNetwork and Internet."
                        },
                        {
                            "letter":  "D",
                            "text":  "Deploy Azure Firewall and migrate all filtering to firewall policy."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Application security groups provide an application-centric grouping of virtual machines. You join each NIC to the ASG for its tier and then use the ASG as the source or destination in NSG rules. New servers added to the group automatically inherit the rules, so you no longer maintain per-IP rules or place servers in dedicated subnets.\n\n- **B** is wrong. Per-VM NSGs multiply management overhead and do not create a role-based grouping.\n- **C** is wrong. Service tags represent Azure service prefixes; they do not describe your own web and application tiers.\n- **D** is wrong. Azure Firewall is a different, heavier control and is not required to group VMs for NSG rules.\n\nExam tip: ASGs group your VMs, while service tags group Microsoft\u0027s service addresses.",
        "source":  "Configure network security groups — Implement application security groups"
    },
    {
        "id":  146,
        "domain":  "network",
        "topic":  "Augmented security rules",
        "stem":  "An NSG must allow inbound traffic from four separate partner IP ranges to TCP ports 80, 443, 8080, and 8090. You want the fewest rules and the least ongoing administration.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "One augmented rule that lists all four IP ranges and all four ports."
                        },
                        {
                            "letter":  "B",
                            "text":  "One rule per partner IP range, each listing all four ports."
                        },
                        {
                            "letter":  "C",
                            "text":  "One rule per port, each listing all four IP ranges."
                        },
                        {
                            "letter":  "D",
                            "text":  "A service tag rule for Internet and an application security group for the partners."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A single NSG rule can contain multiple source addresses, multiple destination ports, and a mix of service tags, ASGs, and IP ranges. This is called an augmented security rule, and it collapses what would otherwise be sixteen rules into one. The transcript recommends it specifically to prevent rule sprawl in environments with many ranges or services.\n\n- **B** is wrong. Four rules still work but require more maintenance than one combined rule.\n- **C** is wrong. Four port-based rules also multiply administration and are unnecessary.\n- **D** is wrong. Internet would allow far more than the four partner ranges, and ASGs group your VMs rather than external partners.\n\nExam tip: a single NSG rule accepts comma-separated ports and addresses, so consolidate before you multiply rules.",
        "source":  "Configure network security groups — Create network security group rules"
    },
    {
        "id":  147,
        "domain":  "network",
        "topic":  "Intra-subnet isolation",
        "stem":  "A development subnet hosts several virtual machines that must not communicate with one another. No other requirement applies to the subnet, and you want a single control at the subnet level.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An NSG associated with the subnet that denies all inbound and outbound traffic."
                        },
                        {
                            "letter":  "B",
                            "text":  "An NSG on every network interface that allows only RDP."
                        },
                        {
                            "letter":  "C",
                            "text":  "A user-defined route with next hop None for the subnet prefix."
                        },
                        {
                            "letter":  "D",
                            "text":  "An application security group containing all the virtual machines."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "An NSG associated with a subnet applies to traffic between all virtual machines in that subnet, including intra-subnet traffic. Denying all inbound and outbound traffic in that NSG isolates the machines from each other and from other networks, which satisfies the single-control requirement. The default rules would otherwise allow virtual network traffic, so the explicit deny must take precedence.\n\n- **B** is wrong. Per-NIC NSGs are multiple controls and allow RDP, which still permits some communication.\n- **C** is wrong. A None route affects traffic leaving the subnet, but traffic between VMs in the same subnet is delivered directly and is not routed.\n- **D** is wrong. An ASG is only a grouping used inside rules; by itself it neither allows nor denies traffic.\n\nExam tip: intra-subnet traffic is still filtered by the subnet NSG, so you can isolate a subnet without a UDR.",
        "source":  "Configure network security groups — Determine network security group effective rules"
    },
    {
        "id":  148,
        "domain":  "network",
        "topic":  "NSG service tags",
        "stem":  "An NSG must allow outbound access to Azure Storage while blocking all other internet destinations. Storage\u0027s public IP addresses change frequently, and you do not want to maintain address lists.\n\nWhat should you use as the destination?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "The Storage service tag."
                        },
                        {
                            "letter":  "B",
                            "text":  "A static list of current Storage IP addresses."
                        },
                        {
                            "letter":  "C",
                            "text":  "An application security group containing the storage account."
                        },
                        {
                            "letter":  "D",
                            "text":  "An FQDN entry in the NSG rule."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A service tag represents the IP prefixes used by a specific Azure service, and Microsoft maintains the list as addresses change. Using the Storage tag in an NSG rule allows Storage traffic without hard-coded ranges. Regional variants such as Storage.WestEurope can narrow the scope further. The tag is maintained by Microsoft, so newly added Storage endpoints are covered without a rule change.\n\n- **B** is wrong. Hard-coded addresses become stale and require manual updates.\n- **C** is wrong. An ASG groups your virtual machines or NICs, not an Azure Storage account.\n- **D** is wrong. NSG rules filter by IP address, service tag, or ASG; they do not accept FQDNs.\n\nExam tip: service tags are for Microsoft service prefixes; ASGs are for your own workloads.",
        "source":  "Configure network security groups — Determine network security group rules"
    },
    {
        "id":  149,
        "domain":  "network",
        "topic":  "Azure Bastion access",
        "stem":  "The diagram shows production virtual machines that have no public IP addresses, behind an Azure Bastion host. Administrators must connect by using RDP and SSH from a web browser, without a VPN and without exposing management ports to the internet.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Bastion into a dedicated AzureBastionSubnet in the virtual network."
                        },
                        {
                            "letter":  "B",
                            "text":  "A jump-box virtual machine with a public IP address in the same subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "A site-to-site VPN between each administrator\u0027s computer and Azure."
                        },
                        {
                            "letter":  "D",
                            "text":  "Just-in-time VM access with RDP and SSH opened to the internet on request."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Bastion is a managed platform service that provides browser-based RDP and SSH over TLS on port 443. It is deployed into a dedicated subnet named AzureBastionSubnet, and it connects to virtual machines by using their private IP addresses. The protected virtual machines need no public IP addresses and no inbound management ports, which removes them from internet scanning.\n\n- **B** is wrong. A jump box still needs a public IP and its own patching, hardening, and management, and it exposes RDP or SSH.\n- **C** is wrong. A site-to-site VPN is a heavier design and does not provide browser-based access for roaming administrators.\n- **D** is wrong. Just-in-time access reduces exposure but still requires a public entry point and open management ports when access is granted.\n\nExam tip: Bastion needs its own subnet named AzureBastionSubnet; the workload VMs stay private.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (Azure Bastion)",
        "diagram":  "bastion"
    },
    {
        "id":  150,
        "domain":  "network",
        "topic":  "Bastion deployment requirements",
        "stem":  "You are planning an Azure Bastion deployment for a hub virtual network.\n\nWhich two requirements must the design satisfy? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A dedicated subnet named AzureBastionSubnet, at least /26 in size."
                        },
                        {
                            "letter":  "B",
                            "text":  "A Standard SKU, static public IP address in the same region as the Bastion host."
                        },
                        {
                            "letter":  "C",
                            "text":  "A public IP address attached to every protected virtual machine."
                        },
                        {
                            "letter":  "D",
                            "text":  "An NSG rule that allows RDP and SSH from the internet to the protected subnet."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Azure Bastion requires a subnet named exactly AzureBastionSubnet, and current guidance requires at least a /26 prefix. The host also needs a Standard SKU, static public IP address in the same region; that address is the client entry point. The subnet must be dedicated to Bastion, must not host other resources, and must be in the same virtual network as the target VMs. The protected virtual machines keep private addresses and need no inbound management rules.\n\n- **C** is wrong. Bastion connects over private IP addresses; public IPs on the workload VMs would reintroduce the exposure it removes.\n- **D** is wrong. Management ports stay closed to the internet; Bastion reaches the VMs from inside the virtual network.\n\nExam tip: remember the exact subnet name, the /26 minimum, and the Standard static public IP.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (Azure Bastion)"
    },
    {
        "id":  151,
        "domain":  "network",
        "topic":  "Service endpoints",
        "stem":  "A storage account must be reachable only from the app subnet over the Azure backbone. The application does not require a private IP address for the storage account, and you want the least administrative effort.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Enable the Microsoft.Storage service endpoint on the app subnet and restrict the storage firewall to that virtual network and subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a private endpoint for the storage account in the app subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "Peer the app virtual network to a new storage virtual network."
                        },
                        {
                            "letter":  "D",
                            "text":  "Leave the storage account open to all networks and rely on an NSG on the app subnet."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A service endpoint extends the virtual network\u0027s identity to the storage service and routes traffic to it over the Azure backbone. Enabling Microsoft.Storage on the app subnet creates the route, and the storage account firewall can then allow only that virtual network and subnet. No private IP or additional network appliance is required, which keeps effort low.\n\n- **B** is wrong. A private endpoint works but adds a private IP, DNS configuration, and more moving parts than this requirement needs.\n- **C** is wrong. Peering does not restrict the storage account and adds an unnecessary network.\n- **D** is wrong. An NSG controls outbound traffic from the subnet but does not restrict who can reach the storage public endpoint.\n\nExam tip: service endpoints are subnet-scoped and keep the service\u0027s public endpoint; private endpoints give the service a private IP.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (service endpoints)"
    },
    {
        "id":  152,
        "domain":  "network",
        "topic":  "Private endpoints",
        "stem":  "The diagram shows a storage account that must be accessed from the virtual network at the private IP 10.30.2.5. Public network access to the storage account must be disabled.\n\nWhat should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A private endpoint for the storage account in a virtual network subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "A service endpoint for Microsoft.Storage on the application subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "A NAT gateway on the application subnet."
                        },
                        {
                            "letter":  "D",
                            "text":  "A public DNS record that maps the storage name to 10.30.2.5."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A private endpoint is a network interface in your subnet that connects to a service through Azure Private Link. The service receives a private IP address from the subnet, and you can disable public network access so the account is reachable only through that endpoint. The endpoint also integrates with private DNS so clients resolve the service name to the private address.\n\n- **B** is wrong. A service endpoint keeps the service\u0027s public IP and only restricts access by subnet; it does not provide 10.30.2.5.\n- **C** is wrong. A NAT gateway provides outbound internet translation and has no role in private service access.\n- **D** is wrong. A public record cannot make a public service reachable at a private IP, and it would mislead clients.\n\nExam tip: private endpoint equals a NIC with a private IP; service endpoint equals a subnet identity on the public endpoint.",
        "source":  "AZ-104 study guide — Secure access to Azure resources (Azure Private Link)",
        "diagram":  "private-endpoint"
    },
    {
        "id":  153,
        "domain":  "network",
        "topic":  "Private endpoint DNS",
        "stem":  "You created a private endpoint for a storage account. Clients must resolve the storage name to the endpoint\u0027s private IP without custom DNS servers or hosts-file edits. You want the least administrative effort.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A private DNS zone named privatelink.blob.core.windows.net, linked to the virtual network, with a DNS zone group on the private endpoint."
                        },
                        {
                            "letter":  "B",
                            "text":  "A public DNS zone with an A record for the storage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "A DNS server virtual machine that forwards queries to the internet."
                        },
                        {
                            "letter":  "D",
                            "text":  "A CNAME record in the public contoso.com zone."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Private Link uses the privatelink.\u003cservice\u003e DNS namespace. Creating that private zone, linking it to the virtual network, and adding a DNS zone group to the private endpoint automates the A record and keeps it synchronized with the endpoint\u0027s private IP. The zone group creates the necessary record and removes the need to edit DNS by hand when the endpoint changes. Clients then resolve the storage name to the private address with no manual record maintenance.\n\n- **B** is wrong. A public zone would publish the private address publicly and would not be used by Azure-provided DNS inside the virtual network.\n- **C** is wrong. A custom DNS server adds infrastructure and administration that the zone group avoids.\n- **D** is wrong. A public CNAME cannot override resolution inside the virtual network and points in the wrong direction.\n\nExam tip: use a privatelink zone plus a zone group so the private endpoint maintains its own DNS record.",
        "source":  "AZ-104 study guide — Secure access to Azure resources (Private Link DNS integration)"
    },
    {
        "id":  154,
        "domain":  "network",
        "topic":  "DNS zone delegation",
        "stem":  "You create a public Azure DNS zone for contoso.com and must delegate the domain from the registrar.\n\nWhich two statements are true? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "You must configure all four Azure DNS name servers at the registrar."
                        },
                        {
                            "letter":  "B",
                            "text":  "You can verify delegation by querying the zone\u0027s SOA record."
                        },
                        {
                            "letter":  "C",
                            "text":  "The NS and SOA record sets must be created manually before delegation."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure DNS can register the contoso.com domain name for you."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Delegation points the registrar\u0027s NS records at the four name servers Azure DNS assigns to the zone, and all four must be used. Azure creates the NS and SOA record sets automatically when the zone is created, so no manual records are needed. The registrar\u0027s delegation and those automatic records are separate: delegation makes Azure authoritative, while the records answer queries. Querying the SOA record, for example with `nslookup -type=SOA contoso.com`, confirms that the delegated domain now resolves through Azure DNS.\n\n- **C** is wrong. NS and SOA records are created automatically with the zone and are deleted with it.\n- **D** is wrong. Azure DNS hosts zones; domain registration must be done through a registrar.\n\nExam tip: delegation is proven by an SOA query returning Azure DNS name servers, not by the zone existing in the portal.",
        "source":  "Host your domain on Azure DNS — Configure Azure DNS to host your domain"
    },
    {
        "id":  155,
        "domain":  "network",
        "topic":  "DNS alias records",
        "stem":  "The apex of contoso.com must point to the public IP address of a Standard load balancer. The load balancer\u0027s address might change, and you must prevent a dangling DNS record. You want the least administrative effort.\n\nWhat should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An alias A record at the zone apex that targets the public IP resource."
                        },
                        {
                            "letter":  "B",
                            "text":  "A CNAME record at the zone apex that targets the load balancer\u0027s DNS name."
                        },
                        {
                            "letter":  "C",
                            "text":  "A standard A record that contains the current public IP address."
                        },
                        {
                            "letter":  "D",
                            "text":  "An HTTP redirect from contoso.com to the load balancer\u0027s address."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "An Azure alias record can point an A, AAAA, or CNAME record at an Azure resource such as a public IP address. At the zone apex, an alias A record solves the problem that a CNAME cannot exist there. Because the alias follows the resource\u0027s lifecycle, changes to the public IP are reflected automatically and the record cannot dangle. Alias records can also target Traffic Manager, Front Door, and CDN endpoints.\n\n- **B** is wrong. A CNAME cannot coexist with the mandatory SOA and NS records at the zone apex.\n- **C** is wrong. A static A record becomes stale when the public IP changes, which is exactly the dangling-record risk.\n- **D** is wrong. A redirect still requires a resolvable address and does not track the resource.\n\nExam tip: apex plus Azure resource equals alias record; alias supports A, AAAA, and CNAME.",
        "source":  "Host your domain on Azure DNS — Dynamically resolve resource name by using alias record"
    },
    {
        "id":  156,
        "domain":  "network",
        "topic":  "CNAME at zone apex",
        "stem":  "Contoso hosts contoso.com in Azure DNS. The team wants www.contoso.com to point to an Azure web app and contoso.com to point to the same app. A colleague proposes a CNAME record named @ for the apex.\n\nWhy will that proposal fail?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A CNAME cannot exist at the zone apex because the zone already has SOA and NS records there."
                        },
                        {
                            "letter":  "B",
                            "text":  "Azure DNS supports CNAME records only for subdomains of api."
                        },
                        {
                            "letter":  "C",
                            "text":  "A CNAME can point only to an IP address, not to a hostname."
                        },
                        {
                            "letter":  "D",
                            "text":  "The apex requires an MX record before any other record type can be added."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The zone apex already contains the SOA and NS record sets that Azure DNS creates automatically, and a CNAME cannot coexist with other records at the same name. For the apex, use an alias A or AAAA record that targets the Azure resource. The www name can use a normal CNAME to the app\u0027s hostname because it is not the apex.\n\n- **B** is wrong. Azure DNS supports CNAME records at ordinary subdomains, not only under api.\n- **C** is wrong. A CNAME maps one name to another name; an A record maps a name to an IP address.\n- **D** is wrong. An MX record is for mail routing and is not a prerequisite for other records.\n\nExam tip: CNAME is fine for www, but the apex needs A, AAAA, or an alias.",
        "source":  "Host your domain on Azure DNS — What is Azure DNS?"
    },
    {
        "id":  157,
        "domain":  "network",
        "topic":  "Private DNS zone links",
        "stem":  "The diagram shows a private DNS zone named contoso.internal linked to VNet1 and VNet2. The team is reviewing how resolution and registration behave.\n\nWhich two statements are true? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A virtual network must be linked to the private zone before its resources can resolve records in it."
                        },
                        {
                            "letter":  "B",
                            "text":  "A virtual network link always provides resolution and can optionally enable automatic registration."
                        },
                        {
                            "letter":  "C",
                            "text":  "Peering two virtual networks automatically grants access to each other\u0027s private zones."
                        },
                        {
                            "letter":  "D",
                            "text":  "Private zones must be delegated at a public domain registrar before use."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Private DNS zones are not published on the internet. Resolution works only for virtual networks that have a link to the zone. A link always provides resolution and can optionally enable automatic registration, which creates records for virtual machines in the linked network; without registration, you create records manually. The zone name does not need to be a public domain, and the same name can exist in a public zone for split-horizon resolution.\n\n- **C** is wrong. Peering provides network connectivity, but it does not link a private zone or grant DNS resolution.\n- **D** is wrong. Private zones are internal to Azure and do not require registrar delegation.\n\nExam tip: private DNS access is granted by a virtual network link, never by peering alone.",
        "source":  "Host your domain on Azure DNS — Configure Azure DNS to host your domain",
        "diagram":  "dns-private"
    },
    {
        "id":  158,
        "domain":  "network",
        "topic":  "Public and internal load balancers",
        "stem":  "The diagram shows a public load balancer distributing internet traffic to the web tier and an internal load balancer distributing web-tier traffic to the application tier. The application tier must not be reachable from the internet.\n\nWhich frontend configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A public IP frontend on the public load balancer and a private IP frontend on the internal load balancer."
                        },
                        {
                            "letter":  "B",
                            "text":  "A public IP frontend on both load balancers."
                        },
                        {
                            "letter":  "C",
                            "text":  "A private IP frontend on both load balancers."
                        },
                        {
                            "letter":  "D",
                            "text":  "A private IP frontend on the public load balancer and a public IP frontend on the internal load balancer."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The frontend IP determines the load balancer type. A public load balancer maps a public IP and port to the private IP and port of backend VMs, so internet clients can reach the web tier. An internal load balancer uses a private frontend, and its address is never exposed to an internet endpoint, so the application tier stays private. Both load balancers operate at Layer 4 and distribute flows by using a five-tuple hash.\n\n- **B** is wrong. A public frontend on the internal tier would expose the application servers to the internet.\n- **C** is wrong. A private frontend on the web tier would prevent internet clients from reaching the site.\n- **D** is wrong. The two frontend types are reversed, which breaks both requirements.\n\nExam tip: the frontend IP type, not the backend pool, decides whether a load balancer is public or internal.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works",
        "diagram":  "lb-public-internal"
    },
    {
        "id":  159,
        "domain":  "network",
        "topic":  "Standard Load Balancer features",
        "stem":  "You are comparing a Standard SKU load balancer with the retired Basic SKU.\n\nWhich two statements are true of the Standard SKU? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "It is secure by default, so an NSG must allow client traffic and health probes."
                        },
                        {
                            "letter":  "B",
                            "text":  "It supports high availability ports rules on an internal load balancer."
                        },
                        {
                            "letter":  "C",
                            "text":  "It supports dynamically allocated public IP addresses."
                        },
                        {
                            "letter":  "D",
                            "text":  "It can load balance backends in unpeered virtual networks in any region."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Standard Load Balancer is closed by default: traffic is blocked until an NSG permits it, including the AzureLoadBalancer service tag for probes. It also supports HA ports, a rule with protocol All and port 0 that load balances every TCP and UDP flow on an internal Standard load balancer. Standard SKU public IPs are static. Zone redundancy depends on the frontend configuration and regional support, so the backend pool must also be spread across zones.\n\n- **C** is wrong. Standard SKU public IP addresses are always static; dynamic allocation belongs to the retired Basic SKU.\n- **D** is wrong. Backends must be reachable through the virtual network, peering, or a Global tier design; regional Standard Load Balancer does not span arbitrary networks.\n\nExam tip: moving to Standard Load Balancer often requires adding NSG rules because of secure-by-default behavior.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works"
    },
    {
        "id":  160,
        "domain":  "network",
        "topic":  "HA ports rule",
        "stem":  "Two active-active network virtual appliances sit behind an internal Standard load balancer. They must receive every TCP and UDP flow on every port, including protocols you have not yet documented. You want the least administrative effort.\n\nWhich load balancer rule should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A rule with protocol All and port 0."
                        },
                        {
                            "letter":  "B",
                            "text":  "One rule for each port and protocol in use."
                        },
                        {
                            "letter":  "C",
                            "text":  "An inbound NAT rule for each appliance."
                        },
                        {
                            "letter":  "D",
                            "text":  "An outbound rule with a public IP prefix."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A rule with protocol All and port 0 is an HA ports rule. It load balances all TCP and UDP flows on all ports of an internal Standard load balancer, with the decision made per flow by using the five-tuple hash. This is the standard design for active-active NVAs and avoids maintaining a rule per port.\n\n- **B** is wrong. Per-port rules must be updated whenever a new port is introduced and do not meet the \"all ports\" requirement.\n- **C** is wrong. Inbound NAT rules map specific ports to specific instances; they do not distribute all flows.\n- **D** is wrong. An outbound rule controls source NAT for egress and does not accept inbound flows.\n\nExam tip: HA ports means All plus 0, and it is available on internal Standard load balancers.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works"
    },
    {
        "id":  161,
        "domain":  "network",
        "topic":  "Outbound load balancer rules",
        "stem":  "Virtual machines behind an internal Standard load balancer need outbound internet access through a predictable public IP address owned by the organization. No inbound internet access is required.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An outbound rule on the load balancer that uses a public IP address or prefix."
                        },
                        {
                            "letter":  "B",
                            "text":  "An inbound NAT rule for TCP 443."
                        },
                        {
                            "letter":  "C",
                            "text":  "An HA ports rule on the internal frontend."
                        },
                        {
                            "letter":  "D",
                            "text":  "A public IP address on every virtual machine NIC."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "An outbound rule configures source NAT for the instances in the backend pool, letting them reach the internet through a public IP address or public IP prefix that you control. The outbound rule is the supported way to give a Standard load balancer backend predictable egress without exposing inbound ports.\n\n- **B** is wrong. An inbound NAT rule publishes a specific port inward; it does not provide general outbound access.\n- **C** is wrong. HA ports distribute inbound flows to the backend and do not create SNAT for egress.\n- **D** is wrong. Per-NIC public IPs work but add cost and exposure and do not use the load balancer\u0027s outbound design.\n\nExam tip: outbound rules equal SNAT for the whole backend pool; use a prefix when you need a stable range.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works"
    },
    {
        "id":  162,
        "domain":  "network",
        "topic":  "Session persistence",
        "stem":  "A legacy application stores session state in memory on each web server. Users must stay on the same backend server for the life of their session, but no source-port affinity is required. You want the least administrative effort.\n\nWhich load balancer setting should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Session persistence set to Client IP (2-tuple)."
                        },
                        {
                            "letter":  "B",
                            "text":  "Session persistence set to None."
                        },
                        {
                            "letter":  "C",
                            "text":  "An HA ports rule."
                        },
                        {
                            "letter":  "D",
                            "text":  "A longer health probe interval."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Client IP persistence uses a two-tuple hash of source IP and destination IP, so successive requests from the same client go to the same backend instance. That keeps in-memory session state on one server without requiring the source port. The default None setting allows any healthy instance to handle each request. Use the three-tuple option only when the application also needs protocol affinity.\n\n- **B** is wrong. None distributes new connections across any healthy backend and breaks local session state.\n- **C** is wrong. HA ports change which flows are load balanced, not how a client is pinned to a backend.\n- **D** is wrong. Probe timing affects health detection, not session affinity.\n\nExam tip: Client IP equals 2-tuple; Client IP and protocol equals 3-tuple and adds protocol to the hash.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works"
    },
    {
        "id":  163,
        "domain":  "network",
        "topic":  "Standard LB secure by default",
        "stem":  "A team migrates an internet-facing application from a Basic load balancer to a Standard load balancer. The frontend public IP responds, but backend web servers no longer receive client traffic, and health probes show unhealthy. The application listens correctly on the VMs.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Add NSG rules that allow client traffic and the AzureLoadBalancer service tag to the backend subnet."
                        },
                        {
                            "letter":  "B",
                            "text":  "Change the load balancer back to the Basic SKU."
                        },
                        {
                            "letter":  "C",
                            "text":  "Attach public IP addresses to the backend virtual machines."
                        },
                        {
                            "letter":  "D",
                            "text":  "Disable health probes on the load balancer."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Standard Load Balancer is secure by default, so backend traffic is blocked until a network security group explicitly allows it. Both client traffic and health probes must be permitted; probes come from the AzureLoadBalancer service tag. The Basic SKU was open by default, which is why the same NSG configuration appeared to work before the migration.\n\n- **B** is wrong. Basic Load Balancer is retired and returning to it is neither supported nor necessary.\n- **C** is wrong. Public IPs on the VMs add exposure and do not fix probe or load balancer traffic.\n- **D** is wrong. Disabling probes does not open the NSG path and would let traffic reach unhealthy instances.\n\nExam tip: after any move to Standard Load Balancer, verify NSG rules for both client ports and AzureLoadBalancer.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (Standard Load Balancer security)"
    },
    {
        "id":  164,
        "domain":  "network",
        "topic":  "Application Gateway path routing",
        "stem":  "The diagram shows Application Gateway with WAF in front of two backend pools. Requests to /images/* must go to the image pool, requests to /video/* must go to the video pool, and all other requests must go to a default pool.\n\nWhich configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A listener plus a path-based routing rule with URL path mappings and a default backend pool."
                        },
                        {
                            "letter":  "B",
                            "text":  "A listener plus a basic routing rule that sends every request to both pools."
                        },
                        {
                            "letter":  "C",
                            "text":  "A multi-site listener only, with no routing rule."
                        },
                        {
                            "letter":  "D",
                            "text":  "An HA ports rule on the Application Gateway frontend."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Application Gateway routes at Layer 7. A listener accepts the request, and a path-based routing rule evaluates URL paths in order, sending /images/* and /video/* to their pools and using the default pool when no path matches. More specific paths should be listed before broader wildcards. The rule also references backend HTTP settings that define the protocol, port, and health probe.\n\n- **B** is wrong. A basic rule sends all requests to one pool and cannot separate images from video.\n- **C** is wrong. A listener without a routing rule does not forward requests to a backend.\n- **D** is wrong. HA ports are a Layer 4 load balancer feature and have no meaning for Application Gateway HTTP routing.\n\nExam tip: path-based routing needs a listener, a path map, and a default target for unmatched requests.",
        "source":  "Introduction to Azure Application Gateway — How Azure Application Gateway works",
        "diagram":  "appgw-waf"
    },
    {
        "id":  165,
        "domain":  "network",
        "topic":  "WAF prevention mode",
        "stem":  "A public web application must block SQL injection and cross-site scripting attempts before requests reach the backend servers. The security team wants malicious requests denied, not merely logged.\n\nWhich configuration should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "WAF_v2 with an enabled WAF policy in Prevention mode."
                        },
                        {
                            "letter":  "B",
                            "text":  "WAF_v2 with an enabled WAF policy in Detection mode."
                        },
                        {
                            "letter":  "C",
                            "text":  "Standard_v2 with health probes enabled."
                        },
                        {
                            "letter":  "D",
                            "text":  "A network security group on the Application Gateway subnet."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "WAF_v2 inspects HTTP requests after the listener terminates TLS, so it can evaluate decrypted content against managed rule sets such as the Microsoft Default Rule Set. Detection mode logs matches but allows the request; Prevention mode blocks requests that match the policy. Therefore Prevention is required to deny SQL injection and cross-site scripting. Policies can be scoped to the gateway, a listener, or a path, and managed rule sets are updated as threats evolve.\n\n- **B** is wrong. Detection mode provides visibility only and does not block the attack.\n- **C** is wrong. Standard_v2 provides load balancing without WAF inspection.\n- **D** is wrong. An NSG filters by IP address and port at Layer 4 and cannot inspect HTTP payloads.\n\nExam tip: WAF needs WAF_v2 plus an enabled policy; the mode decides log versus block.",
        "source":  "Introduction to Azure Application Gateway — How Azure Application Gateway works"
    },
    {
        "id":  166,
        "domain":  "network",
        "topic":  "Connection draining",
        "stem":  "Technicians will remove web servers from an Application Gateway backend pool one at a time for maintenance. New requests must stop going to a server being removed, but in-flight requests must be allowed to finish. You want the least administrative effort.\n\nWhich feature should you enable?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Connection draining in the backend HTTP settings."
                        },
                        {
                            "letter":  "B",
                            "text":  "Cookie-based affinity."
                        },
                        {
                            "letter":  "C",
                            "text":  "A longer health probe interval."
                        },
                        {
                            "letter":  "D",
                            "text":  "Autoscaling with a higher minimum instance count."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Connection draining supports planned removal of a backend server. When the server is deregistered, the gateway stops assigning new requests to it and allows existing connections to complete within a configured timeout. That matches a maintenance workflow without dropping active user sessions.\n\n- **B** is wrong. Cookie affinity keeps a client on the same server while it is healthy; it does not drain connections during removal.\n- **C** is wrong. Probe timing affects health detection and can delay removal, not gracefully complete requests.\n- **D** is wrong. Autoscaling changes capacity and does not manage in-flight connections.\n\nExam tip: connection draining is for planned removal; health probes are for unplanned failure.",
        "source":  "Introduction to Azure Application Gateway — What is Azure Application Gateway?"
    },
    {
        "id":  167,
        "domain":  "network",
        "topic":  "Azure Front Door",
        "stem":  "The diagram shows the same web application deployed in three Azure regions. Users worldwide must reach the closest healthy regional stack, with TLS offload, path-based routing, caching, WAF protection, and fast failover.\n\nWhich service should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Front Door."
                        },
                        {
                            "letter":  "B",
                            "text":  "Azure Traffic Manager."
                        },
                        {
                            "letter":  "C",
                            "text":  "Azure Application Gateway in one region."
                        },
                        {
                            "letter":  "D",
                            "text":  "A public Standard load balancer in one region."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Front Door is a global Layer 7 application delivery network. It provides global load balancing and acceleration, TLS offload, path-based routing, caching, WAF, and fast failover across regional origins. Its anycast frontend and health probes let it stop sending users to an unhealthy region quickly. A Front Door profile uses endpoints, origin groups, and routes to define how requests reach each regional stack.\n\n- **B** is wrong. Traffic Manager is DNS-based and can fail over more slowly because of DNS caching and clients that ignore TTLs.\n- **C** is wrong. Application Gateway is regional and does not provide global anycast entry or multi-region failover by itself.\n- **D** is wrong. A load balancer is Layer 4 and regional; it cannot route by path or provide caching and WAF.\n\nExam tip: global plus Layer 7 plus WAF and caching points to Front Door, not Traffic Manager.",
        "source":  "AZ-104 study guide — Implement and manage virtual networking (Azure Front Door)",
        "diagram":  "front-door"
    },
    {
        "id":  168,
        "domain":  "network",
        "topic":  "Cross-VNet name resolution",
        "stem":  "VNet-A and VNet-B are peered. A virtual machine in VNet-A can ping a virtual machine in VNet-B by IP address, but cannot resolve its hostname by using the Azure-provided DNS service. No custom DNS servers are deployed.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A private DNS zone linked to both virtual networks, with records for the virtual machines."
                        },
                        {
                            "letter":  "B",
                            "text":  "A user-defined route from VNet-A to VNet-B."
                        },
                        {
                            "letter":  "C",
                            "text":  "A public DNS zone containing the virtual machine hostnames."
                        },
                        {
                            "letter":  "D",
                            "text":  "An NSG rule that allows UDP port 53 between the virtual networks."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure\u0027s built-in name resolution is scoped to a single virtual network and does not resolve names across peered virtual networks. Linking both networks to an Azure private DNS zone provides a shared namespace that clients in either network can query. Alternatively, you could deploy custom DNS servers, but a private zone is the managed option.\n\n- **B** is wrong. Routing already works, as the successful ping by IP address proves.\n- **C** is wrong. A public zone would expose internal names and is not used by the virtual network\u0027s resolver.\n- **D** is wrong. NSGs do not provide name resolution; DNS queries to Azure DNS do not travel as ordinary peer traffic.\n\nExam tip: peering gives packets, not names; add a private DNS zone link for cross-VNet resolution.",
        "source":  "Configure Azure Virtual Network peering — Determine Azure Virtual Network peering uses"
    },
    {
        "id":  169,
        "domain":  "network",
        "topic":  "IP flow verify",
        "stem":  "Users cannot establish RDP from 10.1.1.4 to 10.2.1.4 on TCP 3389. You suspect an NSG rule but do not know which one. You want the least administrative effort to identify whether the flow is allowed or denied and which rule is responsible.\n\nWhich Network Watcher tool should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "IP flow verify."
                        },
                        {
                            "letter":  "B",
                            "text":  "Next hop."
                        },
                        {
                            "letter":  "C",
                            "text":  "Topology."
                        },
                        {
                            "letter":  "D",
                            "text":  "Packet capture."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "IP flow verify tests a five-tuple flow: source and destination IP addresses, source and destination ports, and protocol. You specify the VM and NIC, the direction, and the flow, and the tool reports whether the packet is allowed or denied plus the name of the security rule responsible. That directly answers the question without capturing packets. The test is logical, so no traffic needs to be flowing at the time you run it.\n\n- **B** is wrong. Next hop reports routing information, not NSG rule evaluation.\n- **C** is wrong. Topology visualizes resources and relationships but does not evaluate a flow.\n- **D** is wrong. Packet capture records traffic and requires a session and storage; it does not name the deciding rule.\n\nExam tip: IP flow verify answers \"allowed or denied, and by which rule\" for one specific five-tuple.",
        "source":  "Introduction to Azure Network Watcher — How Azure Network Watcher works"
    },
    {
        "id":  170,
        "domain":  "network",
        "topic":  "Network Watcher routing tools",
        "stem":  "A subnet\u0027s traffic is reaching an unexpected network virtual appliance instead of the internet. You need to confirm the effective next hop and identify whether a user-defined route is responsible.\n\nWhich two Network Watcher tools can help? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Next hop"
                        },
                        {
                            "letter":  "B",
                            "text":  "IP flow verify"
                        },
                        {
                            "letter":  "C",
                            "text":  "Packet capture"
                        },
                        {
                            "letter":  "D",
                            "text":  "Connection troubleshoot"
                        }
                    ],
        "answers":  [
                        "A",
                        "D"
                    ],
        "explanation":  "Next hop returns the next hop type, the next hop IP address, and the route table ID for a destination from a specific VM and NIC. If the route is user-defined, it returns that route; otherwise it reports System Route. Connection troubleshoot can report a UserDefinedRoute fault when an incorrect custom route breaks connectivity. Topology can show the resources along a path, but it does not return the effective route for a destination.\n\n- **B** is wrong. IP flow verify evaluates NSG allow or deny decisions, not the selected next hop.\n- **C** is wrong. Packet capture records packets but does not report the effective route or its type.\n\nExam tip: next hop shows where traffic will go; connection troubleshoot explains why a path fails.",
        "source":  "Introduction to Azure Network Watcher — How Azure Network Watcher works"
    },
    {
        "id":  171,
        "domain":  "monitor",
        "topic":  "Guest metrics",
        "stem":  "A Linux virtual machine reports Percentage CPU and Disk Read Bytes on its Overview page, but the operations team cannot find Available Memory or free logical-disk space. You must collect those guest measurements and analyze them with KQL.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Install Azure Monitor Agent and associate a data collection rule that sends guest performance counters to a Log Analytics workspace."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable boot diagnostics and review the serial log for memory statistics."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create a diagnostic setting that sends platform metrics to a storage account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Add the VM to a metric alert rule that uses the Available Memory platform metric."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Platform metrics are emitted by the host hypervisor and cover the compute, storage, and network resources Azure allocates to the VM. They never include values read inside the guest, so memory available to the OS and filesystem free space are absent. Guest measurements require Azure Monitor Agent plus a data collection rule that defines which counters to collect and which workspace receives them. Once the data lands in tables such as `InsightsMetrics` or `Perf`, you can chart it with VM insights or query it with KQL.\n\n- **B** is wrong. Boot diagnostics captures hypervisor screenshots and serial console output for startup troubleshooting, not ongoing memory or disk telemetry.\n- **C** is wrong. A diagnostic setting forwards existing telemetry; it cannot invent guest counters that were never collected, and a storage account is not queried with KQL.\n- **D** is wrong. Available Memory is not a platform metric for a VM, so the alert rule cannot reference it until guest collection exists.\n\nPlatform metrics need no agent; guest metrics always need an agent and a DCR.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Monitoring for Azure VMs"
    },
    {
        "id":  172,
        "domain":  "monitor",
        "topic":  "Metric retention",
        "stem":  "Auditors require twelve months of CPU and network metrics for 80 virtual machines, and the data must remain queryable after any VM is deleted.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A diagnostic setting on each VM that streams platform metrics to a Log Analytics workspace configured with 365-day retention."
                        },
                        {
                            "letter":  "B",
                            "text":  "A 365-day retention setting in Metrics Explorer for each metric."
                        },
                        {
                            "letter":  "C",
                            "text":  "A shared dashboard with every chart pinned and its time range set to one year."
                        },
                        {
                            "letter":  "D",
                            "text":  "A diagnostic setting that exports metrics to a storage account, queried later from Metrics Explorer."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Monitor retains most platform metrics for 93 days, and that retention is fixed. Metrics Explorer has no retention setting, so neither the explorer nor a dashboard preserves a year of history. Diagnostic settings can route platform metrics to a Log Analytics workspace, where workspace or table retention governs how long the records stay queryable, and the data survives deletion of the source VM. Setting 365 days of interactive retention satisfies the audit while keeping KQL available.\n\n- **B** is wrong. Metrics Explorer has no retention control; the 93-day platform store is service-managed.\n- **C** is wrong. A dashboard only renders queries against retained data, so it stops showing a year of history once the underlying points expire.\n- **D** is wrong. Storage is a valid archive destination, but Metrics Explorer cannot query metrics from a storage account.\n\nPlatform metrics last 93 days; route them to Log Analytics when you need longer retention.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Monitoring for Azure VMs"
    },
    {
        "id":  173,
        "domain":  "monitor",
        "topic":  "Multi-resource metrics",
        "stem":  "Sixty virtual machines share one resource group, subscription, and region. You must compare their Percentage CPU over the last 24 hours on a single chart, with one line per VM.\n\nWhich approach requires the least administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Open Metrics Explorer, select the multi-resource scope, choose Percentage CPU, and split by resource ID."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a dashboard containing 60 separate charts, one for each virtual machine."
                        },
                        {
                            "letter":  "C",
                            "text":  "Write a KQL query that unions 60 per-VM queries against the Log Analytics workspace."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create 60 metric alert rules, one per virtual machine, and compare their incident history."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Metrics Explorer supports a classic multi-resource view for resources of the same type in the same subscription and region. You add the VMs to the chart scope once, select Percentage CPU, and use splitting by resource ID so each VM becomes its own line. That is a single configuration with no queries or per-VM objects to maintain. The same view also lets you choose aggregation, time range, and granularity, and you can pin the finished chart to a dashboard.\n\n- **B** is wrong. Sixty charts duplicate the same configuration 60 times and are slow to compare.\n- **C** is wrong. A union query requires guest or exported data in a workspace and far more authoring effort than a built-in metrics view.\n- **D** is wrong. Alert rules evaluate thresholds; they do not produce a comparative trend chart.\n\nMulti-resource scope requires the same resource type, subscription, and region.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Use metrics explorer to view detailed host metrics"
    },
    {
        "id":  174,
        "domain":  "monitor",
        "topic":  "Activity log routing",
        "stem":  "Contoso must keep Azure activity log records for seven years in immutable storage, forward them to an external SIEM through Event Hubs, and allow interactive KQL queries and alerting in a workspace. You are creating a subscription-level diagnostic setting.\n\nWhich three destinations should you include?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Log Analytics workspace."
                        },
                        {
                            "letter":  "B",
                            "text":  "A storage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "An event hub namespace."
                        },
                        {
                            "letter":  "D",
                            "text":  "A Recovery Services vault."
                        },
                        {
                            "letter":  "E",
                            "text":  "An Azure Monitor workspace."
                        }
                    ],
        "answers":  [
                        "A",
                        "B",
                        "C"
                    ],
        "explanation":  "A subscription diagnostic setting can send activity log entries to Azure Monitor Logs, a storage account, and Event Hubs at the same time, so one setting satisfies all three requirements. The workspace provides KQL and alerting for the recent window, storage provides cheap long-term archival that can be locked with an immutable policy, and Event Hubs streams events to the external SIEM. Activity log entries are retained in the platform for 90 days, so exporting is mandatory for the seven-year requirement.\n\n- **D** is wrong. A Recovery Services vault stores backup data and backup metadata; it is not a diagnostic setting destination.\n- **E** is wrong. An Azure Monitor workspace stores Prometheus metrics for managed Prometheus, not activity log records.\n\nA diagnostic setting can target multiple destinations, and activity log retention in the platform is only 90 days.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Monitoring for Azure VMs"
    },
    {
        "id":  175,
        "domain":  "monitor",
        "topic":  "Diagnostic settings at scale",
        "stem":  "You manage 200 resources that must each send logs to a central Log Analytics workspace. New resources are deployed every week, and the security team requires that diagnostic settings exist without manual follow-up.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign an Azure Policy initiative that uses DeployIfNotExists to create the diagnostic settings."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create the diagnostic settings manually for the current 200 resources and review the portal weekly."
                        },
                        {
                            "letter":  "C",
                            "text":  "Run a PowerShell script on a monthly schedule to create missing settings."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create one data collection rule per resource to forward the logs."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Policy can audit and, with DeployIfNotExists, automatically deploy diagnostic settings on resources that lack them, including resources created after the assignment. Assigning an initiative that groups diagnostic-setting definitions covers many resource types at once, and a remediation task brings existing resources into compliance. New deployments are evaluated automatically, which removes the weekly manual review and the gap between deployment and monitoring.\n\n- **B** is wrong. Manual creation leaves new resources unmonitored until someone notices them, which is exactly the failure the requirement forbids.\n- **C** is wrong. A monthly script leaves up to a month of blind spots and must be maintained as resource types change.\n- **D** is wrong. Data collection rules govern guest data collected by Azure Monitor Agent; they do not create resource diagnostic settings.\n\nPolicy with DeployIfNotExists enforces configuration continuously, not just at deployment time.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure diagnostic settings at scale (Microsoft Learn, Azure Policy built-in initiatives)"
    },
    {
        "id":  176,
        "domain":  "monitor",
        "topic":  "Workspace retention",
        "stem":  "A Log Analytics workspace currently uses the default retention. The security team must be able to run KQL queries against 24 months of `Syslog` and `AzureActivity` records at any time.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Set interactive retention on the workspace or tables to 730 days."
                        },
                        {
                            "letter":  "B",
                            "text":  "Set total retention to 730 days and leave interactive retention at 30 days."
                        },
                        {
                            "letter":  "C",
                            "text":  "Export the tables to a storage account and query them with KQL."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a second workspace with default retention and query both workspaces with union."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Interactive retention controls how long data remains directly queryable with KQL and can be set from 30 to 730 days, so 730 days is exactly the 24-month requirement. Retention can be set at the workspace level and overridden per table, which lets you keep verbose tables shorter and compliance tables longer. Raising retention increases storage cost, so scope the change to the tables the security team actually queries.\n\n- **B** is wrong. Total retention extends how long data is kept for search jobs and restore, but data beyond interactive retention is not directly queryable with a normal table query.\n- **C** is wrong. KQL queries workspace tables; archived storage requires a different retrieval mechanism and is not queried directly.\n- **D** is wrong. Two default workspaces still expire data at 30 days, and union does not restore deleted records.\n\nInteractive retention is 30–730 days; total retention can extend to 12 years for search jobs.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure Log Analytics workspace retention (Microsoft Learn, Log Analytics data retention)"
    },
    {
        "id":  177,
        "domain":  "monitor",
        "topic":  "KQL summarize",
        "stem":  "You need a KQL query that counts warning and error Syslog events per computer in five-minute bins for the last 24 hours.\n\nWhich query should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "`Syslog | where TimeGenerated \u003e ago(24h) | where SeverityLevel in (\"warning\", \"error\") | summarize Events = count() by Computer, bin(TimeGenerated, 5m)`"
                        },
                        {
                            "letter":  "B",
                            "text":  "`Syslog | project TimeGenerated, Computer | where ago(24h) | summarize Events = count() by Computer`"
                        },
                        {
                            "letter":  "C",
                            "text":  "`Syslog | summarize Events = count() by Computer | where TimeGenerated \u003e ago(24h)`"
                        },
                        {
                            "letter":  "D",
                            "text":  "`Syslog | where TimeGenerated \u003c ago(24h) | where SeverityLevel in (\"warning\", \"error\") | summarize Events = count() by Computer, bin(TimeGenerated, 5m)`"
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "The query filters on `TimeGenerated` first so the engine scans only the last 24 hours, then restricts severity to warning and error, and finally aggregates with `summarize`. Grouping by `Computer` and `bin(TimeGenerated, 5m)` produces one row per computer per five-minute interval, which is what a time chart expects. `count()` supplies the event total, and the alias `Events` makes the output readable.\n\n- **B** is wrong. `where ago(24h)` is not a valid time comparison, and projecting away `TimeGenerated` removes the field needed for binning and filtering.\n- **C** is wrong. The time filter runs after `summarize`, when `TimeGenerated` no longer exists as a row-level column.\n- **D** is wrong. `TimeGenerated \u003c ago(24h)` selects data older than 24 hours, the opposite of the requirement.\n\nFilter on time before summarizing, and use `bin()` to create fixed aggregation buckets.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Collect VM client event logs"
    },
    {
        "id":  178,
        "domain":  "monitor",
        "topic":  "Workspace-scoped KQL",
        "stem":  "You open Logs from the Log Analytics workspace rather than from the virtual machine. A query returns events from every onboarded computer, including servers outside the subscription. You must restrict the results to one VM.\n\nWhat should you add to the query?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A filter on the `_ResourceId` column for the VM\u0027s full resource ID."
                        },
                        {
                            "letter":  "B",
                            "text":  "A filter on `Computer` that matches the VM\u0027s hostname."
                        },
                        {
                            "letter":  "C",
                            "text":  "A narrower `TimeGenerated` range."
                        },
                        {
                            "letter":  "D",
                            "text":  "A `take 10` operator after the existing filters."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "When Logs opens with a resource scope, Azure Monitor adds the scope filter for you, so queries return only that resource. When you open Logs from a workspace, the query runs across the whole workspace and you must constrain it yourself. That distinction matters when one workspace receives data from several teams. Filtering on `_ResourceId` with the VM\u0027s full resource ID is unambiguous and works even when several computers share a hostname across subscriptions.\n\n- **B** is wrong. A computer name is not guaranteed unique across a shared workspace, so matching on it can include other servers.\n- **C** is wrong. Shortening the time range returns fewer rows but still mixes resources.\n- **D** is wrong. `take 10` limits row count, not resource scope, and may hide the data you need.\n\nResource-scoped Logs applies the filter automatically; workspace-scoped Logs requires `_ResourceId`.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Collect VM client event logs"
    },
    {
        "id":  179,
        "domain":  "monitor",
        "topic":  "Log alert rules",
        "stem":  "You must alert the on-call engineer when the message \"Failed password\" appears five times within 15 minutes on any monitored Linux VM. The events are already collected in a Log Analytics workspace.\n\nWhat should you create?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A log search alert rule that runs the Syslog query every five minutes, uses a 15-minute evaluation period, and triggers when the result count is greater than or equal to five."
                        },
                        {
                            "letter":  "B",
                            "text":  "A metric alert rule on Percentage CPU with a threshold of five percent."
                        },
                        {
                            "letter":  "C",
                            "text":  "An activity log alert rule that triggers when a virtual machine restarts."
                        },
                        {
                            "letter":  "D",
                            "text":  "A smart detection rule in Application Insights for failed requests."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Log search alert rules evaluate a KQL query on a schedule against a workspace. The rule\u0027s time range defines the window of data examined, the frequency defines how often it runs, and the threshold compares the measured result count to the configured value. Scoping the query to the Syslog table with the relevant message and severity, then setting the action group to the on-call distribution, produces the required notification.\n\n- **B** is wrong. CPU percentage is unrelated to authentication failures and cannot detect a log message.\n- **C** is wrong. An activity log alert watches control-plane operations such as restarts, not messages written inside the guest.\n- **D** is wrong. Smart detection analyzes application request telemetry and does not query Syslog events.\n\nLog alerts evaluate queries on a schedule over a defined window; attach an action group for notification.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — create Azure Monitor alert rules (Microsoft Learn, log search alerts)"
    },
    {
        "id":  180,
        "domain":  "monitor",
        "topic":  "Metric alert dimensions",
        "stem":  "A storage account handles many operation types. You need an alert only when `GetBlob` transactions exceed 10,000 in five minutes, and other operations must not trigger it.\n\nWhat should you configure on the metric alert rule?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An activity log alert for storage write operations."
                        },
                        {
                            "letter":  "B",
                            "text":  "A dimension filter that sets `ApiName` to `GetBlob`."
                        },
                        {
                            "letter":  "C",
                            "text":  "Splitting by `GeoType` with the same threshold."
                        },
                        {
                            "letter":  "D",
                            "text":  "Changing the aggregation from Total to Average."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "The Transactions metric exposes dimensions such as `ApiName`, `ResponseType`, and `GeoType`. Adding a dimension filter evaluates only the series where `ApiName` equals `GetBlob`, so traffic from PutBlob, DeleteBlob, and other operations cannot push the alert over the threshold. The threshold and aggregation stay on the Transactions metric, and splitting can still be added later if you want per-API visibility rather than a single filtered series.\n\n- **A** is wrong. Activity log alerts watch control-plane events such as key rotation, not storage data-plane transaction counts.\n- **C** is wrong. Splitting by geography creates multiple series but still includes every API, so unrelated operations can trigger the alert.\n- **D** is wrong. Changing aggregation alters how points are combined, not which operations are evaluated.\n\nFilter dimensions to narrow the evaluated series; split dimensions to break one metric into multiple series.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure Azure Monitor metric alerts (Microsoft Learn, metric alert dimensions)"
    },
    {
        "id":  181,
        "domain":  "monitor",
        "topic":  "Shared action groups",
        "stem":  "Forty alert rules in one subscription must notify the same on-call distribution list and start the same Automation runbook. The team wants a single place to change recipients later.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "One action group that contains the email notification and the runbook action, referenced by all 40 rules."
                        },
                        {
                            "letter":  "B",
                            "text":  "One action group per alert rule so each rule stays independent."
                        },
                        {
                            "letter":  "C",
                            "text":  "An email distribution list configured separately inside each alert rule."
                        },
                        {
                            "letter":  "D",
                            "text":  "One action group per severity level, each with its own copy of the recipients."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "An action group is a reusable resource that holds notifications and actions. Defining the distribution list and the Automation runbook once, then referencing that action group from every alert rule, means a recipient change is made in one object and applies everywhere. Action groups can be attached to metric, log search, and activity log alert rules, so the same group serves the whole subscription.\n\n- **B** is wrong. Forty action groups multiply the maintenance work and guarantee that a recipient change will be missed somewhere.\n- **C** is wrong. Per-rule recipients cannot be managed centrally and drift as rules are edited.\n- **D** is wrong. Splitting by severity duplicates the same recipients and runbook several times.\n\nAction groups are reusable across alert types; manage notifications and actions once.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure action groups (Microsoft Learn, Azure Monitor action groups)"
    },
    {
        "id":  182,
        "domain":  "monitor",
        "topic":  "Maintenance suppression",
        "stem":  "Virtual machines in one resource group are patched on the first Saturday of every month. During the four-hour window, alerts must still be recorded, but no notifications may reach the on-call engineer.\n\nWhich two actions should you perform?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create an alert processing rule scoped to the resource group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Add a recurring schedule to the rule that covers the maintenance window and removes the action group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Disable the alert rules before patching and re-enable them afterwards."
                        },
                        {
                            "letter":  "D",
                            "text":  "Delete the action group for the duration of the window."
                        },
                        {
                            "letter":  "E",
                            "text":  "Raise the alert severity to zero for the window."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Alert processing rules act on fired alerts rather than on evaluation. Scoping a rule to the resource group targets the patched VMs, and a recurring schedule limits the effect to the first Saturday window. Configuring the rule to remove action groups suppresses notifications while the alert remains in the alerts list and its history is preserved. The rule can be left in place and reused every month.\n\n- **C** is wrong. Disabling rules stops evaluation entirely, so no alert is recorded and the change depends on manual re-enablement.\n- **D** is wrong. Deleting and recreating an action group is disruptive and unnecessary when a rule can remove it temporarily.\n- **E** is wrong. Severity zero is the most severe level, not a suppression mechanism.\n\nAlert processing rules suppress notifications, not alerts; use a recurring schedule for maintenance windows.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure alert processing rules (Microsoft Learn, alert processing rules)"
    },
    {
        "id":  183,
        "domain":  "monitor",
        "topic":  "VM insights onboarding",
        "stem":  "You must collect guest CPU, memory, and logical-disk performance from 50 virtual machines and provide the operations team with prebuilt performance charts. The team wants no custom queries or per-VM configuration.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Install Azure Monitor Agent on each VM and author a separate data collection rule per VM."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable VM insights for the VMs and use its predefined performance data collection rule and Performance views."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable boot diagnostics on each VM and review the serial logs."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a metric alert rule for each VM and use the alert history as the performance view."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "VM insights is designed to get guest monitoring running quickly. Onboarding installs Azure Monitor Agent through a managed identity and associates a predefined performance data collection rule that writes guest measurements into `InsightsMetrics` in a Log Analytics workspace. The feature then supplies Performance views and workbooks for CPU, memory, and logical disk without custom queries. The same onboarding can be applied at scale through policy, which keeps per-VM effort low.\n\n- **A** is wrong. Hand-authoring 50 rules duplicates configuration and risks inconsistent counters and destinations.\n- **C** is wrong. Boot diagnostics shows startup screenshots and serial output, not runtime performance.\n- **D** is wrong. Alert history records threshold breaches; it is not a performance charting solution.\n\nVM insights supplies the agent onboarding, predefined performance DCR, and ready-made views.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Collect client performance counters by using VM insights"
    },
    {
        "id":  184,
        "domain":  "monitor",
        "topic":  "Syslog collection",
        "stem":  "A Linux VM already sends guest performance data to a Log Analytics workspace through a performance data collection rule. You must now collect warning-and-above events from the `user`, `daemon`, and `syslog` facilities in the same workspace.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a Linux Syslog data collection rule with those facilities at Warning minimum, associate it with the VM, and set the workspace as the destination."
                        },
                        {
                            "letter":  "B",
                            "text":  "Enable boot diagnostics and forward the serial log to the workspace."
                        },
                        {
                            "letter":  "C",
                            "text":  "Install the Dependency Agent and enable the Map feature."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a metric alert rule that reads the Syslog table."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A performance data collection rule does not collect Syslog events, so a separate DCR with a Linux Syslog data source is required. The data source selects facilities and a minimum severity; selecting Warning includes Warning and more severe events for those facilities and excludes unselected ones. Associating the DCR with the VM and choosing Azure Monitor Logs as the destination sends the events to the existing workspace, where they can be queried in the `Syslog` table. No data collection endpoint is needed for public endpoints.\n\n- **B** is wrong. Boot diagnostics is host-level startup output and is not delivered to Log Analytics as Syslog.\n- **C** is wrong. The Dependency Agent and Map provide connection visualization, not event log collection, and Map is deprecated.\n- **D** is wrong. An alert rule evaluates existing data; it cannot collect events that were never ingested.\n\nThe performance DCR does not collect Syslog; add a separate Linux Syslog DCR with facility and severity filters.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Collect VM client event logs"
    },
    {
        "id":  185,
        "domain":  "monitor",
        "topic":  "Multiple DCRs",
        "stem":  "One data collection rule collects a standard performance counter set from 200 virtual machines. Ten of those VMs also require extra counters that must not be collected from the other 190, and all data must land in the same workspace.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Keep the shared rule and associate a second data collection rule containing the extra counters with only the ten VMs."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create 200 copies of the rule and customize the copy for each VM."
                        },
                        {
                            "letter":  "C",
                            "text":  "Add the extra counters to the shared rule and accept the additional ingestion for all VMs."
                        },
                        {
                            "letter":  "D",
                            "text":  "Move the ten VMs to a separate subscription with their own workspace."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "A virtual machine can be associated with multiple data collection rules, and the agent merges their data sources. Keeping the standard rule for all 200 preserves the common baseline, while a second rule associated only with the ten VMs adds the extra counters. Both rules can target the same Log Analytics workspace, so reporting stays centralized and ingestion cost is limited to the VMs that need the additional data.\n\n- **B** is wrong. Per-VM rules multiply objects to maintain and prevent a single change from reaching the whole fleet.\n- **C** is wrong. Editing the shared rule collects the extra counters from all 200 VMs, which the requirement explicitly forbids and which increases cost.\n- **D** is wrong. Moving VMs between subscriptions is a major, unnecessary change that fragments monitoring.\n\nAssociate multiple DCRs to layer extra collection onto a shared baseline.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Collect VM client event logs"
    },
    {
        "id":  186,
        "domain":  "monitor",
        "topic":  "Storage insights",
        "stem":  "Thirty storage accounts span three subscriptions. The storage team needs one view of capacity, transactions, end-to-end latency, and availability for every account, with no agents and no custom queries.\n\nWhat should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Storage insights in Azure Monitor, scoped to the three subscriptions."
                        },
                        {
                            "letter":  "B",
                            "text":  "A separate Metrics Explorer chart for each storage account."
                        },
                        {
                            "letter":  "C",
                            "text":  "Diagnostic settings that send blob logs to a workspace, analyzed with custom KQL."
                        },
                        {
                            "letter":  "D",
                            "text":  "Boot diagnostics on the virtual machines that access the shares."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Storage insights is a curated Azure Monitor feature built on the platform metrics that storage accounts emit automatically. It presents capacity, transactions, latency, availability, and failure breakdowns across accounts and subscriptions, and you can drill into one account or one service without authoring queries or deploying agents. Scoping the view to all three subscriptions gives the team the consolidated picture the requirement asks for.\n\n- **B** is wrong. Thirty individual charts provide no aggregate view and must be maintained as accounts are added.\n- **C** is wrong. Diagnostic logs answer detailed per-request questions but require schema knowledge, query authoring, and ingestion cost.\n- **D** is wrong. Boot diagnostics describes VM startup and has no relationship to storage account health.\n\nStorage insights uses platform metrics with no agent; use resource logs when you need per-request detail.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — use storage insights (Microsoft Learn, Azure Storage insights)"
    },
    {
        "id":  187,
        "domain":  "monitor",
        "topic":  "Network insights",
        "stem":  "A network team supports virtual networks in three subscriptions. It needs a topology view of VNets, subnets, peerings, and network security groups, plus connectivity and health information, in one place.\n\nWhat should you use?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Network insights in Azure Monitor."
                        },
                        {
                            "letter":  "B",
                            "text":  "The topology tool in Network Watcher for each subscription."
                        },
                        {
                            "letter":  "C",
                            "text":  "A separate Connection Monitor test for every VM pair."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Service Health."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Network insights provides a centralized view of networking resources across subscriptions, including topology, health, connectivity, and traffic information. It builds on Azure Resource Graph and integrates with capabilities such as Connection Monitor and flow logs, so the team can move from a topology view to a connectivity test without switching tools. Scoping it across the three subscriptions produces the single view the requirement describes.\n\n- **B** is wrong. Network Watcher topology is scoped to a subscription and region, so three separate views would be required.\n- **C** is wrong. Per-pair tests answer specific reachability questions and do not produce a resource topology.\n- **D** is wrong. Service Health reports platform incidents and maintenance, not the customer\u0027s network layout.\n\nNetwork insights is the cross-subscription topology and health view; Network Watcher tools drill into individual flows.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — use network insights (Microsoft Learn, Azure Network insights)"
    },
    {
        "id":  188,
        "domain":  "monitor",
        "topic":  "Network Watcher diagnosis",
        "stem":  "A virtual machine at 10.10.1.4 cannot reach 10.20.0.5 on TCP port 443. You suspect either a network security group rule or a user-defined route.\n\nWhich two Network Watcher tools should you use to determine which one is responsible?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "IP flow verify."
                        },
                        {
                            "letter":  "B",
                            "text":  "Next hop."
                        },
                        {
                            "letter":  "C",
                            "text":  "Packet capture."
                        },
                        {
                            "letter":  "D",
                            "text":  "Connection Monitor."
                        },
                        {
                            "letter":  "E",
                            "text":  "VPN troubleshoot."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "IP flow verify evaluates a five-tuple against the effective network security group rules for a VM and reports whether traffic is allowed or denied, naming the rule responsible. Next hop shows the route type and next-hop address that Azure selects for a destination, which exposes a UDR sending traffic to an appliance or dropping it. Used together, the two checks separate a security rule problem from a routing problem before you spend time capturing packets.\n\n- **C** is wrong. Packet capture shows the packets on the wire but does not identify the NSG rule or the selected route.\n- **D** is wrong. Connection Monitor reports reachability and latency over time but does not explain which rule or route caused a failure.\n- **E** is wrong. VPN troubleshoot diagnoses gateway and tunnel health, not intra-VNet VM-to-VM traffic.\n\nUse IP flow verify for NSG decisions and next hop for routing decisions.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — use Network Watcher (Microsoft Learn, Network Watcher diagnostic tools)"
    },
    {
        "id":  189,
        "domain":  "monitor",
        "topic":  "Connection Monitor",
        "stem":  "Two virtual machines in different Azure regions must communicate over TCP 443. You must verify reachability continuously and alert when round-trip time exceeds 80 milliseconds for ten minutes.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Connection Monitor test group with a TCP test, plus a metric alert on round-trip time."
                        },
                        {
                            "letter":  "B",
                            "text":  "IP flow verify on both virtual machines."
                        },
                        {
                            "letter":  "C",
                            "text":  "A packet capture on each virtual machine for 24 hours."
                        },
                        {
                            "letter":  "D",
                            "text":  "An Azure Service Health alert for the two regions."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Connection Monitor runs continuous tests from a source to a destination and records reachability, latency, and path information. A test group defines the sources, destinations, test protocol, port, and frequency; a TCP test on 443 verifies the required path. Connection Monitor surfaces metrics such as round-trip time in Azure Monitor, so a metric alert can fire when the value stays above 80 milliseconds for the evaluation window.\n\n- **B** is wrong. IP flow verify is a point-in-time check of NSG rules and does not measure latency over time.\n- **C** is wrong. Packet capture is a short diagnostic snapshot, not a continuous latency monitor, and 24 hours of capture is costly.\n- **D** is wrong. Service Health reports Microsoft platform incidents, not latency between two customer VMs.\n\nConnection Monitor provides continuous reachability and latency data that Azure Monitor can alert on.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — configure Connection Monitor (Microsoft Learn, Connection Monitor)"
    },
    {
        "id":  190,
        "domain":  "monitor",
        "topic":  "Packet capture",
        "stem":  "Users report intermittent packet loss to a virtual machine. You need a five-minute packet capture for analysis but must not sign in to the guest operating system or install tools interactively.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Start a Network Watcher packet capture for the VM with a time limit and a storage account destination."
                        },
                        {
                            "letter":  "B",
                            "text":  "Connect over RDP and run Wireshark for five minutes."
                        },
                        {
                            "letter":  "C",
                            "text":  "Enable a continuous packet capture and leave it running for a week."
                        },
                        {
                            "letter":  "D",
                            "text":  "Create a Connection Monitor test and export its results."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Network Watcher packet capture runs through a VM extension, so no interactive guest sign-in or manual tool installation is needed. You can target the VM or its network interface, apply filters to limit captured traffic, set a time limit, and write the capture to a storage account or disk for later analysis. That produces the requested five-minute evidence with minimal setup and no standing capture cost.\n\n- **B** is wrong. Interactive RDP access and a locally installed analyzer require guest credentials and manual work, which the requirement rules out.\n- **C** is wrong. A week of continuous capture consumes storage and produces far more data than the incident requires.\n- **D** is wrong. Connection Monitor reports reachability and latency but does not preserve packet contents for protocol analysis.\n\nPacket capture uses a VM extension and supports filters, time limits, and storage destinations.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — use Network Watcher packet capture (Microsoft Learn, packet capture)"
    },
    {
        "id":  191,
        "domain":  "monitor",
        "topic":  "Vault selection",
        "stem":  "You are choosing between a Recovery Services vault and a Backup vault for several new protection workloads.\n\nWhich two workloads require a Backup vault?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Managed Disks."
                        },
                        {
                            "letter":  "B",
                            "text":  "Vaulted backup of Azure Blobs."
                        },
                        {
                            "letter":  "C",
                            "text":  "SQL Server running in an Azure virtual machine."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure virtual machines."
                        },
                        {
                            "letter":  "E",
                            "text":  "SAP HANA databases running in Azure virtual machines."
                        }
                    ],
        "answers":  [
                        "A",
                        "B"
                    ],
        "explanation":  "Backup vault is the newer vault type for workloads such as Azure Managed Disks, vaulted backup of Azure Blobs, Azure Database for PostgreSQL Flexible Server, and Azure Kubernetes Service. Recovery Services vault remains the management plane for IaaS virtual machines, SQL Server and SAP HANA in Azure VMs, Azure Files, MARS, DPM or MABS, and Azure Site Recovery. Choosing the wrong vault type for a workload means the protection option is simply unavailable.\n\n- **C** is wrong. SQL Server backup in an Azure VM uses a Recovery Services vault, and SQL availability-group nodes must register with a vault in their own region and subscription.\n- **D** is wrong. IaaS VM backup is a Recovery Services vault workload.\n- **E** is wrong. SAP HANA backup in Azure VMs uses a Recovery Services vault.\n\nBackup vault covers disks, vaulted blobs, PostgreSQL, and AKS; Recovery Services vault covers VMs, SQL, SAP HANA, files, and Site Recovery.",
        "source":  "Introduction to Azure Backup — How Azure Backup works"
    },
    {
        "id":  192,
        "domain":  "monitor",
        "topic":  "Retention policy",
        "stem":  "A VM backup policy must keep daily recovery points for 30 days, a monthly recovery point for 12 months, and a yearly recovery point for seven years. You want one policy to govern the schedule and retention.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "One VM backup policy with daily retention of 30 days, monthly retention of 12 months, and yearly retention of seven years."
                        },
                        {
                            "letter":  "B",
                            "text":  "Three separate VM backup policies, one for each retention period, all protecting the same VM."
                        },
                        {
                            "letter":  "C",
                            "text":  "A daily policy plus yearly on-demand backups that carry custom retention."
                        },
                        {
                            "letter":  "D",
                            "text":  "A storage account lifecycle rule that moves backups to cool storage after 30 days."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Backup frequency and retention are separate settings. A single VM backup policy can define a daily schedule and then apply daily, weekly, monthly, and yearly retention rules, each keeping the recovery points that match its period. Setting daily retention to 30 days, monthly to 12 months, and yearly to seven years meets all three requirements without duplicating protection or relying on manual jobs.\n\n- **B** is wrong. Multiple policies protecting one VM create conflicting schedules and separate recovery chains that are harder to manage.\n- **C** is wrong. On-demand backups with custom retention sit outside policy control and depend on someone remembering to run them each year.\n- **D** is wrong. Lifecycle rules on a storage account do not govern Recovery Services vault recovery points.\n\nRetention rules are independent of schedule; one policy can carry daily, monthly, and yearly retention.",
        "source":  "Introduction to Azure Backup — When to use Azure Backup"
    },
    {
        "id":  193,
        "domain":  "monitor",
        "topic":  "Enhanced policy frequency",
        "stem":  "Virtual machines currently use a standard daily backup policy. The business now requires a recovery point every four hours and wants no custom automation.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A standard policy plus on-demand backups started by a runbook every four hours."
                        },
                        {
                            "letter":  "B",
                            "text":  "An Enhanced VM backup policy with a four-hour backup schedule."
                        },
                        {
                            "letter":  "C",
                            "text":  "Four standard policies, each scheduled six hours apart."
                        },
                        {
                            "letter":  "D",
                            "text":  "A standard policy with the schedule changed to hourly."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "The Enhanced VM backup policy supports an hourly schedule with intervals of 4, 6, 8, 12, or 24 hours, so a four-hour interval meets the requirement directly. It also supports selective disk backup and longer snapshot retention. Standard policy permits only one scheduled backup per day, so no configuration of a standard policy can produce four-hour recovery points.\n\n- **A** is wrong. A runbook that triggers on-demand backups duplicates scheduler logic, can fail silently, and is not policy-governed.\n- **C** is wrong. Four standard policies protecting one VM create conflicting schedules and do not yield a clean four-hour cadence.\n- **D** is wrong. Standard policy cannot be set to hourly; that frequency is an Enhanced policy capability.\n\nEnhanced policy intervals are 4, 6, 8, 12, or 24 hours; standard policy is one backup per day.",
        "source":  "Protect your virtual machines by using Azure Backup — Back up an Azure virtual machine by using Azure Backup"
    },
    {
        "id":  194,
        "domain":  "monitor",
        "topic":  "File recovery",
        "stem":  "A user deleted a project folder from a file server VM two hours ago. You must restore only that folder as quickly as possible, without replacing the VM or its disks.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Use File Recovery to mount the recovery point and copy the folder to the server."
                        },
                        {
                            "letter":  "B",
                            "text":  "Restore the entire VM as a new virtual machine and copy the folder across."
                        },
                        {
                            "letter":  "C",
                            "text":  "Replace the existing disks with the most recent recovery point."
                        },
                        {
                            "letter":  "D",
                            "text":  "Restore the recovery point from the archive tier."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "File Recovery mounts a recovery point from the snapshot tier on the target machine through an iSCSI initiator, letting you browse the captured file system and copy only the deleted folder. It is the fastest option for a small, granular recovery and avoids creating or replacing a VM. Snapshot-tier recovery points are kept for up to five days, so acting within two hours is well inside the window.\n\n- **B** is wrong. Building a new VM takes far longer and consumes resources for a single folder.\n- **C** is wrong. Replacing disks rolls the whole server back and discards changes made after the recovery point.\n- **D** is wrong. Archive tier requires rehydration that can take hours, which defeats the fast-recovery requirement.\n\nUse File Recovery for granular restores from the snapshot tier; archive restores require rehydration time.",
        "source":  "Protect your virtual machines by using Azure Backup — Restore virtual machine data"
    },
    {
        "id":  195,
        "domain":  "monitor",
        "topic":  "Replace existing restore",
        "stem":  "You try to restore a recovery point over an existing virtual machine by using the Replace existing option, but the job fails immediately. The VM still exists in the subscription.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Delete the VM, then restore it as a new virtual machine."
                        },
                        {
                            "letter":  "B",
                            "text":  "Stop and deallocate the VM, then rerun the Replace existing restore."
                        },
                        {
                            "letter":  "C",
                            "text":  "Restore the disk to a storage account and attach it to a different VM."
                        },
                        {
                            "letter":  "D",
                            "text":  "Restore the VM to the paired secondary region."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Replace existing requires the target VM to exist and to be stopped and deallocated. While the VM is running, the disks are attached and cannot be replaced, so the job fails before any data is written. Deallocating releases the disks, after which Azure Backup snapshots the current disks to the staging location you specify and replaces them with the selected recovery point.\n\n- **A** is wrong. Deleting the VM removes the target and its identity, and Create new VM does not preserve the original VM configuration.\n- **C** is wrong. That is the Restore disk workflow, which produces disks for a new or different VM rather than replacing the original.\n- **D** is wrong. Cross-region restore creates resources in the secondary region and does not repair the existing VM.\n\nReplace existing needs the VM to exist and be deallocated; stopping is not always the same as deallocating.",
        "source":  "Protect your virtual machines by using Azure Backup — Restore virtual machine data"
    },
    {
        "id":  196,
        "domain":  "monitor",
        "topic":  "Azure Files backup",
        "stem":  "A 5 TB Azure file share must be protected with 30-day retention. The team needs file-level restore and will not deploy backup servers or VM extensions.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Backup for the file share with a backup policy stored in a Recovery Services vault."
                        },
                        {
                            "letter":  "B",
                            "text":  "The MARS agent on a domain controller that mounts the share."
                        },
                        {
                            "letter":  "C",
                            "text":  "A nightly AzCopy job that copies the share to a second storage account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Geo-redundant storage on the storage account."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Azure Files backup uses the file share snapshot capability of the storage platform. No worker VM, backup server, or VM backup extension is involved. The Recovery Services vault manages the backup policy, protected item, and recovery points, and the policy supplies the 30-day retention. Restores can recover the whole share or individual files and folders, which matches the granularity requirement.\n\n- **B** is wrong. MARS protects local files and folders on Windows machines and does not provide the supported Azure Files protection model.\n- **C** is wrong. A copy job is not a backup policy, provides no recovery points or catalog, and can propagate corruption or deletion.\n- **D** is wrong. Geo-redundant storage replicates data for durability but does not protect against accidental deletion or overwrite.\n\nAzure Files backup is snapshot-based with no infrastructure; the policy and protection metadata live in a Recovery Services vault.",
        "source":  "Introduction to Azure Backup — How Azure Backup works"
    },
    {
        "id":  197,
        "domain":  "monitor",
        "topic":  "Blob operational backup",
        "stem":  "A storage account holds business documents that are sometimes overwritten or deleted. You must be able to restore the account to any point in the last 30 days, keep the data in the source account, and avoid a second isolated copy.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A vaulted backup policy that copies blobs to a Backup vault daily."
                        },
                        {
                            "letter":  "B",
                            "text":  "Operational backup with point-in-time restore, versioning, change feed, and soft delete enabled."
                        },
                        {
                            "letter":  "C",
                            "text":  "A nightly AzCopy job that writes blobs to a second storage account."
                        },
                        {
                            "letter":  "D",
                            "text":  "Read-access geo-redundant storage on the account."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure Blob operational backup is continuous and uses native storage features: versioning keeps prior blob versions, change feed records changes, and soft delete retains deleted blobs. Together they enable point-in-time restore to a chosen time within the retention window, without a schedule, job, or vaulted copy. Because the data stays in the source account, it matches the requirement to avoid a second isolated copy.\n\n- **A** is wrong. Vaulted backup creates an isolated copy in a Backup vault and runs on a policy schedule; it is the heavier option the requirement excludes.\n- **C** is wrong. A copy job offers only daily granularity, no point-in-time catalog, and can replicate corrupt or deleted data.\n- **D** is wrong. Geo-redundancy protects against regional failure, not accidental overwrite or deletion.\n\nOperational blob backup is continuous and stays in the account; vaulted backup creates an isolated policy-based copy.",
        "source":  "Introduction to Azure Backup — How Azure Backup works"
    },
    {
        "id":  198,
        "domain":  "monitor",
        "topic":  "Site Recovery replication",
        "stem":  "Twenty virtual machines must replicate to a secondary Azure region. The business requires a 15-minute RPO and application-consistent recovery points every four hours, with orchestrated recovery of a three-tier application.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "An Enhanced VM backup policy with a four-hour schedule in the secondary region."
                        },
                        {
                            "letter":  "B",
                            "text":  "Azure Site Recovery with Azure-to-Azure replication, a replication policy using four-hour app-consistent snapshots, a cache storage account, and a recovery plan for the tiers."
                        },
                        {
                            "letter":  "C",
                            "text":  "Geo-redundant storage on the managed disks and an availability zone deployment."
                        },
                        {
                            "letter":  "D",
                            "text":  "The MARS agent on each virtual machine, backing up to a vault in the secondary region."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure Site Recovery continuously replicates VM changes to the target region, which supports a 15-minute RPO, while the replication policy sets recovery point retention and the application-consistent snapshot frequency. Setting the latter to four hours produces the required app-consistent points. A cache storage account in the source region stages replication, and a Recovery Services vault in the target region manages the replication and later failover. A recovery plan groups the tiers into ordered startup groups for orchestrated recovery.\n\n- **A** is wrong. Backup creates periodic copies; a four-hour schedule cannot deliver a 15-minute RPO.\n- **C** is wrong. Geo-redundant storage protects data durability but does not replicate running VMs or orchestrate failover.\n- **D** is wrong. MARS backs up files and folders on Windows machines and does not provide VM replication or orchestrated failover.\n\nSite Recovery provides continuous replication; the replication policy controls app-consistent snapshots and recovery point retention.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — implement Azure Site Recovery (Microsoft Learn, Azure-to-Azure replication)"
    },
    {
        "id":  199,
        "domain":  "monitor",
        "topic":  "Test failover",
        "stem":  "Every quarter the team must prove that a three-tier application can start in the secondary region. The validation must not affect production, must not commit a failover, and must follow the defined startup order.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Run an unplanned failover and then fail back."
                        },
                        {
                            "letter":  "B",
                            "text":  "Run a test failover of the recovery plan into an isolated virtual network."
                        },
                        {
                            "letter":  "C",
                            "text":  "Run a planned failover during a maintenance window."
                        },
                        {
                            "letter":  "D",
                            "text":  "Restore each VM from its latest backup in the secondary region."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "A test failover uses the recovery plan to start the VMs in their configured groups and order, including any pre- and post-actions, while placing them in an isolated network you specify. Production keeps running, replication continues, and no failover is committed, so the exercise can be repeated and cleaned up. The recovery plan is what enforces the three-tier startup order without manual sequencing each quarter.\n\n- **A** is wrong. An unplanned failover is a real disaster recovery event that stops replication and requires commit and re-protection.\n- **C** is wrong. A planned failover shuts down the source VMs and is used for controlled migrations, not non-disruptive validation.\n- **D** is wrong. Restoring backups does not validate Site Recovery replication, recovery plans, or target-region readiness.\n\nTest failover validates the recovery plan in isolation without impacting production or committing a failover.",
        "source":  "AZ-104 objective: Monitor and maintain Azure resources — implement Azure Site Recovery (Microsoft Learn, test failover)"
    },
    {
        "id":  200,
        "domain":  "monitor",
        "topic":  "Backup reporting",
        "stem":  "Forty Recovery Services vaults across five subscriptions need consolidated backup job, policy, and usage reporting. The team also wants alerts when backup jobs fail, without checking each vault.\n\nWhich solution should you recommend to minimize administrative effort?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Configure each vault\u0027s diagnostic settings to send backup data to a central Log Analytics workspace, then use the Backup Reports workbook."
                        },
                        {
                            "letter":  "B",
                            "text":  "Review each vault\u0027s dashboard every morning and record the results in a spreadsheet."
                        },
                        {
                            "letter":  "C",
                            "text":  "Export each vault\u0027s job list with the Azure CLI and combine the files manually."
                        },
                        {
                            "letter":  "D",
                            "text":  "Enable email notification on each vault and forward all messages to a shared mailbox."
                        }
                    ],
        "answers":  [
                        "A"
                    ],
        "explanation":  "Backup Reports is an Azure Monitor workbook that queries Log Analytics data collected from vaults. Each vault must have diagnostic settings that send backup reporting data, including job and policy records, to a workspace; once that is in place, one workbook covers vaults, subscriptions, and regions. Vaults also provide built-in alerts for failed backup and restore jobs, and Azure Monitor alerts can route them to a shared action group for a single operational view.\n\n- **B** is wrong. Manual daily reviews do not scale to 40 vaults and miss failures between checks.\n- **C** is wrong. CLI exports produce disconnected snapshots that must be merged by hand and have no alerting.\n- **D** is wrong. Per-vault email produces noise without consolidation, trend reporting, or a single failure queue.\n\nBackup Reports depends on vault diagnostic settings feeding a Log Analytics workspace; built-in backup alerts cover job failures.",
        "source":  "Introduction to Azure Backup — When to use Azure Backup"
    },
    {
        "id":  201,
        "domain":  "compute",
        "topic":  "Availability zone placement",
        "stem":  "Contoso\u0027s storefront and order APIs must meet the 99.99% availability target during the November peak. All 190 migrated servers will run in East US 2, and Finance has approved no other production region. You need to recommend a compute availability design for the Windows and Linux servers.\n\nWhat should you recommend?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Place every virtual machine in a single availability zone and replicate the virtual machines to Central US by using Azure Site Recovery."
                        },
                        {
                            "letter":  "B",
                            "text":  "Distribute the virtual machines of each tier across the three availability zones in East US 2, use zone-redundant Standard Load Balancer frontends, and keep each SQL Always On replica in a different zone."
                        },
                        {
                            "letter":  "C",
                            "text":  "Place the virtual machines in availability sets with three fault domains and five update domains in each region."
                        },
                        {
                            "letter":  "D",
                            "text":  "Place two virtual machines per tier in two zones and rely on the 99.9% single-virtual-machine SLA."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Availability zones are physically separate locations in a region, each with independent power, cooling, and networking, and every enabled region has at least three. Spreading each tier across all three means one datacenter loss leaves two-thirds of capacity for the November peak, which is how the 99.99% target is met without a cross-region failover. Zone-redundant Standard Load Balancer frontends keep the public entry point available, and one SQL Always On replica per zone preserves quorum. This keeps the design in East US 2, as Finance requires.\n\n- **A** is wrong. Site Recovery to Central US is disaster recovery, not high availability, and its recovery delay is far longer than the storefront can absorb.\n- **C** is wrong. Availability sets protect against host and rack failures inside one datacenter, not against the loss of a datacenter.\n- **D** is wrong. Two zones lose half the capacity during a zone failure, and the 99.9% single-VM SLA does not compose into 99.99% for the tier.",
        "source":  "Configure virtual machine availability — Review availability zones",
        "case":  "contoso-retail"
    },
    {
        "id":  202,
        "domain":  "network",
        "topic":  "Site-to-site VPN redundancy",
        "stem":  "Until ExpressRoute is provisioned, order traffic from the Columbus datacenter must reach the East US 2 hub over a site-to-site VPN. The network team runs two Cisco firewalls and requires dynamic routing and automatic failover. The connection must support, not undermine, the 99.99% target.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Basic SKU VPN gateway in active-active mode with BGP enabled and one tunnel to each firewall."
                        },
                        {
                            "letter":  "B",
                            "text":  "A VpnGw2AZ zone-redundant VPN gateway in active-active mode with two public IP addresses, BGP enabled, and one IPsec tunnel to each firewall."
                        },
                        {
                            "letter":  "C",
                            "text":  "A VpnGw1 gateway in active-active mode with static routes and two tunnels to the primary firewall."
                        },
                        {
                            "letter":  "D",
                            "text":  "A VpnGw1AZ gateway in active-standby mode with static routes and a single tunnel."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "The gateway sits in the hub virtual network\u0027s dedicated GatewaySubnet and terminates one IPsec tunnel per firewall, so maintaining either device leaves a path to Azure. Active-active mode requires a second public IP address and keeps both tunnels carrying traffic, while BGP advertises the on-premises prefixes and withdraws a failed path without manual route changes. A zone-redundant AZ SKU spreads the gateway instances across availability zones and is the configuration that reaches the 99.99% SLA, matching the storefront target.\n\n- **A** is wrong. The Basic SKU does not support active-active, BGP, or zone redundancy, so it cannot deliver the required resiliency.\n- **C** is wrong. Active-active on a non-AZ SKU reaches 99.95%, and both tunnels terminating on one firewall make that device a single point of failure.\n- **D** is wrong. An active-standby gateway with one tunnel provides 99.9% and no automatic path failover.",
        "source":  "Configure Azure Virtual Network peering — Determine gateway transit and connectivity",
        "diagram":  "vpn-site2site",
        "case":  "contoso-retail"
    },
    {
        "id":  203,
        "domain":  "storage",
        "topic":  "Geo-redundancy for files and backups",
        "stem":  "You must choose storage redundancy for two datasets: the 22 TB SMB file shares that branch servers mount, and the SQL Server backups that must be restorable if East US 2 is lost. The file shares must survive a zone failure. Cost must be justified.\n\nWhich two actions should you perform? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a premium FileStorage account for the file shares and configure zone-redundant storage."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a general-purpose v2 account for the file shares and configure locally redundant storage."
                        },
                        {
                            "letter":  "C",
                            "text":  "Write the SQL backups to a general-purpose v2 blob account configured for geo-redundant storage, or to a geo-redundant Recovery Services vault."
                        },
                        {
                            "letter":  "D",
                            "text":  "Configure geo-zone-redundant storage on the premium FileStorage account."
                        },
                        {
                            "letter":  "E",
                            "text":  "Configure read-access geo-redundant storage on the file shares and mount the secondary endpoint from the branch servers."
                        }
                    ],
        "answers":  [
                        "A",
                        "C"
                    ],
        "explanation":  "Zone-redundant storage synchronously keeps three copies in three storage clusters in East US 2, so the file share stays online when one zone is lost and the branch drive mappings keep working. Premium file shares are created in FileStorage accounts and support LRS and ZRS. SQL backups need a copy outside the region: geo-redundant storage replicates asynchronously to the paired region and is the basis for restoring after a regional failure, whether you target a blob account or a Recovery Services vault.\n\n- **B** is wrong. Locally redundant storage keeps all replicas in one datacenter and fails the zone-survival requirement.\n- **D** is wrong. Premium FileStorage accounts support only LRS and ZRS, not geo-zone-redundant storage.\n- **E** is wrong. Azure Files has no readable secondary endpoint, and geo-failover is a vault or account failover, not an SMB mount.",
        "source":  "Configure storage accounts — Determine replication strategies",
        "diagram":  "storage-redundancy",
        "case":  "contoso-retail"
    },
    {
        "id":  204,
        "domain":  "identity",
        "topic":  "Delegated administration with Azure RBAC",
        "stem":  "Contoso\u0027s six-person central cloud team must delegate access to 14 application teams. Each team must manage only its own resource group, the DBA group must manage only SQL Server resources, and nobody outside the central team may create role assignments. You need the least administrative effort.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Assign Owner at the Contoso-Root management group to every application team lead and review access quarterly."
                        },
                        {
                            "letter":  "B",
                            "text":  "Assign Role Based Access Control Administrator at Contoso-Root to the central team, then assign built-in job-function roles to Microsoft Entra security groups at resource-group scope, using Privileged Identity Management for eligible assignments."
                        },
                        {
                            "letter":  "C",
                            "text":  "Create one custom role per application team that includes Microsoft.Authorization/*/Write and assign it at subscription scope."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign User Access Administrator at each subscription to the application teams and Contributor at resource-group scope."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Azure RBAC binds a security principal to a role definition at a scope, and permissions inherit down the management group, subscription, resource group, and resource hierarchy. Role Based Access Control Administrator lets the central team create and remove role assignments without giving them write access to the workloads, while resource-group scope keeps each application team inside its own boundary. Assigning to groups keeps the number of assignments small as staff join and leave, and eligible PIM assignments avoid permanent standing access.\n\n- **A** is wrong. Owner at the root management group gives every team lead full control of all subscriptions and the ability to grant access.\n- **C** is wrong. A role containing authorization write at subscription scope lets application teams escalate their own access.\n- **D** is wrong. User Access Administrator lets the application teams create role assignments, which the central governance model forbids.",
        "source":  "Secure your Azure resources with Azure role-based access control (Azure RBAC) — What is Azure RBAC?",
        "case":  "contoso-retail"
    },
    {
        "id":  205,
        "domain":  "monitor",
        "topic":  "Backup policy and retention",
        "stem":  "The 190 virtual machines need Azure Backup. The business requires a recovery point every six hours, 30 days of daily retention, and monthly recovery points kept for 24 months. SQL data is protected separately with SQL Server backup to URL. You need the VM backup policy with the lowest cost that meets the requirement.\n\nWhich policy should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Standard policy with a daily backup at 02:00, 30 days of daily retention, and 24 monthly recovery points."
                        },
                        {
                            "letter":  "B",
                            "text":  "An Enhanced policy with a six-hourly schedule, 30 days of daily retention, and 24 monthly recovery points."
                        },
                        {
                            "letter":  "C",
                            "text":  "An Enhanced policy with an hourly schedule, 30 days of retention, and 24 yearly recovery points."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Site Recovery with a six-hour replication interval and a 30-day recovery point window."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "The Enhanced policy is the only VM backup policy that supports several backups per day, and its allowed intervals include every four, six, eight, twelve, and twenty-four hours. Setting a six-hourly schedule gives the required recovery points, while 30 daily and 24 monthly retention points match the SOX record-keeping shape without extra yearly copies. Snapshots stay in the instant-restore tier for fast recovery and are also copied to the vault for long-term retention, so the policy covers both operational restores and the audit requirement.\n\n- **A** is wrong. A Standard policy takes one backup per day, so it cannot meet a six-hour recovery point objective.\n- **C** is wrong. Hourly backups exceed the requirement, raise snapshot and vault costs, and yearly retention keeps the wrong recovery points.\n- **D** is wrong. Site Recovery is replication for disaster recovery and provides neither backup retention nor monthly recovery points.",
        "source":  "Protect your virtual machines by using Azure Backup — Back up an Azure virtual machine by using Azure Backup",
        "case":  "contoso-retail"
    },
    {
        "id":  206,
        "domain":  "identity",
        "topic":  "Policy initiative for regional governance",
        "stem":  "Finance requires production resources in East US 2 or Central US only, mandatory CostCenter and DataClass tags, and VM sizes from an approved list. Existing resources must be reported, and new non-compliant resources must be blocked. You need the least administrative effort across all three subscriptions.\n\nWhat should you do?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create three custom policies and assign each one separately in every subscription and resource group."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a custom initiative at the Contoso-Root management group that groups the built-in allowed locations, tag, and allowed VM SKU definitions, then assign it once with Deny effects for new resources and Audit for existing ones."
                        },
                        {
                            "letter":  "C",
                            "text":  "Apply resource locks and a subscription tag dictionary, then review compliance monthly."
                        },
                        {
                            "letter":  "D",
                            "text":  "Assign the Microsoft cloud security benchmark initiative and rely on Microsoft Defender for Cloud recommendations."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "A policy definition stored at a management group can be assigned once at that scope, and every subscription beneath it inherits the assignment, which is the central governance model Contoso wants. An initiative groups several definitions into a single assignable item, so allowed locations, required tags, and the approved VM SKU list travel together and are managed as one object. Deny stops non-compliant creates and updates at the control plane, while Audit flags existing resources as non-compliant at the next evaluation without deleting them.\n\n- **A** is wrong. Separate definitions and assignments per subscription multiply the work and inevitably drift out of sync.\n- **C** is wrong. Resource locks prevent changes to resources but do not evaluate location, tag, or SKU rules.\n- **D** is wrong. The benchmark initiative reports recommendations; it does not block non-compliant deployments.",
        "source":  "Azure Policy initiatives — Azure Policy resources",
        "case":  "contoso-retail"
    },
    {
        "id":  207,
        "domain":  "monitor",
        "topic":  "Workspace and alert design",
        "stem":  "The central operations team must monitor all 190 virtual machines from one place. They need CPU alerts after 10 minutes above 85%, heartbeat alerts within 5 minutes of a guest stopping, and 90 days of interactive log queries. SOX requires audit data to remain searchable for seven years. You need to design the Log Analytics and alerting layer.\n\nWhat should you design?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Log Analytics workspace per virtual machine, with a metric alert rule on each virtual machine."
                        },
                        {
                            "letter":  "B",
                            "text":  "One Log Analytics workspace in East US 2, Azure Monitor Agent with a data collection rule on every virtual machine, 90-day interactive retention with seven-year long-term retention, multi-resource metric alerts for CPU, a log alert on heartbeat, and one action group."
                        },
                        {
                            "letter":  "C",
                            "text":  "Metrics only, because platform metrics are retained for 93 days, with activity log alerts for CPU."
                        },
                        {
                            "letter":  "D",
                            "text":  "One workspace per region with 30-day retention, and a weekly CSV export to a file share for the audit team."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "A single workspace gives the operations team one KQL surface across all 190 machines, and Azure Monitor Agent with a data collection rule defines which guest performance counters and event logs are collected and where they are sent. Table-level retention keeps 90 days interactive for daily queries while long-term retention preserves seven years of audit data that remains searchable through search jobs. A multi-resource metric alert applies one CPU rule across the fleet, and a heartbeat log alert catches a stopped guest agent; one action group keeps notification routing simple.\n\n- **A** is wrong. Per-machine workspaces prevent cross-fleet queries and require 190 alert rules to maintain.\n- **C** is wrong. Platform metrics do not include guest CPU detail, and activity log alerts cannot watch CPU thresholds.\n- **D** is wrong. Thirty-day retention discards the audit data, and a CSV export is not searchable in Log Analytics.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Monitoring for Azure VMs",
        "case":  "contoso-retail"
    },
    {
        "id":  208,
        "domain":  "network",
        "topic":  "Global routing and failover",
        "stem":  "Customers worldwide must reach shop.fabrikam.com with a 15-minute recovery time objective if a region fails. The solution must terminate TLS at the edge, cache static assets, inspect HTTP traffic, and stop sending requests to an unhealthy region without waiting for DNS time-to-live expiry.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Azure Traffic Manager with priority routing and a 30-second DNS time-to-live in front of the three regional Application Gateways."
                        },
                        {
                            "letter":  "B",
                            "text":  "Azure Front Door Premium with an origin group containing the three regional Application Gateway frontends, health probes, priority-based failover, a WAF policy, and caching for static paths."
                        },
                        {
                            "letter":  "C",
                            "text":  "A Standard Load Balancer with a global tier frontend and backend pools in all three regions."
                        },
                        {
                            "letter":  "D",
                            "text":  "An Application Gateway v2 in UK South whose backend pool contains the public frontends of the other two regional gateways."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Front Door is a global Layer 7 application delivery network: anycast frontends accept the connection close to the user, health probes track each origin, and a failed origin is removed from rotation at the edge rather than through DNS. An origin group with priority routing enforces the UK South, West Europe, East US order, so the recovery objective does not depend on client behaviour. TLS offloads at the edge, the WAF policy inspects requests, and caching absorbs the heavy read traffic for the 18 TB of static assets.\n\n- **A** is wrong. Traffic Manager is DNS-based, so resolver caching and clients that ignore the TTL can stretch failover well beyond 15 minutes, and it provides no caching or WAF.\n- **C** is wrong. A global load balancer operates at Layer 4 and cannot route by host name or path, terminate TLS, cache, or inspect HTTP.\n- **D** is wrong. A single regional gateway makes UK South a single point of failure for every user.",
        "source":  "Introduction to Azure Application Gateway — When to use Azure Application Gateway",
        "diagram":  "front-door",
        "case":  "fabrikam-global"
    },
    {
        "id":  209,
        "domain":  "network",
        "topic":  "Regional WAF ingress",
        "stem":  "Each region publishes shop.fabrikam.com and api.fabrikam.com through its own regional gateway. The gateway must terminate TLS for both host names, block SQL injection and cross-site scripting, scale with the November peak, and survive a zone failure.\n\nHow should you configure the regional ingress tier?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Application Gateway Standard_v2 with a WAF policy attached in Prevention mode, autoscaling enabled, and a single-zone frontend."
                        },
                        {
                            "letter":  "B",
                            "text":  "Application Gateway WAF_v2 with a zone-redundant public frontend, autoscaling, multi-site HTTPS listeners for both host names, path-based rules, and a WAF policy in Prevention mode using the Microsoft Default Rule Set."
                        },
                        {
                            "letter":  "C",
                            "text":  "Application Gateway WAF_v2 with a Basic HTTP listener per host name, Detection mode, and a fixed capacity of two instances."
                        },
                        {
                            "letter":  "D",
                            "text":  "Application Gateway Standard_v2 behind Front Door, with WAF inspection performed only at the Front Door edge."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "WAF_v2 is the Application Gateway SKU that performs web application firewall inspection; Standard_v2 does not. Multi-site listeners match each host name on port 443, and path-based rules can separate /shop from /api while the backend HTTP settings keep traffic encrypted to the scale sets. A zone-redundant frontend plus autoscaling handles both a zone loss and the threefold November peak, and a Prevention-mode WAF policy using the Microsoft Default Rule Set blocks SQL injection and cross-site scripting after tuning against legitimate traffic.\n\n- **A** is wrong. Standard_v2 has no WAF capability, and a single-zone frontend fails the zone-survival requirement.\n- **C** is wrong. A Basic listener cannot match host names, Detection mode only logs attacks, and fixed capacity cannot autoscale.\n- **D** is wrong. Relying only on the edge WAF leaves the regional ingress uninspected and gives up defense in depth for payment pages.",
        "source":  "Introduction to Azure Application Gateway — How Azure Application Gateway works",
        "case":  "fabrikam-global"
    },
    {
        "id":  210,
        "domain":  "network",
        "topic":  "Internal load balancing",
        "stem":  "The API tier in each region runs on a scale set and must accept HTTPS only from that region\u0027s Application Gateway. It must have no public IP address and must stay available if one availability zone fails. You need the least administrative effort.\n\nWhat should you deploy?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A public Standard Load Balancer with a public frontend and a network security group that allows 443 from the internet."
                        },
                        {
                            "letter":  "B",
                            "text":  "An internal Standard Load Balancer with a zone-redundant private frontend, the scale set as its backend pool, a TCP 443 health probe, and a network security group that allows 443 only from the Application Gateway subnet."
                        },
                        {
                            "letter":  "C",
                            "text":  "A Basic internal load balancer with a private frontend and the scale set as its backend pool."
                        },
                        {
                            "letter":  "D",
                            "text":  "A second Application Gateway with a private frontend in front of the scale set."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "An internal load balancer has only a private frontend, so the API tier is never exposed to an internet endpoint and the Application Gateway reaches it over the virtual network. The Standard SKU supports a zone-redundant frontend, which keeps the private address available when a zone fails, and the scale set joins the backend pool so instances are added and removed automatically as autoscale changes capacity. A TCP 443 probe removes unhealthy instances, and the subnet NSG restricts the source to the gateway subnet.\n\n- **A** is wrong. A public frontend exposes the API tier directly and the NSG rule admits the whole internet.\n- **C** is wrong. The Basic SKU is retired as of 30 September 2025 and does not provide zone redundancy.\n- **D** is wrong. A second Layer 7 gateway duplicates TLS and WAF configuration and costs more than the Layer 4 requirement needs.",
        "source":  "Introduction to Azure Load Balancer — How Azure Load Balancer works",
        "case":  "fabrikam-global"
    },
    {
        "id":  211,
        "domain":  "storage",
        "topic":  "Geo-redundant application storage",
        "stem":  "The 18 TB of catalogue images are read constantly by the storefront, and the 2 TB of order documents must stay durable and recoverable if a region fails. Static content is served through Front Door. You need to choose the storage design.\n\nWhich two actions should you perform? (Choose two.)",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "Create a general-purpose v2 account for the order documents and configure geo-redundant storage."
                        },
                        {
                            "letter":  "B",
                            "text":  "Create a premium FileStorage account configured for locally redundant storage for the catalogue images."
                        },
                        {
                            "letter":  "C",
                            "text":  "Configure the catalogue image account for read-access geo-redundant storage and serve it through Front Door with caching and a secondary origin."
                        },
                        {
                            "letter":  "D",
                            "text":  "Configure zone-redundant storage for both accounts so the data survives the loss of any of the three regions."
                        },
                        {
                            "letter":  "E",
                            "text":  "Enable blob soft delete and versioning and treat them as the cross-region recovery strategy."
                        }
                    ],
        "answers":  [
                        "A",
                        "C"
                    ],
        "explanation":  "Geo-redundant storage keeps three copies locally and replicates asynchronously to the paired region, so order documents survive a complete regional failure and can be recovered after a failover. Read-access geo-redundant storage adds a readable secondary endpoint at all times, which suits the read-heavy catalogue: Front Door can cache the images and use the secondary as a backup origin while the primary region is unavailable. Together the two choices match the data\u0027s access pattern and the 15-minute recovery target without paying for read access on documents nobody reads during normal operation.\n\n- **B** is wrong. Locally redundant storage keeps every replica in one datacenter and loses the catalogue in a regional disaster.\n- **D** is wrong. Zone-redundant storage replicates across three zones in one region, not across three regions.\n- **E** is wrong. Soft delete and versioning protect against deletion and overwrite, not the loss of a region.",
        "source":  "Configure storage accounts — Determine replication strategies",
        "case":  "fabrikam-global"
    },
    {
        "id":  212,
        "domain":  "compute",
        "topic":  "Zone-spanning scale sets",
        "stem":  "The web tier in each region must run across all three availability zones, scale automatically between 6 and 60 instances on CPU and on a November schedule, and keep instances evenly spread across fault domains. You need to configure the scale set.\n\nWhat should you configure?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "A Uniform scale set pinned to zone 1 with autoscale rules and fixed spreading across five fault domains."
                        },
                        {
                            "letter":  "B",
                            "text":  "A Flexible scale set spanning zones 1, 2, and 3 with max spreading, autoscale rules with a minimum of 6 and a maximum of 60, and a scheduled profile for the November peak."
                        },
                        {
                            "letter":  "C",
                            "text":  "An availability set with three fault domains in each region and autoscale on the scale set."
                        },
                        {
                            "letter":  "D",
                            "text":  "One scale set in UK South with 60 instances behind a global load balancer."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Flexible orchestration is the default and recommended mode, and it lets the scale set span the three availability zones so a zone failure leaves two-thirds of the fleet serving traffic. Max spreading distributes instances across as many fault domains as each zone offers, which is more resilient than fixed spreading and avoids deployment failures in zones with fewer than five fault domains. Metric rules cover unexpected CPU growth, and a scheduled profile raises the baseline before the known November promotion, with the 6-to-60 range capping cost.\n\n- **A** is wrong. Pinning to zone 1 loses the entire tier when that zone fails, and fixed spreading can fail in zones with fewer than five fault domains.\n- **C** is wrong. Availability sets are scoped to a single datacenter and cannot span availability zones.\n- **D** is wrong. A single region cannot meet the 15-minute regional failover objective.",
        "source":  "Configure virtual machine availability — Implement Azure Virtual Machine Scale Sets",
        "diagram":  "vmss-zones",
        "case":  "fabrikam-global"
    },
    {
        "id":  213,
        "domain":  "monitor",
        "topic":  "Regional vault and cross-region restore",
        "stem":  "Each region runs stateful SQL Server virtual machines plus a stateless web tier rebuilt from a custom image. Backups must survive the loss of any single region, support a restore in another region within the 15-minute recovery time objective, and keep 35 days of daily recovery points. You need to design Azure Backup.\n\nWhat should you design?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "One Recovery Services vault in UK South with locally redundant storage, receiving backups from all three regions."
                        },
                        {
                            "letter":  "B",
                            "text":  "A Recovery Services vault in each region configured with geo-redundant storage and Cross Region Restore, Azure workload backup for SQL Server, and an Enhanced policy retaining 35 daily recovery points; the web tier is rebuilt from its image instead of backed up."
                        },
                        {
                            "letter":  "C",
                            "text":  "A single geo-redundant vault in East US with Cross Region Restore and a backup agent on every web instance."
                        },
                        {
                            "letter":  "D",
                            "text":  "Azure Site Recovery replication for every virtual machine with a 35-day retention policy."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "A Recovery Services vault is a regional resource, so each region needs its own vault for local backup traffic and a clear restore path. Geo-redundant vault storage replicates backup data to the paired region, and Cross Region Restore makes eligible recovery points restorable there when the primary region is unavailable. Azure workload backup for SQL Server produces application-consistent database recovery points, which disk snapshots alone cannot guarantee. The stateless web tier needs no backup because the pipeline can rebuild it from the custom image faster than restoring 60 instances, which also protects the monthly budget.\n\n- **A** is wrong. A locally redundant vault in UK South is lost with that region and becomes a cross-region dependency for every workload.\n- **C** is wrong. A single vault in East US makes North American recovery depend on one region and wastes money backing up stateless instances.\n- **D** is wrong. Site Recovery provides replication for disaster recovery, not a 35-day backup retention policy.",
        "source":  "Introduction to Azure Backup — How Azure Backup works",
        "case":  "fabrikam-global"
    },
    {
        "id":  214,
        "domain":  "monitor",
        "topic":  "Cross-region observability",
        "stem":  "A single operations team in London monitors all three regions. Alerts are needed for Front Door origin latency, Application Gateway 5xx responses, scale set CPU above 85%, and SQL CPU above 90%. GDPR requires telemetry from European resources to stay in the European Union. You need the least administrative effort.\n\nWhat should you design?",
        "options":  [
                        {
                            "letter":  "A",
                            "text":  "One Log Analytics workspace per scale set and per gateway, with alert rules owned by each regional team."
                        },
                        {
                            "letter":  "B",
                            "text":  "A West Europe Log Analytics workspace for UK South and West Europe resources and an East US workspace for East US resources, diagnostic settings from each regional resource to its workspace, multi-resource metric alerts, Front Door diagnostic logs, one shared action group, and a single Azure Monitor workbook."
                        },
                        {
                            "letter":  "C",
                            "text":  "A single Log Analytics workspace in East US for all telemetry so every region is queryable in one place."
                        },
                        {
                            "letter":  "D",
                            "text":  "Front Door reports and a weekly Log Analytics review, with alerts only on Azure Service Health notifications."
                        }
                    ],
        "answers":  [
                        "B"
                    ],
        "explanation":  "Two workspaces satisfy the GDPR boundary while still giving the London team a consistent query experience, and resource-context diagnostic settings send each regional resource\u0027s telemetry to the correct workspace without per-resource agents. Multi-resource metric alerts apply one rule to every scale set and gateway in scope, which is far less maintenance than a rule per resource. Front Door diagnostic logs and its origin latency metric cover the global entry point, and one shared action group plus one workbook give the team a single operational view with near-real-time evaluation.\n\n- **A** is wrong. A workspace and rule set per resource fragments the view and multiplies the configuration the small team must maintain.\n- **C** is wrong. Sending European telemetry to East US violates the GDPR requirement in the case.\n- **D** is wrong. Weekly reviews and Service Health alerts are reactive and never evaluate the CPU or 5xx thresholds.",
        "source":  "Monitor your Azure virtual machines with Azure Monitor — Monitoring for Azure VMs",
        "case":  "fabrikam-global"
    }
];
