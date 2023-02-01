import "./search-field.design.scss";
const SearchField = ({ manageSearchValue }) => {
  return (
    <input
      onChange={manageSearchValue}
      type="search"
      placeholder="search user"
      className="search-box"
    />
  );
};
export default SearchField;
