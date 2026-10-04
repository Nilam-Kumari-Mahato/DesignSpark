type DifficultiesProps = {
    difficulty: string;
    setDifficulty: (difficulty: string) => void;
};


export default function Difficulty({ difficulty, setDifficulty, }: DifficultiesProps) {


    const difficulties = [
        "Beginner",
        "Intermediate",
        "Advanced"
    ]

    return (

        <>
            <label htmlFor="difficulty" className="difficulties">Difficulty</label>

            <select
                name="difficulty"
                id="difficulty"
                className="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
            >
                {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
            </select>
        </>
    )
}
