ProjectController = require('../controllers/project-controller');
ToolController = require('../controllers/tool-controller');
VideoController = require('../controllers/video-controller');
PreviewController = require('../controllers/preview-controller');

module.exports = server => {
  //Projects
  server.get('/projects', ProjectController.readAll);
  server.get('/project/:id', ProjectController.read);
  server.post('/project', ProjectController.create);
  server.delete('/project/:id', ProjectController.delete);

  //Tools
  server.get('/tools', ToolController.readAll);
  server.get('/tool/:id', ToolController.read);
  server.post('/tool', ToolController.create);
  server.delete('/tool/:id', ToolController.delete);

  //Videos
  server.get('/video/:title', VideoController.streamMe);
  server.get('/preview/:title', PreviewController.streamMe);
};
