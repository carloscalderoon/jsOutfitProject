const router = require('express').Router();

// Our controllers
const OutfitsController = require('../controllers/outfitsController');

// Create our Resource routes
router.get('/', OutfitsController.index);
router.get('/:id', OutfitsController.show);
router.get('/:id/edit', OutfitsController.edit);
router.post('/', OutfitsController.create);
router.post('/:id', OutfitsController.update);
router.post('/:id/delete', OutfitsController.destroy);

module.exports = router;