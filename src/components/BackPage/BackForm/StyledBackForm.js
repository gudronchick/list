import styled from "styled-components";

export const Item = styled.div`
  /* all: unset; */
  width: 100%;
  border-bottom: 1px solid rgba(204, 204, 204, 0.6);
  padding: 7px 0;
  margin: 10px 0;
  color: rgb(235, 235, 235);

  &::placeholder {
    color: rgb(190, 190, 190);
  }
`;

export const DropBody = styled.ul`
  position: absolute;
  bottom: calc(-100% - 23px);
  right: 0;
  left: 0;
  background: rgb(255, 255, 255);
  display: ${({ isclosed }) => (isclosed ? "none" : "")};
`;

export const DropItem = styled.li`
  padding: 2px 5px 5px 5px;
  color: rgb(5, 5, 5);

  &:hover {
    background: rgb(46, 186, 238);
    color: rgb(255, 255, 255);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgb(224, 224, 224);
  }
`;

export const Dropdown = styled(Item)`
  position: relative;
  cursor: pointer;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    border: 6px solid transparent;
    border-top: 8px solid rgba(204, 204, 204, 0.6);
    right: 0;
    top: 50%;
  }

  &:hover:after {
    border-top-color: #fff;
  }
`;

export const AddButton = styled.button`
  all: unset;
  background: rgb(46, 186, 238);
  color: #fff;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  text-align: center;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

export const FieldItem = styled.div`
  position: relative;
  z-index: 0;
`;

export const Close = styled.span`
  --close-size: 18px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(197, 197, 197, 0.486);
  fill: rgb(255, 255, 255);
  border-radius: 50%;
  width: var(--close-size);
  height: var(--close-size);
  line-height: 15px;
  text-align: center;
  cursor: pointer;
`;
