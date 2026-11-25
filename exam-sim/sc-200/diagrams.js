/* SC-200 architecture diagram library - inline SVG, works from file:// */
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
    'defender-xdr': {
      label: 'Defender XDR correlates workload signals into one incident',
      svg: frame(760, 340,
        label(380, 26, 'Each Defender workload contributes detections; Defender XDR correlates them')
        + box(20, 48, 196, 54, ['Defender for Endpoint', 'device, file, process'], 'alt')
        + box(20, 118, 196, 54, ['Defender for Identity', 'domain controller signals'], 'alt')
        + box(20, 188, 196, 54, ['Defender for Office 365', 'mail, links, attachments'], 'alt')
        + box(20, 258, 196, 54, ['Defender for Cloud Apps', 'SaaS and OAuth activity'], 'alt')
        + box(282, 112, 196, 128, ['Microsoft Defender XDR', 'alert correlation', 'evidence and entities'], 'warn')
        + box(546, 126, 194, 100, ['Unified incident', 'severity, status,', 'attack story'], '')
        + arrow(216, 75, 282, 140)
        + arrow(216, 145, 282, 158)
        + arrow(216, 215, 282, 180)
        + arrow(216, 285, 282, 205)
        + arrow(478, 176, 546, 176)
        + label(380, 322, 'One incident can carry alerts and entities from several workloads.')
      )
    },

    'sentinel-data-flow': {
      label: 'Microsoft Sentinel ingestion, detection, and incident flow',
      svg: frame(760, 340,
        frameBox(16, 60, 164, 224, 'Data sources')
        + box(32, 92, 132, 44, ['Entra ID'], 'alt')
        + box(32, 146, 132, 44, ['Defender XDR'], 'alt')
        + box(32, 200, 132, 44, ['Syslog / CEF'], 'alt')
        + box(220, 118, 148, 108, ['Data connectors', 'DCR / ingestion API'], 'warn')
        + box(408, 118, 148, 108, ['Log Analytics', 'workspace tables'], '')
        + box(596, 48, 148, 82, ['Analytics rules', 'scheduled, NRT, Fusion'], 'warn')
        + box(596, 190, 148, 82, ['Incidents', 'alerts grouped'], '')
        + arrow(180, 150, 220, 150)
        + arrow(368, 150, 408, 150)
        + arrow(484, 150, 520, 150)
        + arrow(520, 150, 520, 90)
        + arrow(520, 90, 596, 90)
        + arrow(520, 150, 520, 230)
        + arrow(520, 230, 596, 230)
        + label(380, 318, 'Analytics rules query the workspace on a schedule and raise alerts that become incidents.')
      )
    },

    'hunting-workflow': {
      label: 'Threat hunting workflow',
      svg: frame(760, 300,
        label(380, 28, 'Hunting starts with a hypothesis, not an alert')
        + box(24, 92, 128, 88, ['Telemetry', 'tables and', 'connectors'], 'alt')
        + box(180, 92, 128, 88, ['KQL query', 'filter, summarize,', 'join'], 'warn')
        + box(336, 92, 128, 88, ['Findings', 'bookmarks,', 'entities'], '')
        + box(492, 92, 128, 88, ['Investigation', 'graph and', 'timeline'], '')
        + box(632, 92, 104, 88, ['Response', 'contain and', 'remediate'], 'alt')
        + arrow(152, 136, 180, 136)
        + arrow(308, 136, 336, 136)
        + arrow(464, 136, 492, 136)
        + arrow(620, 136, 632, 136)
        + label(380, 228, 'A hunting query that proves useful becomes a scheduled analytics rule.')
        + label(380, 252, 'Bookmarks preserve the events you want to revisit or add to an incident.')
      )
    },

    'investigation-graph': {
      label: 'Incident investigation graph around one entity',
      svg: frame(760, 360,
        label(380, 26, 'The investigation graph expands from an entity across related evidence')
        + box(312, 138, 136, 72, ['Incident', 'alert cluster'], 'warn')
        + box(82, 52, 150, 60, ['User', 'account and risk'], 'alt')
        + box(82, 228, 150, 60, ['Device', 'endpoint alerts'], 'alt')
        + box(324, 44, 112, 52, ['Mailbox', 'mail events'], '')
        + box(530, 52, 150, 60, ['File / hash', 'malware evidence'], '')
        + box(530, 228, 150, 60, ['IP / domain', 'network telemetry'], '')
        + box(324, 268, 112, 52, ['Process', 'parent and child'], '')
        + arrow(232, 92, 312, 152)
        + arrow(232, 248, 312, 198)
        + arrow(324, 96, 360, 138)
        + arrow(530, 92, 448, 152)
        + arrow(530, 248, 448, 198)
        + arrow(380, 268, 380, 210)
        + label(380, 342, 'Pivoting on a mapped entity shows every alert, event, and bookmark that mentions it.')
      )
    },

    'ransomware-chain': {
      label: 'Ransomware attack chain mapped to response stages',
      svg: frame(760, 330,
        box(20, 62, 168, 74, ['1. Initial access', 'phishing email or', 'exposed service'], 'warn')
        + box(224, 62, 168, 74, ['2. Execution', 'payload runs,', 'PowerShell'], 'warn')
        + box(428, 62, 168, 74, ['3. Persistence', 'run keys, tasks,', 'services'], '')
        + box(632, 62, 108, 74, ['4. Credential', 'access'], '')
        + box(632, 190, 108, 74, ['5. Lateral', 'movement'], '')
        + box(428, 190, 168, 74, ['6. Impact', 'files encrypted,', 'shadow copies deleted'], 'warn')
        + box(224, 190, 168, 74, ['7. Exfiltration', 'data staged or', 'sent out'], '')
        + box(20, 190, 168, 74, ['Response', 'isolate, disable,', 'restore'], 'alt')
        + arrow(188, 99, 224, 99)
        + arrow(392, 99, 428, 99)
        + arrow(596, 99, 632, 99)
        + arrow(686, 136, 686, 190)
        + arrow(632, 227, 596, 227)
        + arrow(428, 227, 392, 227)
        + arrow(224, 227, 188, 227)
        + label(380, 310, 'Containment at step 2-5 limits encryption; recovery depends on clean, tested backups.')
      )
    },

    'sentinel-automation': {
      label: 'Sentinel automation rule and playbook flow',
      svg: frame(740, 300,
        label(370, 26, 'Automation rules triage incidents; playbooks perform the actions')
        + box(20, 108, 132, 80, ['Incident', 'created or', 'updated'], 'warn')
        + box(184, 108, 156, 80, ['Automation rule', 'conditions, order,', 'owner / severity'], '')
        + box(372, 108, 156, 80, ['Playbook', 'Logic App', 'triggered'], 'alt')
        + box(560, 44, 156, 52, ['Microsoft Teams', 'post to channel'], 'muted')
        + box(560, 122, 156, 52, ['Email', 'notify on-call'], 'muted')
        + box(560, 200, 156, 52, ['Ticketing', 'create or update'], 'muted')
        + arrow(152, 148, 184, 148)
        + arrow(340, 148, 372, 148)
        + arrow(528, 132, 560, 80)
        + arrow(528, 148, 560, 148)
        + arrow(528, 164, 560, 216)
        + label(370, 270, 'An automation rule can run a playbook, or run first and hand the incident to a playbook.')
      )
    },

    'mitre-attack': {
      label: 'MITRE ATT&CK tactics across an intrusion',
      svg: frame(760, 320,
        box(20, 60, 168, 64, ['Initial Access', 'phishing, valid accounts'], 'warn')
        + box(210, 60, 168, 64, ['Execution', 'script, command line'], 'warn')
        + box(400, 60, 168, 64, ['Persistence', 'scheduled task, service'], '')
        + box(590, 60, 150, 64, ['Privilege Escalation', 'elevated token'], '')
        + box(590, 188, 150, 64, ['Credential Access', 'LSASS, Kerberos'], 'warn')
        + box(400, 188, 168, 64, ['Lateral Movement', 'remote service, SMB'], '')
        + box(210, 188, 168, 64, ['Collection', 'mailbox, files'], '')
        + box(20, 188, 168, 64, ['Command and Control', 'beacon to external IP'], '')
        + arrow(188, 92, 210, 92)
        + arrow(378, 92, 400, 92)
        + arrow(568, 92, 590, 92)
        + arrow(665, 124, 665, 188)
        + arrow(590, 220, 568, 220)
        + arrow(400, 220, 378, 220)
        + arrow(210, 220, 188, 220)
        + label(380, 296, 'Tactics describe why an action was taken; techniques describe how it was done.')
      )
    },

    'identity-attack': {
      label: 'Identity attack investigation from sign-in telemetry to response',
      svg: frame(740, 330,
        box(20, 70, 156, 74, ['Sign-in logs', 'Entra ID,', 'risk detections'], 'alt')
        + box(206, 70, 156, 74, ['Defender for Identity', 'domain controller', 'sensors'], 'alt')
        + box(392, 70, 156, 74, ['Correlated incident', 'user + device', '+ IP evidence'], 'warn')
        + box(578, 70, 142, 74, ['Triage', 'scope and', 'severity'], '')
        + box(578, 200, 142, 74, ['Response', 'revoke sessions,', 'reset password'], 'alt')
        + box(392, 200, 156, 74, ['Containment', 'disable account,', 'block sign-in'], '')
        + box(206, 200, 156, 74, ['Enrichment', 'watchlist and', 'threat intel'], '')
        + box(20, 200, 156, 74, ['Validation', 'MFA prompts,', 'new country'], '')
        + arrow(176, 107, 206, 107)
        + arrow(362, 107, 392, 107)
        + arrow(548, 107, 578, 107)
        + arrow(649, 144, 649, 200)
        + arrow(578, 237, 548, 237)
        + arrow(392, 237, 362, 237)
        + arrow(206, 237, 176, 237)
        + label(370, 308, 'Sign-in logs explain the authentication; Defender for Identity explains domain-level credential abuse.')
      )
    }
  };

  window.EXAM_DIAGRAMS = DIAGRAMS;
  window.DIAGRAMS = DIAGRAMS;
})();
