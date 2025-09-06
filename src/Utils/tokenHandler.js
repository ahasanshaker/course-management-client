export const saveToken = (token) => {
  localStorage.setItem("access-token", token);
};

export const getToken = () => {
  return localStorage.getItem("access-token");
};

export const removeToken = () => {
  localStorage.removeItem("access-token");
};
