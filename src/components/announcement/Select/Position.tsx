import React from "react";

const Position = ({ position, setPosition }) => {
  const positionChange = (event: any) => {
    const newPosition = event.target.value;
    setPosition((prevDate: any) => ({ ...prevDate, position: newPosition }));
  };

  return (
    <div>
      <select value={position} onChange={positionChange}>
        <option>포지션을 선택해주세요.</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Designer">Designer</option>
      </select>
    </div>
  );
};

export default Position;
