import React from "react";
import "../styles/searchResults.css";

function SearchResults(props) {
  return (
    <>
      <div className="table-responsive">
        <table className="table table-sm table-striped text-nowrap">
          <thead>
            <tr>
              <th
                scope="col"
                className={
                  props.sortStatus === true
                    ? "px-3 sortHeading bg-dark text-white"
                    : "px-3 sortHeading"
                }
                data-sort="lastName"
                onClick={props.handleSort}
              >
                Last Name <i className="fas fa-sort"></i>
              </th>
              <th scope="col"
                className={
                  props.sortStatus === true
                    ? "px-3 sortHeading bg-dark text-white"
                    : "px-3 sortHeading"
                }
                data-sort="firstName"
                onClick={props.handleSort}
              >
                First Name <i className="fas fa-sort"></i>
              </th>
              <th scope="col" className="px-3">
                Department
              </th>
              <th scope="col" className="px-3">
                Title
              </th>
              <th
                scope="col"
                className={
                  props.sortStatus === true
                    ? "px-3 sortHeading bg-dark text-white"
                    : "px-3 sortHeading"
                }
                data-sort="location"
                onClick={props.handleSort}
              >
                Location <i className="fas fa-sort"></i>
              </th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map(employee => (
              <tr key={employee.id}>
                <td className="px-3">{employee.lastName}</td>
                <td className="px-3">{employee.firstName}</td>
                <td className="px-3">{employee.department}</td>
                <td className="px-3">{employee.jobTitle}</td>
                <td className="px-3">{employee.location}</td>
                <td className="px-3">{employee.phone}</td>
                <td className="px-3">{employee.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchResults;