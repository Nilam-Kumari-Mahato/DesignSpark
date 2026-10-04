const { z } = require('zod');

const challengeResponseSchema = z.object({
    title: z.string().min(1),
    category: z.string().min(1),
    difficulty: z.string().min(1),
    targetUser: z.string().min(1),
    problem: z.string().min(1),
    objective: z.string().min(1),
    scenario: z.string().min(1),
    designTask: z.string().min(1),
    constraints: z.array(z.string()),
    edgeCases: z.array(z.string()),
    thinkAbout: z.array(z.string()),
    suggestedScope: z.string().min(1),
});

module.exports = { challengeResponseSchema };
