import React, { Component } from "react";

import * as Styles from "./styles";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ExampleActions } from "~store/ducks/example";

class Home extends Component {
  render() {
    return (
      <Styles.Container>
        <Styles.TitleContainer>
          <Styles.Title>Template criado para facilitar criação</Styles.Title>
          <Styles.Title>de novos projetos para PRTE -</Styles.Title>
          <Styles.Title>Tecnologias e Soluções</Styles.Title>
        </Styles.TitleContainer>
        <Styles.Logo
          resizeMode={"contain"}
          source={require("~/assets/img/logo.png")}
        />
      </Styles.Container>
    );
  }
}

const mapState = state => ({
  example: state.example
});
const mapActions = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(
  mapState,
  mapActions
)(Home);
