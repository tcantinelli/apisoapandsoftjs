const Tool = require('../models/tool');

module.exports = {
  readAll(req, res) {
    Tool.find().then(Tools => {
      res.send(Tools);
    });
  },

  read(req, res) {
    const { id } = req.params;

    Tool.findById(id)
      .then(tool => {
        res.send(tool);
      });
  },

  create(req, res) {
    const body = req.body;
    const tool = new Tool({
      title: body.title,
      image: body.image
    });
    tool.save().then(() => {
      res.send({ result: tool });
    });
  },

  delete(req, res) {
    const { id } = req.params;

    Tool.findByIdAndRemove(id).then(tool => {
      res.send(tool);
    });
  }
};
