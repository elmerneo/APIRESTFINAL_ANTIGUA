import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "neondb",
  process.env.DB_USER || "neondb_owner",
  process.env.DB_PASSWORD || "npg_3tdQAh5lmIBx",
  {
    host: process.env.DB_HOST || "ep-odd-star-afhpqyow-pooler.c-2.us-west-2.aws.neon.tech",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    pool: {
      max: parseInt(process.env.DB_POOL_MAX) || 5,
      min: parseInt(process.env.DB_POOL_MIN) || 0,
      acquire: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
      idle: parseInt(process.env.DB_POOL_IDLE) || 10000,
    },
    logging: false,
  }
);

export default sequelize;
