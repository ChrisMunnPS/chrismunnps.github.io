/* AZ-900 architecture diagram library - inline SVG, works from file:// */
(function () {
  'use strict';

  function box(x, y, w, h, lines, cls) {
    if (typeof lines === 'string') lines = [lines];
    var lh = 15;
    var start = y + h / 2 - ((lines.length - 1) * lh) / 2 + 4;
    var text = lines.map(function (line, i) {
      return '<text class="dg-t" x="' + (x + w / 2) + '" y="' + (start + i * lh) + '" text-anchor="middle">' + line + '</text>';
    }).join('');
    return '<rect class="dg-box ' + (cls || '') + '" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="9"/>' + text;
  }

  function frameBox(x, y, w, h, title) {
    return '<rect class="dg-frame" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="12"/>'
      + '<text class="dg-lbl dg-lbl-top" x="' + (x + 14) + '" y="' + (y + 20) + '" text-anchor="start">' + title + '</text>';
  }

  function label(x, y, text, cls, anchor) {
    return '<text class="dg-lbl ' + (cls || '') + '" x="' + x + '" y="' + y + '" text-anchor="' + (anchor || 'middle') + '">' + text + '</text>';
  }

  function arrow(x1, y1, x2, y2, opts) {
    opts = opts || {};
    return '<line class="dg-line' + (opts.cls ? ' ' + opts.cls : '') + '" x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '"'
      + (opts.dashed ? ' stroke-dasharray="6 4"' : '')
      + (opts.back ? ' marker-start="url(#dg-arrow)"' : '')
      + (opts.noEnd ? '' : ' marker-end="url(#dg-arrow)"') + '/>';
  }

  function frame(w, h, body) {
    return '<svg class="dg" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">'
      + '<defs><marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
      + '<path d="M0 0 L10 5 L0 10 Z" fill="#64748b"/></marker></defs>'
      + body + '</svg>';
  }

  var DIAGRAMS = {
    'cloud-service-models': {
      label: 'IaaS, PaaS, and SaaS responsibility split',
      svg: frame(720, 330,
        label(360, 24, 'The higher the model, the more Microsoft manages')
        + frameBox(20, 44, 216, 212, 'IaaS')
        + box(36, 82, 184, 46, ['You: OS, runtime, apps, data'], 'alt')
        + box(36, 140, 184, 46, ['You: virtual network, identity'], 'alt')
        + box(36, 198, 184, 40, ['Microsoft: hosts, storage'], 'muted')
        + frameBox(252, 44, 216, 212, 'PaaS')
        + box(268, 82, 184, 46, ['You: app code and data'], 'alt')
        + box(268, 140, 184, 46, ['Microsoft: OS, runtime, scaling'], 'muted')
        + box(268, 198, 184, 40, ['Microsoft: hosts, patching'], 'muted')
        + frameBox(484, 44, 216, 212, 'SaaS')
        + box(500, 82, 184, 46, ['You: users, data, settings'], 'alt')
        + box(500, 140, 184, 46, ['Microsoft: the whole service'], 'muted')
        + box(500, 198, 184, 40, ['Example: Microsoft 365'], 'muted')
        + label(360, 286, 'Examples - IaaS: virtual machines. PaaS: App Service, Azure SQL. SaaS: Microsoft 365, Dynamics 365.')
      )
    },

    'region-zones-pair': {
      label: 'Region, availability zones, and region pairs',
      svg: frame(720, 330,
        label(360, 24, 'Zones protect inside a region; the pair protects across regions')
        + frameBox(20, 44, 420, 214, 'Region A - for example, East US')
        + box(40, 86, 112, 140, ['Zone 1', 'datacenter', 'power + cooling'], 'alt')
        + box(166, 86, 112, 140, ['Zone 2', 'datacenter', 'power + cooling'], 'alt')
        + box(292, 86, 112, 140, ['Zone 3', 'datacenter', 'power + cooling'], 'alt')
        + arrow(152, 156, 166, 156, { back: true })
        + arrow(278, 156, 292, 156, { back: true })
        + frameBox(470, 44, 230, 214, 'Paired region - West US')
        + box(490, 86, 190, 62, ['At least 300 miles away', 'same geography'], 'muted')
        + box(490, 162, 190, 64, ['Replication and', 'planned updates', 'roll out one at a time'], 'muted')
        + arrow(440, 150, 470, 150, {})
        + label(455, 138, 'pair')
        + label(360, 292, 'Not every service replicates automatically - the customer configures recovery for many workloads.')
      )
    },

    'resource-hierarchy': {
      label: 'Azure management hierarchy',
      svg: frame(720, 320,
        label(360, 24, 'Policy and access inherit downward from the top')
        + box(250, 42, 220, 44, ['Tenant root group'], 'warn')
        + box(250, 102, 220, 44, ['Management groups'], 'alt')
        + box(250, 162, 220, 44, ['Subscriptions'], 'alt')
        + box(250, 222, 220, 44, ['Resource groups'], '')
        + box(250, 282, 220, 30, ['Resources'], 'muted')
        + arrow(360, 86, 360, 102, {})
        + arrow(360, 146, 360, 162, {})
        + arrow(360, 206, 360, 222, {})
        + arrow(360, 266, 360, 282, {})
        + label(150, 70, '1 per tenant', 'dg-lbl', 'start')
        + label(150, 130, 'up to 6 levels deep', 'dg-lbl', 'start')
        + label(150, 190, 'billing + access boundary', 'dg-lbl', 'start')
        + label(150, 250, 'one resource, one group', 'dg-lbl', 'start')
      )
    },

    'storage-services': {
      label: 'Azure Storage services in one account',
      svg: frame(720, 320,
        label(360, 24, 'One storage account exposes four data services')
        + frameBox(230, 44, 260, 230, 'Storage account')
        + box(250, 84, 220, 38, ['Blob storage'], 'alt')
        + box(250, 130, 220, 38, ['Azure Files'], 'alt')
        + box(250, 176, 220, 38, ['Queue storage'], 'alt')
        + box(250, 222, 220, 38, ['Table storage'], 'alt')
        + label(120, 106, 'Unstructured objects: images, video, backups', 'dg-lbl', 'start')
        + label(120, 152, 'Managed SMB/NFS file shares', 'dg-lbl', 'start')
        + label(120, 198, 'Messages between app components', 'dg-lbl', 'start')
        + label(120, 244, 'NoSQL key-value tables', 'dg-lbl', 'start')
        + label(360, 296, 'The account sets the region, performance tier, and redundancy (LRS, ZRS, GRS, RA-GRS).')
      )
    },

    'networking-path': {
      label: 'Inbound path from the internet to an app',
      svg: frame(720, 300,
        label(360, 24, 'Each hop adds a different kind of routing or protection')
        + box(20, 70, 120, 60, ['Internet', 'users'], 'muted')
        + box(160, 70, 130, 60, ['Azure Front Door', 'global HTTP entry'], 'alt')
        + box(310, 70, 140, 60, ['Application Gateway', 'regional layer 7 + WAF'], 'alt')
        + box(470, 70, 110, 60, ['App Service'], '')
        + box(600, 70, 100, 60, ['VNet', 'private IP'], '')
        + arrow(140, 100, 160, 100, {})
        + arrow(290, 100, 310, 100, {})
        + arrow(450, 100, 470, 100, {})
        + arrow(580, 100, 600, 100, {})
        + box(160, 180, 130, 54, ['Global load balancing', 'caching, WAF'], 'muted')
        + box(310, 180, 140, 54, ['Path routing', 'TLS termination'], 'muted')
        + box(470, 180, 230, 54, ['Private endpoints keep PaaS traffic', 'inside the virtual network'], 'muted')
        + label(360, 268, 'VPN Gateway connects over the internet; ExpressRoute is a private dedicated circuit.')
      )
    },

    'identity-signin': {
      label: 'Authentication and authorization flow',
      svg: frame(720, 300,
        label(360, 24, 'Entra ID authenticates; the resource authorizes with RBAC')
        + box(20, 80, 120, 64, ['User or app'], '')
        + box(170, 80, 150, 64, ['Microsoft Entra ID', 'identity provider'], 'alt')
        + box(350, 80, 150, 64, ['MFA + Conditional', 'Access evaluation'], 'alt')
        + box(530, 80, 170, 64, ['Access token', 'issued'], 'warn')
        + arrow(140, 112, 170, 112, {})
        + arrow(320, 112, 350, 112, {})
        + arrow(500, 112, 530, 112, {})
        + box(350, 186, 350, 54, ['Target resource checks the token and RBAC role assignment'], 'muted')
        + arrow(615, 144, 615, 186, {})
        + label(175, 246, 'Single sign-on: one identity, many apps', 'dg-lbl', 'start')
        + label(175, 268, 'Conditional Access: signals decide whether to allow, block, or require MFA', 'dg-lbl', 'start')
      )
    }
  };

  window.EXAM_DIAGRAMS = DIAGRAMS;
  window.DIAGRAMS = DIAGRAMS;
}());
