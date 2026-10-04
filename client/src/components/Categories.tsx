type CategoriesProps = {
    category: string;
    setCategory: (category: string) => void;
};

export default function Categories({ category, setCategory, }: CategoriesProps) {



    const categories = [
        "Finance",
        "Healthcare",
        "Education",
        "Food",
        "Travel",
        "E-commerce",
        "Productivity",
        "Entertainment",
        "Transportation",
        "Accessibility",
    ]
    return (
        <>
            <label htmlFor="category" className="categories">Categories</label>
            <select
                id="category"
                className="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                {categories.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </>
    )
}
