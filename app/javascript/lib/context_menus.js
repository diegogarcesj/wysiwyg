import tippy, {inlinePositioning, animateFill} from "tippy.js"

function format_selection_menu() {
  return(`
  <div class="p-1 bg-slate-900 rounded" data-controller="format">
    <a class="text-white no-underline" data-action="mousedown->format#bold">
      Bold
    </a>
    <span class="ml-1 mr-1 text-gray-400">|</span>
    <a class="text-white no-underline" data-action="mousedown->format#italic">
      Italic
    </a>
    <span class="ml-1 mr-1 text-gray-400">|</span>
    <a class="text-white no-underline" data-action="mousedown->format#strikethrough">
      Strike
    </a>
    <span class="ml-1 mr-1 text-gray-400">|</span>
    <a class="text-white no-underline" data-action="mousedown->format#code">
      Code
    </a>
  </div>
  `)
}

export function show_format_selection_menu(element) {
  let box = window.getSelection().getRangeAt(0).getBoundingClientRect()
  return tippy(element, {
    allowHTML: true,
    content: format_selection_menu(),
    interactive: true,
    interactiveBorder: 100,
    inlinePositioning: true,
    animateFill: true,
    plugins: [inlinePositioning, animateFill],
    maxWidth: 250,
    getReferenceClientRect: () => box,
    onHidden: (instance) => {instance.destroy()}
  }).show()
}