import sql from "mysql2/promise";

/** 
- This db connect
-  with localhost or production database
*/
export const db = sql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // ssl: {
  //   rejectUnauthorized: true,
  // },
});

try {
  const connection = await db.getConnection();
  console.log("✅ Database Connection Successful");
  connection.release();
} catch (error) {
  console.error("❌ Database Connection Failed");
}
