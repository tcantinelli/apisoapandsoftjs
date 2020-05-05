const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    active: Boolean,
    cadre: String,
    title: String,
    type: String,
    description: String,
    dateStart: Date,
    dateEnd: Date,
    git: { type: String, default: null },
    link: { type: String, default: null },
    android: { type: String, default: null },
    ios: { type: String, default: null },
    images: [String],
    background: String,
    video: String,
    tools: [{
        type: Schema.Types.ObjectId,
        ref: 'tool'
    }],
    hashtags: [String]
})

const Project = mongoose.model('project', ProjectSchema, 'PROJECT');

module.exports = Project;