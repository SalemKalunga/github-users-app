import { GithubUsersContext } from "../../contexts/github-users.context";
import { useContext, useEffect, useState } from "react";
import UserCart from "../user-cart.component/user-cart.component";
import SearchField from "../search-field.component/search-field.component";
import "./users-carts-container.design.scss";
import Pagination from "../pagination.component/pagination.component";

const UsersCartContainer = () => {
  const gitHubUsers = useContext(GithubUsersContext); //Get the github users's array from the context
  const [searchValue, setSearchValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  // Method to get the value from the input field
  const manageSearchValue = (event) => {
    const inputString = event.target.value.toLocaleLowerCase();
    setSearchValue(inputString);
  };
  //   useEffect here is used to filter the gitHubUsers and set the filtered array value so we can loop through the filtered array and render the carts
  useEffect(() => {
    const filterdArray = gitHubUsers.filter((user) => {
      return user.login.toLocaleLowerCase().includes(searchValue);
    });
    setFilteredUsers(filterdArray);
  }, [searchValue, gitHubUsers]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const lastUserIndex = currentPage * usersPerPage;
  const firstPostIndex = lastUserIndex - usersPerPage;

  let paginatedUsers = filteredUsers;
  paginatedUsers = filteredUsers.slice(firstPostIndex, lastUserIndex);

  const changePageNumber = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <SearchField manageSearchValue={manageSearchValue} />
      <div className="users-carts-container">
        {paginatedUsers.map((user) => {
          return <UserCart key={user.id} user={user} />;
        })}
      </div>
      <Pagination
        totalUserCartes={filteredUsers.length}
        cartesPerPage={usersPerPage}
        changePageNumber={changePageNumber}
      />
    </>
  );
};

export default UsersCartContainer;
