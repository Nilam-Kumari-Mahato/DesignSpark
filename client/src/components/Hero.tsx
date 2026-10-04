import type { Challenge } from "../types";

type HeroProps = {
    challenge: Challenge | null;
    loading: boolean;
    error: string;
};

export default function Hero({ challenge, loading, error }: HeroProps) {
    if (!challenge) {
        return (
            <main className="heronull" aria-live="polite">
                <h1>{loading ? "Creating your challenge…" : "Hello!!"}</h1>
                <p>{error || (loading ? "Gemma is preparing a design brief." : "Wanna design something?")}</p>
                {!loading && !error && <p>Choose a category and difficulty to start.</p>}
            </main>
        );
    }

    return (
        <main className="heronull challenge-panel" aria-live="polite">
            <div className="challenge-meta">
                <span>{challenge.category}</span>
                <span>{challenge.difficulty}</span>
            </div>
            <h1>{challenge.title}</h1>
            <section>
                <h2>For</h2>
                <p>{challenge.targetUser}</p>
            </section>
            <section>
                <h2>The problem</h2>
                <p>{challenge.problem}</p>
            </section>
            <section>
                <h2>Objective</h2>
                <p>{challenge.objective}</p>
            </section>
            <section>
                <h2>Scenario</h2>
                <p>{challenge.scenario}</p>
            </section>
            <section>
                <h2>Your design task</h2>
                <p>{challenge.designTask}</p>
            </section>
            <section>
                <h2>Constraints</h2>
                <ul>{challenge.constraints.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </section>
            <section>
                <h2>Edge cases</h2>
                <ul>{challenge.edgeCases.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </section>
            <section>
                <h2>Think about</h2>
                <ul>{challenge.thinkAbout.map((item, index) => <li key={index}>{item}</li>)}</ul>
            </section>
            <section>
                <h2>Suggested scope</h2>
                <p>{challenge.suggestedScope}</p>
            </section>
        </main>
    );
}
