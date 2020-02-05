const dom = {}
// make html element
// takes type ('div') content ('string', or <htmlElement>),
// and css classes (separeted by space, or comma)
dom.makeElement = function (type,content,cssClasses) {
  // create the html element
  const el = document.createElement(type)

  // check if content is an HTML element or text string
  // and add it accordningly
  if (this.checkHTML(content)) {
    el.appendChild(content)
  }
  else {
    el.innerText = content
  }
  // make css array within function scope
  let cssArray
  // split string into separate classes
  if (cssClasses.includes(' ')) {
    cssArray = cssClasses.split(' ')
  }
  else if (cssClasses.includes(',')) {
    cssArray = cssClasses.split(',')
  }

  // loop through array and add the css classes
  for (css of cssArray) {
    el.classList.add(css)
  }

  // return the complete element
  return el
}

// checks to se if a passed element has HTMLElement constructor
dom.checkHTML = function (element) {
  if (element.__proto__.constructor.__proto__ == HTMLElement) {
    return true
  }
  else {
    return false
  }
}

dom.toggle = function (selector) {
  const el = document.querySelector(selector)
  el.classList.toggle('hide')
}
dom.show = function (selector) {
  const el = document.querySelector(selector)
  el.classList.remove('hide')
}
dom.hide = function (selector) {
  const el = document.querySelector(selector)
  el.classList.add('hide')
}
