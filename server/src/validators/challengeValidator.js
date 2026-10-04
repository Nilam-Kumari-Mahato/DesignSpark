/**
 * challengeValidator.js
 * Zod schema for validating the POST /api/challenges/generate request body.
 */

const { z } = require('zod');

const ALLOWED_CATEGORIES = [
    'Finance',
    'Healthcare',
    'Education',
    'Food',
    'Travel',
    'E-commerce',
    'Productivity',
    'Entertainment',
    'Transportation',
    'Accessibility',
];

const ALLOWED_DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'];

const challengeSchema = z.object({
    category: z.enum(ALLOWED_CATEGORIES, {
        errorMap: () => ({
            message: `category must be one of: ${ALLOWED_CATEGORIES.join(', ')}`,
        }),
    }),

    difficulty: z.enum(ALLOWED_DIFFICULTIES, {
        errorMap: () => ({
            message: `difficulty must be one of: ${ALLOWED_DIFFICULTIES.join(', ')}`,
        }),
    }),
});

module.exports = { challengeSchema };
