import React from "react";
import * as S from "./StyledUtilits";

export const getDate = (date = new Date(), noYear = false) => {
  const now = new Date(date);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    months[now.getMonth()] +
    " " +
    now.getDate() +
    (!noYear ? ", " + now.getFullYear() : "")
  );
};

export const getDateAndTime = (date = undefined) => {
  if (!date) return "";
  const time = new Date(date);
  const dataTime = time.getTime();
  const now = new Date().getTime();
  const month = getDate(time, true);
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const res = (
    <S.Date>
      <S.DateTop> {month}</S.DateTop> {hours}:{minutes}
    </S.Date>
  );

  if (now > dataTime) {
    return (
      <S.Center>
        Time is <S.CenterBottom>over</S.CenterBottom>
      </S.Center>
    );
  }

  return res;
};
