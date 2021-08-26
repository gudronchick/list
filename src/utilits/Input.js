import React, { useEffect, useRef } from "react";
import * as S from "./StyledUtilits";

const Input = ({
  type,
  placeholder,
  id,
  isFocusedMode,
  setIsFocused,
  ...props
}) => {
  const checkStr = props.meta.invalid && props.meta.touched;
  const fieldRef = useRef();
  useEffect(() => {
    if (isFocusedMode) {
      fieldRef.current.focus();
      setIsFocused(false);
    } else if (id === 0) {
      fieldRef.current.focus();
    }
  }, [isFocusedMode, id, setIsFocused]);

  return (
    <>
      <S.ErrorLine isvalidated={Number(checkStr)}>
        <S.Item
          type={type}
          {...props.input}
          placeholder={placeholder}
          ref={fieldRef}
        />
      </S.ErrorLine>
      {checkStr && <S.Error>{props.meta.error}</S.Error>}
    </>
  );
};

export default Input;
