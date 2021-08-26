import React from "react";
import * as S from "./StyledFrontItem";
import person from "../../../images/svg/person";
import garbageCan from "../../../images/svg/garbageCan";
import done from "../../../images/svg/done";

const FrontItem = ({ idOpened, setIdOpened, ...props }) => {
  const toggleInfo = (e) => {
    let id = idOpened !== props.id ? props.id : -1;
    setIdOpened(id);
  };

  const deleteTask = (id) => {
    props.deleteTask(id);
    setIdOpened(-1);
  };

  const doTask = (id) => {
    props.makeTaskIsDone(id);
    setIdOpened(-1);
  };

  return (
    <S.FrontItem isdone={Number(props.done)}>
      <S.FrontHead onClick={toggleInfo}>
        <S.Icon isdone={Number(props.done)}>{person}</S.Icon>
        <S.Text>
          <S.Title isdone={Number(props.done)}>{props.task}</S.Title>
          <S.GrayElem isdone={Number(props.done)}>{props.place}</S.GrayElem>
        </S.Text>
        <S.Info>
          <S.GrayElem isdone={Number(props.done)}>{props.time}</S.GrayElem>
        </S.Info>
      </S.FrontHead>
      {
        <S.AddInfo isopen={Number(idOpened === props.id)}>
          <S.Buttons>
            <div>
              <S.ButtonDelete onClick={() => deleteTask(props.id)}>
                <S.ButtonImage purpose="delete">{garbageCan}</S.ButtonImage>
                Delete
              </S.ButtonDelete>
            </div>
            {!props.done && (
              <div>
                <S.ButtonDone onClick={() => doTask(props.id)}>
                  <S.ButtonImage purpose="done">{done}</S.ButtonImage>
                  Done
                </S.ButtonDone>
              </div>
            )}
          </S.Buttons>
        </S.AddInfo>
      }
    </S.FrontItem>
  );
};

export default FrontItem;
