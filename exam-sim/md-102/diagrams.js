/* MD-102 architecture diagram library - inline SVG, works from file:// */
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
    'autopilot-flow': {
      label: 'Windows Autopilot deployment flow from hardware hash to user desktop',
      svg: frame(760, 360,
        label(380, 24, 'Autopilot turns a bare OEM device into a managed, Entra-joined endpoint')
        + box(20, 52, 168, 62, ['New device', 'OEM or reseller'], 'alt')
        + box(216, 52, 168, 62, ['Hardware hash', 'captured or uploaded'], 'alt')
        + box(412, 52, 156, 62, ['Autopilot device', 'record in Intune'], 'warn')
        + box(596, 52, 144, 62, ['Deployment', 'profile assigned'], 'warn')
        + box(216, 176, 168, 62, ['OOBE starts', 'Entra join by profile'], '')
        + box(412, 176, 156, 62, ['Enrollment Status', 'Page: device, apps'], '')
        + box(596, 176, 144, 62, ['Desktop ready', 'user signs in'], 'alt')
        + box(216, 288, 352, 52, ['Intune enrolment is automatic once the Entra join completes'], '')
        + arrow(188, 83, 216, 83)
        + arrow(384, 83, 412, 83)
        + arrow(568, 83, 596, 83)
        + arrow(668, 114, 668, 176)
        + arrow(596, 207, 568, 207)
        + arrow(412, 207, 384, 207)
        + arrow(300, 238, 300, 288)
        + arrow(412, 238, 412, 288)
        + label(380, 352, 'Pre-provisioning (white glove) splits device and user phases; the profile decides join type.')
      )
    },

    'conditional-access-flow': {
      label: 'Conditional Access evaluation for a device sign-in',
      svg: frame(760, 360,
        label(380, 24, 'Every sign-in is evaluated against assignments, conditions, and grant controls')
        + box(20, 60, 150, 62, ['User or device', 'sign-in attempt'], 'alt')
        + box(196, 60, 150, 62, ['Cloud app', 'Exchange, SharePoint'], 'alt')
        + box(372, 44, 196, 96, ['Conditional Access', 'policy evaluation', 'per policy, per app'], 'warn')
        + box(596, 44, 144, 44, ['Conditions', 'platform, location'], 'alt')
        + box(596, 100, 144, 44, ['Assignments', 'users, groups, apps'], 'alt')
        + box(196, 200, 150, 62, ['Grant controls', 'MFA, compliant device'], '')
        + box(372, 200, 196, 62, ['Session controls', 'app enforced, sign-in freq'], '')
        + box(596, 200, 144, 62, ['Allow, block,', 'or require action'], '')
        + box(196, 296, 372, 44, ['Report-only mode evaluates and logs without enforcing'], '')
        + arrow(170, 91, 196, 91)
        + arrow(346, 91, 372, 91)
        + arrow(568, 76, 596, 66)
        + arrow(568, 110, 596, 120)
        + arrow(470, 140, 470, 200, { dashed: true })
        + arrow(346, 231, 372, 231)
        + arrow(568, 231, 596, 231)
        + arrow(300, 262, 300, 296, { dashed: true })
        + label(380, 356, 'A noncompliant device fails a "require compliant device" grant even when MFA succeeds.')
      )
    },

    'policy-processing': {
      label: 'How an Intune configuration profile reaches a device and reports status',
      svg: frame(760, 340,
        label(380, 24, 'Policy travels from assignment to the device CSP, then status flows back')
        + box(20, 52, 150, 74, ['Configuration', 'profile', 'in Intune'], 'warn')
        + box(194, 52, 150, 74, ['Assignment', 'include, exclude,', 'filter'], 'alt')
        + box(368, 52, 150, 74, ['Device check-in', 'MDM channel', 'push or poll'], '')
        + box(542, 52, 198, 74, ['Windows CSP', 'PolicyManager', 'registry keys'], '')
        + box(542, 190, 198, 74, ['Effective policy', 'last writer wins', 'per setting'], 'warn')
        + box(368, 190, 150, 74, ['Status report', 'success, error,', 'conflict'], 'alt')
        + box(194, 190, 150, 74, ['Per-setting', 'troubleshooting', 'and logs'], '')
        + arrow(170, 89, 194, 89)
        + arrow(344, 89, 368, 89)
        + arrow(518, 89, 542, 89)
        + arrow(641, 126, 641, 190)
        + arrow(542, 227, 518, 227)
        + arrow(368, 227, 344, 227)
        + label(380, 306, 'Conflicts appear when two profiles set the same value; Intune reports the winner, not an error.')
        + label(380, 326, 'Devices re-evaluate about every 8 hours, or immediately on a manual sync.')
      )
    },

    'device-lifecycle': {
      label: 'Endpoint lifecycle from provisioning to retirement',
      svg: frame(760, 320,
        label(380, 24, 'Each lifecycle stage maps to a different Intune workload')
        + box(20, 66, 132, 76, ['1. Provision', 'Autopilot,', 'enrolment'], 'alt')
        + box(172, 66, 132, 76, ['2. Configure', 'profiles,', 'baselines'], '')
        + box(324, 66, 132, 76, ['3. Protect', 'compliance,', 'Defender'], 'warn')
        + box(476, 66, 132, 76, ['4. Maintain', 'updates, apps,', 'remediation'], '')
        + box(628, 66, 112, 76, ['5. Retire', 'wipe, reset,', 'delete'], 'alt')
        + box(172, 206, 284, 66, ['Assignment and reporting run through every stage'], '')
        + box(476, 206, 264, 66, ['Retire keeps user data; wipe returns the device to factory state'], '')
        + arrow(152, 104, 172, 104)
        + arrow(304, 104, 324, 104)
        + arrow(456, 104, 476, 104)
        + arrow(608, 104, 628, 104)
        + arrow(314, 142, 314, 206, { dashed: true })
        + arrow(608, 142, 608, 206, { dashed: true })
        + label(380, 302, 'Deleting the record is not a remote action: it removes management data, not corporate payload.')
      )
    },

    'byod-architecture': {
      label: 'BYOD paths: app protection without enrolment versus full device enrolment',
      svg: frame(760, 350,
        label(380, 24, 'Two supported BYOD models, chosen per user group')
        + box(24, 60, 150, 66, ['Personal device', 'iOS or Android'], 'alt')
        + box(224, 46, 190, 94, ['MAM without', 'enrolment (MAM-WE)', 'app protection only'], 'warn')
        + box(224, 190, 190, 94, ['Device enrolment', 'MDM: compliance,', 'configuration, wipe'], '')
        + box(464, 46, 160, 94, ['Protected apps', 'Outlook, Teams,', 'Edge, OneDrive'], '')
        + box(464, 190, 160, 94, ['Managed device', 'compliance signal', 'to Entra ID'], '')
        + box(650, 118, 96, 94, ['Conditional', 'Access gate'], 'warn')
        + arrow(174, 86, 224, 86)
        + arrow(174, 116, 224, 220)
        + arrow(414, 93, 464, 93)
        + arrow(414, 237, 464, 237)
        + arrow(624, 93, 650, 140)
        + arrow(624, 237, 650, 190)
        + box(224, 306, 512, 34, ['Enrolment gives full device control; MAM protects only the app data boundary'], '')
      )
    },

    'update-ring': {
      label: 'Windows Update for Business rings with deferrals and deadlines',
      svg: frame(760, 340,
        label(380, 24, 'Deployment rings stage quality and feature updates across the estate')
        + box(20, 60, 160, 70, ['Microsoft release', 'quality or feature', 'update'], 'alt')
        + box(206, 60, 160, 70, ['Ring 0 test', 'IT pilot devices', '0-day deferral'], 'warn')
        + box(392, 60, 160, 70, ['Ring 1 early', '5-day deferral', '2-day deadline'], '')
        + box(578, 60, 162, 70, ['Ring 2 broad', '9-day deferral', '7-day deadline'], '')
        + box(206, 186, 160, 70, ['Active hours', 'no restart during', 'work hours'], 'alt')
        + box(392, 186, 160, 70, ['Grace period', 'user can postpone', 'until deadline'], 'alt')
        + box(578, 186, 162, 70, ['Feature update', 'policy pins or', 'targets version'], '')
        + box(206, 282, 534, 34, ['Windows Autopatch automates ring membership, rollout, and rollback checks'], '')
        + arrow(180, 95, 206, 95)
        + arrow(366, 95, 392, 95)
        + arrow(552, 95, 578, 95)
        + arrow(286, 130, 286, 186, { dashed: true })
        + arrow(472, 130, 472, 186, { dashed: true })
        + label(380, 336, 'Deadline forces the restart; deferral only delays the install, not the compliance date.')
      )
    },

    'remote-actions': {
      label: 'Intune remote actions and what each one preserves',
      svg: frame(760, 380,
        label(380, 24, 'Pick the least destructive action that solves the problem')
        + box(20, 52, 168, 58, ['Sync', 'pull policy now'], 'alt')
        + box(206, 52, 168, 58, ['Restart', 'forced reboot'], 'alt')
        + box(392, 52, 168, 58, ['Collect diagnostics', 'logs to support'], 'alt')
        + box(578, 52, 162, 58, ['Remote lock', 'lock screen'], 'alt')
        + box(20, 140, 168, 58, ['Retire', 'corporate data removed'], 'warn')
        + box(206, 140, 168, 58, ['Wipe', 'factory reset'], 'warn')
        + box(392, 140, 168, 58, ['Fresh Start', 'clean Windows, keep data'], '')
        + box(578, 140, 162, 58, ['Autopilot reset', 'back to OOBE, keep Entra'], '')
        + box(20, 228, 168, 58, ['Delete record', 'management data only'], '')
        + box(206, 228, 168, 58, ['Reset passcode', 'new local PIN'], '')
        + box(392, 228, 168, 58, ['Rotate BitLocker key', 'new recovery key'], '')
        + box(578, 228, 162, 58, ['Quick scan', 'Defender antivirus'], '')
        + box(20, 318, 720, 40, ['Wipe and Fresh Start both need the device to check in; offline devices act on next contact'], '')
      )
    },

    'compliance-evaluation': {
      label: 'Compliance policy evaluation and Conditional Access enforcement',
      svg: frame(760, 350,
        label(380, 24, 'Compliance is a signal: Intune evaluates, Entra ID enforces')
        + box(20, 54, 156, 74, ['Compliance policy', 'OS version, encryption,', 'Defender, firewall'], 'warn')
        + box(202, 54, 156, 74, ['Device check-in', 'evaluates settings', 'on schedule'], 'alt')
        + box(384, 54, 156, 74, ['Result', 'compliant or', 'not compliant'], '')
        + box(566, 54, 174, 74, ['Grace period', 'hours before the', 'device is marked'], 'alt')
        + box(202, 176, 156, 74, ['Entra ID', 'device state', 'attribute'], '')
        + box(384, 176, 156, 74, ['Conditional Access', 'require compliant', 'device'], 'warn')
        + box(566, 176, 174, 74, ['Access granted', 'or blocked with', 'remediation steps'], '')
        + box(202, 288, 538, 40, ['Noncompliance actions: notify user, mark noncompliant, retire, or block'], '')
        + arrow(176, 91, 202, 91)
        + arrow(358, 91, 384, 91)
        + arrow(540, 91, 566, 91)
        + arrow(280, 128, 280, 176)
        + arrow(358, 213, 384, 213)
        + arrow(540, 213, 566, 213)
        + arrow(460, 250, 460, 288, { dashed: true })
        + label(380, 346, 'A device that stops checking in keeps its last state until the policy re-evaluates.')
      )
    }
  };

  window.DIAGRAMS = DIAGRAMS;
  window.EXAM_DIAGRAMS = DIAGRAMS;
})();
