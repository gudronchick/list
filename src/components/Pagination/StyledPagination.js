import styled from "styled-components";

export const Pagination = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
  min-width: 100px;
  z-index: 0;
`;

export const Item = styled.li`
  color: ${({ isactive }) => (isactive ? "#fff" : "rgb(46, 186, 238)")};
  background: ${({ isactive }) => (isactive ? "rgb(46, 186, 238)" : "")};
  width: 25px;
  height: 25px;
  line-height: 25px;
  font-weight: 500;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 2px;
`;

export const Arrow = styled.div`
  padding: 2px;
  fill: rgb(46, 186, 238);
  cursor: pointer;
  position: absolute;
  bottom: 7px;
  left: ${({ direction }) =>
    direction === "prev" ? "calc(50% - 70px)" : "none"};
  right: ${({ direction }) =>
    direction === "next" ? "calc(50% - 70px)" : "none"};
  fill: ${({ isactive }) => (isactive ? "rgb(212, 212, 212)" : "")};
  pointer-events: ${({ isactive }) => (isactive ? "none" : "all")};
`;
