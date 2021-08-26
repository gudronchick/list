import React from "react";
import * as S from "./StyledBackForm";

const Dropdown = (props) => {
  const setName = (e) => {
    props.setRubricName(e.target.textContent);
  };

  return <S.DropItem onClick={setName}>{props.title}</S.DropItem>;
};

export default Dropdown;
