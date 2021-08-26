import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  background: rgb(190, 207, 226);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.main`
  width: 370px;
  min-height: 600px;
  position: relative;
  padding-bottom: 15px;
  @media screen and (max-width: 500px),
    (orientation: landscape) and (max-width: 820px) and (max-height: 550px) {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    padding-bottom: 0;
  }
`;

export const transitionName = "page";

export const TransitionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform-origin: 90% 90%;

  &.${transitionName}-enter {
    opacity: 0;
    transform: scale(0);
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 500ms ease-in-out;
  }

  &.${transitionName}-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.${transitionName}-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: 500ms ease-in-out;
  }
`;

export const Alert = styled.div`
  position: absolute;
  z-index: 9;
  max-width: 600px;
  width: 90%;
  top: 10px;
  margin: 0 20px;
  background-color: white;
  border-left: 4px solid red;
  box-shadow: 0 0 10px 0 rgb(180, 180, 180);
  padding: 5px 10px 5px 60px;

  &:after {
    content: "!";
    position: absolute;
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    background-color: red;
    border-radius: 50%;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const AlertTitle = styled.h3`
  font-size: 1.1rem;
`;

export const AlertText = styled.p`
  color: grey;
  margin-top: 2px;
  font-size: 0.9rem;
`;
