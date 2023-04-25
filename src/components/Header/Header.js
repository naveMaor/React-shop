import "./Header.css";


function Header({ categoriesList, handleCategory ,handleSort }) {
    const sortOptions = [
        { label: "Top Rated", value: "top-rated" },
        { label: "Best Selling", value: "best-selling" },
        { label: "Alphabetically, A-Z", value: "a-z" },
        { label: "Alphabetically, Z-A", value: "z-a" },
        { label: "Price, low to high", value: "price-low-high" },
        { label: "Price, high to low", value: "price-high-low" },
    ];
    return (
        <nav className="product-filter">
            <div className="sort">
                <div className="collection-sort">
                    <label>Filter by:</label>
                    <select defaultValue={categoriesList.indexOf("show all")} onChange={(selectedOption) => handleCategory(selectedOption.target.value)}>
                        {categoriesList.map((category, index) => (
                            <option key={index}>{category}</option>
                        ))}
                    </select>
                </div>

                <div className="collection-sort">
                    <label>Sort by:</label>
                    <select onChange={(selectedOption) => handleSort(selectedOption.target.value)}>
                        {sortOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </nav>
    );
}
export default Header;