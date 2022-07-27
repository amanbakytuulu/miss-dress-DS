import React from "react";
import { useNavigate } from "react-router-dom";

import { SEARCH_PAGE } from "../../utils/path";

import classes from "./SearchInput.module.scss";

const SearchInput = () => {
  const navigate = useNavigate();

  const navigateToSearchPage = () => {
    navigate(SEARCH_PAGE);
  };
  return (
    <div className={classes.searchInputBlock}>
      <input
        onKeyDown={(e) =>
          e.key === "Enter" && e.target.value !== "" && navigateToSearchPage()
        }
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};

export default SearchInput;
