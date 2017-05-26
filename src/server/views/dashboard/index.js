const router = require('express').Router();

const queueList = require('./queueList');
const queueDetails = require('./queueDetails');
const queueJobsByState = require('./queueJobsByState');
const jobDetails = require('./jobDetails');
const jobRetry = require('./jobRetry');
const jobRemove = require('./jobRemove');

router.get('/', queueList);
router.get('/:queueName', queueDetails);
router.get('/:queueName/:id(\\d+)', jobDetails);
router.patch('/:queueName/:id(\\d+)', jobRetry);
router.delete('/:queueName/:id(\\d+)', jobRemove);
router.get('/:queueName/:state', queueJobsByState);

module.exports = router;
