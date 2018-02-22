const feedbackController = require('../controllers/feedbackController');
const authController = require('../controllers/authController');

module.exports = (app) => {

  app.post('/addFeedback', authController.verifyValidToken,feedbackController.addFeedback);

  app.get('/getMyFeedback', authController.verifyValidToken, feedbackController.getMyFeedback);

  app.get('/getTeamFeedback', authController.verifyValidToken, feedbackController.getTeamFeedback);

};
