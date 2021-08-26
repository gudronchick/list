import styled from "styled-components";

export const FrontItem = styled.li`
  list-style-type: none;
  background: #fff;
  user-select: none;
  position: relative;

  &:last-child {
    margin-bottom: 50px;
  }

  &:before {
    content: ${({ isdone }) => (isdone ? '"✔"' : false)};
    position: absolute;
    left: 15px;
    top: 50%;
    font-size: 25px;
    color: rgb(105, 105, 105);
    transform: translateY(-50%);
    pointer-events: none;
  }

  @media screen and (max-width: 500px) and (min-height: 660px) {
    padding: 10px 0 5px 0;
  }
`;

export const FrontHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgb(221, 221, 221);
  cursor: pointer;

  @media (max-height: 600px) {
    padding: 8px 0;
  }
  @media screen and (max-width: 500px) and (min-height: 660px) {
    padding: 12px 0;
  }
`;

export const Icon = styled.div`
  border: 2px solid rgb(211, 211, 211);
  border-color: ${({ isdone }) => (isdone ? "rgb(226, 226, 226)" : "")};
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  line-height: 45px;
  cursor: pointer;

  & > svg {
    fill: ${({ isdone }) => (isdone ? "transparent" : "")};
  }
`;

export const Text = styled.div`
  margin: 0 auto 0 10px;
`;

export const Info = styled.div`
  position: relative;
`;

export const GrayElem = styled.span`
  color: rgb(155, 155, 155);
  font-weight: 500;
  font-size: 0.8rem;
  color: ${({ isdone }) => (isdone ? "rgb(219, 219, 219)" : "")};
`;

export const Title = styled.h4`
  padding-right: 5px;
  font-size: 1.1rem;
  max-width: 230px;
  width: 100%;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${({ isdone }) => (isdone ? "rgb(219, 219, 219)" : "")};
`;

export const AddInfo = styled.div`
  position: absolute;
  top: 0;
  bottom: 1px;
  right: 0;
  z-index: 0;
  background: #fff;
  text-align: center;
  opacity: 0;
  pointer-events: none;
  animation: ${({ isopen }) =>
    isopen ? "open 0.2s ease-in forwards" : "none"};

  @keyframes open {
    from {
      pointer-events: all;
    }
    to {
      pointer-events: all;
      opacity: 1;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  & > *:hover {
    filter: brightness(90%);
  }
`;

export const ButtonDelete = styled.button`
  all: unset;
  position: relative;
  cursor: pointer;
  padding: 3px;
  width: 50px;
  text-align: center;
  font-size: 13px;
  color: #fff;
  margin: 2px 0;
  background: rgb(255, 140, 140);
`;

export const ButtonDone = styled(ButtonDelete)`
  background: rgb(119, 207, 119);
`;

export const ButtonImage = styled.span`
  background: rgb(49, 52, 75);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  fill: ${({ purpose }) =>
    purpose === "delete" ? "rgb(255, 140, 140)" : "rgb(119, 207, 119)"};
`;
