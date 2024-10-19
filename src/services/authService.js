// src/services/authService.js

const users = []; // Mock database

export const register = (username, password) => {
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const newUser = { username, password }; // In a real app, hash the password
  users.push(newUser);
  return newUser;
};

export const login = (username, password) => {
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    throw new Error('Invalid credentials');
  }
  // Return a mock token (in a real app, generate a JWT token)
  return { token: 'mockToken', user };
};
