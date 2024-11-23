import "../Weather.css"; // Import CSS

export default function Search({ search, setsearch, handleSearch }) {
    return (
        <>
            <div className="search-engine">
                <input
                    type="text"
                    className="city-search"
                    placeholder="Enter City Name"
                    name="Search"
                    value={search}
                    onChange={(event) => setsearch(event.target.value)}
                />
                <button 
    className="search-btn" 
    onClick={handleSearch} 
    disabled={!search.trim()}
>
    Search Weather
</button>

            </div>
        </>
    );
}
