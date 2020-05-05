const Project = require('../models/project');
const Localisation = require('../models/localisation');

module.exports = {
  readAll(req, res) {

    //Sauvegarde de l'ip
    saveIp(req.ipInfo);

    //Get projects
    Project.find({ active: true})
      .populate('tools')
      .sort({dateStart: 'desc'})
      .then(Projects => {
        res.send(Projects);
    });
  },

  read(req, res) {
    const { id } = req.params;

    Project.findById(id)
      .populate('tools')
      .then(project => {
        res.send(project);
      });
  },

  create(req, res) {
    const { title, type, description, dateStart, dateEnd, git, link, android, ios, images, background, video, tools, hashtags } = req.body;
    const project = new Project({
      title,
      type,
      description,
      dateStart,
      dateEnd,
      git,
      link,
      android,
      ios,
      images,
      background,
      video,
      tools,
      hashtags
    });
    project.save().then(() => {
      res.send({ result: project });
    });
  },

  delete(req, res) {
    const { id } = req.params;

    Project.findByIdAndRemove(id).then(project => {
      res.send(project);
    });
  }
};

function saveIp(ipInfo) {
  const { ip, city, region, country } = ipInfo;

  const visitor = new Localisation({
    dateVisit: new Date(),
    ip,
    city,
    region,
    country
  });

  visitor.save();
}
