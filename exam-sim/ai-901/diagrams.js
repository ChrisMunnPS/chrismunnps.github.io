/* AI-901 diagram library - inline SVG, works from file:// */
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
    'ml-lifecycle': {
      label: 'Machine learning lifecycle',
      svg: frame(720, 310,
        label(360, 24, 'The lifecycle is a loop: deploy, then keep monitoring')
        + box(20, 64, 120, 60, ['Data', 'collect + prepare'], 'muted')
        + box(160, 64, 120, 60, ['Train', 'fit the model'], 'alt')
        + box(300, 64, 130, 60, ['Validate', 'tune choices'], 'alt')
        + box(450, 64, 110, 60, ['Test', 'unseen data'], 'alt')
        + box(580, 64, 120, 60, ['Deploy', 'serve predictions'], '')
        + arrow(140, 94, 160, 94, {})
        + arrow(280, 94, 300, 94, {})
        + arrow(430, 94, 450, 94, {})
        + arrow(560, 94, 580, 94, {})
        + box(260, 190, 200, 60, ['Monitor', 'drift, quality, cost'], 'warn')
        + arrow(640, 124, 640, 158, {})
        + arrow(640, 158, 360, 158, { noEnd: true })
        + arrow(360, 158, 360, 190, {})
        + arrow(260, 220, 90, 220, { noEnd: true })
        + arrow(90, 220, 90, 124, {})
        + label(360, 286, 'Retrain when the data or the world changes.')
      )
    },

    'classification-vs-regression': {
      label: 'Classification predicts a class; regression predicts a number',
      svg: frame(720, 300,
        label(360, 24, 'Two supervised tasks, two different outputs')
        + frameBox(20, 50, 330, 190, 'Classification')
        + box(40, 92, 140, 56, ['Email', 'inbox'], 'muted')
        + arrow(180, 120, 210, 120, {})
        + box(210, 92, 120, 56, ['Spam or', 'not spam'], 'alt')
        + label(185, 180, 'Predicts a category', 'dg-lbl', 'middle')
        + label(185, 198, 'Discrete label', 'dg-lbl', 'middle')
        + frameBox(370, 50, 330, 190, 'Regression')
        + box(390, 92, 140, 56, ['House', 'details'], 'muted')
        + arrow(530, 120, 560, 120, {})
        + box(560, 92, 120, 56, ['Price', '240,000'], 'alt')
        + label(535, 180, 'Predicts a number', 'dg-lbl', 'middle')
        + label(535, 198, 'Continuous value', 'dg-lbl', 'middle')
        + label(360, 272, 'If the answer is a class, classify. If it is a quantity, regress.')
      )
    },

    'supervised-unsupervised': {
      label: 'Supervised learning uses labels; unsupervised learning does not',
      svg: frame(720, 310,
        label(360, 24, 'Labels are the dividing line')
        + frameBox(20, 50, 330, 200, 'Supervised')
        + box(40, 88, 120, 54, ['Features', '+ label'], 'alt')
        + arrow(160, 115, 190, 115, {})
        + box(190, 88, 140, 54, ['Model', 'learns mapping'], 'muted')
        + label(185, 170, 'Labeled examples', 'dg-lbl', 'middle')
        + label(185, 188, 'Predicts a known target', 'dg-lbl', 'middle')
        + frameBox(370, 50, 330, 200, 'Unsupervised')
        + box(390, 88, 120, 54, ['Features', 'only'], 'alt')
        + arrow(510, 115, 540, 115, {})
        + box(540, 88, 140, 54, ['Model', 'finds structure'], 'muted')
        + label(535, 170, 'No labels', 'dg-lbl', 'middle')
        + label(535, 188, 'Groups similar records', 'dg-lbl', 'middle')
        + label(360, 282, 'Classification and regression are supervised; clustering is unsupervised.')
      )
    },

    'azure-ai-services': {
      label: 'Azure AI services for prebuilt and generative workloads',
      svg: frame(720, 320,
        label(360, 24, 'Prebuilt task services sit beside generative models')
        + box(20, 60, 150, 64, ['Azure AI Vision', 'images + OCR'], 'alt')
        + box(190, 60, 150, 64, ['Azure AI Language', 'text + NLP'], 'alt')
        + box(360, 60, 150, 64, ['Azure AI Speech', 'speech + audio'], 'alt')
        + box(110, 168, 210, 64, ['Document Intelligence', 'forms + invoices'], 'alt')
        + box(360, 168, 210, 64, ['Azure OpenAI', 'GPT + image models'], 'warn')
        + label(360, 270, 'These are the Foundry Tools; generative models are served through Foundry Models.')
        + label(360, 292, 'A solution can combine several services in one application.')
      )
    },

    'nlp-flow': {
      label: 'Typical NLP processing flow',
      svg: frame(720, 270,
        label(360, 30, 'Language detection usually comes first')
        + box(15, 80, 110, 64, ['Input', 'text'], 'muted')
        + box(145, 80, 120, 64, ['Language', 'detection'], 'alt')
        + box(285, 80, 120, 64, ['Sentiment', 'analysis'], 'alt')
        + box(425, 80, 120, 64, ['Entity', 'recognition'], 'alt')
        + box(565, 80, 120, 64, ['Structured', 'output'], '')
        + arrow(125, 112, 145, 112, {})
        + arrow(265, 112, 285, 112, {})
        + arrow(405, 112, 425, 112, {})
        + arrow(545, 112, 565, 112, {})
        + label(205, 180, 'which language?', 'dg-lbl', 'middle')
        + label(345, 180, 'positive or negative?', 'dg-lbl', 'middle')
        + label(485, 180, 'people, places, dates', 'dg-lbl', 'middle')
        + label(360, 232, 'Specialist NLP returns deterministic, structured results.')
      )
    },

    'detection-vs-classification': {
      label: 'Image classification versus object detection',
      svg: frame(720, 330,
        label(360, 24, 'What is in the image versus what is where')
        + frameBox(20, 50, 330, 210, 'Classification')
        + box(50, 92, 120, 90, ['Image'], 'muted')
        + arrow(170, 137, 200, 137, {})
        + box(200, 109, 130, 56, ['Dog'], 'alt')
        + label(185, 215, 'One label for the whole image', 'dg-lbl', 'middle')
        + frameBox(370, 50, 330, 210, 'Object detection')
        + box(400, 92, 140, 90, ['Image with', 'two objects'], 'muted')
        + arrow(540, 117, 560, 107, {})
        + arrow(540, 157, 560, 167, {})
        + box(560, 88, 110, 38, ['Dog'], 'alt')
        + box(560, 148, 110, 38, ['Cat'], 'alt')
        + label(535, 215, 'A label and a box per object', 'dg-lbl', 'middle')
        + label(360, 292, 'Detection answers what and where; classification answers what.')
      )
    },

    'genai-rag': {
      label: 'Retrieval-augmented generation architecture',
      svg: frame(720, 330,
        label(360, 24, 'Retrieval grounds the answer in your own content')
        + box(20, 70, 140, 60, ['User', 'question'], 'muted')
        + box(190, 70, 140, 60, ['Azure AI', 'Search'], 'alt')
        + box(360, 70, 140, 60, ['Relevant', 'documents'], 'alt')
        + box(530, 70, 160, 60, ['Azure OpenAI', 'language model'], 'warn')
        + arrow(160, 100, 190, 100, {})
        + arrow(330, 100, 360, 100, {})
        + arrow(500, 100, 530, 100, {})
        + box(250, 190, 220, 60, ['Grounded response', 'with citations'], '')
        + arrow(610, 130, 610, 160, {})
        + arrow(610, 160, 470, 160, { noEnd: true })
        + arrow(470, 160, 470, 190, {})
        + label(260, 160, 'retrieve evidence', 'dg-lbl', 'middle')
        + label(360, 286, 'Citations point back to the retrieved documents.')
      )
    },

    'prompt-structure': {
      label: 'System prompt, user prompt, and grounding data',
      svg: frame(720, 310,
        label(360, 24, 'The system prompt sets the rules; the user prompt asks')
        + box(20, 56, 220, 56, ['System prompt', 'role + constraints'], 'alt')
        + box(20, 128, 220, 56, ['User prompt', 'question + task'], 'alt')
        + box(20, 200, 220, 56, ['Grounding data', 'retrieved context'], 'muted')
        + box(330, 108, 140, 90, ['Language', 'model'], 'warn')
        + box(540, 108, 160, 90, ['Grounded', 'response'], '')
        + arrow(240, 84, 330, 128, {})
        + arrow(240, 156, 330, 153, {})
        + arrow(240, 228, 330, 178, {})
        + arrow(470, 153, 540, 153, {})
        + label(360, 286, 'All three parts become tokens in one request.')
      )
    }
  };

  window.EXAM_DIAGRAMS = DIAGRAMS;
  window.DIAGRAMS = DIAGRAMS;
}());
