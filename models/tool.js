const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ToolSchema = new Schema({
  title: String,
  image: String
});

const Tool = mongoose.model('tool', ToolSchema, 'TOOL');

module.exports = Tool;
