"use server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";

/**
- CREATE USER
- auth.action.js
*/
export const createNewUser = async (user) => {
  const { name, email, password } = user;

  try {
    // check validation
    if (!user) return null;

    // check user in db
    const checkSQL = `SELECT * FROM users WHERE email = ?`;
    const [checkUser] = await db.query(checkSQL, email);

    if (checkUser.length !== 0) {
      return {
        message: "Already user created a account with this email",
        success: false,
      };
    }

    // password hashing
    const password_hash = await bcrypt.hash(password, 14);

    // new user
    const newUser = [name, email, password_hash, "credentials"];

    // insert user
    const insertSQL = `INSERT INTO users(name, email, password_hash, provider) VALUES(?, ?, ?, ?)`;
    const [rows] = await db.query(insertSQL, newUser);

    if (rows.insertId) {
      return { success: true };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Not get fetch" };
  }
};

/**
- CREATE USER FOR GOOGLE
- auth.action.js
*/
export const createNewUserForGoogle = async (user) => {
  const { name, email, provider } = user;

  try {
    // check validation
    if (!user) return null;

    // check user in db
    const checkSQL = `SELECT * FROM users WHERE email = ? AND provider = ?`;
    const [checkUser] = await db.query(checkSQL, [email, provider]);

    if (checkUser.length !== 0) {
      return {
        message: "Already user created a account with this email",
        success: true,
      };
    }

    // new user
    const newUser = [name, email, provider];

    // insert user
    const insertSQL = `INSERT INTO users(name, email, provider) VALUES(?, ?, ?)`;
    const [rows] = await db.query(insertSQL, newUser);

    if (rows.insertId) {
      return { success: true };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: "Not get fetch" };
  }
};

/**
- LOGIN USER
- auth.action.js
*/
export const getUserByEmail = async (email) => {
  try {
    if (!email) {
      return null;
    }

    const sql = `SELECT * FROM users WHERE email = ?`;

    const [user] = await db.query(sql, email);

    if (user.length === 0) {
      return null;
    }
    console.log(user);
    return user[0];
  } catch (error) {
    // throw new Error("Get Products Problem");
    console.error("Get User By Email Error:", error);
    return null;
  }
};
