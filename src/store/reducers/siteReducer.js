const initState = {
  // sites: [
  //   {
  //     id: 1,
  //     siteName: 'Cashtal Yn Ard',
  //     location: 'Isle of Man',
  //     lat: '54.2752812',
  //     lng: '-4.3615482',
  //     description: 'Description text'
  //   },
  //   {
  //     id: 2,
  //     siteName: 'South Barrule',
  //     location: 'Isle of Man',
  //     lat: '54.2752812',
  //     lng: '-4.3615482',
  //     description: 'Description text'
  //   },
  //   {
  //     id: 3,
  //     siteName: 'Cronk Ny Merriu',
  //     location: 'Isle of Man',
  //     lat: '54.1494722',
  //     lng: '-4.6715068',
  //     description: 'Description text'
  //   },
  //   {
  //     id: 4,
  //     siteName: 'Maughold',
  //     location: 'Isle of Man',
  //     lat: '54.3000117',
  //     lng: '-4.3254429',
  //     description: 'Description text'
  //   },
  //   {
  //     id: 5,
  //     siteName: 'Peel Castle',
  //     location: 'Isle of Man',
  //     lat: '54.2260892',
  //     lng: '-4.7005433',
  //     description: 'Description text'
  //   },
  //   {
  //     id: 6,
  //     siteName: 'Killabregga',
  //     location: 'Isle of Man',
  //     lat: '54.2881191',
  //     lng: '-4.5095677',
  //     description: 'Description text'
  //   }
  // ]
}

const siteReducer = (state = initState, action) => {

  switch (action.type) {
    case 'CREATE_SITE':
      console.log('Site created', action.site);
    case 'CREATE_SITE_ERROR':
      console.log('Site was not created!!', action.err);
    default:
      return state
  }
}

export default siteReducer