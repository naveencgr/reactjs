import React from "react";

interface Props {
  onClick: () => void;
}

const Alerts = ({ onClick }: Props) => {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        MyAlert
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClick}
        ></button>
      </div>
    </>
  );
};

export default Alerts;
