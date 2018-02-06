const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CachorroSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('cachorros', CachorroSchema);