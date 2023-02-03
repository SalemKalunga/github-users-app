import "./pagination.styles.scss";
const Pagination = ({ totalUserCartes, cartesPerPage, changePageNumber }) => {
  const pages = [];
  for (let i = 0; i <= Math.ceil(totalUserCartes / cartesPerPage); i++) {
    if (i !== 0) {
      pages.push(i);
    }
  }
  return (
    <div className="pagination-container">
      <ul>
        {pages.map((page, id) => {
          return (
            <li onClick={() => changePageNumber(page)} key={id}>
              {page}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Pagination;
