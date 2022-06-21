import React from "react";

const Pagination = (props) => {
  const { page, totalPages, onLeftClick, onRightClick } = props;
  return (
    <div className="pagination-container">
      <button  className="pagination-container-left" onClick={onLeftClick}><div>⬅</div></button>
      <div className="pagination-container-numbers" > {page} de {totalPages} </div>
      <button  className="pagination-container-right" onClick={onRightClick}> <div>➡</div> </button>
    </div>
  );
};

export default Pagination;
