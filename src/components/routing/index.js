const isAuthenticated = () => {
  if (typeof window === 'undefined') {
    return false;
  }
  if (localStorage.token) {
    return localStorage.token;
  }
  return false;
};

export default isAuthenticated;
