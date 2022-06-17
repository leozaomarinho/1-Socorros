import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  height: 70px;
  width: 100%;
  padding: 0 20px;

  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 100%;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: #ff5555;

  border-radius: 3px;
`;

export const Icon = styled(AntDesign)`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;

  color: #f8f8f2;
`;
