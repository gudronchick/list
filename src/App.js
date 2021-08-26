import { connect } from "react-redux";
import * as S from "./StyledApp";
import BackPageCont from "./components/BackPage/BackPageCont";
import FrontPageCont from "./components/FrontPage/FrontPageCont";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function App({ isAlertShown }) {
  return (
    <S.Main>
      {isAlertShown && (
        <S.Alert>
          <S.AlertTitle>Error</S.AlertTitle>
          <S.AlertText>Something went wrong...</S.AlertText>
        </S.Alert>
      )}
      <S.Card>
        <Route key="front" exact path="/">
          {({ match }) => (
            <>
              <CSSTransition in={match != null} timeout={500} unmountOnExit>
                <FrontPageCont />
              </CSSTransition>
            </>
          )}
        </Route>
        <Route key="back" exact path="/write">
          {({ match }) => (
            <>
              <CSSTransition
                in={match != null}
                classNames={S.transitionName}
                timeout={500}
                unmountOnExit
              >
                <S.TransitionContainer>
                  <BackPageCont />
                </S.TransitionContainer>
              </CSSTransition>
            </>
          )}
        </Route>
      </S.Card>
    </S.Main>
  );
}

const mapStateToProps = (state) => {
  return {
    isAlertShown: state.common.isAlertShown,
  };
};

export default connect(mapStateToProps, null)(App);
