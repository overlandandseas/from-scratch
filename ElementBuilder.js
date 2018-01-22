export default class ElementBuilder {

  constructor(tagname) {
    this.elm = document.createElement(tagname)
  }


  addClass(...classes) {
    this.elm.classList.add(...classes)
    return this
  }

  append(elementToAppend) {
    if (elementToAppend instanceof ElementBuilder) {
      return this.append(elementToAppend.elm)
    } else {
      this.elm.appendChild(elementToAppend)
      return this
    }
  }

  attr(key, value) {
    this.elm.setAttribute(key, value)
    return this
  }

  click(handler) {
    this.elm.addEventListener('click', handler)
  }

  html(htmlToAdd) {
    this.elm.innerHTML = htmlToAdd
    return this
  }

  removeClass(...classes) {
    this.elm.classList.remove(...classes)
    return this
  }

  toElement(){
    return this.elm
  }

  with(composer) {
    composer(this.elm)
    return this
  }



}
