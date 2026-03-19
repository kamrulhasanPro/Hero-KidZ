"use server";

import { db } from "@/lib/db";

/**
- ALL PRODUCT GET
- products.action.js
*/
export const getProducts = async () => {
  try {
    const sql = `SELECT * FROM products`;

    const [products] = await db.query(sql);

    if (products.length === 0) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return products;
  } catch (error) {
    // throw new Error("Get Products Problem");
    console.error("Get Products Error:", error);
    return [];
  }
};

/**
- GET PRODUCT BY ID
- products.action.js
*/
export const getProductById = async (id) => {
  try {
    // product
    const [product] = await db.query(
      `SELECT * FROM products 
    WHERE id = ?
    `,
      id,
    );

    // qna
    const [qna] = await db.query(
      `SELECT * FROM product_qna 
    WHERE product_id = ?
    `,
      id,
    );

    // info
    const [info] = await db.query(
      `SELECT * FROM product_info 
    WHERE product_id = ?
    `,
      id,
    );

    return { product: product[0], qna, info };
  } catch (error) {
    throw new Error("Get Product by id Problem");
  }
};

/**
- INSERT PRODUCT
- products.action.js
*/
export const insertProducts = async (product) => {
  try {
    const sql = `INSERT INTO products(title, bangla, image, price, discount, description, reviews, sold, ratings) 
    VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const productValues = Object.values(product);

    const [rows] = await db.query(sql, productValues);
    console.log({ rows });
    return rows;
  } catch (error) {
    throw new Error("Insert Products Problem");
  }
};
