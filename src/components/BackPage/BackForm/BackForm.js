import React, { useMemo, useState } from "react";
import { reduxForm, reset } from "redux-form";
import * as S from "./StyledBackForm";
import Dropdown from "./Dropdown";
import FormField from "./FormField";

let BackForm = ({ fields, dispatch, ...props }) => {
  const [isClosed, setIsClosed] = useState(true);
  const [idFocused, setIdFocused] = useState(-1);
  const [printed, setPrinted] = useState(0);

  const toggleIsClosed = () => {
    setIsClosed((prev) => !prev);
  };

  const sendData = (e) => {
    e.preventDefault();
    props.handleSubmit();
    setPrinted(0);
  };

  const fieldsArr = useMemo(() => {
    return fields.map((field) => {
      return (
        <FormField
          {...field}
          key={field.id}
          dispatch={dispatch}
          idFocused={idFocused}
          setIdFocused={setIdFocused}
          printed={printed}
          setPrinted={setPrinted}
        />
      );
    });
  }, [fields, dispatch, idFocused, printed]);

  return (
    <form onSubmit={sendData} autoComplete="off">
      <S.Dropdown onClick={toggleIsClosed}>
        <div>{props.rubricName}</div>
        <S.DropBody isclosed={Number(isClosed)}>
          <Dropdown title="Personal" setRubricName={props.setRubricName} />
          <Dropdown title="Business" setRubricName={props.setRubricName} />
        </S.DropBody>
      </S.Dropdown>
      {fieldsArr}
      <S.AddButton>Add your thing</S.AddButton>
    </form>
  );
};

export const afterSubmit = (_, dispatch) => dispatch(reset("addTask"));

BackForm = reduxForm({ form: "addTask", onSubmitSuccess: afterSubmit })(
  BackForm
);
export default BackForm;
