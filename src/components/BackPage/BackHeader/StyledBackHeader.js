import styled from "styled-components";

export const Main = styled.div`
  & svg {
    fill: rgb(64, 178, 219);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-weight: 400;
  color: #fff;
`;

export const BackButton = styled.div`
  padding: 3px;
  cursor: pointer;
`;

export const TitleIcon = styled.div`
  width: 55px;
  height: 55px;
  line-height: 60px;
  text-align: center;
  border: 2px solid rgb(126, 165, 190);
  border-radius: 50%;
  margin: 20px auto 40px;
`;
