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

// Verificar conexión a BD
app.get("/api/pagos/test-db", async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ message: "✅ Conexión a la base de datos exitosa" });
  } catch (error) {
    res.status(500).json({ message: "❌ Error al conectar con la BD", error });
  }
});

// Sincronización BD
sequelize
  .sync()
  .then(() => console.log("✅ Base de datos sincronizada"))
  .catch((err) => console.error("❌ Error al sincronizar BD:", err));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
