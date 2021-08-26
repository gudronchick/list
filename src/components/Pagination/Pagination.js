import React, { useCallback, useEffect, useState } from "react";
import * as S from "./StyledPagination";
import leftArrow from "../../images/svg/leftArrow";
import rightArrow from "../../images/svg/rightArrow";

const Pagination = ({ totalAmount, addTask, sendPagNum, ...props }) => {
  const [pagItems, setPagItems] = useState([]);
  const [activePag, setActivePag] = useState(1);
  let pagsAmount = Math.ceil(totalAmount / 4);
  let activeNumber = Math.ceil(activePag / 3) - 1;

  const changePage = useCallback(
    (e) => {
      const id = +e.target.dataset.page;
      setActivePag(id);
      sendPagNum(id);
    },
    [sendPagNum]
  );

  useEffect(() => {
    addTask(undefined, activePag);
  }, [activePag, addTask]);

  const nextNum = (e) => {
    setActivePag((prev) => prev + 1);
    sendPagNum(activePag + 1);
  };

  const prevNum = () => {
    if (activePag > 1) {
      setActivePag((prev) => prev - 1);
      sendPagNum(activePag - 1);
    }
  };

  useEffect(() => {
    if (activePag * 4 - 3 > totalAmount && totalAmount) {
      setActivePag((prev) => prev - 1);
    }
    let arrOfPags = [];
    for (let i = activeNumber * 3 + 1; i <= (activeNumber + 1) * 3; i++) {
      if (pagsAmount < i) break;
      arrOfPags.push(
        <S.Item
          isactive={Number(activePag === i)}
          data-page={i}
          key={i}
          onClick={changePage}
        >
          {i}
        </S.Item>
      );
    }
    setPagItems(arrOfPags);
  }, [totalAmount, activePag, changePage, activeNumber, pagsAmount]);

  return (
    <S.Pagination>
      {pagsAmount > 3 && (
        <S.Arrow
          isactive={Number(activePag <= 1)}
          direction="prev"
          onClick={prevNum}
        >
          {leftArrow}
        </S.Arrow>
      )}
      {<S.List>{pagItems}</S.List>}
      {pagsAmount > 3 && (
        <S.Arrow
          isactive={Number(activePag >= pagsAmount)}
          direction="next"
          onClick={nextNum}
        >
          {rightArrow}
        </S.Arrow>
      )}
    </S.Pagination>
  );
};

export default Pagination;
