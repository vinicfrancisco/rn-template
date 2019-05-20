import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container, TitleContainer, Title, Logo,
} from './styles';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ExampleActions } from '~store/ducks/example';

const Home = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <TitleContainer>
      <Title>Template criado para facilitar a</Title>
      <Title>criação de novos projetos para</Title>
      <Title>PRTE - Tecnologias e Soluções</Title>
    </TitleContainer>
    <Logo resizeMode="contain" source={require('~/assets/img/logo.png')} />
  </Container>
);

const mapState = state => ({
  example: state.example,
});
const mapActions = dispatch => bindActionCreators(ExampleActions, dispatch);

export default connect(
  mapState,
  mapActions,
)(Home);
