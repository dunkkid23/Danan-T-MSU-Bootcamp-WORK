import React from "react";

function SearchForm(props) {
  return (
    <>
      <h4 className="d-block text-center d-md-inline-block text-md-left mr-md-5 pt-2">
        Search:
      </h4>
      <div className="text-center text-md-left d-inline-block">
        <form
          className="form-inline text-center text-md-left"
          onSubmit={props.handleSubmit}
        >
          <input
            type="text"
            className="form-control mt-3 mt-sm-0"
            placeholder="Last name"
            onChange={props.handleInputChange}
            value={props.search}
          />
          <button
            type="submit"
            onClick={props.handleSearch}
            className="btn btn-primary ml-sm-1 mt-3 mt-sm-0 text-white"
          >
            <i className="fas fa-search"></i>
          </button>
          <button
            onClick={props.handleClear}
            className="btn btn-secondary ml-1 mt-3 mt-sm-0 text-white"
          >
            Clear
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;