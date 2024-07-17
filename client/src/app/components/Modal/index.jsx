import React from "react";

export const Modal = ({ id, children, extra, closeBtn = true }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog modal-dialog-centered ${extra}`}>
        <div className="modal-content">
          {closeBtn && (
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
          )}
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};
