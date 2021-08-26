import React, { useState } from "react";
import { Link } from "react-router-dom";
import FrontHeaderCont from "./FrontHeader/FrontHeaderCont";
import PaginationCont from "../Pagination/PaginationCont";
import FrontItemCont from "./FrontItem/FrontItemCont";
import * as S from "./StyledFrontPage";

const FrontPage = ({ state, ...props }) => {
  const [idOpened, setIdOpened] = useState(-1);

  const listOfTasks = state.list.map((task) => {
    return (
      <FrontItemCont
        {...task}
        key={task.id}
        idOpened={idOpened}
        setIdOpened={setIdOpened}
      />
    );
  });

  return (
    <S.Card>
      <FrontHeaderCont />
      <S.Container>
        <S.FrontTitle>Inbox</S.FrontTitle>
        {!state.list.length && <S.Empty>No tasks</S.Empty>}
        <ul>{listOfTasks}</ul>
      </S.Container>
      <S.Completed>
        Completed <S.CompletedNum>{state.completedAmount}</S.CompletedNum>
      </S.Completed>
      <Link to="/write">
        <S.AddButton></S.AddButton>
      </Link>
      <PaginationCont />
    </S.Card>
  );
};

export default FrontPage;
