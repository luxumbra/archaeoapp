
const scrollReveals = [
      {
        selector: '.sr-item',
        options: {
          delay: 400,
          duration: 500,
          easing: 'ease-in-out',
          reset: true,
        },
      },
      {
        selector: '.sr-header',
        options: {
          delay: 400,
          duration: 650,
          easing: 'ease-in-out',
          reset: true,
        },
      },
      {
        selector: '.scale-up-subtle',
        options: {
          scale: 1,
          delay: 400,
          duration: 600,
          easing: 'cubic-bezier(.66,.04,.38,.24)',
          reset: true,
        }
      },
      {
        selector: '.sr-slide-up',
        options: {
          scale: 1,
          origin: 'bottom',
          distance: '100px',
          delay: 400,
          duration: 600,
          easing: 'cubic-bezier(.66,.04,.38,.24)',
          reset: true,
        }
      },
      {
        selector: '.sr-item--sequence',
        options: {
          reset: true,
          delay: 400,
        },
        interval: 100
      }
    ]


export default scrollReveals
