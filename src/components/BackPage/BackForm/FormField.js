import { useState } from "react";
import { change, Field } from "redux-form";
import * as S from "./StyledBackForm";
import Input from "../../../utilits/Input";

const FormField = (props) => {
  const [isFocusedMode, setIsFocused] = useState(false);

  const printFunc = (e) => {
    let valueLen = e.target.value.trim().length;
    props.setPrinted(valueLen);
  };

  const clearValue = () => {
    props.dispatch(change("addTask", props.name, ""));
    props.setPrinted(0);
    setIsFocused(true);
  };

  const focusFunc = () => {
    props.setIdFocused(props.id);
  };

  return (
    <S.FieldItem>
      <Field
        placeholder={props.placeholder}
        name={props.name}
        component={Input}
        type={props.type}
        validate={props.arrOfValidators}
        onChange={printFunc}
        isFocusedMode={isFocusedMode}
        setIsFocused={setIsFocused}
        onFocus={focusFunc}
        id={props.id}
      />
      {props.name !== "time" &&
        props.printed !== 0 &&
        props.idFocused === props.id && (
          <S.Close onClick={clearValue}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 24 24"
            >
              <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
            </svg>
          </S.Close>
        )}
    </S.FieldItem>
  );
};

export default FormField;
