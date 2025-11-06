import Pago from "../models/pago.model.js";

// Crear nuevo pago
export const crearPago = async (req, res) => {
  try {
    const data = {
      carnet: req.body.carnet || req.body.Carnet,
      nombre_estudiante: req.body.nombre_estudiante || req.body.NombreEstudiante,
      mes: req.body.mes || req.body.Mes,
      semestre: req.body.semestre || req.body.Semestre,
      anio: req.body.anio || req.body.Anio,
      fecha_pago: req.body.fecha_pago || req.body.FechaPago || new Date(),
      monto_pago: req.body.monto_pago || req.body.MontoPago,
      estatus: req.body.estatus || req.body.Estatus,
    };

    const nuevoPago = await Pago.create(data);
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
    res.status(500).json({ message: "Error al actualizar el pago", error });
  }
};

// Buscar pagos por carnet
export const buscarPorCarnet = async (req, res) => {
  try {
    const { carnet } = req.params;
    const pagos = await Pago.findAll({ where: { carnet } });

    if (pagos.length > 0) res.json(pagos);
    else res.status(404).json({ message: "No se encontraron pagos para este carnet" });
  } catch (error) {
    res.status(500).json({ message: "Error al buscar pagos", error });
  }
};

// Eliminar pago
export const eliminarPago = async (req, res) => {
  try {
    const { id } = req.params;
    const eliminado = await Pago.destroy({ where: { id_matricula: id } });

    if (eliminado) {
      res.json({ message: "Pago eliminado correctamente" });
    } else {
      res.status(404).json({ message: "Pago no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el pago", error });
  }
};
