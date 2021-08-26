import React from "react";
import bgImg from "../../../images/bg.jpg";
import Circle from "../../../images/svg/circle";
import * as S from "./StyledFrontHeader";

const FrontHeader = (props) => {
  return (
    <S.FrontHead>
      <S.FrontImage src={bgImg} alt={"Background"} />
      <S.Container>
        <S.Amount>
          <S.Title>
            Your
            <br /> Things
          </S.Title>
          <S.AmountItem>
            <span>{props.rubrics.personal}</span>
            <S.AmountName>Personal</S.AmountName>
          </S.AmountItem>
          <S.AmountItemRight>
            <span>{props.rubrics.business}</span>
            <S.AmountName>Business</S.AmountName>
          </S.AmountItemRight>
        </S.Amount>
        <S.HeaderBottom>
          <p>{props.header.getDate}</p>
          <S.Percent>
            <Circle donePercent={props.donePercent} />
            <S.Completed>{props.donePercent}% done</S.Completed>
          </S.Percent>
        </S.HeaderBottom>
      </S.Container>
      <S.ProgressLine widthStyle={props.donePercent}></S.ProgressLine>
      <S.DoneBackground widthStyle={100 - props.donePercent}></S.DoneBackground>
    </S.FrontHead>
  );
};

export default FrontHeader;
