export function renderScreensSvg (screens, $svg) {
  $svg.querySelectorAll('rect').forEach(el => el.remove())
  
  const minLeft = Math.min(...screens.map(({ left }) => left))
  const minTop = Math.min(...screens.map(({ top }) => top))
  const minAvailLeft = Math.min(...screens.map(({ availLeft }) => availLeft))
  const minAvailTop = Math.min(...screens.map(({ availTop }) => availTop ))
  const totalWidth = screens.reduce((total, screen) => total + screen.availWidth, 0)
  const totalHeight = screens.reduce((total, screen) => total + screen.availHeight, 0)
  $svg.setAttribute('viewBox', `0 0 ${totalWidth} ${totalHeight}`)

  screens.forEach(screen => {
    const { left, top, height, width } = screen
    const svgns = "http://www.w3.org/2000/svg";
    const $rect = document.createElementNS(svgns, "rect")

    $rect.setAttributeNS(null, 'x', left - minLeft)
    $rect.setAttributeNS(null, 'y', top - minTop)
    $rect.setAttributeNS(null, 'height', height)
    $rect.setAttributeNS(null, 'width', width)
    $rect.setAttributeNS(null, 'fill', 'turquoise')

    $svg.appendChild($rect)
  })

  screens.forEach(screen => {
    const { availLeft, availTop, availHeight, availWidth } = screen
    const svgns = "http://www.w3.org/2000/svg";
    const $rect = document.createElementNS(svgns, "rect")

    $rect.setAttributeNS(null, 'x', availLeft - minLeft)
    $rect.setAttributeNS(null, 'y', availTop - minTop)
    $rect.setAttributeNS(null, 'height', availHeight)
    $rect.setAttributeNS(null, 'width', availWidth)
    $rect.setAttributeNS(null, 'fill', 'black')
    $rect.setAttributeNS(null, 'fill-opacity', '0.1')

    $svg.appendChild($rect)
  })
}