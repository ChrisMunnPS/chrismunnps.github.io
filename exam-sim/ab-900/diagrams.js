/* AB-900 diagram library - inline SVG, works from file:// */
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
    return '<svg class="dg" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">'
      + '<defs><marker id="dg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
      + '<path d="M0 0 L10 5 L0 10 Z" fill="#64748b"/></marker></defs>'
      + body + '</svg>';
  }

  var DIAGRAMS = {
    'm365-ecosystem': {
      label: 'Microsoft 365 services share one tenant, identity, and compliance boundary',
      svg: frame(720, 300,
        frameBox(12, 12, 696, 282, 'One tenant - shared identity and compliance')
        + box(24, 48, 152, 56, ['Exchange Online', 'mail, calendar'], 'alt')
        + box(194, 48, 152, 56, ['SharePoint', 'sites and content'], 'alt')
        + box(364, 48, 152, 56, ['Teams', 'chat and meetings'], 'alt')
        + box(534, 48, 152, 56, ['OneDrive', 'personal files'], 'alt')
        + box(24, 122, 152, 56, ['Entra ID', 'identity and access'], 'muted')
        + box(194, 122, 152, 56, ['M365 admin center', 'users and licences'], 'muted')
        + box(364, 122, 152, 56, ['Defender', 'threat protection'], 'muted')
        + box(534, 122, 152, 56, ['Purview', 'data governance'], 'muted')
        + label(84, 204, 'Why one tenant matters', 'dg-lbl-top')
        + box(24, 216, 662, 56, ['Users, groups, licences, and policies are defined once in the tenant',
          'Every service applies the same identity and the same compliance boundary'], '')
        + label(360, 288, 'Remove a licence or block sign-in and access changes across every workload')
      )
    },

    'zero-trust': {
      label: 'Zero Trust: three principles applied across six pillars',
      svg: frame(720, 320,
        box(16, 54, 180, 78, ['Traditional perimeter', 'trust inside the network'], 'muted')
        + box(16, 158, 180, 78, ['Zero Trust', 'verify every request'], 'alt')
        + label(106, 260, 'Strategy, not a product', 'dg-lbl-top')
        + label(106, 278, 'No network is implicitly trusted')
        + box(230, 44, 148, 76, ['Verify explicitly', 'use every signal'], 'alt')
        + box(394, 44, 148, 76, ['Least privilege', 'just enough, just in time'], 'alt')
        + box(558, 44, 148, 76, ['Assume breach', 'contain the blast radius'], 'alt')
        + label(230, 148, 'Applied to the six pillars', 'dg-lbl-top', 'start')
        + box(230, 158, 148, 52, ['Identity', 'users and sign-in'], '')
        + box(394, 158, 148, 52, ['Endpoints', 'devices and health'], '')
        + box(558, 158, 148, 52, ['Data', 'labels and retention'], '')
        + box(230, 224, 148, 52, ['Applications', 'access and sessions'], '')
        + box(394, 224, 148, 52, ['Infrastructure', 'services and config'], '')
        + box(558, 224, 148, 52, ['Network', 'segmentation'], '')
        + label(360, 304, 'MFA and Conditional Access are controls, not the strategy itself')
      )
    },

    'conditional-access': {
      label: 'Conditional Access evaluates signals, then grants, challenges, or blocks',
      svg: frame(740, 320,
        label(18, 30, 'Signals', 'dg-lbl-top', 'start')
        + box(18, 40, 150, 38, 'User or group', 'muted')
        + box(18, 84, 150, 38, 'Device state', 'muted')
        + box(18, 128, 150, 38, 'Location', 'muted')
        + box(18, 172, 150, 38, 'Application', 'muted')
        + box(18, 216, 150, 38, 'Sign-in risk', 'muted')
        + arrow(172, 140, 232, 140)
        + box(236, 84, 188, 112, ['Conditional Access', 'if these signals match,', 'then apply this control'], 'alt')
        + arrow(428, 140, 486, 140)
        + box(490, 64, 130, 70, ['Grant controls', 'MFA, compliant device'], '')
        + box(490, 148, 130, 70, ['Session controls', 'read-only, no download'], '')
        + arrow(624, 140, 668, 140)
        + box(672, 96, 56, 88, ['Microsoft', '365', 'resource'], 'muted')
        + label(360, 262, 'Report-only mode evaluates a policy without enforcing it', 'dg-lbl-top')
        + label(360, 282, 'Policies should exclude at least one break-glass admin account')
      )
    },

    'data-governance': {
      label: 'Microsoft Purview lifecycle: discover, classify, protect, prevent loss, retain',
      svg: frame(740, 300,
        frameBox(10, 12, 720, 276, 'Microsoft Purview')
        + box(22, 62, 120, 62, ['1 Discover', 'where is data?'], 'alt')
        + box(166, 62, 120, 62, ['2 Classify', 'SITs, EDM'], 'alt')
        + box(310, 62, 120, 62, ['3 Label', 'encrypt, mark'], 'alt')
        + box(454, 62, 120, 62, ['4 Prevent loss', 'DLP policies'], 'alt')
        + box(598, 62, 120, 62, ['5 Retain', 'keep or dispose'], 'alt')
        + arrow(144, 93, 164, 93)
        + arrow(288, 93, 308, 93)
        + arrow(432, 93, 452, 93)
        + arrow(576, 93, 596, 93)
        + label(82, 144, 'Sensitive information types', 'dg-lbl', 'start')
        + label(226, 144, 'Trainable classifiers, exact match', 'dg-lbl', 'start')
        + label(370, 144, 'Encryption travels with the file', 'dg-lbl', 'start')
        + label(514, 144, 'Policy tips and alerts', 'dg-lbl', 'start')
        + label(658, 144, 'Retention labels and policies', 'dg-lbl', 'start')
        + box(22, 170, 696, 56, ['Copilot and agents only surface content the signed-in user can already access',
          'Labels, DLP, and sharing limits therefore decide what Copilot can say'], 'muted')
        + label(360, 258, 'Oversharing is a permissions problem before it is an AI problem')
      )
    },

    'copilot-architecture': {
      label: 'Microsoft 365 Copilot: prompt, grounding, orchestration, model, response',
      svg: frame(760, 330,
        box(16, 96, 150, 66, ['User prompt', 'Word, Outlook, Teams'], 'alt')
        + arrow(168, 114, 206, 78)
        + arrow(168, 142, 206, 178)
        + box(210, 44, 190, 62, ['Microsoft Graph', 'mail, files, chats, meetings'], '')
        + box(210, 150, 190, 62, ['Work IQ', 'work context and patterns'], '')
        + arrow(402, 75, 446, 110)
        + arrow(402, 181, 446, 146)
        + box(448, 96, 150, 66, ['Orchestration', 'ground, filter, format'], 'alt')
        + arrow(600, 116, 636, 116)
        + box(638, 86, 106, 60, ['LLM', 'generates'], 'alt')
        + arrow(690, 148, 690, 214)
        + box(600, 216, 150, 54, ['Response', 'in the app'], '')
        + label(360, 268, 'Permission trimming: only data the user can already access is used', 'dg-lbl-top')
        + label(360, 288, 'Tenant data is not used to train the public model')
        + label(360, 308, 'Connectors extend grounding to line-of-business systems')
      )
    },

    'agent-lifecycle': {
      label: 'Agent lifecycle: create, test, approve, deploy, monitor, retire',
      svg: frame(740, 300,
        box(10, 78, 110, 66, ['Create', 'instructions, sources'], 'alt')
        + box(130, 78, 110, 66, ['Test', 'draft and edge cases'], 'alt')
        + box(250, 78, 110, 66, ['Approve', 'review request'], 'warn')
        + box(370, 78, 110, 66, ['Deploy', 'publish to users'], 'alt')
        + box(490, 78, 110, 66, ['Monitor', 'usage, errors, cost'], 'alt')
        + box(610, 78, 110, 66, ['Retire', 'block or remove'], 'muted')
        + arrow(120, 111, 128, 111)
        + arrow(240, 111, 248, 111)
        + arrow(360, 111, 368, 111)
        + arrow(480, 111, 488, 111)
        + arrow(600, 111, 608, 111)
        + label(360, 176, 'Approval decides yes, no, or send back for changes', 'dg-lbl-top')
        + box(130, 190, 480, 56, ['Blocking stops every user in the tenant from using the agent',
          'Removal takes it out of the inventory; it can be acquired again from the store'], 'muted')
        + label(360, 272, 'Treat an agent like software: version it, review updates, keep a way back')
      )
    },

    'copilot-vs-agent': {
      label: 'Copilot assists a person; an agent runs a process',
      svg: frame(740, 310,
        frameBox(14, 24, 340, 226, 'Microsoft 365 Copilot')
        + label(34, 64, 'Interactive and in the app', '', 'start')
        + label(34, 90, 'Uses the signed-in user permissions', '', 'start')
        + label(34, 116, 'Drafts, summarises, analyses', '', 'start')
        + label(34, 142, 'The person decides and acts', '', 'start')
        + box(34, 166, 300, 62, ['Best for short, user-driven work', 'where judgement stays with the person'], 'alt')
        + label(370, 140, 'vs', 'dg-lbl-top')
        + frameBox(384, 24, 340, 226, 'Agent')
        + label(404, 64, 'Runs on a schedule or event', '', 'start')
        + label(404, 90, 'Uses its own identity and scopes', '', 'start')
        + label(404, 116, 'Performs multi-step tasks and actions', '', 'start')
        + label(404, 142, 'Needs approval, testing, monitoring', '', 'start')
        + box(404, 166, 300, 62, ['Best for repeatable processes', 'that can run without a person'], 'warn')
        + label(370, 282, 'Choose Copilot for assistance; choose an agent for automation')
      )
    },

    'responsible-ai': {
      label: 'Responsible AI principles applied to Microsoft 365 Copilot',
      svg: frame(740, 310,
        box(280, 116, 180, 66, ['Responsible AI', 'govern the whole system'], 'alt')
        + box(40, 40, 180, 58, ['Fairness', 'equitable outcomes'], '')
        + box(280, 26, 180, 58, ['Inclusiveness', 'usable by everyone'], '')
        + box(520, 40, 180, 58, ['Transparency', 'explain what AI did'], '')
        + box(40, 204, 180, 58, ['Privacy', 'protect personal data'], '')
        + box(280, 226, 180, 58, ['Reliability and safety', 'predictable, safe failure'], '')
        + box(520, 204, 180, 58, ['Accountability', 'a person owns the outcome'], '')
        + arrow(130, 100, 290, 118, { dashed: true, noEnd: true })
        + arrow(370, 86, 370, 114, { dashed: true, noEnd: true })
        + arrow(610, 100, 450, 118, { dashed: true, noEnd: true })
        + arrow(130, 202, 290, 180, { dashed: true, noEnd: true })
        + arrow(370, 224, 370, 184, { dashed: true, noEnd: true })
        + arrow(610, 202, 450, 180, { dashed: true, noEnd: true })
        + label(370, 304, 'Principles become controls: labels, DLP, approval, monitoring, human review')
      )
    }
  };

  window.EXAM_DIAGRAMS = DIAGRAMS;
  window.DIAGRAMS = DIAGRAMS;
}());
