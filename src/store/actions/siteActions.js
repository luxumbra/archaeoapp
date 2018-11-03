export const createSite = (site) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    // console.log(getFirestore);
    const firestore = getFirestore();
    const user = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    // const user
    firestore.collection('sites').add({
      ...site,
      userFirstName: user.firstName,
      userLastName: user.lastName,
      userId: userId,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SITE', site });
    }).catch((err) => {
      dispatch({ type: 'CREATE_SITE_ERROR', err })
    })
  }
};