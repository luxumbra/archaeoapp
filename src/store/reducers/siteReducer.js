const initState = {};

const siteReducer = (state = initState, action) => {

    // console.log('Reducer: ', {state, action});

  switch (action.type) {
    case 'CREATE_SITE':
      console.log('Site created', action.site);

      state = {
        site: action.site
      }
      return state;

    case 'CREATE_SITE_ERROR':
      // console.log('Error state', {state, action});
      console.log('Site was not created!!', action.err);
      break;
    default:
      return null;
  }
}

export default siteReducer