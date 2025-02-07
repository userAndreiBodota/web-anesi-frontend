import React from "react";

const CardFilter = ({ filterChange }) => {
  return (
    <div className="filter">
      <a href="#" className="icon" data-bs-toggle="dropdown">
        <i className="bi bi-three-dots"></i>
      </a>

      <ul className="dropdown-menu dropdown-menu-end  dropdown-menu-arrow">
        <li className="dropdown-header">
          <h6>Filter</h6>
        </li>
        <li>
          <a className="dropdown-item" onClick={() => filterChange("Today")}>
            Today
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("This Week")}
          >
            This Week
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            onClick={() => filterChange("This Month")}
          >
            This Month
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CardFilter;
