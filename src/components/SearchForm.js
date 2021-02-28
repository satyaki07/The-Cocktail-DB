import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">seach your favourite cocktail</label>
          <input
            autoComplete="off"
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
