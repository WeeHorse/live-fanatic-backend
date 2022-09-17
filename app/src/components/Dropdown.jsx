import { useState } from "react";

const Dropdown = ({ values, handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div className="dropdown__header"></div>
        <div className="dropdown__children">
          {values.map((v) => (
            <div onClick={handleClick}>{v.name}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
