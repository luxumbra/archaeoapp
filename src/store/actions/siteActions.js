export const createSite = (site) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log('Creating site...');

    // console.log(getFirestore);
    const firestore = getFirestore();
    const user = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;

    firestore.collection('sites').add({
      ...site,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userId: userId,
      createdAt: new Date()
    }).then((res) => {
      console.log('site.images: ', site.images);

      dispatch({ type: 'CREATE_SITE', site });
      return true;

    }).catch((err) => {
      dispatch({ type: 'CREATE_SITE_ERROR', err });
      return false;
    });
  }
};