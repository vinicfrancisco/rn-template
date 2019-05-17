import styled from "styled-components/native";
import { colors, normalize } from "~assets/styles";

export const Container = styled.View`
  background-color: ${colors.black};
  flex: 1;
  justify-content: space-around;
`;

export const TitleContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${normalize.font(20)};
  font-weight: bold;
  margin-bottom: 20;
  color: ${colors.text};
  padding-left: 10;
  padding-right: 10;
  align-self: center;
`;

export const Logo = styled.Image`
  width: 250;
  height: 250;
  margin-right: 10;
  align-self: center;
`;
