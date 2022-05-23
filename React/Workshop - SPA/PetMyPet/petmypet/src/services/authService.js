export const login = (email) => {
    localStorage.setItem('email', email);
};

export const getUser = () => {
    let userEmail = localStorage.getItem('email');

    return userEmail;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};