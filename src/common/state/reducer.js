const initialState = {
  appState: {
    currentAccount: {},
    currentUser: {}
  }
}


export default function GlobalReducer(state=initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
