const { Model, DataTypes, Sequelize } = require('sequelize');
const { USER_TABLE } = require('./user.model');

const PATIENT_TABLE = 'patients';

const PatientSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gender: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  img: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Patient extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'user' });
    this.hasOne(models.Note, {
      as: 'Note',
      foreignKey: 'patientId',
    });
    this.hasOne(models.Emotion, {
      as: 'Emotion',
      foreignKey: 'patientId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PATIENT_TABLE,
      modelName: 'Patient',
      timeStamps: false,
    };
  }
}

module.exports = {
  PATIENT_TABLE,
  PatientSchema,
  Patient,
};
