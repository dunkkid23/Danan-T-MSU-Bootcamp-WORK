import React from "react";
import Employees from "../employees.json";
import SearchResults from "./SearchResults";
import SearchForm from "./SearchForm";

class Search extends React.Component {
  // employee data is initially sorted alphabetically by last name (descending)
  state = {
    result: Employees.sort((a, b) => {
      const lastNameA = a.lastName.toUpperCase();
      const lastNameB = b.lastName.toUpperCase();
      let comparison = 0;
      lastNameA > lastNameB
        ? (comparison = 1)
        : lastNameB > lastNameA
        ? (comparison = -1)
        : (comparison = 0);
      return comparison;
    }),
    search: "",
    sortMethod: "lastName Desc",
    // sortStatus is true if current sortMethod is lastName, else false
    // sortStatus controls styling of SearchResults table columns
    sortStatus: true
  };

  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleSearch = event => {
    if (this.state.search.trim() === "") {
      return;
    }
    let employees = this.state.result.filter(employee =>
      employee.lastName.toUpperCase().includes(this.state.search.toUpperCase())
    );
    this.setState({
      result: employees
    });
  };

  handleClear = event => {
    this.setState({
      result: Employees.sort((a, b) => {
        const lastNameA = a.lastName.toUpperCase();
        const lastNameB = b.lastName.toUpperCase();
        let comparison = 0;
        lastNameA > lastNameB
          ? (comparison = 1)
          : lastNameB > lastNameA
          ? (comparison = -1)
          : (comparison = 0);
        return comparison;
      }),
      search: "",
      sortMethod: "lastName Desc",
      sortStatus: true
    });
  };

  handleSort = event => {
    const sortTarget = event.target.dataset.sort;

    //Sort by Last Name 

    if (sortTarget === "lastName") {
      switch (this.state.sortMethod) {
        case "lastName Desc":
          this.setState({
            result: this.state.result.sort((a, b) => {
              const lastNameA = a.lastName.toUpperCase();
              const lastNameB = b.lastName.toUpperCase();
              let comparison = 0;
              lastNameA > lastNameB
                ? (comparison = -1)
                : lastNameB > lastNameA
                ? (comparison = 1)
                : (comparison = 0);
              return comparison;
            }),
            sortMethod: "lastName Asc",
            sortStatus: true
          });
          break;
        default:
          this.setState({
            result: this.state.result.sort((a, b) => {
              const lastNameA = a.lastName.toUpperCase();
              const lastNameB = b.lastName.toUpperCase();
              let comparison = 0;
              lastNameA > lastNameB
                ? (comparison = 1)
                : lastNameB > lastNameA
                ? (comparison = -1)
                : (comparison = 0);
              return comparison;
            }),
            sortMethod: "lastName Desc",
            sortStatus: true
          });
      }

      //Sort by Location

    } else if (sortTarget === "location") {
      switch (this.state.sortMethod) {
        case "location Desc":
          this.setState({
            result: this.state.result.sort((a, b) => {
              const locationA = a.location.toUpperCase();
              const locationB = b.location.toUpperCase();
              let comparison = 0;
              locationA > locationB
                ? (comparison = -1)
                : locationB > locationA
                ? (comparison = 1)
                : (comparison = 0);
              return comparison;
            }),
            sortMethod: "location Asc",
            sortStatus: true
          });
          break;
        default:
          this.setState({
            result: this.state.result.sort((a, b) => {
              const locationA = a.location.toUpperCase();
              const locationB = b.location.toUpperCase();
              let comparison = 0;
              locationA > locationB
                ? (comparison = 1)
                : locationB > locationA
                ? (comparison = -1)
                : (comparison = 0);
              return comparison;
            }),
            sortMethod: "location Desc",
            sortStatus: true
          });
      }

        //Sort by First Name

    } else if (sortTarget === "firstName") {
        switch (this.state.sortMethod) {
          case "firstname Desc":
            this.setState({
              result: this.state.result.sort((a, b) => {
                const firstNameA = a.firstName.toUpperCase();
                const firstNameB = b.firstName.toUpperCase();
                let comparison = 0;
                firstNameA > firstNameB
                  ? (comparison = -1)
                  : firstNameB > firstNameA
                  ? (comparison = 1)
                  : (comparison = 0);
                return comparison;
              }),
              sortMethod: "firstName Asc",
              sortStatus: true
            });
            break;
          default:
            this.setState({
              result: this.state.result.sort((a, b) => {
                const firstNameA = a.firstName.toUpperCase();
                const firstNameB = b.firstName.toUpperCase();
                let comparison = 0;
                firstNameA > firstNameB
                  ? (comparison = 1)
                  : firstNameB > firstNameA
                  ? (comparison = -1)
                  : (comparison = 0);
                return comparison;
              }),
              sortMethod: "firstName Desc",
              sortStatus: true
            });
        }}
  };

  render() {
    return (
      <>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <SearchForm
                  handleInputChange={this.handleInputChange}
                  handleSubmit={this.handleSubmit}
                  handleSearch={this.handleSearch}
                  handleClear={this.handleClear}
                  search={this.state.search}
                />
                <hr />
                <SearchResults
                  employees={this.state.result}
                  handleSort={this.handleSort}
                  sortStatus={this.state.sortStatus}
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;