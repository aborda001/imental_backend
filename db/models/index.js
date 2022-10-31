const { User, UserSchema } = require('./user.model');
const { Patient, PatientSchema } = require('./patient.model');
const { Therapist, TherapistSchema } = require('./therapist.model');
const { Note, NoteSchema } = require('./note.model');
const { Emotion, EmotionSchema } = require('./emotion.model');

const setupModels = (sequelize) => {
  User.init(UserSchema, User.config(sequelize));
  Patient.init(PatientSchema, Patient.config(sequelize));
  Therapist.init(TherapistSchema, Therapist.config(sequelize));
  Note.init(NoteSchema, Note.config(sequelize));
  Emotion.init(EmotionSchema, Emotion.config(sequelize));

  User.associate(sequelize.models);
  Patient.associate(sequelize.models);
  Therapist.associate(sequelize.models);
  Note.associate(sequelize.models);
  Emotion.associate(sequelize.models);
};

module.exports = setupModels;
