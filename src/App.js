import { connect } from "react-redux";
import * as S from "./StyledApp";
import BackPageCont from "./components/BackPage/BackPageCont";
import FrontPageCont from "./components/FrontPage/FrontPageCont";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route key="back" path="/write">
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
          <Route key="front" path="/">
            {({ match }) => (
              <>
                <CSSTransition in={match != null} timeout={500} unmountOnExit>
                  <FrontPageCont />
                </CSSTransition>
              </>
            )}
          </Route>
        </Switch>
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
