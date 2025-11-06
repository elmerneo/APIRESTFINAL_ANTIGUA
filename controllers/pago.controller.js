import Pago from "../models/pago.model.js";

// Crear pago
export const crearPago = async (req, res) => {
  try {
    const nuevoPago = await Pago.create(req.body);
    res.status(201).json(nuevoPago);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el pago", error });
  }
};

// Actualizar pago
export const actualizarPago = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizado] = await Pago.update(req.body, { where: { id_matricula: id } });

    if (actualizado) {
      const pagoActualizado = await Pago.findByPk(id);
      res.json(pagoActualizado);
    } else {
      res.status(404).json({ message: "Pago no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar", error });
  }
};

// Buscar por carnet
export const buscarPorCarnet = async (req, res) => {
  try {
    const { carnet } = req.params;
    const pagos = await Pago.findAll({ where: { carnet } });
    if (pagos.length > 0) res.json(pagos);
    else res.status(404).json({ message: "No se encontraron pagos para este carnet" });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar", error });
  }
};
