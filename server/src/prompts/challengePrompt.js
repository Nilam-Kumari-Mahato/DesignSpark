/** Build a focused brief that leaves the design solution to the learner. */
function buildChallengePrompt(category, difficulty) {
    const difficultyGuidance = {
        Beginner: 'Keep the problem simple, use an easy-to-understand user flow, scope approximately 3–4 screens, and include few edge cases.',
        Intermediate: 'Include multiple user states, approximately 5–7 screens worth of design scope, navigation decisions, several edge cases, and realistic constraints.',
        Advanced: 'Include a complex user flow, multiple stakeholders, business constraints, accessibility considerations, several edge cases, and difficult product decisions.',
    }[difficulty];

    return `You create realistic UI/UX design briefs for DesignSpark: “You bring the creativity. We bring the challenge.” DesignSpark helps UI/UX learners who do not know what to design. Generate the design problem, not its solution. A human designer will solve it in Figma or another design tool.

Create exactly ONE realistic challenge a real company could give a UI/UX designer.
Category: ${category}
Difficulty: ${difficulty}
Difficulty guidance: ${difficultyGuidance}

Do NOT generate HTML, CSS, code, a wireframe, or a visual UI. Do NOT describe an exact UI layout or specify exact button, card, or component placement. Do NOT solve the design problem or give a final UI/UX solution. Describe only the problem and requirements the designer needs to solve. Keep the brief specific, plausible, and actionable without prescribing the interface.

Return only one valid JSON object, with no markdown fences or surrounding commentary, using exactly these fields:
{
  "title": "string",
  "category": "string",
  "difficulty": "string",
  "targetUser": "string",
  "problem": "string",
  "objective": "string",
  "scenario": "string",
  "designTask": "string",
  "constraints": ["string"],
  "edgeCases": ["string"],
  "thinkAbout": ["string"],
  "suggestedScope": "string"
}

Use the requested category and difficulty exactly. All array fields must be arrays of concise strings. Do not add or omit fields.`;
}

module.exports = { buildChallengePrompt };
