/* AZ-104 architecture diagram library - inline SVG, works from file:// */
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
    'hub-spoke': {
      label: 'Hub-and-spoke topology',
      svg: frame(720, 320,
        label(360, 24, 'Hub VNet holds shared services; spokes peer with the hub only')
        + frameBox(262, 40, 196, 200, 'Hub VNet 10.0.0.0/16')
        + box(278, 82, 164, 52, ['FirewallSubnet', 'Azure Firewall'], 'warn')
        + box(278, 148, 164, 52, ['GatewaySubnet', 'VPN gateway'], '')
        + box(24, 74, 196, 132, ['Spoke A VNet', '10.1.0.0/16', 'Workload subnet'], 'alt')
        + box(500, 74, 196, 132, ['Spoke B VNet', '10.2.0.0/16', 'Workload subnet'], 'alt')
        + arrow(220, 140, 262, 140, { back: true })
        + arrow(458, 140, 500, 140, { back: true })
        + label(241, 128, 'peering')
        + label(479, 128, 'peering')
        + label(360, 286, 'Spoke-to-spoke traffic is routed through the firewall in the hub. Peering is not transitive.')
      )
    },

    'nsg-subnets': {
      label: 'Subnets, NSGs, and application security groups',
      svg: frame(720, 330,
        frameBox(50, 16, 620, 286, 'VNet 10.20.0.0/16')
        + box(96, 66, 528, 56, ['Web subnet 10.20.1.0/24', 'NSG-web · ASG-web · allow 443 from Internet'], 'alt')
        + box(96, 142, 528, 56, ['App subnet 10.20.2.0/24', 'NSG-app · ASG-app · allow 8443 from ASG-web'], '')
        + box(96, 218, 528, 56, ['Data subnet 10.20.3.0/24', 'NSG-data · allow 1433 from ASG-app only'], 'warn')
        + arrow(360, 122, 360, 142)
        + arrow(360, 198, 360, 218)
        + label(360, 320, 'Each subnet has its own NSG. ASGs group NICs so rules follow the role, not the IP address.')
      )
    },

    'lb-public-internal': {
      label: 'Public and internal load balancers',
      svg: frame(720, 300,
        box(20, 114, 104, 60, ['Internet'], 'muted')
        + box(154, 104, 132, 80, ['Public LB', 'Standard SKU'], 'warn')
        + box(318, 46, 128, 52, ['Web VM 1'], 'alt')
        + box(318, 190, 128, 52, ['Web VM 2'], 'alt')
        + box(478, 104, 132, 80, ['Internal LB', 'Standard SKU'], '')
        + box(636, 132, 66, 52, ['App VM'], 'alt')
        + arrow(124, 144, 154, 144)
        + arrow(286, 124, 318, 78)
        + arrow(286, 164, 318, 212)
        + arrow(446, 78, 478, 124)
        + arrow(446, 212, 478, 164)
        + arrow(610, 144, 636, 158)
        + label(360, 278, 'The public load balancer fronts the web tier; the internal load balancer has no public IP.')
      )
    },

    'appgw-waf': {
      label: 'Application Gateway with a WAF policy',
      svg: frame(720, 320,
        box(20, 128, 112, 60, ['Internet'], 'muted')
        + box(166, 96, 184, 128, ['Application Gateway', 'WAF_v2 tier', 'listener · rules · probe'], 'warn')
        + box(404, 48, 288, 82, ['Backend pool A', '2 VMs - HTTPS 443', 'custom health probe'], 'alt')
        + box(404, 190, 288, 82, ['Backend pool B', '2 VMs - HTTPS 443', 'custom health probe'], 'alt')
        + arrow(132, 158, 166, 158)
        + arrow(350, 130, 404, 92)
        + arrow(350, 190, 404, 228)
        + label(360, 300, 'WAF runs in prevention mode. Health probes remove a failed backend from rotation.')
      )
    },

    'private-endpoint': {
      label: 'Private endpoint for a storage account',
      svg: frame(720, 330,
        frameBox(28, 24, 360, 268, 'VNet 10.30.0.0/16')
        + box(56, 66, 300, 108, ['Private endpoint subnet 10.30.1.0/24', 'NIC 10.30.1.5'], 'alt')
        + box(56, 196, 300, 66, ['Client subnet', 'DNS resolves the blob name to 10.30.1.5'], '')
        + box(468, 66, 224, 108, ['Storage account', 'public network access: Disabled'], 'warn')
        + box(468, 208, 224, 70, ['Private DNS zone', 'privatelink.blob.core.windows.net'], '')
        + arrow(356, 120, 468, 120)
        + arrow(580, 174, 580, 208)
        + label(412, 108, 'private link')
        + label(360, 316, 'Disabling public access means clients must resolve the private IP, so the private DNS zone must be linked.')
      )
    },

    'vpn-site2site': {
      label: 'Site-to-site VPN gateway',
      svg: frame(720, 330,
        box(20, 112, 168, 96, ['On-premises network', '10.0.0.0/16', 'local network gateway'], 'muted')
        + arrow(188, 138, 330, 108, { dashed: true, back: true })
        + arrow(188, 182, 330, 212, { dashed: true, back: true })
        + label(258, 96, 'IPsec tunnel 1')
        + label(258, 232, 'IPsec tunnel 2')
        + box(330, 76, 150, 168, ['VPN gateway', 'GatewaySubnet', 'active-active'], 'warn')
        + box(520, 96, 180, 128, ['VNet 10.50.0.0/16', 'workload subnets'], 'alt')
        + arrow(480, 160, 520, 160, { back: true })
        + label(360, 288, 'Two tunnels to two gateway instances keep the connection up when one instance fails.')
      )
    },

    'front-door': {
      label: 'Front Door in front of three regional stacks',
      svg: frame(720, 356,
        box(16, 148, 118, 60, ['Global users'], 'muted')
        + box(174, 120, 178, 116, ['Azure Front Door', 'anycast edge', 'health probes'], 'warn')
        + box(414, 30, 286, 70, ['UK South stack', 'App Gateway + app tier'], 'alt')
        + box(414, 140, 286, 70, ['West Europe stack', 'App Gateway + app tier'], 'alt')
        + box(414, 250, 286, 70, ['East US stack', 'App Gateway + app tier'], 'alt')
        + arrow(134, 178, 174, 178)
        + arrow(352, 156, 414, 78)
        + arrow(352, 178, 414, 172)
        + arrow(352, 200, 414, 268)
        + label(360, 340, 'Active-active routing with priority failover when a region fails its health probe.')
      )
    },

    'vmss-zones': {
      label: 'VM scale set spread across availability zones',
      svg: frame(720, 344,
        box(16, 138, 138, 72, ['Load balancer', 'Standard SKU'], 'warn')
        + frameBox(196, 28, 152, 286, 'Zone 1')
        + frameBox(364, 28, 152, 286, 'Zone 2')
        + frameBox(532, 28, 152, 286, 'Zone 3')
        + box(214, 66, 116, 48, ['Instance 1'], 'alt')
        + box(214, 130, 116, 48, ['Instance 2'], 'alt')
        + box(382, 66, 116, 48, ['Instance 3'], 'alt')
        + box(382, 130, 116, 48, ['Instance 4'], 'alt')
        + box(550, 66, 116, 48, ['Instance 5'], 'alt')
        + box(550, 130, 116, 48, ['Instance 6'], 'alt')
        + box(214, 214, 116, 56, ['Zone failure', 'survives'], 'warn')
        + arrow(154, 162, 196, 150)
        + arrow(154, 186, 196, 200)
        + label(360, 330, 'A zone-redundant scale set keeps at least one instance running when a zone fails.')
      )
    },

    'storage-redundancy': {
      label: 'Storage redundancy options',
      svg: frame(720, 372,
        frameBox(16, 16, 336, 156, 'LRS - three copies, one datacenter')
        + copyRow(40, 86, 3, '#dbeafe')
        + label(180, 140, 'one region, one zone', 'dg-lbl')
        + frameBox(368, 16, 336, 156, 'ZRS - three copies, three zones')
        + copyRow(392, 86, 3, '#d1fae5')
        + label(536, 140, 'one region, three zones', 'dg-lbl')
        + frameBox(16, 188, 336, 156, 'GRS - LRS plus three copies in a paired region')
        + copyRow(40, 246, 3, '#dbeafe')
        + copyRow(196, 246, 3, '#fef3c7')
        + label(90, 296, 'primary region')
        + label(250, 296, 'paired region')
        + frameBox(368, 188, 336, 156, 'RA-GRS - GRS plus read access to the secondary')
        + copyRow(392, 246, 3, '#d1fae5')
        + copyRow(548, 246, 3, '#ede9fe')
        + label(442, 296, 'primary region')
        + label(602, 296, 'paired region (readable)')
        + label(360, 364, 'All options replicate synchronously inside the primary region; only GRS adds an asynchronous copy to the paired region.')
      )
    },

    'udr-firewall': {
      label: 'User-defined route forcing traffic through Azure Firewall',
      svg: frame(720, 320,
        box(24, 108, 196, 100, ['Workload subnet', '10.60.1.0/24', 'route table attached'], 'alt')
        + box(250, 34, 220, 78, ['User-defined route', '0.0.0.0/0 - Virtual appliance'], 'warn')
        + box(268, 168, 168, 84, ['Azure Firewall', 'private IP 10.60.0.4'], 'warn')
        + box(500, 176, 168, 68, ['Internet'], 'muted')
        + arrow(220, 132, 250, 112, { dashed: true, noEnd: true })
        + arrow(220, 176, 268, 200)
        + arrow(436, 210, 500, 210)
        + label(360, 292, 'The route table sends all egress to the firewall virtual appliance; the firewall then applies its own rules.')
      )
    },

    'bastion': {
      label: 'Azure Bastion with no public IP on the VMs',
      svg: frame(720, 300,
        box(16, 110, 138, 72, ['Administrator', 'HTTPS 443'], 'muted')
        + box(172, 92, 180, 108, ['Azure Bastion', 'AzureBastionSubnet /26'], 'warn')
        + frameBox(468, 44, 234, 212, 'App subnet')
        + box(490, 86, 190, 52, ['VM 1 - no public IP'], 'alt')
        + box(490, 166, 190, 52, ['VM 2 - no public IP'], 'alt')
        + arrow(154, 146, 172, 146)
        + arrow(352, 128, 468, 112, { dashed: true, noEnd: true })
        + label(410, 96, 'RDP/SSH over TLS')
        + label(360, 282, 'Bastion connects from inside the VNet, so the VMs never need a public IP or an open RDP port.')
      )
    },

    'dns-private': {
      label: 'Private DNS zone linked to two virtual networks',
      svg: frame(720, 336,
        box(24, 44, 216, 108, ['VNet A', '10.70.0.0/16'], 'alt')
        + box(24, 200, 216, 108, ['VNet B', '10.80.0.0/16'], 'alt')
        + box(316, 112, 264, 100, ['Private DNS zone', 'contoso.internal', 'A record: app -> 10.70.1.4'], 'warn')
        + box(588, 116, 116, 92, ['Private endpoint', '10.70.1.4'], '')
        + arrow(240, 96, 316, 132, { dashed: true, back: true })
        + arrow(240, 254, 316, 192, { dashed: true, back: true })
        + label(272, 78, 'virtual network link')
        + label(272, 288, 'virtual network link')
        + arrow(580, 162, 588, 162)
        + label(360, 324, 'Both VNets resolve app.contoso.internal to the private endpoint address.')
      )
    }
  };

  function copyRow(x, y, count, fill) {
    var out = '';
    for (var i = 0; i < count; i++) {
      out += '<rect class="dg-copy" x="' + (x + i * 34) + '" y="' + y + '" width="24" height="24" rx="5" fill="' + fill + '"/>';
    }
    return out;
  }

  window.EXAM_DIAGRAMS = DIAGRAMS;
})();
