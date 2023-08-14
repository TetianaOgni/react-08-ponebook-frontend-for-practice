export const selectContacts = state => state.contacts
export const selectFilter = state => state.filter 

export const selectLoading = state => state.auth.isLoading
export const selectError = state => state.auth.error
export const selectToken = state => state.auth.token
export const selectUserData = state => state.auth.userData
export const selectAuthenticated = state => state.auth.authenticated