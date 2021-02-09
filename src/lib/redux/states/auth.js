export const authInitialState = {
    user: JSON.parse(localStorage.getItem('USER')) || null,
    token: JSON.parse(localStorage.getItem('TOKEN')) || null,
    isLoading: false
}
