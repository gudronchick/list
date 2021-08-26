import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import BackForm from "./BackForm/BackForm";
import BackHeader from "./BackHeader/BackHeader";
import * as S from "./StyledBackPage";

const BackPage = ({ totalAmount, ...props }) => {
  const [rubricName, setRubricName] = useState("Personal");
  const history = useHistory();
  let totalRef = useRef(totalAmount);

  const createTask = (data) => {
    data.rubric = rubricName;
    props.addTask(data);
  };

  useEffect(() => {
    if (
      history.location.pathname === "/write" &&
      totalAmount !== totalRef.current
    ) {
      history.push("/");
    }
  }, [totalAmount, history]);

  return (
    <S.Card>
      <BackHeader />
      <BackForm
        rubricName={rubricName}
        setRubricName={setRubricName}
        fields={props.fields}
        onSubmit={createTask}
      />
    </S.Card>
  );
};

export default BackPage;
