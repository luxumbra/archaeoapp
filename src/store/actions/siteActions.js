export const createSite = (site) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log('Create site: ', site);

    // console.log(getFirestore);
    const firestore = getFirestore();
    const user = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    const images = getState().images;
    console.log(images);

    // const user
    firestore.collection('sites').add({
      ...site,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      console.log('then: create site: ', site);

      return dispatch({ type: 'CREATE_SITE', site });

    }).catch((err) => {
      return dispatch({ type: 'CREATE_SITE_ERROR', err });
    });
  }
};