let removeElement = (selector) => {
  let element = document.querySelector(selector)
  element.parentNode.removeChild(element)
}

const overWallSelector = '[data-testid="dock-gateway"]'
const contentSelector = '#site-content'
let overWall = document.querySelector(overWallSelector)
let content = document.querySelector(contentSelector)
let container = content.parentNode
let overGradient = container.lastChild

overWall.parentNode.removeChild(overWall) // remove the actual paywall
content.style.overflow = 'auto' // make the content scrollable again
overGradient.parentNode.removeChild(overGradient) // remove the gradient over the content (last child of container)

// This part remove ads
const topAdSelector = '#top-wrapper'
const bottomAdSelector = '#bottom-wrapper'
const storyAd1Selector = '#story-ad-1-wrapper'
const storyAd2Selector = '#story-ad-2-wrapper'
const storyAd3Selector = '#story-ad-3-wrapper'
const storyAd4Selector = '#story-ad-4-wrapper'

removeElement(topAdSelector)
removeElement(bottomAdSelector)
removeElement(storyAd1Selector)
removeElement(storyAd2Selector)
removeElement(storyAd3Selector)
removeElement(storyAd4Selector)