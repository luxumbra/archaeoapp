import React from 'react'

const Scripts = (props, element) => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutQuad',
    updateURL: true,
    popstate: true,
    speed: 1000
  })
  const reveal = ScrollReveal().reveal({reveal});
  return (
    <script>
      {reveal}
      {scroll}
    </script>
  )
}

export default Scripts
