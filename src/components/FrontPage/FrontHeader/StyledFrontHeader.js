import styled from "styled-components";

export const FrontHead = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  user-select: none;

  @media (orientation: landscape) and (max-width: 820px) {
    .front_head {
      height: 150px;
    }
  }
`;

export const FrontImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px 20px 15px 20px;
  opacity: 0.99;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    padding: 7px 15px 12px 15px;
  }
`;

export const FrontSection = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: flex-end;
`;

export const HeaderBottom = styled(FrontSection)`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const AmountName = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
`;

export const Amount = styled(FrontSection)`
  padding-top: 8%;
  opacity: 1;
  font-size: 1rem;
  @media (orientation: landscape) and (max-width: 820px) {
    .amount {
      padding-top: 15px;
    }
  }
`;

export const AmountItem = styled.div`
  text-align: right;
  margin-left: auto;
  padding-left: 0.8rem;
`;
export const AmountItemRight = styled(AmountItem)`
  margin-left: 0;
`;

export const Title = styled.h2`
  font-weight: 100;
  font-size: 2.3rem;
  line-height: 2.3rem;
  text-shadow: 0 0 2px rgb(90, 90, 90);
  opacity: 0.99;
  z-index: 2;
`;

export const Percent = styled.div`
  display: flex;
  align-items: center;
`;

export const Completed = styled.p`
  margin-left: 8px;
`;

export const ProgressLine = styled.div`
  position: absolute;
  width: ${(props) => props.widthStyle || 0}%;
  height: 4px;
  background: linear-gradient(to right, rgb(161, 194, 255), rgb(70, 67, 255));
  transition: 0.4s linear;
  bottom: 0;
`;

export const DoneBackground = styled.div`
  position: absolute;
  width: ${(props) => props.widthStyle || 0}%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.116);
  z-index: 0;
  transition: 0.4s linear;
`;
