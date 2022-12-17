import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="editable"
export default class extends Controller {
  connect() {
  }

  click(event) {
    this.element.setAttribute("contenteditable", "true")
    this.element.focus()
  }

  blur(event) {
    this.element.removeAttribute("contenteditable")
    this.save()
  }

  keydown(event) {
    if (event.keyCode == 13) {
      event.preventDefault()
      this.element.removeAttribute("contenteditable")
    }
  }

  save() {
    // TODO
  }
}
