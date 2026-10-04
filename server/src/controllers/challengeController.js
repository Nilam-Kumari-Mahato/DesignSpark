/**
 * challengeController.js
 * Handles HTTP-level concerns: reading the request, calling the service,
 * and sending the response (or forwarding errors).
 */

const { challengeSchema } = require('../validators/challengeValidator');
const { generateChallenge } = require('../services/challengeService');

/**
 * POST /api/challenges/generate
 */
async function generateChallengeHandler(req, res, next) {
    try {
        // 1. Validate request body with Zod
        const parsed = challengeSchema.safeParse(req.body);

        if (!parsed.success) {
            // Zod v4: validation errors are in .issues
            const errors = parsed.error.issues.map((e) => e.message);
            return res.status(400).json({
                success: false,
                errors,
            });
        }

        const { category, difficulty } = parsed.data;

        // 2. Delegate to the service layer
        const data = await generateChallenge(category, difficulty);

        // 3. Send success response
        return res.status(200).json({
            success: true,
            data,
        });
    } catch (err) {
        // Forward unexpected errors to centralized error handler
        next(err);
    }
}

module.exports = { generateChallengeHandler };
