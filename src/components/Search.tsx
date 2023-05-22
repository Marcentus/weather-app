import "./Search.css";

interface SearchProps {
  locationInput: string;
  handleLocationInput: React.ChangeEventHandler<HTMLInputElement>;
  handleSearch: React.FormEventHandler<HTMLFormElement>;
}

export default function Search(props: SearchProps) {
  const { locationInput, handleLocationInput, handleSearch } = props;
  return (
    <form onSubmit={handleSearch}>
      <input
        className="search-bar"
        value={locationInput}
        onChange={handleLocationInput}
      ></input>
      <button className="search-button">Search</button>
    </form>
  );
}
