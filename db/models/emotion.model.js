const { Model, DataTypes, Sequelize } = require('sequelize');
const { PATIENT_TABLE } = require('./patient.model');

const EMOTION_TABLE = 'emotions';

const EmotionSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  score: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  patientId: {
    field: 'patient_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: PATIENT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
};

class Emotion extends Model {
  static associate(models) {
    this.belongsTo(models.Patient, { as: 'patient' });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: EMOTION_TABLE,
      modelName: 'Emotion',
      timeStamps: false,
    };
  }
}

module.exports = {
  EMOTION_TABLE,
  EmotionSchema,
  Emotion,
};
