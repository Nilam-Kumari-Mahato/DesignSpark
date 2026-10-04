import Categories from "./Categories";
import Difficulty from "./Difficulty";

type SideBarProps = {
    category: string;
    difficulty: string;
    loading: boolean;
    onCategoryChange: (category: string) => void;
    onDifficultyChange: (difficulty: string) => void;
    onGenerate: () => void;
};

export default function SideBar({
    category,
    difficulty,
    loading,
    onCategoryChange,
    onDifficultyChange,
    onGenerate,
}: SideBarProps) {
    return (
        <aside className="sidebar">
            <div className="sidebartop" aria-hidden="true">
                <div className="sidebartopCircle"></div>
                <div className="sidebartopCircle"></div>
                <div className="sidebartopCircle"></div>
            </div>
            <div className="sidebarItems">
                <Categories category={category} setCategory={onCategoryChange} />
                <Difficulty difficulty={difficulty} setDifficulty={onDifficultyChange} />
            </div>
            <button className="generatebtn" onClick={onGenerate} disabled={loading}>
                {loading ? "Generating…" : "Generate"}
            </button>
        </aside>
    );
}
