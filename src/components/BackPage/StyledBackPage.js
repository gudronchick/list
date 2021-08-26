import styled from "styled-components";

export const Card = styled.div`
  width: 370px;
  min-height: 600px;
  background: rgb(70, 82, 157);
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  transform-origin: 90% 90%;
  @media screen and (max-width: 500px),
    (orientation: landscape) and (max-width: 820px) {
    width: 100%;
    height: 100%;
  }
`;
