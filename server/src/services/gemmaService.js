const { GoogleGenAI } = require('@google/genai');

const MODEL = 'gemma-4-26b-a4b-it';

async function generateWithGemma(prompt) {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error('Gemini API is not configured. Set GEMINI_API_KEY on the server.');
    }

    try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const response = await ai.models.generateContent({ model: MODEL, contents: prompt });
        if (!response.text) {
            throw new Error('The model returned an empty response.');
        }
        return response.text;
    } catch (error) {
        // Keep provider details and credentials out of API responses and logs.
        console.error('[GemmaService] Provider request failed:', {
            name: error.name,
            status: error.status || error.statusCode,
            code: error.code,
        });
        throw new Error('Gemma API request failed. Check server configuration and provider availability.');
    }
}

module.exports = { generateWithGemma };
