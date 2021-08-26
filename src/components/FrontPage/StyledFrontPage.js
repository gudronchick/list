import styled from "styled-components";

export const Card = styled.div`
  width: 370px;
  min-height: 600px;
  height: 100%;
  user-select: none;
  background: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media screen and (max-width: 500px),
    (orientation: landscape) and (max-width: 820px) and (max-height: 550px) {
    width: 100%;
    min-height: 100vh;
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  padding: 20px 20px 30px 20px;
`;

export const AddButton = styled.button`
  &:before,
  &:after {
    content: "";
    position: absolute;
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 2px;
    transition: 0.2s;
  }

  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover:before {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:hover:after {
    transform: translate(-50%, -50%) rotate(180deg);
  }

  all: unset;
  width: 50px;
  height: 50px;
  line-height: 50px;
  background: rgb(46, 186, 238);
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 35px;
  box-shadow: 0px 2px 12px 0 rgba(46, 187, 238, 0.562);
`;

export const FrontTitle = styled.h1`
  color: rgb(160, 160, 160);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.8rem;
`;

export const Empty = styled.p`
  text-align: center;
  margin: 5px 0;
  font-weight: 500;
`;

export const Completed = styled.span`
  position: absolute;
  left: 20px;
  bottom: 50px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;
  color: rgb(114, 114, 114);
  user-select: none;
`;

export const CompletedNum = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  background: rgb(114, 114, 114);
  border-radius: 50%;
  color: #fff;
`;
