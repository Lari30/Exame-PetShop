const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/filhotesController');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.delete('/:id', ctrl.delete);
router.put('/:id', ctrl.update);

module.exports = router;
