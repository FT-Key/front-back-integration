export const getUsers = () =>
  JSON.parse(localStorage.getItem("users")) || [];

export const saveUsers = (users) =>
  localStorage.setItem("users", JSON.stringify(users));

export const registerUser = (userData) => {
  const users = getUsers();
  
  // Verificar si el email ya existe
  if (users.find(u => u.email === userData.email)) {
    throw new Error("El email ya está registrado");
  }

  const newUser = {
    ...userData,
    id: Date.now().toString(),
    role: "user",
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const loginUser = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    throw new Error("Credenciales inválidas");
  }

  return user;
};

export const getLoggedUser = () =>
  JSON.parse(localStorage.getItem("loggedUser")) || null;

export const setLoggedUser = (user) =>
  localStorage.setItem("loggedUser", JSON.stringify(user));

export const logout = () =>
  localStorage.removeItem("loggedUser");