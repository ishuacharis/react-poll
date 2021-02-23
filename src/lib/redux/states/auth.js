export const authInitialState = {
    user: JSON.parse(localStorage.getItem('REACT_USER')) || null,
    token: JSON.parse(localStorage.getItem('REACT_TOKEN')) || null,
    isLoading: false
}
