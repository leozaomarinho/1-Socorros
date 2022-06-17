import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";

interface ISymptoms {
  key: string;
  description: string;
}

interface ICauses {
  key: string;
  description: string;
}

interface ISteps {
  key: string;
  step: string;
  imagem: string;
}

export interface Props {
  title: string;
  id: string;
  description: string;
  thumbnail: string;
  symptoms: ISymptoms[];
  causes: ICauses[];
  key: string;
  steps: ISteps[];
  link: string;
}

export const Container = styled.View`
  flex: 1;

  padding: 20px 20px 0px;

  background-color: #fee7f5;
`;

export const SalutationWrapper = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const AvatarWrapper = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;

  width: 60px;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 25px;
`;

export const Name = styled.Text`
  margin-left: 10px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 10px;
`;

export const List = styled(
  FlatList as unknown as React.ComponentType<FlatListProps<Props>>
)``;
