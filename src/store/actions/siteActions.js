export const createSite = (site) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();
    firestore.collection('sites').add({
      ...site,
      userFirstName: 'Test',
      userLastName: 'Person',
      userId: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_SITE', site });
    }).catch((err) => {
      dispatch({ type: 'CREATE_SITE_ERROR', err })
    })
  }
};