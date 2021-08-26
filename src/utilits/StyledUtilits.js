import styled from "styled-components";

export const Item = styled.input`
  all: unset;
  width: 100%;
  border-bottom: 1px solid rgba(204, 204, 204, 0.6);
  padding: 7px 0;
  margin: 10px 0;
  color: rgb(235, 235, 235);

  &::placeholder {
    color: rgb(190, 190, 190);
  }
`;

export const Error = styled.span`
  color: red;
  font-weight: 500;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const ErrorLine = styled.div`
  &:after {
    content: ${({ isvalidated }) => (isvalidated ? '""' : "")};
    position: absolute;
    bottom: 10px;
    right: 0;
    left: 0;
    height: 1px;
    background: red;
    transform-origin: left center;
    transform: scaleX(0);
    animation: slideLine 0.5s ease forwards;
  }

  @keyframes slideLine {
    from {
      transform: scaleX(0);
    }
    to {
      transform: scaleX(1);
    }
  }
`;

export const Date = styled.span`
  margin-top: 5px;
  display: block;
  text-align: center;
`;

export const DateTop = styled.p`
  margin: 0 auto -5px auto;
`;

export const Center = styled.span`
  text-align: center;
  color: rgb(212, 121, 121);
`;

export const CenterBottom = styled.p`
  margin-top: -5px;
`;
