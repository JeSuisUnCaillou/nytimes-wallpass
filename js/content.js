const overWallSelector = '[data-testid="dock-gateway"]'
const contentSelector = '#site-content'
let overWall = document.querySelector(overWallSelector);
let content = document.querySelector(contentSelector)
let container = content.parentNode
let overGradient = container.lastChild

overWall.parentNode.removeChild(overWall) // remove the actual paywall
content.style.overflow = 'auto' // make the content scrollable again
overGradient.parentNode.removeChild(overGradient) // remove the gradient over the content (last child of container)