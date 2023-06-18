import React from "react";
import * as S from "./Position.style";

const Position = ({ position, setPosition }: any) => {
  const positionChange = (event: any) => {
    const newPosition = event.target.value;
    setPosition((prevDate: any) => ({ ...prevDate, position: newPosition }));
  };

  return (
    <div>
      <S.positionSelect value={position} onChange={positionChange}>
        <option>포지션을 선택해주세요.</option>
        <option value="Front-End">Front-End</option>
        <option value="Back-End">Back-End</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Designer">Designer</option>
      </S.positionSelect>
    </div>
  );
};

export default Position;
