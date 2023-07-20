import { executeQuery } from './db.js';

export const getAllContactMessages = async () => {
  const query = "SELECT * FROM contactMessages";
  return await executeQuery(query, null);
};

export const insertMessage = async (firstName, lastName, email, subject, message) => {
  const query = `INSERT INTO contactMessages (firstName, lastName, email, subject, message) VALUES (?, ?, ?, ?, ?)`;
  const values = [firstName, lastName, email, subject, message];
  return await executeQuery(query, values);
};
