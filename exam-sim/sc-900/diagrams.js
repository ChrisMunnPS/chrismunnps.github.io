/* SC-900 security architecture diagram library - inline SVG, works from file:// */
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
    'zero-trust-flow': {
      label: 'Zero Trust request path',
      svg: frame(720, 300,
        label(360, 24, 'Nothing is trusted because of where it connects from')
        + box(20, 74, 136, 64, ['User, device,', 'or application'], 'muted')
        + box(182, 74, 150, 64, ['Verify explicitly', 'authenticate + authorise'], 'alt')
        + box(358, 74, 150, 64, ['Conditional Access', 'policy decision'], 'alt')
        + box(534, 74, 166, 64, ['Protected resource', 'data, app, or service'], '')
        + arrow(156, 106, 182, 106, {})
        + arrow(332, 106, 358, 106, {})
        + arrow(508, 106, 534, 106, {})
        + box(20, 176, 210, 62, ['Least privilege', 'just enough, just in time'], 'muted')
        + box(250, 176, 210, 62, ['Assume breach', 'segment, monitor, contain'], 'muted')
        + box(480, 176, 220, 62, ['Continuous verification', 're-check every request'], 'muted')
        + label(360, 272, 'Zero Trust replaces "trusted network" with explicit, per-request decisions.')
      )
    },

    'defence-in-depth': {
      label: 'Layers of defence in depth',
      svg: frame(720, 340,
        label(360, 24, 'An attacker has to cross every layer')
        + box(270, 38, 180, 30, ['Physical'], 'muted')
        + box(240, 74, 240, 30, ['Identity'], 'alt')
        + box(210, 110, 300, 30, ['Perimeter'], 'muted')
        + box(180, 146, 360, 30, ['Network'], 'alt')
        + box(150, 182, 420, 30, ['Compute'], 'muted')
        + box(120, 218, 480, 30, ['Application'], 'alt')
        + box(90, 254, 540, 30, ['Data'], 'warn')
        + label(360, 310, 'Each layer assumes the one above it has already failed.')
        + label(360, 328, 'Data - the asset attackers want - sits at the centre.')
      )
    },

    'security-stack': {
      label: 'Microsoft security stack: XDR above the workloads, Sentinel above XDR',
      svg: frame(720, 330,
        label(360, 24, 'Signals feed up; investigation and response flow down')
        + box(20, 46, 155, 56, ['Defender for', 'Endpoint'], 'alt')
        + box(190, 46, 155, 56, ['Defender for', 'Identity'], 'alt')
        + box(360, 46, 155, 56, ['Defender for', 'Office 365'], 'alt')
        + box(530, 46, 170, 56, ['Defender for', 'Cloud Apps'], 'alt')
        + box(190, 146, 340, 56, ['Microsoft Defender XDR', 'correlates incidents across products'], 'warn')
        + box(230, 246, 260, 54, ['Microsoft Sentinel', 'SIEM + SOAR'], '')
        + arrow(97, 102, 210, 146, {})
        + arrow(267, 102, 300, 146, {})
        + arrow(437, 102, 420, 146, {})
        + arrow(615, 102, 510, 146, {})
        + arrow(360, 202, 360, 246, {})
        + label(545, 174, 'one incident,', 'dg-lbl', 'start')
        + label(545, 190, 'many alerts', 'dg-lbl', 'start')
        + label(70, 232, 'SIEM searches and', 'dg-lbl', 'start')
        + label(70, 248, 'hunts; SOAR', 'dg-lbl', 'start')
        + label(70, 264, 'automates response', 'dg-lbl', 'start')
      )
    },

    'identity-protection': {
      label: 'Risk detection and Conditional Access',
      svg: frame(720, 300,
        label(360, 24, 'Risk signals turn into a policy decision, not an automatic block')
        + box(20, 76, 140, 64, ['User sign-in'], 'muted')
        + box(186, 76, 168, 64, ['Identity Protection', 'detects risky behaviour'], 'alt')
        + box(378, 76, 158, 64, ['Risk evaluation', 'user + sign-in risk'], 'alt')
        + box(560, 76, 140, 64, ['Conditional Access', 'allow, block, challenge'], '')
        + arrow(160, 108, 186, 108, {})
        + arrow(354, 108, 378, 108, {})
        + arrow(536, 108, 560, 108, {})
        + box(20, 176, 330, 62, ['User risk', 'credentials are probably compromised'], 'muted')
        + box(370, 176, 330, 62, ['Sign-in risk', 'this attempt looks anomalous'], 'muted')
        + label(360, 272, 'Policies can require a password change, MFA, or block the session.')
      )
    },

    'information-protection': {
      label: 'How a sensitivity label protects a document',
      svg: frame(720, 290,
        label(360, 24, 'Protection is attached to the content, not to the folder it sits in')
        + box(20, 70, 150, 64, ['Document', 'Word, Excel, PDF'], 'muted')
        + box(192, 70, 158, 64, ['Sensitivity label', 'classifies + marks'], 'alt')
        + box(372, 70, 150, 64, ['Encryption', 'rights are enforced'], 'alt')
        + box(544, 70, 156, 64, ['Access control', 'only named users'], '')
        + arrow(170, 102, 192, 102, {})
        + arrow(350, 102, 372, 102, {})
        + arrow(522, 102, 544, 102, {})
        + box(20, 172, 320, 58, ['Labels persist', 'they travel with the file'], 'muted')
        + box(360, 172, 340, 58, ['Enforced everywhere', 'email, Teams, SharePoint, devices'], 'muted')
        + label(360, 262, 'A label can be applied by the user or chosen automatically by content inspection.')
      )
    },

    'compliance-lifecycle': {
      label: 'Compliance lifecycle for content',
      svg: frame(720, 270,
        label(360, 26, 'Every stage is a Microsoft Purview capability')
        + box(25, 62, 100, 58, ['Create'], 'muted')
        + box(139, 62, 100, 58, ['Classify'], 'alt')
        + box(253, 62, 100, 58, ['Protect'], 'alt')
        + box(367, 62, 100, 58, ['Retain'], 'alt')
        + box(481, 62, 100, 58, ['Review'], 'muted')
        + box(595, 62, 100, 58, ['Dispose'], 'warn')
        + arrow(125, 91, 139, 91, {})
        + arrow(239, 91, 253, 91, {})
        + arrow(353, 91, 367, 91, {})
        + arrow(467, 91, 481, 91, {})
        + arrow(581, 91, 595, 91, {})
        + box(60, 154, 280, 56, ['Retention keeps what you need', 'for as long as you need it'], 'muted')
        + box(380, 154, 280, 56, ['Disposition removes it', 'at the end of the period'], 'muted')
        + label(360, 246, 'Sensitivity labels handle classification; retention handles time.')
      )
    }
  };

  window.EXAM_DIAGRAMS = DIAGRAMS;
  window.DIAGRAMS = DIAGRAMS;
}());
