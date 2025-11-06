import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.config.js";
import pagoRoutes from "./routes/pago.routes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/pagos", pagoRoutes);

// Sincronización con base de datos
sequelize
  .sync()
  .then(() => console.log("Base de datos sincronizada"))
  .catch((err) => console.error("Error al sincronizar BD:", err));

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor ejecutándose en puerto ${PORT}`));
