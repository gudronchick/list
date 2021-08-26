import React from "react";
import { Link } from "react-router-dom";
import back from "../../../images/svg/back";
import paper from "../../../images/svg/paper";
import pen from "../../../images/svg/pen";
import * as S from "./StyledBackHeader";

const BackHeader = (props) => {
  return (
    <S.Main>
      <S.Header>
        <Link to="/">
          <S.BackButton>{back}</S.BackButton>
        </Link>
        <S.Title>Add new thing</S.Title>
        <div>{paper}</div>
      </S.Header>
      <S.TitleIcon>{pen}</S.TitleIcon>
    </S.Main>
  );
};

export default BackHeader;
