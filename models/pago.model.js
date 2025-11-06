import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const Pago = sequelize.define(
  "Pago",
  {
    id_matricula: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    carnet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre_estudiante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mes: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    semestre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fecha_pago: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    monto_pago: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    estatus: {
      type: DataTypes.ENUM("Pagado", "Pendiente"),
      allowNull: false,
    },
  },
  {
    tableName: "pagos",
    timestamps: false,
  }
);

export default Pago;
