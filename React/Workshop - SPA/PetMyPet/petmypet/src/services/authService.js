export const login = (email, password) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
};

export const getUser = () => {
    let userEmail = localStorage.getItem('email');

    return userEmail;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};