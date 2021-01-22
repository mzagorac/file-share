// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('File', fileSchema);
