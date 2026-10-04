/**
 * challengeRoutes.js
 * Mounts all challenge-related endpoints under the /api/challenges prefix
 * (set in server.js).
 */

const express = require('express');
const { generateChallengeHandler } = require('../controllers/challengeController');

const router = express.Router();

// POST /api/challenges/generate
router.post('/generate', generateChallengeHandler);

module.exports = router;
