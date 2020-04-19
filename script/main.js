const button = document.getElementById('add_section')

// We start with two sections on the screen
// When we add another, it will be the third
let inputSectionsCount = 3

button.addEventListener('click', () => {
  // const form = document.getElementById('form')
  // const button = document.getElementById('button')
  const container = document.getElementById('container')

  const selectP = document.createTextNode('Content - Type')
  const select = document.getElementById('select').cloneNode(true)
  select.name = `content[${inputSectionsCount}][type]`

  const headInputP = document.createTextNode('Content - Head')
  const headInput = document.createElement('input')
  headInput.name = `content[${inputSectionsCount}][head]`

  const bodyInputP = document.createTextNode('Content - Body')
  const bodyInput = document.createElement('textarea')
  bodyInput.name = `content[${inputSectionsCount}][body]`

  container.appendChild(selectP)
  container.appendChild(select)
  container.appendChild(headInputP)
  container.appendChild(headInput)
  container.appendChild(bodyInputP)
  container.appendChild(bodyInput)

  inputSectionsCount += 1
  // console.log(select)
})
