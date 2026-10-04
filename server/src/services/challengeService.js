const { buildChallengePrompt } = require('../prompts/challengePrompt');
const { generateWithGemma } = require('./gemmaService');
const { challengeResponseSchema } = require('../validators/challengeResponseValidator');

async function generateChallenge(category, difficulty) {
    const prompt = buildChallengePrompt(category, difficulty);
    const rawResponse = await generateWithGemma(prompt);

    let challenge;
    try {
        const jsonText = rawResponse.trim()
            .replace(/^```(?:json)?\s*/i, '')
            .replace(/\s*```$/, '');
        challenge = JSON.parse(jsonText);
    } catch (error) {
        console.error('[ChallengeService] Gemma returned invalid JSON:', rawResponse);
        throw new Error('Gemma returned an invalid challenge response.');
    }

    const result = challengeResponseSchema.safeParse(challenge);
    if (!result.success) {
        console.error('[ChallengeService] Gemma response validation failed:', result.error.issues);
        throw new Error('Gemma returned a challenge with an invalid structure.');
    }

    return result.data;
}

module.exports = { generateChallenge };
