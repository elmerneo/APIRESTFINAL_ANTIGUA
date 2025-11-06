import express from "express";
import { crearPago, actualizarPago, buscarPorCarnet } from "../controllers/pago.controller.js";

const router = express.Router();

router.post("/", crearPago);               // Crear pago
router.put("/:id", actualizarPago);        // Actualizar pago
router.get("/carnet/:carnet", buscarPorCarnet); // Buscar pagos por carnet

export default router;
