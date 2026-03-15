import { v4 as uuidv4 } from 'uuid';
import AppError from '../utils/AppError.js';
const users = [];
const getAll = async () => users;
const getById = async (id) => {
  const user = users.find(u => u.id === id);
  if (!user) throw new AppError('Not found', 404, 'NOT_FOUND');
  return user;
};
const getByUsername = async (username) => {
  const user = users.find(u => u.username === username);
  if (!user) throw new AppError('Not found', 404, 'NOT_FOUND');
  return user;
};
const create = async (body) => {
  const user = { id: uuidv4(), ...body, createdAt: new Date().toISOString() };
  users.push(user);
  return user;
};
const authenticate = async (username, password) => {
  const user = await getByUsername(username);
  if (user.password !== password) throw new AppError('Invalid credentials', 401, 'INVALID_CREDENTIALS');
  return user;
};
export default { getAll, getById, getByUsername, create, authenticate };