// This removes an element by selector
let removeElement = (selector) => {
  let element = document.querySelector(selector)
  element.parentNode.removeChild(element)
}

// This part removes the paywall
const overWallSelector = '[data-testid="dock-gateway"]'
const contentSelector = '#site-content'
let content = document.querySelector(contentSelector)
let container = content.parentNode
let overGradient = container.lastChild

removeElement(overWallSelector) // remove the actual paywall
content.style.overflow = 'auto' // make the content scrollable again
overGradient.parentNode.removeChild(overGradient) // remove the gradient over the content (last child of container)

// This part removes the top & bottom ads
const topAdSelector = '#top-wrapper'
const bottomAdSelector = '#bottom-wrapper'
removeElement(topAdSelector)
removeElement(bottomAdSelector)

// This part removes the content ads
const storyAdSelector = '#story-ad-X-wrapper'
for (let i = 1; i < 100; i++) {
  let selector = storyAdSelector.replace('X', i)
  let element = document.querySelector(selector)
  if (element) {
    element.parentNode.removeChild(element)
  } else {
    break;
  }
}
