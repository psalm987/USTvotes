import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true },
  staffID: { type: String, required: true },
  phones: {
    type: Array,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: ['Management', 'Media/ICT', 'Administration', 'Logistics'],
  },
  designation: {
    type: String,
    required: true,
  },
  accessLevel: {
    type: Number,
    required: true,
  },
  company: {
    type: Array,
    required: true,
  },
  dateEmployed: {
    type: Date,
    required: true,
  },
  confirmed: {
    type: Boolean,
    required: true,
  },
  dateConfirmed: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.models.Staff || mongoose.model('Staff', StaffSchema);
